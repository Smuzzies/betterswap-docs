import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle, SectionHeading, SubHeading, Hint, Step } from "@/components/ui";
import { PageNav } from "@/components/page-nav";

export const metadata: Metadata = {
    title: "Quickstart",
    description: "Get connected to BetterSwap in minutes — using VeWorld Wallet or Social Login.",
};

export default function QuickstartPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageTitle
                title="Quickstart"
                subtitle="Get connected to BetterSwap in minutes."
            />

            {/* Before You Begin */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="before-you-begin" label="Before You Begin" />
                <Hint type="info">
                    Download the official VeWorld wallet at{" "}
                    <a href="https://www.veworld.net/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/80">
                        veworld.net
                    </a>
                    . For help setting up your VeWorld wallet, read the{" "}
                    <a href="https://docs.vechain.org/core-concepts/wallets/veworld" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/80">
                        official documentation
                    </a>
                    .
                </Hint>
            </section>

            {/* Connection Options */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="connection-options" label="Connection Options" />
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    BetterSwap supports two convenient ways to access the platform:
                </p>
                <ul className="flex flex-col gap-2 text-sm text-white/70 lg:text-base">
                    <li>
                        <strong className="text-white/80">VeWorld Wallet</strong> — The traditional blockchain wallet approach
                    </li>
                    <li>
                        <strong className="text-white/80">Social Login</strong> — Powered by VeChain SDK for a seamless web2-like experience
                    </li>
                </ul>
            </section>

            {/* Option 1 */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="option-1" label="Option 1: Connect with VeWorld Wallet" />

                <SubHeading id="veworld-step1" label="Step 1: Open the VeWorld Browser" />
                <div className="flex flex-col gap-2">
                    <Step n={1} title="Launch VeWorld">
                        Open the <strong className="text-white/80">VeWorld</strong> app on your device.
                    </Step>
                    <Step n={2} title="Navigate to the Discover Tab">
                        Go to the <strong className="text-white/80">Discover tab</strong>. This is where you'll find decentralized applications (dApps) like BetterSwap.
                    </Step>
                </div>

                <SubHeading id="veworld-step2" label="Step 2: Connect Your VeWorld Wallet" />
                <div className="flex flex-col gap-2">
                    <Step n={1} title="Find BetterSwap">
                        In the <strong className="text-white/80">Discover tab</strong>, search for <strong className="text-white/80">BetterSwap</strong> or visit{" "}
                        <a href="https://betterswap.io" target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-2 hover:text-white/80">
                            betterswap.io
                        </a>{" "}
                        directly.
                    </Step>
                    <Step n={2} title="Click Connect Wallet">
                        Once on the BetterSwap interface, click the <strong className="text-white/80">Connect Wallet</strong> button in the top right corner.
                    </Step>
                    <Step n={3} title="Select VeWorld Wallet">
                        Select <strong className="text-white/80">VeWorld Wallet</strong> from the available options. You may be prompted to approve the connection request.
                    </Step>
                </div>
            </section>

            {/* Option 2 */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="option-2" label="Option 2: Connect with Social Login" />

                <SubHeading id="social-step1" label="Step 1: Access BetterSwap" />
                <div className="flex flex-col gap-2">
                    <Step n={1} title="Visit the platform">
                        Visit{" "}
                        <a href="https://betterswap.io" target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-2 hover:text-white/80">
                            betterswap.io
                        </a>{" "}
                        in any web browser (or within the VeWorld app if installed).
                    </Step>
                    <Step n={2} title="Click Connect Wallet">
                        Click the <strong className="text-white/80">Connect Wallet</strong> button in the top right corner.
                    </Step>
                </div>

                <SubHeading id="social-step2" label="Step 2: Choose Social Login" />
                <div className="flex flex-col gap-2">
                    <Step n={1} title="Select Social Login">
                        Select <strong className="text-white/80">Social Login</strong> from the connection options.
                    </Step>
                    <Step n={2} title="Choose your platform">
                        Choose your preferred social platform (Google, Apple, etc.).
                    </Step>
                    <Step n={3} title="Authenticate">
                        Complete the authentication process through your selected platform.
                    </Step>
                    <Step n={4} title="Wallet created">
                        A non-custodial wallet will be automatically created for you using VeChain SDK technology.
                    </Step>
                </div>
            </section>

            {/* Start swapping */}
            <section className="flex flex-col gap-4">
                <SectionHeading id="start-swapping" label="Start Swapping Tokens" />
                <div className="flex flex-col gap-2">
                    <Step n={1} title="View your balances">
                        After connecting, your token balances will be displayed in the trading interface.
                    </Step>
                    <Step n={2} title="Select tokens">
                        Select the tokens you wish to exchange from the dropdown menus.
                    </Step>
                    <Step n={3} title="Enter amount">
                        Enter the amount you want to swap and review the transaction details.
                    </Step>
                    <Step n={4} title="Confirm">
                        Click <strong className="text-white/80">Swap</strong> and confirm the transaction in your VeWorld wallet or via the social login interface.
                    </Step>
                </div>
                <p className="text-sm leading-relaxed text-white/70 lg:text-base">
                    Your transaction will be processed securely through the VeChainThor blockchain, utilizing BetterSwap's aggregation protocol to find the most efficient trading route.
                </p>
            </section>

            <PageNav href="/quickstart" />
        </div>
    );
}
