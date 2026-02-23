"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navSections } from "./nav";

export function MobileNav() {
    const pathname = usePathname();
    const current = navSections.flatMap((s) => s.items).find((i) => i.href === pathname);

    return (
        <details className="gradient-border-r relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl lg:hidden">
            <summary className="cursor-pointer text-sm font-semibold text-white/70">
                {current ? current.label : "Navigation"}
            </summary>
            <nav className="mt-3 flex flex-col gap-0.5">
                {navSections.map((section) => (
                    <div key={section.group}>
                        <p className="mb-0.5 mt-3 px-2 text-xs font-semibold uppercase tracking-wider text-white/30 first:mt-0">
                            {section.group}
                        </p>
                        {section.items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block rounded-lg px-2 py-1 text-sm transition-colors ${
                                    pathname === item.href ? "text-white" : "text-white/60 hover:text-white"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>
        </details>
    );
}
