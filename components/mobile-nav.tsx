"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navSections } from "./nav";

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    const drawer = (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <div
                className={`fixed inset-0 z-[60] flex flex-col bg-background transition-transform duration-200 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Drawer header */}
                <div className="flex h-14 items-center justify-between border-b border-white/5 px-4">
                    <span className="text-sm font-semibold text-white">Navigation</span>
                    <button
                        onClick={() => setOpen(false)}
                        className="flex size-8 items-center justify-center rounded-lg text-white/60 transition-colors hover:text-white"
                        aria-label="Close menu"
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <line x1="4" y1="4" x2="14" y2="14" />
                            <line x1="14" y1="4" x2="4" y2="14" />
                        </svg>
                    </button>
                </div>

                {/* Nav items */}
                <nav className="flex-1 overflow-y-auto p-4">
                    <div className="flex flex-col gap-0.5">
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
                    </div>
                </nav>
            </div>
        </>
    );

    return (
        <>
            {/* Hamburger button */}
            <button
                onClick={() => setOpen(true)}
                className="flex size-8 items-center justify-center rounded-lg text-white/60 transition-colors hover:text-white lg:hidden"
                aria-label="Open menu"
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="3" y1="5" x2="17" y2="5" />
                    <line x1="3" y1="10" x2="17" y2="10" />
                    <line x1="3" y1="15" x2="17" y2="15" />
                </svg>
            </button>

            {mounted && createPortal(drawer, document.body)}
        </>
    );
}
