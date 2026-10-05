import { site } from "@/lib/page";
import { Sidebar } from "./sidebar";
import { MobileNavDrawer, MobileNavToggle } from "./mobile-nav";

type LayoutProps = {
    route: string;
    title?: string;
    description?: string;
    css: string;
    children: React.ReactNode;
};

export function Layout({ route, title, description, css, children }: LayoutProps) {
    const fullTitle = title ? `${title} | ${site.name}` : site.defaultTitle;
    const desc = description ?? site.description;
    const canonical = `${site.url}${route}`;

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{fullTitle}</title>
                <meta name="description" content={desc} />
                <meta name="theme-color" content="#04060a" />
                <link rel="canonical" href={canonical} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={site.name} />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={desc} />
                <meta property="og:url" content={canonical} />
                <link rel="icon" href="/logo.webp" type="image/webp" />
                <link rel="preload" href="/fonts/rethink-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="stylesheet" href={css} />
            </head>
            <body className="antialiased">
                <input id="nav-toggle" type="checkbox" className="peer sr-only" aria-hidden="true" tabIndex={-1} />
                <MobileNavDrawer route={route} />

                <div className="page-glow" aria-hidden="true" />

                <div className="relative flex min-h-dvh flex-col">
                    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
                        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 lg:px-8">
                            <div className="flex items-center gap-2">
                                <MobileNavToggle />
                                <a href="/introduction" className="flex items-center gap-2.5">
                                    <img src="/logo.webp" alt="" width={28} height={28} className="shrink-0" />
                                    <span className="text-lg font-semibold text-white">BetterSwap</span>
                                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/60">Docs</span>
                                </a>
                            </div>
                            <a href="https://www.betterswap.io" target="_blank" rel="noopener noreferrer" className="btn-glow shrink-0 rounded-full px-4 py-2 text-sm font-semibold text-white">
                                <span className="sm:hidden">Launch App</span>
                                <span className="hidden sm:inline">Launch BetterSwap</span>
                            </a>
                        </div>
                    </header>

                    <div className="mx-auto flex w-full max-w-6xl flex-1 px-4 lg:px-8">
                        <aside className="hidden w-56 shrink-0 py-8 pr-8 lg:block">
                            <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto">
                                <Sidebar route={route} />
                            </div>
                        </aside>
                        <main className="min-w-0 max-w-3xl flex-1 py-8 lg:py-10">{children}</main>
                    </div>

                    <footer className="border-t border-white/5 py-6">
                        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs text-white/40 sm:flex-row lg:px-8">
                            <p>© {new Date().getFullYear()} The Better Collective. All rights reserved.</p>
                            <nav className="flex gap-4">
                                <a href="/privacy" className="hover:text-white/70">Privacy</a>
                                <a href="https://www.betterswap.io" className="hover:text-white/70">betterswap.io</a>
                            </nav>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
