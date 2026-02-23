import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, SectionHeading, Hint, Step, DocImage, TipsList } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Send",
    description: "Send crypto to any wallet address or .vet domain name using BetterSwap.",
};

export default function SendPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="Send"
                subtitle="Transfer crypto to any address or .vet domain — right from within BetterSwap."
            />

            {/* Why use */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="why-use" label="Why Use BetterSwap's Send Feature" />
                <p className="text-sm leading-relaxed text-white/60">
                    BetterSwap's Send feature streamlines crypto transfers with notable advantages over traditional wallets. It offers an all-in-one environment to trade and transfer without switching applications. The intuitive interface includes helpful features like percentage-based selection and cart functionality for batching transactions. With enhanced security measures and support for <strong className="text-white/80">.vet domain names</strong> instead of lengthy addresses, BetterSwap makes sending crypto both simpler and safer.
                </p>
                <DocImage src="/docs/send.png" alt="Send interface" maxW="max-w-sm" />
            </section>

            {/* How to send */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="how-to-send" label="How to Send Crypto Using BetterSwap" />
                <div className="flex flex-col gap-2">
                    <Step n={1} title="Navigate to the Send Feature">
                        <div className="flex flex-col gap-1">
                            <p>Go to <a href="https://betterswap.io" target="_blank" rel="noopener noreferrer" className="text-[hsl(221_85%_60%)] underline underline-offset-2 hover:text-white/80">betterswap.io</a></p>
                            <p>Click on <strong className="text-white/80">Trade</strong> in the main navigation</p>
                            <p>Select the <strong className="text-white/80">Send</strong> tab</p>
                        </div>
                    </Step>
                    <Step n={2} title="Select Your Token">
                        Click on the token selector, choose the cryptocurrency you wish to send, and view your available balance.
                    </Step>
                    <Step n={3} title="Enter the Amount">
                        Type the amount you want to send, or use the percentage buttons (<strong className="text-white/80">25%, 50%, 75%, MAX</strong>) to quickly select a portion of your balance.
                    </Step>
                    <Step n={4} title="Specify the Recipient">
                        Enter the recipient's wallet address in the <strong className="text-white/80">Recipient</strong> field. You can use either a full wallet address (<code className="rounded bg-soft px-1 text-xs text-white/60">0x...</code>) or a <strong className="text-white/80">.vet domain name</strong>.
                    </Step>
                    <Step n={5} title="Review and Confirm">
                        Double-check all details, then click the <strong className="text-white/80">Send</strong> button to process.
                    </Step>
                </div>
                <Hint type="success">
                    <strong className="text-white/80">Optional: Add to Cart</strong> — Batch this send with other transactions using the shopping cart.{" "}
                    <Link href="/features/shopping-cart" className="underline underline-offset-2 hover:text-white/80">Learn more →</Link>
                </Hint>
            </section>

            {/* Tips */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="tips" label="Tips for Sending Crypto on BetterSwap" />
                <TipsList
                    tips={[
                        {
                            title: "Verify Addresses",
                            items: [
                                "Double-check the recipient's address before confirming.",
                                "Consider sending a small test amount before large transfers.",
                            ],
                        },
                        {
                            title: "Be Aware of Network Fees",
                            items: [
                                "Each transaction incurs network fees.",
                                "Plan transactions during lower network activity to minimize costs.",
                            ],
                        },
                        {
                            title: "Use Max Button Carefully",
                            items: [
                                'The "MAX" button will attempt to send your entire balance.',
                                "Consider leaving a small amount for future fees.",
                            ],
                        },
                        {
                            title: "Secure Your Connection",
                            items: [
                                "Only use BetterSwap on secure networks.",
                                "Verify you're on the authentic betterswap.io website.",
                            ],
                        },
                        {
                            title: "Keep Records",
                            items: [
                                "Save transaction IDs for your records (available on VechainStats).",
                                "Use these to track or verify transactions if needed.",
                            ],
                        },
                        {
                            title: "Monitor Your Transaction",
                            items: [
                                "Track your transaction on VechainStats or VechainExplorer.",
                                "Confirm when your transfer has been successfully processed.",
                            ],
                        },
                    ]}
                />
            </section>

            <PageNav href="/trade/send" />
        </div>
    );
}
