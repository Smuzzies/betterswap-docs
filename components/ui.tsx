import Image from "next/image";
import Link from "next/link";

export const Hint = ({ type, children }: { type: "info" | "warning" | "danger" | "success"; children: React.ReactNode }) => {
    const accent = {
        info: "bg-[hsl(221_85%_45%/0.7)]",
        warning: "bg-[hsl(33_89%_48%/0.7)]",
        danger: "bg-[hsl(0_85%_45%/0.7)]",
        success: "bg-[hsl(98_49%_51%/0.7)]",
    };
    return (
        <div className="gradient-border-r relative my-4 flex gap-3 rounded-xl bg-glass-effect-gradient px-4 py-3 backdrop-blur-xl">
            <div className={`mt-0.5 w-0.5 shrink-0 self-stretch rounded-full ${accent[type]}`} />
            <p className="text-sm text-white/60">{children}</p>
        </div>
    );
};

export const Step = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
    <div className="flex gap-4">
        <div className="flex shrink-0 flex-col items-center">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-soft text-xs font-bold text-white/70 ring-1 ring-white/10">{n}</div>
            <div className="mt-1 w-px flex-1 bg-white/5" />
        </div>
        <div className="pb-6">
            <p className="mb-1 font-semibold text-white">{title}</p>
            <div className="text-sm text-white/60">{children}</div>
        </div>
    </div>
);

export const PageTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="flex flex-col gap-2 border-b border-white/5 pb-8">
        <h1 className="text-3xl font-semibold text-white lg:text-4xl">{title}</h1>
        {subtitle && <p className="text-base leading-relaxed text-white/50">{subtitle}</p>}
    </div>
);

export const SectionHeading = ({ id, label }: { id: string; label: string }) => (
    <h2 id={id} className="scroll-mt-20 text-xl font-semibold text-white/90 lg:text-2xl">{label}</h2>
);

export const SubHeading = ({ id, label }: { id: string; label: string }) => (
    <h3 id={id} className="scroll-mt-20 text-base font-semibold text-white/80 lg:text-lg">{label}</h3>
);

export const DocImage = ({ src, alt, caption, maxW = "max-w-2xl" }: { src: string; alt: string; caption?: string; maxW?: string }) => (
    <figure className={`my-4 overflow-hidden rounded-2xl border border-white/5 bg-soft ${maxW}`}>
        <Image src={src} alt={alt} width={1200} height={750} className="w-full object-contain" unoptimized />
        {caption && <figcaption className="px-4 py-2 text-center text-xs text-white/40">{caption}</figcaption>}
    </figure>
);

export const TokenAddress = ({ symbol, address, url }: { symbol: string; address: string; url: string }) => (
    <li className="flex flex-wrap items-center gap-2 text-sm">
        <span className="rounded bg-soft px-2 py-0.5 font-mono font-semibold text-white">{symbol}</span>
        <Link href={url} target="_blank" className="break-all font-mono text-xs text-white/40 transition-colors hover:text-white/70">{address}</Link>
    </li>
);

export const TipsList = ({ tips }: { tips: { title: string; items: string[] }[] }) => (
    <div className="gradient-border-r relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl">
        <p className="mb-3 text-sm font-semibold text-white/70">Tips</p>
        <div className="flex flex-col gap-3">
            {tips.map((t) => (
                <div key={t.title}>
                    <p className="text-sm font-medium text-white/70">{t.title}</p>
                    <ul className="mt-1 flex flex-col gap-1">
                        {t.items.map((item, i) => <li key={i} className="text-sm text-white/50">• {item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export const Card = ({ label, desc, gradient }: { label: string; desc: string; gradient?: string }) => (
    <div className="gradient-border-l relative flex flex-col gap-1 rounded-xl bg-glass-effect-gradient p-3 backdrop-blur-xl">
        <p className={`text-sm font-semibold ${gradient ? `text-transparent ${gradient}` : "text-white/80"}`}>{label}</p>
        <p className="text-xs text-white/50">{desc}</p>
    </div>
);
