import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle, SectionHeading } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Our Team",
    description: "Meet the Better Collective — seven individuals united to elevate the VeChain Ecosystem.",
};

const team = [
    {
        name: "DΛTΛ",
        handle: "@DataB4Dishonor",
        url: "https://x.com/DataB4Dishonor",
        roles: ["Smart Contracts", "Full Stack"],
        img: "/docs/team-data.webp",
    },
    {
        name: "Milos",
        handle: "@crypto_milos",
        url: "https://x.com/crypto_milos",
        roles: ["Frontend Wizard", "Full Stack"],
        img: "/docs/team-milos.webp",
    },
    {
        name: "Stodiana",
        handle: "@crypto_scale0",
        url: "https://x.com/crypto_scale0",
        roles: ["Master of Bots", "Full Stack"],
        img: "/docs/team-stodiana.webp",
    },
    {
        name: "TheSmuz",
        handle: "@Smuzzies_NFT",
        url: "https://x.com/Smuzzies_NFT",
        roles: ["CEO", "Director of AI"],
        img: "/docs/team-smuz.webp",
    },
    {
        name: "Mr.Proper",
        handle: "@mrprope84155368",
        url: "https://x.com/mrprope84155368",
        roles: ["Smart Contracts", "Full Stack"],
        img: "/docs/team-proper.webp",
    },
    {
        name: "Dripsha",
        handle: "@BeardCatDrip",
        url: "https://x.com/BeardCatDrip",
        roles: ["Art Director", "House Cat"],
        img: "/docs/team-dripsha.webp",
    },
    {
        name: "Maik",
        handle: "@VetMaik",
        url: "https://x.com/VetMaik",
        roles: ["Product Management", "Relation Management", "CFO"],
        img: "/docs/team-maik.webp",
    },
];

export default function OurTeamPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="Our Team"
                subtitle="Meet The Better Collective — a dedicated team of seven individuals united by their talents and skills to elevate the VeChain Ecosystem."
            />

            <section className="flex flex-col gap-4">
                <SectionHeading id="introduction" label="Introduction" />
                <p className="text-sm leading-relaxed text-white/60">
                    The Better Collective's mission is to develop innovative tools, applications, and DeFi solutions while ensuring the process is engaging and enjoyable.
                </p>
            </section>

            <section className="flex flex-col gap-4">
                <SectionHeading id="strategic-focus" label="Our Strategic Focus" />
                <ul className="flex flex-col gap-2 text-sm text-white/60">
                    <li>
                        <strong className="text-white/80">Application Development</strong> — Creating pioneering decentralized applications for real-world challenges
                    </li>
                    <li>
                        <strong className="text-white/80">DeFi Innovation</strong> — Designing intuitive financial solutions that simplify blockchain interactions
                    </li>
                    <li>
                        <strong className="text-white/80">Ecosystem Tools</strong> — Developing robust infrastructure to empower the VeChain community
                    </li>
                </ul>
                <p className="text-sm leading-relaxed text-white/60">
                    Our multidisciplinary team combines diverse technical expertise with shared vision to create solutions that are both technically sound and user-focused. We remain committed to supporting VeChain's growth through thoughtful innovation and community engagement.
                </p>
            </section>

            <section className="flex flex-col gap-4">
                <SectionHeading id="members" label="The Team" />
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {team.map((member) => (
                        <Link
                            key={member.name}
                            href={member.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gradient-border-l group relative flex flex-col overflow-hidden rounded-2xl bg-glass-effect-gradient backdrop-blur-xl transition-opacity hover:opacity-80"
                        >
                            <div className="aspect-square w-full overflow-hidden bg-soft">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    width={400}
                                    height={400}
                                    className="h-full w-full object-cover"
                                    unoptimized
                                />
                            </div>
                            <div className="flex flex-col gap-1 p-3">
                                <p className="text-sm font-semibold text-white">{member.name}</p>
                                <p className="text-xs text-white/40">{member.handle}</p>
                                <div className="mt-1 flex flex-wrap gap-1">
                                    {member.roles.map((role) => (
                                        <span
                                            key={role}
                                            className="rounded-full bg-soft px-2 py-0.5 text-xs text-white/50"
                                        >
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <PageNav href="/our-team" />
        </div>
    );
}
