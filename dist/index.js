import { jsxs as x, jsx as l, Fragment as Ct } from "react/jsx-runtime";
import * as c from "react";
import _, { useState as $e, useId as vr, useRef as Ut, useLayoutEffect as ln, useEffect as Ne, useMemo as hr } from "react";
import * as pr from "react-dom";
import gr, { createPortal as cn } from "react-dom";
const wr = "_button_qjyoi_7", yr = "_sizeLg_qjyoi_32", br = "_sizeMd_qjyoi_41", _r = "_variantPro_qjyoi_53", Cr = "_variantPrimary_qjyoi_63", Er = "_variantSecondary_qjyoi_74", Sr = "_variantGhost_qjyoi_85", Nr = "_variantText_qjyoi_97", Rr = "_fullWidth_qjyoi_114", xr = "_icon_qjyoi_123", Dr = "_label_qjyoi_132", ee = {
  button: wr,
  sizeLg: yr,
  sizeMd: br,
  variantPro: _r,
  variantPrimary: Cr,
  variantSecondary: Er,
  variantGhost: Sr,
  variantText: Nr,
  fullWidth: Rr,
  icon: xr,
  label: Dr
}, Tr = {
  pro: ee.variantPro,
  primary: ee.variantPrimary,
  secondary: ee.variantSecondary,
  ghost: ee.variantGhost,
  text: ee.variantText
}, Pr = {
  lg: ee.sizeLg,
  md: ee.sizeMd
};
function Et({
  variant: e = "primary",
  size: t = "lg",
  icon: n,
  fullWidth: r = !1,
  children: a,
  className: o,
  disabled: s,
  ...i
}) {
  return /* @__PURE__ */ x(
    "button",
    {
      type: "button",
      disabled: s,
      className: [
        ee.button,
        Tr[e],
        Pr[t],
        r ? ee.fullWidth : "",
        o ?? ""
      ].filter(Boolean).join(" "),
      ...i,
      children: [
        n && /* @__PURE__ */ l("span", { className: ee.icon, "aria-hidden": "true", children: n }),
        /* @__PURE__ */ l("span", { className: ee.label, children: a })
      ]
    }
  );
}
const Or = "_tick_ax8ei_3", Ar = "_active_ax8ei_18", kr = "_inactive_ax8ei_23", Ht = {
  tick: Or,
  active: Ar,
  inactive: kr
};
function Mr({
  state: e = "active",
  className: t,
  "aria-label": n
}) {
  const r = n ?? (e === "active" ? "Included" : "Coming soon");
  return /* @__PURE__ */ l(
    "span",
    {
      className: [Ht.tick, Ht[e], t ?? ""].filter(Boolean).join(" "),
      "aria-label": r,
      role: "img",
      children: "✓"
    }
  );
}
const Lr = "_row_1fxt2_3", Ir = "_text_1fxt2_10", $r = "_title_1fxt2_18", Br = "_muted_1fxt2_26", Fr = "_description_1fxt2_30", Ae = {
  row: Lr,
  text: Ir,
  title: $r,
  muted: Br,
  description: Fr
};
function jr({
  title: e,
  description: t,
  state: n = "active",
  className: r
}) {
  const a = n === "inactive";
  return /* @__PURE__ */ x("div", { className: [Ae.row, r ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ l(Mr, { state: n }),
    /* @__PURE__ */ x("div", { className: Ae.text, children: [
      /* @__PURE__ */ l(
        "span",
        {
          className: [Ae.title, a ? Ae.muted : ""].filter(Boolean).join(" "),
          children: e
        }
      ),
      t && /* @__PURE__ */ l("span", { className: Ae.description, children: t })
    ] })
  ] });
}
const Wr = "_outer_1ix79_7", Ur = "_row_1ix79_14", Hr = "_labels_1ix79_25", Vr = "_label_1ix79_25", zr = "_subLabel_1ix79_45", qr = "_right_1ix79_55", Yr = "_amount_1ix79_62", Gr = "_remove_1ix79_73", Xr = "_divider_1ix79_104", ie = {
  outer: Wr,
  row: Ur,
  labels: Hr,
  label: Vr,
  subLabel: zr,
  right: qr,
  amount: Yr,
  remove: Gr,
  divider: Xr
};
function Kr({
  label: e,
  subLabel: t,
  amountFormatted: n,
  hasRemove: r = !1,
  onRemove: a,
  removeLabel: o = `Remove ${e}`,
  hasDivider: s = !0,
  badge: i,
  className: d
}) {
  return /* @__PURE__ */ x("div", { className: [ie.outer, d ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ x("div", { className: ie.row, children: [
      /* @__PURE__ */ x("div", { className: ie.labels, children: [
        /* @__PURE__ */ l("span", { className: ie.label, children: e }),
        t && /* @__PURE__ */ l("span", { className: ie.subLabel, children: t })
      ] }),
      /* @__PURE__ */ x("div", { className: ie.right, children: [
        i,
        n && /* @__PURE__ */ l("span", { className: ie.amount, children: n }),
        r && a && /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            className: ie.remove,
            onClick: a,
            "aria-label": o,
            children: /* @__PURE__ */ l("span", { "aria-hidden": "true", children: "−" })
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ l("div", { className: ie.divider, "aria-hidden": "true" })
  ] });
}
const Zr = "_track_18ylw_7", Qr = "_dark_18ylw_3", Jr = "_light_18ylw_4", ea = "_segment_18ylw_27", ta = "_selected_18ylw_60", Ve = {
  track: Zr,
  dark: Qr,
  light: Jr,
  segment: ea,
  selected: ta
};
function na({
  options: e,
  value: t,
  onChange: n,
  context: r = "light",
  className: a,
  "aria-label": o = "Select period"
}) {
  const s = (i, d) => {
    let u = null;
    i.key === "ArrowRight" || i.key === "ArrowDown" ? u = (d + 1) % e.length : (i.key === "ArrowLeft" || i.key === "ArrowUp") && (u = (d - 1 + e.length) % e.length), u !== null && (i.preventDefault(), n(e[u].value));
  };
  return /* @__PURE__ */ l(
    "div",
    {
      className: [Ve.track, Ve[r], a ?? ""].filter(Boolean).join(" "),
      role: "tablist",
      "aria-label": o,
      children: e.map((i, d) => {
        const u = i.value === t;
        return /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": u,
            tabIndex: u ? 0 : -1,
            className: [Ve.segment, u ? Ve.selected : ""].join(" "),
            onClick: () => n(i.value),
            onKeyDown: (f) => s(f, d),
            "data-testid": `segment-${i.value}`,
            children: i.label
          },
          i.value
        );
      })
    }
  );
}
const ra = "_field_13yb0_3", aa = "_label_13yb0_16", oa = "_fieldStandard_13yb0_3", ia = "_inputBox_13yb0_38", sa = "_state_focused_13yb0_50", la = "_state_filled_13yb0_56", ca = "_input_13yb0_38", ua = "_fieldLarge_13yb0_4", da = "_largeAmountRow_13yb0_91", fa = "_largePrefix_13yb0_99", ma = "_largeInput_13yb0_111", va = "_state_empty_13yb0_132", ha = "_underline_13yb0_137", pa = "_underlineFocused_13yb0_145", ga = "_disabled_13yb0_151", wa = "_error_13yb0_158", U = {
  field: ra,
  label: aa,
  fieldStandard: oa,
  inputBox: ia,
  state_focused: sa,
  state_filled: la,
  input: ca,
  fieldLarge: ua,
  largeAmountRow: da,
  largePrefix: fa,
  largeInput: ma,
  state_empty: va,
  underline: ha,
  underlineFocused: pa,
  disabled: ga,
  error: wa
};
function Xs({
  label: e,
  value: t,
  onChange: n,
  variant: r = "standard",
  prefix: a = "£",
  error: o,
  className: s,
  placeholder: i,
  disabled: d,
  inputMode: u,
  ...f
}) {
  const [m, h] = $e(!1), b = vr(), N = t !== "" && t !== void 0, v = m ? "focused" : N ? "filled" : "empty";
  return r === "largeAmount" ? /* @__PURE__ */ x(
    "div",
    {
      className: [
        U.field,
        U.fieldLarge,
        U[`state_${v}`],
        d ? U.disabled : "",
        s ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ l("label", { htmlFor: b, className: U.label, children: e }),
        /* @__PURE__ */ x("div", { className: U.largeAmountRow, children: [
          a && /* @__PURE__ */ l("span", { className: U.largePrefix, "aria-hidden": "true", children: a }),
          /* @__PURE__ */ l(
            "input",
            {
              id: b,
              type: "text",
              inputMode: u ?? "decimal",
              value: t,
              placeholder: N ? void 0 : "0",
              onChange: (g) => n(g.target.value),
              onFocus: () => h(!0),
              onBlur: () => h(!1),
              disabled: d,
              "aria-invalid": !!o,
              "aria-describedby": o ? `${b}-error` : void 0,
              className: U.largeInput,
              ...f
            }
          )
        ] }),
        /* @__PURE__ */ l(
          "div",
          {
            className: [U.underline, m ? U.underlineFocused : ""].join(" "),
            "aria-hidden": "true"
          }
        ),
        o && /* @__PURE__ */ l("span", { id: `${b}-error`, className: U.error, role: "alert", children: o })
      ]
    }
  ) : /* @__PURE__ */ x(
    "div",
    {
      className: [
        U.field,
        U.fieldStandard,
        U[`state_${v}`],
        d ? U.disabled : "",
        s ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ l("label", { htmlFor: b, className: U.label, children: e }),
        /* @__PURE__ */ l("div", { className: U.inputBox, children: /* @__PURE__ */ l(
          "input",
          {
            id: b,
            type: "text",
            inputMode: u ?? "decimal",
            value: t,
            placeholder: i ?? "e.g. 16",
            onChange: (g) => n(g.target.value),
            onFocus: () => h(!0),
            onBlur: () => h(!1),
            disabled: d,
            "aria-invalid": !!o,
            "aria-describedby": o ? `${b}-error` : void 0,
            className: U.input,
            ...f
          }
        ) }),
        o && /* @__PURE__ */ l("span", { id: `${b}-error`, className: U.error, role: "alert", children: o })
      ]
    }
  );
}
const ya = "_row_f6k5w_3", ba = "_label_f6k5w_10", _a = "_amount_f6k5w_17", Ca = "_positive_f6k5w_27", Ea = "_negative_f6k5w_30", Sa = "_strong_f6k5w_33", Na = "_divider_f6k5w_49", pe = {
  row: ya,
  label: ba,
  amount: _a,
  positive: Ca,
  negative: Ea,
  strong: Sa,
  divider: Na
};
function Ks({
  label: e,
  amount: t,
  strong: n = !1,
  showPositive: r = !0,
  className: a,
  currency: o = "GBP",
  locale: s = "en-GB"
}) {
  const i = t > 0 && r, d = t < 0, u = new Intl.NumberFormat(s, {
    style: "currency",
    currency: o,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(t)), f = d ? `−${u}` : u;
  return /* @__PURE__ */ x(
    "div",
    {
      className: [
        pe.row,
        i ? pe.positive : "",
        d ? pe.negative : "",
        n ? pe.strong : "",
        a ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ l("span", { className: pe.label, children: e }),
        /* @__PURE__ */ l("span", { className: pe.amount, children: f })
      ]
    }
  );
}
function Zs({ className: e }) {
  return /* @__PURE__ */ l("div", { className: [pe.divider, e ?? ""].filter(Boolean).join(" ") });
}
const Ra = "_field_180mg_3", xa = "_label_180mg_11", Da = "_trigger_180mg_19", Ta = "_triggerOpen_180mg_42", Pa = "_chevron_180mg_52", Oa = "_chevronOpen_180mg_58", Aa = "_dropdown_180mg_64", ka = "_dropdownUpward_180mg_76", Ma = "_option_180mg_80", La = "_optionSelected_180mg_101", re = {
  field: Ra,
  label: xa,
  trigger: Da,
  triggerOpen: Ta,
  chevron: Pa,
  chevronOpen: Oa,
  dropdown: Aa,
  dropdownUpward: ka,
  option: Ma,
  optionSelected: La
};
function Qs({ label: e, options: t, value: n, onChange: r, className: a, disabled: o, "data-testid": s }) {
  const [i, d] = $e(!1), [u, f] = $e(null), m = Ut(null), h = Ut(null), b = t.find((g) => g.value === n), N = () => {
    if (!m.current) return;
    const g = m.current.getBoundingClientRect(), p = window.innerHeight, C = Math.min(p * 0.6, 320), E = p - g.bottom - 12, w = g.top - 12, O = E < C && w > E;
    f({ top: O ? g.top - 8 : g.bottom + 8, left: g.left, width: g.width, upward: O });
  };
  ln(() => {
    i && N();
  }, [i]), Ne(() => {
    if (!i) return;
    const g = () => N(), p = () => N();
    return window.addEventListener("scroll", g, !0), window.addEventListener("resize", p), () => {
      window.removeEventListener("scroll", g, !0), window.removeEventListener("resize", p);
    };
  }, [i]), Ne(() => {
    if (!i) return;
    const g = (p) => {
      var E, w;
      const C = p.target;
      !((E = m.current) != null && E.contains(C)) && !((w = h.current) != null && w.contains(C)) && d(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [i]), Ne(() => {
    if (!i) return;
    const g = (p) => {
      var C;
      p.key === "Escape" && (d(!1), (C = m.current) == null || C.focus());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [i]);
  const v = i && u && cn(
    /* @__PURE__ */ l(
      "div",
      {
        ref: h,
        className: [re.dropdown, u.upward ? re.dropdownUpward : ""].join(" "),
        style: {
          position: "fixed",
          top: u.upward ? "auto" : u.top,
          bottom: u.upward ? `${window.innerHeight - u.top}px` : "auto",
          left: u.left,
          width: u.width
        },
        children: t.map((g) => /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            className: [re.option, n === g.value ? re.optionSelected : ""].join(" "),
            onClick: () => {
              var p;
              r(g.value), d(!1), (p = m.current) == null || p.focus();
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
  return /* @__PURE__ */ x("div", { className: [re.field, a ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ l("label", { className: re.label, children: e }),
    /* @__PURE__ */ x(
      "button",
      {
        ref: m,
        type: "button",
        className: [re.trigger, i ? re.triggerOpen : ""].join(" "),
        onClick: () => !o && d(!i),
        disabled: o,
        "data-testid": s,
        "aria-haspopup": "listbox",
        "aria-expanded": i,
        children: [
          /* @__PURE__ */ l("span", { children: (b == null ? void 0 : b.label) ?? "Select…" }),
          /* @__PURE__ */ l(
            "svg",
            {
              className: [re.chevron, i ? re.chevronOpen : ""].join(" "),
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              children: /* @__PURE__ */ l("path", { d: "M4 6L8 10L12 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            }
          )
        ]
      }
    ),
    v
  ] });
}
const Ia = "_nav_1y8fh_3", $a = "_item_1y8fh_12", Ba = "_active_1y8fh_33", Fa = "_icon_1y8fh_37", ja = "_label_1y8fh_46", ke = {
  nav: Ia,
  item: $a,
  active: Ba,
  icon: Fa,
  label: ja
};
function Js({ items: e, activeId: t, onChange: n, className: r }) {
  return /* @__PURE__ */ l("nav", { className: [ke.nav, r ?? ""].filter(Boolean).join(" "), children: e.map((a) => /* @__PURE__ */ x(
    "button",
    {
      type: "button",
      className: [ke.item, t === a.id ? ke.active : ""].filter(Boolean).join(" "),
      onClick: () => n(a.id),
      "aria-current": t === a.id ? "page" : void 0,
      "data-testid": `nav-${a.id}`,
      children: [
        /* @__PURE__ */ l("span", { className: ke.icon, "aria-hidden": "true", children: a.icon }),
        /* @__PURE__ */ l("span", { className: ke.label, children: a.label })
      ]
    },
    a.id
  )) });
}
const Wa = "_card_xc5wj_11", Ua = "_eyebrow_xc5wj_25", Ha = "_amount_xc5wj_39", Va = "_badge_xc5wj_51", za = "_toggle_xc5wj_70", Me = {
  card: Wa,
  eyebrow: Ua,
  amount: Ha,
  badge: Va,
  toggle: za
}, qa = [
  { value: "yearly", label: "Yearly" },
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" }
];
function el({
  salaryFormatted: e,
  period: t,
  onPeriodChange: n,
  additionalIncomeSummary: r,
  className: a
}) {
  const o = !!r;
  return /* @__PURE__ */ x(
    "article",
    {
      className: [Me.card, a ?? ""].filter(Boolean).join(" "),
      "aria-label": "Your salary",
      children: [
        /* @__PURE__ */ l("span", { className: Me.eyebrow, children: "YOUR SALARY" }),
        /* @__PURE__ */ l("span", { className: Me.amount, "aria-live": "polite", children: e }),
        o && /* @__PURE__ */ l("div", { className: Me.badge, "aria-label": "Additional income", children: r }),
        /* @__PURE__ */ l(
          na,
          {
            options: qa,
            value: t,
            onChange: (s) => n(s),
            context: "dark",
            "aria-label": "Pay period",
            className: Me.toggle
          }
        )
      ]
    }
  );
}
const Ya = "_card_ns9j4_7", Ga = "_empty_ns9j4_18", Xa = "_hasItems_ns9j4_26", Ka = "_header_ns9j4_33", Za = "_eyebrow_ns9j4_42", Qa = "_divider_ns9j4_56", Ja = "_rows_ns9j4_64", ve = {
  card: Ya,
  empty: Ga,
  hasItems: Xa,
  header: Ka,
  eyebrow: Za,
  divider: Qa,
  rows: Ja
};
function tl({
  items: e,
  onAdd: t,
  className: n
}) {
  const r = e.length > 0;
  return /* @__PURE__ */ l(
    "div",
    {
      className: [
        ve.card,
        r ? ve.hasItems : ve.empty,
        n ?? ""
      ].filter(Boolean).join(" "),
      children: r ? /* @__PURE__ */ x(Ct, { children: [
        /* @__PURE__ */ x("div", { className: ve.header, children: [
          /* @__PURE__ */ l("span", { className: ve.eyebrow, children: "ADDITIONAL INCOME" }),
          /* @__PURE__ */ l(
            Et,
            {
              variant: "ghost",
              size: "md",
              onClick: t,
              "aria-label": "Add another income source",
              children: "+ Add income"
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { className: ve.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ l("div", { className: ve.rows, children: e.map((a, o) => /* @__PURE__ */ l(
          Kr,
          {
            label: a.label,
            subLabel: a.subLabel,
            amountFormatted: a.amountFormatted,
            hasRemove: !1,
            hasDivider: o < e.length - 1
          },
          a.id
        )) })
      ] }) : (
        /* Empty state — Ghost button fills the full card */
        /* @__PURE__ */ l(
          Et,
          {
            variant: "ghost",
            size: "lg",
            fullWidth: !0,
            onClick: t,
            "aria-label": "Add additional income",
            children: "+ Add additional income"
          }
        )
      )
    }
  );
}
function fe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function Vt(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function un(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((a) => {
      const o = Vt(a, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          typeof o == "function" ? o() : Vt(e[a], null);
        }
      };
  };
}
function we(...e) {
  return c.useCallback(un(...e), e);
}
function eo(e, t) {
  const n = c.createContext(t), r = (o) => {
    const { children: s, ...i } = o, d = c.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ l(n.Provider, { value: d, children: s });
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
function to(e, t = []) {
  let n = [];
  function r(o, s) {
    const i = c.createContext(s), d = n.length;
    n = [...n, s];
    const u = (m) => {
      var p;
      const { scope: h, children: b, ...N } = m, v = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[d]) || i, g = c.useMemo(() => N, Object.values(N));
      return /* @__PURE__ */ l(v.Provider, { value: g, children: b });
    };
    u.displayName = o + "Provider";
    function f(m, h) {
      var v;
      const b = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[d]) || i, N = c.useContext(b);
      if (N) return N;
      if (s !== void 0) return s;
      throw new Error(`\`${m}\` must be used within \`${o}\``);
    }
    return [u, f];
  }
  const a = () => {
    const o = n.map((s) => c.createContext(s));
    return function(i) {
      const d = (i == null ? void 0 : i[e]) || o;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: d } }),
        [i, d]
      );
    };
  };
  return a.scopeName = e, [r, no(a, ...t)];
}
function no(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(o) {
      const s = r.reduce((i, { useScope: d, scopeName: u }) => {
        const m = d(o)[`__scope${u}`];
        return { ...i, ...m };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Be = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
}, ro = c[" useId ".trim().toString()] || (() => {
}), ao = 0;
function ut(e) {
  const [t, n] = c.useState(ro());
  return Be(() => {
    n((r) => r ?? String(ao++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var oo = c[" useInsertionEffect ".trim().toString()] || Be;
function io({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [a, o, s] = so({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, d = i ? e : a;
  {
    const f = c.useRef(e !== void 0);
    c.useEffect(() => {
      const m = f.current;
      m !== i && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const u = c.useCallback(
    (f) => {
      var m;
      if (i) {
        const h = lo(f) ? f(e) : f;
        h !== e && ((m = s.current) == null || m.call(s, h));
      } else
        o(f);
    },
    [i, e, o, s]
  );
  return [d, u];
}
function so({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), a = c.useRef(n), o = c.useRef(t);
  return oo(() => {
    o.current = t;
  }, [t]), c.useEffect(() => {
    var s;
    a.current !== n && ((s = o.current) == null || s.call(o, n), a.current = n);
  }, [n, a]), [n, r, o];
}
function lo(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function dn(e) {
  const t = /* @__PURE__ */ co(e), n = c.forwardRef((r, a) => {
    const { children: o, ...s } = r, i = c.Children.toArray(o), d = i.find(fo);
    if (d) {
      const u = d.props.children, f = i.map((m) => m === d ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : m);
      return /* @__PURE__ */ l(t, { ...s, ref: a, children: c.isValidElement(u) ? c.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ l(t, { ...s, ref: a, children: o });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function co(e) {
  const t = c.forwardRef((n, r) => {
    const { children: a, ...o } = n;
    if (c.isValidElement(a)) {
      const s = vo(a), i = mo(o, a.props);
      return a.type !== c.Fragment && (i.ref = r ? un(r, s) : s), c.cloneElement(a, i);
    }
    return c.Children.count(a) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var uo = Symbol("radix.slottable");
function fo(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === uo;
}
function mo(e, t) {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? a && o ? n[r] = (...i) => {
      const d = o(...i);
      return a(...i), d;
    } : a && (n[r] = a) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vo(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ho = [
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
], se = ho.reduce((e, t) => {
  const n = /* @__PURE__ */ dn(`Primitive.${t}`), r = c.forwardRef((a, o) => {
    const { asChild: s, ...i } = a, d = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l(d, { ...i, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function po(e, t) {
  e && pr.flushSync(() => e.dispatchEvent(t));
}
function Fe(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function go(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Fe(e);
  c.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var wo = "DismissableLayer", St = "dismissableLayer.update", yo = "dismissableLayer.pointerDownOutside", bo = "dismissableLayer.focusOutside", zt, fn = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), mn = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: s,
      onDismiss: i,
      ...d
    } = e, u = c.useContext(fn), [f, m] = c.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, b] = c.useState({}), N = we(t, (y) => m(y)), v = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = v.indexOf(g), C = f ? v.indexOf(f) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, w = C >= p, O = Eo((y) => {
      const P = y.target, T = [...u.branches].some((I) => I.contains(P));
      !w || T || (a == null || a(y), s == null || s(y), y.defaultPrevented || i == null || i());
    }, h), W = So((y) => {
      const P = y.target;
      [...u.branches].some((I) => I.contains(P)) || (o == null || o(y), s == null || s(y), y.defaultPrevented || i == null || i());
    }, h);
    return go((y) => {
      C === u.layers.size - 1 && (r == null || r(y), !y.defaultPrevented && i && (y.preventDefault(), i()));
    }, h), c.useEffect(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (zt = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), qt(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = zt);
        };
    }, [f, h, n, u]), c.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), qt());
    }, [f, u]), c.useEffect(() => {
      const y = () => b({});
      return document.addEventListener(St, y), () => document.removeEventListener(St, y);
    }, []), /* @__PURE__ */ l(
      se.div,
      {
        ...d,
        ref: N,
        style: {
          pointerEvents: E ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: fe(e.onFocusCapture, W.onFocusCapture),
        onBlurCapture: fe(e.onBlurCapture, W.onBlurCapture),
        onPointerDownCapture: fe(
          e.onPointerDownCapture,
          O.onPointerDownCapture
        )
      }
    );
  }
);
mn.displayName = wo;
var _o = "DismissableLayerBranch", Co = c.forwardRef((e, t) => {
  const n = c.useContext(fn), r = c.useRef(null), a = we(t, r);
  return c.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ l(se.div, { ...e, ref: a });
});
Co.displayName = _o;
function Eo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Fe(e), r = c.useRef(!1), a = c.useRef(() => {
  });
  return c.useEffect(() => {
    const o = (i) => {
      if (i.target && !r.current) {
        let d = function() {
          vn(
            yo,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = d, t.addEventListener("click", a.current, { once: !0 })) : d();
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
function So(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Fe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const a = (o) => {
      o.target && !r.current && vn(bo, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function qt() {
  const e = new CustomEvent(St);
  document.dispatchEvent(e);
}
function vn(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? po(a, o) : a.dispatchEvent(o);
}
var dt = "focusScope.autoFocusOnMount", ft = "focusScope.autoFocusOnUnmount", Yt = { bubbles: !1, cancelable: !0 }, No = "FocusScope", hn = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...s
  } = e, [i, d] = c.useState(null), u = Fe(a), f = Fe(o), m = c.useRef(null), h = we(t, (v) => d(v)), b = c.useRef({
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
      let v = function(E) {
        if (b.paused || !i) return;
        const w = E.target;
        i.contains(w) ? m.current = w : de(m.current, { select: !0 });
      }, g = function(E) {
        if (b.paused || !i) return;
        const w = E.relatedTarget;
        w !== null && (i.contains(w) || de(m.current, { select: !0 }));
      }, p = function(E) {
        if (document.activeElement === document.body)
          for (const O of E)
            O.removedNodes.length > 0 && de(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const C = new MutationObserver(p);
      return i && C.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), C.disconnect();
      };
    }
  }, [r, i, b.paused]), c.useEffect(() => {
    if (i) {
      Xt.add(b);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const p = new CustomEvent(dt, Yt);
        i.addEventListener(dt, u), i.dispatchEvent(p), p.defaultPrevented || (Ro(Oo(pn(i)), { select: !0 }), document.activeElement === v && de(i));
      }
      return () => {
        i.removeEventListener(dt, u), setTimeout(() => {
          const p = new CustomEvent(ft, Yt);
          i.addEventListener(ft, f), i.dispatchEvent(p), p.defaultPrevented || de(v ?? document.body, { select: !0 }), i.removeEventListener(ft, f), Xt.remove(b);
        }, 0);
      };
    }
  }, [i, u, f, b]);
  const N = c.useCallback(
    (v) => {
      if (!n && !r || b.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
      if (g && p) {
        const C = v.currentTarget, [E, w] = xo(C);
        E && w ? !v.shiftKey && p === w ? (v.preventDefault(), n && de(E, { select: !0 })) : v.shiftKey && p === E && (v.preventDefault(), n && de(w, { select: !0 })) : p === C && v.preventDefault();
      }
    },
    [n, r, b.paused]
  );
  return /* @__PURE__ */ l(se.div, { tabIndex: -1, ...s, ref: h, onKeyDown: N });
});
hn.displayName = No;
function Ro(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (de(r, { select: t }), document.activeElement !== n) return;
}
function xo(e) {
  const t = pn(e), n = Gt(t, e), r = Gt(t.reverse(), e);
  return [n, r];
}
function pn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Gt(e, t) {
  for (const n of e)
    if (!Do(n, { upTo: t })) return n;
}
function Do(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function To(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function de(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && To(e) && t && e.select();
  }
}
var Xt = Po();
function Po() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Kt(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Kt(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Kt(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Oo(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ao = "Portal", gn = c.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [a, o] = c.useState(!1);
  Be(() => o(!0), []);
  const s = n || a && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? gr.createPortal(/* @__PURE__ */ l(se.div, { ...r, ref: t }), s) : null;
});
gn.displayName = Ao;
function ko(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var nt = (e) => {
  const { present: t, children: n } = e, r = Mo(t), a = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), o = we(r.ref, Lo(a));
  return typeof n == "function" || r.isPresent ? c.cloneElement(a, { ref: o }) : null;
};
nt.displayName = "Presence";
function Mo(e) {
  const [t, n] = c.useState(), r = c.useRef(null), a = c.useRef(e), o = c.useRef("none"), s = e ? "mounted" : "unmounted", [i, d] = ko(s, {
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
    const u = ze(r.current);
    o.current = i === "mounted" ? u : "none";
  }, [i]), Be(() => {
    const u = r.current, f = a.current;
    if (f !== e) {
      const h = o.current, b = ze(u);
      e ? d("MOUNT") : b === "none" || (u == null ? void 0 : u.display) === "none" ? d("UNMOUNT") : d(f && h !== b ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, d]), Be(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, m = (b) => {
        const v = ze(r.current).includes(CSS.escape(b.animationName));
        if (b.target === t && v && (d("ANIMATION_END"), !a.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, h = (b) => {
        b.target === t && (o.current = ze(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: c.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function ze(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Lo(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var mt = 0;
function Io() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Zt()), document.body.insertAdjacentElement("beforeend", e[1] ?? Zt()), mt++, () => {
      mt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), mt--;
    };
  }, []);
}
function Zt() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ae = function() {
  return ae = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, ae.apply(this, arguments);
};
function wn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function $o(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Je = "right-scroll-bar-position", et = "width-before-scroll-bar", Bo = "with-scroll-bars-hidden", Fo = "--removed-body-scroll-bar-size";
function vt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function jo(e, t) {
  var n = $e(function() {
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
var Wo = typeof window < "u" ? c.useLayoutEffect : c.useEffect, Qt = /* @__PURE__ */ new WeakMap();
function Uo(e, t) {
  var n = jo(null, function(r) {
    return e.forEach(function(a) {
      return vt(a, r);
    });
  });
  return Wo(function() {
    var r = Qt.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), s = n.current;
      a.forEach(function(i) {
        o.has(i) || vt(i, null);
      }), o.forEach(function(i) {
        a.has(i) || vt(i, s);
      });
    }
    Qt.set(n, e);
  }, [e]), n;
}
function Ho(e) {
  return e;
}
function Vo(e, t) {
  t === void 0 && (t = Ho);
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
      var d = function() {
        var f = s;
        s = [], f.forEach(o);
      }, u = function() {
        return Promise.resolve().then(d);
      };
      u(), n = {
        push: function(f) {
          s.push(f), u();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return a;
}
function zo(e) {
  e === void 0 && (e = {});
  var t = Vo(null);
  return t.options = ae({ async: !0, ssr: !1 }, e), t;
}
var yn = function(e) {
  var t = e.sideCar, n = wn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, ae({}, n));
};
yn.isSideCarExport = !0;
function qo(e, t) {
  return e.useMedium(t), yn;
}
var bn = zo(), ht = function() {
}, rt = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: ht,
    onWheelCapture: ht,
    onTouchMoveCapture: ht
  }), a = r[0], o = r[1], s = e.forwardProps, i = e.children, d = e.className, u = e.removeScrollBar, f = e.enabled, m = e.shards, h = e.sideCar, b = e.noRelative, N = e.noIsolation, v = e.inert, g = e.allowPinchZoom, p = e.as, C = p === void 0 ? "div" : p, E = e.gapMode, w = wn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), O = h, W = Uo([n, t]), y = ae(ae({}, w), a);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(O, { sideCar: bn, removeScrollBar: u, shards: m, noRelative: b, noIsolation: N, inert: v, setCallbacks: o, allowPinchZoom: !!g, lockRef: n, gapMode: E }),
    s ? c.cloneElement(c.Children.only(i), ae(ae({}, y), { ref: W })) : c.createElement(C, ae({}, y, { className: d, ref: W }), i)
  );
});
rt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
rt.classNames = {
  fullWidth: et,
  zeroRight: Je
};
var Yo = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Go() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Yo();
  return t && e.setAttribute("nonce", t), e;
}
function Xo(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ko(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Zo = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Go()) && (Xo(t, n), Ko(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Qo = function() {
  var e = Zo();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, _n = function() {
  var e = Qo(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, Jo = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, pt = function(e) {
  return parseInt(e || "", 10) || 0;
}, ei = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [pt(n), pt(r), pt(a)];
}, ti = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Jo;
  var t = ei(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ni = _n(), Re = "data-scroll-locked", ri = function(e, t, n, r) {
  var a = e.left, o = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Bo, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Re, `] {
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
  
  .`).concat(Je, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(et, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Je, " .").concat(Je, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(et, " .").concat(et, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Re, `] {
    `).concat(Fo, ": ").concat(i, `px;
  }
`);
}, Jt = function() {
  var e = parseInt(document.body.getAttribute(Re) || "0", 10);
  return isFinite(e) ? e : 0;
}, ai = function() {
  c.useEffect(function() {
    return document.body.setAttribute(Re, (Jt() + 1).toString()), function() {
      var e = Jt() - 1;
      e <= 0 ? document.body.removeAttribute(Re) : document.body.setAttribute(Re, e.toString());
    };
  }, []);
}, oi = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  ai();
  var o = c.useMemo(function() {
    return ti(a);
  }, [a]);
  return c.createElement(ni, { styles: ri(o, !t, a, n ? "" : "!important") });
}, Nt = !1;
if (typeof window < "u")
  try {
    var qe = Object.defineProperty({}, "passive", {
      get: function() {
        return Nt = !0, !0;
      }
    });
    window.addEventListener("test", qe, qe), window.removeEventListener("test", qe, qe);
  } catch {
    Nt = !1;
  }
var Ce = Nt ? { passive: !1 } : !1, ii = function(e) {
  return e.tagName === "TEXTAREA";
}, Cn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ii(e) && n[t] === "visible")
  );
}, si = function(e) {
  return Cn(e, "overflowY");
}, li = function(e) {
  return Cn(e, "overflowX");
}, en = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = En(e, r);
    if (a) {
      var o = Sn(e, r), s = o[1], i = o[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, ci = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ui = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, En = function(e, t) {
  return e === "v" ? si(t) : li(t);
}, Sn = function(e, t) {
  return e === "v" ? ci(t) : ui(t);
}, di = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, fi = function(e, t, n, r, a) {
  var o = di(e, window.getComputedStyle(t).direction), s = o * r, i = n.target, d = t.contains(i), u = !1, f = s > 0, m = 0, h = 0;
  do {
    if (!i)
      break;
    var b = Sn(e, i), N = b[0], v = b[1], g = b[2], p = v - g - o * N;
    (N || p) && En(e, i) && (m += p, h += N);
    var C = i.parentNode;
    i = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !d && i !== document.body || // self content
    d && (t.contains(i) || t === i)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(h) < 1) && (u = !0), u;
}, Ye = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, tn = function(e) {
  return [e.deltaX, e.deltaY];
}, nn = function(e) {
  return e && "current" in e ? e.current : e;
}, mi = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, vi = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, hi = 0, Ee = [];
function pi(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), a = c.useState(hi++)[0], o = c.useState(_n)[0], s = c.useRef(e);
  c.useEffect(function() {
    s.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var v = $o([e.lockRef.current], (e.shards || []).map(nn), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = c.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var p = Ye(v), C = n.current, E = "deltaX" in v ? v.deltaX : C[0] - p[0], w = "deltaY" in v ? v.deltaY : C[1] - p[1], O, W = v.target, y = Math.abs(E) > Math.abs(w) ? "h" : "v";
    if ("touches" in v && y === "h" && W.type === "range")
      return !1;
    var P = window.getSelection(), T = P && P.anchorNode, I = T ? T === W || T.contains(W) : !1;
    if (I)
      return !1;
    var $ = en(y, W);
    if (!$)
      return !0;
    if ($ ? O = y : (O = y === "v" ? "h" : "v", $ = en(y, W)), !$)
      return !1;
    if (!r.current && "changedTouches" in v && (E || w) && (r.current = O), !O)
      return !0;
    var q = r.current || O;
    return fi(q, g, v, q === "h" ? E : w);
  }, []), d = c.useCallback(function(v) {
    var g = v;
    if (!(!Ee.length || Ee[Ee.length - 1] !== o)) {
      var p = "deltaY" in g ? tn(g) : Ye(g), C = t.current.filter(function(O) {
        return O.name === g.type && (O.target === g.target || g.target === O.shadowParent) && mi(O.delta, p);
      })[0];
      if (C && C.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!C) {
        var E = (s.current.shards || []).map(nn).filter(Boolean).filter(function(O) {
          return O.contains(g.target);
        }), w = E.length > 0 ? i(g, E[0]) : !s.current.noIsolation;
        w && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, g, p, C) {
    var E = { name: v, delta: g, target: p, should: C, shadowParent: gi(p) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== E;
      });
    }, 1);
  }, []), f = c.useCallback(function(v) {
    n.current = Ye(v), r.current = void 0;
  }, []), m = c.useCallback(function(v) {
    u(v.type, tn(v), v.target, i(v, e.lockRef.current));
  }, []), h = c.useCallback(function(v) {
    u(v.type, Ye(v), v.target, i(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return Ee.push(o), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", d, Ce), document.addEventListener("touchmove", d, Ce), document.addEventListener("touchstart", f, Ce), function() {
      Ee = Ee.filter(function(v) {
        return v !== o;
      }), document.removeEventListener("wheel", d, Ce), document.removeEventListener("touchmove", d, Ce), document.removeEventListener("touchstart", f, Ce);
    };
  }, []);
  var b = e.removeScrollBar, N = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    N ? c.createElement(o, { styles: vi(a) }) : null,
    b ? c.createElement(oi, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function gi(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const wi = qo(bn, pi);
var Nn = c.forwardRef(function(e, t) {
  return c.createElement(rt, ae({}, e, { ref: t, sideCar: wi }));
});
Nn.classNames = rt.classNames;
var yi = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Se = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), Xe = {}, gt = 0, Rn = function(e) {
  return e && (e.host || Rn(e.parentNode));
}, bi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Rn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, _i = function(e, t, n, r) {
  var a = bi(t, Array.isArray(e) ? e : [e]);
  Xe[n] || (Xe[n] = /* @__PURE__ */ new WeakMap());
  var o = Xe[n], s = [], i = /* @__PURE__ */ new Set(), d = new Set(a), u = function(m) {
    !m || i.has(m) || (i.add(m), u(m.parentNode));
  };
  a.forEach(u);
  var f = function(m) {
    !m || d.has(m) || Array.prototype.forEach.call(m.children, function(h) {
      if (i.has(h))
        f(h);
      else
        try {
          var b = h.getAttribute(r), N = b !== null && b !== "false", v = (Se.get(h) || 0) + 1, g = (o.get(h) || 0) + 1;
          Se.set(h, v), o.set(h, g), s.push(h), v === 1 && N && Ge.set(h, !0), g === 1 && h.setAttribute(n, "true"), N || h.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", h, p);
        }
    });
  };
  return f(t), i.clear(), gt++, function() {
    s.forEach(function(m) {
      var h = Se.get(m) - 1, b = o.get(m) - 1;
      Se.set(m, h), o.set(m, b), h || (Ge.has(m) || m.removeAttribute(r), Ge.delete(m)), b || m.removeAttribute(n);
    }), gt--, gt || (Se = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), Xe = {});
  };
}, Ci = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = yi(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), _i(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, at = "Dialog", [xn] = to(at), [Ei, te] = xn(at), Dn = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: s = !0
  } = e, i = c.useRef(null), d = c.useRef(null), [u, f] = io({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: at
  });
  return /* @__PURE__ */ l(
    Ei,
    {
      scope: t,
      triggerRef: i,
      contentRef: d,
      contentId: ut(),
      titleId: ut(),
      descriptionId: ut(),
      open: u,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: n
    }
  );
};
Dn.displayName = at;
var Tn = "DialogTrigger", Pn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = te(Tn, n), o = we(t, a.triggerRef);
    return /* @__PURE__ */ l(
      se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": Pt(a.open),
        ...r,
        ref: o,
        onClick: fe(e.onClick, a.onOpenToggle)
      }
    );
  }
);
Pn.displayName = Tn;
var Dt = "DialogPortal", [Si, On] = xn(Dt, {
  forceMount: void 0
}), An = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: a } = e, o = te(Dt, t);
  return /* @__PURE__ */ l(Si, { scope: t, forceMount: n, children: c.Children.map(r, (s) => /* @__PURE__ */ l(nt, { present: n || o.open, children: /* @__PURE__ */ l(gn, { asChild: !0, container: a, children: s }) })) });
};
An.displayName = Dt;
var tt = "DialogOverlay", kn = c.forwardRef(
  (e, t) => {
    const n = On(tt, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = te(tt, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ l(nt, { present: r || o.open, children: /* @__PURE__ */ l(Ri, { ...a, ref: t }) }) : null;
  }
);
kn.displayName = tt;
var Ni = /* @__PURE__ */ dn("DialogOverlay.RemoveScroll"), Ri = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = te(tt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l(Nn, { as: Ni, allowPinchZoom: !0, shards: [a.contentRef], children: /* @__PURE__ */ l(
        se.div,
        {
          "data-state": Pt(a.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), ge = "DialogContent", Mn = c.forwardRef(
  (e, t) => {
    const n = On(ge, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = te(ge, e.__scopeDialog);
    return /* @__PURE__ */ l(nt, { present: r || o.open, children: o.modal ? /* @__PURE__ */ l(xi, { ...a, ref: t }) : /* @__PURE__ */ l(Di, { ...a, ref: t }) });
  }
);
Mn.displayName = ge;
var xi = c.forwardRef(
  (e, t) => {
    const n = te(ge, e.__scopeDialog), r = c.useRef(null), a = we(t, n.contentRef, r);
    return c.useEffect(() => {
      const o = r.current;
      if (o) return Ci(o);
    }, []), /* @__PURE__ */ l(
      Ln,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: fe(e.onCloseAutoFocus, (o) => {
          var s;
          o.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: fe(e.onPointerDownOutside, (o) => {
          const s = o.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && o.preventDefault();
        }),
        onFocusOutside: fe(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), Di = c.forwardRef(
  (e, t) => {
    const n = te(ge, e.__scopeDialog), r = c.useRef(!1), a = c.useRef(!1);
    return /* @__PURE__ */ l(
      Ln,
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
          var d, u;
          (d = e.onInteractOutside) == null || d.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const s = o.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault();
        }
      }
    );
  }
), Ln = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: o, ...s } = e, i = te(ge, n), d = c.useRef(null), u = we(t, d);
    return Io(), /* @__PURE__ */ x(Ct, { children: [
      /* @__PURE__ */ l(
        hn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: a,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ l(
            mn,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Pt(i.open),
              ...s,
              ref: u,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ x(Ct, { children: [
        /* @__PURE__ */ l(Ti, { titleId: i.titleId }),
        /* @__PURE__ */ l(Oi, { contentRef: d, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Tt = "DialogTitle", In = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = te(Tt, n);
    return /* @__PURE__ */ l(se.h2, { id: a.titleId, ...r, ref: t });
  }
);
In.displayName = Tt;
var $n = "DialogDescription", Bn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = te($n, n);
    return /* @__PURE__ */ l(se.p, { id: a.descriptionId, ...r, ref: t });
  }
);
Bn.displayName = $n;
var Fn = "DialogClose", jn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = te(Fn, n);
    return /* @__PURE__ */ l(
      se.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: fe(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
jn.displayName = Fn;
function Pt(e) {
  return e ? "open" : "closed";
}
var Wn = "DialogTitleWarning", [nl, Un] = eo(Wn, {
  contentName: ge,
  titleName: Tt,
  docsSlug: "dialog"
}), Ti = ({ titleId: e }) => {
  const t = Un(Wn), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Pi = "DialogDescriptionWarning", Oi = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Un(Pi).contentName}}.`;
  return c.useEffect(() => {
    var o;
    const a = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && a && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Ai = Dn, ki = Pn, Mi = An, Li = kn, Ii = Mn, $i = In, Bi = Bn, Fi = jn;
function ji(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Hn = _.createContext({
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
}), je = () => {
  const e = _.useContext(Hn);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
ji(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function Wi() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function Ui() {
  return Ot(/^Mac/);
}
function Hi() {
  return Ot(/^iPhone/);
}
function rn() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Vi() {
  return Ot(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Ui() && navigator.maxTouchPoints > 1;
}
function Vn() {
  return Hi() || Vi();
}
function Ot(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const zi = 24, qi = typeof window < "u" ? ln : Ne;
function an(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const wt = typeof document < "u" && window.visualViewport;
function on(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function zn(e) {
  for (on(e) && (e = e.parentElement); e && !on(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const Yi = /* @__PURE__ */ new Set([
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
let Ke = 0, yt;
function Gi(e = {}) {
  let { isDisabled: t } = e;
  qi(() => {
    if (!t)
      return Ke++, Ke === 1 && Vn() && (yt = Xi()), () => {
        Ke--, Ke === 0 && (yt == null || yt());
      };
  }, [
    t
  ]);
}
function Xi() {
  let e, t = 0, n = (m) => {
    e = zn(m.target), !(e === document.documentElement && e === document.body) && (t = m.changedTouches[0].pageY);
  }, r = (m) => {
    if (!e || e === document.documentElement || e === document.body) {
      m.preventDefault();
      return;
    }
    let h = m.changedTouches[0].pageY, b = e.scrollTop, N = e.scrollHeight - e.clientHeight;
    N !== 0 && ((b <= 0 && h > t || b >= N && h < t) && m.preventDefault(), t = h);
  }, a = (m) => {
    let h = m.target;
    Rt(h) && h !== document.activeElement && (m.preventDefault(), h.style.transform = "translateY(-2000px)", h.focus(), requestAnimationFrame(() => {
      h.style.transform = "";
    }));
  }, o = (m) => {
    let h = m.target;
    Rt(h) && (h.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      h.style.transform = "", wt && (wt.height < window.innerHeight ? requestAnimationFrame(() => {
        sn(h);
      }) : wt.addEventListener("resize", () => sn(h), {
        once: !0
      }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, d = window.pageYOffset, u = an(Ki(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let f = an(Le(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Le(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Le(document, "touchend", a, {
    passive: !1,
    capture: !0
  }), Le(document, "focus", o, !0), Le(window, "scroll", s));
  return () => {
    u(), f(), window.scrollTo(i, d);
  };
}
function Ki(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Le(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function sn(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = zn(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = e.getBoundingClientRect().bottom;
      const s = n.getBoundingClientRect().bottom + zi;
      o > s && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function Rt(e) {
  return e instanceof HTMLInputElement && !Yi.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Zi(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Qi(...e) {
  return (t) => e.forEach((n) => Zi(n, t));
}
function qn(...e) {
  return c.useCallback(Qi(...e), e);
}
const Yn = /* @__PURE__ */ new WeakMap();
function H(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([a, o]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, o);
      return;
    }
    r[a] = e.style[a], e.style[a] = o;
  }), !n && Yn.set(e, r);
}
function Ji(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Yn.get(e);
  n && (e.style[t] = n[t]);
}
const F = (e) => {
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
function Ze(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let a = r.match(/^matrix3d\((.+)\)$/);
  return a ? parseFloat(a[1].split(", ")[F(t) ? 13 : 12]) : (a = r.match(/^matrix\((.+)\)$/), a ? parseFloat(a[1].split(", ")[F(t) ? 5 : 4]) : null);
}
function es(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function bt(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function ts(...e) {
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
}, Gn = 0.4, ns = 0.25, rs = 100, Xn = 8, he = 16, xt = 26, _t = "vaul-dragging";
function Kn(e) {
  const t = _.useRef(e);
  return _.useEffect(() => {
    t.current = e;
  }), _.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function as({ defaultProp: e, onChange: t }) {
  const n = _.useState(e), [r] = n, a = _.useRef(r), o = Kn(t);
  return _.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [
    r,
    a,
    o
  ]), n;
}
function Zn({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = as({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, s = o ? e : r, i = Kn(n), d = _.useCallback((u) => {
    if (o) {
      const m = typeof u == "function" ? u(e) : u;
      m !== e && i(m);
    } else
      a(u);
  }, [
    o,
    e,
    a,
    i
  ]);
  return [
    s,
    d
  ];
}
function os({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: a, fadeFromIndex: o, onSnapPointChange: s, direction: i = "bottom", container: d, snapToSequentialPoint: u }) {
  const [f, m] = Zn({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [h, b] = _.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  _.useEffect(() => {
    function y() {
      b({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []);
  const N = _.useMemo(() => f === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    f
  ]), v = _.useMemo(() => {
    var y;
    return (y = n == null ? void 0 : n.findIndex((P) => P === f)) != null ? y : null;
  }, [
    n,
    f
  ]), g = n && n.length > 0 && (o || o === 0) && !Number.isNaN(o) && n[o] === f || !n, p = _.useMemo(() => {
    const y = d ? {
      width: d.getBoundingClientRect().width,
      height: d.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var P;
    return (P = n == null ? void 0 : n.map((T) => {
      const I = typeof T == "string";
      let $ = 0;
      if (I && ($ = parseInt(T, 10)), F(i)) {
        const R = I ? $ : h ? T * y.height : 0;
        return h ? i === "bottom" ? y.height - R : -y.height + R : R;
      }
      const q = I ? $ : h ? T * y.width : 0;
      return h ? i === "right" ? y.width - q : -y.width + q : q;
    })) != null ? P : [];
  }, [
    n,
    h,
    d
  ]), C = _.useMemo(() => v !== null ? p == null ? void 0 : p[v] : null, [
    p,
    v
  ]), E = _.useCallback((y) => {
    var P;
    const T = (P = p == null ? void 0 : p.findIndex((I) => I === y)) != null ? P : null;
    s(T), H(r.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: F(i) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)`
    }), p && T !== p.length - 1 && o !== void 0 && T !== o && T < o ? H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "0"
    }) : H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), m(n == null ? void 0 : n[Math.max(T, 0)]);
  }, [
    r.current,
    n,
    p,
    o,
    a,
    m
  ]);
  _.useEffect(() => {
    if (f || e) {
      var y;
      const P = (y = n == null ? void 0 : n.findIndex((T) => T === e || T === f)) != null ? y : -1;
      p && P !== -1 && typeof p[P] == "number" && E(p[P]);
    }
  }, [
    f,
    e,
    n,
    p,
    E
  ]);
  function w({ draggedDistance: y, closeDrawer: P, velocity: T, dismissible: I }) {
    if (o === void 0) return;
    const $ = i === "bottom" || i === "right" ? (C ?? 0) - y : (C ?? 0) + y, q = v === o - 1, R = v === 0, K = y > 0;
    if (q && H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), !u && T > 2 && !K) {
      I ? P() : E(p[0]);
      return;
    }
    if (!u && T > 2 && K && p && n) {
      E(p[n.length - 1]);
      return;
    }
    const Y = p == null ? void 0 : p.reduce((z, oe) => typeof z != "number" || typeof oe != "number" ? z : Math.abs(oe - $) < Math.abs(z - $) ? oe : z), Z = F(i) ? window.innerHeight : window.innerWidth;
    if (T > Gn && Math.abs(y) < Z * 0.4) {
      const z = K ? 1 : -1;
      if (z > 0 && N && n) {
        E(p[n.length - 1]);
        return;
      }
      if (R && z < 0 && I && P(), v === null) return;
      E(p[v + z]);
      return;
    }
    E(Y);
  }
  function O({ draggedDistance: y }) {
    if (C === null) return;
    const P = i === "bottom" || i === "right" ? C - y : C + y;
    (i === "bottom" || i === "right") && P < p[p.length - 1] || (i === "top" || i === "left") && P > p[p.length - 1] || H(r.current, {
      transform: F(i) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function W(y, P) {
    if (!n || typeof v != "number" || !p || o === void 0) return null;
    const T = v === o - 1;
    if (v >= o && P)
      return 0;
    if (T && !P) return 1;
    if (!g && !T) return null;
    const $ = T ? v + 1 : v - 1, q = T ? p[$] - p[$ - 1] : p[$ + 1] - p[$], R = y / Math.abs(q);
    return T ? 1 - R : R;
  }
  return {
    isLastSnapPoint: N,
    activeSnapPoint: f,
    shouldFade: g,
    getPercentageDragged: W,
    setActiveSnapPoint: m,
    activeSnapPointIndex: v,
    onRelease: w,
    onDrag: O,
    snapPointsOffset: p
  };
}
const is = () => () => {
};
function ss() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: a } = je(), o = _.useRef(null), s = hr(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - xt) / window.innerWidth;
  }
  _.useEffect(() => {
    if (t && n) {
      o.current && clearTimeout(o.current);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d) return;
      ts(r && !a ? bt(document.body, {
        background: "black"
      }) : is, bt(d, {
        transformOrigin: F(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${L.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
      }));
      const u = bt(d, {
        borderRadius: `${Xn}px`,
        overflow: "hidden",
        ...F(e) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        u(), o.current = window.setTimeout(() => {
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
let Ie = null;
function ls({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: a, noBodyStyles: o }) {
  const [s, i] = _.useState(() => typeof window < "u" ? window.location.href : ""), d = _.useRef(0), u = _.useCallback(() => {
    if (rn() && Ie === null && e && !o) {
      Ie = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: m, innerHeight: h } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-d.current}px`,
        left: `${-m}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const b = h - window.innerHeight;
        b && d.current >= h && (document.body.style.top = `${-(d.current + b)}px`);
      }), 300);
    }
  }, [
    e
  ]), f = _.useCallback(() => {
    if (rn() && Ie !== null && !o) {
      const m = -parseInt(document.body.style.top, 10), h = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Ie), window.requestAnimationFrame(() => {
        if (a && s !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(h, m);
      }), Ie = null;
    }
  }, [
    s
  ]);
  return _.useEffect(() => {
    function m() {
      d.current = window.scrollY;
    }
    return m(), window.addEventListener("scroll", m), () => {
      window.removeEventListener("scroll", m);
    };
  }, []), _.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || f();
      };
  }, [
    t,
    f
  ]), _.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && u(), t || window.setTimeout(() => {
      f();
    }, 500)) : f());
  }, [
    e,
    r,
    s,
    t,
    n,
    u,
    f
  ]), {
    restorePositionSetting: f
  };
}
function cs({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: a, snapPoints: o, shouldScaleBackground: s = !1, setBackgroundColorOnScale: i = !0, closeThreshold: d = ns, scrollLockTimeout: u = rs, dismissible: f = !0, handleOnly: m = !1, fadeFromIndex: h = o && o.length - 1, activeSnapPoint: b, setActiveSnapPoint: N, fixed: v, modal: g = !0, onClose: p, nested: C, noBodyStyles: E = !1, direction: w = "bottom", defaultOpen: O = !1, disablePreventScroll: W = !0, snapToSequentialPoint: y = !1, preventScrollRestoration: P = !1, repositionInputs: T = !0, onAnimationEnd: I, container: $, autoFocus: q = !1 }) {
  var R, K;
  const [Y = !1, Z] = Zn({
    defaultProp: O,
    prop: e,
    onChange: (S) => {
      t == null || t(S), !S && !C && ir(), setTimeout(() => {
        I == null || I(S);
      }, L.DURATION * 1e3), S && !g && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), S || (document.body.style.pointerEvents = "auto");
    }
  }), [z, oe] = _.useState(!1), [le, xe] = _.useState(!1), [er, At] = _.useState(!1), ye = _.useRef(null), We = _.useRef(null), ot = _.useRef(null), it = _.useRef(null), De = _.useRef(null), Te = _.useRef(!1), st = _.useRef(null), lt = _.useRef(0), be = _.useRef(!1), kt = _.useRef(!O), Mt = _.useRef(0), D = _.useRef(null), Lt = _.useRef(((R = D.current) == null ? void 0 : R.getBoundingClientRect().height) || 0), It = _.useRef(((K = D.current) == null ? void 0 : K.getBoundingClientRect().width) || 0), ct = _.useRef(0), tr = _.useCallback((S) => {
    o && S === Pe.length - 1 && (We.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: nr, activeSnapPointIndex: _e, setActiveSnapPoint: $t, onRelease: rr, snapPointsOffset: Pe, onDrag: ar, shouldFade: Bt, getPercentageDragged: or } = os({
    snapPoints: o,
    activeSnapPointProp: b,
    setActiveSnapPointProp: N,
    drawerRef: D,
    fadeFromIndex: h,
    overlayRef: ye,
    onSnapPointChange: tr,
    direction: w,
    container: $,
    snapToSequentialPoint: y
  });
  Gi({
    isDisabled: !Y || le || !g || er || !z || !T || !W
  });
  const { restorePositionSetting: ir } = ls({
    isOpen: Y,
    modal: g,
    nested: C ?? !1,
    hasBeenOpened: z,
    preventScrollRestoration: P,
    noBodyStyles: E
  });
  function Ue() {
    return (window.innerWidth - xt) / window.innerWidth;
  }
  function sr(S) {
    var k, M;
    !f && !o || D.current && !D.current.contains(S.target) || (Lt.current = ((k = D.current) == null ? void 0 : k.getBoundingClientRect().height) || 0, It.current = ((M = D.current) == null ? void 0 : M.getBoundingClientRect().width) || 0, xe(!0), ot.current = /* @__PURE__ */ new Date(), Vn() && window.addEventListener("touchend", () => Te.current = !1, {
      once: !0
    }), S.target.setPointerCapture(S.pointerId), lt.current = F(w) ? S.pageY : S.pageX);
  }
  function Ft(S, k) {
    var M;
    let A = S;
    const B = (M = window.getSelection()) == null ? void 0 : M.toString(), X = D.current ? Ze(D.current, w) : null, G = /* @__PURE__ */ new Date();
    if (A.tagName === "SELECT" || A.hasAttribute("data-vaul-no-drag") || A.closest("[data-vaul-no-drag]"))
      return !1;
    if (w === "right" || w === "left")
      return !0;
    if (We.current && G.getTime() - We.current.getTime() < 500)
      return !1;
    if (X !== null && (w === "bottom" ? X > 0 : X < 0))
      return !0;
    if (B && B.length > 0)
      return !1;
    if (De.current && G.getTime() - De.current.getTime() < u && X === 0 || k)
      return De.current = G, !1;
    for (; A; ) {
      if (A.scrollHeight > A.clientHeight) {
        if (A.scrollTop !== 0)
          return De.current = /* @__PURE__ */ new Date(), !1;
        if (A.getAttribute("role") === "dialog")
          return !0;
      }
      A = A.parentNode;
    }
    return !0;
  }
  function lr(S) {
    if (D.current && le) {
      const k = w === "bottom" || w === "right" ? 1 : -1, M = (lt.current - (F(w) ? S.pageY : S.pageX)) * k, A = M > 0, B = o && !f && !A;
      if (B && _e === 0) return;
      const X = Math.abs(M), G = document.querySelector("[data-vaul-drawer-wrapper]"), ce = w === "bottom" || w === "top" ? Lt.current : It.current;
      let Q = X / ce;
      const me = or(X, A);
      if (me !== null && (Q = me), B && Q >= 1 || !Te.current && !Ft(S.target, A)) return;
      if (D.current.classList.add(_t), Te.current = !0, H(D.current, {
        transition: "none"
      }), H(ye.current, {
        transition: "none"
      }), o && ar({
        draggedDistance: M
      }), A && !o) {
        const ne = es(M), He = Math.min(ne * -1, 0) * k;
        H(D.current, {
          transform: F(w) ? `translate3d(0, ${He}px, 0)` : `translate3d(${He}px, 0, 0)`
        });
        return;
      }
      const ue = 1 - Q;
      if ((Bt || h && _e === h - 1) && (r == null || r(S, Q), H(ye.current, {
        opacity: `${ue}`,
        transition: "none"
      }, !0)), G && ye.current && s) {
        const ne = Math.min(Ue() + Q * (1 - Ue()), 1), He = 8 - Q * 8, Wt = Math.max(0, 14 - Q * 14);
        H(G, {
          borderRadius: `${He}px`,
          transform: F(w) ? `scale(${ne}) translate3d(0, ${Wt}px, 0)` : `scale(${ne}) translate3d(${Wt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!o) {
        const ne = X * k;
        H(D.current, {
          transform: F(w) ? `translate3d(0, ${ne}px, 0)` : `translate3d(${ne}px, 0, 0)`
        });
      }
    }
  }
  _.useEffect(() => {
    window.requestAnimationFrame(() => {
      kt.current = !0;
    });
  }, []), _.useEffect(() => {
    var S;
    function k() {
      if (!D.current || !T) return;
      const M = document.activeElement;
      if (Rt(M) || be.current) {
        var A;
        const B = ((A = window.visualViewport) == null ? void 0 : A.height) || 0, X = window.innerHeight;
        let G = X - B;
        const ce = D.current.getBoundingClientRect().height || 0, Q = ce > X * 0.8;
        ct.current || (ct.current = ce);
        const me = D.current.getBoundingClientRect().top;
        if (Math.abs(Mt.current - G) > 60 && (be.current = !be.current), o && o.length > 0 && Pe && _e) {
          const ue = Pe[_e] || 0;
          G += ue;
        }
        if (Mt.current = G, ce > B || be.current) {
          const ue = D.current.getBoundingClientRect().height;
          let ne = ue;
          ue > B && (ne = B - (Q ? me : xt)), v ? D.current.style.height = `${ue - Math.max(G, 0)}px` : D.current.style.height = `${Math.max(ne, B - me)}px`;
        } else Wi() || (D.current.style.height = `${ct.current}px`);
        o && o.length > 0 && !be.current ? D.current.style.bottom = "0px" : D.current.style.bottom = `${Math.max(G, 0)}px`;
      }
    }
    return (S = window.visualViewport) == null || S.addEventListener("resize", k), () => {
      var M;
      return (M = window.visualViewport) == null ? void 0 : M.removeEventListener("resize", k);
    };
  }, [
    _e,
    o,
    Pe
  ]);
  function Oe(S) {
    cr(), p == null || p(), S || Z(!1), setTimeout(() => {
      o && $t(o[0]);
    }, L.DURATION * 1e3);
  }
  function jt() {
    if (!D.current) return;
    const S = document.querySelector("[data-vaul-drawer-wrapper]"), k = Ze(D.current, w);
    H(D.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), H(ye.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), s && k && k > 0 && Y && H(S, {
      borderRadius: `${Xn}px`,
      overflow: "hidden",
      ...F(w) ? {
        transform: `scale(${Ue()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Ue()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${L.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
    }, !0);
  }
  function cr() {
    !le || !D.current || (D.current.classList.remove(_t), Te.current = !1, xe(!1), it.current = /* @__PURE__ */ new Date());
  }
  function ur(S) {
    if (!le || !D.current) return;
    D.current.classList.remove(_t), Te.current = !1, xe(!1), it.current = /* @__PURE__ */ new Date();
    const k = Ze(D.current, w);
    if (!S || !Ft(S.target, !1) || !k || Number.isNaN(k) || ot.current === null) return;
    const M = it.current.getTime() - ot.current.getTime(), A = lt.current - (F(w) ? S.pageY : S.pageX), B = Math.abs(A) / M;
    if (B > 0.05 && (At(!0), setTimeout(() => {
      At(!1);
    }, 200)), o) {
      rr({
        draggedDistance: A * (w === "bottom" || w === "right" ? 1 : -1),
        closeDrawer: Oe,
        velocity: B,
        dismissible: f
      }), a == null || a(S, !0);
      return;
    }
    if (w === "bottom" || w === "right" ? A > 0 : A < 0) {
      jt(), a == null || a(S, !0);
      return;
    }
    if (B > Gn) {
      Oe(), a == null || a(S, !1);
      return;
    }
    var X;
    const G = Math.min((X = D.current.getBoundingClientRect().height) != null ? X : 0, window.innerHeight);
    var ce;
    const Q = Math.min((ce = D.current.getBoundingClientRect().width) != null ? ce : 0, window.innerWidth), me = w === "left" || w === "right";
    if (Math.abs(k) >= (me ? Q : G) * d) {
      Oe(), a == null || a(S, !1);
      return;
    }
    a == null || a(S, !0), jt();
  }
  _.useEffect(() => (Y && (H(document.documentElement, {
    scrollBehavior: "auto"
  }), We.current = /* @__PURE__ */ new Date()), () => {
    Ji(document.documentElement, "scrollBehavior");
  }), [
    Y
  ]);
  function dr(S) {
    const k = S ? (window.innerWidth - he) / window.innerWidth : 1, M = S ? -he : 0;
    st.current && window.clearTimeout(st.current), H(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: F(w) ? `scale(${k}) translate3d(0, ${M}px, 0)` : `scale(${k}) translate3d(${M}px, 0, 0)`
    }), !S && D.current && (st.current = setTimeout(() => {
      const A = Ze(D.current, w);
      H(D.current, {
        transition: "none",
        transform: F(w) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
      });
    }, 500));
  }
  function fr(S, k) {
    if (k < 0) return;
    const M = (window.innerWidth - he) / window.innerWidth, A = M + k * (1 - M), B = -he + k * he;
    H(D.current, {
      transform: F(w) ? `scale(${A}) translate3d(0, ${B}px, 0)` : `scale(${A}) translate3d(${B}px, 0, 0)`,
      transition: "none"
    });
  }
  function mr(S, k) {
    const M = F(w) ? window.innerHeight : window.innerWidth, A = k ? (M - he) / M : 1, B = k ? -he : 0;
    k && H(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: F(w) ? `scale(${A}) translate3d(0, ${B}px, 0)` : `scale(${A}) translate3d(${B}px, 0, 0)`
    });
  }
  return _.useEffect(() => {
    g || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    g
  ]), /* @__PURE__ */ _.createElement(Ai, {
    defaultOpen: O,
    onOpenChange: (S) => {
      !f && !S || (S ? oe(!0) : Oe(!0), Z(S));
    },
    open: Y
  }, /* @__PURE__ */ _.createElement(Hn.Provider, {
    value: {
      activeSnapPoint: nr,
      snapPoints: o,
      setActiveSnapPoint: $t,
      drawerRef: D,
      overlayRef: ye,
      onOpenChange: t,
      onPress: sr,
      onRelease: ur,
      onDrag: lr,
      dismissible: f,
      shouldAnimate: kt,
      handleOnly: m,
      isOpen: Y,
      isDragging: le,
      shouldFade: Bt,
      closeDrawer: Oe,
      onNestedDrag: fr,
      onNestedOpenChange: dr,
      onNestedRelease: mr,
      keyboardIsOpen: be,
      modal: g,
      snapPointsOffset: Pe,
      activeSnapPointIndex: _e,
      direction: w,
      shouldScaleBackground: s,
      setBackgroundColorOnScale: i,
      noBodyStyles: E,
      container: $,
      autoFocus: q
    }
  }, n));
}
const Qn = /* @__PURE__ */ _.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: a, shouldFade: o, isOpen: s, modal: i, shouldAnimate: d } = je(), u = qn(t, n), f = r && r.length > 0;
  if (!i)
    return null;
  const m = _.useCallback((h) => a(h), [
    a
  ]);
  return /* @__PURE__ */ _.createElement(Li, {
    onMouseUp: m,
    ref: u,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": s && f ? "true" : "false",
    "data-vaul-snap-points-overlay": s && o ? "true" : "false",
    "data-vaul-animate": d != null && d.current ? "true" : "false",
    ...e
  });
});
Qn.displayName = "Drawer.Overlay";
const Jn = /* @__PURE__ */ _.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, a) {
  const { drawerRef: o, onPress: s, onRelease: i, onDrag: d, keyboardIsOpen: u, snapPointsOffset: f, activeSnapPointIndex: m, modal: h, isOpen: b, direction: N, snapPoints: v, container: g, handleOnly: p, shouldAnimate: C, autoFocus: E } = je(), [w, O] = _.useState(!1), W = qn(a, o), y = _.useRef(null), P = _.useRef(null), T = _.useRef(!1), I = v && v.length > 0;
  ss();
  const $ = (R, K, Y = 0) => {
    if (T.current) return !0;
    const Z = Math.abs(R.y), z = Math.abs(R.x), oe = z > Z, le = [
      "bottom",
      "right"
    ].includes(K) ? 1 : -1;
    if (K === "left" || K === "right") {
      if (!(R.x * le < 0) && z >= 0 && z <= Y)
        return oe;
    } else if (!(R.y * le < 0) && Z >= 0 && Z <= Y)
      return !oe;
    return T.current = !0, !0;
  };
  _.useEffect(() => {
    I && window.requestAnimationFrame(() => {
      O(!0);
    });
  }, []);
  function q(R) {
    y.current = null, T.current = !1, i(R);
  }
  return /* @__PURE__ */ _.createElement(Ii, {
    "data-vaul-drawer-direction": N,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": w ? "true" : "false",
    "data-vaul-snap-points": b && I ? "true" : "false",
    "data-vaul-custom-container": g ? "true" : "false",
    "data-vaul-animate": C != null && C.current ? "true" : "false",
    ...r,
    ref: W,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[m ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (R) => {
      p || (r.onPointerDown == null || r.onPointerDown.call(r, R), y.current = {
        x: R.pageX,
        y: R.pageY
      }, s(R));
    },
    onOpenAutoFocus: (R) => {
      n == null || n(R), E || R.preventDefault();
    },
    onPointerDownOutside: (R) => {
      if (e == null || e(R), !h || R.defaultPrevented) {
        R.preventDefault();
        return;
      }
      u.current && (u.current = !1);
    },
    onFocusOutside: (R) => {
      if (!h) {
        R.preventDefault();
        return;
      }
    },
    onPointerMove: (R) => {
      if (P.current = R, p || (r.onPointerMove == null || r.onPointerMove.call(r, R), !y.current)) return;
      const K = R.pageY - y.current.y, Y = R.pageX - y.current.x, Z = R.pointerType === "touch" ? 10 : 2;
      $({
        x: Y,
        y: K
      }, N, Z) ? d(R) : (Math.abs(Y) > Z || Math.abs(K) > Z) && (y.current = null);
    },
    onPointerUp: (R) => {
      r.onPointerUp == null || r.onPointerUp.call(r, R), y.current = null, T.current = !1, i(R);
    },
    onPointerOut: (R) => {
      r.onPointerOut == null || r.onPointerOut.call(r, R), q(P.current);
    },
    onContextMenu: (R) => {
      r.onContextMenu == null || r.onContextMenu.call(r, R), P.current && q(P.current);
    }
  });
});
Jn.displayName = "Drawer.Content";
const us = 250, ds = 120, fs = /* @__PURE__ */ _.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: a, isDragging: o, snapPoints: s, activeSnapPoint: i, setActiveSnapPoint: d, dismissible: u, handleOnly: f, isOpen: m, onPress: h, onDrag: b } = je(), N = _.useRef(null), v = _.useRef(!1);
  function g() {
    if (v.current) {
      E();
      return;
    }
    window.setTimeout(() => {
      p();
    }, ds);
  }
  function p() {
    if (o || e || v.current) {
      E();
      return;
    }
    if (E(), !s || s.length === 0) {
      u || a();
      return;
    }
    if (i === s[s.length - 1] && u) {
      a();
      return;
    }
    const O = s.findIndex((y) => y === i);
    if (O === -1) return;
    const W = s[O + 1];
    d(W);
  }
  function C() {
    N.current = window.setTimeout(() => {
      v.current = !0;
    }, us);
  }
  function E() {
    N.current && window.clearTimeout(N.current), v.current = !1;
  }
  return /* @__PURE__ */ _.createElement("div", {
    onClick: g,
    onPointerCancel: E,
    onPointerDown: (w) => {
      f && h(w), C();
    },
    onPointerMove: (w) => {
      f && b(w);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": m ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ _.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
fs.displayName = "Drawer.Handle";
function ms(e) {
  const t = je(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ _.createElement(Mi, {
    container: n,
    ...r
  });
}
const j = {
  Root: cs,
  Content: Jn,
  Overlay: Qn,
  Trigger: ki,
  Portal: ms,
  Close: Fi,
  Title: $i,
  Description: Bi
}, vs = "_overlay_1xtyj_3", hs = "_content_1xtyj_10", ps = "_grabber_1xtyj_34", gs = "_headline_1xtyj_45", ws = "_subhead_1xtyj_57", ys = "_callout_1xtyj_69", bs = "_calloutLabel_1xtyj_79", _s = "_calloutRow_1xtyj_88", Cs = "_calloutGross_1xtyj_94", Es = "_calloutArrow_1xtyj_102", Ss = "_calloutNet_1xtyj_106", Ns = "_features_1xtyj_116", Rs = "_divider_1xtyj_125", xs = "_priceRow_1xtyj_133", Ds = "_price_1xtyj_133", Ts = "_priceNote_1xtyj_148", Ps = "_restore_1xtyj_158", V = {
  overlay: vs,
  content: hs,
  grabber: ps,
  headline: gs,
  subhead: ws,
  callout: ys,
  calloutLabel: bs,
  calloutRow: _s,
  calloutGross: Cs,
  calloutArrow: Es,
  calloutNet: Ss,
  features: Ns,
  divider: Rs,
  priceRow: xs,
  price: Ds,
  priceNote: Ts,
  restore: Ps
}, Os = [
  { title: "Bonus & overtime modelling", description: "Model any additional income", state: "active" },
  { title: "Marginal tax insight", description: "See what your next £1 is worth", state: "active" },
  { title: "Salary comparison", description: "Coming soon", state: "inactive" }
];
function rl({
  open: e,
  onOpenChange: t,
  trigger: n,
  priceFormatted: r,
  priceNote: a = "one-off · no subscription",
  features: o = Os,
  onPurchase: s,
  onRestore: i,
  isPurchasing: d = !1
}) {
  return /* @__PURE__ */ x(j.Root, { open: e, onOpenChange: t, children: [
    n && /* @__PURE__ */ l(j.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ x(j.Portal, { children: [
      /* @__PURE__ */ l(j.Overlay, { className: V.overlay }),
      /* @__PURE__ */ x(j.Content, { className: V.content, "aria-label": "Unlock Netti Pro", children: [
        /* @__PURE__ */ l("div", { className: V.grabber, "aria-hidden": "true" }),
        /* @__PURE__ */ l(j.Title, { className: V.headline, children: "Unlock Netti Pro" }),
        /* @__PURE__ */ l(j.Description, { className: V.subhead, children: "See what you actually keep from your bonus, overtime, and every extra £1 you earn." }),
        /* @__PURE__ */ x("div", { className: V.callout, "aria-label": "Example: £5,000 bonus", children: [
          /* @__PURE__ */ l("span", { className: V.calloutLabel, children: "EXAMPLE  ·  £5,000 BONUS" }),
          /* @__PURE__ */ x("div", { className: V.calloutRow, children: [
            /* @__PURE__ */ l("span", { className: V.calloutGross, children: "£5,000 gross" }),
            /* @__PURE__ */ l("span", { className: V.calloutArrow, "aria-hidden": "true", children: "→" }),
            /* @__PURE__ */ l("span", { className: V.calloutNet, children: "£3,400 take-home" })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: V.features, role: "list", "aria-label": "Included features", children: o.map((u, f) => /* @__PURE__ */ l("div", { role: "listitem", children: /* @__PURE__ */ l(jr, { title: u.title, description: u.description, state: u.state }) }, f)) }),
        /* @__PURE__ */ l("div", { className: V.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ x("div", { className: V.priceRow, children: [
          /* @__PURE__ */ l("span", { className: V.price, children: r }),
          a && /* @__PURE__ */ l("span", { className: V.priceNote, children: a })
        ] }),
        /* @__PURE__ */ l(
          Et,
          {
            variant: "pro",
            size: "lg",
            fullWidth: !0,
            onClick: s,
            disabled: d,
            "aria-label": "Unlock Netti Pro",
            children: d ? "Unlocking…" : "Unlock Netti Pro"
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            className: V.restore,
            onClick: i,
            children: "Restore purchases"
          }
        )
      ] })
    ] })
  ] });
}
const As = "_card_sdoab_5", ks = "_header_sdoab_13", Ms = "_title_sdoab_17", Ls = "_subtitle_sdoab_27", Qe = {
  card: As,
  header: ks,
  title: Ms,
  subtitle: Ls
};
function al({ children: e, title: t, subtitle: n, className: r }) {
  return /* @__PURE__ */ x("div", { className: [Qe.card, r ?? ""].filter(Boolean).join(" "), children: [
    (t || n) && /* @__PURE__ */ x("div", { className: Qe.header, children: [
      t && /* @__PURE__ */ l("h2", { className: Qe.title, children: t }),
      n && /* @__PURE__ */ l("p", { className: Qe.subtitle, children: n })
    ] }),
    e
  ] });
}
const Is = "_overlay_q8ram_6", $s = "_content_q8ram_13", Bs = "_handle_q8ram_32", Fs = "_titleBar_q8ram_42", js = "_title_q8ram_42", Ws = "_titleSpacer_q8ram_58", Us = "_back_q8ram_63", Hs = "_body_q8ram_89", Vs = "_footer_q8ram_97", zs = "_description_q8ram_101", J = {
  overlay: Is,
  content: $s,
  handle: Bs,
  titleBar: Fs,
  title: js,
  titleSpacer: Ws,
  back: Us,
  body: Hs,
  footer: Vs,
  description: zs
};
function ol({
  title: e,
  description: t,
  trigger: n,
  children: r,
  footer: a,
  open: o,
  onOpenChange: s,
  onBack: i,
  onOpen: d,
  onClose: u
}) {
  const [f, m] = $e(!1), h = o !== void 0, b = h ? o : f, N = (v) => {
    h ? s == null || s(v) : m(v);
  };
  return Ne(() => {
    b ? d == null || d() : u == null || u();
  }, [b]), /* @__PURE__ */ x(j.Root, { open: b, onOpenChange: N, children: [
    n && /* @__PURE__ */ l(j.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ x(j.Portal, { children: [
      /* @__PURE__ */ l(j.Overlay, { className: J.overlay }),
      /* @__PURE__ */ x(j.Content, { className: J.content, "aria-label": e, children: [
        /* @__PURE__ */ l("div", { className: J.handle, "aria-hidden": "true" }),
        e && /* @__PURE__ */ x("div", { className: J.titleBar, children: [
          i ? /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              className: J.back,
              onClick: i,
              "aria-label": "Back",
              children: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ l("path", { d: "M15 18l-6-6 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            }
          ) : /* @__PURE__ */ l("div", { className: J.titleSpacer }),
          /* @__PURE__ */ l(j.Title, { className: J.title, children: e }),
          /* @__PURE__ */ l("div", { className: J.titleSpacer })
        ] }),
        /* @__PURE__ */ x("div", { className: J.body, children: [
          t && /* @__PURE__ */ l(j.Description, { className: J.description, children: t }),
          r
        ] }),
        a && /* @__PURE__ */ l("div", { className: J.footer, children: a })
      ] })
    ] })
  ] });
}
function il({
  title: e,
  open: t,
  onOpenChange: n,
  onBack: r,
  children: a,
  footer: o,
  hideClose: s,
  onOpen: i,
  onClose: d
}) {
  return Ne(() => {
    t ? i == null || i() : d == null || d();
  }, [t]), t ? cn(
    /* @__PURE__ */ x("div", { className: "fss-root", children: [
      /* @__PURE__ */ x("div", { className: "fss-title-bar", children: [
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
function sl({ title: e, description: t, children: n }) {
  return /* @__PURE__ */ x(j.Root, { children: [
    /* @__PURE__ */ l(j.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ x(j.Portal, { children: [
      /* @__PURE__ */ l(j.Overlay, { className: "drawer-overlay" }),
      /* @__PURE__ */ x(j.Content, { className: "info-sheet__content", children: [
        /* @__PURE__ */ x("div", { className: "info-sheet__header", children: [
          /* @__PURE__ */ l(j.Close, { className: "info-sheet__close", "aria-label": "Close", children: "×" }),
          /* @__PURE__ */ l("div", { className: "info-sheet__title", children: e }),
          /* @__PURE__ */ l("div", { className: "info-sheet__spacer" })
        ] }),
        /* @__PURE__ */ l("p", { className: "info-sheet__description", children: t })
      ] })
    ] })
  ] });
}
function ll({ width: e = 72, height: t = 24, className: n }) {
  return /* @__PURE__ */ x(
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
function cl({ className: e = "" }) {
  return /* @__PURE__ */ x("div", { className: `ds-ad-slot ${e}`, "data-testid": "ad-slot", children: [
    /* @__PURE__ */ x("svg", { className: "ds-ad-slot-icon", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ l("rect", { x: "1", y: "1", width: "14", height: "14", rx: "2", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ l("line", { x1: "1", y1: "5", x2: "15", y2: "5", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ l("line", { x1: "5", y1: "5", x2: "5", y2: "15", stroke: "currentColor", strokeWidth: "1.2" })
    ] }),
    /* @__PURE__ */ l("span", { className: "ds-ad-slot-text", children: "Ad Slot Placeholder" })
  ] });
}
function ul({ children: e, className: t = "", ...n }) {
  return /* @__PURE__ */ l("button", { type: "button", className: `ds-primary-btn ${t}`, ...n, children: e });
}
export {
  cl as AdSlot,
  tl as AdditionalIncomeCard,
  Js as BottomNav,
  ol as BottomSheet,
  Et as Button,
  al as Card,
  Zs as Divider,
  jr as FeatureRow,
  il as FullScreenSheet,
  sl as InfoSheet,
  Xs as InputField,
  Kr as ListRow,
  Ks as MoneyRow,
  ll as NettiLogo,
  rl as PaywallSheet,
  ul as PrimaryButton,
  el as SalaryCard,
  na as SegmentedControl,
  Qs as Select,
  Mr as Tick
};
