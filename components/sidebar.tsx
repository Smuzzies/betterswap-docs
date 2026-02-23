"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navSections } from "./nav";

export function Sidebar() {
    const pathname = usePathname();
    return (
        <nav className="flex flex-col gap-0.5">
            {navSections.map((section, i) => (
                <div key={section.group}>
                    {i > 0 && <hr className="my-3 border-white/5" />}
                    <p className="mb-1 mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                        {section.group}
                    </p>
                    {section.items.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block rounded-lg px-3 py-1.5 text-sm transition-colors ${
                                    active
                                        ? "bg-white/[0.08] font-medium text-white"
                                        : "text-white/60 hover:text-white"
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            ))}
        </nav>
    );
}
