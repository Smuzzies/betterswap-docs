import type { Metadata } from "next";
import { PageTitle, SectionHeading, DocVideo } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Pool2Earn",
    description: "Provide liquidity to the B3TR-VET pair on BetterSwap and earn B3TR rewards through Pool2Earn.",
};

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
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    Participating in Pool2Earn is very simple. Add $B3TR and $VET tokens to the pair on BetterSwap and you're in!
                </p>
                <ol className="flex flex-col gap-2 text-sm text-white/70 lg:text-base">
                    <li className="flex gap-2">
                        <span className="shrink-0 font-semibold text-white/40">1.</span>
                        <span>
                            Go to{" "}
                            <a href="https://www.betterswap.io/vebetter" target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-2 hover:text-white/80">
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
                <DocVideo src="/docs/pool2earn-add.webm" caption="Adding liquidity to the B3TR-VET pool" />
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
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    You can freely add/remove your liquidity while the round is ongoing. Feel free to remove your liquidity just before the snapshot, and put it back in after.
                </p>
                <DocVideo src="/docs/pool2earn-remove.webm" caption="Removing liquidity from the B3TR-VET pool" />
            </section>

            {/* FAQs */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="faq" label="Frequently Asked Questions" />
                <div className="flex flex-col gap-3">

                    <div className="gradient-border-r relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl">
                        <p className="text-sm font-semibold text-white/80">What is Pool2Earn?</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70 lg:text-base">
                            Pool2Earn by BetterSwap is a program that allows you to provide liquidity to the B3TR-VET pair on BetterSwap. By participating, you help create a healthy and sustainable trading environment for the $B3TR token while earning high $B3TR rewards in return.
                        </p>
                    </div>

                    <div className="gradient-border-r relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl">
                        <p className="text-sm font-semibold text-white/80">When do I receive my Pool2Earn rewards?</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70 lg:text-base">
                            Pool2Earn rewards are currently distributed every Monday. We will distribute the allocation of the previous round to everyone who added liquidity to the B3TR-VET pair while the round that just ended was going on.
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70 lg:text-base">
                            <strong className="text-white/70">Example:</strong> For everyone who pooled in round 31, we distribute the rewards we got allocation from round 30.
                        </p>
                    </div>

                    <div className="gradient-border-r relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl">
                        <p className="text-sm font-semibold text-white/80">How are the rewards calculated?</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70 lg:text-base">
                            Your rewards are calculated based on the following metrics:
                        </p>
                        <ul className="mt-2 flex flex-col gap-1 pl-4 text-sm text-white/70 lg:text-base">
                            <li className="list-disc">Your total share of the Pool in the Round</li>
                            <li className="list-disc">Your total time in the Pool in the Round</li>
                        </ul>
                        <p className="mt-2 text-sm leading-relaxed text-white/70 lg:text-base">
                            Based on this, you receive your fair share of the $B3TR allocation we get through VeBetter.com.
                        </p>
                    </div>

                    <div className="gradient-border-r relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl">
                        <p className="text-sm font-semibold text-white/80">Can I remove my tokens while the round is still going on and use my $B3TR tokens to vote?</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70 lg:text-base">
                            YES! You can freely add/remove your liquidity while the round is ongoing. Feel free to remove your liquidity just before the snapshot, and put it back in after.
                        </p>
                    </div>

                    <div className="gradient-border-r relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl">
                        <p className="text-sm font-semibold text-white/80">Why is Pool2Earn a sustainable action?</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70 lg:text-base">
                            While Pool2Earn differs from other X2Earn dApps on VeBetter, it plays a crucial role in creating a stable and sustainable environment for the B3TR token. Adequate liquidity helps reduce volatility and lowers investment risk. Thanks to the success of Pool2Earn, B3TR reached new all-time highs, as the deep liquidity pool enabled larger trades with minimal price impact, making it easier for new investors to participate seamlessly.
                        </p>
                    </div>

                </div>
            </section>

            <PageNav href="/features/pool2earn" />
        </div>
    );
}
