/*! NanoPop 2.3.0 MIT | https://github.com/Simonwep/nanopop */
const A = "2.3.0", k = {
  variantFlipOrder: { start: "sme", middle: "mse", end: "ems" },
  positionFlipOrder: { top: "tbrl", right: "rltb", bottom: "btrl", left: "lrbt" },
  position: "bottom",
  margin: 8,
  padding: 0
}, q = (s, i, f) => {
  const {
    container: l,
    arrow: a,
    margin: e,
    padding: c,
    position: B,
    variantFlipOrder: M,
    positionFlipOrder: C
  } = {
    container: document.documentElement.getBoundingClientRect(),
    ...k,
    ...f
  }, { left: F, top: K } = i.style;
  i.style.left = "0", i.style.top = "0";
  const t = s.getBoundingClientRect(), o = i.getBoundingClientRect(), S = {
    t: t.top - o.height - e,
    b: t.bottom + e,
    r: t.right + e,
    l: t.left - o.width - e
  }, V = {
    vs: t.left,
    vm: t.left + t.width / 2 - o.width / 2,
    ve: t.left + t.width - o.width,
    hs: t.top,
    hm: t.bottom - t.height / 2 - o.height / 2,
    he: t.bottom - o.height
  }, [$, E = "middle"] = B.split("-"), R = C[$], j = M[E], { top: u, left: v, bottom: b, right: y } = l;
  for (const p of R) {
    const r = p === "t" || p === "b";
    let n = S[p];
    const [m, d] = r ? ["top", "left"] : ["left", "top"], [w, g] = r ? [o.height, o.width] : [o.width, o.height], [z, L] = r ? [b, y] : [y, b], [P, T] = r ? [u, v] : [v, u];
    if (!(n < P || n + w + c > z))
      for (const x of j) {
        let h = V[(r ? "v" : "h") + x];
        if (!(h < T || h + g + c > L)) {
          if (h -= o[d], n -= o[m], i.style[d] = `${h}px`, i.style[m] = `${n}px`, a) {
            const O = r ? t.width / 2 : t.height / 2, H = O * 2 < g ? t[d] + O : h + g / 2;
            n < t[m] && (n += w), a.style[d] = `${H}px`, a.style[m] = `${n}px`;
          }
          return p + x;
        }
      }
  }
  return i.style.left = F, i.style.top = K, null;
}, D = (s, i, f) => {
  const l = typeof s == "object" && !(s instanceof HTMLElement) ? s : { reference: s, popper: i, ...f };
  return {
    /**
     * Repositions the current popper.
     * @param options Optional options which get merged with the current ones.
     */
    update(a = l) {
      const { reference: e, popper: c } = Object.assign(l, a);
      if (!c || !e)
        throw new Error("Popper- or reference-element missing.");
      return q(e, c, l);
    }
  };
};
export {
  D as createPopper,
  k as defaults,
  q as reposition,
  A as version
};
//# sourceMappingURL=nanopop.mjs.map
