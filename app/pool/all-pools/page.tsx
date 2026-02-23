import type { Metadata } from "next";
import { PageTitle, SectionHeading, DocImage, TipsList } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "All Pools",
    description: "View and interact with all liquidity pools available on BetterSwap.",
};

export default function AllPoolsPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="All Pools"
                subtitle="Provide liquidity, earn trading fees, and explore all available pools on VeChainThor."
            />

            {/* What are pools */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="what-are-pools" label="What Are Liquidity Pools on BetterSwap" />
                <p className="text-sm leading-relaxed text-white/60">
                    BetterSwap's Liquidity Pools feature enables users to provide liquidity for token pairs and earn rewards from trading fees. By contributing assets to these pools, you help facilitate smooth trading for all users while potentially earning passive income. The Pools page gives you a comprehensive view of all available liquidity opportunities on the VeChainThor blockchain.
                </p>
                <DocImage src="/docs/all-pools.png" alt="All Pools page" />
            </section>

            {/* How to use */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="how-to-use" label="How to Use the Pools Page" />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                        {
                            title: "Access the Pools Page",
                            items: [
                                "Visit betterswap.io",
                                'Click on "Pools" in the main navigation',
                            ],
                        },
                        {
                            title: "View Pool Statistics",
                            items: [
                                "Total Value Locked (TVL): Total assets across all pools",
                                "24h Volume: Total trading volume in the last 24 hours",
                            ],
                        },
                        {
                            title: "Navigate Pool Sections",
                            items: [
                                '"All Pools": View all available liquidity pools',
                                '"My Positions": See only the pools where you\'ve provided liquidity',
                            ],
                        },
                        {
                            title: "Create a New Pool",
                            items: [
                                'Click the "+ Create" button to establish a new liquidity pool',
                            ],
                        },
                        {
                            title: "Search and Filter",
                            items: [
                                "Use the search bar to find specific pools",
                                "Sort columns by clicking headers (Pool, TVL, Vol 24h, Vol 7d, APY)",
                            ],
                        },
                        {
                            title: "Analyze Pool Details",
                            items: [
                                "Token Pair (e.g., B3TR/VET)",
                                "Total Value Locked (TVL) in USD",
                                "24-hour and 7-day volume",
                                "Annual Percentage Yield (APY)",
                            ],
                        },
                    ].map((item) => (
                        <div key={item.title} className="gradient-border-r relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl">
                            <p className="text-sm font-semibold text-white/80">{item.title}</p>
                            <ul className="mt-2 flex flex-col gap-1">
                                {item.items.map((i, idx) => (
                                    <li key={idx} className="text-sm text-white/60">• {i}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tips */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="tips" label="Tips for Using Liquidity Pools" />
                <TipsList
                    tips={[
                        {
                            title: "Understand Pool Metrics",
                            items: [
                                "TVL: Higher TVL generally means more stability and liquidity",
                                "Volume: Higher trading volume typically leads to more fee generation",
                                "APY: Annual percentage yield indicates potential returns from providing liquidity",
                            ],
                        },
                        {
                            title: "Consider Risk Factors",
                            items: [
                                "Be aware of impermanent loss risks when token prices change significantly",
                                "Higher APY pools may carry higher risks",
                                "Newer or smaller pools might have less liquidity and higher volatility",
                            ],
                        },
                        {
                            title: "Manage Your Positions",
                            items: [
                                'Regularly check "My Positions" to monitor your liquidity investments',
                                "Consider rebalancing positions based on changing market conditions",
                            ],
                        },
                        {
                            title: "Start With Established Pairs",
                            items: [
                                "For beginners, pools with larger TVL and established token pairs (like B3TR/VET) are often safer options",
                            ],
                        },
                        {
                            title: "Look Beyond APY",
                            items: [
                                "While high APY is attractive, consider volume and longevity of the pool",
                                "A pool with consistent volume may be better than one with high APY but low activity",
                            ],
                        },
                        {
                            title: "Use Settings Wisely",
                            items: [
                                "The settings gear icon allows you to customize your pool viewing experience",
                            ],
                        },
                    ]}
                />
            </section>

            <PageNav href="/pool/all-pools" />
        </div>
    );
}
