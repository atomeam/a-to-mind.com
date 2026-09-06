import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as formatUsd } from "./utils-D-KiQzR7.mjs";
import { t as MODEL_LABEL } from "./router-COOIpE1E.mjs";
import { t as PACKAGES } from "./packages-Bq84JbqJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages-DFQ-ROkm.js
var import_jsx_runtime = require_jsx_runtime();
function PackagesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-medium",
				children: "Packages"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Governance that makes Critical-capability computer use shippable. Evaluator caps, action classes, and fail-closed invariants — aligned to Astra / Flash routing."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 lg:grid-cols-2",
				children: PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-elevated p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-medium",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: p.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-5 grid grid-cols-2 gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-faint",
								children: "Plan model"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono",
								children: MODEL_LABEL[p.planModel]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-faint",
								children: "Evaluator cap"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono tabular-nums",
								children: formatUsd(p.evaluatorCapUsd)
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs uppercase tracking-wide text-faint",
							children: "Invariants"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-2 text-sm text-muted",
							children: p.invariants.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-l-2 border-accent/40 pl-3",
								children: i
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-mono text-[11px] text-faint",
							children: p.actionClasses.join(" · ")
						})
					]
				}, p.id))
			})
		]
	});
}
//#endregion
export { PackagesPage as component };
