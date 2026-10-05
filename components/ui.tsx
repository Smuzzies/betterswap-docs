export const Hint = ({ type, children }: { type: "info" | "warning" | "danger" | "success"; children: React.ReactNode }) => {
    const accent = {
        info: "bg-primary",
        warning: "bg-warning",
        danger: "bg-error",
        success: "bg-success",
    };
    return (
        <div className="panel my-4 flex gap-3 rounded-2xl px-4 py-3">
            <div className={`w-1 shrink-0 self-stretch rounded-full ${accent[type]}`} />
            <p className="text-sm leading-relaxed text-white/70 lg:text-base">{children}</p>
        </div>
    );
};

export const Step = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
    <div className="flex gap-4">
        <div className="flex shrink-0 flex-col items-center">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-soft text-xs font-bold text-white/80">{n}</div>
            <div className="w-px flex-1 bg-white/10" />
        </div>
        <div className="pb-6">
            <p className="mb-1 font-semibold text-white">{title}</p>
            <div className="text-sm leading-relaxed text-white/70 lg:text-base">{children}</div>
        </div>
    </div>
);

export const PageTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="flex flex-col gap-3 border-b border-white/5 pb-8">
        <h1 className="title-gradient text-3xl font-semibold tracking-tight lg:text-4xl">{title}</h1>
        {subtitle && <p className="text-base leading-relaxed text-white/60 lg:text-lg">{subtitle}</p>}
    </div>
);

export const SectionHeading = ({ id, label }: { id: string; label: string }) => (
    <h2 id={id} className="scroll-mt-24 text-xl font-semibold text-white lg:text-2xl">
        <a href={`#${id}`} className="hover:text-white/80">{label}</a>
    </h2>
);

export const SubHeading = ({ id, label }: { id: string; label: string }) => (
    <h3 id={id} className="scroll-mt-24 text-base font-semibold tracking-tight text-white/90 lg:text-lg">{label}</h3>
);

export const DocImage = ({ src, alt, caption, maxW = "max-w-2xl" }: { src: string; alt: string; caption?: string; maxW?: string }) => (
    <figure className={`panel my-4 overflow-hidden rounded-2xl ${maxW}`}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full object-contain" />
        {caption && <figcaption className="px-4 py-2 text-center text-xs text-white/50">{caption}</figcaption>}
    </figure>
);

export const DocVideo = ({ src, caption, maxW = "max-w-2xl" }: { src: string; caption?: string; maxW?: string }) => (
    <figure className={`panel my-4 overflow-hidden rounded-2xl ${maxW}`}>
        <video src={src} autoPlay loop muted playsInline preload="metadata" className="w-full object-contain" />
        {caption && <figcaption className="px-4 py-2 text-center text-xs text-white/50">{caption}</figcaption>}
    </figure>
);

export const TokenAddress = ({ symbol, address, url }: { symbol: string; address: string; url: string }) => (
    <li className="flex flex-wrap items-center gap-2 text-sm lg:text-base">
        <span className="rounded-full border border-white/10 bg-soft px-2.5 py-0.5 font-mono text-sm font-semibold text-white">{symbol}</span>
        <a href={url} target="_blank" rel="noopener noreferrer" className="break-all font-mono text-xs text-white/50 transition-colors hover:text-white/70">{address}</a>
    </li>
);

export const TipsList = ({ tips }: { tips: { title: string; items: string[] }[] }) => (
    <div className="panel rounded-2xl p-4">
        <p className="mb-3 text-sm font-semibold text-primary-light">Tips</p>
        <div className="flex flex-col gap-3">
            {tips.map((t) => (
                <div key={t.title}>
                    <p className="text-sm font-medium text-white/80 lg:text-base">{t.title}</p>
                    <ul className="mt-1 flex flex-col gap-1 pl-4">
                        {t.items.map((item, i) => <li key={i} className="list-disc text-sm leading-relaxed text-white/60 lg:text-base">{item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export const Card = ({ label, desc, gradient }: { label: string; desc: string; gradient?: string }) => (
    <div className="panel flex h-full flex-col gap-1 rounded-2xl p-4 transition-colors hover:border-white/15">
        <p className={`text-sm font-semibold ${gradient ? `text-transparent ${gradient}` : "text-white/80"}`}>{label}</p>
        <p className="text-sm text-white/60">{desc}</p>
    </div>
);

export const Stat = ({ value, label }: { value: string; label: string }) => (
    <div className="panel flex flex-col gap-1 rounded-2xl p-4">
        <p className="text-2xl font-semibold text-white">{value}</p>
        <p className="text-sm text-white/60">{label}</p>
    </div>
);
