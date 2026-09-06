import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/evaluator-C9Si2srE.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var draftReleaseNote_createServerFn_handler = createServerRpc({
	id: "7555f183bc5f0cbb90424326c94d2d8da79984248d371712db9f0f0cb46468b8",
	name: "draftReleaseNote",
	filename: "src/lib/ai/evaluator.ts"
}, (opts) => draftReleaseNote.__executeServer(opts));
var draftReleaseNote = createServerFn({ method: "POST" }).validator((input) => input).handler(draftReleaseNote_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "Evaluator offline — using ledger artifacts only."
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 280,
			messages: [{
				role: "system",
				content: "You write a release note from hashed run artifacts only. Do not invent UI you cannot see. Cite hashes. 120 words max. Plain prose."
			}, {
				role: "user",
				content: `Objective:\n${data.objective}\n\nArtifacts:\n${data.artifacts.slice(0, 2500)}`
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `Evaluator error ${res.status}`
	};
	return {
		ok: true,
		text: (await res.json()).choices[0]?.message.content ?? ""
	};
});
//#endregion
export { draftReleaseNote_createServerFn_handler };
