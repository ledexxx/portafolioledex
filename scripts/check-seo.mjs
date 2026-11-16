import assert from "node:assert/strict";

const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";
const canonicalBase = "https://www.ledexcorp.site";
const routes = ["/", "/about-me", "/services", "/portfolio", "/portfolio/auditoria-seo"];
const titles = new Set();
for (const path of routes) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one H1`);
  assert.equal((html.match(/<main(?:\s|>)/g) || []).length, 1, `${path}: one main`);
  assert.ok(html.includes(`rel="canonical" href="${canonicalBase}${path === "/" ? "" : path}"`), `${path}: canonical`);
  assert.ok(html.includes('name="description"'), `${path}: description`);
  assert.ok(!/<a\b[^>]*href="#"/.test(html), `${path}: no empty links`);
  assert.ok(!/<script\b[^>]*src="https:\/\/www.googletagmanager.com/.test(html), `${path}: no analytics before consent`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `${path}: unique title`);
  titles.add(title);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
  console.log(`PASS ${path}: SSR, headings, canonical, metadata, JSON-LD, consent`);
}
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(urls.sort(), routes.map(path => canonicalBase + (path === "/" ? "" : path)).sort());
for (const [from, to] of [["/sobre-mi", "/about-me"], ["/servicios", "/services"], ["/portafolio", "/portfolio"]]) {
  const response = await fetch(base + from, { redirect: "manual" });
  assert.equal(response.status, 308);
  assert.equal(new URL(response.headers.get("location"), base).pathname, to);
}
for (const path of ["/opengraph-image.png", "/downloable/cv_espa%C3%B1ol.pdf", "/downloable/cv_english.pdf", "/robots.txt"]) {
  assert.equal((await fetch(base + path)).status, 200, path);
}
assert.equal((await fetch(base + "/pagina-inexistente-prueba")).status, 404);
console.log("PASS sitemap, permanent redirects, social image, CVs, robots and 404");
