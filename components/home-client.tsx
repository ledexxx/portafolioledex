// components/home-client.tsx
"use client"
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function HomeClient() {
    return (
        <main>
            <div className="flex min-h-[100dvh] md:min-h-[calc(100dvh-var(--header-h-desktop))] h-full">
                <TransitionPage />
                <Introduction />
            </div>
        </main>
    );
}