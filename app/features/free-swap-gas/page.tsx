import type { Metadata } from "@/lib/page";
import { PageTitle, SectionHeading, Hint, Stat } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Free Swap Gas",
    description: "Earn free swaps on BetterSwap from recent trading volume and in-range VET/VTHO liquidity. Eligibility, how swaps are counted, and caps.",
};

const examples = [
    { volume: "$500", liquidity: "$100", fromVolume: 5, fromLiquidity: 10, total: "15" },
    { volume: "$1,250", liquidity: "$45", fromVolume: 12, fromLiquidity: 0, total: "12" },
    { volume: "$499", liquidity: "$250", fromVolume: 0, fromLiquidity: 25, total: "25" },
];

export default function FreeSwapGasPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="Free Swap Gas"
                subtitle="Free swap gas is earned from recent trading and from liquidity that is currently supporting the pool, not from passive holdings or old deposits."
            />

            <section className="flex flex-col gap-4">
                <SectionHeading id="eligibility" label="Eligibility" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    There are two ways to earn free swaps. You can qualify through either one, or both.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="panel flex flex-col gap-2 rounded-2xl p-4">
                        <p className="heading-gradient-trade text-sm font-semibold">Trading</p>
                        <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                            At least <strong className="text-white">$500</strong> in swap volume over the last <strong className="text-white">30 days</strong>.
                        </p>
                        <p className="text-sm text-white/60">Each full $100 earns 1 free swap.</p>
                    </div>
                    <div className="panel flex flex-col gap-2 rounded-2xl p-4">
                        <p className="heading-gradient-pools text-sm font-semibold">Liquidity</p>
                        <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                            At least <strong className="text-white">$100</strong> of currently owned, in-range liquidity in the designated <strong className="text-white">VET/VTHO V3</strong> pool.
                        </p>
                        <p className="text-sm text-white/60">Each full $10 earns 1 free swap. Unclaimed fees do not count.</p>
                    </div>
                </div>
                <Hint type="info">
                    The two sources add together. Example: <strong className="text-white/80">$500 volume plus $100 liquidity = 15 free swaps</strong>.
                </Hint>
            </section>

            <section className="flex flex-col gap-4">
                <SectionHeading id="examples" label="Examples" />
                <div className="panel overflow-x-auto rounded-2xl">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>30-day volume</th>
                                <th>In-range liquidity</th>
                                <th>From trading</th>
                                <th>From liquidity</th>
                                <th>Free swaps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {examples.map((e) => (
                                <tr key={e.volume + e.liquidity}>
                                    <td>{e.volume}</td>
                                    <td>{e.liquidity}</td>
                                    <td>{e.fromVolume}</td>
                                    <td>{e.fromLiquidity}</td>
                                    <td className="font-semibold text-white">{e.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-sm leading-relaxed text-white/60">
                    Only full increments count, and each source has its own minimum: $45 of liquidity is below the $100 minimum and $499 of volume is below the $500 minimum, so neither earns swaps on its own.
                </p>
            </section>

            <section className="flex flex-col gap-4">
                <SectionHeading id="caps" label="Caps" />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <Stat value="100" label="free swaps per wallet per rolling 30 days" />
                    <Stat value="1,000 VTHO" label="gas per wallet" />
                    <Stat value="50,000 VTHO" label="platform-wide" />
                </div>
                <Hint type="warning">
                    <strong className="text-white/80">Reverted swaps count toward the caps.</strong>
                </Hint>
            </section>

            <PageNav href="/features/free-swap-gas" />
        </div>
    );
}
