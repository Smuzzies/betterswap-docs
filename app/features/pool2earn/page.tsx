import type { Metadata } from "next";
import { PageTitle, SectionHeading, DocImage } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Pool2Earn",
    description: "Provide liquidity to the B3TR-VET pair on BetterSwap and earn B3TR rewards through Pool2Earn.",
};

const faqs = [
    {
        q: "What is Pool2Earn?",
        a: "Pool2Earn by BetterSwap is a program that allows you to provide liquidity to the B3TR-VET pair on BetterSwap. By participating, you help create a healthy and sustainable trading environment for the $B3TR token while earning high $B3TR rewards in return.",
    },
    {
        q: "When do I receive my Pool2Earn rewards?",
        a: "Pool2Earn rewards are currently distributed every Monday. We distribute the allocation of the previous round to everyone who added liquidity to the B3TR-VET pair while the round that just ended was going on. For example: for everyone who pooled in round 31, we distribute the rewards we got allocation from round 30.",
    },
    {
        q: "How are the rewards calculated?",
        a: "Your rewards are calculated based on your total share of the Pool in the Round and your total time in the Pool in the Round. Based on this, you receive your fair share of the $B3TR allocation received through VeBetter.com.",
    },
    {
        q: "Can I remove my tokens while the round is ongoing and use my $B3TR to vote?",
        a: "YES! You can freely add/remove your liquidity while the round is ongoing. Feel free to remove your liquidity just before the snapshot, and put it back in after.",
    },
    {
        q: "Why is Pool2Earn a sustainable action?",
        a: "While Pool2Earn differs from other X2Earn dApps on VeBetter, it plays a crucial role in creating a stable and sustainable environment for the B3TR token. Adequate liquidity helps reduce volatility and lowers investment risk. Thanks to the success of Pool2Earn, B3TR reached new all-time highs, as the deep liquidity pool enabled larger trades with minimal price impact, making it easier for new investors to participate seamlessly.",
    },
];

export default function Pool2EarnPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="Pool2Earn"
                subtitle="Provide liquidity to the B3TR-VET pair and earn B3TR rewards every round."
            />

            {/* How to participate */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="how-to-participate" label="How to Participate in Pool2Earn" />
                <p className="text-sm leading-relaxed text-white/60">
                    Participating in Pool2Earn is simple. Add $B3TR and $VET tokens to the pair on BetterSwap and you're in!
                </p>
                <ol className="flex flex-col gap-2 text-sm text-white/60">
                    <li className="flex gap-2">
                        <span className="shrink-0 font-semibold text-white/40">1.</span>
                        <span>
                            Go to{" "}
                            <a href="https://www.betterswap.io/vebetter" target="_blank" rel="noopener noreferrer" className="text-[hsl(221_85%_60%)] underline underline-offset-2 hover:text-white/80">
                                betterswap.io/vebetter
                            </a>
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="shrink-0 font-semibold text-white/40">2.</span>
                        <span>Click on the <strong className="text-white/80">Liquidity</strong> tab</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="shrink-0 font-semibold text-white/40">3.</span>
                        <span>
                            Fill in the amount you want to pool in the field for Token A or Token B. This will automatically fill in the required amount in the other field.
                        </span>
                    </li>
                </ol>
                <DocImage src="/docs/pool2earn-add.gif" alt="Adding liquidity to Pool2Earn" caption="Adding liquidity to the B3TR-VET pool" />
                <ol className="flex flex-col gap-2 text-sm text-white/60" start={4}>
                    <li className="flex gap-2">
                        <span className="shrink-0 font-semibold text-white/40">4.</span>
                        <span>When you're happy, click on <strong className="text-white/80">Add Liquidity</strong></span>
                    </li>
                </ol>
            </section>

            {/* Remove liquidity */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="remove-liquidity" label="Removing Liquidity" />
                <p className="text-sm leading-relaxed text-white/60">
                    You can freely remove your liquidity at any time — even while a round is still ongoing. Simply navigate to the Liquidity tab on the VeBetter Dashboard and use the remove option on your position.
                </p>
                <DocImage src="/docs/pool2earn-remove.gif" alt="Removing liquidity from Pool2Earn" caption="Removing liquidity from the B3TR-VET pool" />
            </section>

            {/* FAQs */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="faq" label="Frequently Asked Questions" />
                <div className="flex flex-col gap-3">
                    {faqs.map((faq) => (
                        <div key={faq.q} className="gradient-border-r relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl">
                            <p className="text-sm font-semibold text-white/80">{faq.q}</p>
                            <p className="mt-2 text-sm leading-relaxed text-white/60">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <PageNav href="/features/pool2earn" />
        </div>
    );
}
