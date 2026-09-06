import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as formatUsd } from "./utils-D-KiQzR7.mjs";
import { t as Button } from "./button-BAiRF30d.mjs";
import { n as selectModel, t as MODEL_LABEL } from "./router-COOIpE1E.mjs";
import { t as TEMPLATES } from "./templates-COSeHVb3.mjs";
import { t as PACKAGES } from "./packages-Bq84JbqJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/templates-Bco5Enh_.js
var import_jsx_runtime = require_jsx_runtime();
function TemplatesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-medium",
				children: "Templates"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Each template is a state machine: plan, gates, hashed artifacts, evaluator. Auto routes Flash for plan/eval and Astra for computer use."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-8",
				children: TEMPLATES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-elevated p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wide text-faint",
								children: PACKAGES.find((p) => p.id === t.packageId)?.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 text-2xl font-medium",
								children: t.name
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-sm tabular-nums text-muted",
								children: ["cap ", formatUsd(t.policy.budgetUsd)]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-prose text-sm text-muted",
							children: t.objective
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-5 divide-y divide-border rounded-lg border border-border",
							children: t.steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted",
									children: [
										i + 1,
										". ",
										s.title
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-faint",
									children: [
										MODEL_LABEL[selectModel(s.kind)],
										" · ",
										s.tool,
										s.gate ? " · gate" : ""
									]
								})]
							}, s.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/demo",
									search: { template: t.id },
									children: "Plan this run"
								})
							})
						})
					]
				}, t.id))
			})
		]
	});
}
//#endregion
export { TemplatesPage as component };
