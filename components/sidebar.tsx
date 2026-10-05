import { navSections } from "./nav";

export function Sidebar({ route }: { route: string }) {
    return (
        <nav className="flex flex-col gap-0.5" aria-label="Documentation">
            {navSections.map((section, i) => (
                <div key={section.group}>
                    {i > 0 && <hr className="my-3 border-white/5" />}
                    <p className="mb-1 mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                        {section.group}
                    </p>
                    {section.items.map((item) => {
                        const active = route === item.href;
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                aria-current={active ? "page" : undefined}
                                className={`block rounded-full border px-3 py-1.5 text-sm transition-colors ${
                                    active
                                        ? "border-white/10 bg-white/[0.05] font-medium text-white"
                                        : "border-transparent text-white/60 hover:text-white"
                                }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>
            ))}
        </nav>
    );
}
