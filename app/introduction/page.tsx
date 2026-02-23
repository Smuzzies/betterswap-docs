import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, SectionHeading, Card } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Introduction",
    description: "Welcome to the BetterSwap documentation portal — your gateway to an innovative trading experience on VeChainThor.",
};

export default function IntroductionPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="Introduction"
                subtitle="Welcome to the BetterSwap documentation portal — your gateway to an innovative trading experience on the VeChainThor Blockchain."
            />

            <div className="flex flex-col gap-4 text-sm leading-relaxed text-white/70 lg:text-base">
                <p>
                    <strong className="text-white/80">BetterSwap</strong> is a cutting-edge decentralized exchange (<strong className="text-white/80">DEX</strong>) designed to elevate your trading on the <strong className="text-white/80">VeChainThor</strong> ecosystem. Our powerful aggregation protocol connects to multiple decentralized exchanges on VeChain, helping you discover optimal exchange rates for every transaction.
                </p>
                <p>
                    By tapping into our extensive liquidity network, you gain access to a broader marketplace through a single, streamlined interface — potentially unlocking better price execution and minimizing slippage on your trades.
                </p>
                <p className="font-semibold text-white/80">Trade Smart. Trade Better.</p>
            </div>

            <div>
                <SectionHeading id="explore" label="Explore BetterSwap" />
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <Link href="/trade/swap" className="block">
                        <Card
                            label="Trading on BetterSwap"
                            desc="Swap, wrap, and send tokens with best-rate aggregation across all VeChain DEXs."
                            gradient="bg-clip-text heading-gradient-trade"
                        />
                    </Link>
                    <Link href="/pool/all-pools" className="block">
                        <Card
                            label="Pooling on BetterSwap"
                            desc="Provide liquidity, manage your positions, and create new pools on VeChainThor."
                            gradient="bg-clip-text heading-gradient-pools"
                        />
                    </Link>
                    <Link href="/vebetter/dashboard" className="block">
                        <Card
                            label="VeBetter on BetterSwap"
                            desc="Vote, earn B3TR rewards, manage Pool2Earn liquidity, and claim VeBetterDAO allocations."
                            gradient="bg-clip-text heading-gradient-vebetter"
                        />
                    </Link>
                </div>
            </div>

            <PageNav href="/introduction" />
        </div>
    );
}
