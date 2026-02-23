import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, SectionHeading, Hint, Step, DocImage, TokenAddress, TipsList } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Wrap",
    description: "Wrap VET into BVET, VVET, WVET, or DWVET on BetterSwap.",
};

export default function WrapPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="Wrap"
                subtitle="Convert VET into its VIP-180 wrapped variants for use across the VeChain DeFi ecosystem."
            />

            {/* Understanding */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="understanding" label="Understanding Wrapped Tokens" />
                <p className="text-sm leading-relaxed text-white/60">
                    In the decentralized finance (DeFi) and NFT space, wrapped tokens play a crucial role. They allow for the efficient, smooth, and fast movement of funds — essential in DeFi applications and NFT Marketplaces. They are created to address the challenge of interoperability between different platforms throughout the VeChain ecosystem (and other blockchains).
                </p>
                <DocImage src="/docs/wrap.gif" alt="Wrapping VET" maxW="max-w-sm" />
            </section>

            {/* How to wrap */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="how-to-wrap" label="How to Wrap Tokens" />
                <div className="flex flex-col gap-2">
                    <Step n={1} title="Navigate to the Wrapper">
                        The <strong className="text-white/80">Wrap</strong> menu is located under the <strong className="text-white/80">Trade</strong> section of BetterSwap.
                    </Step>
                    <Step n={2} title="Enter the Amount to Wrap">
                        In the <strong className="text-white/80">Amount</strong> field, enter the amount of <strong className="text-white/80">$VET</strong> you want to wrap. You can also click the <strong className="text-white/80">Max</strong> button to use your entire available balance.
                    </Step>
                    <Step n={3} title="Review the Wrapped Token">
                        Once you enter the amount, the system will display the wrapped token equivalent (<strong className="text-white/80">$BVET</strong> is selected by default; you can switch the output in the dropdown menu). Verify the amount is correct before proceeding.
                    </Step>
                    <Step n={4} title='Click "Wrap"'>
                        After reviewing, click the <strong className="text-white/80">Wrap</strong> button. This will initiate the wrapping process.
                    </Step>
                    <Step n={5} title="Confirm the Transaction in Your Wallet">
                        Your VeWorld wallet will prompt you to confirm and sign the transaction. Check the transaction details including the wrapped token amount and transaction fee.
                    </Step>
                    <Step n={6} title="Transaction Complete">
                        After confirming, the wrapping process will be executed on the VeChainThor blockchain. Once completed, you will receive the wrapped version of your token. You can check the updated balance in your wallet or on BetterSwap.
                    </Step>
                </div>
                <Hint type="success">
                    <strong className="text-white/80">Optional: Add to Cart</strong> — Use the shopping cart to batch this wrap with other transactions.{" "}
                    <Link href="/features/shopping-cart" className="underline underline-offset-2 hover:text-white/80">Learn more →</Link>
                </Hint>
            </section>

            {/* Tips */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="tips" label="Tips for Wrapping Tokens" />
                <TipsList
                    tips={[
                        {
                            title: "Why Wrap Tokens?",
                            items: [
                                "Wrapping allows you to use tokens on other platforms and dApps that support the wrapped version.",
                                "Opens up additional trading and staking opportunities.",
                            ],
                        },
                        {
                            title: "Double-Check the Amount",
                            items: [
                                "Ensure the amount you want to wrap is correct before confirming.",
                                "The wrapped token will be sent to your wallet after completing the transaction.",
                            ],
                        },
                        {
                            title: "Review Fees",
                            items: [
                                "Always review the transaction fees before proceeding.",
                                "The fees are generally low on VeChainThor, but it's good practice to be aware of them.",
                            ],
                        },
                        {
                            title: "NEVER Swap",
                            items: [
                                "To reduce fees and transaction costs, always use a wrapper to convert $VET into its wrapped variant.",
                            ],
                        },
                    ]}
                />
            </section>

            {/* Token list */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="vip180-tokens" label="List of VIP-180 Wrapped Tokens" />
                <ul className="flex flex-col gap-2">
                    <TokenAddress
                        symbol="bVET"
                        address="0xf9b02b47694fd635A413F16dC7B38aF06Cc16fe5"
                        url="https://vechainstats.com/token/bvet/"
                    />
                    <TokenAddress
                        symbol="vVET"
                        address="0x45429A2255e7248e57fce99E7239aED3f84B7a53"
                        url="https://vechainstats.com/token/vvet/"
                    />
                    <TokenAddress
                        symbol="wVET"
                        address="0xD8CCDD85abDbF68DFEc95f06c973e87B1b5A9997"
                        url="https://vechainstats.com/token/wvet/"
                    />
                    <TokenAddress
                        symbol="DThor wVET"
                        address="0xb9Dfd9eAEeEdAbeB3ad41F6a88474D4a43A2307D"
                        url="https://vechainstats.com/token/dwvet/"
                    />
                </ul>
            </section>

            <PageNav href="/trade/wrap" />
        </div>
    );
}
