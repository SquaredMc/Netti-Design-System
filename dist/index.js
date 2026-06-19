import { jsxs as C, jsx as l, Fragment as at } from "react/jsx-runtime";
import * as c from "react";
import _, { useState as We, useId as gr, useRef as qt, useLayoutEffect as dn, useEffect as De, useMemo as wr } from "react";
import * as yr from "react-dom";
import br, { createPortal as fn } from "react-dom";
const _r = "_button_qjyoi_7", Cr = "_sizeLg_qjyoi_32", Er = "_sizeMd_qjyoi_41", Sr = "_variantPro_qjyoi_53", Nr = "_variantPrimary_qjyoi_63", Rr = "_variantSecondary_qjyoi_74", Tr = "_variantGhost_qjyoi_85", Dr = "_variantText_qjyoi_97", xr = "_fullWidth_qjyoi_114", Pr = "_icon_qjyoi_123", Or = "_label_qjyoi_132", te = {
  button: _r,
  sizeLg: Cr,
  sizeMd: Er,
  variantPro: Sr,
  variantPrimary: Nr,
  variantSecondary: Rr,
  variantGhost: Tr,
  variantText: Dr,
  fullWidth: xr,
  icon: Pr,
  label: Or
}, Ar = {
  pro: te.variantPro,
  primary: te.variantPrimary,
  secondary: te.variantSecondary,
  ghost: te.variantGhost,
  text: te.variantText
}, kr = {
  lg: te.sizeLg,
  md: te.sizeMd
};
function Rt({
  variant: e = "primary",
  size: t = "lg",
  icon: n,
  fullWidth: r = !1,
  children: a,
  className: o,
  disabled: s,
  ...i
}) {
  return /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      disabled: s,
      className: [
        te.button,
        Ar[e],
        kr[t],
        r ? te.fullWidth : "",
        o ?? ""
      ].filter(Boolean).join(" "),
      ...i,
      children: [
        n && /* @__PURE__ */ l("span", { className: te.icon, "aria-hidden": "true", children: n }),
        /* @__PURE__ */ l("span", { className: te.label, children: a })
      ]
    }
  );
}
const Mr = "_tick_ax8ei_3", $r = "_active_ax8ei_18", Lr = "_inactive_ax8ei_23", zt = {
  tick: Mr,
  active: $r,
  inactive: Lr
};
function Ir({
  state: e = "active",
  className: t,
  "aria-label": n
}) {
  const r = n ?? (e === "active" ? "Included" : "Coming soon");
  return /* @__PURE__ */ l(
    "span",
    {
      className: [zt.tick, zt[e], t ?? ""].filter(Boolean).join(" "),
      "aria-label": r,
      role: "img",
      children: "✓"
    }
  );
}
const Br = "_row_1fxt2_3", Fr = "_text_1fxt2_10", Wr = "_title_1fxt2_18", jr = "_muted_1fxt2_26", Ur = "_description_1fxt2_30", $e = {
  row: Br,
  text: Fr,
  title: Wr,
  muted: jr,
  description: Ur
};
function Hr({
  title: e,
  description: t,
  state: n = "active",
  className: r
}) {
  const a = n === "inactive";
  return /* @__PURE__ */ C("div", { className: [$e.row, r ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ l(Ir, { state: n }),
    /* @__PURE__ */ C("div", { className: $e.text, children: [
      /* @__PURE__ */ l(
        "span",
        {
          className: [$e.title, a ? $e.muted : ""].filter(Boolean).join(" "),
          children: e
        }
      ),
      t && /* @__PURE__ */ l("span", { className: $e.description, children: t })
    ] })
  ] });
}
const Vr = "_outer_1auh8_7", qr = "_row_1auh8_14", zr = "_interactive_1auh8_25", Yr = "_labels_1auh8_49", Gr = "_label_1auh8_49", Xr = "_subLabel_1auh8_69", Kr = "_right_1auh8_79", Zr = "_amount_1auh8_86", Qr = "_remove_1auh8_97", Jr = "_divider_1auh8_128", J = {
  outer: Vr,
  row: qr,
  interactive: zr,
  labels: Yr,
  label: Gr,
  subLabel: Xr,
  right: Kr,
  amount: Zr,
  remove: Qr,
  divider: Jr
};
function ea({
  label: e,
  subLabel: t,
  amountFormatted: n,
  onClick: r,
  rowLabel: a,
  hasRemove: o = !1,
  onRemove: s,
  removeLabel: i = `Remove ${e}`,
  hasDivider: d = !0,
  badge: u,
  className: f
}) {
  const m = !!r && !o, h = /* @__PURE__ */ C(at, { children: [
    /* @__PURE__ */ C("div", { className: J.labels, children: [
      /* @__PURE__ */ l("span", { className: J.label, children: e }),
      t && /* @__PURE__ */ l("span", { className: J.subLabel, children: t })
    ] }),
    /* @__PURE__ */ C("div", { className: J.right, children: [
      u,
      n && /* @__PURE__ */ l("span", { className: J.amount, children: n }),
      o && s && /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          className: J.remove,
          onClick: s,
          "aria-label": i,
          children: /* @__PURE__ */ l("span", { "aria-hidden": "true", children: "−" })
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ C("div", { className: [J.outer, f ?? ""].filter(Boolean).join(" "), children: [
    m ? /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: [J.row, J.interactive].join(" "),
        onClick: r,
        "aria-label": a,
        children: h
      }
    ) : /* @__PURE__ */ l("div", { className: J.row, children: h }),
    d && /* @__PURE__ */ l("div", { className: J.divider, "aria-hidden": "true" })
  ] });
}
const ta = "_row_1omvu_6", na = "_labels_1omvu_20", ra = "_title_1omvu_29", aa = "_subtitle_1omvu_37", oa = "_chevron_1omvu_45", Le = {
  row: ta,
  labels: na,
  title: ra,
  subtitle: aa,
  chevron: oa
};
function ia({ title: e, subtitle: t, onClick: n, className: r }) {
  return /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: [Le.row, r ?? ""].filter(Boolean).join(" "),
      onClick: n,
      children: [
        /* @__PURE__ */ C("span", { className: Le.labels, children: [
          /* @__PURE__ */ l("span", { className: Le.title, children: e }),
          t && /* @__PURE__ */ l("span", { className: Le.subtitle, children: t })
        ] }),
        /* @__PURE__ */ l(
          "svg",
          {
            className: Le.chevron,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "aria-hidden": "true",
            children: /* @__PURE__ */ l("path", { d: "M9 6l6 6-6 6", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
          }
        )
      ]
    }
  );
}
const sa = "_track_fjawl_7", la = "_dark_fjawl_3", ca = "_light_fjawl_4", ua = "_segment_fjawl_27", da = "_selected_fjawl_59", Ye = {
  track: sa,
  dark: la,
  light: ca,
  segment: ua,
  selected: da
};
function fa({
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
      className: [Ye.track, Ye[r], a ?? ""].filter(Boolean).join(" "),
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
            className: [Ye.segment, u ? Ye.selected : ""].join(" "),
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
const ma = "_field_13yb0_3", va = "_label_13yb0_16", ha = "_fieldStandard_13yb0_3", pa = "_inputBox_13yb0_38", ga = "_state_focused_13yb0_50", wa = "_state_filled_13yb0_56", ya = "_input_13yb0_38", ba = "_fieldLarge_13yb0_4", _a = "_largeAmountRow_13yb0_91", Ca = "_largePrefix_13yb0_99", Ea = "_largeInput_13yb0_111", Sa = "_state_empty_13yb0_132", Na = "_underline_13yb0_137", Ra = "_underlineFocused_13yb0_145", Ta = "_disabled_13yb0_151", Da = "_error_13yb0_158", U = {
  field: ma,
  label: va,
  fieldStandard: ha,
  inputBox: pa,
  state_focused: ga,
  state_filled: wa,
  input: ya,
  fieldLarge: ba,
  largeAmountRow: _a,
  largePrefix: Ca,
  largeInput: Ea,
  state_empty: Sa,
  underline: Na,
  underlineFocused: Ra,
  disabled: Ta,
  error: Da
};
function El({
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
  const [m, h] = We(!1), b = gr(), R = t !== "" && t !== void 0, v = m ? "focused" : R ? "filled" : "empty";
  return r === "largeAmount" ? /* @__PURE__ */ C(
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
        /* @__PURE__ */ C("div", { className: U.largeAmountRow, children: [
          a && /* @__PURE__ */ l("span", { className: U.largePrefix, "aria-hidden": "true", children: a }),
          /* @__PURE__ */ l(
            "input",
            {
              id: b,
              type: "text",
              inputMode: u ?? "decimal",
              value: t,
              placeholder: R ? void 0 : "0",
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
  ) : /* @__PURE__ */ C(
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
const xa = "_row_f6k5w_3", Pa = "_label_f6k5w_10", Oa = "_amount_f6k5w_17", Aa = "_positive_f6k5w_27", ka = "_negative_f6k5w_30", Ma = "_strong_f6k5w_33", $a = "_divider_f6k5w_49", we = {
  row: xa,
  label: Pa,
  amount: Oa,
  positive: Aa,
  negative: ka,
  strong: Ma,
  divider: $a
};
function Sl({
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
  return /* @__PURE__ */ C(
    "div",
    {
      className: [
        we.row,
        i ? we.positive : "",
        d ? we.negative : "",
        n ? we.strong : "",
        a ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ l("span", { className: we.label, children: e }),
        /* @__PURE__ */ l("span", { className: we.amount, children: f })
      ]
    }
  );
}
function Nl({ className: e }) {
  return /* @__PURE__ */ l("div", { className: [we.divider, e ?? ""].filter(Boolean).join(" ") });
}
const La = "_field_180mg_3", Ia = "_label_180mg_11", Ba = "_trigger_180mg_19", Fa = "_triggerOpen_180mg_42", Wa = "_chevron_180mg_52", ja = "_chevronOpen_180mg_58", Ua = "_dropdown_180mg_64", Ha = "_dropdownUpward_180mg_76", Va = "_option_180mg_80", qa = "_optionSelected_180mg_101", ae = {
  field: La,
  label: Ia,
  trigger: Ba,
  triggerOpen: Fa,
  chevron: Wa,
  chevronOpen: ja,
  dropdown: Ua,
  dropdownUpward: Ha,
  option: Va,
  optionSelected: qa
};
function Rl({ label: e, options: t, value: n, onChange: r, className: a, disabled: o, "data-testid": s }) {
  const [i, d] = We(!1), [u, f] = We(null), m = qt(null), h = qt(null), b = t.find((g) => g.value === n), R = () => {
    if (!m.current) return;
    const g = m.current.getBoundingClientRect(), p = window.innerHeight, E = Math.min(p * 0.6, 320), S = p - g.bottom - 12, w = g.top - 12, O = S < E && w > S;
    f({ top: O ? g.top - 8 : g.bottom + 8, left: g.left, width: g.width, upward: O });
  };
  dn(() => {
    i && R();
  }, [i]), De(() => {
    if (!i) return;
    const g = () => R(), p = () => R();
    return window.addEventListener("scroll", g, !0), window.addEventListener("resize", p), () => {
      window.removeEventListener("scroll", g, !0), window.removeEventListener("resize", p);
    };
  }, [i]), De(() => {
    if (!i) return;
    const g = (p) => {
      var S, w;
      const E = p.target;
      !((S = m.current) != null && S.contains(E)) && !((w = h.current) != null && w.contains(E)) && d(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [i]), De(() => {
    if (!i) return;
    const g = (p) => {
      var E;
      p.key === "Escape" && (d(!1), (E = m.current) == null || E.focus());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [i]);
  const v = i && u && fn(
    /* @__PURE__ */ l(
      "div",
      {
        ref: h,
        className: [ae.dropdown, u.upward ? ae.dropdownUpward : ""].join(" "),
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
            className: [ae.option, n === g.value ? ae.optionSelected : ""].join(" "),
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
  return /* @__PURE__ */ C("div", { className: [ae.field, a ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ l("label", { className: ae.label, children: e }),
    /* @__PURE__ */ C(
      "button",
      {
        ref: m,
        type: "button",
        className: [ae.trigger, i ? ae.triggerOpen : ""].join(" "),
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
              className: [ae.chevron, i ? ae.chevronOpen : ""].join(" "),
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
const za = "_nav_1y8fh_3", Ya = "_item_1y8fh_12", Ga = "_active_1y8fh_33", Xa = "_icon_1y8fh_37", Ka = "_label_1y8fh_46", Ie = {
  nav: za,
  item: Ya,
  active: Ga,
  icon: Xa,
  label: Ka
};
function Tl({ items: e, activeId: t, onChange: n, className: r }) {
  return /* @__PURE__ */ l("nav", { className: [Ie.nav, r ?? ""].filter(Boolean).join(" "), children: e.map((a) => /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: [Ie.item, t === a.id ? Ie.active : ""].filter(Boolean).join(" "),
      onClick: () => n(a.id),
      "aria-current": t === a.id ? "page" : void 0,
      "data-testid": `nav-${a.id}`,
      children: [
        /* @__PURE__ */ l("span", { className: Ie.icon, "aria-hidden": "true", children: a.icon }),
        /* @__PURE__ */ l("span", { className: Ie.label, children: a.label })
      ]
    },
    a.id
  )) });
}
const Za = "_card_1w2rv_11", Qa = "_eyebrow_1w2rv_25", Ja = "_amount_1w2rv_39", eo = "_amountEdit_1w2rv_51", to = "_amountPrefix_1w2rv_58", no = "_amountInput_1w2rv_59", ro = "_badge_1w2rv_82", ao = "_toggle_1w2rv_101", fe = {
  card: Za,
  eyebrow: Qa,
  amount: Ja,
  amountEdit: eo,
  amountPrefix: to,
  amountInput: no,
  badge: ro,
  toggle: ao
}, oo = [
  { value: "yearly", label: "Yearly" },
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" }
];
function Dl({
  salaryFormatted: e,
  period: t,
  onPeriodChange: n,
  additionalIncomeSummary: r,
  className: a,
  editable: o = !1,
  value: s = "",
  onValueChange: i
}) {
  const d = !!r;
  return /* @__PURE__ */ C(
    "article",
    {
      className: [fe.card, a ?? ""].filter(Boolean).join(" "),
      "aria-label": "Your salary",
      children: [
        /* @__PURE__ */ l("span", { className: fe.eyebrow, children: "YOUR SALARY" }),
        o ? /* @__PURE__ */ C("div", { className: fe.amountEdit, children: [
          /* @__PURE__ */ l("span", { className: fe.amountPrefix, "aria-hidden": "true", children: "£" }),
          /* @__PURE__ */ l(
            "input",
            {
              className: fe.amountInput,
              type: "text",
              inputMode: "decimal",
              value: s,
              onChange: (u) => i == null ? void 0 : i(u.target.value),
              "aria-label": "Salary amount in pounds",
              style: { width: `calc(${Math.max(1, s.length)}ch + 2px)` }
            }
          )
        ] }) : /* @__PURE__ */ l("span", { className: fe.amount, "aria-live": "polite", children: e }),
        d && /* @__PURE__ */ l("div", { className: fe.badge, "aria-label": "Additional income", children: r }),
        /* @__PURE__ */ l(
          fa,
          {
            options: oo,
            value: t,
            onChange: (u) => n(u),
            context: "dark",
            "aria-label": "Pay period",
            className: fe.toggle
          }
        )
      ]
    }
  );
}
const io = "_card_ns9j4_7", so = "_empty_ns9j4_18", lo = "_hasItems_ns9j4_26", co = "_header_ns9j4_33", uo = "_eyebrow_ns9j4_42", fo = "_divider_ns9j4_56", mo = "_rows_ns9j4_64", pe = {
  card: io,
  empty: so,
  hasItems: lo,
  header: co,
  eyebrow: uo,
  divider: fo,
  rows: mo
};
function xl({
  items: e,
  onAdd: t,
  onItemClick: n,
  className: r
}) {
  const a = e.length > 0;
  return /* @__PURE__ */ l(
    "div",
    {
      className: [
        pe.card,
        a ? pe.hasItems : pe.empty,
        r ?? ""
      ].filter(Boolean).join(" "),
      children: a ? /* @__PURE__ */ C(at, { children: [
        /* @__PURE__ */ C("div", { className: pe.header, children: [
          /* @__PURE__ */ l("span", { className: pe.eyebrow, children: "ADDITIONAL INCOME" }),
          /* @__PURE__ */ l(
            Rt,
            {
              variant: "ghost",
              size: "md",
              onClick: t,
              "aria-label": "Add another income source",
              children: "+ Add income"
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { className: pe.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ l("div", { className: pe.rows, children: e.map((o, s) => /* @__PURE__ */ l(
          ea,
          {
            label: o.label,
            subLabel: o.subLabel,
            amountFormatted: o.amountFormatted,
            onClick: n ? () => n(o.id) : void 0,
            rowLabel: n ? `Edit ${o.label}` : void 0,
            hasRemove: !1,
            hasDivider: s < e.length - 1
          },
          o.id
        )) })
      ] }) : (
        /* Empty state — Ghost button fills the full card */
        /* @__PURE__ */ l(
          Rt,
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
function ve(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function Yt(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function mn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((a) => {
      const o = Yt(a, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          typeof o == "function" ? o() : Yt(e[a], null);
        }
      };
  };
}
function be(...e) {
  return c.useCallback(mn(...e), e);
}
function vo(e, t) {
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
function ho(e, t = []) {
  let n = [];
  function r(o, s) {
    const i = c.createContext(s), d = n.length;
    n = [...n, s];
    const u = (m) => {
      var p;
      const { scope: h, children: b, ...R } = m, v = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[d]) || i, g = c.useMemo(() => R, Object.values(R));
      return /* @__PURE__ */ l(v.Provider, { value: g, children: b });
    };
    u.displayName = o + "Provider";
    function f(m, h) {
      var v;
      const b = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[d]) || i, R = c.useContext(b);
      if (R) return R;
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
  return a.scopeName = e, [r, po(a, ...t)];
}
function po(...e) {
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
var je = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
}, go = c[" useId ".trim().toString()] || (() => {
}), wo = 0;
function vt(e) {
  const [t, n] = c.useState(go());
  return je(() => {
    n((r) => r ?? String(wo++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var yo = c[" useInsertionEffect ".trim().toString()] || je;
function bo({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [a, o, s] = _o({
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
        const h = Co(f) ? f(e) : f;
        h !== e && ((m = s.current) == null || m.call(s, h));
      } else
        o(f);
    },
    [i, e, o, s]
  );
  return [d, u];
}
function _o({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), a = c.useRef(n), o = c.useRef(t);
  return yo(() => {
    o.current = t;
  }, [t]), c.useEffect(() => {
    var s;
    a.current !== n && ((s = o.current) == null || s.call(o, n), a.current = n);
  }, [n, a]), [n, r, o];
}
function Co(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  const t = /* @__PURE__ */ Eo(e), n = c.forwardRef((r, a) => {
    const { children: o, ...s } = r, i = c.Children.toArray(o), d = i.find(No);
    if (d) {
      const u = d.props.children, f = i.map((m) => m === d ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : m);
      return /* @__PURE__ */ l(t, { ...s, ref: a, children: c.isValidElement(u) ? c.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ l(t, { ...s, ref: a, children: o });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  const t = c.forwardRef((n, r) => {
    const { children: a, ...o } = n;
    if (c.isValidElement(a)) {
      const s = To(a), i = Ro(o, a.props);
      return a.type !== c.Fragment && (i.ref = r ? mn(r, s) : s), c.cloneElement(a, i);
    }
    return c.Children.count(a) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var So = Symbol("radix.slottable");
function No(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === So;
}
function Ro(e, t) {
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
function To(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Do = [
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
], le = Do.reduce((e, t) => {
  const n = /* @__PURE__ */ vn(`Primitive.${t}`), r = c.forwardRef((a, o) => {
    const { asChild: s, ...i } = a, d = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l(d, { ...i, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function xo(e, t) {
  e && yr.flushSync(() => e.dispatchEvent(t));
}
function Ue(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Po(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ue(e);
  c.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Oo = "DismissableLayer", Tt = "dismissableLayer.update", Ao = "dismissableLayer.pointerDownOutside", ko = "dismissableLayer.focusOutside", Gt, hn = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), pn = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: s,
      onDismiss: i,
      ...d
    } = e, u = c.useContext(hn), [f, m] = c.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, b] = c.useState({}), R = be(t, (y) => m(y)), v = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = v.indexOf(g), E = f ? v.indexOf(f) : -1, S = u.layersWithOutsidePointerEventsDisabled.size > 0, w = E >= p, O = Lo((y) => {
      const P = y.target, x = [...u.branches].some((I) => I.contains(P));
      !w || x || (a == null || a(y), s == null || s(y), y.defaultPrevented || i == null || i());
    }, h), j = Io((y) => {
      const P = y.target;
      [...u.branches].some((I) => I.contains(P)) || (o == null || o(y), s == null || s(y), y.defaultPrevented || i == null || i());
    }, h);
    return Po((y) => {
      E === u.layers.size - 1 && (r == null || r(y), !y.defaultPrevented && i && (y.preventDefault(), i()));
    }, h), c.useEffect(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Gt = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Xt(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Gt);
        };
    }, [f, h, n, u]), c.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Xt());
    }, [f, u]), c.useEffect(() => {
      const y = () => b({});
      return document.addEventListener(Tt, y), () => document.removeEventListener(Tt, y);
    }, []), /* @__PURE__ */ l(
      le.div,
      {
        ...d,
        ref: R,
        style: {
          pointerEvents: S ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ve(e.onFocusCapture, j.onFocusCapture),
        onBlurCapture: ve(e.onBlurCapture, j.onBlurCapture),
        onPointerDownCapture: ve(
          e.onPointerDownCapture,
          O.onPointerDownCapture
        )
      }
    );
  }
);
pn.displayName = Oo;
var Mo = "DismissableLayerBranch", $o = c.forwardRef((e, t) => {
  const n = c.useContext(hn), r = c.useRef(null), a = be(t, r);
  return c.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ l(le.div, { ...e, ref: a });
});
$o.displayName = Mo;
function Lo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ue(e), r = c.useRef(!1), a = c.useRef(() => {
  });
  return c.useEffect(() => {
    const o = (i) => {
      if (i.target && !r.current) {
        let d = function() {
          gn(
            Ao,
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
function Io(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ue(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const a = (o) => {
      o.target && !r.current && gn(ko, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Xt() {
  const e = new CustomEvent(Tt);
  document.dispatchEvent(e);
}
function gn(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? xo(a, o) : a.dispatchEvent(o);
}
var ht = "focusScope.autoFocusOnMount", pt = "focusScope.autoFocusOnUnmount", Kt = { bubbles: !1, cancelable: !0 }, Bo = "FocusScope", wn = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...s
  } = e, [i, d] = c.useState(null), u = Ue(a), f = Ue(o), m = c.useRef(null), h = be(t, (v) => d(v)), b = c.useRef({
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
      let v = function(S) {
        if (b.paused || !i) return;
        const w = S.target;
        i.contains(w) ? m.current = w : me(m.current, { select: !0 });
      }, g = function(S) {
        if (b.paused || !i) return;
        const w = S.relatedTarget;
        w !== null && (i.contains(w) || me(m.current, { select: !0 }));
      }, p = function(S) {
        if (document.activeElement === document.body)
          for (const O of S)
            O.removedNodes.length > 0 && me(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const E = new MutationObserver(p);
      return i && E.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), E.disconnect();
      };
    }
  }, [r, i, b.paused]), c.useEffect(() => {
    if (i) {
      Qt.add(b);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const p = new CustomEvent(ht, Kt);
        i.addEventListener(ht, u), i.dispatchEvent(p), p.defaultPrevented || (Fo(Vo(yn(i)), { select: !0 }), document.activeElement === v && me(i));
      }
      return () => {
        i.removeEventListener(ht, u), setTimeout(() => {
          const p = new CustomEvent(pt, Kt);
          i.addEventListener(pt, f), i.dispatchEvent(p), p.defaultPrevented || me(v ?? document.body, { select: !0 }), i.removeEventListener(pt, f), Qt.remove(b);
        }, 0);
      };
    }
  }, [i, u, f, b]);
  const R = c.useCallback(
    (v) => {
      if (!n && !r || b.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
      if (g && p) {
        const E = v.currentTarget, [S, w] = Wo(E);
        S && w ? !v.shiftKey && p === w ? (v.preventDefault(), n && me(S, { select: !0 })) : v.shiftKey && p === S && (v.preventDefault(), n && me(w, { select: !0 })) : p === E && v.preventDefault();
      }
    },
    [n, r, b.paused]
  );
  return /* @__PURE__ */ l(le.div, { tabIndex: -1, ...s, ref: h, onKeyDown: R });
});
wn.displayName = Bo;
function Fo(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (me(r, { select: t }), document.activeElement !== n) return;
}
function Wo(e) {
  const t = yn(e), n = Zt(t, e), r = Zt(t.reverse(), e);
  return [n, r];
}
function yn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Zt(e, t) {
  for (const n of e)
    if (!jo(n, { upTo: t })) return n;
}
function jo(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Uo(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function me(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Uo(e) && t && e.select();
  }
}
var Qt = Ho();
function Ho() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Jt(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Jt(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Jt(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Vo(e) {
  return e.filter((t) => t.tagName !== "A");
}
var qo = "Portal", bn = c.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [a, o] = c.useState(!1);
  je(() => o(!0), []);
  const s = n || a && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? br.createPortal(/* @__PURE__ */ l(le.div, { ...r, ref: t }), s) : null;
});
bn.displayName = qo;
function zo(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var it = (e) => {
  const { present: t, children: n } = e, r = Yo(t), a = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), o = be(r.ref, Go(a));
  return typeof n == "function" || r.isPresent ? c.cloneElement(a, { ref: o }) : null;
};
it.displayName = "Presence";
function Yo(e) {
  const [t, n] = c.useState(), r = c.useRef(null), a = c.useRef(e), o = c.useRef("none"), s = e ? "mounted" : "unmounted", [i, d] = zo(s, {
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
    const u = Ge(r.current);
    o.current = i === "mounted" ? u : "none";
  }, [i]), je(() => {
    const u = r.current, f = a.current;
    if (f !== e) {
      const h = o.current, b = Ge(u);
      e ? d("MOUNT") : b === "none" || (u == null ? void 0 : u.display) === "none" ? d("UNMOUNT") : d(f && h !== b ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, d]), je(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, m = (b) => {
        const v = Ge(r.current).includes(CSS.escape(b.animationName));
        if (b.target === t && v && (d("ANIMATION_END"), !a.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, h = (b) => {
        b.target === t && (o.current = Ge(r.current));
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
function Ge(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Go(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var gt = 0;
function Xo() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? en()), document.body.insertAdjacentElement("beforeend", e[1] ?? en()), gt++, () => {
      gt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), gt--;
    };
  }, []);
}
function en() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var oe = function() {
  return oe = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, oe.apply(this, arguments);
};
function _n(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Ko(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var nt = "right-scroll-bar-position", rt = "width-before-scroll-bar", Zo = "with-scroll-bars-hidden", Qo = "--removed-body-scroll-bar-size";
function wt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Jo(e, t) {
  var n = We(function() {
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
var ei = typeof window < "u" ? c.useLayoutEffect : c.useEffect, tn = /* @__PURE__ */ new WeakMap();
function ti(e, t) {
  var n = Jo(null, function(r) {
    return e.forEach(function(a) {
      return wt(a, r);
    });
  });
  return ei(function() {
    var r = tn.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), s = n.current;
      a.forEach(function(i) {
        o.has(i) || wt(i, null);
      }), o.forEach(function(i) {
        a.has(i) || wt(i, s);
      });
    }
    tn.set(n, e);
  }, [e]), n;
}
function ni(e) {
  return e;
}
function ri(e, t) {
  t === void 0 && (t = ni);
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
function ai(e) {
  e === void 0 && (e = {});
  var t = ri(null);
  return t.options = oe({ async: !0, ssr: !1 }, e), t;
}
var Cn = function(e) {
  var t = e.sideCar, n = _n(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, oe({}, n));
};
Cn.isSideCarExport = !0;
function oi(e, t) {
  return e.useMedium(t), Cn;
}
var En = ai(), yt = function() {
}, st = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: yt,
    onWheelCapture: yt,
    onTouchMoveCapture: yt
  }), a = r[0], o = r[1], s = e.forwardProps, i = e.children, d = e.className, u = e.removeScrollBar, f = e.enabled, m = e.shards, h = e.sideCar, b = e.noRelative, R = e.noIsolation, v = e.inert, g = e.allowPinchZoom, p = e.as, E = p === void 0 ? "div" : p, S = e.gapMode, w = _n(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), O = h, j = ti([n, t]), y = oe(oe({}, w), a);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(O, { sideCar: En, removeScrollBar: u, shards: m, noRelative: b, noIsolation: R, inert: v, setCallbacks: o, allowPinchZoom: !!g, lockRef: n, gapMode: S }),
    s ? c.cloneElement(c.Children.only(i), oe(oe({}, y), { ref: j })) : c.createElement(E, oe({}, y, { className: d, ref: j }), i)
  );
});
st.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
st.classNames = {
  fullWidth: rt,
  zeroRight: nt
};
var ii = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function si() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ii();
  return t && e.setAttribute("nonce", t), e;
}
function li(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ci(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ui = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = si()) && (li(t, n), ci(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, di = function() {
  var e = ui();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Sn = function() {
  var e = di(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, fi = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, bt = function(e) {
  return parseInt(e || "", 10) || 0;
}, mi = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [bt(n), bt(r), bt(a)];
}, vi = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return fi;
  var t = mi(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, hi = Sn(), xe = "data-scroll-locked", pi = function(e, t, n, r) {
  var a = e.left, o = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Zo, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(xe, `] {
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
  
  .`).concat(nt, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(rt, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(nt, " .").concat(nt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(rt, " .").concat(rt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(xe, `] {
    `).concat(Qo, ": ").concat(i, `px;
  }
`);
}, nn = function() {
  var e = parseInt(document.body.getAttribute(xe) || "0", 10);
  return isFinite(e) ? e : 0;
}, gi = function() {
  c.useEffect(function() {
    return document.body.setAttribute(xe, (nn() + 1).toString()), function() {
      var e = nn() - 1;
      e <= 0 ? document.body.removeAttribute(xe) : document.body.setAttribute(xe, e.toString());
    };
  }, []);
}, wi = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  gi();
  var o = c.useMemo(function() {
    return vi(a);
  }, [a]);
  return c.createElement(hi, { styles: pi(o, !t, a, n ? "" : "!important") });
}, Dt = !1;
if (typeof window < "u")
  try {
    var Xe = Object.defineProperty({}, "passive", {
      get: function() {
        return Dt = !0, !0;
      }
    });
    window.addEventListener("test", Xe, Xe), window.removeEventListener("test", Xe, Xe);
  } catch {
    Dt = !1;
  }
var Se = Dt ? { passive: !1 } : !1, yi = function(e) {
  return e.tagName === "TEXTAREA";
}, Nn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !yi(e) && n[t] === "visible")
  );
}, bi = function(e) {
  return Nn(e, "overflowY");
}, _i = function(e) {
  return Nn(e, "overflowX");
}, rn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = Rn(e, r);
    if (a) {
      var o = Tn(e, r), s = o[1], i = o[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Ci = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ei = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Rn = function(e, t) {
  return e === "v" ? bi(t) : _i(t);
}, Tn = function(e, t) {
  return e === "v" ? Ci(t) : Ei(t);
}, Si = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ni = function(e, t, n, r, a) {
  var o = Si(e, window.getComputedStyle(t).direction), s = o * r, i = n.target, d = t.contains(i), u = !1, f = s > 0, m = 0, h = 0;
  do {
    if (!i)
      break;
    var b = Tn(e, i), R = b[0], v = b[1], g = b[2], p = v - g - o * R;
    (R || p) && Rn(e, i) && (m += p, h += R);
    var E = i.parentNode;
    i = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
  } while (
    // portaled content
    !d && i !== document.body || // self content
    d && (t.contains(i) || t === i)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(h) < 1) && (u = !0), u;
}, Ke = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, an = function(e) {
  return [e.deltaX, e.deltaY];
}, on = function(e) {
  return e && "current" in e ? e.current : e;
}, Ri = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Ti = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Di = 0, Ne = [];
function xi(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), a = c.useState(Di++)[0], o = c.useState(Sn)[0], s = c.useRef(e);
  c.useEffect(function() {
    s.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var v = Ko([e.lockRef.current], (e.shards || []).map(on), !0).filter(Boolean);
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
    var p = Ke(v), E = n.current, S = "deltaX" in v ? v.deltaX : E[0] - p[0], w = "deltaY" in v ? v.deltaY : E[1] - p[1], O, j = v.target, y = Math.abs(S) > Math.abs(w) ? "h" : "v";
    if ("touches" in v && y === "h" && j.type === "range")
      return !1;
    var P = window.getSelection(), x = P && P.anchorNode, I = x ? x === j || x.contains(j) : !1;
    if (I)
      return !1;
    var B = rn(y, j);
    if (!B)
      return !0;
    if (B ? O = y : (O = y === "v" ? "h" : "v", B = rn(y, j)), !B)
      return !1;
    if (!r.current && "changedTouches" in v && (S || w) && (r.current = O), !O)
      return !0;
    var z = r.current || O;
    return Ni(z, g, v, z === "h" ? S : w);
  }, []), d = c.useCallback(function(v) {
    var g = v;
    if (!(!Ne.length || Ne[Ne.length - 1] !== o)) {
      var p = "deltaY" in g ? an(g) : Ke(g), E = t.current.filter(function(O) {
        return O.name === g.type && (O.target === g.target || g.target === O.shadowParent) && Ri(O.delta, p);
      })[0];
      if (E && E.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!E) {
        var S = (s.current.shards || []).map(on).filter(Boolean).filter(function(O) {
          return O.contains(g.target);
        }), w = S.length > 0 ? i(g, S[0]) : !s.current.noIsolation;
        w && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, g, p, E) {
    var S = { name: v, delta: g, target: p, should: E, shadowParent: Pi(p) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== S;
      });
    }, 1);
  }, []), f = c.useCallback(function(v) {
    n.current = Ke(v), r.current = void 0;
  }, []), m = c.useCallback(function(v) {
    u(v.type, an(v), v.target, i(v, e.lockRef.current));
  }, []), h = c.useCallback(function(v) {
    u(v.type, Ke(v), v.target, i(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return Ne.push(o), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", d, Se), document.addEventListener("touchmove", d, Se), document.addEventListener("touchstart", f, Se), function() {
      Ne = Ne.filter(function(v) {
        return v !== o;
      }), document.removeEventListener("wheel", d, Se), document.removeEventListener("touchmove", d, Se), document.removeEventListener("touchstart", f, Se);
    };
  }, []);
  var b = e.removeScrollBar, R = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    R ? c.createElement(o, { styles: Ti(a) }) : null,
    b ? c.createElement(wi, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Pi(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Oi = oi(En, xi);
var Dn = c.forwardRef(function(e, t) {
  return c.createElement(st, oe({}, e, { ref: t, sideCar: Oi }));
});
Dn.classNames = st.classNames;
var Ai = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Re = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), Qe = {}, _t = 0, xn = function(e) {
  return e && (e.host || xn(e.parentNode));
}, ki = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = xn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Mi = function(e, t, n, r) {
  var a = ki(t, Array.isArray(e) ? e : [e]);
  Qe[n] || (Qe[n] = /* @__PURE__ */ new WeakMap());
  var o = Qe[n], s = [], i = /* @__PURE__ */ new Set(), d = new Set(a), u = function(m) {
    !m || i.has(m) || (i.add(m), u(m.parentNode));
  };
  a.forEach(u);
  var f = function(m) {
    !m || d.has(m) || Array.prototype.forEach.call(m.children, function(h) {
      if (i.has(h))
        f(h);
      else
        try {
          var b = h.getAttribute(r), R = b !== null && b !== "false", v = (Re.get(h) || 0) + 1, g = (o.get(h) || 0) + 1;
          Re.set(h, v), o.set(h, g), s.push(h), v === 1 && R && Ze.set(h, !0), g === 1 && h.setAttribute(n, "true"), R || h.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", h, p);
        }
    });
  };
  return f(t), i.clear(), _t++, function() {
    s.forEach(function(m) {
      var h = Re.get(m) - 1, b = o.get(m) - 1;
      Re.set(m, h), o.set(m, b), h || (Ze.has(m) || m.removeAttribute(r), Ze.delete(m)), b || m.removeAttribute(n);
    }), _t--, _t || (Re = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), Qe = {});
  };
}, $i = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = Ai(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), Mi(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, lt = "Dialog", [Pn] = ho(lt), [Li, ne] = Pn(lt), On = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: s = !0
  } = e, i = c.useRef(null), d = c.useRef(null), [u, f] = bo({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: lt
  });
  return /* @__PURE__ */ l(
    Li,
    {
      scope: t,
      triggerRef: i,
      contentRef: d,
      contentId: vt(),
      titleId: vt(),
      descriptionId: vt(),
      open: u,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: n
    }
  );
};
On.displayName = lt;
var An = "DialogTrigger", kn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(An, n), o = be(t, a.triggerRef);
    return /* @__PURE__ */ l(
      le.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": kt(a.open),
        ...r,
        ref: o,
        onClick: ve(e.onClick, a.onOpenToggle)
      }
    );
  }
);
kn.displayName = An;
var Ot = "DialogPortal", [Ii, Mn] = Pn(Ot, {
  forceMount: void 0
}), $n = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: a } = e, o = ne(Ot, t);
  return /* @__PURE__ */ l(Ii, { scope: t, forceMount: n, children: c.Children.map(r, (s) => /* @__PURE__ */ l(it, { present: n || o.open, children: /* @__PURE__ */ l(bn, { asChild: !0, container: a, children: s }) })) });
};
$n.displayName = Ot;
var ot = "DialogOverlay", Ln = c.forwardRef(
  (e, t) => {
    const n = Mn(ot, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = ne(ot, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ l(it, { present: r || o.open, children: /* @__PURE__ */ l(Fi, { ...a, ref: t }) }) : null;
  }
);
Ln.displayName = ot;
var Bi = /* @__PURE__ */ vn("DialogOverlay.RemoveScroll"), Fi = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(ot, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l(Dn, { as: Bi, allowPinchZoom: !0, shards: [a.contentRef], children: /* @__PURE__ */ l(
        le.div,
        {
          "data-state": kt(a.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), ye = "DialogContent", In = c.forwardRef(
  (e, t) => {
    const n = Mn(ye, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = ne(ye, e.__scopeDialog);
    return /* @__PURE__ */ l(it, { present: r || o.open, children: o.modal ? /* @__PURE__ */ l(Wi, { ...a, ref: t }) : /* @__PURE__ */ l(ji, { ...a, ref: t }) });
  }
);
In.displayName = ye;
var Wi = c.forwardRef(
  (e, t) => {
    const n = ne(ye, e.__scopeDialog), r = c.useRef(null), a = be(t, n.contentRef, r);
    return c.useEffect(() => {
      const o = r.current;
      if (o) return $i(o);
    }, []), /* @__PURE__ */ l(
      Bn,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ve(e.onCloseAutoFocus, (o) => {
          var s;
          o.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: ve(e.onPointerDownOutside, (o) => {
          const s = o.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && o.preventDefault();
        }),
        onFocusOutside: ve(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), ji = c.forwardRef(
  (e, t) => {
    const n = ne(ye, e.__scopeDialog), r = c.useRef(!1), a = c.useRef(!1);
    return /* @__PURE__ */ l(
      Bn,
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
), Bn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: o, ...s } = e, i = ne(ye, n), d = c.useRef(null), u = be(t, d);
    return Xo(), /* @__PURE__ */ C(at, { children: [
      /* @__PURE__ */ l(
        wn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: a,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ l(
            pn,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": kt(i.open),
              ...s,
              ref: u,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ C(at, { children: [
        /* @__PURE__ */ l(Ui, { titleId: i.titleId }),
        /* @__PURE__ */ l(Vi, { contentRef: d, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), At = "DialogTitle", Fn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(At, n);
    return /* @__PURE__ */ l(le.h2, { id: a.titleId, ...r, ref: t });
  }
);
Fn.displayName = At;
var Wn = "DialogDescription", jn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(Wn, n);
    return /* @__PURE__ */ l(le.p, { id: a.descriptionId, ...r, ref: t });
  }
);
jn.displayName = Wn;
var Un = "DialogClose", Hn = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(Un, n);
    return /* @__PURE__ */ l(
      le.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ve(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
Hn.displayName = Un;
function kt(e) {
  return e ? "open" : "closed";
}
var Vn = "DialogTitleWarning", [Pl, qn] = vo(Vn, {
  contentName: ye,
  titleName: At,
  docsSlug: "dialog"
}), Ui = ({ titleId: e }) => {
  const t = qn(Vn), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Hi = "DialogDescriptionWarning", Vi = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${qn(Hi).contentName}}.`;
  return c.useEffect(() => {
    var o;
    const a = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && a && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, qi = On, zi = kn, Yi = $n, Gi = Ln, Xi = In, Ki = Fn, Zi = jn, Qi = Hn;
function Ji(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const zn = _.createContext({
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
}), He = () => {
  const e = _.useContext(zn);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
Ji(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function es() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function ts() {
  return Mt(/^Mac/);
}
function ns() {
  return Mt(/^iPhone/);
}
function sn() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function rs() {
  return Mt(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  ts() && navigator.maxTouchPoints > 1;
}
function Yn() {
  return ns() || rs();
}
function Mt(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const as = 24, os = typeof window < "u" ? dn : De;
function ln(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const Ct = typeof document < "u" && window.visualViewport;
function cn(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Gn(e) {
  for (cn(e) && (e = e.parentElement); e && !cn(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const is = /* @__PURE__ */ new Set([
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
let Je = 0, Et;
function ss(e = {}) {
  let { isDisabled: t } = e;
  os(() => {
    if (!t)
      return Je++, Je === 1 && Yn() && (Et = ls()), () => {
        Je--, Je === 0 && (Et == null || Et());
      };
  }, [
    t
  ]);
}
function ls() {
  let e, t = 0, n = (m) => {
    e = Gn(m.target), !(e === document.documentElement && e === document.body) && (t = m.changedTouches[0].pageY);
  }, r = (m) => {
    if (!e || e === document.documentElement || e === document.body) {
      m.preventDefault();
      return;
    }
    let h = m.changedTouches[0].pageY, b = e.scrollTop, R = e.scrollHeight - e.clientHeight;
    R !== 0 && ((b <= 0 && h > t || b >= R && h < t) && m.preventDefault(), t = h);
  }, a = (m) => {
    let h = m.target;
    xt(h) && h !== document.activeElement && (m.preventDefault(), h.style.transform = "translateY(-2000px)", h.focus(), requestAnimationFrame(() => {
      h.style.transform = "";
    }));
  }, o = (m) => {
    let h = m.target;
    xt(h) && (h.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      h.style.transform = "", Ct && (Ct.height < window.innerHeight ? requestAnimationFrame(() => {
        un(h);
      }) : Ct.addEventListener("resize", () => un(h), {
        once: !0
      }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, d = window.pageYOffset, u = ln(cs(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let f = ln(Be(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Be(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Be(document, "touchend", a, {
    passive: !1,
    capture: !0
  }), Be(document, "focus", o, !0), Be(window, "scroll", s));
  return () => {
    u(), f(), window.scrollTo(i, d);
  };
}
function cs(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Be(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function un(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Gn(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = e.getBoundingClientRect().bottom;
      const s = n.getBoundingClientRect().bottom + as;
      o > s && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function xt(e) {
  return e instanceof HTMLInputElement && !is.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function us(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ds(...e) {
  return (t) => e.forEach((n) => us(n, t));
}
function Xn(...e) {
  return c.useCallback(ds(...e), e);
}
const Kn = /* @__PURE__ */ new WeakMap();
function H(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([a, o]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, o);
      return;
    }
    r[a] = e.style[a], e.style[a] = o;
  }), !n && Kn.set(e, r);
}
function fs(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Kn.get(e);
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
function et(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let a = r.match(/^matrix3d\((.+)\)$/);
  return a ? parseFloat(a[1].split(", ")[W(t) ? 13 : 12]) : (a = r.match(/^matrix\((.+)\)$/), a ? parseFloat(a[1].split(", ")[W(t) ? 5 : 4]) : null);
}
function ms(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function St(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function vs(...e) {
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
}, Zn = 0.4, hs = 0.25, ps = 100, Qn = 8, ge = 16, Pt = 26, Nt = "vaul-dragging";
function Jn(e) {
  const t = _.useRef(e);
  return _.useEffect(() => {
    t.current = e;
  }), _.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function gs({ defaultProp: e, onChange: t }) {
  const n = _.useState(e), [r] = n, a = _.useRef(r), o = Jn(t);
  return _.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [
    r,
    a,
    o
  ]), n;
}
function er({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = gs({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, s = o ? e : r, i = Jn(n), d = _.useCallback((u) => {
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
function ws({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: a, fadeFromIndex: o, onSnapPointChange: s, direction: i = "bottom", container: d, snapToSequentialPoint: u }) {
  const [f, m] = er({
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
  const R = _.useMemo(() => f === (n == null ? void 0 : n[n.length - 1]) || null, [
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
    return (P = n == null ? void 0 : n.map((x) => {
      const I = typeof x == "string";
      let B = 0;
      if (I && (B = parseInt(x, 10)), W(i)) {
        const T = I ? B : h ? x * y.height : 0;
        return h ? i === "bottom" ? y.height - T : -y.height + T : T;
      }
      const z = I ? B : h ? x * y.width : 0;
      return h ? i === "right" ? y.width - z : -y.width + z : z;
    })) != null ? P : [];
  }, [
    n,
    h,
    d
  ]), E = _.useMemo(() => v !== null ? p == null ? void 0 : p[v] : null, [
    p,
    v
  ]), S = _.useCallback((y) => {
    var P;
    const x = (P = p == null ? void 0 : p.findIndex((I) => I === y)) != null ? P : null;
    s(x), H(r.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(i) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)`
    }), p && x !== p.length - 1 && o !== void 0 && x !== o && x < o ? H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "0"
    }) : H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), m(n == null ? void 0 : n[Math.max(x, 0)]);
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
      const P = (y = n == null ? void 0 : n.findIndex((x) => x === e || x === f)) != null ? y : -1;
      p && P !== -1 && typeof p[P] == "number" && S(p[P]);
    }
  }, [
    f,
    e,
    n,
    p,
    S
  ]);
  function w({ draggedDistance: y, closeDrawer: P, velocity: x, dismissible: I }) {
    if (o === void 0) return;
    const B = i === "bottom" || i === "right" ? (E ?? 0) - y : (E ?? 0) + y, z = v === o - 1, T = v === 0, K = y > 0;
    if (z && H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), !u && x > 2 && !K) {
      I ? P() : S(p[0]);
      return;
    }
    if (!u && x > 2 && K && p && n) {
      S(p[n.length - 1]);
      return;
    }
    const Y = p == null ? void 0 : p.reduce((q, ie) => typeof q != "number" || typeof ie != "number" ? q : Math.abs(ie - B) < Math.abs(q - B) ? ie : q), Z = W(i) ? window.innerHeight : window.innerWidth;
    if (x > Zn && Math.abs(y) < Z * 0.4) {
      const q = K ? 1 : -1;
      if (q > 0 && R && n) {
        S(p[n.length - 1]);
        return;
      }
      if (T && q < 0 && I && P(), v === null) return;
      S(p[v + q]);
      return;
    }
    S(Y);
  }
  function O({ draggedDistance: y }) {
    if (E === null) return;
    const P = i === "bottom" || i === "right" ? E - y : E + y;
    (i === "bottom" || i === "right") && P < p[p.length - 1] || (i === "top" || i === "left") && P > p[p.length - 1] || H(r.current, {
      transform: W(i) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function j(y, P) {
    if (!n || typeof v != "number" || !p || o === void 0) return null;
    const x = v === o - 1;
    if (v >= o && P)
      return 0;
    if (x && !P) return 1;
    if (!g && !x) return null;
    const B = x ? v + 1 : v - 1, z = x ? p[B] - p[B - 1] : p[B + 1] - p[B], T = y / Math.abs(z);
    return x ? 1 - T : T;
  }
  return {
    isLastSnapPoint: R,
    activeSnapPoint: f,
    shouldFade: g,
    getPercentageDragged: j,
    setActiveSnapPoint: m,
    activeSnapPointIndex: v,
    onRelease: w,
    onDrag: O,
    snapPointsOffset: p
  };
}
const ys = () => () => {
};
function bs() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: a } = He(), o = _.useRef(null), s = wr(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - Pt) / window.innerWidth;
  }
  _.useEffect(() => {
    if (t && n) {
      o.current && clearTimeout(o.current);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d) return;
      vs(r && !a ? St(document.body, {
        background: "black"
      }) : ys, St(d, {
        transformOrigin: W(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${L.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
      }));
      const u = St(d, {
        borderRadius: `${Qn}px`,
        overflow: "hidden",
        ...W(e) ? {
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
let Fe = null;
function _s({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: a, noBodyStyles: o }) {
  const [s, i] = _.useState(() => typeof window < "u" ? window.location.href : ""), d = _.useRef(0), u = _.useCallback(() => {
    if (sn() && Fe === null && e && !o) {
      Fe = {
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
    if (sn() && Fe !== null && !o) {
      const m = -parseInt(document.body.style.top, 10), h = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Fe), window.requestAnimationFrame(() => {
        if (a && s !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(h, m);
      }), Fe = null;
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
function Cs({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: a, snapPoints: o, shouldScaleBackground: s = !1, setBackgroundColorOnScale: i = !0, closeThreshold: d = hs, scrollLockTimeout: u = ps, dismissible: f = !0, handleOnly: m = !1, fadeFromIndex: h = o && o.length - 1, activeSnapPoint: b, setActiveSnapPoint: R, fixed: v, modal: g = !0, onClose: p, nested: E, noBodyStyles: S = !1, direction: w = "bottom", defaultOpen: O = !1, disablePreventScroll: j = !0, snapToSequentialPoint: y = !1, preventScrollRestoration: P = !1, repositionInputs: x = !0, onAnimationEnd: I, container: B, autoFocus: z = !1 }) {
  var T, K;
  const [Y = !1, Z] = er({
    defaultProp: O,
    prop: e,
    onChange: (N) => {
      t == null || t(N), !N && !E && cr(), setTimeout(() => {
        I == null || I(N);
      }, L.DURATION * 1e3), N && !g && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), N || (document.body.style.pointerEvents = "auto");
    }
  }), [q, ie] = _.useState(!1), [ce, Pe] = _.useState(!1), [rr, $t] = _.useState(!1), _e = _.useRef(null), Ve = _.useRef(null), ct = _.useRef(null), ut = _.useRef(null), Oe = _.useRef(null), Ae = _.useRef(!1), dt = _.useRef(null), ft = _.useRef(0), Ce = _.useRef(!1), Lt = _.useRef(!O), It = _.useRef(0), D = _.useRef(null), Bt = _.useRef(((T = D.current) == null ? void 0 : T.getBoundingClientRect().height) || 0), Ft = _.useRef(((K = D.current) == null ? void 0 : K.getBoundingClientRect().width) || 0), mt = _.useRef(0), ar = _.useCallback((N) => {
    o && N === ke.length - 1 && (Ve.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: or, activeSnapPointIndex: Ee, setActiveSnapPoint: Wt, onRelease: ir, snapPointsOffset: ke, onDrag: sr, shouldFade: jt, getPercentageDragged: lr } = ws({
    snapPoints: o,
    activeSnapPointProp: b,
    setActiveSnapPointProp: R,
    drawerRef: D,
    fadeFromIndex: h,
    overlayRef: _e,
    onSnapPointChange: ar,
    direction: w,
    container: B,
    snapToSequentialPoint: y
  });
  ss({
    isDisabled: !Y || ce || !g || rr || !q || !x || !j
  });
  const { restorePositionSetting: cr } = _s({
    isOpen: Y,
    modal: g,
    nested: E ?? !1,
    hasBeenOpened: q,
    preventScrollRestoration: P,
    noBodyStyles: S
  });
  function qe() {
    return (window.innerWidth - Pt) / window.innerWidth;
  }
  function ur(N) {
    var k, M;
    !f && !o || D.current && !D.current.contains(N.target) || (Bt.current = ((k = D.current) == null ? void 0 : k.getBoundingClientRect().height) || 0, Ft.current = ((M = D.current) == null ? void 0 : M.getBoundingClientRect().width) || 0, Pe(!0), ct.current = /* @__PURE__ */ new Date(), Yn() && window.addEventListener("touchend", () => Ae.current = !1, {
      once: !0
    }), N.target.setPointerCapture(N.pointerId), ft.current = W(w) ? N.pageY : N.pageX);
  }
  function Ut(N, k) {
    var M;
    let A = N;
    const F = (M = window.getSelection()) == null ? void 0 : M.toString(), X = D.current ? et(D.current, w) : null, G = /* @__PURE__ */ new Date();
    if (A.tagName === "SELECT" || A.hasAttribute("data-vaul-no-drag") || A.closest("[data-vaul-no-drag]"))
      return !1;
    if (w === "right" || w === "left")
      return !0;
    if (Ve.current && G.getTime() - Ve.current.getTime() < 500)
      return !1;
    if (X !== null && (w === "bottom" ? X > 0 : X < 0))
      return !0;
    if (F && F.length > 0)
      return !1;
    if (Oe.current && G.getTime() - Oe.current.getTime() < u && X === 0 || k)
      return Oe.current = G, !1;
    for (; A; ) {
      if (A.scrollHeight > A.clientHeight) {
        if (A.scrollTop !== 0)
          return Oe.current = /* @__PURE__ */ new Date(), !1;
        if (A.getAttribute("role") === "dialog")
          return !0;
      }
      A = A.parentNode;
    }
    return !0;
  }
  function dr(N) {
    if (D.current && ce) {
      const k = w === "bottom" || w === "right" ? 1 : -1, M = (ft.current - (W(w) ? N.pageY : N.pageX)) * k, A = M > 0, F = o && !f && !A;
      if (F && Ee === 0) return;
      const X = Math.abs(M), G = document.querySelector("[data-vaul-drawer-wrapper]"), ue = w === "bottom" || w === "top" ? Bt.current : Ft.current;
      let Q = X / ue;
      const he = lr(X, A);
      if (he !== null && (Q = he), F && Q >= 1 || !Ae.current && !Ut(N.target, A)) return;
      if (D.current.classList.add(Nt), Ae.current = !0, H(D.current, {
        transition: "none"
      }), H(_e.current, {
        transition: "none"
      }), o && sr({
        draggedDistance: M
      }), A && !o) {
        const re = ms(M), ze = Math.min(re * -1, 0) * k;
        H(D.current, {
          transform: W(w) ? `translate3d(0, ${ze}px, 0)` : `translate3d(${ze}px, 0, 0)`
        });
        return;
      }
      const de = 1 - Q;
      if ((jt || h && Ee === h - 1) && (r == null || r(N, Q), H(_e.current, {
        opacity: `${de}`,
        transition: "none"
      }, !0)), G && _e.current && s) {
        const re = Math.min(qe() + Q * (1 - qe()), 1), ze = 8 - Q * 8, Vt = Math.max(0, 14 - Q * 14);
        H(G, {
          borderRadius: `${ze}px`,
          transform: W(w) ? `scale(${re}) translate3d(0, ${Vt}px, 0)` : `scale(${re}) translate3d(${Vt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!o) {
        const re = X * k;
        H(D.current, {
          transform: W(w) ? `translate3d(0, ${re}px, 0)` : `translate3d(${re}px, 0, 0)`
        });
      }
    }
  }
  _.useEffect(() => {
    window.requestAnimationFrame(() => {
      Lt.current = !0;
    });
  }, []), _.useEffect(() => {
    var N;
    function k() {
      if (!D.current || !x) return;
      const M = document.activeElement;
      if (xt(M) || Ce.current) {
        var A;
        const F = ((A = window.visualViewport) == null ? void 0 : A.height) || 0, X = window.innerHeight;
        let G = X - F;
        const ue = D.current.getBoundingClientRect().height || 0, Q = ue > X * 0.8;
        mt.current || (mt.current = ue);
        const he = D.current.getBoundingClientRect().top;
        if (Math.abs(It.current - G) > 60 && (Ce.current = !Ce.current), o && o.length > 0 && ke && Ee) {
          const de = ke[Ee] || 0;
          G += de;
        }
        if (It.current = G, ue > F || Ce.current) {
          const de = D.current.getBoundingClientRect().height;
          let re = de;
          de > F && (re = F - (Q ? he : Pt)), v ? D.current.style.height = `${de - Math.max(G, 0)}px` : D.current.style.height = `${Math.max(re, F - he)}px`;
        } else es() || (D.current.style.height = `${mt.current}px`);
        o && o.length > 0 && !Ce.current ? D.current.style.bottom = "0px" : D.current.style.bottom = `${Math.max(G, 0)}px`;
      }
    }
    return (N = window.visualViewport) == null || N.addEventListener("resize", k), () => {
      var M;
      return (M = window.visualViewport) == null ? void 0 : M.removeEventListener("resize", k);
    };
  }, [
    Ee,
    o,
    ke
  ]);
  function Me(N) {
    fr(), p == null || p(), N || Z(!1), setTimeout(() => {
      o && Wt(o[0]);
    }, L.DURATION * 1e3);
  }
  function Ht() {
    if (!D.current) return;
    const N = document.querySelector("[data-vaul-drawer-wrapper]"), k = et(D.current, w);
    H(D.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), H(_e.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), s && k && k > 0 && Y && H(N, {
      borderRadius: `${Qn}px`,
      overflow: "hidden",
      ...W(w) ? {
        transform: `scale(${qe()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${qe()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${L.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
    }, !0);
  }
  function fr() {
    !ce || !D.current || (D.current.classList.remove(Nt), Ae.current = !1, Pe(!1), ut.current = /* @__PURE__ */ new Date());
  }
  function mr(N) {
    if (!ce || !D.current) return;
    D.current.classList.remove(Nt), Ae.current = !1, Pe(!1), ut.current = /* @__PURE__ */ new Date();
    const k = et(D.current, w);
    if (!N || !Ut(N.target, !1) || !k || Number.isNaN(k) || ct.current === null) return;
    const M = ut.current.getTime() - ct.current.getTime(), A = ft.current - (W(w) ? N.pageY : N.pageX), F = Math.abs(A) / M;
    if (F > 0.05 && ($t(!0), setTimeout(() => {
      $t(!1);
    }, 200)), o) {
      ir({
        draggedDistance: A * (w === "bottom" || w === "right" ? 1 : -1),
        closeDrawer: Me,
        velocity: F,
        dismissible: f
      }), a == null || a(N, !0);
      return;
    }
    if (w === "bottom" || w === "right" ? A > 0 : A < 0) {
      Ht(), a == null || a(N, !0);
      return;
    }
    if (F > Zn) {
      Me(), a == null || a(N, !1);
      return;
    }
    var X;
    const G = Math.min((X = D.current.getBoundingClientRect().height) != null ? X : 0, window.innerHeight);
    var ue;
    const Q = Math.min((ue = D.current.getBoundingClientRect().width) != null ? ue : 0, window.innerWidth), he = w === "left" || w === "right";
    if (Math.abs(k) >= (he ? Q : G) * d) {
      Me(), a == null || a(N, !1);
      return;
    }
    a == null || a(N, !0), Ht();
  }
  _.useEffect(() => (Y && (H(document.documentElement, {
    scrollBehavior: "auto"
  }), Ve.current = /* @__PURE__ */ new Date()), () => {
    fs(document.documentElement, "scrollBehavior");
  }), [
    Y
  ]);
  function vr(N) {
    const k = N ? (window.innerWidth - ge) / window.innerWidth : 1, M = N ? -ge : 0;
    dt.current && window.clearTimeout(dt.current), H(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(w) ? `scale(${k}) translate3d(0, ${M}px, 0)` : `scale(${k}) translate3d(${M}px, 0, 0)`
    }), !N && D.current && (dt.current = setTimeout(() => {
      const A = et(D.current, w);
      H(D.current, {
        transition: "none",
        transform: W(w) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
      });
    }, 500));
  }
  function hr(N, k) {
    if (k < 0) return;
    const M = (window.innerWidth - ge) / window.innerWidth, A = M + k * (1 - M), F = -ge + k * ge;
    H(D.current, {
      transform: W(w) ? `scale(${A}) translate3d(0, ${F}px, 0)` : `scale(${A}) translate3d(${F}px, 0, 0)`,
      transition: "none"
    });
  }
  function pr(N, k) {
    const M = W(w) ? window.innerHeight : window.innerWidth, A = k ? (M - ge) / M : 1, F = k ? -ge : 0;
    k && H(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(w) ? `scale(${A}) translate3d(0, ${F}px, 0)` : `scale(${A}) translate3d(${F}px, 0, 0)`
    });
  }
  return _.useEffect(() => {
    g || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    g
  ]), /* @__PURE__ */ _.createElement(qi, {
    defaultOpen: O,
    onOpenChange: (N) => {
      !f && !N || (N ? ie(!0) : Me(!0), Z(N));
    },
    open: Y
  }, /* @__PURE__ */ _.createElement(zn.Provider, {
    value: {
      activeSnapPoint: or,
      snapPoints: o,
      setActiveSnapPoint: Wt,
      drawerRef: D,
      overlayRef: _e,
      onOpenChange: t,
      onPress: ur,
      onRelease: mr,
      onDrag: dr,
      dismissible: f,
      shouldAnimate: Lt,
      handleOnly: m,
      isOpen: Y,
      isDragging: ce,
      shouldFade: jt,
      closeDrawer: Me,
      onNestedDrag: hr,
      onNestedOpenChange: vr,
      onNestedRelease: pr,
      keyboardIsOpen: Ce,
      modal: g,
      snapPointsOffset: ke,
      activeSnapPointIndex: Ee,
      direction: w,
      shouldScaleBackground: s,
      setBackgroundColorOnScale: i,
      noBodyStyles: S,
      container: B,
      autoFocus: z
    }
  }, n));
}
const tr = /* @__PURE__ */ _.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: a, shouldFade: o, isOpen: s, modal: i, shouldAnimate: d } = He(), u = Xn(t, n), f = r && r.length > 0;
  if (!i)
    return null;
  const m = _.useCallback((h) => a(h), [
    a
  ]);
  return /* @__PURE__ */ _.createElement(Gi, {
    onMouseUp: m,
    ref: u,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": s && f ? "true" : "false",
    "data-vaul-snap-points-overlay": s && o ? "true" : "false",
    "data-vaul-animate": d != null && d.current ? "true" : "false",
    ...e
  });
});
tr.displayName = "Drawer.Overlay";
const nr = /* @__PURE__ */ _.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, a) {
  const { drawerRef: o, onPress: s, onRelease: i, onDrag: d, keyboardIsOpen: u, snapPointsOffset: f, activeSnapPointIndex: m, modal: h, isOpen: b, direction: R, snapPoints: v, container: g, handleOnly: p, shouldAnimate: E, autoFocus: S } = He(), [w, O] = _.useState(!1), j = Xn(a, o), y = _.useRef(null), P = _.useRef(null), x = _.useRef(!1), I = v && v.length > 0;
  bs();
  const B = (T, K, Y = 0) => {
    if (x.current) return !0;
    const Z = Math.abs(T.y), q = Math.abs(T.x), ie = q > Z, ce = [
      "bottom",
      "right"
    ].includes(K) ? 1 : -1;
    if (K === "left" || K === "right") {
      if (!(T.x * ce < 0) && q >= 0 && q <= Y)
        return ie;
    } else if (!(T.y * ce < 0) && Z >= 0 && Z <= Y)
      return !ie;
    return x.current = !0, !0;
  };
  _.useEffect(() => {
    I && window.requestAnimationFrame(() => {
      O(!0);
    });
  }, []);
  function z(T) {
    y.current = null, x.current = !1, i(T);
  }
  return /* @__PURE__ */ _.createElement(Xi, {
    "data-vaul-drawer-direction": R,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": w ? "true" : "false",
    "data-vaul-snap-points": b && I ? "true" : "false",
    "data-vaul-custom-container": g ? "true" : "false",
    "data-vaul-animate": E != null && E.current ? "true" : "false",
    ...r,
    ref: j,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[m ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (T) => {
      p || (r.onPointerDown == null || r.onPointerDown.call(r, T), y.current = {
        x: T.pageX,
        y: T.pageY
      }, s(T));
    },
    onOpenAutoFocus: (T) => {
      n == null || n(T), S || T.preventDefault();
    },
    onPointerDownOutside: (T) => {
      if (e == null || e(T), !h || T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      u.current && (u.current = !1);
    },
    onFocusOutside: (T) => {
      if (!h) {
        T.preventDefault();
        return;
      }
    },
    onPointerMove: (T) => {
      if (P.current = T, p || (r.onPointerMove == null || r.onPointerMove.call(r, T), !y.current)) return;
      const K = T.pageY - y.current.y, Y = T.pageX - y.current.x, Z = T.pointerType === "touch" ? 10 : 2;
      B({
        x: Y,
        y: K
      }, R, Z) ? d(T) : (Math.abs(Y) > Z || Math.abs(K) > Z) && (y.current = null);
    },
    onPointerUp: (T) => {
      r.onPointerUp == null || r.onPointerUp.call(r, T), y.current = null, x.current = !1, i(T);
    },
    onPointerOut: (T) => {
      r.onPointerOut == null || r.onPointerOut.call(r, T), z(P.current);
    },
    onContextMenu: (T) => {
      r.onContextMenu == null || r.onContextMenu.call(r, T), P.current && z(P.current);
    }
  });
});
nr.displayName = "Drawer.Content";
const Es = 250, Ss = 120, Ns = /* @__PURE__ */ _.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: a, isDragging: o, snapPoints: s, activeSnapPoint: i, setActiveSnapPoint: d, dismissible: u, handleOnly: f, isOpen: m, onPress: h, onDrag: b } = He(), R = _.useRef(null), v = _.useRef(!1);
  function g() {
    if (v.current) {
      S();
      return;
    }
    window.setTimeout(() => {
      p();
    }, Ss);
  }
  function p() {
    if (o || e || v.current) {
      S();
      return;
    }
    if (S(), !s || s.length === 0) {
      u || a();
      return;
    }
    if (i === s[s.length - 1] && u) {
      a();
      return;
    }
    const O = s.findIndex((y) => y === i);
    if (O === -1) return;
    const j = s[O + 1];
    d(j);
  }
  function E() {
    R.current = window.setTimeout(() => {
      v.current = !0;
    }, Es);
  }
  function S() {
    R.current && window.clearTimeout(R.current), v.current = !1;
  }
  return /* @__PURE__ */ _.createElement("div", {
    onClick: g,
    onPointerCancel: S,
    onPointerDown: (w) => {
      f && h(w), E();
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
Ns.displayName = "Drawer.Handle";
function Rs(e) {
  const t = He(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ _.createElement(Yi, {
    container: n,
    ...r
  });
}
const $ = {
  Root: Cs,
  Content: nr,
  Overlay: tr,
  Trigger: zi,
  Portal: Rs,
  Close: Qi,
  Title: Ki,
  Description: Zi
}, Ts = "_overlay_fvui9_3", Ds = "_content_fvui9_10", xs = "_grabber_fvui9_34", Ps = "_headline_fvui9_45", Os = "_subhead_fvui9_57", As = "_callout_fvui9_69", ks = "_calloutLabel_fvui9_79", Ms = "_calloutRow_fvui9_88", $s = "_calloutGross_fvui9_94", Ls = "_calloutArrow_fvui9_102", Is = "_calloutNet_fvui9_106", Bs = "_features_fvui9_116", Fs = "_divider_fvui9_125", Ws = "_priceRow_fvui9_133", js = "_price_fvui9_133", Us = "_priceNote_fvui9_148", Hs = "_restore_fvui9_158", V = {
  overlay: Ts,
  content: Ds,
  grabber: xs,
  headline: Ps,
  subhead: Os,
  callout: As,
  calloutLabel: ks,
  calloutRow: Ms,
  calloutGross: $s,
  calloutArrow: Ls,
  calloutNet: Is,
  features: Bs,
  divider: Fs,
  priceRow: Ws,
  price: js,
  priceNote: Us,
  restore: Hs
}, Vs = [
  { title: "Bonus & overtime modelling", description: "Model any additional income", state: "active" },
  { title: "Marginal tax insight", description: "See what your next £1 is worth", state: "active" },
  { title: "Salary comparison", description: "Coming soon", state: "inactive" }
];
function Ol({
  open: e,
  onOpenChange: t,
  trigger: n,
  priceFormatted: r,
  priceNote: a = "one-off · no subscription",
  features: o = Vs,
  onPurchase: s,
  onRestore: i,
  isPurchasing: d = !1
}) {
  return /* @__PURE__ */ C($.Root, { open: e, onOpenChange: t, children: [
    n && /* @__PURE__ */ l($.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C($.Portal, { children: [
      /* @__PURE__ */ l($.Overlay, { className: V.overlay }),
      /* @__PURE__ */ C($.Content, { className: V.content, "aria-label": "Unlock Netti Pro", children: [
        /* @__PURE__ */ l("div", { className: V.grabber, "aria-hidden": "true" }),
        /* @__PURE__ */ l($.Title, { className: V.headline, children: "Unlock Netti Pro" }),
        /* @__PURE__ */ l($.Description, { className: V.subhead, children: "See what you actually keep from your bonus, overtime, and every extra £1 you earn." }),
        /* @__PURE__ */ C("div", { className: V.callout, "aria-label": "Example: £5,000 bonus", children: [
          /* @__PURE__ */ l("span", { className: V.calloutLabel, children: "EXAMPLE  ·  £5,000 BONUS" }),
          /* @__PURE__ */ C("div", { className: V.calloutRow, children: [
            /* @__PURE__ */ l("span", { className: V.calloutGross, children: "£5,000 gross" }),
            /* @__PURE__ */ l("span", { className: V.calloutArrow, "aria-hidden": "true", children: "→" }),
            /* @__PURE__ */ l("span", { className: V.calloutNet, children: "£3,400 take-home" })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: V.features, role: "list", "aria-label": "Included features", children: o.map((u, f) => /* @__PURE__ */ l("div", { role: "listitem", children: /* @__PURE__ */ l(Hr, { title: u.title, description: u.description, state: u.state }) }, f)) }),
        /* @__PURE__ */ l("div", { className: V.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ C("div", { className: V.priceRow, children: [
          /* @__PURE__ */ l("span", { className: V.price, children: r }),
          a && /* @__PURE__ */ l("span", { className: V.priceNote, children: a })
        ] }),
        /* @__PURE__ */ l(
          Rt,
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
const qs = "_overlay_qhbnf_6", zs = "_content_qhbnf_13", Ys = "_grabber_qhbnf_33", Gs = "_title_qhbnf_42", Xs = "_list_qhbnf_58", Ks = "_divider_qhbnf_65", Te = {
  overlay: qs,
  content: zs,
  grabber: Ys,
  title: Gs,
  list: Xs,
  divider: Ks
};
function Al({
  open: e,
  onOpenChange: t,
  trigger: n,
  title: r = "Add additional income",
  types: a,
  onSelect: o
}) {
  return /* @__PURE__ */ C($.Root, { open: e, onOpenChange: t, children: [
    n && /* @__PURE__ */ l($.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C($.Portal, { children: [
      /* @__PURE__ */ l($.Overlay, { className: Te.overlay }),
      /* @__PURE__ */ C($.Content, { className: Te.content, "aria-label": r, children: [
        /* @__PURE__ */ l("div", { className: Te.grabber, "aria-hidden": "true" }),
        /* @__PURE__ */ l($.Title, { className: Te.title, children: r }),
        /* @__PURE__ */ l("div", { className: Te.list, role: "list", children: a.map((s, i) => /* @__PURE__ */ C("div", { role: "listitem", children: [
          /* @__PURE__ */ l(
            ia,
            {
              title: s.title,
              subtitle: s.subtitle,
              onClick: () => o(s.id)
            }
          ),
          i < a.length - 1 && /* @__PURE__ */ l("div", { className: Te.divider, "aria-hidden": "true" })
        ] }, s.id)) })
      ] })
    ] })
  ] });
}
const Zs = "_card_mp69k_9", Qs = "_left_mp69k_22", Js = "_label_mp69k_30", el = "_amountRow_mp69k_37", tl = "_gross_mp69k_44", nl = "_frequency_mp69k_50", rl = "_right_mp69k_57", al = "_periodLabel_mp69k_65", ol = "_periodAmount_mp69k_73", se = {
  card: Zs,
  left: Qs,
  label: Js,
  amountRow: el,
  gross: tl,
  frequency: nl,
  right: rl,
  periodLabel: al,
  periodAmount: ol
};
function kl({
  label: e = "Gross added",
  amountFormatted: t,
  frequency: n,
  periodLabel: r,
  periodAmountFormatted: a,
  className: o
}) {
  return /* @__PURE__ */ C("div", { className: [se.card, o ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ C("div", { className: se.left, children: [
      /* @__PURE__ */ l("span", { className: se.label, children: e }),
      /* @__PURE__ */ C("div", { className: se.amountRow, children: [
        /* @__PURE__ */ l("span", { className: se.gross, children: t }),
        /* @__PURE__ */ l("span", { className: se.frequency, children: `× ${n}` })
      ] })
    ] }),
    /* @__PURE__ */ C("div", { className: se.right, children: [
      /* @__PURE__ */ l("span", { className: se.periodLabel, children: r }),
      /* @__PURE__ */ l("span", { className: se.periodAmount, children: a })
    ] })
  ] });
}
const il = "_card_sdoab_5", sl = "_header_sdoab_13", ll = "_title_sdoab_17", cl = "_subtitle_sdoab_27", tt = {
  card: il,
  header: sl,
  title: ll,
  subtitle: cl
};
function Ml({ children: e, title: t, subtitle: n, className: r }) {
  return /* @__PURE__ */ C("div", { className: [tt.card, r ?? ""].filter(Boolean).join(" "), children: [
    (t || n) && /* @__PURE__ */ C("div", { className: tt.header, children: [
      t && /* @__PURE__ */ l("h2", { className: tt.title, children: t }),
      n && /* @__PURE__ */ l("p", { className: tt.subtitle, children: n })
    ] }),
    e
  ] });
}
const ul = "_overlay_q8ram_6", dl = "_content_q8ram_13", fl = "_handle_q8ram_32", ml = "_titleBar_q8ram_42", vl = "_title_q8ram_42", hl = "_titleSpacer_q8ram_58", pl = "_back_q8ram_63", gl = "_body_q8ram_89", wl = "_footer_q8ram_97", yl = "_description_q8ram_101", ee = {
  overlay: ul,
  content: dl,
  handle: fl,
  titleBar: ml,
  title: vl,
  titleSpacer: hl,
  back: pl,
  body: gl,
  footer: wl,
  description: yl
};
function $l({
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
  const [f, m] = We(!1), h = o !== void 0, b = h ? o : f, R = (v) => {
    h ? s == null || s(v) : m(v);
  };
  return De(() => {
    b ? d == null || d() : u == null || u();
  }, [b]), /* @__PURE__ */ C($.Root, { open: b, onOpenChange: R, children: [
    n && /* @__PURE__ */ l($.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C($.Portal, { children: [
      /* @__PURE__ */ l($.Overlay, { className: ee.overlay }),
      /* @__PURE__ */ C($.Content, { className: ee.content, "aria-label": e, children: [
        /* @__PURE__ */ l("div", { className: ee.handle, "aria-hidden": "true" }),
        e && /* @__PURE__ */ C("div", { className: ee.titleBar, children: [
          i ? /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              className: ee.back,
              onClick: i,
              "aria-label": "Back",
              children: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ l("path", { d: "M15 18l-6-6 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            }
          ) : /* @__PURE__ */ l("div", { className: ee.titleSpacer }),
          /* @__PURE__ */ l($.Title, { className: ee.title, children: e }),
          /* @__PURE__ */ l("div", { className: ee.titleSpacer })
        ] }),
        /* @__PURE__ */ C("div", { className: ee.body, children: [
          t && /* @__PURE__ */ l($.Description, { className: ee.description, children: t }),
          r
        ] }),
        a && /* @__PURE__ */ l("div", { className: ee.footer, children: a })
      ] })
    ] })
  ] });
}
function Ll({
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
  return De(() => {
    t ? i == null || i() : d == null || d();
  }, [t]), t ? fn(
    /* @__PURE__ */ C("div", { className: "fss-root", children: [
      /* @__PURE__ */ C("div", { className: "fss-title-bar", children: [
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
function Il({ title: e, description: t, children: n }) {
  return /* @__PURE__ */ C($.Root, { children: [
    /* @__PURE__ */ l($.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C($.Portal, { children: [
      /* @__PURE__ */ l($.Overlay, { className: "drawer-overlay" }),
      /* @__PURE__ */ C($.Content, { className: "info-sheet__content", children: [
        /* @__PURE__ */ C("div", { className: "info-sheet__header", children: [
          /* @__PURE__ */ l($.Close, { className: "info-sheet__close", "aria-label": "Close", children: "×" }),
          /* @__PURE__ */ l("div", { className: "info-sheet__title", children: e }),
          /* @__PURE__ */ l("div", { className: "info-sheet__spacer" })
        ] }),
        /* @__PURE__ */ l("p", { className: "info-sheet__description", children: t })
      ] })
    ] })
  ] });
}
function Bl({ width: e = 72, height: t = 24, className: n }) {
  return /* @__PURE__ */ C(
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
function Fl({ className: e = "" }) {
  return /* @__PURE__ */ C("div", { className: `ds-ad-slot ${e}`, "data-testid": "ad-slot", children: [
    /* @__PURE__ */ C("svg", { className: "ds-ad-slot-icon", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ l("rect", { x: "1", y: "1", width: "14", height: "14", rx: "2", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ l("line", { x1: "1", y1: "5", x2: "15", y2: "5", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ l("line", { x1: "5", y1: "5", x2: "5", y2: "15", stroke: "currentColor", strokeWidth: "1.2" })
    ] }),
    /* @__PURE__ */ l("span", { className: "ds-ad-slot-text", children: "Ad Slot Placeholder" })
  ] });
}
function Wl({ children: e, className: t = "", ...n }) {
  return /* @__PURE__ */ l("button", { type: "button", className: `ds-primary-btn ${t}`, ...n, children: e });
}
export {
  Fl as AdSlot,
  xl as AdditionalIncomeCard,
  Tl as BottomNav,
  $l as BottomSheet,
  Rt as Button,
  Ml as Card,
  kl as ConfirmationCard,
  Nl as Divider,
  Hr as FeatureRow,
  Ll as FullScreenSheet,
  Al as IncomeTypePicker,
  ia as IncomeTypeRow,
  Il as InfoSheet,
  El as InputField,
  ea as ListRow,
  Sl as MoneyRow,
  Bl as NettiLogo,
  Ol as PaywallSheet,
  Wl as PrimaryButton,
  Dl as SalaryCard,
  fa as SegmentedControl,
  Rl as Select,
  Ir as Tick
};
