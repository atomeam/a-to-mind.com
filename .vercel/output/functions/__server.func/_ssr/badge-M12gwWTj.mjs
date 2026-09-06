import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-D-KiQzR7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-M12gwWTj.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, tone = "mute", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide", tone === "mute" && "bg-subtle text-muted", tone === "ok" && "bg-ok/15 text-ok", tone === "warn" && "bg-warn/15 text-warn", tone === "danger" && "bg-danger/15 text-danger", tone === "accent" && "bg-accent/15 text-accent", className),
		children
	});
}
//#endregion
export { Badge as t };
