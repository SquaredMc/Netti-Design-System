import { jsxs as A, jsx as l, Fragment as Ue } from "react/jsx-runtime";
import * as c from "react";
import y, { Children as Zn, useState as De, useRef as Qe, useLayoutEffect as Yt, useEffect as ge, useMemo as Qn } from "react";
import * as Jn from "react-dom";
import er, { createPortal as Xt } from "react-dom";
function wo({ leftIcon: e, children: t, variant: n = "default", className: r = "", ...a }) {
  return /* @__PURE__ */ A(
    "button",
    {
      type: "button",
      className: `ds-button ds-button--${n}${r ? ` ${r}` : ""}`,
      ...a,
      children: [
        e && /* @__PURE__ */ l("span", { className: "ds-button__icon", "aria-hidden": "true", children: e }),
        /* @__PURE__ */ l("span", { children: t })
      ]
    }
  );
}
function yo({ children: e, title: t, subtitle: n, className: r = "" }) {
  return /* @__PURE__ */ A("div", { className: `ds-card ${r}`, children: [
    (t || n) && /* @__PURE__ */ A("div", { className: "ds-card-header", children: [
      t && /* @__PURE__ */ l("h2", { className: "ds-card-title", children: t }),
      n && /* @__PURE__ */ l("p", { className: "ds-card-subtitle", children: n })
    ] }),
    e
  ] });
}
function bo({
  label: e = "YOUR SALARY",
  children: t,
  periods: n,
  period: r,
  onPeriodChange: a,
  footer: o,
  className: s = ""
}) {
  return /* @__PURE__ */ A("div", { className: `ds-salary-card ${s}`, children: [
    /* @__PURE__ */ l("span", { className: "ds-salary-card__label", children: e }),
    /* @__PURE__ */ l("div", { className: "ds-salary-card__figure", children: t }),
    n && n.length > 0 && /* @__PURE__ */ l("div", { className: "ds-salary-card__toggle", role: "tablist", children: n.map((i) => /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": i.value === r,
        className: `ds-salary-card__tab ${i.value === r ? "ds-salary-card__tab--active" : ""}`,
        onClick: () => a == null ? void 0 : a(i.value),
        children: i.label
      },
      i.value
    )) }),
    o && /* @__PURE__ */ l("div", { className: "ds-salary-card__footer", children: o })
  ] });
}
function Co({
  label: e = "ADDITIONAL INCOME",
  addLabel: t = "Add income",
  onAdd: n,
  children: r,
  className: a = ""
}) {
  const o = Zn.count(r) > 0;
  return /* @__PURE__ */ A("div", { className: `ds-additional-income-card ${a}`, children: [
    /* @__PURE__ */ A("div", { className: "ds-additional-income-card__header", children: [
      /* @__PURE__ */ l("span", { className: "ds-additional-income-card__label", children: e }),
      n && /* @__PURE__ */ A("button", { type: "button", className: "ds-additional-income-card__add", onClick: n, children: [
        /* @__PURE__ */ l("span", { className: "ds-additional-income-card__add-plus", "aria-hidden": "true", children: "+" }),
        /* @__PURE__ */ l("span", { children: t })
      ] })
    ] }),
    o && /* @__PURE__ */ A(Ue, { children: [
      /* @__PURE__ */ l("div", { className: "ds-additional-income-card__divider" }),
      /* @__PURE__ */ l("div", { className: "ds-additional-income-card__list", children: r })
    ] })
  ] });
}
function Eo({ label: e, meta: t, value: n, onClick: r, className: a = "" }) {
  const o = /* @__PURE__ */ A(Ue, { children: [
    /* @__PURE__ */ A("span", { className: "ds-list-row__labels", children: [
      /* @__PURE__ */ l("span", { className: "ds-list-row__label", children: e }),
      t && /* @__PURE__ */ l("span", { className: "ds-list-row__meta", children: t })
    ] }),
    /* @__PURE__ */ l("span", { className: "ds-list-row__value", children: n })
  ] });
  return r ? /* @__PURE__ */ l("button", { type: "button", className: `ds-list-row ds-list-row--tappable ${a}`, onClick: r, children: o }) : /* @__PURE__ */ l("div", { className: `ds-list-row ${a}`, children: o });
}
function So({
  label: e,
  value: t,
  onChange: n,
  onBlur: r,
  type: a = "text",
  placeholder: o,
  prefix: s,
  suffix: i,
  className: u = "",
  inputMode: d,
  testId: f
}) {
  const [v, h] = De(!1), N = v ? "ds-input--focused" : t !== "" && t !== void 0 ? "ds-input--has-data" : "", m = () => {
    h(!1), r == null || r();
  };
  return /* @__PURE__ */ A("div", { className: `ds-input-field ${u}`, children: [
    /* @__PURE__ */ l("label", { className: "ds-input-label", children: e }),
    /* @__PURE__ */ A("div", { className: `ds-input-wrapper ${N}`, children: [
      s && /* @__PURE__ */ l("span", { className: "ds-input-prefix", children: s }),
      /* @__PURE__ */ l(
        "input",
        {
          type: a,
          value: t,
          onChange: (g) => n(g.target.value),
          onFocus: () => h(!0),
          onBlur: m,
          placeholder: o,
          inputMode: d,
          className: "ds-input",
          "data-testid": f
        }
      ),
      i && /* @__PURE__ */ l("span", { className: "ds-input-suffix", children: i })
    ] })
  ] });
}
function Ro({
  label: e,
  amount: t,
  strong: n = !1,
  showSign: r = !0,
  className: a = "",
  currency: o = "GBP",
  locale: s = "en-GB"
}) {
  const i = t > 0, u = t < 0, d = new Intl.NumberFormat(s, {
    style: "currency",
    currency: o,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(t));
  let f = d;
  return r && u && (f = `-${d}`), /* @__PURE__ */ A("div", { className: `ds-money-row ${i && n ? "ds-money-row--positive" : u ? "ds-money-row--negative" : ""} ${n ? "ds-money-row--strong" : ""} ${a}`, children: [
    /* @__PURE__ */ l("span", { className: "ds-money-row-label", children: e }),
    /* @__PURE__ */ l(
      "span",
      {
        className: "ds-money-row-amount",
        "data-testid": `money-${e.toLowerCase().replace(/\s+/g, "-")}`,
        children: f
      }
    )
  ] });
}
function No() {
  return /* @__PURE__ */ l("div", { className: "ds-divider" });
}
function Do({ options: e, value: t, onChange: n, className: r = "" }) {
  return /* @__PURE__ */ l("div", { className: `ds-segmented-control ${r}`, role: "tablist", children: e.map((a) => /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      role: "tab",
      "aria-selected": t === a.value,
      className: `ds-segment ${t === a.value ? "ds-segment--selected" : ""}`,
      onClick: () => n(a.value),
      "data-testid": `segment-${a.value}`,
      children: a.label
    },
    a.value
  )) });
}
function To({ checked: e, onChange: t, offLabel: n = "Off", onLabel: r = "On", className: a = "" }) {
  return /* @__PURE__ */ A("div", { className: `ds-switch-container ${a}`, children: [
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: `ds-switch-option ${e ? "" : "ds-switch-option--selected"}`,
        onClick: () => t(!1),
        "data-testid": "switch-off",
        children: n
      }
    ),
    /* @__PURE__ */ l(
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
function Oo({ label: e, options: t, value: n, onChange: r, className: a = "", testId: o }) {
  const [s, i] = De(!1), [u, d] = De(null), f = Qe(null), v = Qe(null), h = Qe(null), C = t.find((g) => g.value === n), N = () => {
    if (!f.current) return;
    const g = f.current.getBoundingClientRect(), p = window.innerHeight, E = 8, D = 12, b = Math.min(p * 0.6, 320), _ = p - g.bottom - D, k = g.top - D, w = _ < b && k > _;
    d({
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
      h.current && !h.current.contains(E) && v.current && !v.current.contains(E) && i(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [s]), ge(() => {
    if (!s) return;
    const g = (p) => {
      var E;
      p.key === "Escape" && (i(!1), (E = f.current) == null || E.focus());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [s]);
  const m = s && u && Xt(
    /* @__PURE__ */ l(
      "div",
      {
        ref: v,
        className: `ds-select-dropdown ${u.openUpward ? "ds-select-dropdown--upward" : ""}`,
        style: {
          position: "fixed",
          top: u.openUpward ? "auto" : u.top,
          bottom: u.openUpward ? `${window.innerHeight - u.top}px` : "auto",
          left: u.left,
          width: u.width
        },
        "data-testid": o ? `${o}-dropdown` : void 0,
        children: t.map((g) => /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            className: `ds-select-option ${n === g.value ? "ds-select-option--selected" : ""}`,
            onClick: () => {
              var p;
              r(g.value), i(!1), (p = f.current) == null || p.focus();
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
  return /* @__PURE__ */ A("div", { className: `ds-select-field ${a}`, ref: h, children: [
    /* @__PURE__ */ l("label", { className: "ds-select-label", children: e }),
    /* @__PURE__ */ A(
      "button",
      {
        ref: f,
        type: "button",
        className: `ds-select-trigger ${s ? "ds-select-trigger--open" : ""}`,
        onClick: () => i(!s),
        "data-testid": o,
        "aria-haspopup": "listbox",
        "aria-expanded": s,
        children: [
          /* @__PURE__ */ l("span", { children: (C == null ? void 0 : C.label) || "Select..." }),
          /* @__PURE__ */ l("svg", { className: "ds-select-chevron", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ l("path", { d: "M4 6L8 10L12 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
        ]
      }
    ),
    m
  ] });
}
function Po({ items: e, activeId: t, onChange: n }) {
  return /* @__PURE__ */ l("nav", { className: "ds-bottom-nav", children: e.map((r) => /* @__PURE__ */ A(
    "button",
    {
      type: "button",
      className: `ds-bottom-nav-item ${t === r.id ? "ds-bottom-nav-item--active" : ""}`,
      onClick: () => n(r.id),
      "data-testid": `nav-${r.id}`,
      children: [
        /* @__PURE__ */ l("span", { className: "ds-bottom-nav-icon", children: r.icon }),
        /* @__PURE__ */ l("span", { className: "ds-bottom-nav-label", children: r.label })
      ]
    },
    r.id
  )) });
}
function ie(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
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
    const r = e.map((a) => {
      const o = Pt(a, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          typeof o == "function" ? o() : Pt(e[a], null);
        }
      };
  };
}
function ue(...e) {
  return c.useCallback(Kt(...e), e);
}
function tr(e, t) {
  const n = c.createContext(t), r = (o) => {
    const { children: s, ...i } = o, u = c.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ l(n.Provider, { value: u, children: s });
  };
  r.displayName = e + "Provider";
  function a(o) {
    const s = c.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``);
  }
  return [r, a];
}
function nr(e, t = []) {
  let n = [];
  function r(o, s) {
    const i = c.createContext(s), u = n.length;
    n = [...n, s];
    const d = (v) => {
      var p;
      const { scope: h, children: C, ...N } = v, m = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[u]) || i, g = c.useMemo(() => N, Object.values(N));
      return /* @__PURE__ */ l(m.Provider, { value: g, children: C });
    };
    d.displayName = o + "Provider";
    function f(v, h) {
      var m;
      const C = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[u]) || i, N = c.useContext(C);
      if (N) return N;
      if (s !== void 0) return s;
      throw new Error(`\`${v}\` must be used within \`${o}\``);
    }
    return [d, f];
  }
  const a = () => {
    const o = n.map((s) => c.createContext(s));
    return function(i) {
      const u = (i == null ? void 0 : i[e]) || o;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: u } }),
        [i, u]
      );
    };
  };
  return a.scopeName = e, [r, rr(a, ...t)];
}
function rr(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(o) {
      const s = r.reduce((i, { useScope: u, scopeName: d }) => {
        const v = u(o)[`__scope${d}`];
        return { ...i, ...v };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Te = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
}, ar = c[" useId ".trim().toString()] || (() => {
}), or = 0;
function Je(e) {
  const [t, n] = c.useState(ar());
  return Te(() => {
    n((r) => r ?? String(or++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var ir = c[" useInsertionEffect ".trim().toString()] || Te;
function sr({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [a, o, s] = cr({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, u = i ? e : a;
  {
    const f = c.useRef(e !== void 0);
    c.useEffect(() => {
      const v = f.current;
      v !== i && console.warn(
        `${r} is changing from ${v ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const d = c.useCallback(
    (f) => {
      var v;
      if (i) {
        const h = lr(f) ? f(e) : f;
        h !== e && ((v = s.current) == null || v.call(s, h));
      } else
        o(f);
    },
    [i, e, o, s]
  );
  return [u, d];
}
function cr({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), a = c.useRef(n), o = c.useRef(t);
  return ir(() => {
    o.current = t;
  }, [t]), c.useEffect(() => {
    var s;
    a.current !== n && ((s = o.current) == null || s.call(o, n), a.current = n);
  }, [n, a]), [n, r, o];
}
function lr(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  const t = /* @__PURE__ */ ur(e), n = c.forwardRef((r, a) => {
    const { children: o, ...s } = r, i = c.Children.toArray(o), u = i.find(fr);
    if (u) {
      const d = u.props.children, f = i.map((v) => v === u ? c.Children.count(d) > 1 ? c.Children.only(null) : c.isValidElement(d) ? d.props.children : null : v);
      return /* @__PURE__ */ l(t, { ...s, ref: a, children: c.isValidElement(d) ? c.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ l(t, { ...s, ref: a, children: o });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  const t = c.forwardRef((n, r) => {
    const { children: a, ...o } = n;
    if (c.isValidElement(a)) {
      const s = vr(a), i = mr(o, a.props);
      return a.type !== c.Fragment && (i.ref = r ? Kt(r, s) : s), c.cloneElement(a, i);
    }
    return c.Children.count(a) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var dr = Symbol("radix.slottable");
function fr(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === dr;
}
function mr(e, t) {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? a && o ? n[r] = (...i) => {
      const u = o(...i);
      return a(...i), u;
    } : a && (n[r] = a) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vr(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var hr = [
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
], te = hr.reduce((e, t) => {
  const n = /* @__PURE__ */ qt(`Primitive.${t}`), r = c.forwardRef((a, o) => {
    const { asChild: s, ...i } = a, u = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l(u, { ...i, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function pr(e, t) {
  e && Jn.flushSync(() => e.dispatchEvent(t));
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
function gr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e);
  c.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var wr = "DismissableLayer", dt = "dismissableLayer.update", yr = "dismissableLayer.pointerDownOutside", br = "dismissableLayer.focusOutside", _t, Gt = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Zt = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: s,
      onDismiss: i,
      ...u
    } = e, d = c.useContext(Gt), [f, v] = c.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, C] = c.useState({}), N = ue(t, (w) => v(w)), m = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), p = m.indexOf(g), E = f ? m.indexOf(f) : -1, D = d.layersWithOutsidePointerEventsDisabled.size > 0, b = E >= p, _ = Sr((w) => {
      const P = w.target, O = [...d.branches].some(($) => $.contains(P));
      !b || O || (a == null || a(w), s == null || s(w), w.defaultPrevented || i == null || i());
    }, h), k = Rr((w) => {
      const P = w.target;
      [...d.branches].some(($) => $.contains(P)) || (o == null || o(w), s == null || s(w), w.defaultPrevented || i == null || i());
    }, h);
    return gr((w) => {
      E === d.layers.size - 1 && (r == null || r(w), !w.defaultPrevented && i && (w.preventDefault(), i()));
    }, h), c.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (_t = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), At(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = _t);
        };
    }, [f, h, n, d]), c.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), At());
    }, [f, d]), c.useEffect(() => {
      const w = () => C({});
      return document.addEventListener(dt, w), () => document.removeEventListener(dt, w);
    }, []), /* @__PURE__ */ l(
      te.div,
      {
        ...u,
        ref: N,
        style: {
          pointerEvents: D ? b ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ie(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ie(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ie(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
Zt.displayName = wr;
var Cr = "DismissableLayerBranch", Er = c.forwardRef((e, t) => {
  const n = c.useContext(Gt), r = c.useRef(null), a = ue(t, r);
  return c.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ l(te.div, { ...e, ref: a });
});
Er.displayName = Cr;
function Sr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e), r = c.useRef(!1), a = c.useRef(() => {
  });
  return c.useEffect(() => {
    const o = (i) => {
      if (i.target && !r.current) {
        let u = function() {
          Qt(
            yr,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = u, t.addEventListener("click", a.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", a.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", o), t.removeEventListener("click", a.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Rr(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const a = (o) => {
      o.target && !r.current && Qt(br, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function At() {
  const e = new CustomEvent(dt);
  document.dispatchEvent(e);
}
function Qt(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? pr(a, o) : a.dispatchEvent(o);
}
var et = "focusScope.autoFocusOnMount", tt = "focusScope.autoFocusOnUnmount", xt = { bubbles: !1, cancelable: !0 }, Nr = "FocusScope", Jt = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...s
  } = e, [i, u] = c.useState(null), d = Oe(a), f = Oe(o), v = c.useRef(null), h = ue(t, (m) => u(m)), C = c.useRef({
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
      let m = function(D) {
        if (C.paused || !i) return;
        const b = D.target;
        i.contains(b) ? v.current = b : oe(v.current, { select: !0 });
      }, g = function(D) {
        if (C.paused || !i) return;
        const b = D.relatedTarget;
        b !== null && (i.contains(b) || oe(v.current, { select: !0 }));
      }, p = function(D) {
        if (document.activeElement === document.body)
          for (const _ of D)
            _.removedNodes.length > 0 && oe(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", g);
      const E = new MutationObserver(p);
      return i && E.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", g), E.disconnect();
      };
    }
  }, [r, i, C.paused]), c.useEffect(() => {
    if (i) {
      It.add(C);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const p = new CustomEvent(et, xt);
        i.addEventListener(et, d), i.dispatchEvent(p), p.defaultPrevented || (Dr(Ar(en(i)), { select: !0 }), document.activeElement === m && oe(i));
      }
      return () => {
        i.removeEventListener(et, d), setTimeout(() => {
          const p = new CustomEvent(tt, xt);
          i.addEventListener(tt, f), i.dispatchEvent(p), p.defaultPrevented || oe(m ?? document.body, { select: !0 }), i.removeEventListener(tt, f), It.remove(C);
        }, 0);
      };
    }
  }, [i, d, f, C]);
  const N = c.useCallback(
    (m) => {
      if (!n && !r || C.paused) return;
      const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, p = document.activeElement;
      if (g && p) {
        const E = m.currentTarget, [D, b] = Tr(E);
        D && b ? !m.shiftKey && p === b ? (m.preventDefault(), n && oe(D, { select: !0 })) : m.shiftKey && p === D && (m.preventDefault(), n && oe(b, { select: !0 })) : p === E && m.preventDefault();
      }
    },
    [n, r, C.paused]
  );
  return /* @__PURE__ */ l(te.div, { tabIndex: -1, ...s, ref: h, onKeyDown: N });
});
Jt.displayName = Nr;
function Dr(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (oe(r, { select: t }), document.activeElement !== n) return;
}
function Tr(e) {
  const t = en(e), n = Mt(t, e), r = Mt(t.reverse(), e);
  return [n, r];
}
function en(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Mt(e, t) {
  for (const n of e)
    if (!Or(n, { upTo: t })) return n;
}
function Or(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Pr(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function oe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Pr(e) && t && e.select();
  }
}
var It = _r();
function _r() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Lt(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Lt(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Lt(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ar(e) {
  return e.filter((t) => t.tagName !== "A");
}
var xr = "Portal", tn = c.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [a, o] = c.useState(!1);
  Te(() => o(!0), []);
  const s = n || a && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? er.createPortal(/* @__PURE__ */ l(te.div, { ...r, ref: t }), s) : null;
});
tn.displayName = xr;
function Mr(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var je = (e) => {
  const { present: t, children: n } = e, r = Ir(t), a = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), o = ue(r.ref, Lr(a));
  return typeof n == "function" || r.isPresent ? c.cloneElement(a, { ref: o }) : null;
};
je.displayName = "Presence";
function Ir(e) {
  const [t, n] = c.useState(), r = c.useRef(null), a = c.useRef(e), o = c.useRef("none"), s = e ? "mounted" : "unmounted", [i, u] = Mr(s, {
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
    const d = Me(r.current);
    o.current = i === "mounted" ? d : "none";
  }, [i]), Te(() => {
    const d = r.current, f = a.current;
    if (f !== e) {
      const h = o.current, C = Me(d);
      e ? u("MOUNT") : C === "none" || (d == null ? void 0 : d.display) === "none" ? u("UNMOUNT") : u(f && h !== C ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, u]), Te(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, v = (C) => {
        const m = Me(r.current).includes(CSS.escape(C.animationName));
        if (C.target === t && m && (u("ANIMATION_END"), !a.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, h = (C) => {
        C.target === t && (o.current = Me(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: c.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function Me(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Lr(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var nt = 0;
function kr() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? kt()), document.body.insertAdjacentElement("beforeend", e[1] ?? kt()), nt++, () => {
      nt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), nt--;
    };
  }, []);
}
function kt() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var J = function() {
  return J = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, J.apply(this, arguments);
};
function nn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function $r(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var We = "right-scroll-bar-position", He = "width-before-scroll-bar", Fr = "with-scroll-bars-hidden", Br = "--removed-body-scroll-bar-size";
function rt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Wr(e, t) {
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
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Hr = typeof window < "u" ? c.useLayoutEffect : c.useEffect, $t = /* @__PURE__ */ new WeakMap();
function Ur(e, t) {
  var n = Wr(null, function(r) {
    return e.forEach(function(a) {
      return rt(a, r);
    });
  });
  return Hr(function() {
    var r = $t.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), s = n.current;
      a.forEach(function(i) {
        o.has(i) || rt(i, null);
      }), o.forEach(function(i) {
        a.has(i) || rt(i, s);
      });
    }
    $t.set(n, e);
  }, [e]), n;
}
function Vr(e) {
  return e;
}
function jr(e, t) {
  t === void 0 && (t = Vr);
  var n = [], r = !1, a = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(o) {
      var s = t(o, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(o);
      }
      n = {
        push: function(i) {
          return o(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(o) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(o), s = n;
      }
      var u = function() {
        var f = s;
        s = [], f.forEach(o);
      }, d = function() {
        return Promise.resolve().then(u);
      };
      d(), n = {
        push: function(f) {
          s.push(f), d();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return a;
}
function zr(e) {
  e === void 0 && (e = {});
  var t = jr(null);
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
function Yr(e, t) {
  return e.useMedium(t), rn;
}
var an = zr(), at = function() {
}, ze = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: at,
    onWheelCapture: at,
    onTouchMoveCapture: at
  }), a = r[0], o = r[1], s = e.forwardProps, i = e.children, u = e.className, d = e.removeScrollBar, f = e.enabled, v = e.shards, h = e.sideCar, C = e.noRelative, N = e.noIsolation, m = e.inert, g = e.allowPinchZoom, p = e.as, E = p === void 0 ? "div" : p, D = e.gapMode, b = nn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = h, k = Ur([n, t]), w = J(J({}, b), a);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(_, { sideCar: an, removeScrollBar: d, shards: v, noRelative: C, noIsolation: N, inert: m, setCallbacks: o, allowPinchZoom: !!g, lockRef: n, gapMode: D }),
    s ? c.cloneElement(c.Children.only(i), J(J({}, w), { ref: k })) : c.createElement(E, J({}, w, { className: u, ref: k }), i)
  );
});
ze.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ze.classNames = {
  fullWidth: He,
  zeroRight: We
};
var Xr = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Kr() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Xr();
  return t && e.setAttribute("nonce", t), e;
}
function qr(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Gr(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Zr = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Kr()) && (qr(t, n), Gr(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Qr = function() {
  var e = Zr();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, on = function() {
  var e = Qr(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, Jr = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ot = function(e) {
  return parseInt(e || "", 10) || 0;
}, ea = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ot(n), ot(r), ot(a)];
}, ta = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Jr;
  var t = ea(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, na = on(), we = "data-scroll-locked", ra = function(e, t, n, r) {
  var a = e.left, o = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Fr, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(we, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(o, `px;
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
    `).concat(Br, ": ").concat(i, `px;
  }
`);
}, Ft = function() {
  var e = parseInt(document.body.getAttribute(we) || "0", 10);
  return isFinite(e) ? e : 0;
}, aa = function() {
  c.useEffect(function() {
    return document.body.setAttribute(we, (Ft() + 1).toString()), function() {
      var e = Ft() - 1;
      e <= 0 ? document.body.removeAttribute(we) : document.body.setAttribute(we, e.toString());
    };
  }, []);
}, oa = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  aa();
  var o = c.useMemo(function() {
    return ta(a);
  }, [a]);
  return c.createElement(na, { styles: ra(o, !t, a, n ? "" : "!important") });
}, ft = !1;
if (typeof window < "u")
  try {
    var Ie = Object.defineProperty({}, "passive", {
      get: function() {
        return ft = !0, !0;
      }
    });
    window.addEventListener("test", Ie, Ie), window.removeEventListener("test", Ie, Ie);
  } catch {
    ft = !1;
  }
var ve = ft ? { passive: !1 } : !1, ia = function(e) {
  return e.tagName === "TEXTAREA";
}, sn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ia(e) && n[t] === "visible")
  );
}, sa = function(e) {
  return sn(e, "overflowY");
}, ca = function(e) {
  return sn(e, "overflowX");
}, Bt = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = cn(e, r);
    if (a) {
      var o = ln(e, r), s = o[1], i = o[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, la = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ua = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, cn = function(e, t) {
  return e === "v" ? sa(t) : ca(t);
}, ln = function(e, t) {
  return e === "v" ? la(t) : ua(t);
}, da = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, fa = function(e, t, n, r, a) {
  var o = da(e, window.getComputedStyle(t).direction), s = o * r, i = n.target, u = t.contains(i), d = !1, f = s > 0, v = 0, h = 0;
  do {
    if (!i)
      break;
    var C = ln(e, i), N = C[0], m = C[1], g = C[2], p = m - g - o * N;
    (N || p) && cn(e, i) && (v += p, h += N);
    var E = i.parentNode;
    i = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
  } while (
    // portaled content
    !u && i !== document.body || // self content
    u && (t.contains(i) || t === i)
  );
  return (f && Math.abs(v) < 1 || !f && Math.abs(h) < 1) && (d = !0), d;
}, Le = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Wt = function(e) {
  return [e.deltaX, e.deltaY];
}, Ht = function(e) {
  return e && "current" in e ? e.current : e;
}, ma = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, va = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ha = 0, he = [];
function pa(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), a = c.useState(ha++)[0], o = c.useState(on)[0], s = c.useRef(e);
  c.useEffect(function() {
    s.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var m = $r([e.lockRef.current], (e.shards || []).map(Ht), !0).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = c.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !s.current.allowPinchZoom;
    var p = Le(m), E = n.current, D = "deltaX" in m ? m.deltaX : E[0] - p[0], b = "deltaY" in m ? m.deltaY : E[1] - p[1], _, k = m.target, w = Math.abs(D) > Math.abs(b) ? "h" : "v";
    if ("touches" in m && w === "h" && k.type === "range")
      return !1;
    var P = window.getSelection(), O = P && P.anchorNode, $ = O ? O === k || O.contains(k) : !1;
    if ($)
      return !1;
    var F = Bt(w, k);
    if (!F)
      return !0;
    if (F ? _ = w : (_ = w === "v" ? "h" : "v", F = Bt(w, k)), !F)
      return !1;
    if (!r.current && "changedTouches" in m && (D || b) && (r.current = _), !_)
      return !0;
    var V = r.current || _;
    return fa(V, g, m, V === "h" ? D : b);
  }, []), u = c.useCallback(function(m) {
    var g = m;
    if (!(!he.length || he[he.length - 1] !== o)) {
      var p = "deltaY" in g ? Wt(g) : Le(g), E = t.current.filter(function(_) {
        return _.name === g.type && (_.target === g.target || g.target === _.shadowParent) && ma(_.delta, p);
      })[0];
      if (E && E.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!E) {
        var D = (s.current.shards || []).map(Ht).filter(Boolean).filter(function(_) {
          return _.contains(g.target);
        }), b = D.length > 0 ? i(g, D[0]) : !s.current.noIsolation;
        b && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = c.useCallback(function(m, g, p, E) {
    var D = { name: m, delta: g, target: p, should: E, shadowParent: ga(p) };
    t.current.push(D), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== D;
      });
    }, 1);
  }, []), f = c.useCallback(function(m) {
    n.current = Le(m), r.current = void 0;
  }, []), v = c.useCallback(function(m) {
    d(m.type, Wt(m), m.target, i(m, e.lockRef.current));
  }, []), h = c.useCallback(function(m) {
    d(m.type, Le(m), m.target, i(m, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return he.push(o), e.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", u, ve), document.addEventListener("touchmove", u, ve), document.addEventListener("touchstart", f, ve), function() {
      he = he.filter(function(m) {
        return m !== o;
      }), document.removeEventListener("wheel", u, ve), document.removeEventListener("touchmove", u, ve), document.removeEventListener("touchstart", f, ve);
    };
  }, []);
  var C = e.removeScrollBar, N = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    N ? c.createElement(o, { styles: va(a) }) : null,
    C ? c.createElement(oa, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function ga(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const wa = Yr(an, pa);
var un = c.forwardRef(function(e, t) {
  return c.createElement(ze, J({}, e, { ref: t, sideCar: wa }));
});
un.classNames = ze.classNames;
var ya = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pe = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), $e = {}, it = 0, dn = function(e) {
  return e && (e.host || dn(e.parentNode));
}, ba = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = dn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ca = function(e, t, n, r) {
  var a = ba(t, Array.isArray(e) ? e : [e]);
  $e[n] || ($e[n] = /* @__PURE__ */ new WeakMap());
  var o = $e[n], s = [], i = /* @__PURE__ */ new Set(), u = new Set(a), d = function(v) {
    !v || i.has(v) || (i.add(v), d(v.parentNode));
  };
  a.forEach(d);
  var f = function(v) {
    !v || u.has(v) || Array.prototype.forEach.call(v.children, function(h) {
      if (i.has(h))
        f(h);
      else
        try {
          var C = h.getAttribute(r), N = C !== null && C !== "false", m = (pe.get(h) || 0) + 1, g = (o.get(h) || 0) + 1;
          pe.set(h, m), o.set(h, g), s.push(h), m === 1 && N && ke.set(h, !0), g === 1 && h.setAttribute(n, "true"), N || h.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", h, p);
        }
    });
  };
  return f(t), i.clear(), it++, function() {
    s.forEach(function(v) {
      var h = pe.get(v) - 1, C = o.get(v) - 1;
      pe.set(v, h), o.set(v, C), h || (ke.has(v) || v.removeAttribute(r), ke.delete(v)), C || v.removeAttribute(n);
    }), it--, it || (pe = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), $e = {});
  };
}, Ea = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = ya(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), Ca(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, Ye = "Dialog", [fn] = nr(Ye), [Sa, Z] = fn(Ye), mn = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: s = !0
  } = e, i = c.useRef(null), u = c.useRef(null), [d, f] = sr({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: Ye
  });
  return /* @__PURE__ */ l(
    Sa,
    {
      scope: t,
      triggerRef: i,
      contentRef: u,
      contentId: Je(),
      titleId: Je(),
      descriptionId: Je(),
      open: d,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((v) => !v), [f]),
      modal: s,
      children: n
    }
  );
};
mn.displayName = Ye;
var vn = "DialogTrigger", hn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = Z(vn, n), o = ue(t, a.triggerRef);
    return /* @__PURE__ */ l(
      te.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": gt(a.open),
        ...r,
        ref: o,
        onClick: ie(e.onClick, a.onOpenToggle)
      }
    );
  }
);
hn.displayName = vn;
var ht = "DialogPortal", [Ra, pn] = fn(ht, {
  forceMount: void 0
}), gn = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: a } = e, o = Z(ht, t);
  return /* @__PURE__ */ l(Ra, { scope: t, forceMount: n, children: c.Children.map(r, (s) => /* @__PURE__ */ l(je, { present: n || o.open, children: /* @__PURE__ */ l(tn, { asChild: !0, container: a, children: s }) })) });
};
gn.displayName = ht;
var Ve = "DialogOverlay", wn = c.forwardRef(
  (e, t) => {
    const n = pn(Ve, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = Z(Ve, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ l(je, { present: r || o.open, children: /* @__PURE__ */ l(Da, { ...a, ref: t }) }) : null;
  }
);
wn.displayName = Ve;
var Na = /* @__PURE__ */ qt("DialogOverlay.RemoveScroll"), Da = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = Z(Ve, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l(un, { as: Na, allowPinchZoom: !0, shards: [a.contentRef], children: /* @__PURE__ */ l(
        te.div,
        {
          "data-state": gt(a.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), le = "DialogContent", yn = c.forwardRef(
  (e, t) => {
    const n = pn(le, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = Z(le, e.__scopeDialog);
    return /* @__PURE__ */ l(je, { present: r || o.open, children: o.modal ? /* @__PURE__ */ l(Ta, { ...a, ref: t }) : /* @__PURE__ */ l(Oa, { ...a, ref: t }) });
  }
);
yn.displayName = le;
var Ta = c.forwardRef(
  (e, t) => {
    const n = Z(le, e.__scopeDialog), r = c.useRef(null), a = ue(t, n.contentRef, r);
    return c.useEffect(() => {
      const o = r.current;
      if (o) return Ea(o);
    }, []), /* @__PURE__ */ l(
      bn,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ie(e.onCloseAutoFocus, (o) => {
          var s;
          o.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: ie(e.onPointerDownOutside, (o) => {
          const s = o.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && o.preventDefault();
        }),
        onFocusOutside: ie(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), Oa = c.forwardRef(
  (e, t) => {
    const n = Z(le, e.__scopeDialog), r = c.useRef(!1), a = c.useRef(!1);
    return /* @__PURE__ */ l(
      bn,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var s, i;
          (s = e.onCloseAutoFocus) == null || s.call(e, o), o.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), o.preventDefault()), r.current = !1, a.current = !1;
        },
        onInteractOutside: (o) => {
          var u, d;
          (u = e.onInteractOutside) == null || u.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const s = o.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(s)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault();
        }
      }
    );
  }
), bn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: o, ...s } = e, i = Z(le, n), u = c.useRef(null), d = ue(t, u);
    return kr(), /* @__PURE__ */ A(Ue, { children: [
      /* @__PURE__ */ l(
        Jt,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: a,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ l(
            Zt,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": gt(i.open),
              ...s,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ A(Ue, { children: [
        /* @__PURE__ */ l(Aa, { titleId: i.titleId }),
        /* @__PURE__ */ l(Ma, { contentRef: u, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), pt = "DialogTitle", Pa = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = Z(pt, n);
    return /* @__PURE__ */ l(te.h2, { id: a.titleId, ...r, ref: t });
  }
);
Pa.displayName = pt;
var Cn = "DialogDescription", _a = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = Z(Cn, n);
    return /* @__PURE__ */ l(te.p, { id: a.descriptionId, ...r, ref: t });
  }
);
_a.displayName = Cn;
var En = "DialogClose", Sn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = Z(En, n);
    return /* @__PURE__ */ l(
      te.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ie(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
Sn.displayName = En;
function gt(e) {
  return e ? "open" : "closed";
}
var Rn = "DialogTitleWarning", [_o, Nn] = tr(Rn, {
  contentName: le,
  titleName: pt,
  docsSlug: "dialog"
}), Aa = ({ titleId: e }) => {
  const t = Nn(Rn), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, xa = "DialogDescriptionWarning", Ma = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Nn(xa).contentName}}.`;
  return c.useEffect(() => {
    var o;
    const a = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && a && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Ia = mn, La = hn, ka = gn, $a = wn, Fa = yn, Ba = Sn;
function Wa(e) {
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
Wa(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function Ha() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function Ua() {
  return wt(/^Mac/);
}
function Va() {
  return wt(/^iPhone/);
}
function Ut() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function ja() {
  return wt(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Ua() && navigator.maxTouchPoints > 1;
}
function Tn() {
  return Va() || ja();
}
function wt(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const za = 24, Ya = typeof window < "u" ? Yt : ge;
function Vt(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const st = typeof document < "u" && window.visualViewport;
function jt(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function On(e) {
  for (jt(e) && (e = e.parentElement); e && !jt(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const Xa = /* @__PURE__ */ new Set([
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
let Fe = 0, ct;
function Ka(e = {}) {
  let { isDisabled: t } = e;
  Ya(() => {
    if (!t)
      return Fe++, Fe === 1 && Tn() && (ct = qa()), () => {
        Fe--, Fe === 0 && (ct == null || ct());
      };
  }, [
    t
  ]);
}
function qa() {
  let e, t = 0, n = (v) => {
    e = On(v.target), !(e === document.documentElement && e === document.body) && (t = v.changedTouches[0].pageY);
  }, r = (v) => {
    if (!e || e === document.documentElement || e === document.body) {
      v.preventDefault();
      return;
    }
    let h = v.changedTouches[0].pageY, C = e.scrollTop, N = e.scrollHeight - e.clientHeight;
    N !== 0 && ((C <= 0 && h > t || C >= N && h < t) && v.preventDefault(), t = h);
  }, a = (v) => {
    let h = v.target;
    mt(h) && h !== document.activeElement && (v.preventDefault(), h.style.transform = "translateY(-2000px)", h.focus(), requestAnimationFrame(() => {
      h.style.transform = "";
    }));
  }, o = (v) => {
    let h = v.target;
    mt(h) && (h.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      h.style.transform = "", st && (st.height < window.innerHeight ? requestAnimationFrame(() => {
        zt(h);
      }) : st.addEventListener("resize", () => zt(h), {
        once: !0
      }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, u = window.pageYOffset, d = Vt(Ga(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let f = Vt(Re(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Re(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Re(document, "touchend", a, {
    passive: !1,
    capture: !0
  }), Re(document, "focus", o, !0), Re(window, "scroll", s));
  return () => {
    d(), f(), window.scrollTo(i, u);
  };
}
function Ga(e, t, n) {
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
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = e.getBoundingClientRect().bottom;
      const s = n.getBoundingClientRect().bottom + za;
      o > s && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function mt(e) {
  return e instanceof HTMLInputElement && !Xa.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Za(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Qa(...e) {
  return (t) => e.forEach((n) => Za(n, t));
}
function Pn(...e) {
  return c.useCallback(Qa(...e), e);
}
const _n = /* @__PURE__ */ new WeakMap();
function H(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([a, o]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, o);
      return;
    }
    r[a] = e.style[a], e.style[a] = o;
  }), !n && _n.set(e, r);
}
function Ja(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = _n.get(e);
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
  let a = r.match(/^matrix3d\((.+)\)$/);
  return a ? parseFloat(a[1].split(", ")[W(t) ? 13 : 12]) : (a = r.match(/^matrix\((.+)\)$/), a ? parseFloat(a[1].split(", ")[W(t) ? 5 : 4]) : null);
}
function eo(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function lt(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function to(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const L = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, An = 0.4, no = 0.25, ro = 100, xn = 8, ce = 16, vt = 26, ut = "vaul-dragging";
function Mn(e) {
  const t = y.useRef(e);
  return y.useEffect(() => {
    t.current = e;
  }), y.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function ao({ defaultProp: e, onChange: t }) {
  const n = y.useState(e), [r] = n, a = y.useRef(r), o = Mn(t);
  return y.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [
    r,
    a,
    o
  ]), n;
}
function In({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = ao({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, s = o ? e : r, i = Mn(n), u = y.useCallback((d) => {
    if (o) {
      const v = typeof d == "function" ? d(e) : d;
      v !== e && i(v);
    } else
      a(d);
  }, [
    o,
    e,
    a,
    i
  ]);
  return [
    s,
    u
  ];
}
function oo({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: a, fadeFromIndex: o, onSnapPointChange: s, direction: i = "bottom", container: u, snapToSequentialPoint: d }) {
  const [f, v] = In({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [h, C] = y.useState(typeof window < "u" ? {
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
  const N = y.useMemo(() => f === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    f
  ]), m = y.useMemo(() => {
    var w;
    return (w = n == null ? void 0 : n.findIndex((P) => P === f)) != null ? w : null;
  }, [
    n,
    f
  ]), g = n && n.length > 0 && (o || o === 0) && !Number.isNaN(o) && n[o] === f || !n, p = y.useMemo(() => {
    const w = u ? {
      width: u.getBoundingClientRect().width,
      height: u.getBoundingClientRect().height
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
        const R = $ ? F : h ? O * w.height : 0;
        return h ? i === "bottom" ? w.height - R : -w.height + R : R;
      }
      const V = $ ? F : h ? O * w.width : 0;
      return h ? i === "right" ? w.width - V : -w.width + V : V;
    })) != null ? P : [];
  }, [
    n,
    h,
    u
  ]), E = y.useMemo(() => m !== null ? p == null ? void 0 : p[m] : null, [
    p,
    m
  ]), D = y.useCallback((w) => {
    var P;
    const O = (P = p == null ? void 0 : p.findIndex(($) => $ === w)) != null ? P : null;
    s(O), H(r.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(i) ? `translate3d(0, ${w}px, 0)` : `translate3d(${w}px, 0, 0)`
    }), p && O !== p.length - 1 && o !== void 0 && O !== o && O < o ? H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "0"
    }) : H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), v(n == null ? void 0 : n[Math.max(O, 0)]);
  }, [
    r.current,
    n,
    p,
    o,
    a,
    v
  ]);
  y.useEffect(() => {
    if (f || e) {
      var w;
      const P = (w = n == null ? void 0 : n.findIndex((O) => O === e || O === f)) != null ? w : -1;
      p && P !== -1 && typeof p[P] == "number" && D(p[P]);
    }
  }, [
    f,
    e,
    n,
    p,
    D
  ]);
  function b({ draggedDistance: w, closeDrawer: P, velocity: O, dismissible: $ }) {
    if (o === void 0) return;
    const F = i === "bottom" || i === "right" ? (E ?? 0) - w : (E ?? 0) + w, V = m === o - 1, R = m === 0, X = w > 0;
    if (V && H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), !d && O > 2 && !X) {
      $ ? P() : D(p[0]);
      return;
    }
    if (!d && O > 2 && X && p && n) {
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
      if (R && U < 0 && $ && P(), m === null) return;
      D(p[m + U]);
      return;
    }
    D(j);
  }
  function _({ draggedDistance: w }) {
    if (E === null) return;
    const P = i === "bottom" || i === "right" ? E - w : E + w;
    (i === "bottom" || i === "right") && P < p[p.length - 1] || (i === "top" || i === "left") && P > p[p.length - 1] || H(r.current, {
      transform: W(i) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function k(w, P) {
    if (!n || typeof m != "number" || !p || o === void 0) return null;
    const O = m === o - 1;
    if (m >= o && P)
      return 0;
    if (O && !P) return 1;
    if (!g && !O) return null;
    const F = O ? m + 1 : m - 1, V = O ? p[F] - p[F - 1] : p[F + 1] - p[F], R = w / Math.abs(V);
    return O ? 1 - R : R;
  }
  return {
    isLastSnapPoint: N,
    activeSnapPoint: f,
    shouldFade: g,
    getPercentageDragged: k,
    setActiveSnapPoint: v,
    activeSnapPointIndex: m,
    onRelease: b,
    onDrag: _,
    snapPointsOffset: p
  };
}
const io = () => () => {
};
function so() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: a } = Pe(), o = y.useRef(null), s = Qn(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - vt) / window.innerWidth;
  }
  y.useEffect(() => {
    if (t && n) {
      o.current && clearTimeout(o.current);
      const u = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!u) return;
      to(r && !a ? lt(document.body, {
        background: "black"
      }) : io, lt(u, {
        transformOrigin: W(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${L.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
      }));
      const d = lt(u, {
        borderRadius: `${xn}px`,
        overflow: "hidden",
        ...W(e) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        d(), o.current = window.setTimeout(() => {
          s ? document.body.style.background = s : document.body.style.removeProperty("background");
        }, L.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    s
  ]);
}
let Ne = null;
function co({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: a, noBodyStyles: o }) {
  const [s, i] = y.useState(() => typeof window < "u" ? window.location.href : ""), u = y.useRef(0), d = y.useCallback(() => {
    if (Ut() && Ne === null && e && !o) {
      Ne = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: v, innerHeight: h } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.current}px`,
        left: `${-v}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const C = h - window.innerHeight;
        C && u.current >= h && (document.body.style.top = `${-(u.current + C)}px`);
      }), 300);
    }
  }, [
    e
  ]), f = y.useCallback(() => {
    if (Ut() && Ne !== null && !o) {
      const v = -parseInt(document.body.style.top, 10), h = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Ne), window.requestAnimationFrame(() => {
        if (a && s !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(h, v);
      }), Ne = null;
    }
  }, [
    s
  ]);
  return y.useEffect(() => {
    function v() {
      u.current = window.scrollY;
    }
    return v(), window.addEventListener("scroll", v), () => {
      window.removeEventListener("scroll", v);
    };
  }, []), y.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || f();
      };
  }, [
    t,
    f
  ]), y.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && d(), t || window.setTimeout(() => {
      f();
    }, 500)) : f());
  }, [
    e,
    r,
    s,
    t,
    n,
    d,
    f
  ]), {
    restorePositionSetting: f
  };
}
function lo({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: a, snapPoints: o, shouldScaleBackground: s = !1, setBackgroundColorOnScale: i = !0, closeThreshold: u = no, scrollLockTimeout: d = ro, dismissible: f = !0, handleOnly: v = !1, fadeFromIndex: h = o && o.length - 1, activeSnapPoint: C, setActiveSnapPoint: N, fixed: m, modal: g = !0, onClose: p, nested: E, noBodyStyles: D = !1, direction: b = "bottom", defaultOpen: _ = !1, disablePreventScroll: k = !0, snapToSequentialPoint: w = !1, preventScrollRestoration: P = !1, repositionInputs: O = !0, onAnimationEnd: $, container: F, autoFocus: V = !1 }) {
  var R, X;
  const [j = !1, K] = In({
    defaultProp: _,
    prop: e,
    onChange: (S) => {
      t == null || t(S), !S && !E && Vn(), setTimeout(() => {
        $ == null || $(S);
      }, L.DURATION * 1e3), S && !g && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), S || (document.body.style.pointerEvents = "auto");
    }
  }), [U, ee] = y.useState(!1), [ne, ye] = y.useState(!1), [$n, yt] = y.useState(!1), de = y.useRef(null), _e = y.useRef(null), Xe = y.useRef(null), Ke = y.useRef(null), be = y.useRef(null), Ce = y.useRef(!1), qe = y.useRef(null), Ge = y.useRef(0), fe = y.useRef(!1), bt = y.useRef(!_), Ct = y.useRef(0), T = y.useRef(null), Et = y.useRef(((R = T.current) == null ? void 0 : R.getBoundingClientRect().height) || 0), St = y.useRef(((X = T.current) == null ? void 0 : X.getBoundingClientRect().width) || 0), Ze = y.useRef(0), Fn = y.useCallback((S) => {
    o && S === Ee.length - 1 && (_e.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: Bn, activeSnapPointIndex: me, setActiveSnapPoint: Rt, onRelease: Wn, snapPointsOffset: Ee, onDrag: Hn, shouldFade: Nt, getPercentageDragged: Un } = oo({
    snapPoints: o,
    activeSnapPointProp: C,
    setActiveSnapPointProp: N,
    drawerRef: T,
    fadeFromIndex: h,
    overlayRef: de,
    onSnapPointChange: Fn,
    direction: b,
    container: F,
    snapToSequentialPoint: w
  });
  Ka({
    isDisabled: !j || ne || !g || $n || !U || !O || !k
  });
  const { restorePositionSetting: Vn } = co({
    isOpen: j,
    modal: g,
    nested: E ?? !1,
    hasBeenOpened: U,
    preventScrollRestoration: P,
    noBodyStyles: D
  });
  function Ae() {
    return (window.innerWidth - vt) / window.innerWidth;
  }
  function jn(S) {
    var M, I;
    !f && !o || T.current && !T.current.contains(S.target) || (Et.current = ((M = T.current) == null ? void 0 : M.getBoundingClientRect().height) || 0, St.current = ((I = T.current) == null ? void 0 : I.getBoundingClientRect().width) || 0, ye(!0), Xe.current = /* @__PURE__ */ new Date(), Tn() && window.addEventListener("touchend", () => Ce.current = !1, {
      once: !0
    }), S.target.setPointerCapture(S.pointerId), Ge.current = W(b) ? S.pageY : S.pageX);
  }
  function Dt(S, M) {
    var I;
    let x = S;
    const B = (I = window.getSelection()) == null ? void 0 : I.toString(), Y = T.current ? Be(T.current, b) : null, z = /* @__PURE__ */ new Date();
    if (x.tagName === "SELECT" || x.hasAttribute("data-vaul-no-drag") || x.closest("[data-vaul-no-drag]"))
      return !1;
    if (b === "right" || b === "left")
      return !0;
    if (_e.current && z.getTime() - _e.current.getTime() < 500)
      return !1;
    if (Y !== null && (b === "bottom" ? Y > 0 : Y < 0))
      return !0;
    if (B && B.length > 0)
      return !1;
    if (be.current && z.getTime() - be.current.getTime() < d && Y === 0 || M)
      return be.current = z, !1;
    for (; x; ) {
      if (x.scrollHeight > x.clientHeight) {
        if (x.scrollTop !== 0)
          return be.current = /* @__PURE__ */ new Date(), !1;
        if (x.getAttribute("role") === "dialog")
          return !0;
      }
      x = x.parentNode;
    }
    return !0;
  }
  function zn(S) {
    if (T.current && ne) {
      const M = b === "bottom" || b === "right" ? 1 : -1, I = (Ge.current - (W(b) ? S.pageY : S.pageX)) * M, x = I > 0, B = o && !f && !x;
      if (B && me === 0) return;
      const Y = Math.abs(I), z = document.querySelector("[data-vaul-drawer-wrapper]"), re = b === "bottom" || b === "top" ? Et.current : St.current;
      let q = Y / re;
      const se = Un(Y, x);
      if (se !== null && (q = se), B && q >= 1 || !Ce.current && !Dt(S.target, x)) return;
      if (T.current.classList.add(ut), Ce.current = !0, H(T.current, {
        transition: "none"
      }), H(de.current, {
        transition: "none"
      }), o && Hn({
        draggedDistance: I
      }), x && !o) {
        const Q = eo(I), xe = Math.min(Q * -1, 0) * M;
        H(T.current, {
          transform: W(b) ? `translate3d(0, ${xe}px, 0)` : `translate3d(${xe}px, 0, 0)`
        });
        return;
      }
      const ae = 1 - q;
      if ((Nt || h && me === h - 1) && (r == null || r(S, q), H(de.current, {
        opacity: `${ae}`,
        transition: "none"
      }, !0)), z && de.current && s) {
        const Q = Math.min(Ae() + q * (1 - Ae()), 1), xe = 8 - q * 8, Ot = Math.max(0, 14 - q * 14);
        H(z, {
          borderRadius: `${xe}px`,
          transform: W(b) ? `scale(${Q}) translate3d(0, ${Ot}px, 0)` : `scale(${Q}) translate3d(${Ot}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!o) {
        const Q = Y * M;
        H(T.current, {
          transform: W(b) ? `translate3d(0, ${Q}px, 0)` : `translate3d(${Q}px, 0, 0)`
        });
      }
    }
  }
  y.useEffect(() => {
    window.requestAnimationFrame(() => {
      bt.current = !0;
    });
  }, []), y.useEffect(() => {
    var S;
    function M() {
      if (!T.current || !O) return;
      const I = document.activeElement;
      if (mt(I) || fe.current) {
        var x;
        const B = ((x = window.visualViewport) == null ? void 0 : x.height) || 0, Y = window.innerHeight;
        let z = Y - B;
        const re = T.current.getBoundingClientRect().height || 0, q = re > Y * 0.8;
        Ze.current || (Ze.current = re);
        const se = T.current.getBoundingClientRect().top;
        if (Math.abs(Ct.current - z) > 60 && (fe.current = !fe.current), o && o.length > 0 && Ee && me) {
          const ae = Ee[me] || 0;
          z += ae;
        }
        if (Ct.current = z, re > B || fe.current) {
          const ae = T.current.getBoundingClientRect().height;
          let Q = ae;
          ae > B && (Q = B - (q ? se : vt)), m ? T.current.style.height = `${ae - Math.max(z, 0)}px` : T.current.style.height = `${Math.max(Q, B - se)}px`;
        } else Ha() || (T.current.style.height = `${Ze.current}px`);
        o && o.length > 0 && !fe.current ? T.current.style.bottom = "0px" : T.current.style.bottom = `${Math.max(z, 0)}px`;
      }
    }
    return (S = window.visualViewport) == null || S.addEventListener("resize", M), () => {
      var I;
      return (I = window.visualViewport) == null ? void 0 : I.removeEventListener("resize", M);
    };
  }, [
    me,
    o,
    Ee
  ]);
  function Se(S) {
    Yn(), p == null || p(), S || K(!1), setTimeout(() => {
      o && Rt(o[0]);
    }, L.DURATION * 1e3);
  }
  function Tt() {
    if (!T.current) return;
    const S = document.querySelector("[data-vaul-drawer-wrapper]"), M = Be(T.current, b);
    H(T.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), H(de.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), s && M && M > 0 && j && H(S, {
      borderRadius: `${xn}px`,
      overflow: "hidden",
      ...W(b) ? {
        transform: `scale(${Ae()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Ae()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${L.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
    }, !0);
  }
  function Yn() {
    !ne || !T.current || (T.current.classList.remove(ut), Ce.current = !1, ye(!1), Ke.current = /* @__PURE__ */ new Date());
  }
  function Xn(S) {
    if (!ne || !T.current) return;
    T.current.classList.remove(ut), Ce.current = !1, ye(!1), Ke.current = /* @__PURE__ */ new Date();
    const M = Be(T.current, b);
    if (!S || !Dt(S.target, !1) || !M || Number.isNaN(M) || Xe.current === null) return;
    const I = Ke.current.getTime() - Xe.current.getTime(), x = Ge.current - (W(b) ? S.pageY : S.pageX), B = Math.abs(x) / I;
    if (B > 0.05 && (yt(!0), setTimeout(() => {
      yt(!1);
    }, 200)), o) {
      Wn({
        draggedDistance: x * (b === "bottom" || b === "right" ? 1 : -1),
        closeDrawer: Se,
        velocity: B,
        dismissible: f
      }), a == null || a(S, !0);
      return;
    }
    if (b === "bottom" || b === "right" ? x > 0 : x < 0) {
      Tt(), a == null || a(S, !0);
      return;
    }
    if (B > An) {
      Se(), a == null || a(S, !1);
      return;
    }
    var Y;
    const z = Math.min((Y = T.current.getBoundingClientRect().height) != null ? Y : 0, window.innerHeight);
    var re;
    const q = Math.min((re = T.current.getBoundingClientRect().width) != null ? re : 0, window.innerWidth), se = b === "left" || b === "right";
    if (Math.abs(M) >= (se ? q : z) * u) {
      Se(), a == null || a(S, !1);
      return;
    }
    a == null || a(S, !0), Tt();
  }
  y.useEffect(() => (j && (H(document.documentElement, {
    scrollBehavior: "auto"
  }), _e.current = /* @__PURE__ */ new Date()), () => {
    Ja(document.documentElement, "scrollBehavior");
  }), [
    j
  ]);
  function Kn(S) {
    const M = S ? (window.innerWidth - ce) / window.innerWidth : 1, I = S ? -ce : 0;
    qe.current && window.clearTimeout(qe.current), H(T.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(b) ? `scale(${M}) translate3d(0, ${I}px, 0)` : `scale(${M}) translate3d(${I}px, 0, 0)`
    }), !S && T.current && (qe.current = setTimeout(() => {
      const x = Be(T.current, b);
      H(T.current, {
        transition: "none",
        transform: W(b) ? `translate3d(0, ${x}px, 0)` : `translate3d(${x}px, 0, 0)`
      });
    }, 500));
  }
  function qn(S, M) {
    if (M < 0) return;
    const I = (window.innerWidth - ce) / window.innerWidth, x = I + M * (1 - I), B = -ce + M * ce;
    H(T.current, {
      transform: W(b) ? `scale(${x}) translate3d(0, ${B}px, 0)` : `scale(${x}) translate3d(${B}px, 0, 0)`,
      transition: "none"
    });
  }
  function Gn(S, M) {
    const I = W(b) ? window.innerHeight : window.innerWidth, x = M ? (I - ce) / I : 1, B = M ? -ce : 0;
    M && H(T.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(b) ? `scale(${x}) translate3d(0, ${B}px, 0)` : `scale(${x}) translate3d(${B}px, 0, 0)`
    });
  }
  return y.useEffect(() => {
    g || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    g
  ]), /* @__PURE__ */ y.createElement(Ia, {
    defaultOpen: _,
    onOpenChange: (S) => {
      !f && !S || (S ? ee(!0) : Se(!0), K(S));
    },
    open: j
  }, /* @__PURE__ */ y.createElement(Dn.Provider, {
    value: {
      activeSnapPoint: Bn,
      snapPoints: o,
      setActiveSnapPoint: Rt,
      drawerRef: T,
      overlayRef: de,
      onOpenChange: t,
      onPress: jn,
      onRelease: Xn,
      onDrag: zn,
      dismissible: f,
      shouldAnimate: bt,
      handleOnly: v,
      isOpen: j,
      isDragging: ne,
      shouldFade: Nt,
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
const Ln = /* @__PURE__ */ y.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: a, shouldFade: o, isOpen: s, modal: i, shouldAnimate: u } = Pe(), d = Pn(t, n), f = r && r.length > 0;
  if (!i)
    return null;
  const v = y.useCallback((h) => a(h), [
    a
  ]);
  return /* @__PURE__ */ y.createElement($a, {
    onMouseUp: v,
    ref: d,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": s && f ? "true" : "false",
    "data-vaul-snap-points-overlay": s && o ? "true" : "false",
    "data-vaul-animate": u != null && u.current ? "true" : "false",
    ...e
  });
});
Ln.displayName = "Drawer.Overlay";
const kn = /* @__PURE__ */ y.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, a) {
  const { drawerRef: o, onPress: s, onRelease: i, onDrag: u, keyboardIsOpen: d, snapPointsOffset: f, activeSnapPointIndex: v, modal: h, isOpen: C, direction: N, snapPoints: m, container: g, handleOnly: p, shouldAnimate: E, autoFocus: D } = Pe(), [b, _] = y.useState(!1), k = Pn(a, o), w = y.useRef(null), P = y.useRef(null), O = y.useRef(!1), $ = m && m.length > 0;
  so();
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
      _(!0);
    });
  }, []);
  function V(R) {
    w.current = null, O.current = !1, i(R);
  }
  return /* @__PURE__ */ y.createElement(Fa, {
    "data-vaul-drawer-direction": N,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": b ? "true" : "false",
    "data-vaul-snap-points": C && $ ? "true" : "false",
    "data-vaul-custom-container": g ? "true" : "false",
    "data-vaul-animate": E != null && E.current ? "true" : "false",
    ...r,
    ref: k,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[v ?? 0]}px`,
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
      if (e == null || e(R), !h || R.defaultPrevented) {
        R.preventDefault();
        return;
      }
      d.current && (d.current = !1);
    },
    onFocusOutside: (R) => {
      if (!h) {
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
      }, N, K) ? u(R) : (Math.abs(j) > K || Math.abs(X) > K) && (w.current = null);
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
const uo = 250, fo = 120, mo = /* @__PURE__ */ y.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: a, isDragging: o, snapPoints: s, activeSnapPoint: i, setActiveSnapPoint: u, dismissible: d, handleOnly: f, isOpen: v, onPress: h, onDrag: C } = Pe(), N = y.useRef(null), m = y.useRef(!1);
  function g() {
    if (m.current) {
      D();
      return;
    }
    window.setTimeout(() => {
      p();
    }, fo);
  }
  function p() {
    if (o || e || m.current) {
      D();
      return;
    }
    if (D(), !s || s.length === 0) {
      d || a();
      return;
    }
    if (i === s[s.length - 1] && d) {
      a();
      return;
    }
    const _ = s.findIndex((w) => w === i);
    if (_ === -1) return;
    const k = s[_ + 1];
    u(k);
  }
  function E() {
    N.current = window.setTimeout(() => {
      m.current = !0;
    }, uo);
  }
  function D() {
    N.current && window.clearTimeout(N.current), m.current = !1;
  }
  return /* @__PURE__ */ y.createElement("div", {
    onClick: g,
    onPointerCancel: D,
    onPointerDown: (b) => {
      f && h(b), E();
    },
    onPointerMove: (b) => {
      f && C(b);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": v ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ y.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
mo.displayName = "Drawer.Handle";
function vo(e) {
  const t = Pe(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ y.createElement(ka, {
    container: n,
    ...r
  });
}
const G = {
  Root: lo,
  Content: kn,
  Overlay: Ln,
  Trigger: La,
  Portal: vo,
  Close: Ba
};
function Ao({
  title: e,
  description: t,
  trigger: n,
  children: r,
  footer: a,
  open: o,
  onOpenChange: s,
  onBack: i,
  onOpen: u,
  onClose: d
}) {
  const [f, v] = De(!1), h = o !== void 0, C = h ? o : f, N = (m) => {
    h ? s == null || s(m) : v(m);
  };
  return ge(() => {
    C ? u == null || u() : d == null || d();
  }, [C]), /* @__PURE__ */ A(G.Root, { open: C, onOpenChange: N, children: [
    n && /* @__PURE__ */ l(G.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ A(G.Portal, { children: [
      /* @__PURE__ */ l(G.Overlay, { className: "drawer-overlay" }),
      /* @__PURE__ */ A(G.Content, { className: "bottom-sheet__content", children: [
        /* @__PURE__ */ l("div", { className: "bottom-sheet__handle" }),
        e && /* @__PURE__ */ A("div", { className: "bottom-sheet__title-bar", children: [
          i ? /* @__PURE__ */ l("button", { type: "button", className: "bottom-sheet__back", onClick: i, "aria-label": "Back", children: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l("path", { d: "M15 18l-6-6 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) : /* @__PURE__ */ l("div", { className: "bottom-sheet__title-spacer" }),
          /* @__PURE__ */ l("div", { className: "bottom-sheet__title", children: e }),
          /* @__PURE__ */ l("div", { className: "bottom-sheet__title-spacer" })
        ] }),
        /* @__PURE__ */ A("div", { className: "bottom-sheet__body", children: [
          t && /* @__PURE__ */ l("p", { className: "bottom-sheet__description", children: t }),
          r
        ] }),
        a && /* @__PURE__ */ l("div", { className: "bottom-sheet__footer", children: a })
      ] })
    ] })
  ] });
}
function xo({
  title: e,
  open: t,
  onOpenChange: n,
  onBack: r,
  children: a,
  footer: o,
  hideClose: s,
  onOpen: i,
  onClose: u
}) {
  return ge(() => {
    t ? i == null || i() : u == null || u();
  }, [t]), t ? Xt(
    /* @__PURE__ */ A("div", { className: "fss-root", children: [
      /* @__PURE__ */ A("div", { className: "fss-title-bar", children: [
        r ? /* @__PURE__ */ l("button", { type: "button", className: "fss-nav-btn", onClick: r, "aria-label": "Back", children: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l("path", { d: "M15 18l-6-6 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) : /* @__PURE__ */ l("div", { className: "fss-spacer" }),
        e && /* @__PURE__ */ l("div", { className: "fss-title", children: e }),
        s ? /* @__PURE__ */ l("div", { className: "fss-spacer" }) : /* @__PURE__ */ l("button", { type: "button", className: "fss-nav-btn", onClick: () => n(!1), "aria-label": "Close", children: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
      ] }),
      /* @__PURE__ */ l("div", { className: `fss-body ${o ? "fss-body--with-footer" : "fss-body--no-footer"}`, children: a }),
      o && /* @__PURE__ */ l("div", { className: "fss-footer", children: o })
    ] }),
    document.body
  ) : null;
}
function Mo({ title: e, description: t, children: n }) {
  return /* @__PURE__ */ A(G.Root, { children: [
    /* @__PURE__ */ l(G.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ A(G.Portal, { children: [
      /* @__PURE__ */ l(G.Overlay, { className: "drawer-overlay" }),
      /* @__PURE__ */ A(G.Content, { className: "info-sheet__content", children: [
        /* @__PURE__ */ A("div", { className: "info-sheet__header", children: [
          /* @__PURE__ */ l(G.Close, { className: "info-sheet__close", "aria-label": "Close", children: "×" }),
          /* @__PURE__ */ l("div", { className: "info-sheet__title", children: e }),
          /* @__PURE__ */ l("div", { className: "info-sheet__spacer" })
        ] }),
        /* @__PURE__ */ l("p", { className: "info-sheet__description", children: t })
      ] })
    ] })
  ] });
}
function Io({ children: e, className: t = "", ...n }) {
  return /* @__PURE__ */ l("button", { type: "button", className: `ds-primary-btn ${t}`, ...n, children: e });
}
function Lo({ className: e = "" }) {
  return /* @__PURE__ */ A("div", { className: `ds-ad-slot ${e}`, "data-testid": "ad-slot", children: [
    /* @__PURE__ */ A("svg", { className: "ds-ad-slot-icon", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ l("rect", { x: "1", y: "1", width: "14", height: "14", rx: "2", stroke: "#99A1AF", strokeWidth: "1.2" }),
      /* @__PURE__ */ l("line", { x1: "1", y1: "5", x2: "15", y2: "5", stroke: "#99A1AF", strokeWidth: "1.2" }),
      /* @__PURE__ */ l("line", { x1: "5", y1: "5", x2: "5", y2: "15", stroke: "#99A1AF", strokeWidth: "1.2" })
    ] }),
    /* @__PURE__ */ l("span", { className: "ds-ad-slot-text", children: "Ad Slot Placeholder" })
  ] });
}
function ko({ width: e = 72, height: t = 24, className: n }) {
  return /* @__PURE__ */ A(
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
        /* @__PURE__ */ l("g", { transform: "translate(0, 6.75)", children: /* @__PURE__ */ l("path", { d: "M7.88672 0.02132C8.01505 -0.0034738 8.13972 -0.00900585 8.25977 0.0174138V0.0183903C12.4572 0.0449027 14.3739 1.92008 14.9072 3.02523C14.9634 3.11975 15.0191 3.21855 15.0713 3.32405C15.6332 4.39561 15.914 5.70387 15.9141 7.24691V16.0379C15.914 16.2735 15.8271 16.4661 15.6543 16.616C15.503 16.766 15.3196 16.8416 15.1035 16.8416H11.667C11.4292 16.8416 11.2343 16.7661 11.083 16.616C10.9319 16.4661 10.8565 16.2734 10.8564 16.0379V7.43929C10.8564 6.30371 10.5754 5.42502 10.0137 4.80355C9.54049 4.24056 8.86801 3.92334 7.99707 3.85335C7.07264 3.90282 6.36423 4.21966 5.87207 4.80355C5.31286 5.42044 5.03322 6.29332 5.0332 7.42073V15.9549C5.0332 16.1887 4.95792 16.3803 4.80762 16.5291C4.65708 16.678 4.46312 16.7527 4.22656 16.7528H0.806641C0.591553 16.7528 0.408373 16.678 0.257812 16.5291C0.0859755 16.3803 0 16.1888 0 15.9549V7.22933C1.29896e-05 5.69773 0.279653 4.39939 0.838867 3.33577C0.858076 3.29703 0.878568 3.25961 0.898438 3.22249H0.897461C0.901879 3.21373 0.907466 3.20503 0.912109 3.19612C0.935755 3.15273 0.959824 3.11043 0.984375 3.06917C1.0007 3.04187 1.01693 3.01346 1.03516 2.98519C1.19548 2.73126 1.37369 2.51766 1.56836 2.32991C2.58106 1.29448 4.5982 0.0871206 7.88672 0.02132Z", fill: "white" }) }),
        /* @__PURE__ */ l("g", { transform: "translate(19.21, 6.64)", children: /* @__PURE__ */ l("path", { d: "M8.23503 17.3596C5.74939 17.3596 3.77169 16.6738 2.30192 15.3022C0.853764 13.9306 0.0864571 11.9374 0 9.32276C0 9.15131 0 8.92628 0 8.64767C0 8.34762 0 8.11188 0 7.94042C0.0864571 6.29019 0.464707 4.8757 1.13475 3.69696C1.80479 2.49679 2.74501 1.58594 3.95541 0.964424C5.16581 0.321474 6.58154 0 8.20261 0C10.0182 0 11.5312 0.375053 12.7416 1.12516C13.9736 1.85384 14.8922 2.86112 15.4974 4.14702C16.1242 5.41149 16.4376 6.86884 16.4376 8.51908V9.25847C16.4376 9.47278 16.3512 9.65495 16.1783 9.80497C16.027 9.955 15.8433 10.03 15.6271 10.03H5.02532C5.02532 10.0514 5.02532 10.0943 5.02532 10.1586C5.02532 10.2015 5.02532 10.2443 5.02532 10.2872C5.04693 10.973 5.17661 11.6052 5.41437 12.1839C5.67374 12.7411 6.03038 13.1912 6.48428 13.5341C6.95979 13.877 7.52176 14.0484 8.17019 14.0484C8.71055 14.0484 9.15364 13.9734 9.49947 13.8234C9.8453 13.6734 10.1263 13.4912 10.3424 13.2769C10.5802 13.0626 10.7531 12.8804 10.8612 12.7304C11.0557 12.5161 11.207 12.3875 11.3151 12.3446C11.4448 12.2803 11.6393 12.2482 11.8986 12.2482H15.2705C15.4866 12.2482 15.6595 12.3125 15.7892 12.4411C15.9405 12.5482 16.0054 12.709 15.9837 12.9233C15.9621 13.2662 15.7784 13.6948 15.4326 14.2092C15.1084 14.7021 14.622 15.195 13.9736 15.688C13.3252 16.1595 12.5147 16.5559 11.542 16.8774C10.591 17.1989 9.48866 17.3596 8.23503 17.3596ZM5.02532 7.10459H11.3799V7.04029C11.3799 6.26875 11.2502 5.60437 10.9909 5.04715C10.7531 4.4685 10.3965 4.01843 9.92094 3.69696C9.44543 3.37548 8.87265 3.21475 8.20261 3.21475C7.53257 3.21475 6.95979 3.37548 6.48428 3.69696C6.00876 4.01843 5.64132 4.4685 5.38195 5.04715C5.14419 5.60437 5.02532 6.26875 5.02532 7.04029V7.10459Z", fill: "white" }) }),
        /* @__PURE__ */ l("g", { transform: "translate(38.96, 4.09)", children: /* @__PURE__ */ l("path", { d: "M2.8855 18.9771C3.83653 19.4058 4.98208 19.6201 6.32217 19.6201H9.14283C9.35898 19.6201 9.5427 19.5451 9.694 19.3951C9.84529 19.245 9.92094 19.0521 9.92094 18.8164V16.4375C9.92094 16.2232 9.84529 16.041 9.694 15.891C9.5427 15.741 9.35898 15.6659 9.14283 15.6659H6.77607C6.04119 15.6659 5.52244 15.4409 5.21984 14.9908C4.93886 14.5194 4.79836 13.8764 4.79836 13.062V6.87484H8.85104C9.06718 6.87484 9.2509 6.79983 9.4022 6.64981C9.5535 6.49978 9.62915 6.3069 9.62915 6.07115V3.88512C9.62915 3.64938 9.5535 3.45649 9.4022 3.30647C9.2509 3.15645 9.06718 3.08144 8.85104 3.08144H4.79836V0.803685C4.79836 0.567938 4.72271 0.375054 4.57141 0.225033C4.42011 0.0750109 4.22559 0 3.98783 0L0.810533 0.89017C0.594391 0.89017 0.399863 0.965181 0.226948 1.1152C0.0756489 1.26522 0 1.45811 0 1.69386V3.08144V6.87484V13.4478C0 14.8408 0.237757 15.9981 0.71327 16.9197C1.2104 17.8413 1.93448 18.5271 2.8855 18.9771Z", fill: "white" }) }),
        /* @__PURE__ */ l("g", { transform: "translate(52.25, 4.09)", children: /* @__PURE__ */ l("path", { d: "M2.8855 18.9771C3.83653 19.4058 4.98208 19.6201 6.32217 19.6201H9.14283C9.35898 19.6201 9.5427 19.5451 9.694 19.3951C9.84529 19.245 9.92094 19.0521 9.92094 18.8164V16.4375C9.92094 16.2232 9.84529 16.041 9.694 15.891C9.5427 15.741 9.35898 15.6659 9.14283 15.6659H6.77607C6.04119 15.6659 5.52244 15.4409 5.21984 14.9908C4.93886 14.5194 4.79836 13.8764 4.79836 13.062V6.87484H8.85104C9.06718 6.87484 9.2509 6.79983 9.4022 6.64981C9.5535 6.49978 9.62915 6.3069 9.62915 6.07115V3.88512C9.62915 3.64938 9.5535 3.45649 9.4022 3.30647C9.2509 3.15645 9.06718 3.08144 8.85104 3.08144H4.79836V0.803685C4.79836 0.567938 4.72271 0.375054 4.57141 0.225033C4.42011 0.0750109 4.22559 0 3.98783 0L0.810533 0.89017C0.594391 0.89017 0.399863 0.965181 0.226948 1.1152C0.0756489 1.26522 0 1.45811 0 1.69386V3.08144V6.87484V13.4478C0 14.8408 0.237757 15.9981 0.71327 16.9197C1.2104 17.8413 1.93448 18.5271 2.8855 18.9771Z", fill: "white" }) }),
        /* @__PURE__ */ l("g", { transform: "translate(66.89, 6.96)", children: /* @__PURE__ */ l("path", { d: "M0.778111 16.7167C0.561969 16.7167 0.378248 16.6417 0.226948 16.4916C0.0756487 16.3416 0 16.1487 0 15.913V0.803687C0 0.567938 0.0756487 0.375054 0.226948 0.225034C0.378248 0.0750116 0.561969 0 0.778111 0H4.02025C4.25801 0 4.45254 0.0750116 4.60384 0.225034C4.75514 0.375054 4.83079 0.567938 4.83079 0.803687V15.913C4.83079 16.1487 4.75514 16.3416 4.60384 16.4916C4.45254 16.6417 4.25801 16.7167 4.02025 16.7167H0.778111Z", fill: "white" }) }),
        /* @__PURE__ */ l("circle", { cx: "69.32", cy: "2.68", r: "2.68", fill: "#26D4EB" })
      ]
    }
  );
}
export {
  Lo as AdSlot,
  Co as AdditionalIncomeCard,
  Po as BottomNav,
  Ao as BottomSheet,
  wo as Button,
  yo as Card,
  No as Divider,
  xo as FullScreenSheet,
  Mo as InfoSheet,
  So as InputField,
  Eo as ListRow,
  Ro as MoneyRow,
  ko as NettiLogo,
  Io as PrimaryButton,
  bo as SalaryCard,
  Do as SegmentedControl,
  Oo as Select,
  To as Switch
};
