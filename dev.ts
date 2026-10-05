// Local preview: rebuilds on change and serves dist/ the same way nginx does in production.
import { watch } from "node:fs";
import { join } from "node:path";

const root = import.meta.dir;
const dist = join(root, "dist");
const port = Number(process.env.PORT ?? 3000);

async function build() {
    // fresh process each time so edited page modules are re-imported
    const proc = Bun.spawn(["bun", "build.tsx"], { cwd: root, stdout: "inherit", stderr: "inherit" });
    if ((await proc.exited) !== 0) console.error("build failed");
}

await build();

let timer: Timer | undefined;
for (const dir of ["app", "components", "lib", "styles", "public"]) {
    watch(join(root, dir), { recursive: true }, () => {
        clearTimeout(timer);
        timer = setTimeout(build, 150);
    });
}

Bun.serve({
    port,
    async fetch(req) {
        const path = decodeURIComponent(new URL(req.url).pathname);
        if (path === "/") return Response.redirect("/introduction", 302);
        for (const candidate of [path, join(path, "index.html")]) {
            const file = Bun.file(join(dist, candidate));
            if (!candidate.endsWith("/") && (await file.exists())) return new Response(file);
        }
        return new Response(Bun.file(join(dist, "404.html")), { status: 404 });
    },
});

console.log(`docs on http://localhost:${port}`);
