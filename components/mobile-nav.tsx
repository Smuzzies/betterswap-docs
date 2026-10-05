import { Sidebar } from "./sidebar";

// CSS-only drawer: the #nav-toggle checkbox (rendered first in <body>) drives it via peer-checked,
// so the site ships no JavaScript.
export function MobileNavToggle() {
    return (
        <label
            htmlFor="nav-toggle"
            className="flex size-9 cursor-pointer items-center justify-center rounded-full text-white/60 transition-colors hover:text-white lg:hidden"
            aria-label="Open menu"
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="14" x2="17" y2="14" />
            </svg>
        </label>
    );
}

export function MobileNavDrawer({ route }: { route: string }) {
    return (
        <>
            <label
                htmlFor="nav-toggle"
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-[60] bg-black/60 opacity-0 transition-opacity duration-200 peer-checked:pointer-events-auto peer-checked:opacity-100 lg:hidden"
            />
            <div className="fixed inset-y-0 left-0 z-[61] flex w-[85%] max-w-xs -translate-x-full flex-col border-r border-white/5 bg-background transition-transform duration-200 ease-out peer-checked:translate-x-0 lg:hidden">
                <div className="flex h-16 items-center justify-between border-b border-white/5 px-4">
                    <span className="text-sm font-semibold text-white">Navigation</span>
                    <label
                        htmlFor="nav-toggle"
                        className="flex size-9 cursor-pointer items-center justify-center rounded-full text-white/60 transition-colors hover:text-white"
                        aria-label="Close menu"
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                            <line x1="4" y1="4" x2="14" y2="14" />
                            <line x1="14" y1="4" x2="4" y2="14" />
                        </svg>
                    </label>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    <Sidebar route={route} />
                </div>
            </div>
        </>
    );
}
