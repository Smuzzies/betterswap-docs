import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
            <div className="bg-glass-effect-gradient gradient-border-r backdrop-blur-xl rounded-2xl px-10 py-12 max-w-md w-full">
                <p className="text-6xl font-semibold text-white/20 mb-2">404</p>
                <h1 className="text-2xl font-semibold text-white mb-3">Page not found</h1>
                <p className="text-white/60 text-sm mb-8">
                    This page doesn&apos;t exist. Check the URL or navigate back to the docs.
                </p>
                <Link
                    href="/introduction"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-colors"
                >
                    ← Back to Introduction
                </Link>
            </div>
        </div>
    );
}
