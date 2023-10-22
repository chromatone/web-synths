// node_modules/.pnpm/@directus+sdk@12.0.1/node_modules/@directus/sdk/dist/chunk-42TA54KX.js
var R = { fetch: globalThis.fetch, WebSocket: globalThis.WebSocket, URL: globalThis.URL };
var E = (e, t = {}) => {
  let o = t.globals ? { ...R, ...t.globals } : R;
  return { globals: o, url: new o.URL(e), with(s) {
    return { ...this, ...s(this) };
  } };
};
async function D(e) {
  var _a2;
  let t = (_a2 = e.headers.get("Content-Type")) == null ? void 0 : _a2.toLowerCase();
  if ((t == null ? void 0 : t.startsWith("application/json")) || (t == null ? void 0 : t.startsWith("application/health+json"))) {
    let o = await e.json();
    if (!e.ok)
      throw o;
    return "data" in o ? o.data : o;
  }
  if ((t == null ? void 0 : t.startsWith("text/html")) || (t == null ? void 0 : t.startsWith("text/plain"))) {
    let o = await e.text();
    if (!e.ok)
      throw o;
    return o;
  }
}
var y = async (e, t, o = globalThis.fetch) => {
  t.headers = typeof t.headers == "object" && !Array.isArray(t.headers) ? t.headers : {};
  let s = await o(e, t);
  return await D(s).catch((c) => {
    throw { errors: typeof c == "object" && "errors" in c ? c.errors : c, response: s };
  });
};
var P = {};
var K = (e = {}) => (t) => {
  let o = { ...P, ...e };
  return { async query(s, a, c = "items") {
    let m = { method: "POST", body: JSON.stringify({ query: s, variables: a }) };
    "credentials" in o && (m.credentials = o.credentials);
    let n = {};
    if ("getToken" in this) {
      let l = await this.getToken();
      l && (n.Authorization = `Bearer ${l}`);
    }
    "Content-Type" in n || (n["Content-Type"] = "application/json"), m.headers = n;
    let d = c === "items" ? "/graphql" : "/graphql/system", f = S(t.url, d);
    return await y(f.toString(), m, t.globals.fetch);
  } };
};
var k = (e, t, o = {}) => () => {
  let s = { email: e, password: t };
  return "otp" in o && (s.otp = o.otp), s.mode = o.mode ?? "cookie", { path: "/auth/login", method: "POST", body: JSON.stringify(s) };
};
var _ = (e) => () => ({ path: "/auth/logout", method: "POST", body: JSON.stringify(e ? { refresh_token: e } : {}) });
var B = (e, t) => () => ({ path: "/auth/password/request", method: "POST", body: JSON.stringify({ email: e, ...t ? { reset_url: t } : {} }) });
var z = (e, t) => () => ({ path: "/auth/password/reset", method: "POST", body: JSON.stringify({ token: e, password: t }) });
var X = () => () => ({ path: "/auth", method: "GET" });
var Z = (e = "cookie", t) => () => ({ path: "/auth/refresh", method: "POST", body: JSON.stringify(e === "json" ? { refresh_token: t, mode: e } : { mode: e }) });
var ne = (e, t) => () => ({ path: "/activity/comment", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var pe = (e, t) => () => ({ path: "/collections", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var he = (e, t) => () => ({ path: "/dashboards", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var ue = (e, t) => () => ({ path: "/dashboards", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Se = (e, t, o) => () => ({ path: `/fields/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "POST" });
var fe = (e, t) => () => ({ path: "/files", method: "POST", body: e, params: t ?? {}, headers: { "Content-Type": "multipart/form-data" } });
var xe = (e, t = {}, o) => () => ({ path: "/files/import", method: "POST", body: JSON.stringify({ url: e, data: t }), params: o ?? {} });
var Te = (e, t) => () => ({ path: "/flows", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var be = (e, t) => () => ({ path: "/flows", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Ce = (e, t) => () => ({ path: "/folders", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Re = (e, t) => () => ({ path: "/folders", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var ge = (e, t, o) => () => {
  let s = String(e);
  if (s.startsWith("directus_"))
    throw new Error("Cannot use createItems for core collections");
  return { path: `/items/${s}`, params: o ?? {}, body: JSON.stringify(t), method: "POST" };
};
var Oe = (e, t, o) => () => {
  let s = String(e);
  if (s.startsWith("directus_"))
    throw new Error("Cannot use createItem for core collections");
  return { path: `/items/${s}`, params: o ?? {}, body: JSON.stringify(t), method: "POST" };
};
var Fe = (e, t) => () => ({ path: "/notifications", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Ie = (e, t) => () => ({ path: "/notifications", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Ee = (e, t) => () => ({ path: "/operations", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var we = (e, t) => () => ({ path: "/operations", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var ve = (e, t) => () => ({ path: "/panels", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Ue = (e, t) => () => ({ path: "/panels", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var $e = (e, t) => () => ({ path: "/permissions", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Ke = (e, t) => () => ({ path: "/permissions", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Le = (e, t) => () => ({ path: "/presets", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var We = (e, t) => () => ({ path: "/presets", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var He = (e) => () => ({ path: "/relations", body: JSON.stringify(e), method: "POST" });
var qe = (e, t) => () => ({ path: "/roles", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Be = (e, t) => () => ({ path: "/roles", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var ze = (e, t) => () => ({ path: "/shares", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Ve = (e, t) => () => ({ path: "/shares", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Ye = (e, t) => () => ({ path: "/translations", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Ze = (e, t) => () => ({ path: "/translations", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var tt = (e, t) => () => ({ path: "/users", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var rt = (e, t) => () => ({ path: "/users", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var st = (e, t) => () => ({ path: "/webhooks", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var at = (e, t) => () => ({ path: "/webhooks", params: t ?? {}, body: JSON.stringify(e), method: "POST" });
var Ot = (e) => () => ({ path: `/activity/comment/${e}`, method: "DELETE" });
var Ft = (e) => () => ({ path: `/collections/${e}`, method: "DELETE" });
var g = (e) => {
  let t = {};
  if (Array.isArray(e.fields) && e.fields.length > 0) {
    let o = (s, a = []) => {
      if (typeof s == "object") {
        let c = [];
        for (let m in s) {
          let n = s[m] ?? [];
          if (Array.isArray(n))
            for (let d of n)
              c.push(o(d, [...a, m]));
          else if (typeof n == "object")
            for (let d of Object.keys(n)) {
              let f = n[d];
              for (let l of f)
                c.push(o(l, [...a, `${m}:${d}`]));
            }
        }
        return c.flatMap((m) => m);
      }
      return [...a, String(s)].join(".");
    };
    t.fields = e.fields.flatMap((s) => o(s)).join(",");
  }
  return e.filter && Object.keys(e.filter).length > 0 && (t.filter = JSON.stringify(e.filter)), e.search && (t.search = e.search), "sort" in e && e.sort && (t.sort = typeof e.sort == "string" ? e.sort : e.sort.join(",")), typeof e.limit == "number" && e.limit >= -1 && (t.limit = String(e.limit)), typeof e.offset == "number" && e.offset >= 0 && (t.offset = String(e.offset)), typeof e.page == "number" && e.page >= 1 && (t.page = String(e.page)), e.deep && Object.keys(e.deep).length > 0 && (t.deep = JSON.stringify(e.deep)), e.alias && Object.keys(e.alias).length > 0 && (t.alias = JSON.stringify(e.alias)), e.aggregate && Object.keys(e.aggregate).length > 0 && (t.aggregate = JSON.stringify(e.aggregate)), e.groupBy && e.groupBy.length > 0 && (t.groupBy = e.groupBy.join(",")), t;
};
var r = (e, t) => {
  if (e.length === 0)
    throw new Error(t);
};
var h = (e, t) => {
  if (String(e).startsWith("directus_"))
    throw new Error(t);
};
var Kt = (e) => () => (r(e, "Keys cannot be empty"), { path: "/dashboards", body: JSON.stringify(e), method: "DELETE" });
var Gt = (e) => () => (r(e, "Key cannot be empty"), { path: `/dashboards/${e}`, method: "DELETE" });
var kt = (e, t) => () => (r(e, "Collection cannot be empty"), r(t, "Field cannot be empty"), { path: `/fields/${e}/${t}`, method: "DELETE" });
var qt = (e) => () => (r(e, "Keys cannot be empty"), { path: "/files", body: JSON.stringify(e), method: "DELETE" });
var Bt = (e) => () => (r(e, "Key cannot be empty"), { path: `/files/${e}`, method: "DELETE" });
var Vt = (e) => () => (r(e, "Keys cannot be empty"), { path: "/flows", body: JSON.stringify(e), method: "DELETE" });
var Xt = (e) => () => (r(e, "Key cannot be empty"), { path: `/flows/${e}`, method: "DELETE" });
var er = (e) => () => (r(e, "Keys cannot be empty"), { path: "/folders", body: JSON.stringify(e), method: "DELETE" });
var tr = (e) => () => (r(e, "Key cannot be empty"), { path: `/folders/${e}`, method: "DELETE" });
var sr = (e, t) => () => {
  let o = {};
  return r(String(e), "Collection cannot be empty"), h(e, "Cannot use deleteItems for core collections"), Array.isArray(t) ? (r(t, "keysOrQuery cannot be empty"), o = { keys: t }) : (r(Object.keys(t), "keysOrQuery cannot be empty"), o = { query: t }), { path: `/items/${e}`, body: JSON.stringify(o), method: "DELETE" };
};
var ar = (e, t) => () => (r(String(e), "Collection cannot be empty"), h(e, "Cannot use deleteItem for core collections"), r(String(t), "Key cannot be empty"), { path: `/items/${e}/${t}`, method: "DELETE" });
var nr = (e) => () => (r(e, "Keys cannot be empty"), { path: "/notifications", body: JSON.stringify(e), method: "DELETE" });
var ir = (e) => () => (r(e, "Key cannot be empty"), { path: `/notifications/${e}`, method: "DELETE" });
var hr = (e) => () => (r(e, "Keys cannot be empty"), { path: "/operations", body: JSON.stringify(e), method: "DELETE" });
var ur = (e) => () => (r(e, "Key cannot be empty"), { path: `/operations/${e}`, method: "DELETE" });
var lr = (e) => () => (r(e, "Keys cannot be empty"), { path: "/panels", body: JSON.stringify(e), method: "DELETE" });
var fr = (e) => () => (r(e, "Key cannot be empty"), { path: `/panels/${e}`, method: "DELETE" });
var Tr = (e) => () => (r(e, "Keys cannot be empty"), { path: "/permissions", body: JSON.stringify(e), method: "DELETE" });
var br = (e) => () => (r(String(e), "Key cannot be empty"), { path: `/permissions/${e}`, method: "DELETE" });
var Rr = (e) => () => (r(e, "Keys cannot be empty"), { path: "/presets", body: JSON.stringify(e), method: "DELETE" });
var Dr = (e) => () => (r(String(e), "Key cannot be empty"), { path: `/presets/${e}`, method: "DELETE" });
var Pr = (e, t) => () => (r(e, "Collection cannot be empty"), r(t, "Field cannot be empty"), { path: `/relations/${e}/${t}`, method: "DELETE" });
var Ar = (e) => () => (r(e, "Keys cannot be empty"), { path: "/roles", body: JSON.stringify(e), method: "DELETE" });
var Er = (e) => () => (r(String(e), "Key cannot be empty"), { path: `/roles/${e}`, method: "DELETE" });
var vr = (e) => () => (r(e, "Keys cannot be empty"), { path: "/shares", body: JSON.stringify(e), method: "DELETE" });
var Ur = (e) => () => (r(String(e), "Key cannot be empty"), { path: `/shares/${e}`, method: "DELETE" });
var Kr = (e) => () => (r(e, "Keys cannot be empty"), { path: "/translations", body: JSON.stringify(e), method: "DELETE" });
var Gr = (e) => () => (r(String(e), "Key cannot be empty"), { path: `/translations/${e}`, method: "DELETE" });
var kr = (e) => () => (r(e, "Keys cannot be empty"), { path: "/users", body: JSON.stringify(e), method: "DELETE" });
var Hr = (e) => () => (r(String(e), "Key cannot be empty"), { path: `/users/${e}`, method: "DELETE" });
var Br = (e) => () => (r(e, "Keys cannot be empty"), { path: "/webhooks", body: JSON.stringify(e), method: "DELETE" });
var Mr = (e) => () => (r(String(e), "Key cannot be empty"), { path: `/webhooks/${e}`, method: "DELETE" });
var xo = (e) => () => ({ path: "/activity", params: e ?? {}, method: "GET" });
var Qo = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/activity/${e}`, params: t ?? {}, method: "GET" });
var jo = (e, t) => () => {
  let o = String(e);
  return r(o, "Collection cannot be empty"), { path: o.startsWith("directus_") ? `/${o.substring(9)}` : `/items/${o}`, method: "GET", params: { ...t.query ?? {}, ...t.groupBy ? { groupBy: t.groupBy } : {}, aggregate: t.aggregate } };
};
var Do = () => () => ({ path: "/collections", method: "GET" });
var go = (e) => () => (r(e, "Collection cannot be empty"), { path: `/collections/${e}`, method: "GET" });
var Fo = (e) => () => ({ path: "/dashboards", params: e ?? {}, method: "GET" });
var Io = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/dashboards/${e}`, params: t ?? {}, method: "GET" });
var Eo = (e) => () => ({ path: `/extensions/${e}`, method: "GET" });
var vo = () => () => ({ path: "/fields", method: "GET" });
var Uo = (e) => () => (r(e, "Collection cannot be empty"), { path: `/fields/${e}`, method: "GET" });
var Jo = (e, t) => () => (r(e, "Collection cannot be empty"), r(t, "Field cannot be empty"), { path: `/fields/${e}/${t}`, method: "GET" });
var Go = (e) => () => ({ path: "/files", params: e ?? {}, method: "GET" });
var Lo = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/files/${e}`, params: t ?? {}, method: "GET" });
var Ho = (e) => () => ({ path: "/flows", params: e ?? {}, method: "GET" });
var _o = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/flows/${e}`, params: t ?? {}, method: "GET" });
var Mo = (e) => () => ({ path: "/folders", params: e ?? {}, method: "GET" });
var zo = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/folders/${e}`, params: t ?? {}, method: "GET" });
var Yo = (e, t) => () => (r(String(e), "Collection cannot be empty"), h(e, "Cannot use readItems for core collections"), { path: `/items/${e}`, params: t ?? {}, method: "GET" });
var Zo = (e, t, o) => () => (r(String(e), "Collection cannot be empty"), h(e, "Cannot use readItem for core collections"), r(String(t), "Key cannot be empty"), { path: `/items/${e}/${t}`, params: o ?? {}, method: "GET" });
var rs = (e) => () => ({ path: "/notifications", params: e ?? {}, method: "GET" });
var os = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/notifications/${e}`, params: t ?? {}, method: "GET" });
var ms = (e) => () => ({ path: "/operations", params: e ?? {}, method: "GET" });
var cs = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/operations/${e}`, params: t ?? {}, method: "GET" });
var ps = (e) => () => ({ path: "/panels", params: e ?? {}, method: "GET" });
var ds = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/panels/${e}`, params: t ?? {}, method: "GET" });
var ys = (e) => () => ({ path: "/permissions", params: e ?? {}, method: "GET" });
var Ss = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/permissions/${e}`, params: t ?? {}, method: "GET" });
var xs = (e) => () => ({ path: "/presets", params: e ?? {}, method: "GET" });
var Qs = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/presets/${e}`, params: t ?? {}, method: "GET" });
var js = () => () => ({ path: "/relations", method: "GET" });
var Cs = (e) => () => ({ path: `/relations/${e}`, method: "GET" });
var Rs = (e, t) => () => (r(e, "Collection cannot be empty"), r(t, "Field cannot be empty"), { path: `/relations/${e}/${t}`, method: "GET" });
var Os = (e) => () => ({ path: "/revisions", params: e ?? {}, method: "GET" });
var Ps = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/revisions/${e}`, params: t ?? {}, method: "GET" });
var As = (e) => () => ({ path: "/roles", params: e ?? {}, method: "GET" });
var Es = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/roles/${e}`, params: t ?? {}, method: "GET" });
var Ns = (e) => () => ({ path: "/settings", params: e ?? {}, method: "GET" });
var Js = (e) => () => ({ path: "/shares", params: e ?? {}, method: "GET" });
var $s = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/shares/${e}`, params: t ?? {}, method: "GET" });
var Ls = (e, t) => () => (r(String(e), "Collection cannot be empty"), h(e, "Cannot use readSingleton for core collections"), { path: `/items/${e}`, params: t ?? {}, method: "GET" });
var Hs = (e) => () => ({ path: "/translations", params: e ?? {}, method: "GET" });
var _s = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/translations/${e}`, params: t ?? {}, method: "GET" });
var Ms = (e) => () => ({ path: "/users", params: e ?? {}, method: "GET" });
var zs = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/users/${e}`, params: t ?? {}, method: "GET" });
var Vs = (e) => () => ({ path: "/users/me", params: e ?? {}, method: "GET" });
var Zs = (e) => () => ({ path: "/webhooks", params: e ?? {}, method: "GET" });
var ea = (e, t) => () => (r(String(e), "Key cannot be empty"), { path: `/webhooks/${e}`, params: t ?? {}, method: "GET" });
var Oa = (e) => () => ({ method: "POST", path: "/schema/apply", body: JSON.stringify(e) });
var Fa = (e, t = false) => () => ({ method: "POST", path: "/schema/diff", params: t ? { force: t } : {}, body: JSON.stringify(e) });
var Aa = () => () => ({ method: "GET", path: "/schema/snapshot" });
var Ja = (e = "item") => () => ({ method: "GET", path: e === "item" ? "/server/specs/graphql" : "/server/specs/graphql/system" });
var Ka = () => () => ({ method: "GET", path: "/server/health" });
var La = () => () => ({ method: "GET", path: "/server/info" });
var ka = () => () => ({ method: "GET", path: "/server/specs/oas" });
var _a = () => () => ({ method: "GET", path: "/server/ping" });
var em = (e, t, o) => () => (r(String(e), "Key cannot be empty"), { path: `/activity/comment/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var om = (e, t, o) => () => (r(e, "Collection cannot be empty"), { path: `/collections/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var mm = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/dashboards", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var cm = (e, t, o) => () => (r(e, "Key cannot be empty"), { path: `/dashboards/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var pm = (e, t, o, s) => () => (r(e, "Keys cannot be empty"), r(t, "Field cannot be empty"), { path: `/fields/${e}/${t}`, params: s ?? {}, body: JSON.stringify(o), method: "PATCH" });
var um = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/files", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var ym = (e, t, o) => () => (r(e, "Key cannot be empty"), { path: `/files/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var fm = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/flows", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var xm = (e, t, o) => () => (r(e, "Key cannot be empty"), { path: `/flows/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var bm = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/folders", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var jm = (e, t, o) => () => (r(e, "Key cannot be empty"), { path: `/folders/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var Dm = (e, t, o, s) => () => (r(t, "Keys cannot be empty"), r(String(e), "Collection cannot be empty"), h(e, "Cannot use updateItems for core collections"), { path: `/items/${e}`, params: s ?? {}, body: JSON.stringify({ keys: t, data: o }), method: "PATCH" });
var gm = (e, t, o, s) => () => (r(String(t), "Key cannot be empty"), r(String(e), "Collection cannot be empty"), h(e, "Cannot use updateItem for core collections"), { path: `/items/${e}/${t}`, params: s ?? {}, body: JSON.stringify(o), method: "PATCH" });
var Fm = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/notifications", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var Im = (e, t, o) => () => (r(e, "Key cannot be empty"), { path: `/notifications/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var wm = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/operations", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var Nm = (e, t, o) => () => (r(e, "Key cannot be empty"), { path: `/operations/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var Jm = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/panels", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var $m = (e, t, o) => () => (r(e, "Key cannot be empty"), { path: `/panels/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var Lm = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/permissions", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var Wm = (e, t, o) => () => (r(String(e), "Key cannot be empty"), { path: `/permissions/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var _m = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/presets", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var qm = (e, t, o) => () => (r(String(e), "Key cannot be empty"), { path: `/presets/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var zm = (e, t, o, s) => () => (r(e, "Collection cannot be empty"), r(t, "Field cannot be empty"), { path: `/relations/${e}/${t}`, params: s ?? {}, body: JSON.stringify(o), method: "PATCH" });
var Ym = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/roles", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var Zm = (e, t, o) => () => (r(e, "Key cannot be empty"), { path: `/roles/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var tc = (e, t) => () => ({ path: "/settings", params: t ?? {}, body: JSON.stringify(e), method: "PATCH" });
var sc = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/shares", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var ac = (e, t, o) => () => (r(e, "Key cannot be empty"), { path: `/shares/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var nc = (e, t, o) => () => (r(String(e), "Collection cannot be empty"), h(e, "Cannot use updateSingleton for core collections"), { path: `/items/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var dc = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/translations", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var hc = (e, t, o) => () => (r(String(e), "Key cannot be empty"), { path: `/translations/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var Sc = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/users", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var lc = (e, t, o) => () => (r(e, "Key cannot be empty"), { path: `/users/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var fc = (e, t) => () => ({ path: "/users/me", params: t ?? {}, body: JSON.stringify(e), method: "PATCH" });
var Tc = (e, t, o) => () => (r(e, "Keys cannot be empty"), { path: "/webhooks", params: o ?? {}, body: JSON.stringify({ keys: e, data: t }), method: "PATCH" });
var bc = (e, t, o) => () => (r(String(e), "Key cannot be empty"), { path: `/webhooks/${e}`, params: o ?? {}, body: JSON.stringify(t), method: "PATCH" });
var _c = () => () => ({ method: "POST", path: "/utils/cache/clear" });
var Bc = (e, t, o, s) => () => ({ method: "POST", path: `/utils/export/${e}`, body: JSON.stringify({ format: t, query: o, file: s }) });
var zc = (e, t, o) => () => e === "GET" ? { path: `/flows/trigger/${t}`, params: o ?? {}, method: "GET" } : { path: `/flows/trigger/${t}`, body: JSON.stringify(o ?? {}), method: "POST" };
var Xc = (e) => () => ({ method: "POST", path: "/utils/hash/generate", body: JSON.stringify({ string: e }) });
var Yc = (e, t) => () => ({ method: "POST", path: "/utils/hash/verify", body: JSON.stringify({ string: e, hash: t }) });
var en = (e, t) => () => ({ path: `/utils/import/${e}`, method: "POST", body: t, headers: { "Content-Type": "multipart/form-data" } });
var rn = (e, t) => () => ({ path: `/operations/trigger/${e}`, body: JSON.stringify(t ?? {}), method: "POST" });
var sn = (e, t) => () => ({ path: "/shares/auth", method: "POST", body: JSON.stringify({ share: e, password: t }) });
var an = (e, t) => () => ({ path: "/shares/invite", method: "POST", body: JSON.stringify({ share: e, emails: t }) });
var mn = (e) => () => ({ path: `/shares/info/${e}`, method: "GET" });
var nn = (e, t, o) => () => ({ method: "POST", path: `/utils/sort/${e}`, body: JSON.stringify({ item: t, to: o }) });
var dn = (e, t, o) => () => ({ path: "/users/invite", method: "POST", body: JSON.stringify({ email: e, role: t, ...o ? { invite_url: o } : {} }) });
var hn = (e, t) => () => ({ path: "/users/invite/accept", method: "POST", body: JSON.stringify({ token: e, password: t }) });
var un = (e) => () => ({ path: "/users/me/tfa/generate", method: "POST", body: JSON.stringify({ password: e }) });
var yn = (e, t) => () => ({ path: "/users/me/tfa/enable", method: "POST", body: JSON.stringify({ secret: e, otp: t }) });
var Sn = (e) => () => ({ path: "/users/me/tfa/disable", method: "POST", body: JSON.stringify({ otp: e }) });
var F = {};
var $n = (e = {}) => (t) => {
  let o = { ...F, ...e };
  return { async request(s) {
    let a = s();
    if (a.headers || (a.headers = {}), "Content-Type" in a.headers ? a.headers["Content-Type"] === "multipart/form-data" && delete a.headers["Content-Type"] : a.headers["Content-Type"] = "application/json", "getToken" in this) {
      let d = await this.getToken();
      d && (a.headers || (a.headers = {}), a.headers.Authorization = `Bearer ${d}`);
    }
    let c = S(t.url, a.path, a.params), m = { method: a.method ?? "GET", headers: a.headers ?? {} };
    "credentials" in o && (m.credentials = o.credentials), a.body && (m.body = a.body), a.onRequest && (m = await a.onRequest(m)), o.onRequest && (m = await o.onRequest(m));
    let n = await y(c.toString(), m, t.globals.fetch);
    return "onResponse" in a && (n = await a.onResponse(n, m)), "onResponse" in e && (n = await e.onResponse(n, m)), n;
  } };
};
function Gn(e, t) {
  return () => {
    let o = e();
    return typeof t == "function" ? o.onRequest = t : o.onRequest = (s) => ({ ...s, ...t }), o;
  };
}
function Wn(e) {
  return () => {
    let t = e();
    return t.method === "GET" && (t.method = "SEARCH", t.body = JSON.stringify({ query: t.params }), delete t.params), t;
  };
}
function Hn(e, t) {
  return () => {
    let o = t();
    return e && (o.headers || (o.headers = {}), o.headers.Authorization = `Bearer ${e}`), o;
  };
}
var b = "/";
var I = (e, t) => (e.endsWith(b) && (e = e.slice(0, -1)), t.startsWith(b) || (t = b + t), e + t);
var S = (e, t, o) => {
  let s = e.pathname === b ? t : I(e.pathname, t), a = new globalThis.URL(s, e);
  if (o)
    for (let [c, m] of Object.entries(g(o)))
      if (m && typeof m == "object" && !Array.isArray(m))
        for (let [n, d] of Object.entries(m))
          a.searchParams.set(`${c}[${n}]`, String(d));
      else
        a.searchParams.set(c, m);
  return a;
};
var O = () => {
  let e = null;
  return { get: async () => e, set: async (t) => {
    e = t;
  } };
};
var A = { msRefreshBeforeExpires: 3e4, autoRefresh: true };
var Ui = (e = "cookie", t = {}) => (o) => {
  let s = { ...A, ...t }, a = null, c = null, m = s.storage ?? O(), n = () => {
    m.set({ access_token: null, refresh_token: null, expires: null, expires_at: null });
  }, d = async () => {
    try {
      await a;
    } finally {
      a = null;
    }
  }, f = async () => {
    let p = await m.get();
    if (a || !(p == null ? void 0 : p.expires_at)) {
      await d();
      return;
    }
    p.expires_at < (/* @__PURE__ */ new Date()).getTime() + s.msRefreshBeforeExpires && j2().catch((i) => {
    }), await d();
  }, l = (p) => {
    let i = p.expires ?? 0;
    p.expires_at = (/* @__PURE__ */ new Date()).getTime() + i, m.set(p), s.autoRefresh && i > s.msRefreshBeforeExpires && i < Number.MAX_SAFE_INTEGER && (c && clearTimeout(c), c = setTimeout(() => {
      c = null, j2().catch((u) => {
      });
    }, i - s.msRefreshBeforeExpires));
  }, j2 = async () => (a = (async () => {
    let i = await m.get();
    n();
    let u = { method: "POST", headers: { "Content-Type": "application/json" } };
    "credentials" in s && (u.credentials = s.credentials);
    let T = { mode: e };
    e === "json" && (i == null ? void 0 : i.refresh_token) && (T.refresh_token = i.refresh_token), u.body = JSON.stringify(T);
    let x2 = S(o.url, "/auth/refresh"), Q = await y(x2.toString(), u, o.globals.fetch);
    return l(Q), Q;
  })().catch((i) => {
    throw i;
  }), a);
  return { refresh: j2, async login(p, i, u = {}) {
    n();
    let T = S(o.url, "/auth/login"), x2 = { email: p, password: i };
    "otp" in u && (x2.otp = u.otp), x2.mode = u.mode ?? e;
    let Q = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(x2) };
    "credentials" in s && (Q.credentials = s.credentials);
    let C = await y(T.toString(), Q, o.globals.fetch);
    return l(C), C;
  }, async logout() {
    let p = await m.get(), i = { method: "POST", headers: { "Content-Type": "application/json" } };
    "credentials" in s && (i.credentials = s.credentials), e === "json" && (p == null ? void 0 : p.refresh_token) && (i.body = JSON.stringify({ refresh_token: p.refresh_token }));
    let u = S(o.url, "/auth/logout");
    await y(u.toString(), i, o.globals.fetch), c && clearTimeout(c), n();
  }, async getToken() {
    var _a2;
    return await f(), ((_a2 = await m.get()) == null ? void 0 : _a2.access_token) ?? null;
  }, setToken(p) {
    m.set({ access_token: p, refresh_token: null, expires: null, expires_at: null });
  } };
};
var $i = (e) => (t) => {
  let o = e ?? null;
  return { async getToken() {
    return o;
  }, setToken(s) {
    o = s;
  } };
};

// node_modules/.pnpm/@directus+sdk@12.0.1/node_modules/@directus/sdk/dist/chunk-H2IAC3N4.js
function g2(t) {
  return JSON.stringify({ ...t, type: "auth" });
}
var W = () => JSON.stringify({ type: "pong" });
var E2 = (t, u = 1e3) => new Promise((o, b2) => {
  let p = (y2) => {
    try {
      let S2 = JSON.parse(y2.data);
      typeof S2 == "object" && !Array.isArray(S2) && S2 !== null ? (l(), o(S2)) : (l(), c());
    } catch {
      l(), o(y2);
    }
  }, c = () => b2(), l = () => {
    clearTimeout(m), t.removeEventListener("message", p), t.removeEventListener("error", c), t.removeEventListener("close", c);
  };
  t.addEventListener("message", p), t.addEventListener("error", c), t.addEventListener("close", c);
  let m = setTimeout(() => {
    l(), o(void 0);
  }, u);
});
function* k2() {
  let t = 1;
  for (; ; )
    yield String(t), t++;
}
var x = { authMode: "handshake", heartbeat: true, reconnect: { delay: 1e3, retries: 10 } };
function j(t = {}) {
  return (u) => {
    t = { ...x, ...t };
    let o = null, b2 = k2(), p = 0, c = false, l = (e) => "getToken" in e, m = async (e, n) => {
      if (t.authMode === "strict" && l(n)) {
        let r2 = await n.getToken();
        r2 && e.searchParams.set("access_token", r2);
      }
      return e;
    }, y2 = async (e) => {
      if ("url" in t)
        return await m(new u.globals.URL(t.url), e);
      if (["ws:", "wss:"].includes(u.url.protocol))
        return await m(u.url, e);
      let n = new u.globals.URL(u.url.toString());
      return n.protocol = u.url.protocol === "https:" ? "wss:" : "ws:", n.pathname = "/websocket", await m(n, e);
    }, S2 = () => {
      o = null, b2 = k2();
    };
    function v() {
      t.reconnect && !c && p < t.reconnect.retries ? (c = true, setTimeout(() => {
        p += 1, this.connect().then(() => {
          p = 0, c = false;
        }).catch(() => {
        });
      }, Math.max(1, t.reconnect.delay))) : c = false;
    }
    let d = { open: /* @__PURE__ */ new Set([]), error: /* @__PURE__ */ new Set([]), close: /* @__PURE__ */ new Set([]), message: /* @__PURE__ */ new Set([]) }, C = async (e, n) => {
      for (; e.readyState !== WebSocket.CLOSED; ) {
        let r2 = await E2(e).catch(() => {
        });
        if (r2) {
          if ("type" in r2) {
            if (r2.type === "auth" && "status" in r2 && r2.status === "error" && "error" in r2) {
              if (r2.error === "TOKEN_EXPIRED" && l(n)) {
                let i = await n.getToken();
                if (i) {
                  e.send(g2({ access_token: i }));
                  continue;
                }
              }
              if (r2.error === "AUTH_TIMEOUT") {
                e.close();
                continue;
              }
            }
            if (t.heartbeat && r2.type === "ping") {
              e.send(W());
              continue;
            }
          }
          d.message.forEach((i) => i.call(e, r2));
        }
      }
    };
    return { async connect() {
      let e = this, n = await y2(e);
      return new Promise((r2, i) => {
        let f = false, a = new u.globals.WebSocket(n);
        a.addEventListener("open", async (s) => {
          if (t.authMode === "handshake" && l(e)) {
            let h2 = await e.getToken();
            h2 && a.send(g2({ access_token: h2 }));
          }
          f = true, d.open.forEach((h2) => h2.call(a, s)), C(a, e), r2();
        }), a.addEventListener("error", (s) => {
          d.error.forEach((h2) => h2.call(a, s)), a.close(), f || i(s);
        }), a.addEventListener("close", (s) => {
          d.close.forEach((h2) => h2.call(a, s)), S2(), v.call(this), f || i(s);
        }), o = a;
      });
    }, disconnect() {
      o && (o == null ? void 0 : o.readyState) === WebSocket.OPEN && o.close(), o = null;
    }, onWebSocket(e, n) {
      if (e === "message") {
        let r2 = function(i) {
          if (typeof i.data != "string")
            return n.call(this, i);
          try {
            return n.call(this, JSON.parse(i.data));
          } catch {
            return n.call(this, i);
          }
        };
        return d[e].add(r2), () => d[e].delete(r2);
      }
      return d[e].add(n), () => d[e].delete(n);
    }, sendMessage(e) {
      if (!o || (o == null ? void 0 : o.readyState) !== WebSocket.OPEN)
        throw new Error("websocket connection not OPEN");
      if (typeof e == "string") {
        o.send(e);
        return;
      }
      "uid" in e || (e.uid = b2.next().value), o == null ? void 0 : o.send(JSON.stringify(e));
    }, async subscribe(e, n = {}) {
      (!o || o.readyState !== WebSocket.OPEN) && await this.connect(), "uid" in n || (n.uid = b2.next().value);
      let r2 = true, i = o, f = (s) => i.send(JSON.stringify(s));
      f({ ...n, collection: e, type: "subscribe" });
      async function* a() {
        for (; r2 && i && i.readyState === WebSocket.OPEN; ) {
          let s = await E2(i).catch(() => {
          });
          if (s) {
            if ("type" in s && "status" in s && s.type === "subscribe" && s.status === "error")
              throw s;
            "type" in s && "uid" in s && s.type === "subscription" && s.uid === n.uid && (yield s);
          }
        }
        if (t.reconnect && c) {
          for (; c; )
            await w(10);
          o && o.readyState === WebSocket.OPEN && (o.send(JSON.stringify({ ...n, collection: e, type: "subscribe" })), yield* a());
        }
      }
      return { subscription: a(), unsubscribe() {
        f({ uid: n.uid, type: "unsubscribe" }), r2 = false;
      } };
    } };
  };
}
var w = (t) => new Promise((u) => setTimeout(() => u(), t));
export {
  hn as acceptUserInvite,
  jo as aggregate,
  g2 as auth,
  sn as authenticateShare,
  Ui as authentication,
  _c as clearCache,
  pe as createCollection,
  ne as createComment,
  ue as createDashboard,
  he as createDashboards,
  E as createDirectus,
  Se as createField,
  be as createFlow,
  Te as createFlows,
  Re as createFolder,
  Ce as createFolders,
  Oe as createItem,
  ge as createItems,
  Ie as createNotification,
  Fe as createNotifications,
  we as createOperation,
  Ee as createOperations,
  Ue as createPanel,
  ve as createPanels,
  Ke as createPermission,
  $e as createPermissions,
  We as createPreset,
  Le as createPresets,
  He as createRelation,
  Be as createRole,
  qe as createRoles,
  Ve as createShare,
  ze as createShares,
  Ze as createTranslation,
  Ye as createTranslations,
  rt as createUser,
  tt as createUsers,
  at as createWebhook,
  st as createWebhooks,
  Ft as deleteCollection,
  Ot as deleteComment,
  Gt as deleteDashboard,
  Kt as deleteDashboards,
  kt as deleteField,
  Bt as deleteFile,
  qt as deleteFiles,
  Xt as deleteFlow,
  Vt as deleteFlows,
  tr as deleteFolder,
  er as deleteFolders,
  ar as deleteItem,
  sr as deleteItems,
  ir as deleteNotification,
  nr as deleteNotifications,
  ur as deleteOperation,
  hr as deleteOperations,
  fr as deletePanel,
  lr as deletePanels,
  br as deletePermission,
  Tr as deletePermissions,
  Dr as deletePreset,
  Rr as deletePresets,
  Pr as deleteRelation,
  Er as deleteRole,
  Ar as deleteRoles,
  Ur as deleteShare,
  vr as deleteShares,
  Gr as deleteTranslation,
  Kr as deleteTranslations,
  Hr as deleteUser,
  kr as deleteUsers,
  Mr as deleteWebhook,
  Br as deleteWebhooks,
  Sn as disableTwoFactor,
  yn as enableTwoFactor,
  Xc as generateHash,
  un as generateTwoFactorSecret,
  k2 as generateUid,
  K as graphql,
  xe as importFile,
  an as inviteShare,
  dn as inviteUser,
  k as login,
  _ as logout,
  O as memoryStorage,
  E2 as messageCallback,
  B as passwordRequest,
  z as passwordReset,
  W as pong,
  g as queryToParams,
  xo as readActivities,
  Qo as readActivity,
  go as readCollection,
  Do as readCollections,
  Io as readDashboard,
  Fo as readDashboards,
  Eo as readExtensions,
  Jo as readField,
  vo as readFields,
  Uo as readFieldsByCollection,
  Lo as readFile,
  Go as readFiles,
  _o as readFlow,
  Ho as readFlows,
  zo as readFolder,
  Mo as readFolders,
  Ja as readGraphqlSdl,
  Zo as readItem,
  Yo as readItems,
  Vs as readMe,
  os as readNotification,
  rs as readNotifications,
  ka as readOpenApiSpec,
  cs as readOperation,
  ms as readOperations,
  ds as readPanel,
  ps as readPanels,
  Ss as readPermission,
  ys as readPermissions,
  Qs as readPreset,
  xs as readPresets,
  X as readProviders,
  Rs as readRelation,
  Cs as readRelationByCollection,
  js as readRelations,
  Ps as readRevision,
  Os as readRevisions,
  Es as readRole,
  As as readRoles,
  Ns as readSettings,
  $s as readShare,
  mn as readShareInfo,
  Js as readShares,
  Ls as readSingleton,
  _s as readTranslation,
  Hs as readTranslations,
  zs as readUser,
  Ms as readUsers,
  ea as readWebhook,
  Zs as readWebhooks,
  j as realtime,
  Z as refresh,
  $n as rest,
  Oa as schemaApply,
  Fa as schemaDiff,
  Aa as schemaSnapshot,
  Ka as serverHealth,
  La as serverInfo,
  _a as serverPing,
  w as sleep,
  $i as staticToken,
  h as throwIfCoreCollection,
  r as throwIfEmpty,
  zc as triggerFlow,
  rn as triggerOperation,
  om as updateCollection,
  em as updateComment,
  cm as updateDashboard,
  mm as updateDashboards,
  pm as updateField,
  ym as updateFile,
  um as updateFiles,
  xm as updateFlow,
  fm as updateFlows,
  jm as updateFolder,
  bm as updateFolders,
  gm as updateItem,
  Dm as updateItems,
  fc as updateMe,
  Im as updateNotification,
  Fm as updateNotifications,
  Nm as updateOperation,
  wm as updateOperations,
  $m as updatePanel,
  Jm as updatePanels,
  Wm as updatePermission,
  Lm as updatePermissions,
  qm as updatePreset,
  _m as updatePresets,
  zm as updateRelation,
  Zm as updateRole,
  Ym as updateRoles,
  tc as updateSettings,
  ac as updateShare,
  sc as updateShares,
  nc as updateSingleton,
  hc as updateTranslation,
  dc as updateTranslations,
  lc as updateUser,
  Sc as updateUsers,
  bc as updateWebhook,
  Tc as updateWebhooks,
  fe as uploadFiles,
  nn as utilitySort,
  Bc as utilsExport,
  en as utilsImport,
  Yc as verifyHash,
  Gn as withOptions,
  Wn as withSearch,
  Hn as withToken
};
//# sourceMappingURL=@directus_sdk.js.map
