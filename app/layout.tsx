import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import Image from "next/image";
import "@/styles/globals.css";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";

const fontRethink = Rethink_Sans({
    subsets: ["latin"],
    variable: "--font-rethink",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://docs.betterswap.io"),
    title: {
        default: "Documentation | BetterSwap",
        template: "%s | BetterSwap Docs",
    },
    description: "Learn how to use BetterSwap — the VeChain DEX aggregator.",
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${fontRethink.variable} antialiased`}>
                <div className="relative flex min-h-dvh flex-col">
                    {/* Header */}
                    <header className="sticky top-0 z-50 border-b border-white/5 bg-[hsl(220_43%_3%)] backdrop-blur-xl">
                        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 lg:px-8">
                            <a href="/" className="flex items-center gap-3">
                                <Image src="/logo.png" alt="BetterSwap" width={32} height={32} className="shrink-0" />
                                <span className="text-base font-semibold tracking-wide text-white">
                                    BetterSwap
                                </span>
                                <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-white/40">Docs</span>
                            </a>
                            <a
                                href="https://betterswap.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white/40 transition-colors hover:text-white/70"
                            >
                                Launch BetterSwap App →
                            </a>
                        </div>
                    </header>

                    {/* Body: sidebar + content */}
                    <div className="mx-auto flex w-full max-w-6xl flex-1 gap-0 px-4 lg:px-8">
                        {/* Desktop sidebar */}
                        <aside className="hidden w-56 shrink-0 py-8 pr-8 lg:block">
                            <div className="sticky top-20">
                                <Sidebar />
                            </div>
                        </aside>

                        {/* Main content (includes mobile nav on top) */}
                        <main className="min-w-0 flex-1 py-6 lg:py-8">
                            {/* Mobile TOC */}
                            <div className="mb-4 lg:hidden">
                                <MobileNav />
                            </div>
                            {children}
                        </main>
                    </div>

                    {/* Footer */}
                    <footer className="border-t border-white/5 py-6">
                        <div className="mx-auto max-w-6xl px-4 lg:px-8">
                            <p className="text-center text-xs text-white/30">
                                © {new Date().getFullYear()} The Better Collective. All rights reserved.
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
