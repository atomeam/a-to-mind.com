// Draft only. Not deployed. Default-deny. Stores nothing.
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const denied = ["/wire", "/cause", "/link", "/order", "/sync-seal"];
    const hit = denied.some(function (p) {
      return url.pathname === p || url.pathname.startsWith(p + "/");
    });
    if (hit) {
      return new Response(JSON.stringify({
        status: "unattested",
        stored: false,
        error: "default-deny",
        note: "a window mark is not a wire"
      }), {
        status: 403,
        headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
      });
    }
    return new Response("draft worker; no open route", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" }
    });
  }
};
