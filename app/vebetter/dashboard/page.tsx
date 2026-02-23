import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, SectionHeading, Hint } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "VeBetter Dashboard",
    description: "Vote on sustainability initiatives, manage Pool2Earn liquidity, swap ecosystem tokens, and claim rewards from VeBetterDAO — all within BetterSwap.",
};

const tabs = [
    {
        name: "Vote Now",
        id: "vote-now",
        gradient: "heading-gradient-vebetter",
        desc: "Enables users to allocate voting percentages to eligible VeBetterDAO dApps. Displays a list of available sustainability applications seeking support and provides an interface for distributing your voting power across multiple dApps. Also displays the dApps' expected weekly allocation from the current round's votes.",
    },
    {
        name: "Liquidity",
        id: "liquidity",
        gradient: "heading-gradient-pools",
        desc: "Interface for managing Pool2Earn liquidity positions. Displays your current liquidity in the Pool2Earn B3TR/VET pool and provides options to add or remove liquidity from Pool2Earn.",
    },
    {
        name: "Tokens",
        id: "tokens",
        gradient: "heading-gradient-trade",
        desc: "Allows 1:1 swapping between $B3TR and $VOT3 tokens. $B3TR tokens serve as the reward token in the ecosystem, while $VOT3 tokens function as the governance token for VeBetterDAO. Displays current token balances and exchange information.",
    },
    {
        name: "Rewards",
        id: "rewards",
        gradient: "heading-gradient-vebetter",
        desc: "Interface for claiming weekly voting/snapshot rewards from VeBetterDAO. Shows available rewards from your voting participation, displays estimated pending rewards for the current round, and provides claim functionality for transferring rewards to your wallet.",
    },
];

export default function VeBetterDashboardPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="VeBetter Dashboard"
                subtitle="Vote, earn B3TR, manage Pool2Earn liquidity, and claim VeBetterDAO rewards — all in one place."
            />

            <p className="text-sm leading-relaxed text-white/60">
                The VeBetter section of <strong className="text-white/80">BetterSwap</strong> serves as an interface for participating in the VeBetterDAO ecosystem. This dashboard allows you to vote on sustainability initiatives, manage liquidity, swap ecosystem tokens, and claim rewards — all within BetterSwap's familiar environment. The dashboard features a real-time weekly snapshot countdown timer for VeBetterDAO rounds.
            </p>

            {/* Tabs */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="tabs" label="VeBetter Tabs and Functions" />
                <div className="flex flex-col gap-3">
                    {tabs.map((tab) => (
                        <div key={tab.id} id={tab.id} className="gradient-border-l relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl">
                            <p className={`text-base font-semibold text-transparent bg-clip-text ${tab.gradient}`}>{tab.name}</p>
                            <p className="mt-2 text-sm leading-relaxed text-white/60">{tab.desc}</p>
                        </div>
                    ))}
                </div>
                <Hint type="success">
                    <strong className="text-white/80">Optional: Add to Cart</strong> — Batch your VeBetter actions (liquidity, token swaps, reward claims) with other transactions using the shopping cart.{" "}
                    <Link href="/features/shopping-cart" className="underline underline-offset-2 hover:text-white/80">Learn more →</Link>
                </Hint>
            </section>

            {/* Pool2Earn cross-link */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="pool2earn" label="Pool2Earn" />
                <p className="text-sm leading-relaxed text-white/60">
                    The Liquidity tab on the VeBetter Dashboard is the home of Pool2Earn — BetterSwap's program for earning B3TR rewards by providing liquidity to the B3TR/VET pair.
                </p>
                <Link
                    href="/features/pool2earn"
                    className="gradient-border-r relative inline-flex w-fit items-center gap-2 rounded-xl bg-glass-effect-gradient px-4 py-2.5 text-sm font-semibold text-white/70 backdrop-blur-xl transition-colors hover:text-white"
                >
                    Learn about Pool2Earn →
                </Link>
            </section>

            {/* VeBetterDAO cross-link */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="vebetterdao" label="More about VeBetterDAO" />
                <p className="text-sm leading-relaxed text-white/60">
                    For more information about VeBetterDAO's voter rewards system, read the official VeBetterDAO documentation.
                </p>
                <a
                    href="https://docs.vebetterdao.org/vebetterdao/voter-rewards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-border-r relative inline-flex w-fit items-center gap-2 rounded-xl bg-glass-effect-gradient px-4 py-2.5 text-sm font-semibold text-white/70 backdrop-blur-xl transition-colors hover:text-white"
                >
                    VeBetterDAO Voter Rewards ↗
                </a>
            </section>

            <PageNav href="/vebetter/dashboard" />
        </div>
    );
}
