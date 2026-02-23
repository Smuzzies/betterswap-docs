import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, SectionHeading, Hint, Step, TipsList } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Create Pool",
    description: "Create a new liquidity pool on BetterSwap by pairing any two VeChainThor tokens.",
};

export default function CreatePoolPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="Create Pool"
                subtitle="Launch a new liquidity pool by pairing any two VeChainThor tokens."
            />

            <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                BetterSwap allows anyone to create a new liquidity pool for any token pair on VeChainThor. Once created, the pool is immediately available for trading and liquidity provisioning by the community.
            </p>

            {/* How to create */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="how-to-create" label="How to Create a Pool" />
                <div className="flex flex-col gap-2">
                    <Step n={1} title="Navigate to the Pools Page">
                        Go to <a href="https://betterswap.io/pool" target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-2 hover:text-white/80">betterswap.io/pool</a> and click the <strong className="text-white/80">+ Create</strong> button in the top right.
                    </Step>
                    <Step n={2} title="Select Token A">
                        Use the token selector to choose the first token of your pair. You can search by name or paste a contract address to find any VIP-180 token.
                    </Step>
                    <Step n={3} title="Select Token B">
                        Use the second token selector to choose the other token of the pair. Make sure you have balances of both tokens in your wallet.
                    </Step>
                    <Step n={4} title="Enter Initial Liquidity Amounts">
                        Enter the amounts of Token A and Token B you want to seed the pool with. The ratio you provide sets the initial price of the pool.
                    </Step>
                    <Step n={5} title="Review Pool Details">
                        Review the pool summary, including the initial price ratio and your share of the pool (100% initially, as you are the first LP).
                    </Step>
                    <Step n={6} title="Create and Confirm">
                        Click <strong className="text-white/80">Create Pool</strong> and confirm the transaction in your VeWorld wallet. Once the transaction is confirmed, the pool is live on VeChainThor.
                    </Step>
                </div>
                <Hint type="info">
                    The initial token ratio you deposit determines the starting price of the pool. Any significant deviation from the market price will be immediately arbitraged — ensure you use a fair ratio.
                </Hint>
            </section>

            {/* After creating */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="after-creating" label="After Creating a Pool" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    After your pool is created, it will appear on the <Link href="/pool/all-pools" className="text-link underline underline-offset-2 hover:text-white/80">All Pools</Link> page and be immediately accessible to other traders via BetterSwap's aggregator. Your initial liquidity position will appear under <Link href="/pool/my-positions" className="text-link underline underline-offset-2 hover:text-white/80">My Positions</Link>.
                </p>
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    As the pool accumulates trading volume, you will earn a share of trading fees proportional to your liquidity contribution.
                </p>
            </section>

            {/* Tips */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="tips" label="Tips for Creating a Pool" />
                <TipsList
                    tips={[
                        {
                            title: "Set a Fair Initial Price",
                            items: [
                                "Use the current market price as reference for your initial ratio",
                                "Deviating from market price creates immediate arbitrage loss",
                            ],
                        },
                        {
                            title: "Seed with Adequate Liquidity",
                            items: [
                                "Pools with very low TVL will have high price impact on even small trades",
                                "A deeper initial pool attracts more organic volume and fee income",
                            ],
                        },
                        {
                            title: "Understand Impermanent Loss",
                            items: [
                                "When the ratio of token prices changes, you may experience impermanent loss",
                                "This loss is 'realised' only when you remove liquidity",
                                "Trading fees can offset impermanent loss over time",
                            ],
                        },
                        {
                            title: "Monitor Your Pool",
                            items: [
                                "Check My Positions regularly to track your pool's performance",
                                "Consider adding more liquidity to maintain a healthy TVL",
                            ],
                        },
                    ]}
                />
            </section>

            <PageNav href="/pool/create" />
        </div>
    );
}
