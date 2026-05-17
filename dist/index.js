import { jsxs as L, jsx as h, Fragment as Ot } from "react/jsx-runtime";
import * as c from "react";
import y, { useState as De, useRef as Ze, useLayoutEffect as Yt, useEffect as ge, useMemo as Zn } from "react";
import * as Qn from "react-dom";
import Jn, { createPortal as Xt } from "react-dom";
function ga({ leftIcon: e, children: t, className: n = "", ...r }) {
  return /* @__PURE__ */ L("button", { type: "button", className: `ds-button${n ? ` ${n}` : ""}`, ...r, children: [
    e && /* @__PURE__ */ h("span", { className: "ds-button__icon", "aria-hidden": "true", children: e }),
    /* @__PURE__ */ h("span", { children: t })
  ] });
}
function wa({ children: e, title: t, subtitle: n, className: r = "" }) {
  return /* @__PURE__ */ L("div", { className: `ds-card ${r}`, children: [
    (t || n) && /* @__PURE__ */ L("div", { className: "ds-card-header", children: [
      t && /* @__PURE__ */ h("h2", { className: "ds-card-title", children: t }),
      n && /* @__PURE__ */ h("p", { className: "ds-card-subtitle", children: n })
    ] }),
    e
  ] });
}
function ya({
  label: e,
  value: t,
  onChange: n,
  onBlur: r,
  type: o = "text",
  placeholder: a,
  prefix: s,
  suffix: i,
  className: l = "",
  inputMode: u,
  testId: d
}) {
  const [m, v] = De(!1), N = m ? "ds-input--focused" : t !== "" && t !== void 0 ? "ds-input--has-data" : "", f = () => {
    v(!1), r == null || r();
  };
  return /* @__PURE__ */ L("div", { className: `ds-input-field ${l}`, children: [
    /* @__PURE__ */ h("label", { className: "ds-input-label", children: e }),
    /* @__PURE__ */ L("div", { className: `ds-input-wrapper ${N}`, children: [
      s && /* @__PURE__ */ h("span", { className: "ds-input-prefix", children: s }),
      /* @__PURE__ */ h(
        "input",
        {
          type: o,
          value: t,
          onChange: (g) => n(g.target.value),
          onFocus: () => v(!0),
          onBlur: f,
          placeholder: a,
          inputMode: u,
          className: "ds-input",
          "data-testid": d
        }
      ),
      i && /* @__PURE__ */ h("span", { className: "ds-input-suffix", children: i })
    ] })
  ] });
}
function ba({
  label: e,
  amount: t,
  strong: n = !1,
  showSign: r = !0,
  className: o = "",
  currency: a = "GBP",
  locale: s = "en-GB"
}) {
  const i = t > 0, l = t < 0, u = new Intl.NumberFormat(s, {
    style: "currency",
    currency: a,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(t));
  let d = u;
  return r && l && (d = `-${u}`), /* @__PURE__ */ L("div", { className: `ds-money-row ${i && n ? "ds-money-row--positive" : l ? "ds-money-row--negative" : ""} ${n ? "ds-money-row--strong" : ""} ${o}`, children: [
    /* @__PURE__ */ h("span", { className: "ds-money-row-label", children: e }),
    /* @__PURE__ */ h(
      "span",
      {
        className: "ds-money-row-amount",
        "data-testid": `money-${e.toLowerCase().replace(/\s+/g, "-")}`,
        children: d
      }
    )
  ] });
}
function Ca() {
  return /* @__PURE__ */ h("div", { className: "ds-divider" });
}
function Ea({ options: e, value: t, onChange: n, className: r = "" }) {
  return /* @__PURE__ */ h("div", { className: `ds-segmented-control ${r}`, role: "tablist", children: e.map((o) => /* @__PURE__ */ h(
    "button",
    {
      type: "button",
      role: "tab",
      "aria-selected": t === o.value,
      className: `ds-segment ${t === o.value ? "ds-segment--selected" : ""}`,
      onClick: () => n(o.value),
      "data-testid": `segment-${o.value}`,
      children: o.label
    },
    o.value
  )) });
}
function Sa({ checked: e, onChange: t, offLabel: n = "Off", onLabel: r = "On", className: o = "" }) {
  return /* @__PURE__ */ L("div", { className: `ds-switch-container ${o}`, children: [
    /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        className: `ds-switch-option ${e ? "" : "ds-switch-option--selected"}`,
        onClick: () => t(!1),
        "data-testid": "switch-off",
        children: n
      }
    ),
    /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        className: `ds-switch-option ${e ? "ds-switch-option--selected" : ""}`,
        onClick: () => t(!0),
        "data-testid": "switch-on",
        children: r
      }
    )
  ] });
}
function Ra({ label: e, options: t, value: n, onChange: r, className: o = "", testId: a }) {
  const [s, i] = De(!1), [l, u] = De(null), d = Ze(null), m = Ze(null), v = Ze(null), C = t.find((g) => g.value === n), N = () => {
    if (!d.current) return;
    const g = d.current.getBoundingClientRect(), p = window.innerHeight, E = 8, D = 12, b = Math.min(p * 0.6, 320), x = p - g.bottom - D, k = g.top - D, w = x < b && k > x;
    u({
      top: w ? g.top - E : g.bottom + E,
      left: g.left,
      width: g.width,
      openUpward: w
    });
  };
  Yt(() => {
    s && N();
  }, [s]), ge(() => {
    if (!s) return;
    const g = () => N(), p = () => N();
    return window.addEventListener("scroll", g, !0), window.addEventListener("resize", p), () => {
      window.removeEventListener("scroll", g, !0), window.removeEventListener("resize", p);
    };
  }, [s]), ge(() => {
    if (!s) return;
    const g = (p) => {
      const E = p.target;
      v.current && !v.current.contains(E) && m.current && !m.current.contains(E) && i(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [s]), ge(() => {
    if (!s) return;
    const g = (p) => {
      var E;
      p.key === "Escape" && (i(!1), (E = d.current) == null || E.focus());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [s]);
  const f = s && l && Xt(
    /* @__PURE__ */ h(
      "div",
      {
        ref: m,
        className: `ds-select-dropdown ${l.openUpward ? "ds-select-dropdown--upward" : ""}`,
        style: {
          position: "fixed",
          top: l.openUpward ? "auto" : l.top,
          bottom: l.openUpward ? `${window.innerHeight - l.top}px` : "auto",
          left: l.left,
          width: l.width
        },
        "data-testid": a ? `${a}-dropdown` : void 0,
        children: t.map((g) => /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            className: `ds-select-option ${n === g.value ? "ds-select-option--selected" : ""}`,
            onClick: () => {
              var p;
              r(g.value), i(!1), (p = d.current) == null || p.focus();
            },
            "data-testid": `option-${g.value}`,
            children: g.label
          },
          g.value
        ))
      }
    ),
    document.body
  );
  return /* @__PURE__ */ L("div", { className: `ds-select-field ${o}`, ref: v, children: [
    /* @__PURE__ */ h("label", { className: "ds-select-label", children: e }),
    /* @__PURE__ */ L(
      "button",
      {
        ref: d,
        type: "button",
        className: `ds-select-trigger ${s ? "ds-select-trigger--open" : ""}`,
        onClick: () => i(!s),
        "data-testid": a,
        "aria-haspopup": "listbox",
        "aria-expanded": s,
        children: [
          /* @__PURE__ */ h("span", { children: (C == null ? void 0 : C.label) || "Select..." }),
          /* @__PURE__ */ h("svg", { className: "ds-select-chevron", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ h("path", { d: "M4 6L8 10L12 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
        ]
      }
    ),
    f
  ] });
}
function Na({ items: e, activeId: t, onChange: n }) {
  return /* @__PURE__ */ h("nav", { className: "ds-bottom-nav", children: e.map((r) => /* @__PURE__ */ L(
    "button",
    {
      type: "button",
      className: `ds-bottom-nav-item ${t === r.id ? "ds-bottom-nav-item--active" : ""}`,
      onClick: () => n(r.id),
      "data-testid": `nav-${r.id}`,
      children: [
        /* @__PURE__ */ h("span", { className: "ds-bottom-nav-icon", children: r.icon }),
        /* @__PURE__ */ h("span", { className: "ds-bottom-nav-label", children: r.label })
      ]
    },
    r.id
  )) });
}
function ie(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Pt(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Kt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Pt(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Pt(e[o], null);
        }
      };
  };
}
function ue(...e) {
  return c.useCallback(Kt(...e), e);
}
function er(e, t) {
  const n = c.createContext(t), r = (a) => {
    const { children: s, ...i } = a, l = c.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ h(n.Provider, { value: l, children: s });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const s = c.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function tr(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = c.createContext(s), l = n.length;
    n = [...n, s];
    const u = (m) => {
      var p;
      const { scope: v, children: C, ...N } = m, f = ((p = v == null ? void 0 : v[e]) == null ? void 0 : p[l]) || i, g = c.useMemo(() => N, Object.values(N));
      return /* @__PURE__ */ h(f.Provider, { value: g, children: C });
    };
    u.displayName = a + "Provider";
    function d(m, v) {
      var f;
      const C = ((f = v == null ? void 0 : v[e]) == null ? void 0 : f[l]) || i, N = c.useContext(C);
      if (N) return N;
      if (s !== void 0) return s;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [u, d];
  }
  const o = () => {
    const a = n.map((s) => c.createContext(s));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || a;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: l } }),
        [i, l]
      );
    };
  };
  return o.scopeName = e, [r, nr(o, ...t)];
}
function nr(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: l, scopeName: u }) => {
        const m = l(a)[`__scope${u}`];
        return { ...i, ...m };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Te = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
}, rr = c[" useId ".trim().toString()] || (() => {
}), or = 0;
function Qe(e) {
  const [t, n] = c.useState(rr());
  return Te(() => {
    n((r) => r ?? String(or++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var ar = c[" useInsertionEffect ".trim().toString()] || Te;
function ir({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = sr({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : o;
  {
    const d = c.useRef(e !== void 0);
    c.useEffect(() => {
      const m = d.current;
      m !== i && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = i;
    }, [i, r]);
  }
  const u = c.useCallback(
    (d) => {
      var m;
      if (i) {
        const v = cr(d) ? d(e) : d;
        v !== e && ((m = s.current) == null || m.call(s, v));
      } else
        a(d);
    },
    [i, e, a, s]
  );
  return [l, u];
}
function sr({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), a = c.useRef(t);
  return ar(() => {
    a.current = t;
  }, [t]), c.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function cr(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  const t = /* @__PURE__ */ lr(e), n = c.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = c.Children.toArray(a), l = i.find(dr);
    if (l) {
      const u = l.props.children, d = i.map((m) => m === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : m);
      return /* @__PURE__ */ h(t, { ...s, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, d) : null });
    }
    return /* @__PURE__ */ h(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (c.isValidElement(o)) {
      const s = mr(o), i = fr(a, o.props);
      return o.type !== c.Fragment && (i.ref = r ? Kt(r, s) : s), c.cloneElement(o, i);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ur = Symbol("radix.slottable");
function dr(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ur;
}
function fr(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const l = a(...i);
      return o(...i), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function mr(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var vr = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], te = vr.reduce((e, t) => {
  const n = /* @__PURE__ */ qt(`Primitive.${t}`), r = c.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function hr(e, t) {
  e && Qn.flushSync(() => e.dispatchEvent(t));
}
function Oe(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function pr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var gr = "DismissableLayer", ut = "dismissableLayer.update", wr = "dismissableLayer.pointerDownOutside", yr = "dismissableLayer.focusOutside", xt, Gt = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Zt = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...l
    } = e, u = c.useContext(Gt), [d, m] = c.useState(null), v = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, C] = c.useState({}), N = ue(t, (w) => m(w)), f = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = f.indexOf(g), E = d ? f.indexOf(d) : -1, D = u.layersWithOutsidePointerEventsDisabled.size > 0, b = E >= p, x = Er((w) => {
      const P = w.target, O = [...u.branches].some(($) => $.contains(P));
      !b || O || (o == null || o(w), s == null || s(w), w.defaultPrevented || i == null || i());
    }, v), k = Sr((w) => {
      const P = w.target;
      [...u.branches].some(($) => $.contains(P)) || (a == null || a(w), s == null || s(w), w.defaultPrevented || i == null || i());
    }, v);
    return pr((w) => {
      E === u.layers.size - 1 && (r == null || r(w), !w.defaultPrevented && i && (w.preventDefault(), i()));
    }, v), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (xt = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), At(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = xt);
        };
    }, [d, v, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), At());
    }, [d, u]), c.useEffect(() => {
      const w = () => C({});
      return document.addEventListener(ut, w), () => document.removeEventListener(ut, w);
    }, []), /* @__PURE__ */ h(
      te.div,
      {
        ...l,
        ref: N,
        style: {
          pointerEvents: D ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ie(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ie(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ie(
          e.onPointerDownCapture,
          x.onPointerDownCapture
        )
      }
    );
  }
);
Zt.displayName = gr;
var br = "DismissableLayerBranch", Cr = c.forwardRef((e, t) => {
  const n = c.useContext(Gt), r = c.useRef(null), o = ue(t, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ h(te.div, { ...e, ref: o });
});
Cr.displayName = br;
function Er(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Qt(
            wr,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Sr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Qt(yr, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function At() {
  const e = new CustomEvent(ut);
  document.dispatchEvent(e);
}
function Qt(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? hr(o, a) : o.dispatchEvent(a);
}
var Je = "focusScope.autoFocusOnMount", et = "focusScope.autoFocusOnUnmount", Mt = { bubbles: !1, cancelable: !0 }, Rr = "FocusScope", Jt = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = c.useState(null), u = Oe(o), d = Oe(a), m = c.useRef(null), v = ue(t, (f) => l(f)), C = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (r) {
      let f = function(D) {
        if (C.paused || !i) return;
        const b = D.target;
        i.contains(b) ? m.current = b : ae(m.current, { select: !0 });
      }, g = function(D) {
        if (C.paused || !i) return;
        const b = D.relatedTarget;
        b !== null && (i.contains(b) || ae(m.current, { select: !0 }));
      }, p = function(D) {
        if (document.activeElement === document.body)
          for (const x of D)
            x.removedNodes.length > 0 && ae(i);
      };
      document.addEventListener("focusin", f), document.addEventListener("focusout", g);
      const E = new MutationObserver(p);
      return i && E.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", g), E.disconnect();
      };
    }
  }, [r, i, C.paused]), c.useEffect(() => {
    if (i) {
      Lt.add(C);
      const f = document.activeElement;
      if (!i.contains(f)) {
        const p = new CustomEvent(Je, Mt);
        i.addEventListener(Je, u), i.dispatchEvent(p), p.defaultPrevented || (Nr(xr(en(i)), { select: !0 }), document.activeElement === f && ae(i));
      }
      return () => {
        i.removeEventListener(Je, u), setTimeout(() => {
          const p = new CustomEvent(et, Mt);
          i.addEventListener(et, d), i.dispatchEvent(p), p.defaultPrevented || ae(f ?? document.body, { select: !0 }), i.removeEventListener(et, d), Lt.remove(C);
        }, 0);
      };
    }
  }, [i, u, d, C]);
  const N = c.useCallback(
    (f) => {
      if (!n && !r || C.paused) return;
      const g = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, p = document.activeElement;
      if (g && p) {
        const E = f.currentTarget, [D, b] = Dr(E);
        D && b ? !f.shiftKey && p === b ? (f.preventDefault(), n && ae(D, { select: !0 })) : f.shiftKey && p === D && (f.preventDefault(), n && ae(b, { select: !0 })) : p === E && f.preventDefault();
      }
    },
    [n, r, C.paused]
  );
  return /* @__PURE__ */ h(te.div, { tabIndex: -1, ...s, ref: v, onKeyDown: N });
});
Jt.displayName = Rr;
function Nr(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ae(r, { select: t }), document.activeElement !== n) return;
}
function Dr(e) {
  const t = en(e), n = _t(t, e), r = _t(t.reverse(), e);
  return [n, r];
}
function en(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function _t(e, t) {
  for (const n of e)
    if (!Tr(n, { upTo: t })) return n;
}
function Tr(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Or(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ae(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Or(e) && t && e.select();
  }
}
var Lt = Pr();
function Pr() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = It(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = It(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function It(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function xr(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ar = "Portal", tn = c.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = c.useState(!1);
  Te(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? Jn.createPortal(/* @__PURE__ */ h(te.div, { ...r, ref: t }), s) : null;
});
tn.displayName = Ar;
function Mr(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ve = (e) => {
  const { present: t, children: n } = e, r = _r(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), a = ue(r.ref, Lr(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: a }) : null;
};
Ve.displayName = "Presence";
function _r(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), a = c.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = Mr(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = _e(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [i]), Te(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const v = a.current, C = _e(u);
      e ? l("MOUNT") : C === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && v !== C ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Te(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, m = (C) => {
        const f = _e(r.current).includes(CSS.escape(C.animationName));
        if (C.target === t && f && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, v = (C) => {
        C.target === t && (a.current = _e(r.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: c.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function _e(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Lr(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var tt = 0;
function Ir() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? kt()), document.body.insertAdjacentElement("beforeend", e[1] ?? kt()), tt++, () => {
      tt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), tt--;
    };
  }, []);
}
function kt() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var J = function() {
  return J = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, J.apply(this, arguments);
};
function nn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function kr(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var We = "right-scroll-bar-position", He = "width-before-scroll-bar", $r = "with-scroll-bars-hidden", Fr = "--removed-body-scroll-bar-size";
function nt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Br(e, t) {
  var n = De(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Wr = typeof window < "u" ? c.useLayoutEffect : c.useEffect, $t = /* @__PURE__ */ new WeakMap();
function Hr(e, t) {
  var n = Br(null, function(r) {
    return e.forEach(function(o) {
      return nt(o, r);
    });
  });
  return Wr(function() {
    var r = $t.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || nt(i, null);
      }), a.forEach(function(i) {
        o.has(i) || nt(i, s);
      });
    }
    $t.set(n, e);
  }, [e]), n;
}
function Ur(e) {
  return e;
}
function Vr(e, t) {
  t === void 0 && (t = Ur);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var l = function() {
        var d = s;
        s = [], d.forEach(a);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(d) {
          s.push(d), u();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function jr(e) {
  e === void 0 && (e = {});
  var t = Vr(null);
  return t.options = J({ async: !0, ssr: !1 }, e), t;
}
var rn = function(e) {
  var t = e.sideCar, n = nn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, J({}, n));
};
rn.isSideCarExport = !0;
function zr(e, t) {
  return e.useMedium(t), rn;
}
var on = jr(), rt = function() {
}, je = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: rt,
    onWheelCapture: rt,
    onTouchMoveCapture: rt
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, m = e.shards, v = e.sideCar, C = e.noRelative, N = e.noIsolation, f = e.inert, g = e.allowPinchZoom, p = e.as, E = p === void 0 ? "div" : p, D = e.gapMode, b = nn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = v, k = Hr([n, t]), w = J(J({}, b), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(x, { sideCar: on, removeScrollBar: u, shards: m, noRelative: C, noIsolation: N, inert: f, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: D }),
    s ? c.cloneElement(c.Children.only(i), J(J({}, w), { ref: k })) : c.createElement(E, J({}, w, { className: l, ref: k }), i)
  );
});
je.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
je.classNames = {
  fullWidth: He,
  zeroRight: We
};
var Yr = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Xr() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Yr();
  return t && e.setAttribute("nonce", t), e;
}
function Kr(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function qr(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Gr = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Xr()) && (Kr(t, n), qr(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Zr = function() {
  var e = Gr();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, an = function() {
  var e = Zr(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Qr = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ot = function(e) {
  return parseInt(e || "", 10) || 0;
}, Jr = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ot(n), ot(r), ot(o)];
}, eo = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Qr;
  var t = Jr(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, to = an(), we = "data-scroll-locked", no = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat($r, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(we, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(We, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(He, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(We, " .").concat(We, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(He, " .").concat(He, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(we, `] {
    `).concat(Fr, ": ").concat(i, `px;
  }
`);
}, Ft = function() {
  var e = parseInt(document.body.getAttribute(we) || "0", 10);
  return isFinite(e) ? e : 0;
}, ro = function() {
  c.useEffect(function() {
    return document.body.setAttribute(we, (Ft() + 1).toString()), function() {
      var e = Ft() - 1;
      e <= 0 ? document.body.removeAttribute(we) : document.body.setAttribute(we, e.toString());
    };
  }, []);
}, oo = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  ro();
  var a = c.useMemo(function() {
    return eo(o);
  }, [o]);
  return c.createElement(to, { styles: no(a, !t, o, n ? "" : "!important") });
}, dt = !1;
if (typeof window < "u")
  try {
    var Le = Object.defineProperty({}, "passive", {
      get: function() {
        return dt = !0, !0;
      }
    });
    window.addEventListener("test", Le, Le), window.removeEventListener("test", Le, Le);
  } catch {
    dt = !1;
  }
var ve = dt ? { passive: !1 } : !1, ao = function(e) {
  return e.tagName === "TEXTAREA";
}, sn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ao(e) && n[t] === "visible")
  );
}, io = function(e) {
  return sn(e, "overflowY");
}, so = function(e) {
  return sn(e, "overflowX");
}, Bt = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = cn(e, r);
    if (o) {
      var a = ln(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, co = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, lo = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, cn = function(e, t) {
  return e === "v" ? io(t) : so(t);
}, ln = function(e, t) {
  return e === "v" ? co(t) : lo(t);
}, uo = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, fo = function(e, t, n, r, o) {
  var a = uo(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), u = !1, d = s > 0, m = 0, v = 0;
  do {
    if (!i)
      break;
    var C = ln(e, i), N = C[0], f = C[1], g = C[2], p = f - g - a * N;
    (N || p) && cn(e, i) && (m += p, v += N);
    var E = i.parentNode;
    i = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (d && Math.abs(m) < 1 || !d && Math.abs(v) < 1) && (u = !0), u;
}, Ie = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Wt = function(e) {
  return [e.deltaX, e.deltaY];
}, Ht = function(e) {
  return e && "current" in e ? e.current : e;
}, mo = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, vo = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ho = 0, he = [];
function po(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(ho++)[0], a = c.useState(an)[0], s = c.useRef(e);
  c.useEffect(function() {
    s.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = kr([e.lockRef.current], (e.shards || []).map(Ht), !0).filter(Boolean);
      return f.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), f.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = c.useCallback(function(f, g) {
    if ("touches" in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey)
      return !s.current.allowPinchZoom;
    var p = Ie(f), E = n.current, D = "deltaX" in f ? f.deltaX : E[0] - p[0], b = "deltaY" in f ? f.deltaY : E[1] - p[1], x, k = f.target, w = Math.abs(D) > Math.abs(b) ? "h" : "v";
    if ("touches" in f && w === "h" && k.type === "range")
      return !1;
    var P = window.getSelection(), O = P && P.anchorNode, $ = O ? O === k || O.contains(k) : !1;
    if ($)
      return !1;
    var F = Bt(w, k);
    if (!F)
      return !0;
    if (F ? x = w : (x = w === "v" ? "h" : "v", F = Bt(w, k)), !F)
      return !1;
    if (!r.current && "changedTouches" in f && (D || b) && (r.current = x), !x)
      return !0;
    var V = r.current || x;
    return fo(V, g, f, V === "h" ? D : b);
  }, []), l = c.useCallback(function(f) {
    var g = f;
    if (!(!he.length || he[he.length - 1] !== a)) {
      var p = "deltaY" in g ? Wt(g) : Ie(g), E = t.current.filter(function(x) {
        return x.name === g.type && (x.target === g.target || g.target === x.shadowParent) && mo(x.delta, p);
      })[0];
      if (E && E.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!E) {
        var D = (s.current.shards || []).map(Ht).filter(Boolean).filter(function(x) {
          return x.contains(g.target);
        }), b = D.length > 0 ? i(g, D[0]) : !s.current.noIsolation;
        b && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(f, g, p, E) {
    var D = { name: f, delta: g, target: p, should: E, shadowParent: go(p) };
    t.current.push(D), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== D;
      });
    }, 1);
  }, []), d = c.useCallback(function(f) {
    n.current = Ie(f), r.current = void 0;
  }, []), m = c.useCallback(function(f) {
    u(f.type, Wt(f), f.target, i(f, e.lockRef.current));
  }, []), v = c.useCallback(function(f) {
    u(f.type, Ie(f), f.target, i(f, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return he.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", l, ve), document.addEventListener("touchmove", l, ve), document.addEventListener("touchstart", d, ve), function() {
      he = he.filter(function(f) {
        return f !== a;
      }), document.removeEventListener("wheel", l, ve), document.removeEventListener("touchmove", l, ve), document.removeEventListener("touchstart", d, ve);
    };
  }, []);
  var C = e.removeScrollBar, N = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    N ? c.createElement(a, { styles: vo(o) }) : null,
    C ? c.createElement(oo, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function go(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const wo = zr(on, po);
var un = c.forwardRef(function(e, t) {
  return c.createElement(je, J({}, e, { ref: t, sideCar: wo }));
});
un.classNames = je.classNames;
var yo = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pe = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), $e = {}, at = 0, dn = function(e) {
  return e && (e.host || dn(e.parentNode));
}, bo = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = dn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Co = function(e, t, n, r) {
  var o = bo(t, Array.isArray(e) ? e : [e]);
  $e[n] || ($e[n] = /* @__PURE__ */ new WeakMap());
  var a = $e[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(o), u = function(m) {
    !m || i.has(m) || (i.add(m), u(m.parentNode));
  };
  o.forEach(u);
  var d = function(m) {
    !m || l.has(m) || Array.prototype.forEach.call(m.children, function(v) {
      if (i.has(v))
        d(v);
      else
        try {
          var C = v.getAttribute(r), N = C !== null && C !== "false", f = (pe.get(v) || 0) + 1, g = (a.get(v) || 0) + 1;
          pe.set(v, f), a.set(v, g), s.push(v), f === 1 && N && ke.set(v, !0), g === 1 && v.setAttribute(n, "true"), N || v.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", v, p);
        }
    });
  };
  return d(t), i.clear(), at++, function() {
    s.forEach(function(m) {
      var v = pe.get(m) - 1, C = a.get(m) - 1;
      pe.set(m, v), a.set(m, C), v || (ke.has(m) || m.removeAttribute(r), ke.delete(m)), C || m.removeAttribute(n);
    }), at--, at || (pe = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), $e = {});
  };
}, Eo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = yo(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Co(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ze = "Dialog", [fn] = tr(ze), [So, Z] = fn(ze), mn = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = c.useRef(null), l = c.useRef(null), [u, d] = ir({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: ze
  });
  return /* @__PURE__ */ h(
    So,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: Qe(),
      titleId: Qe(),
      descriptionId: Qe(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((m) => !m), [d]),
      modal: s,
      children: n
    }
  );
};
mn.displayName = ze;
var vn = "DialogTrigger", hn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Z(vn, n), a = ue(t, o.triggerRef);
    return /* @__PURE__ */ h(
      te.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": pt(o.open),
        ...r,
        ref: a,
        onClick: ie(e.onClick, o.onOpenToggle)
      }
    );
  }
);
hn.displayName = vn;
var vt = "DialogPortal", [Ro, pn] = fn(vt, {
  forceMount: void 0
}), gn = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Z(vt, t);
  return /* @__PURE__ */ h(Ro, { scope: t, forceMount: n, children: c.Children.map(r, (s) => /* @__PURE__ */ h(Ve, { present: n || a.open, children: /* @__PURE__ */ h(tn, { asChild: !0, container: o, children: s }) })) });
};
gn.displayName = vt;
var Ue = "DialogOverlay", wn = c.forwardRef(
  (e, t) => {
    const n = pn(Ue, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Z(Ue, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ h(Ve, { present: r || a.open, children: /* @__PURE__ */ h(Do, { ...o, ref: t }) }) : null;
  }
);
wn.displayName = Ue;
var No = /* @__PURE__ */ qt("DialogOverlay.RemoveScroll"), Do = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Z(Ue, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ h(un, { as: No, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ h(
        te.div,
        {
          "data-state": pt(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), le = "DialogContent", yn = c.forwardRef(
  (e, t) => {
    const n = pn(le, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Z(le, e.__scopeDialog);
    return /* @__PURE__ */ h(Ve, { present: r || a.open, children: a.modal ? /* @__PURE__ */ h(To, { ...o, ref: t }) : /* @__PURE__ */ h(Oo, { ...o, ref: t }) });
  }
);
yn.displayName = le;
var To = c.forwardRef(
  (e, t) => {
    const n = Z(le, e.__scopeDialog), r = c.useRef(null), o = ue(t, n.contentRef, r);
    return c.useEffect(() => {
      const a = r.current;
      if (a) return Eo(a);
    }, []), /* @__PURE__ */ h(
      bn,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ie(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: ie(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: ie(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Oo = c.forwardRef(
  (e, t) => {
    const n = Z(le, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ h(
      bn,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, i;
          (s = e.onCloseAutoFocus) == null || s.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), bn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Z(le, n), l = c.useRef(null), u = ue(t, l);
    return Ir(), /* @__PURE__ */ L(Ot, { children: [
      /* @__PURE__ */ h(
        Jt,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ h(
            Zt,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": pt(i.open),
              ...s,
              ref: u,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ L(Ot, { children: [
        /* @__PURE__ */ h(Ao, { titleId: i.titleId }),
        /* @__PURE__ */ h(_o, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), ht = "DialogTitle", Po = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Z(ht, n);
    return /* @__PURE__ */ h(te.h2, { id: o.titleId, ...r, ref: t });
  }
);
Po.displayName = ht;
var Cn = "DialogDescription", xo = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Z(Cn, n);
    return /* @__PURE__ */ h(te.p, { id: o.descriptionId, ...r, ref: t });
  }
);
xo.displayName = Cn;
var En = "DialogClose", Sn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Z(En, n);
    return /* @__PURE__ */ h(
      te.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ie(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Sn.displayName = En;
function pt(e) {
  return e ? "open" : "closed";
}
var Rn = "DialogTitleWarning", [Da, Nn] = er(Rn, {
  contentName: le,
  titleName: ht,
  docsSlug: "dialog"
}), Ao = ({ titleId: e }) => {
  const t = Nn(Rn), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Mo = "DialogDescriptionWarning", _o = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Nn(Mo).contentName}}.`;
  return c.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Lo = mn, Io = hn, ko = gn, $o = wn, Fo = yn, Bo = Sn;
function Wo(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Dn = y.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldAnimate: {
    current: !0
  },
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), Pe = () => {
  const e = y.useContext(Dn);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
Wo(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function Ho() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function Uo() {
  return gt(/^Mac/);
}
function Vo() {
  return gt(/^iPhone/);
}
function Ut() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function jo() {
  return gt(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Uo() && navigator.maxTouchPoints > 1;
}
function Tn() {
  return Vo() || jo();
}
function gt(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const zo = 24, Yo = typeof window < "u" ? Yt : ge;
function Vt(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const it = typeof document < "u" && window.visualViewport;
function jt(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function On(e) {
  for (jt(e) && (e = e.parentElement); e && !jt(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const Xo = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let Fe = 0, st;
function Ko(e = {}) {
  let { isDisabled: t } = e;
  Yo(() => {
    if (!t)
      return Fe++, Fe === 1 && Tn() && (st = qo()), () => {
        Fe--, Fe === 0 && (st == null || st());
      };
  }, [
    t
  ]);
}
function qo() {
  let e, t = 0, n = (m) => {
    e = On(m.target), !(e === document.documentElement && e === document.body) && (t = m.changedTouches[0].pageY);
  }, r = (m) => {
    if (!e || e === document.documentElement || e === document.body) {
      m.preventDefault();
      return;
    }
    let v = m.changedTouches[0].pageY, C = e.scrollTop, N = e.scrollHeight - e.clientHeight;
    N !== 0 && ((C <= 0 && v > t || C >= N && v < t) && m.preventDefault(), t = v);
  }, o = (m) => {
    let v = m.target;
    ft(v) && v !== document.activeElement && (m.preventDefault(), v.style.transform = "translateY(-2000px)", v.focus(), requestAnimationFrame(() => {
      v.style.transform = "";
    }));
  }, a = (m) => {
    let v = m.target;
    ft(v) && (v.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      v.style.transform = "", it && (it.height < window.innerHeight ? requestAnimationFrame(() => {
        zt(v);
      }) : it.addEventListener("resize", () => zt(v), {
        once: !0
      }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, l = window.pageYOffset, u = Vt(Go(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = Vt(Re(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Re(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Re(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), Re(document, "focus", a, !0), Re(window, "scroll", s));
  return () => {
    u(), d(), window.scrollTo(i, l);
  };
}
function Go(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Re(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function zt(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = On(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const s = n.getBoundingClientRect().bottom + zo;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function ft(e) {
  return e instanceof HTMLInputElement && !Xo.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Zo(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Qo(...e) {
  return (t) => e.forEach((n) => Zo(n, t));
}
function Pn(...e) {
  return c.useCallback(Qo(...e), e);
}
const xn = /* @__PURE__ */ new WeakMap();
function H(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && xn.set(e, r);
}
function Jo(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = xn.get(e);
  n && (e.style[t] = n[t]);
}
const W = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function Be(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[W(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[W(t) ? 5 : 4]) : null);
}
function ea(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function ct(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function ta(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const I = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, An = 0.4, na = 0.25, ra = 100, Mn = 8, ce = 16, mt = 26, lt = "vaul-dragging";
function _n(e) {
  const t = y.useRef(e);
  return y.useEffect(() => {
    t.current = e;
  }), y.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function oa({ defaultProp: e, onChange: t }) {
  const n = y.useState(e), [r] = n, o = y.useRef(r), a = _n(t);
  return y.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function Ln({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = oa({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = _n(n), l = y.useCallback((u) => {
    if (a) {
      const m = typeof u == "function" ? u(e) : u;
      m !== e && i(m);
    } else
      o(u);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    l
  ];
}
function aa({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s, direction: i = "bottom", container: l, snapToSequentialPoint: u }) {
  const [d, m] = Ln({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [v, C] = y.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  y.useEffect(() => {
    function w() {
      C({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []);
  const N = y.useMemo(() => d === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    d
  ]), f = y.useMemo(() => {
    var w;
    return (w = n == null ? void 0 : n.findIndex((P) => P === d)) != null ? w : null;
  }, [
    n,
    d
  ]), g = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === d || !n, p = y.useMemo(() => {
    const w = l ? {
      width: l.getBoundingClientRect().width,
      height: l.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var P;
    return (P = n == null ? void 0 : n.map((O) => {
      const $ = typeof O == "string";
      let F = 0;
      if ($ && (F = parseInt(O, 10)), W(i)) {
        const R = $ ? F : v ? O * w.height : 0;
        return v ? i === "bottom" ? w.height - R : -w.height + R : R;
      }
      const V = $ ? F : v ? O * w.width : 0;
      return v ? i === "right" ? w.width - V : -w.width + V : V;
    })) != null ? P : [];
  }, [
    n,
    v,
    l
  ]), E = y.useMemo(() => f !== null ? p == null ? void 0 : p[f] : null, [
    p,
    f
  ]), D = y.useCallback((w) => {
    var P;
    const O = (P = p == null ? void 0 : p.findIndex(($) => $ === w)) != null ? P : null;
    s(O), H(r.current, {
      transition: `transform ${I.DURATION}s cubic-bezier(${I.EASE.join(",")})`,
      transform: W(i) ? `translate3d(0, ${w}px, 0)` : `translate3d(${w}px, 0, 0)`
    }), p && O !== p.length - 1 && a !== void 0 && O !== a && O < a ? H(o.current, {
      transition: `opacity ${I.DURATION}s cubic-bezier(${I.EASE.join(",")})`,
      opacity: "0"
    }) : H(o.current, {
      transition: `opacity ${I.DURATION}s cubic-bezier(${I.EASE.join(",")})`,
      opacity: "1"
    }), m(n == null ? void 0 : n[Math.max(O, 0)]);
  }, [
    r.current,
    n,
    p,
    a,
    o,
    m
  ]);
  y.useEffect(() => {
    if (d || e) {
      var w;
      const P = (w = n == null ? void 0 : n.findIndex((O) => O === e || O === d)) != null ? w : -1;
      p && P !== -1 && typeof p[P] == "number" && D(p[P]);
    }
  }, [
    d,
    e,
    n,
    p,
    D
  ]);
  function b({ draggedDistance: w, closeDrawer: P, velocity: O, dismissible: $ }) {
    if (a === void 0) return;
    const F = i === "bottom" || i === "right" ? (E ?? 0) - w : (E ?? 0) + w, V = f === a - 1, R = f === 0, X = w > 0;
    if (V && H(o.current, {
      transition: `opacity ${I.DURATION}s cubic-bezier(${I.EASE.join(",")})`
    }), !u && O > 2 && !X) {
      $ ? P() : D(p[0]);
      return;
    }
    if (!u && O > 2 && X && p && n) {
      D(p[n.length - 1]);
      return;
    }
    const j = p == null ? void 0 : p.reduce((U, ee) => typeof U != "number" || typeof ee != "number" ? U : Math.abs(ee - F) < Math.abs(U - F) ? ee : U), K = W(i) ? window.innerHeight : window.innerWidth;
    if (O > An && Math.abs(w) < K * 0.4) {
      const U = X ? 1 : -1;
      if (U > 0 && N && n) {
        D(p[n.length - 1]);
        return;
      }
      if (R && U < 0 && $ && P(), f === null) return;
      D(p[f + U]);
      return;
    }
    D(j);
  }
  function x({ draggedDistance: w }) {
    if (E === null) return;
    const P = i === "bottom" || i === "right" ? E - w : E + w;
    (i === "bottom" || i === "right") && P < p[p.length - 1] || (i === "top" || i === "left") && P > p[p.length - 1] || H(r.current, {
      transform: W(i) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function k(w, P) {
    if (!n || typeof f != "number" || !p || a === void 0) return null;
    const O = f === a - 1;
    if (f >= a && P)
      return 0;
    if (O && !P) return 1;
    if (!g && !O) return null;
    const F = O ? f + 1 : f - 1, V = O ? p[F] - p[F - 1] : p[F + 1] - p[F], R = w / Math.abs(V);
    return O ? 1 - R : R;
  }
  return {
    isLastSnapPoint: N,
    activeSnapPoint: d,
    shouldFade: g,
    getPercentageDragged: k,
    setActiveSnapPoint: m,
    activeSnapPointIndex: f,
    onRelease: b,
    onDrag: x,
    snapPointsOffset: p
  };
}
const ia = () => () => {
};
function sa() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = Pe(), a = y.useRef(null), s = Zn(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - mt) / window.innerWidth;
  }
  y.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const l = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!l) return;
      ta(r && !o ? ct(document.body, {
        background: "black"
      }) : ia, ct(l, {
        transformOrigin: W(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${I.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${I.EASE.join(",")})`
      }));
      const u = ct(l, {
        borderRadius: `${Mn}px`,
        overflow: "hidden",
        ...W(e) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        u(), a.current = window.setTimeout(() => {
          s ? document.body.style.background = s : document.body.style.removeProperty("background");
        }, I.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    s
  ]);
}
let Ne = null;
function ca({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [s, i] = y.useState(() => typeof window < "u" ? window.location.href : ""), l = y.useRef(0), u = y.useCallback(() => {
    if (Ut() && Ne === null && e && !a) {
      Ne = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: m, innerHeight: v } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.current}px`,
        left: `${-m}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const C = v - window.innerHeight;
        C && l.current >= v && (document.body.style.top = `${-(l.current + C)}px`);
      }), 300);
    }
  }, [
    e
  ]), d = y.useCallback(() => {
    if (Ut() && Ne !== null && !a) {
      const m = -parseInt(document.body.style.top, 10), v = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Ne), window.requestAnimationFrame(() => {
        if (o && s !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(v, m);
      }), Ne = null;
    }
  }, [
    s
  ]);
  return y.useEffect(() => {
    function m() {
      l.current = window.scrollY;
    }
    return m(), window.addEventListener("scroll", m), () => {
      window.removeEventListener("scroll", m);
    };
  }, []), y.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || d();
      };
  }, [
    t,
    d
  ]), y.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && u(), t || window.setTimeout(() => {
      d();
    }, 500)) : d());
  }, [
    e,
    r,
    s,
    t,
    n,
    u,
    d
  ]), {
    restorePositionSetting: d
  };
}
function la({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: s = !1, setBackgroundColorOnScale: i = !0, closeThreshold: l = na, scrollLockTimeout: u = ra, dismissible: d = !0, handleOnly: m = !1, fadeFromIndex: v = a && a.length - 1, activeSnapPoint: C, setActiveSnapPoint: N, fixed: f, modal: g = !0, onClose: p, nested: E, noBodyStyles: D = !1, direction: b = "bottom", defaultOpen: x = !1, disablePreventScroll: k = !0, snapToSequentialPoint: w = !1, preventScrollRestoration: P = !1, repositionInputs: O = !0, onAnimationEnd: $, container: F, autoFocus: V = !1 }) {
  var R, X;
  const [j = !1, K] = Ln({
    defaultProp: x,
    prop: e,
    onChange: (S) => {
      t == null || t(S), !S && !E && Vn(), setTimeout(() => {
        $ == null || $(S);
      }, I.DURATION * 1e3), S && !g && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), S || (document.body.style.pointerEvents = "auto");
    }
  }), [U, ee] = y.useState(!1), [ne, ye] = y.useState(!1), [$n, wt] = y.useState(!1), de = y.useRef(null), xe = y.useRef(null), Ye = y.useRef(null), Xe = y.useRef(null), be = y.useRef(null), Ce = y.useRef(!1), Ke = y.useRef(null), qe = y.useRef(0), fe = y.useRef(!1), yt = y.useRef(!x), bt = y.useRef(0), T = y.useRef(null), Ct = y.useRef(((R = T.current) == null ? void 0 : R.getBoundingClientRect().height) || 0), Et = y.useRef(((X = T.current) == null ? void 0 : X.getBoundingClientRect().width) || 0), Ge = y.useRef(0), Fn = y.useCallback((S) => {
    a && S === Ee.length - 1 && (xe.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: Bn, activeSnapPointIndex: me, setActiveSnapPoint: St, onRelease: Wn, snapPointsOffset: Ee, onDrag: Hn, shouldFade: Rt, getPercentageDragged: Un } = aa({
    snapPoints: a,
    activeSnapPointProp: C,
    setActiveSnapPointProp: N,
    drawerRef: T,
    fadeFromIndex: v,
    overlayRef: de,
    onSnapPointChange: Fn,
    direction: b,
    container: F,
    snapToSequentialPoint: w
  });
  Ko({
    isDisabled: !j || ne || !g || $n || !U || !O || !k
  });
  const { restorePositionSetting: Vn } = ca({
    isOpen: j,
    modal: g,
    nested: E ?? !1,
    hasBeenOpened: U,
    preventScrollRestoration: P,
    noBodyStyles: D
  });
  function Ae() {
    return (window.innerWidth - mt) / window.innerWidth;
  }
  function jn(S) {
    var M, _;
    !d && !a || T.current && !T.current.contains(S.target) || (Ct.current = ((M = T.current) == null ? void 0 : M.getBoundingClientRect().height) || 0, Et.current = ((_ = T.current) == null ? void 0 : _.getBoundingClientRect().width) || 0, ye(!0), Ye.current = /* @__PURE__ */ new Date(), Tn() && window.addEventListener("touchend", () => Ce.current = !1, {
      once: !0
    }), S.target.setPointerCapture(S.pointerId), qe.current = W(b) ? S.pageY : S.pageX);
  }
  function Nt(S, M) {
    var _;
    let A = S;
    const B = (_ = window.getSelection()) == null ? void 0 : _.toString(), Y = T.current ? Be(T.current, b) : null, z = /* @__PURE__ */ new Date();
    if (A.tagName === "SELECT" || A.hasAttribute("data-vaul-no-drag") || A.closest("[data-vaul-no-drag]"))
      return !1;
    if (b === "right" || b === "left")
      return !0;
    if (xe.current && z.getTime() - xe.current.getTime() < 500)
      return !1;
    if (Y !== null && (b === "bottom" ? Y > 0 : Y < 0))
      return !0;
    if (B && B.length > 0)
      return !1;
    if (be.current && z.getTime() - be.current.getTime() < u && Y === 0 || M)
      return be.current = z, !1;
    for (; A; ) {
      if (A.scrollHeight > A.clientHeight) {
        if (A.scrollTop !== 0)
          return be.current = /* @__PURE__ */ new Date(), !1;
        if (A.getAttribute("role") === "dialog")
          return !0;
      }
      A = A.parentNode;
    }
    return !0;
  }
  function zn(S) {
    if (T.current && ne) {
      const M = b === "bottom" || b === "right" ? 1 : -1, _ = (qe.current - (W(b) ? S.pageY : S.pageX)) * M, A = _ > 0, B = a && !d && !A;
      if (B && me === 0) return;
      const Y = Math.abs(_), z = document.querySelector("[data-vaul-drawer-wrapper]"), re = b === "bottom" || b === "top" ? Ct.current : Et.current;
      let q = Y / re;
      const se = Un(Y, A);
      if (se !== null && (q = se), B && q >= 1 || !Ce.current && !Nt(S.target, A)) return;
      if (T.current.classList.add(lt), Ce.current = !0, H(T.current, {
        transition: "none"
      }), H(de.current, {
        transition: "none"
      }), a && Hn({
        draggedDistance: _
      }), A && !a) {
        const Q = ea(_), Me = Math.min(Q * -1, 0) * M;
        H(T.current, {
          transform: W(b) ? `translate3d(0, ${Me}px, 0)` : `translate3d(${Me}px, 0, 0)`
        });
        return;
      }
      const oe = 1 - q;
      if ((Rt || v && me === v - 1) && (r == null || r(S, q), H(de.current, {
        opacity: `${oe}`,
        transition: "none"
      }, !0)), z && de.current && s) {
        const Q = Math.min(Ae() + q * (1 - Ae()), 1), Me = 8 - q * 8, Tt = Math.max(0, 14 - q * 14);
        H(z, {
          borderRadius: `${Me}px`,
          transform: W(b) ? `scale(${Q}) translate3d(0, ${Tt}px, 0)` : `scale(${Q}) translate3d(${Tt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const Q = Y * M;
        H(T.current, {
          transform: W(b) ? `translate3d(0, ${Q}px, 0)` : `translate3d(${Q}px, 0, 0)`
        });
      }
    }
  }
  y.useEffect(() => {
    window.requestAnimationFrame(() => {
      yt.current = !0;
    });
  }, []), y.useEffect(() => {
    var S;
    function M() {
      if (!T.current || !O) return;
      const _ = document.activeElement;
      if (ft(_) || fe.current) {
        var A;
        const B = ((A = window.visualViewport) == null ? void 0 : A.height) || 0, Y = window.innerHeight;
        let z = Y - B;
        const re = T.current.getBoundingClientRect().height || 0, q = re > Y * 0.8;
        Ge.current || (Ge.current = re);
        const se = T.current.getBoundingClientRect().top;
        if (Math.abs(bt.current - z) > 60 && (fe.current = !fe.current), a && a.length > 0 && Ee && me) {
          const oe = Ee[me] || 0;
          z += oe;
        }
        if (bt.current = z, re > B || fe.current) {
          const oe = T.current.getBoundingClientRect().height;
          let Q = oe;
          oe > B && (Q = B - (q ? se : mt)), f ? T.current.style.height = `${oe - Math.max(z, 0)}px` : T.current.style.height = `${Math.max(Q, B - se)}px`;
        } else Ho() || (T.current.style.height = `${Ge.current}px`);
        a && a.length > 0 && !fe.current ? T.current.style.bottom = "0px" : T.current.style.bottom = `${Math.max(z, 0)}px`;
      }
    }
    return (S = window.visualViewport) == null || S.addEventListener("resize", M), () => {
      var _;
      return (_ = window.visualViewport) == null ? void 0 : _.removeEventListener("resize", M);
    };
  }, [
    me,
    a,
    Ee
  ]);
  function Se(S) {
    Yn(), p == null || p(), S || K(!1), setTimeout(() => {
      a && St(a[0]);
    }, I.DURATION * 1e3);
  }
  function Dt() {
    if (!T.current) return;
    const S = document.querySelector("[data-vaul-drawer-wrapper]"), M = Be(T.current, b);
    H(T.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${I.DURATION}s cubic-bezier(${I.EASE.join(",")})`
    }), H(de.current, {
      transition: `opacity ${I.DURATION}s cubic-bezier(${I.EASE.join(",")})`,
      opacity: "1"
    }), s && M && M > 0 && j && H(S, {
      borderRadius: `${Mn}px`,
      overflow: "hidden",
      ...W(b) ? {
        transform: `scale(${Ae()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Ae()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${I.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${I.EASE.join(",")})`
    }, !0);
  }
  function Yn() {
    !ne || !T.current || (T.current.classList.remove(lt), Ce.current = !1, ye(!1), Xe.current = /* @__PURE__ */ new Date());
  }
  function Xn(S) {
    if (!ne || !T.current) return;
    T.current.classList.remove(lt), Ce.current = !1, ye(!1), Xe.current = /* @__PURE__ */ new Date();
    const M = Be(T.current, b);
    if (!S || !Nt(S.target, !1) || !M || Number.isNaN(M) || Ye.current === null) return;
    const _ = Xe.current.getTime() - Ye.current.getTime(), A = qe.current - (W(b) ? S.pageY : S.pageX), B = Math.abs(A) / _;
    if (B > 0.05 && (wt(!0), setTimeout(() => {
      wt(!1);
    }, 200)), a) {
      Wn({
        draggedDistance: A * (b === "bottom" || b === "right" ? 1 : -1),
        closeDrawer: Se,
        velocity: B,
        dismissible: d
      }), o == null || o(S, !0);
      return;
    }
    if (b === "bottom" || b === "right" ? A > 0 : A < 0) {
      Dt(), o == null || o(S, !0);
      return;
    }
    if (B > An) {
      Se(), o == null || o(S, !1);
      return;
    }
    var Y;
    const z = Math.min((Y = T.current.getBoundingClientRect().height) != null ? Y : 0, window.innerHeight);
    var re;
    const q = Math.min((re = T.current.getBoundingClientRect().width) != null ? re : 0, window.innerWidth), se = b === "left" || b === "right";
    if (Math.abs(M) >= (se ? q : z) * l) {
      Se(), o == null || o(S, !1);
      return;
    }
    o == null || o(S, !0), Dt();
  }
  y.useEffect(() => (j && (H(document.documentElement, {
    scrollBehavior: "auto"
  }), xe.current = /* @__PURE__ */ new Date()), () => {
    Jo(document.documentElement, "scrollBehavior");
  }), [
    j
  ]);
  function Kn(S) {
    const M = S ? (window.innerWidth - ce) / window.innerWidth : 1, _ = S ? -ce : 0;
    Ke.current && window.clearTimeout(Ke.current), H(T.current, {
      transition: `transform ${I.DURATION}s cubic-bezier(${I.EASE.join(",")})`,
      transform: W(b) ? `scale(${M}) translate3d(0, ${_}px, 0)` : `scale(${M}) translate3d(${_}px, 0, 0)`
    }), !S && T.current && (Ke.current = setTimeout(() => {
      const A = Be(T.current, b);
      H(T.current, {
        transition: "none",
        transform: W(b) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
      });
    }, 500));
  }
  function qn(S, M) {
    if (M < 0) return;
    const _ = (window.innerWidth - ce) / window.innerWidth, A = _ + M * (1 - _), B = -ce + M * ce;
    H(T.current, {
      transform: W(b) ? `scale(${A}) translate3d(0, ${B}px, 0)` : `scale(${A}) translate3d(${B}px, 0, 0)`,
      transition: "none"
    });
  }
  function Gn(S, M) {
    const _ = W(b) ? window.innerHeight : window.innerWidth, A = M ? (_ - ce) / _ : 1, B = M ? -ce : 0;
    M && H(T.current, {
      transition: `transform ${I.DURATION}s cubic-bezier(${I.EASE.join(",")})`,
      transform: W(b) ? `scale(${A}) translate3d(0, ${B}px, 0)` : `scale(${A}) translate3d(${B}px, 0, 0)`
    });
  }
  return y.useEffect(() => {
    g || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    g
  ]), /* @__PURE__ */ y.createElement(Lo, {
    defaultOpen: x,
    onOpenChange: (S) => {
      !d && !S || (S ? ee(!0) : Se(!0), K(S));
    },
    open: j
  }, /* @__PURE__ */ y.createElement(Dn.Provider, {
    value: {
      activeSnapPoint: Bn,
      snapPoints: a,
      setActiveSnapPoint: St,
      drawerRef: T,
      overlayRef: de,
      onOpenChange: t,
      onPress: jn,
      onRelease: Xn,
      onDrag: zn,
      dismissible: d,
      shouldAnimate: yt,
      handleOnly: m,
      isOpen: j,
      isDragging: ne,
      shouldFade: Rt,
      closeDrawer: Se,
      onNestedDrag: qn,
      onNestedOpenChange: Kn,
      onNestedRelease: Gn,
      keyboardIsOpen: fe,
      modal: g,
      snapPointsOffset: Ee,
      activeSnapPointIndex: me,
      direction: b,
      shouldScaleBackground: s,
      setBackgroundColorOnScale: i,
      noBodyStyles: D,
      container: F,
      autoFocus: V
    }
  }, n));
}
const In = /* @__PURE__ */ y.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: a, isOpen: s, modal: i, shouldAnimate: l } = Pe(), u = Pn(t, n), d = r && r.length > 0;
  if (!i)
    return null;
  const m = y.useCallback((v) => o(v), [
    o
  ]);
  return /* @__PURE__ */ y.createElement($o, {
    onMouseUp: m,
    ref: u,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": s && d ? "true" : "false",
    "data-vaul-snap-points-overlay": s && a ? "true" : "false",
    "data-vaul-animate": l != null && l.current ? "true" : "false",
    ...e
  });
});
In.displayName = "Drawer.Overlay";
const kn = /* @__PURE__ */ y.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: a, onPress: s, onRelease: i, onDrag: l, keyboardIsOpen: u, snapPointsOffset: d, activeSnapPointIndex: m, modal: v, isOpen: C, direction: N, snapPoints: f, container: g, handleOnly: p, shouldAnimate: E, autoFocus: D } = Pe(), [b, x] = y.useState(!1), k = Pn(o, a), w = y.useRef(null), P = y.useRef(null), O = y.useRef(!1), $ = f && f.length > 0;
  sa();
  const F = (R, X, j = 0) => {
    if (O.current) return !0;
    const K = Math.abs(R.y), U = Math.abs(R.x), ee = U > K, ne = [
      "bottom",
      "right"
    ].includes(X) ? 1 : -1;
    if (X === "left" || X === "right") {
      if (!(R.x * ne < 0) && U >= 0 && U <= j)
        return ee;
    } else if (!(R.y * ne < 0) && K >= 0 && K <= j)
      return !ee;
    return O.current = !0, !0;
  };
  y.useEffect(() => {
    $ && window.requestAnimationFrame(() => {
      x(!0);
    });
  }, []);
  function V(R) {
    w.current = null, O.current = !1, i(R);
  }
  return /* @__PURE__ */ y.createElement(Fo, {
    "data-vaul-drawer-direction": N,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": b ? "true" : "false",
    "data-vaul-snap-points": C && $ ? "true" : "false",
    "data-vaul-custom-container": g ? "true" : "false",
    "data-vaul-animate": E != null && E.current ? "true" : "false",
    ...r,
    ref: k,
    style: d && d.length > 0 ? {
      "--snap-point-height": `${d[m ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (R) => {
      p || (r.onPointerDown == null || r.onPointerDown.call(r, R), w.current = {
        x: R.pageX,
        y: R.pageY
      }, s(R));
    },
    onOpenAutoFocus: (R) => {
      n == null || n(R), D || R.preventDefault();
    },
    onPointerDownOutside: (R) => {
      if (e == null || e(R), !v || R.defaultPrevented) {
        R.preventDefault();
        return;
      }
      u.current && (u.current = !1);
    },
    onFocusOutside: (R) => {
      if (!v) {
        R.preventDefault();
        return;
      }
    },
    onPointerMove: (R) => {
      if (P.current = R, p || (r.onPointerMove == null || r.onPointerMove.call(r, R), !w.current)) return;
      const X = R.pageY - w.current.y, j = R.pageX - w.current.x, K = R.pointerType === "touch" ? 10 : 2;
      F({
        x: j,
        y: X
      }, N, K) ? l(R) : (Math.abs(j) > K || Math.abs(X) > K) && (w.current = null);
    },
    onPointerUp: (R) => {
      r.onPointerUp == null || r.onPointerUp.call(r, R), w.current = null, O.current = !1, i(R);
    },
    onPointerOut: (R) => {
      r.onPointerOut == null || r.onPointerOut.call(r, R), V(P.current);
    },
    onContextMenu: (R) => {
      r.onContextMenu == null || r.onContextMenu.call(r, R), P.current && V(P.current);
    }
  });
});
kn.displayName = "Drawer.Content";
const ua = 250, da = 120, fa = /* @__PURE__ */ y.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: a, snapPoints: s, activeSnapPoint: i, setActiveSnapPoint: l, dismissible: u, handleOnly: d, isOpen: m, onPress: v, onDrag: C } = Pe(), N = y.useRef(null), f = y.useRef(!1);
  function g() {
    if (f.current) {
      D();
      return;
    }
    window.setTimeout(() => {
      p();
    }, da);
  }
  function p() {
    if (a || e || f.current) {
      D();
      return;
    }
    if (D(), !s || s.length === 0) {
      u || o();
      return;
    }
    if (i === s[s.length - 1] && u) {
      o();
      return;
    }
    const x = s.findIndex((w) => w === i);
    if (x === -1) return;
    const k = s[x + 1];
    l(k);
  }
  function E() {
    N.current = window.setTimeout(() => {
      f.current = !0;
    }, ua);
  }
  function D() {
    N.current && window.clearTimeout(N.current), f.current = !1;
  }
  return /* @__PURE__ */ y.createElement("div", {
    onClick: g,
    onPointerCancel: D,
    onPointerDown: (b) => {
      d && v(b), E();
    },
    onPointerMove: (b) => {
      d && C(b);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": m ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ y.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
fa.displayName = "Drawer.Handle";
function ma(e) {
  const t = Pe(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ y.createElement(ko, {
    container: n,
    ...r
  });
}
const G = {
  Root: la,
  Content: kn,
  Overlay: In,
  Trigger: Io,
  Portal: ma,
  Close: Bo
};
function Ta({
  title: e,
  description: t,
  trigger: n,
  children: r,
  footer: o,
  open: a,
  onOpenChange: s,
  onBack: i,
  onOpen: l,
  onClose: u
}) {
  const [d, m] = De(!1), v = a !== void 0, C = v ? a : d, N = (f) => {
    v ? s == null || s(f) : m(f);
  };
  return ge(() => {
    C ? l == null || l() : u == null || u();
  }, [C]), /* @__PURE__ */ L(G.Root, { open: C, onOpenChange: N, children: [
    n && /* @__PURE__ */ h(G.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ L(G.Portal, { children: [
      /* @__PURE__ */ h(G.Overlay, { className: "drawer-overlay" }),
      /* @__PURE__ */ L(G.Content, { className: "bottom-sheet__content", children: [
        /* @__PURE__ */ h("div", { className: "bottom-sheet__handle" }),
        e && /* @__PURE__ */ L("div", { className: "bottom-sheet__title-bar", children: [
          i ? /* @__PURE__ */ h("button", { type: "button", className: "bottom-sheet__back", onClick: i, "aria-label": "Back", children: /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ h("path", { d: "M15 18l-6-6 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) : /* @__PURE__ */ h("div", { className: "bottom-sheet__title-spacer" }),
          /* @__PURE__ */ h("div", { className: "bottom-sheet__title", children: e }),
          /* @__PURE__ */ h("div", { className: "bottom-sheet__title-spacer" })
        ] }),
        /* @__PURE__ */ L("div", { className: "bottom-sheet__body", children: [
          t && /* @__PURE__ */ h("p", { className: "bottom-sheet__description", children: t }),
          r
        ] }),
        o && /* @__PURE__ */ h("div", { className: "bottom-sheet__footer", children: o })
      ] })
    ] })
  ] });
}
function Oa({
  title: e,
  open: t,
  onOpenChange: n,
  onBack: r,
  children: o,
  footer: a,
  hideClose: s,
  onOpen: i,
  onClose: l
}) {
  return ge(() => {
    t ? i == null || i() : l == null || l();
  }, [t]), t ? Xt(
    /* @__PURE__ */ L("div", { className: "fss-root", children: [
      /* @__PURE__ */ L("div", { className: "fss-title-bar", children: [
        r ? /* @__PURE__ */ h("button", { type: "button", className: "fss-nav-btn", onClick: r, "aria-label": "Back", children: /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ h("path", { d: "M15 18l-6-6 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) : /* @__PURE__ */ h("div", { className: "fss-spacer" }),
        e && /* @__PURE__ */ h("div", { className: "fss-title", children: e }),
        s ? /* @__PURE__ */ h("div", { className: "fss-spacer" }) : /* @__PURE__ */ h("button", { type: "button", className: "fss-nav-btn", onClick: () => n(!1), "aria-label": "Close", children: /* @__PURE__ */ h("svg", { viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ h("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
      ] }),
      /* @__PURE__ */ h("div", { className: `fss-body ${a ? "fss-body--with-footer" : "fss-body--no-footer"}`, children: o }),
      a && /* @__PURE__ */ h("div", { className: "fss-footer", children: a })
    ] }),
    document.body
  ) : null;
}
function Pa({ title: e, description: t, children: n }) {
  return /* @__PURE__ */ L(G.Root, { children: [
    /* @__PURE__ */ h(G.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ L(G.Portal, { children: [
      /* @__PURE__ */ h(G.Overlay, { className: "drawer-overlay" }),
      /* @__PURE__ */ L(G.Content, { className: "info-sheet__content", children: [
        /* @__PURE__ */ L("div", { className: "info-sheet__header", children: [
          /* @__PURE__ */ h(G.Close, { className: "info-sheet__close", "aria-label": "Close", children: "×" }),
          /* @__PURE__ */ h("div", { className: "info-sheet__title", children: e }),
          /* @__PURE__ */ h("div", { className: "info-sheet__spacer" })
        ] }),
        /* @__PURE__ */ h("p", { className: "info-sheet__description", children: t })
      ] })
    ] })
  ] });
}
function xa({ children: e, className: t = "", ...n }) {
  return /* @__PURE__ */ h("button", { type: "button", className: `ds-primary-btn ${t}`, ...n, children: e });
}
function Aa({ className: e = "" }) {
  return /* @__PURE__ */ L("div", { className: `ds-ad-slot ${e}`, "data-testid": "ad-slot", children: [
    /* @__PURE__ */ L("svg", { className: "ds-ad-slot-icon", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ h("rect", { x: "1", y: "1", width: "14", height: "14", rx: "2", stroke: "#99A1AF", strokeWidth: "1.2" }),
      /* @__PURE__ */ h("line", { x1: "1", y1: "5", x2: "15", y2: "5", stroke: "#99A1AF", strokeWidth: "1.2" }),
      /* @__PURE__ */ h("line", { x1: "5", y1: "5", x2: "5", y2: "15", stroke: "#99A1AF", strokeWidth: "1.2" })
    ] }),
    /* @__PURE__ */ h("span", { className: "ds-ad-slot-text", children: "Ad Slot Placeholder" })
  ] });
}
function Ma({ width: e = 72, height: t = 24, className: n }) {
  return /* @__PURE__ */ L(
    "svg",
    {
      className: n,
      width: e,
      height: t,
      viewBox: "0 0 72 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      "aria-label": "netti",
      children: [
        /* @__PURE__ */ h("g", { transform: "translate(0, 6.75)", children: /* @__PURE__ */ h("path", { d: "M7.88672 0.02132C8.01505 -0.0034738 8.13972 -0.00900585 8.25977 0.0174138V0.0183903C12.4572 0.0449027 14.3739 1.92008 14.9072 3.02523C14.9634 3.11975 15.0191 3.21855 15.0713 3.32405C15.6332 4.39561 15.914 5.70387 15.9141 7.24691V16.0379C15.914 16.2735 15.8271 16.4661 15.6543 16.616C15.503 16.766 15.3196 16.8416 15.1035 16.8416H11.667C11.4292 16.8416 11.2343 16.7661 11.083 16.616C10.9319 16.4661 10.8565 16.2734 10.8564 16.0379V7.43929C10.8564 6.30371 10.5754 5.42502 10.0137 4.80355C9.54049 4.24056 8.86801 3.92334 7.99707 3.85335C7.07264 3.90282 6.36423 4.21966 5.87207 4.80355C5.31286 5.42044 5.03322 6.29332 5.0332 7.42073V15.9549C5.0332 16.1887 4.95792 16.3803 4.80762 16.5291C4.65708 16.678 4.46312 16.7527 4.22656 16.7528H0.806641C0.591553 16.7528 0.408373 16.678 0.257812 16.5291C0.0859755 16.3803 0 16.1888 0 15.9549V7.22933C1.29896e-05 5.69773 0.279653 4.39939 0.838867 3.33577C0.858076 3.29703 0.878568 3.25961 0.898438 3.22249H0.897461C0.901879 3.21373 0.907466 3.20503 0.912109 3.19612C0.935755 3.15273 0.959824 3.11043 0.984375 3.06917C1.0007 3.04187 1.01693 3.01346 1.03516 2.98519C1.19548 2.73126 1.37369 2.51766 1.56836 2.32991C2.58106 1.29448 4.5982 0.0871206 7.88672 0.02132Z", fill: "white" }) }),
        /* @__PURE__ */ h("g", { transform: "translate(19.21, 6.64)", children: /* @__PURE__ */ h("path", { d: "M8.23503 17.3596C5.74939 17.3596 3.77169 16.6738 2.30192 15.3022C0.853764 13.9306 0.0864571 11.9374 0 9.32276C0 9.15131 0 8.92628 0 8.64767C0 8.34762 0 8.11188 0 7.94042C0.0864571 6.29019 0.464707 4.8757 1.13475 3.69696C1.80479 2.49679 2.74501 1.58594 3.95541 0.964424C5.16581 0.321474 6.58154 0 8.20261 0C10.0182 0 11.5312 0.375053 12.7416 1.12516C13.9736 1.85384 14.8922 2.86112 15.4974 4.14702C16.1242 5.41149 16.4376 6.86884 16.4376 8.51908V9.25847C16.4376 9.47278 16.3512 9.65495 16.1783 9.80497C16.027 9.955 15.8433 10.03 15.6271 10.03H5.02532C5.02532 10.0514 5.02532 10.0943 5.02532 10.1586C5.02532 10.2015 5.02532 10.2443 5.02532 10.2872C5.04693 10.973 5.17661 11.6052 5.41437 12.1839C5.67374 12.7411 6.03038 13.1912 6.48428 13.5341C6.95979 13.877 7.52176 14.0484 8.17019 14.0484C8.71055 14.0484 9.15364 13.9734 9.49947 13.8234C9.8453 13.6734 10.1263 13.4912 10.3424 13.2769C10.5802 13.0626 10.7531 12.8804 10.8612 12.7304C11.0557 12.5161 11.207 12.3875 11.3151 12.3446C11.4448 12.2803 11.6393 12.2482 11.8986 12.2482H15.2705C15.4866 12.2482 15.6595 12.3125 15.7892 12.4411C15.9405 12.5482 16.0054 12.709 15.9837 12.9233C15.9621 13.2662 15.7784 13.6948 15.4326 14.2092C15.1084 14.7021 14.622 15.195 13.9736 15.688C13.3252 16.1595 12.5147 16.5559 11.542 16.8774C10.591 17.1989 9.48866 17.3596 8.23503 17.3596ZM5.02532 7.10459H11.3799V7.04029C11.3799 6.26875 11.2502 5.60437 10.9909 5.04715C10.7531 4.4685 10.3965 4.01843 9.92094 3.69696C9.44543 3.37548 8.87265 3.21475 8.20261 3.21475C7.53257 3.21475 6.95979 3.37548 6.48428 3.69696C6.00876 4.01843 5.64132 4.4685 5.38195 5.04715C5.14419 5.60437 5.02532 6.26875 5.02532 7.04029V7.10459Z", fill: "white" }) }),
        /* @__PURE__ */ h("g", { transform: "translate(38.96, 4.09)", children: /* @__PURE__ */ h("path", { d: "M2.8855 18.9771C3.83653 19.4058 4.98208 19.6201 6.32217 19.6201H9.14283C9.35898 19.6201 9.5427 19.5451 9.694 19.3951C9.84529 19.245 9.92094 19.0521 9.92094 18.8164V16.4375C9.92094 16.2232 9.84529 16.041 9.694 15.891C9.5427 15.741 9.35898 15.6659 9.14283 15.6659H6.77607C6.04119 15.6659 5.52244 15.4409 5.21984 14.9908C4.93886 14.5194 4.79836 13.8764 4.79836 13.062V6.87484H8.85104C9.06718 6.87484 9.2509 6.79983 9.4022 6.64981C9.5535 6.49978 9.62915 6.3069 9.62915 6.07115V3.88512C9.62915 3.64938 9.5535 3.45649 9.4022 3.30647C9.2509 3.15645 9.06718 3.08144 8.85104 3.08144H4.79836V0.803685C4.79836 0.567938 4.72271 0.375054 4.57141 0.225033C4.42011 0.0750109 4.22559 0 3.98783 0L0.810533 0.89017C0.594391 0.89017 0.399863 0.965181 0.226948 1.1152C0.0756489 1.26522 0 1.45811 0 1.69386V3.08144V6.87484V13.4478C0 14.8408 0.237757 15.9981 0.71327 16.9197C1.2104 17.8413 1.93448 18.5271 2.8855 18.9771Z", fill: "white" }) }),
        /* @__PURE__ */ h("g", { transform: "translate(52.25, 4.09)", children: /* @__PURE__ */ h("path", { d: "M2.8855 18.9771C3.83653 19.4058 4.98208 19.6201 6.32217 19.6201H9.14283C9.35898 19.6201 9.5427 19.5451 9.694 19.3951C9.84529 19.245 9.92094 19.0521 9.92094 18.8164V16.4375C9.92094 16.2232 9.84529 16.041 9.694 15.891C9.5427 15.741 9.35898 15.6659 9.14283 15.6659H6.77607C6.04119 15.6659 5.52244 15.4409 5.21984 14.9908C4.93886 14.5194 4.79836 13.8764 4.79836 13.062V6.87484H8.85104C9.06718 6.87484 9.2509 6.79983 9.4022 6.64981C9.5535 6.49978 9.62915 6.3069 9.62915 6.07115V3.88512C9.62915 3.64938 9.5535 3.45649 9.4022 3.30647C9.2509 3.15645 9.06718 3.08144 8.85104 3.08144H4.79836V0.803685C4.79836 0.567938 4.72271 0.375054 4.57141 0.225033C4.42011 0.0750109 4.22559 0 3.98783 0L0.810533 0.89017C0.594391 0.89017 0.399863 0.965181 0.226948 1.1152C0.0756489 1.26522 0 1.45811 0 1.69386V3.08144V6.87484V13.4478C0 14.8408 0.237757 15.9981 0.71327 16.9197C1.2104 17.8413 1.93448 18.5271 2.8855 18.9771Z", fill: "white" }) }),
        /* @__PURE__ */ h("g", { transform: "translate(66.89, 6.96)", children: /* @__PURE__ */ h("path", { d: "M0.778111 16.7167C0.561969 16.7167 0.378248 16.6417 0.226948 16.4916C0.0756487 16.3416 0 16.1487 0 15.913V0.803687C0 0.567938 0.0756487 0.375054 0.226948 0.225034C0.378248 0.0750116 0.561969 0 0.778111 0H4.02025C4.25801 0 4.45254 0.0750116 4.60384 0.225034C4.75514 0.375054 4.83079 0.567938 4.83079 0.803687V15.913C4.83079 16.1487 4.75514 16.3416 4.60384 16.4916C4.45254 16.6417 4.25801 16.7167 4.02025 16.7167H0.778111Z", fill: "white" }) }),
        /* @__PURE__ */ h("circle", { cx: "69.32", cy: "2.68", r: "2.68", fill: "#26D4EB" })
      ]
    }
  );
}
export {
  Aa as AdSlot,
  Na as BottomNav,
  Ta as BottomSheet,
  ga as Button,
  wa as Card,
  Ca as Divider,
  Oa as FullScreenSheet,
  Pa as InfoSheet,
  ya as InputField,
  ba as MoneyRow,
  Ma as NettiLogo,
  xa as PrimaryButton,
  Ea as SegmentedControl,
  Ra as Select,
  Sa as Switch
};
