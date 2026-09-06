import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-D-KiQzR7.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatUsd(n) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
		maximumFractionDigits: 4
	}).format(n);
}
function shortHash(hash, n = 10) {
	return hash.slice(0, n);
}
function nowIso() {
	return (/* @__PURE__ */ new Date()).toISOString();
}
//#endregion
export { shortHash as i, formatUsd as n, nowIso as r, cn as t };
