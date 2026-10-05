import { navSections } from "./nav";

const allPages = navSections.flatMap((s) => s.items);

export function PageNav({ href }: { href: string }) {
    const idx = allPages.findIndex((p) => p.href === href);
    const prev = idx > 0 ? allPages[idx - 1] : null;
    const next = idx < allPages.length - 1 ? allPages[idx + 1] : null;

    return (
        <div className="mt-12 grid grid-cols-2 gap-3 border-t border-white/5 pt-6">
            {prev ? (
                <a href={prev.href} className="panel group flex flex-col gap-0.5 rounded-2xl px-4 py-3 transition-colors hover:border-white/15">
                    <span className="text-xs text-white/40">Previous</span>
                    <span className="text-sm text-white/70 transition-colors group-hover:text-white">← {prev.label}</span>
                </a>
            ) : <div />}
            {next ? (
                <a href={next.href} className="panel group flex flex-col items-end gap-0.5 rounded-2xl px-4 py-3 text-right transition-colors hover:border-white/15">
                    <span className="text-xs text-white/40">Next</span>
                    <span className="text-sm text-white/70 transition-colors group-hover:text-white">{next.label} →</span>
                </a>
            ) : <div />}
        </div>
    );
}
