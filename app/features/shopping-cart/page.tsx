import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, SectionHeading, SubHeading, Hint, Step } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Shopping Cart",
    description: "Queue multiple transactions and execute them in a single confirmation with BetterSwap's Cart Feature.",
};

export default function ShoppingCartPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="Shopping Cart"
                subtitle="Queue multiple transactions and execute them in a single confirmation — saving time and fees."
            />

            {/* Why unique */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="why-unique" label="Why the Cart Feature is Unique" />
                <p className="text-sm leading-relaxed text-white/60">
                    Most decentralized exchanges require each swap to be confirmed individually, creating inefficiency when performing multiple operations. BetterSwap's Cart Feature addresses this by enabling users to:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-white/60">
                    <li>• Queue multiple transactions and execute them with a single confirmation</li>
                    <li>• Significantly reduce overall transaction fees through efficient batching</li>
                    <li>• Implement more sophisticated trading strategies with ease</li>
                    <li>• Manage and review all pending transactions in one convenient interface</li>
                </ul>
                <p className="text-sm leading-relaxed text-white/60">
                    This innovative functionality brings the multi-transaction convenience of centralized exchanges to decentralized trading, enhancing user experience while preserving the security benefits of blockchain technology.
                </p>
            </section>

            {/* How to use */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="how-to-use" label="How to Use the Cart Feature" />
                <div className="flex flex-col gap-2">
                    <Step n={1} title="Add Transactions to Your Cart">
                        Select the tokens for a swap, liquidity provision, or send operation as normal. Instead of executing immediately, click the <strong className="text-white/80">Add to Cart</strong> button. The transaction is queued without being finalized on the blockchain.
                    </Step>
                    <Step n={2} title="Continue Adding Transactions">
                        <div className="flex flex-col gap-2">
                            <p>Repeat the process to add more transactions of any type — swaps, wraps, sends, or liquidity operations.</p>
                            <Hint type="warning">
                                Slippage adjustments may be needed depending on the transaction type and market movement.
                            </Hint>
                        </div>
                    </Step>
                    <Step n={3} title="Review Your Cart">
                        Click the cart icon in the navigation bar to view all queued transactions. The cart summary displays token pairs, amounts, and associated operations. Review all pending transactions before proceeding.
                    </Step>
                    <Step n={4} title="Execute All Transactions">
                        After reviewing, click the <strong className="text-white/80">Execute All</strong> button to process the batch. Your wallet (e.g., VeWorld) will prompt for a single confirmation of the combined transaction. The confirmation window displays a summary of all operations to be executed.
                    </Step>
                    <Step n={5} title="Transaction Complete">
                        Once confirmed, all operations process as a single transaction. The system updates token balances and positions accordingly. A single transaction fee applies to the entire batch instead of individual fees.
                    </Step>
                </div>
            </section>

            {/* Advantages */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="advantages" label="Advantages of the Cart Feature" />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                        {
                            title: "Transaction Batching",
                            desc: "Combine multiple blockchain operations into one. Queue different transaction types for execution in a single batch.",
                        },
                        {
                            title: "Fee Efficiency",
                            desc: "A single transaction fee applies instead of multiple individual fees. The batching process optimizes gas usage on the blockchain.",
                        },
                        {
                            title: "Time-Saving Interface",
                            desc: "Eliminate multiple confirmation processes. Prepare several operations and execute them simultaneously.",
                        },
                        {
                            title: "Enhanced Trading",
                            desc: "Manage complex trading strategies conveniently. Review all pending operations in one location.",
                        },
                        {
                            title: "Cross-Feature Integration",
                            desc: "Works across Swap, Pool, and Send. Combine different operation types in a single transaction.",
                        },
                        {
                            title: "Transaction Management",
                            desc: "Add or remove items from the cart before execution. Clear overview of pending transactions before blockchain confirmation.",
                        },
                    ].map((item) => (
                        <div key={item.title} className="gradient-border-r relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl">
                            <p className="text-sm font-semibold text-white/80">{item.title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-white/60">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <p className="text-sm leading-relaxed text-white/60">
                That's how the Cart Feature works! It's a great way to streamline your token swapping process and save both time and fees on BetterSwap. Give it a try to see how it enhances your DEX experience!
            </p>

            <PageNav href="/features/shopping-cart" />
        </div>
    );
}
