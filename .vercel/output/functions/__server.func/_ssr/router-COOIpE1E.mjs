import { t as MODEL_IDS } from "./types-CYJ8jZd3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-COOIpE1E.js
function selectModel(kind, requested = MODEL_IDS.auto) {
	if (requested !== MODEL_IDS.auto) return requested;
	switch (kind) {
		case "plan":
		case "decompose":
		case "evaluate":
		case "review": return MODEL_IDS.flash;
		case "computer_use":
		case "browser":
		case "code":
		case "swe": return MODEL_IDS.astra;
		case "cyber_review":
		case "audit": return MODEL_IDS.flash_cyber;
		case "notify":
		case "write": return MODEL_IDS.flash;
		default: return MODEL_IDS.flash;
	}
}
var MODEL_LABEL = {
	"gpt-6-astra": "Astra",
	"gemini-3.8-flash": "Flash",
	"gemini-3.8-flash-cyber": "Flash Cyber",
	"grok-4.5": "Grok 4.5",
	auto: "Auto"
};
//#endregion
export { selectModel as n, MODEL_LABEL as t };
