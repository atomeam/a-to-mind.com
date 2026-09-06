import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Scale, d as ArrowRight, i as Shield, n as Wallet } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-BAiRF30d.mjs";
import { t as TEMPLATES } from "./templates-COSeHVb3.mjs";
import { t as PACKAGES } from "./packages-Bq84JbqJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BdYsrI7c.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-accent",
					children: "Durable execution"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl text-4xl font-medium leading-[1.1] sm:text-6xl",
					children: "AI that finishes under contract."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-lg leading-relaxed text-muted",
					children: "Astra does the work. A-to-Mind signs the ledger. Hard budgets. Human gates. Default-deny tools. An append-only record you can hand to legal."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/demo",
							children: "View live ledger"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/templates",
							children: "Browse templates"
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-3",
				children: [
					{
						icon: Wallet,
						title: "Spend caps",
						body: "Server-side USD, token, retry, and wall-clock limits. No surprise charges."
					},
					{
						icon: Shield,
						title: "Write gates",
						body: "slack.write, deploy, comment — blocked until a human grants the step."
					},
					{
						icon: Scale,
						title: "Court reporter",
						body: "Every model call, screenshot hash, and approval is an immutable event."
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-elevated p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
							className: "size-5 text-accent",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-xl font-medium",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: c.body
						})
					]
				}, c.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-medium",
					children: "This week’s surface ledger"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/surface",
					className: "inline-flex items-center gap-1 text-sm text-accent no-underline",
					children: ["Full census ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-xl border border-border bg-elevated p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "We ran Machine Surface against our own public copy. Evaluator accepted with three dislikes — not a marketing page."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-border pb-3",
							children: "Packages listed as live, marked “not for sale.”"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-border pb-3",
							children: "CLI presented as GA; docs mark the API as Coordinator."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Security copy is target architecture. Free ledger expires in 7 days." })
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-medium",
				children: "Templates"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: TEMPLATES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/demo",
					search: { template: t.id },
					className: "rounded-xl border border-border bg-elevated p-5 no-underline transition-colors hover:border-accent/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-faint",
							children: PACKAGES.find((p) => p.id === t.packageId)?.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-lg font-medium text-fg",
							children: t.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: t.blurb
						})
					]
				}, t.id))
			})]
		})
	] });
}
//#endregion
export { Home as component };
