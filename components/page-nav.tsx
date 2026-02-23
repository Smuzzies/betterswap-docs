import Link from "next/link";
import { navSections } from "./nav";

const allPages = navSections.flatMap((s) => s.items);

export function PageNav({ href }: { href: string }) {
    const idx = allPages.findIndex((p) => p.href === href);
    const prev = idx > 0 ? allPages[idx - 1] : null;
    const next = idx < allPages.length - 1 ? allPages[idx + 1] : null;

    return (
        <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-6">
            {prev ? (
                <Link href={prev.href} className="group flex flex-col gap-0.5">
                    <span className="text-xs text-white/40">Previous</span>
                    <span className="text-sm text-white/70 transition-colors group-hover:text-white">← {prev.label}</span>
                </Link>
            ) : <div />}
            {next ? (
                <Link href={next.href} className="group flex flex-col items-end gap-0.5">
                    <span className="text-xs text-white/40">Next</span>
                    <span className="text-sm text-white/70 transition-colors group-hover:text-white">{next.label} →</span>
                </Link>
            ) : <div />}
        </div>
    );
}
