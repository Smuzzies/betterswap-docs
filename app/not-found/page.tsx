import type { Metadata } from "@/lib/page";

export const metadata: Metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
            <div className="panel rounded-2xl px-10 py-12 max-w-md w-full">
                <p className="text-6xl font-semibold text-white/20 mb-2">404</p>
                <h1 className="text-2xl font-semibold text-white mb-3">Page not found</h1>
                <p className="text-white/60 text-sm mb-8">
                    This page doesn&apos;t exist. Check the URL or navigate back to the docs.
                </p>
                <a
                    href="/introduction"
                    className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
                >
                    ← Back to Introduction
                </a>
            </div>
        </div>
    );
}
