(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/betterswap-docs/components/nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navSections",
    ()=>navSections
]);
const navSections = [
    {
        group: "Getting Started",
        items: [
            {
                label: "Introduction",
                href: "/introduction"
            },
            {
                label: "Quickstart",
                href: "/quickstart"
            },
            {
                label: "Our Team",
                href: "/our-team"
            }
        ]
    },
    {
        group: "Features",
        items: [
            {
                label: "Pool2Earn",
                href: "/features/pool2earn"
            },
            {
                label: "Shopping Cart",
                href: "/features/shopping-cart"
            }
        ]
    },
    {
        group: "Trade",
        items: [
            {
                label: "Swap",
                href: "/trade/swap"
            },
            {
                label: "Wrap",
                href: "/trade/wrap"
            },
            {
                label: "Send",
                href: "/trade/send"
            }
        ]
    },
    {
        group: "Pool",
        items: [
            {
                label: "All Pools",
                href: "/pool/all-pools"
            },
            {
                label: "My Positions",
                href: "/pool/my-positions"
            },
            {
                label: "Create Pool",
                href: "/pool/create"
            }
        ]
    },
    {
        group: "VeBetter",
        items: [
            {
                label: "Dashboard",
                href: "/vebetter/dashboard"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/betterswap-docs/components/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/betterswap-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/betterswap-docs/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/betterswap-docs/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$components$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/betterswap-docs/components/nav.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex flex-col gap-0.5",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$components$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSections"].map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-1 mt-5 px-3 text-xs font-semibold uppercase tracking-wider text-white/30 first:mt-0",
                        children: section.group
                    }, void 0, false, {
                        fileName: "[project]/betterswap-docs/components/sidebar.tsx",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this),
                    section.items.map((item)=>{
                        const active = pathname === item.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: `block rounded-lg px-3 py-1.5 text-sm transition-colors ${active ? "bg-soft text-white" : "text-white/50 hover:bg-soft hover:text-white"}`,
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/betterswap-docs/components/sidebar.tsx",
                            lineNumber: 19,
                            columnNumber: 29
                        }, this);
                    })
                ]
            }, section.group, true, {
                fileName: "[project]/betterswap-docs/components/sidebar.tsx",
                lineNumber: 12,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/betterswap-docs/components/sidebar.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/betterswap-docs/components/mobile-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNav",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/betterswap-docs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/betterswap-docs/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/betterswap-docs/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$components$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/betterswap-docs/components/nav.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MobileNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const current = __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$components$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSections"].flatMap((s)=>s.items).find((i)=>i.href === pathname);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: "gradient-border-r relative rounded-2xl bg-glass-effect-gradient p-4 backdrop-blur-xl lg:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "cursor-pointer text-sm font-semibold text-white/70",
                children: current ? current.label : "Navigation"
            }, void 0, false, {
                fileName: "[project]/betterswap-docs/components/mobile-nav.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mt-3 flex flex-col gap-0.5",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$components$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSections"].map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-0.5 mt-3 px-2 text-xs font-semibold uppercase tracking-wider text-white/30 first:mt-0",
                                children: section.group
                            }, void 0, false, {
                                fileName: "[project]/betterswap-docs/components/mobile-nav.tsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this),
                            section.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `block rounded-lg px-2 py-1 text-sm transition-colors ${pathname === item.href ? "text-white" : "text-white/60 hover:text-white"}`,
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/betterswap-docs/components/mobile-nav.tsx",
                                    lineNumber: 23,
                                    columnNumber: 29
                                }, this))
                        ]
                    }, section.group, true, {
                        fileName: "[project]/betterswap-docs/components/mobile-nav.tsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/betterswap-docs/components/mobile-nav.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/betterswap-docs/components/mobile-nav.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_s(MobileNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$betterswap$2d$docs$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MobileNav;
var _c;
__turbopack_context__.k.register(_c, "MobileNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=betterswap-docs_components_bcdca43d._.js.map