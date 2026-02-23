import type { Metadata } from "next";
import { PageTitle, SectionHeading, DocImage, DocVideo, TipsList } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "My Positions",
    description: "View and manage your liquidity positions across all VeChainThor DEXs from a single BetterSwap interface.",
};

export default function MyPositionsPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="My Positions"
                subtitle="View and manage your liquidity positions across all VeChainThor DEXs from a single interface."
            />

            {/* What are positions */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="what-are-positions" label="What Are My Positions on BetterSwap" />
                <p className="text-sm leading-relaxed text-white/60">
                    My Positions is a dedicated section of BetterSwap that displays information about pools where you've contributed assets. This interface presents data on your liquidity investments, including metrics, token quantities, and pool shares. As a unique feature, BetterSwap allows you to manage liquidity positions across multiple decentralized exchanges (DEXs) within the VeChainThor ecosystem, all from a single interface.
                </p>
                <DocVideo src="/docs/my-positions.webm" maxW="max-w-lg" />
            </section>

            {/* How to use */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="how-to-use" label="How to Use the My Positions Page" />
                <div className="flex flex-col gap-3">
                    {[
                        {
                            title: "Accessing My Positions",
                            items: [
                                "Navigate to betterswap.io/pool",
                                'Select the "My Positions" tab from the available options',
                            ],
                        },
                        {
                            title: "Viewing Active Pools",
                            items: [
                                "The interface displays pools where liquidity has been provided",
                                "Each entry shows the relevant token pair (e.g., VSEA/YEET) and the source DEX (e.g., Vexchange)",
                            ],
                        },
                        {
                            title: "Available Metrics",
                            items: [
                                "TVL (Total Value Locked) for each displayed pool",
                                "24h and 7d trading volumes as informational references",
                                "Current APY (Annual Percentage Yield) figures",
                            ],
                        },
                        {
                            title: "Pool Detail Access",
                            items: [
                                "Users can select any pool to view additional information",
                                "The detailed view displays data for both tokens in the pair",
                                'The source DEX is shown below the token pair (e.g., "Vexchange")',
                            ],
                        },
                        {
                            title: "Holdings Information",
                            items: [
                                "Token quantities for each position",
                                "Your specific token amounts (e.g., 94.99 VSEA and 683 YEET)",
                                "Your percentage share of the total pool (e.g., 98.07%)",
                            ],
                        },
                        {
                            title: "Liquidity Modification Options",
                            items: [
                                '"Add liquidity" button for increasing positions',
                                '"Remove liquidity" option for decreasing or exiting positions',
                                '"Migrate liquidity" feature to transfer LP positions from other DEXs to BetterSwap',
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

            {/* Multi-DEX settings */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="multi-dex" label="Multi-DEX Management" />
                <p className="text-sm leading-relaxed text-white/60">
                    BetterSwap aggregates positions from all major VeChainThor DEXs. Access Settings by clicking the gear icon to configure which DEXs are included in your view.
                </p>
                <DocImage src="/docs/my-positions-settings.webp" alt="My Positions settings" maxW="max-w-sm" />
                <p className="text-sm leading-relaxed text-white/60">
                    Supported DEXs include: <strong className="text-white/80">BetterSwap, Vexchange, VeRocket, DThor, TurtleSwap,</strong> and <strong className="text-white/80">VeSwap</strong>. You can also toggle visibility of APY and USD values from this settings panel.
                </p>
            </section>

            {/* Tips */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="tips" label="Tips for Managing Your Liquidity" />
                <TipsList
                    tips={[
                        {
                            title: "Position Monitoring",
                            items: [
                                "Review your positions regularly to see their current status",
                                "View performance data across different pools",
                            ],
                        },
                        {
                            title: "Cross-DEX Management",
                            items: [
                                "BetterSwap lets you view and manage liquidity across multiple VeChainThor DEXs",
                                "The migration feature facilitates moving liquidity between different exchanges",
                            ],
                        },
                        {
                            title: "Liquidity Considerations",
                            items: [
                                "The interface allows for distributing liquidity across multiple pools",
                                "Different pools have different characteristics that users may want to consider",
                            ],
                        },
                        {
                            title: "Timing Awareness",
                            items: [
                                "Market conditions can fluctuate, which may be relevant when interacting with pools",
                                "The platform provides data that can be considered before making adjustments",
                            ],
                        },
                        {
                            title: "Pool Share Information",
                            items: [
                                "Your pool share percentage indicates your proportion of the total pool",
                                "The platform shows how adding liquidity affects your pool share",
                            ],
                        },
                        {
                            title: "Risk Information",
                            items: [
                                "Each pool displays APY and volatility metrics for informational purposes",
                                "Users often consider multiple factors when interacting with liquidity pools",
                            ],
                        },
                        {
                            title: "Display Customisation",
                            items: [
                                "Settings allow for tailoring the information displayed on the interface",
                                "Users can choose which DEXs to include in their view and which metrics to display",
                            ],
                        },
                        {
                            title: "Record Keeping",
                            items: [
                                "It may be useful to maintain records of your liquidity activities",
                                "Some users track additions and removals for their own documentation purposes",
                            ],
                        },
                        {
                            title: "Price Divergence Data",
                            items: [
                                "The interface displays price information for paired tokens",
                                "Users can monitor this information at their discretion",
                            ],
                        },
                    ]}
                />
            </section>

            <PageNav href="/pool/my-positions" />
        </div>
    );
}
