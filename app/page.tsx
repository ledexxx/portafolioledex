"use client"
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[100dvh] md:min-h-[calc(100dvh-var(--header-h-desktop))] h-full">
        <Introduction />
      </div>
    </main>
  );
}
