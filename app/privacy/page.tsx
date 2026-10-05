import type { Metadata } from "@/lib/page";
import { PageTitle, SectionHeading } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Privacy",
    description: "How BetterSwap uses Cloudflare Turnstile for bot protection, and what this documentation site collects.",
};

export default function PrivacyPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle title="Privacy" subtitle="Third-party services used by BetterSwap, and what this documentation site collects." />

            <section className="flex flex-col gap-4">
                <SectionHeading id="cloudflare-turnstile" label="Cloudflare Turnstile" />
                <div className="flex flex-col gap-4 text-sm leading-relaxed text-white/70 lg:text-base">
                    <p>
                        BetterSwap uses <strong className="text-white/80">Cloudflare Turnstile</strong> to protect parts of the app from bots and abuse.
                        Turnstile is provided by Cloudflare, Inc. When a Turnstile check runs, Cloudflare processes technical signals such as your IP address,
                        TLS fingerprint, browser User-Agent, and the site key and origin of the page, solely to detect and block bots and to improve its bot detection.
                    </p>
                    <p>
                        This processing is carried out by Cloudflare under the{" "}
                        <a
                            href="https://www.cloudflare.com/en-gb/turnstile-privacy-policy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link underline underline-offset-2 hover:text-white"
                        >
                            Cloudflare Turnstile Privacy Addendum
                        </a>
                        , which also applies to Cloudflare&apos;s Challenge Platform.
                    </p>
                </div>
            </section>

            <section className="flex flex-col gap-4">
                <SectionHeading id="this-site" label="This documentation site" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    docs.betterswap.io is a static site. It does not set cookies, and it does not load analytics or third-party scripts.
                </p>
            </section>

            <PageNav href="/privacy" />
        </div>
    );
}
