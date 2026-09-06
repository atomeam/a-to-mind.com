import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-BAiRF30d.mjs";
import { t as Badge } from "./badge-M12gwWTj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/surface-uq2ckMHy.js
var import_jsx_runtime = require_jsx_runtime();
var CLAIMS = [
	{
		url: "/",
		claim: "Workflows finish when you step away",
		status: "like",
		proof: "Execution contract + Durable Object coordinator described in docs."
	},
	{
		url: "/pricing",
		claim: "Zero token markup, BYOK",
		status: "like",
		proof: "Pricing copy states provider bill only. No counterexample found."
	},
	{
		url: "/pricing",
		claim: "Packages listed as available products",
		status: "dislike",
		proof: "Cards read as live SKUs; inventory marks them not for sale."
	},
	{
		url: "/docs",
		claim: "CLI is generally available",
		status: "dislike",
		proof: "Marketing presents atomind run as GA; /docs marks REST as Coordinator."
	},
	{
		url: "/security",
		claim: "Security posture is production-complete",
		status: "dislike",
		proof: "Page is explicit target architecture. Free ledger retained 7 days."
	}
];
function SurfacePage() {
	const dislikes = CLAIMS.filter((c) => c.status === "dislike").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-accent",
				children: "Machine Surface"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl font-medium",
				children: "Public promises vs proofs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted",
				children: [
					"Weekly census of our own pages. Evaluator accepted. ",
					dislikes,
					" dislikes published, not buried. slack.notify pending — not sent."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 space-y-4",
				children: CLAIMS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-elevated p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-faint",
								children: c.url
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: c.status === "like" ? "ok" : "warn",
								children: c.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-medium",
							children: c.claim
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: c.proof
						})
					]
				}, c.claim))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/demo",
						search: { template: "surface-ledger" },
						children: "Re-run census"
					})
				})
			})
		]
	});
}
//#endregion
export { SurfacePage as component };
