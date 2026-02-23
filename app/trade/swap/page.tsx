import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, SectionHeading, Hint, Step, DocImage, DocVideo } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Swap",
    description: "Learn how to swap tokens on BetterSwap — the VeChain DEX aggregator.",
};

export default function SwapPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="Swap"
                subtitle="Trade one token for another at the best available rate across all VeChain DEXs."
            />

            <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                The main purpose of BetterSwap is of course to swap one token for another token. Since we are an aggregator, we look for the best trading route to give you the best ratio possible.
            </p>

            <DocVideo src="/docs/swap.webm" caption="Swap" />

            {/* From */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="from" label="From" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    In the <strong className="text-white/80">From</strong> section, you select the token and the amount you want to trade (<em>sell</em>) for another token.
                </p>
                <div className="flex flex-col gap-2">
                    <Step n={1} title="Token selection">
                        <div className="flex flex-col gap-2">
                            <p>Use the token selector at the right to open the token selection dialog. Select the token from the list, or use the search function to find it.</p>
                            <DocImage src="/docs/token-selector.webp" alt="Token selector dialog" maxW="max-w-md" />
                        </div>
                    </Step>
                    <Step n={2} title="Token input">
                        <div className="flex flex-col gap-2">
                            <p>Select the token input area and type the amount of tokens you want to sell. You can also use the quick selection buttons to automatically input <strong className="text-white/80">25% | 50% | 75% | 100%</strong> of the available tokens in your wallet.</p>
                            <Hint type="info">
                                To remind you about the tokens that you own, we show your balance above the token selector.
                            </Hint>
                            <DocVideo src="/docs/token-from.webm" maxW="max-w-md" />
                            <Hint type="danger">
                                Always pay attention to the $ value of your input to prevent user errors.
                            </Hint>
                        </div>
                    </Step>
                </div>
            </section>

            {/* To */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="to" label="To" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    In the <strong className="text-white/80">To</strong> section, you select the token you want to receive (<em>buy</em>) with the other token.
                </p>
                <div className="flex flex-col gap-2">
                    <Step n={1} title="Token selection">
                        Use the token selector on the right to open the selection dialog. Select the token from the list, or use the search function to find it.
                    </Step>
                    <Step n={2} title="Token input">
                        <div className="flex flex-col gap-2">
                            <p>When you use the token input from the <strong className="text-white/80">From</strong> field, the <strong className="text-white/80">To</strong> input will be automatically populated. However, you can also do it the other way around.</p>
                            <p>Select the token input area, and type the amount of tokens you want to buy. In the example below you can see we first type in the <strong className="text-white/80">From</strong> field — this populates the <strong className="text-white/80">To</strong> field. Then we remove the input and change it to 1000 in the <strong className="text-white/80">To</strong> field, which populates the <strong className="text-white/80">From</strong> field.</p>
                            <DocVideo src="/docs/token-to.webm" maxW="max-w-xl" />
                            <Hint type="danger">
                                Always pay attention to the $ value of your input to prevent user errors.
                            </Hint>
                        </div>
                    </Step>
                </div>
            </section>

            {/* Switch button */}
            <section className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    Use the big round switch button to easily switch the amounts of the <strong className="text-white/80">From</strong> and <strong className="text-white/80">To</strong> input fields. It will use the amount you typed in last. When you typed in 1000 VET in the From field and use the switch button, the 1000 VET will go to the To field (<em>not the auto-populated value</em>).
                </p>
                <DocImage src="/docs/swap-switch.webp" alt="Switch button" maxW="max-w-md" />
            </section>

            {/* Execute */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="execute" label="Swap" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    When both the <strong className="text-white/80">From</strong> and the <strong className="text-white/80">To</strong> fields are populated, click the big Swap button at the bottom to execute the trade. This will open your wallet software where you'll need to approve the transaction.
                </p>
                <Hint type="info">
                    Use the <strong className="text-white/80">Add to Cart</strong> feature to split up bigger trades into multiple smaller ones to reduce your price impact.{" "}
                    <Link href="/features/shopping-cart" className="underline underline-offset-2 hover:text-white/80">Learn more →</Link>
                </Hint>
            </section>

            {/* Slippage */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="slippage" label="Slippage" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    In the top right, you can set the maximum slippage. We have default options for <strong className="text-white/80">0.1% | 0.5% | 1.0%</strong> and a custom option.
                </p>
                <DocImage src="/docs/slippage.webp" alt="Slippage settings" caption="Set Maximum slippage" />
                <Hint type="info">
                    <strong className="text-white/80">What is slippage?</strong> Slippage on a decentralized exchange (DEX) refers to the difference between the expected price of a trade and the actual price at which the trade is executed. This typically happens due to market volatility and liquidity constraints.
                </Hint>
                <Hint type="warning">
                    When using the cart feature, make sure to allow for a higher maximum slippage, or the transaction simulation will show it as red (reverted) in the cart dialog window.
                </Hint>
            </section>

            {/* Route */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="route" label="Route" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    Below the Add to Cart button you'll find some additional information regarding your swap. When you hover on one of the three options, you'll see some additional information.
                </p>
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    The route will preview the route the token swap will use to make the trade possible. Since we are an aggregator, the route could go via any DEX on VeChain, even multiple on the same trade!
                </p>
                <DocImage src="/docs/swap-route.webp" alt="Swap route visualization" />
            </section>

            {/* Price impact */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="price-impact" label="Price Impact" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    Price impact refers to the change in the market price of a token caused by the execution of your trade. It is directly related to liquidity and trade size — larger trades relative to available liquidity will result in higher price impact.
                </p>
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    On BetterSwap, we visually warn you when the price impact is high:
                </p>
                <ul className="flex flex-col gap-1.5 text-sm text-white/70 lg:text-base">
                    <li>Below 5% ⇒ Normal colour</li>
                    <li>Between 5% and 10% ⇒ <span className="font-semibold text-warning">Orange colour</span></li>
                    <li>Above 10% ⇒ <span className="font-semibold text-error">Red colour</span></li>
                </ul>
                <Hint type="success">
                    To limit price impact, we advise splitting up a bigger trade into smaller ones.
                </Hint>
                <DocVideo src="/docs/price-impact.webm" />
            </section>

            {/* Trading fee */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="trading-fee" label="Trading Fee" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    This will show you the trading fee for the swap you are going to perform. BetterSwap takes a <strong className="text-white/80">0.5% fee</strong> for the aggregator + routing DEX fees. Our aggregator helps you save more than the fees you pay by optimizing trade execution.
                </p>
            </section>

            <PageNav href="/trade/swap" />
        </div>
    );
}
