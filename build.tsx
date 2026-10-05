// Static site build: renders every app/**/page.tsx to dist/<route>/index.html with no client JS.
import { renderToStaticMarkup } from "react-dom/server";
import { $ } from "bun";
import { mkdir, rm, cp } from "node:fs/promises";
import { dirname, join } from "node:path";
import { Layout } from "@/components/layout";
import type { Metadata } from "@/lib/page";

const root = import.meta.dir;
const out = join(root, "dist");

await rm(out, { recursive: true, force: true });
await mkdir(join(out, "assets"), { recursive: true });
await cp(join(root, "public"), out, { recursive: true });

// Tailwind scans app/ and components/ (see @source in globals.css)
const cssTmp = join(out, "assets", "site.css");
await $`bunx @tailwindcss/cli -i ${join(root, "styles/globals.css")} -o ${cssTmp} --minify`.cwd(root).quiet();
const cssBytes = await Bun.file(cssTmp).bytes();
const cssName = `site.${new Bun.CryptoHasher("sha256").update(cssBytes).digest("hex").slice(0, 10)}.css`;
await Bun.write(join(out, "assets", cssName), cssBytes);
await rm(cssTmp);
const cssHref = `/assets/${cssName}`;

const pages = Array.from(new Bun.Glob("app/**/page.tsx").scanSync(root)).sort();
for (const file of pages) {
    const route = "/" + dirname(file).replace(/^app\/?/, "");
    const mod = (await import(join(root, file))) as { default: () => React.ReactNode; metadata?: Metadata };
    const Page = mod.default;
    const html =
        "<!doctype html>" +
        renderToStaticMarkup(
            <Layout route={route} title={mod.metadata?.title} description={mod.metadata?.description} css={cssHref}>
                <Page />
            </Layout>,
        );
    // not-found becomes the server's 404.html; everything else is <route>/index.html
    const target = route === "/not-found" ? join(out, "404.html") : join(out, route, "index.html");
    await mkdir(dirname(target), { recursive: true });
    await Bun.write(target, html);
    console.log(`${route.padEnd(28)} ${(html.length / 1024).toFixed(1)} KB`);
}

// "/" goes to the introduction (nginx also redirects; this covers static hosts)
await Bun.write(
    join(out, "index.html"),
    `<!doctype html><meta charset="utf-8"><title>BetterSwap Docs</title><meta http-equiv="refresh" content="0; url=/introduction"><link rel="canonical" href="https://docs.betterswap.io/introduction"><a href="/introduction">BetterSwap Docs</a>`,
);

console.log(`css ${cssHref} ${(cssBytes.length / 1024).toFixed(1)} KB, ${pages.length} pages`);
