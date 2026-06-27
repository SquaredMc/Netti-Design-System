import { jsxs as C, jsx as s, Fragment as ot } from "react/jsx-runtime";
import * as u from "react";
import _, { useState as Oe, useId as wr, useRef as qt, useLayoutEffect as fn, useEffect as xe, useMemo as yr, useCallback as br } from "react";
import * as _r from "react-dom";
import Cr, { createPortal as mn } from "react-dom";
const Er = "_button_qjyoi_7", Sr = "_sizeLg_qjyoi_32", Nr = "_sizeMd_qjyoi_41", Rr = "_variantPro_qjyoi_53", Tr = "_variantPrimary_qjyoi_63", Dr = "_variantSecondary_qjyoi_74", xr = "_variantGhost_qjyoi_85", Pr = "_variantText_qjyoi_97", Or = "_fullWidth_qjyoi_114", Ar = "_icon_qjyoi_123", kr = "_label_qjyoi_132", te = {
  button: Er,
  sizeLg: Sr,
  sizeMd: Nr,
  variantPro: Rr,
  variantPrimary: Tr,
  variantSecondary: Dr,
  variantGhost: xr,
  variantText: Pr,
  fullWidth: Or,
  icon: Ar,
  label: kr
}, $r = {
  pro: te.variantPro,
  primary: te.variantPrimary,
  secondary: te.variantSecondary,
  ghost: te.variantGhost,
  text: te.variantText
}, Mr = {
  lg: te.sizeLg,
  md: te.sizeMd
};
function Tt({
  variant: e = "primary",
  size: t = "lg",
  icon: n,
  fullWidth: r = !1,
  children: a,
  className: o,
  disabled: l,
  ...i
}) {
  return /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      disabled: l,
      className: [
        te.button,
        $r[e],
        Mr[t],
        r ? te.fullWidth : "",
        o ?? ""
      ].filter(Boolean).join(" "),
      ...i,
      children: [
        n && /* @__PURE__ */ s("span", { className: te.icon, "aria-hidden": "true", children: n }),
        /* @__PURE__ */ s("span", { className: te.label, children: a })
      ]
    }
  );
}
const Lr = "_tick_ax8ei_3", Ir = "_active_ax8ei_18", Br = "_inactive_ax8ei_23", Yt = {
  tick: Lr,
  active: Ir,
  inactive: Br
};
function Fr({
  state: e = "active",
  className: t,
  "aria-label": n
}) {
  const r = n ?? (e === "active" ? "Included" : "Coming soon");
  return /* @__PURE__ */ s(
    "span",
    {
      className: [Yt.tick, Yt[e], t ?? ""].filter(Boolean).join(" "),
      "aria-label": r,
      role: "img",
      children: "✓"
    }
  );
}
const Wr = "_row_1fxt2_3", jr = "_text_1fxt2_10", Ur = "_title_1fxt2_18", Hr = "_muted_1fxt2_26", zr = "_description_1fxt2_30", Ie = {
  row: Wr,
  text: jr,
  title: Ur,
  muted: Hr,
  description: zr
};
function Vr({
  title: e,
  description: t,
  state: n = "active",
  className: r
}) {
  const a = n === "inactive";
  return /* @__PURE__ */ C("div", { className: [Ie.row, r ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s(Fr, { state: n }),
    /* @__PURE__ */ C("div", { className: Ie.text, children: [
      /* @__PURE__ */ s(
        "span",
        {
          className: [Ie.title, a ? Ie.muted : ""].filter(Boolean).join(" "),
          children: e
        }
      ),
      t && /* @__PURE__ */ s("span", { className: Ie.description, children: t })
    ] })
  ] });
}
const qr = "_outer_1auh8_7", Yr = "_row_1auh8_14", Gr = "_interactive_1auh8_25", Xr = "_labels_1auh8_49", Kr = "_label_1auh8_49", Zr = "_subLabel_1auh8_69", Qr = "_right_1auh8_79", Jr = "_amount_1auh8_86", ea = "_remove_1auh8_97", ta = "_divider_1auh8_128", J = {
  outer: qr,
  row: Yr,
  interactive: Gr,
  labels: Xr,
  label: Kr,
  subLabel: Zr,
  right: Qr,
  amount: Jr,
  remove: ea,
  divider: ta
};
function na({
  label: e,
  subLabel: t,
  amountFormatted: n,
  onClick: r,
  rowLabel: a,
  hasRemove: o = !1,
  onRemove: l,
  removeLabel: i = `Remove ${e}`,
  hasDivider: d = !0,
  badge: c,
  className: f
}) {
  const m = !!r && !o, h = /* @__PURE__ */ C(ot, { children: [
    /* @__PURE__ */ C("div", { className: J.labels, children: [
      /* @__PURE__ */ s("span", { className: J.label, children: e }),
      t && /* @__PURE__ */ s("span", { className: J.subLabel, children: t })
    ] }),
    /* @__PURE__ */ C("div", { className: J.right, children: [
      c,
      n && /* @__PURE__ */ s("span", { className: J.amount, children: n }),
      o && l && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: J.remove,
          onClick: l,
          "aria-label": i,
          children: /* @__PURE__ */ s("span", { "aria-hidden": "true", children: "−" })
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ C("div", { className: [J.outer, f ?? ""].filter(Boolean).join(" "), children: [
    m ? /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: [J.row, J.interactive].join(" "),
        onClick: r,
        "aria-label": a,
        children: h
      }
    ) : /* @__PURE__ */ s("div", { className: J.row, children: h }),
    d && /* @__PURE__ */ s("div", { className: J.divider, "aria-hidden": "true" })
  ] });
}
const ra = "_row_1omvu_6", aa = "_labels_1omvu_20", oa = "_title_1omvu_29", ia = "_subtitle_1omvu_37", sa = "_chevron_1omvu_45", Be = {
  row: ra,
  labels: aa,
  title: oa,
  subtitle: ia,
  chevron: sa
};
function la({ title: e, subtitle: t, onClick: n, className: r }) {
  return /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: [Be.row, r ?? ""].filter(Boolean).join(" "),
      onClick: n,
      children: [
        /* @__PURE__ */ C("span", { className: Be.labels, children: [
          /* @__PURE__ */ s("span", { className: Be.title, children: e }),
          t && /* @__PURE__ */ s("span", { className: Be.subtitle, children: t })
        ] }),
        /* @__PURE__ */ s(
          "svg",
          {
            className: Be.chevron,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "aria-hidden": "true",
            children: /* @__PURE__ */ s("path", { d: "M9 6l6 6-6 6", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
          }
        )
      ]
    }
  );
}
const ca = "_track_fjawl_7", ua = "_dark_fjawl_3", da = "_light_fjawl_4", fa = "_segment_fjawl_27", ma = "_selected_fjawl_59", Ge = {
  track: ca,
  dark: ua,
  light: da,
  segment: fa,
  selected: ma
};
function va({
  options: e,
  value: t,
  onChange: n,
  context: r = "light",
  className: a,
  "aria-label": o = "Select period"
}) {
  const l = (i, d) => {
    let c = null;
    i.key === "ArrowRight" || i.key === "ArrowDown" ? c = (d + 1) % e.length : (i.key === "ArrowLeft" || i.key === "ArrowUp") && (c = (d - 1 + e.length) % e.length), c !== null && (i.preventDefault(), n(e[c].value));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [Ge.track, Ge[r], a ?? ""].filter(Boolean).join(" "),
      role: "tablist",
      "aria-label": o,
      children: e.map((i, d) => {
        const c = i.value === t;
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": c,
            tabIndex: c ? 0 : -1,
            className: [Ge.segment, c ? Ge.selected : ""].join(" "),
            onClick: () => n(i.value),
            onKeyDown: (f) => l(f, d),
            "data-testid": `segment-${i.value}`,
            children: i.label
          },
          i.value
        );
      })
    }
  );
}
const ha = "_field_13yb0_3", pa = "_label_13yb0_16", ga = "_fieldStandard_13yb0_3", wa = "_inputBox_13yb0_38", ya = "_state_focused_13yb0_50", ba = "_state_filled_13yb0_56", _a = "_input_13yb0_38", Ca = "_fieldLarge_13yb0_4", Ea = "_largeAmountRow_13yb0_91", Sa = "_largePrefix_13yb0_99", Na = "_largeInput_13yb0_111", Ra = "_state_empty_13yb0_132", Ta = "_underline_13yb0_137", Da = "_underlineFocused_13yb0_145", xa = "_disabled_13yb0_151", Pa = "_error_13yb0_158", U = {
  field: ha,
  label: pa,
  fieldStandard: ga,
  inputBox: wa,
  state_focused: ya,
  state_filled: ba,
  input: _a,
  fieldLarge: Ca,
  largeAmountRow: Ea,
  largePrefix: Sa,
  largeInput: Na,
  state_empty: Ra,
  underline: Ta,
  underlineFocused: Da,
  disabled: xa,
  error: Pa
};
function kl({
  label: e,
  value: t,
  onChange: n,
  variant: r = "standard",
  prefix: a = "£",
  error: o,
  className: l,
  placeholder: i,
  disabled: d,
  inputMode: c,
  ...f
}) {
  const [m, h] = Oe(!1), w = wr(), S = t !== "" && t !== void 0, v = m ? "focused" : S ? "filled" : "empty";
  return r === "largeAmount" ? /* @__PURE__ */ C(
    "div",
    {
      className: [
        U.field,
        U.fieldLarge,
        U[`state_${v}`],
        d ? U.disabled : "",
        l ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("label", { htmlFor: w, className: U.label, children: e }),
        /* @__PURE__ */ C("div", { className: U.largeAmountRow, children: [
          a && /* @__PURE__ */ s("span", { className: U.largePrefix, "aria-hidden": "true", children: a }),
          /* @__PURE__ */ s(
            "input",
            {
              id: w,
              type: "text",
              inputMode: c ?? "decimal",
              value: t,
              placeholder: S ? void 0 : "0",
              onChange: (g) => n(g.target.value),
              onFocus: () => h(!0),
              onBlur: () => h(!1),
              disabled: d,
              "aria-invalid": !!o,
              "aria-describedby": o ? `${w}-error` : void 0,
              className: U.largeInput,
              ...f
            }
          )
        ] }),
        /* @__PURE__ */ s(
          "div",
          {
            className: [U.underline, m ? U.underlineFocused : ""].join(" "),
            "aria-hidden": "true"
          }
        ),
        o && /* @__PURE__ */ s("span", { id: `${w}-error`, className: U.error, role: "alert", children: o })
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
        l ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("label", { htmlFor: w, className: U.label, children: e }),
        /* @__PURE__ */ s("div", { className: U.inputBox, children: /* @__PURE__ */ s(
          "input",
          {
            id: w,
            type: "text",
            inputMode: c ?? "decimal",
            value: t,
            placeholder: i ?? "e.g. 16",
            onChange: (g) => n(g.target.value),
            onFocus: () => h(!0),
            onBlur: () => h(!1),
            disabled: d,
            "aria-invalid": !!o,
            "aria-describedby": o ? `${w}-error` : void 0,
            className: U.input,
            ...f
          }
        ) }),
        o && /* @__PURE__ */ s("span", { id: `${w}-error`, className: U.error, role: "alert", children: o })
      ]
    }
  );
}
const Oa = "_row_f6k5w_3", Aa = "_label_f6k5w_10", ka = "_amount_f6k5w_17", $a = "_positive_f6k5w_27", Ma = "_negative_f6k5w_30", La = "_strong_f6k5w_33", Ia = "_divider_f6k5w_49", we = {
  row: Oa,
  label: Aa,
  amount: ka,
  positive: $a,
  negative: Ma,
  strong: La,
  divider: Ia
};
function $l({
  label: e,
  amount: t,
  strong: n = !1,
  showPositive: r = !0,
  className: a,
  currency: o = "GBP",
  locale: l = "en-GB"
}) {
  const i = t > 0 && r, d = t < 0, c = new Intl.NumberFormat(l, {
    style: "currency",
    currency: o,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(t)), f = d ? `−${c}` : c;
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
        /* @__PURE__ */ s("span", { className: we.label, children: e }),
        /* @__PURE__ */ s("span", { className: we.amount, children: f })
      ]
    }
  );
}
function Ml({ className: e }) {
  return /* @__PURE__ */ s("div", { className: [we.divider, e ?? ""].filter(Boolean).join(" ") });
}
const Ba = "_field_180mg_3", Fa = "_label_180mg_11", Wa = "_trigger_180mg_19", ja = "_triggerOpen_180mg_42", Ua = "_chevron_180mg_52", Ha = "_chevronOpen_180mg_58", za = "_dropdown_180mg_64", Va = "_dropdownUpward_180mg_76", qa = "_option_180mg_80", Ya = "_optionSelected_180mg_101", ae = {
  field: Ba,
  label: Fa,
  trigger: Wa,
  triggerOpen: ja,
  chevron: Ua,
  chevronOpen: Ha,
  dropdown: za,
  dropdownUpward: Va,
  option: qa,
  optionSelected: Ya
};
function Ll({ label: e, options: t, value: n, onChange: r, className: a, disabled: o, "data-testid": l }) {
  const [i, d] = Oe(!1), [c, f] = Oe(null), m = qt(null), h = qt(null), w = t.find((g) => g.value === n), S = () => {
    if (!m.current) return;
    const g = m.current.getBoundingClientRect(), p = window.innerHeight, E = Math.min(p * 0.6, 320), N = p - g.bottom - 12, y = g.top - 12, O = N < E && y > N;
    f({ top: O ? g.top - 8 : g.bottom + 8, left: g.left, width: g.width, upward: O });
  };
  fn(() => {
    i && S();
  }, [i]), xe(() => {
    if (!i) return;
    const g = () => S(), p = () => S();
    return window.addEventListener("scroll", g, !0), window.addEventListener("resize", p), () => {
      window.removeEventListener("scroll", g, !0), window.removeEventListener("resize", p);
    };
  }, [i]), xe(() => {
    if (!i) return;
    const g = (p) => {
      var N, y;
      const E = p.target;
      !((N = m.current) != null && N.contains(E)) && !((y = h.current) != null && y.contains(E)) && d(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [i]), xe(() => {
    if (!i) return;
    const g = (p) => {
      var E;
      p.key === "Escape" && (d(!1), (E = m.current) == null || E.focus());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [i]);
  const v = i && c && mn(
    /* @__PURE__ */ s(
      "div",
      {
        ref: h,
        className: [ae.dropdown, c.upward ? ae.dropdownUpward : ""].join(" "),
        style: {
          position: "fixed",
          top: c.upward ? "auto" : c.top,
          bottom: c.upward ? `${window.innerHeight - c.top}px` : "auto",
          left: c.left,
          width: c.width
        },
        children: t.map((g) => /* @__PURE__ */ s(
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
    /* @__PURE__ */ s("label", { className: ae.label, children: e }),
    /* @__PURE__ */ C(
      "button",
      {
        ref: m,
        type: "button",
        className: [ae.trigger, i ? ae.triggerOpen : ""].join(" "),
        onClick: () => !o && d(!i),
        disabled: o,
        "data-testid": l,
        "aria-haspopup": "listbox",
        "aria-expanded": i,
        children: [
          /* @__PURE__ */ s("span", { children: (w == null ? void 0 : w.label) ?? "Select…" }),
          /* @__PURE__ */ s(
            "svg",
            {
              className: [ae.chevron, i ? ae.chevronOpen : ""].join(" "),
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              children: /* @__PURE__ */ s("path", { d: "M4 6L8 10L12 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            }
          )
        ]
      }
    ),
    v
  ] });
}
const Ga = "_nav_1y8fh_3", Xa = "_item_1y8fh_12", Ka = "_active_1y8fh_33", Za = "_icon_1y8fh_37", Qa = "_label_1y8fh_46", Fe = {
  nav: Ga,
  item: Xa,
  active: Ka,
  icon: Za,
  label: Qa
};
function Il({ items: e, activeId: t, onChange: n, className: r }) {
  return /* @__PURE__ */ s("nav", { className: [Fe.nav, r ?? ""].filter(Boolean).join(" "), children: e.map((a) => /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: [Fe.item, t === a.id ? Fe.active : ""].filter(Boolean).join(" "),
      onClick: () => n(a.id),
      "aria-current": t === a.id ? "page" : void 0,
      "data-testid": `nav-${a.id}`,
      children: [
        /* @__PURE__ */ s("span", { className: Fe.icon, "aria-hidden": "true", children: a.icon }),
        /* @__PURE__ */ s("span", { className: Fe.label, children: a.label })
      ]
    },
    a.id
  )) });
}
const Ja = "_card_1w2rv_11", eo = "_eyebrow_1w2rv_25", to = "_amount_1w2rv_39", no = "_amountEdit_1w2rv_51", ro = "_amountPrefix_1w2rv_58", ao = "_amountInput_1w2rv_59", oo = "_badge_1w2rv_82", io = "_toggle_1w2rv_101", fe = {
  card: Ja,
  eyebrow: eo,
  amount: to,
  amountEdit: no,
  amountPrefix: ro,
  amountInput: ao,
  badge: oo,
  toggle: io
}, so = [
  { value: "yearly", label: "Yearly" },
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" }
];
function Bl({
  salaryFormatted: e,
  period: t,
  onPeriodChange: n,
  additionalIncomeSummary: r,
  className: a,
  editable: o = !1,
  value: l = "",
  onValueChange: i
}) {
  const d = !!r;
  return /* @__PURE__ */ C(
    "article",
    {
      className: [fe.card, a ?? ""].filter(Boolean).join(" "),
      "aria-label": "Your salary",
      children: [
        /* @__PURE__ */ s("span", { className: fe.eyebrow, children: "YOUR SALARY" }),
        o ? /* @__PURE__ */ C("div", { className: fe.amountEdit, children: [
          /* @__PURE__ */ s("span", { className: fe.amountPrefix, "aria-hidden": "true", children: "£" }),
          /* @__PURE__ */ s(
            "input",
            {
              className: fe.amountInput,
              type: "text",
              inputMode: "decimal",
              value: l,
              onChange: (c) => i == null ? void 0 : i(c.target.value),
              "aria-label": "Salary amount in pounds",
              style: { width: `calc(${Math.max(1, l.length)}ch + 2px)` }
            }
          )
        ] }) : /* @__PURE__ */ s("span", { className: fe.amount, "aria-live": "polite", children: e }),
        d && /* @__PURE__ */ s("div", { className: fe.badge, "aria-label": "Additional income", children: r }),
        /* @__PURE__ */ s(
          va,
          {
            options: so,
            value: t,
            onChange: (c) => n(c),
            context: "dark",
            "aria-label": "Pay period",
            className: fe.toggle
          }
        )
      ]
    }
  );
}
const lo = "_card_b3zmz_7", co = "_empty_b3zmz_14", uo = "_hasItems_b3zmz_22", fo = "_header_b3zmz_33", mo = "_eyebrow_b3zmz_42", vo = "_divider_b3zmz_56", ho = "_rows_b3zmz_64", pe = {
  card: lo,
  empty: co,
  hasItems: uo,
  header: fo,
  eyebrow: mo,
  divider: vo,
  rows: ho
};
function Fl({
  items: e,
  onAdd: t,
  onItemClick: n,
  className: r
}) {
  const a = e.length > 0;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        pe.card,
        a ? pe.hasItems : pe.empty,
        r ?? ""
      ].filter(Boolean).join(" "),
      children: a ? /* @__PURE__ */ C(ot, { children: [
        /* @__PURE__ */ C("div", { className: pe.header, children: [
          /* @__PURE__ */ s("span", { className: pe.eyebrow, children: "ADDITIONAL INCOME" }),
          /* @__PURE__ */ s(
            Tt,
            {
              variant: "ghost",
              size: "md",
              onClick: t,
              "aria-label": "Add another income source",
              children: "+ Add income"
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { className: pe.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: pe.rows, children: e.map((o, l) => /* @__PURE__ */ s(
          na,
          {
            label: o.label,
            subLabel: o.subLabel,
            amountFormatted: o.amountFormatted,
            onClick: n ? () => n(o.id) : void 0,
            rowLabel: n ? `Edit ${o.label}` : void 0,
            hasRemove: !1,
            hasDivider: l < e.length - 1
          },
          o.id
        )) })
      ] }) : (
        /* Empty state — Ghost button fills the full card */
        /* @__PURE__ */ s(
          Tt,
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
function Gt(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function vn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((a) => {
      const o = Gt(a, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          typeof o == "function" ? o() : Gt(e[a], null);
        }
      };
  };
}
function _e(...e) {
  return u.useCallback(vn(...e), e);
}
function po(e, t) {
  const n = u.createContext(t), r = (o) => {
    const { children: l, ...i } = o, d = u.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ s(n.Provider, { value: d, children: l });
  };
  r.displayName = e + "Provider";
  function a(o) {
    const l = u.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``);
  }
  return [r, a];
}
function go(e, t = []) {
  let n = [];
  function r(o, l) {
    const i = u.createContext(l), d = n.length;
    n = [...n, l];
    const c = (m) => {
      var p;
      const { scope: h, children: w, ...S } = m, v = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[d]) || i, g = u.useMemo(() => S, Object.values(S));
      return /* @__PURE__ */ s(v.Provider, { value: g, children: w });
    };
    c.displayName = o + "Provider";
    function f(m, h) {
      var v;
      const w = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[d]) || i, S = u.useContext(w);
      if (S) return S;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${o}\``);
    }
    return [c, f];
  }
  const a = () => {
    const o = n.map((l) => u.createContext(l));
    return function(i) {
      const d = (i == null ? void 0 : i[e]) || o;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: d } }),
        [i, d]
      );
    };
  };
  return a.scopeName = e, [r, wo(a, ...t)];
}
function wo(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(o) {
      const l = r.reduce((i, { useScope: d, scopeName: c }) => {
        const m = d(o)[`__scope${c}`];
        return { ...i, ...m };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Ue = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, yo = u[" useId ".trim().toString()] || (() => {
}), bo = 0;
function ht(e) {
  const [t, n] = u.useState(yo());
  return Ue(() => {
    n((r) => r ?? String(bo++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var _o = u[" useInsertionEffect ".trim().toString()] || Ue;
function Co({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [a, o, l] = Eo({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, d = i ? e : a;
  {
    const f = u.useRef(e !== void 0);
    u.useEffect(() => {
      const m = f.current;
      m !== i && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const c = u.useCallback(
    (f) => {
      var m;
      if (i) {
        const h = So(f) ? f(e) : f;
        h !== e && ((m = l.current) == null || m.call(l, h));
      } else
        o(f);
    },
    [i, e, o, l]
  );
  return [d, c];
}
function Eo({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), a = u.useRef(n), o = u.useRef(t);
  return _o(() => {
    o.current = t;
  }, [t]), u.useEffect(() => {
    var l;
    a.current !== n && ((l = o.current) == null || l.call(o, n), a.current = n);
  }, [n, a]), [n, r, o];
}
function So(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function hn(e) {
  const t = /* @__PURE__ */ No(e), n = u.forwardRef((r, a) => {
    const { children: o, ...l } = r, i = u.Children.toArray(o), d = i.find(To);
    if (d) {
      const c = d.props.children, f = i.map((m) => m === d ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : m);
      return /* @__PURE__ */ s(t, { ...l, ref: a, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ s(t, { ...l, ref: a, children: o });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function No(e) {
  const t = u.forwardRef((n, r) => {
    const { children: a, ...o } = n;
    if (u.isValidElement(a)) {
      const l = xo(a), i = Do(o, a.props);
      return a.type !== u.Fragment && (i.ref = r ? vn(r, l) : l), u.cloneElement(a, i);
    }
    return u.Children.count(a) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ro = Symbol("radix.slottable");
function To(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ro;
}
function Do(e, t) {
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
function xo(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Po = [
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
], le = Po.reduce((e, t) => {
  const n = /* @__PURE__ */ hn(`Primitive.${t}`), r = u.forwardRef((a, o) => {
    const { asChild: l, ...i } = a, d = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ s(d, { ...i, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Oo(e, t) {
  e && _r.flushSync(() => e.dispatchEvent(t));
}
function He(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Ao(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e);
  u.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var ko = "DismissableLayer", Dt = "dismissableLayer.update", $o = "dismissableLayer.pointerDownOutside", Mo = "dismissableLayer.focusOutside", Xt, pn = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), gn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: l,
      onDismiss: i,
      ...d
    } = e, c = u.useContext(pn), [f, m] = u.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = u.useState({}), S = _e(t, (b) => m(b)), v = Array.from(c.layers), [g] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), p = v.indexOf(g), E = f ? v.indexOf(f) : -1, N = c.layersWithOutsidePointerEventsDisabled.size > 0, y = E >= p, O = Bo((b) => {
      const P = b.target, x = [...c.branches].some((I) => I.contains(P));
      !y || x || (a == null || a(b), l == null || l(b), b.defaultPrevented || i == null || i());
    }, h), j = Fo((b) => {
      const P = b.target;
      [...c.branches].some((I) => I.contains(P)) || (o == null || o(b), l == null || l(b), b.defaultPrevented || i == null || i());
    }, h);
    return Ao((b) => {
      E === c.layers.size - 1 && (r == null || r(b), !b.defaultPrevented && i && (b.preventDefault(), i()));
    }, h), u.useEffect(() => {
      if (f)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Xt = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), Kt(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Xt);
        };
    }, [f, h, n, c]), u.useEffect(() => () => {
      f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), Kt());
    }, [f, c]), u.useEffect(() => {
      const b = () => w({});
      return document.addEventListener(Dt, b), () => document.removeEventListener(Dt, b);
    }, []), /* @__PURE__ */ s(
      le.div,
      {
        ...d,
        ref: S,
        style: {
          pointerEvents: N ? y ? "auto" : "none" : void 0,
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
gn.displayName = ko;
var Lo = "DismissableLayerBranch", Io = u.forwardRef((e, t) => {
  const n = u.useContext(pn), r = u.useRef(null), a = _e(t, r);
  return u.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ s(le.div, { ...e, ref: a });
});
Io.displayName = Lo;
function Bo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e), r = u.useRef(!1), a = u.useRef(() => {
  });
  return u.useEffect(() => {
    const o = (i) => {
      if (i.target && !r.current) {
        let d = function() {
          wn(
            $o,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = d, t.addEventListener("click", a.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", a.current);
      r.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", o), t.removeEventListener("click", a.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Fo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const a = (o) => {
      o.target && !r.current && wn(Mo, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Kt() {
  const e = new CustomEvent(Dt);
  document.dispatchEvent(e);
}
function wn(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? Oo(a, o) : a.dispatchEvent(o);
}
var pt = "focusScope.autoFocusOnMount", gt = "focusScope.autoFocusOnUnmount", Zt = { bubbles: !1, cancelable: !0 }, Wo = "FocusScope", yn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...l
  } = e, [i, d] = u.useState(null), c = He(a), f = He(o), m = u.useRef(null), h = _e(t, (v) => d(v)), w = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let v = function(N) {
        if (w.paused || !i) return;
        const y = N.target;
        i.contains(y) ? m.current = y : me(m.current, { select: !0 });
      }, g = function(N) {
        if (w.paused || !i) return;
        const y = N.relatedTarget;
        y !== null && (i.contains(y) || me(m.current, { select: !0 }));
      }, p = function(N) {
        if (document.activeElement === document.body)
          for (const O of N)
            O.removedNodes.length > 0 && me(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const E = new MutationObserver(p);
      return i && E.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), E.disconnect();
      };
    }
  }, [r, i, w.paused]), u.useEffect(() => {
    if (i) {
      Jt.add(w);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const p = new CustomEvent(pt, Zt);
        i.addEventListener(pt, c), i.dispatchEvent(p), p.defaultPrevented || (jo(qo(bn(i)), { select: !0 }), document.activeElement === v && me(i));
      }
      return () => {
        i.removeEventListener(pt, c), setTimeout(() => {
          const p = new CustomEvent(gt, Zt);
          i.addEventListener(gt, f), i.dispatchEvent(p), p.defaultPrevented || me(v ?? document.body, { select: !0 }), i.removeEventListener(gt, f), Jt.remove(w);
        }, 0);
      };
    }
  }, [i, c, f, w]);
  const S = u.useCallback(
    (v) => {
      if (!n && !r || w.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, p = document.activeElement;
      if (g && p) {
        const E = v.currentTarget, [N, y] = Uo(E);
        N && y ? !v.shiftKey && p === y ? (v.preventDefault(), n && me(N, { select: !0 })) : v.shiftKey && p === N && (v.preventDefault(), n && me(y, { select: !0 })) : p === E && v.preventDefault();
      }
    },
    [n, r, w.paused]
  );
  return /* @__PURE__ */ s(le.div, { tabIndex: -1, ...l, ref: h, onKeyDown: S });
});
yn.displayName = Wo;
function jo(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (me(r, { select: t }), document.activeElement !== n) return;
}
function Uo(e) {
  const t = bn(e), n = Qt(t, e), r = Qt(t.reverse(), e);
  return [n, r];
}
function bn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Qt(e, t) {
  for (const n of e)
    if (!Ho(n, { upTo: t })) return n;
}
function Ho(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function zo(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function me(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && zo(e) && t && e.select();
  }
}
var Jt = Vo();
function Vo() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = en(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = en(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function en(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function qo(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Yo = "Portal", _n = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [a, o] = u.useState(!1);
  Ue(() => o(!0), []);
  const l = n || a && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return l ? Cr.createPortal(/* @__PURE__ */ s(le.div, { ...r, ref: t }), l) : null;
});
_n.displayName = Yo;
function Go(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var st = (e) => {
  const { present: t, children: n } = e, r = Xo(t), a = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), o = _e(r.ref, Ko(a));
  return typeof n == "function" || r.isPresent ? u.cloneElement(a, { ref: o }) : null;
};
st.displayName = "Presence";
function Xo(e) {
  const [t, n] = u.useState(), r = u.useRef(null), a = u.useRef(e), o = u.useRef("none"), l = e ? "mounted" : "unmounted", [i, d] = Go(l, {
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
  return u.useEffect(() => {
    const c = Xe(r.current);
    o.current = i === "mounted" ? c : "none";
  }, [i]), Ue(() => {
    const c = r.current, f = a.current;
    if (f !== e) {
      const h = o.current, w = Xe(c);
      e ? d("MOUNT") : w === "none" || (c == null ? void 0 : c.display) === "none" ? d("UNMOUNT") : d(f && h !== w ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, d]), Ue(() => {
    if (t) {
      let c;
      const f = t.ownerDocument.defaultView ?? window, m = (w) => {
        const v = Xe(r.current).includes(CSS.escape(w.animationName));
        if (w.target === t && v && (d("ANIMATION_END"), !a.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, h = (w) => {
        w.target === t && (o.current = Xe(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        f.clearTimeout(c), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: u.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function Xe(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ko(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var wt = 0;
function Zo() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? tn()), document.body.insertAdjacentElement("beforeend", e[1] ?? tn()), wt++, () => {
      wt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), wt--;
    };
  }, []);
}
function tn() {
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
function Cn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Qo(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var rt = "right-scroll-bar-position", at = "width-before-scroll-bar", Jo = "with-scroll-bars-hidden", ei = "--removed-body-scroll-bar-size";
function yt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ti(e, t) {
  var n = Oe(function() {
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
var ni = typeof window < "u" ? u.useLayoutEffect : u.useEffect, nn = /* @__PURE__ */ new WeakMap();
function ri(e, t) {
  var n = ti(null, function(r) {
    return e.forEach(function(a) {
      return yt(a, r);
    });
  });
  return ni(function() {
    var r = nn.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), l = n.current;
      a.forEach(function(i) {
        o.has(i) || yt(i, null);
      }), o.forEach(function(i) {
        a.has(i) || yt(i, l);
      });
    }
    nn.set(n, e);
  }, [e]), n;
}
function ai(e) {
  return e;
}
function oi(e, t) {
  t === void 0 && (t = ai);
  var n = [], r = !1, a = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(o) {
      var l = t(o, r);
      return n.push(l), function() {
        n = n.filter(function(i) {
          return i !== l;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (r = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(o);
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
      var l = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(o), l = n;
      }
      var d = function() {
        var f = l;
        l = [], f.forEach(o);
      }, c = function() {
        return Promise.resolve().then(d);
      };
      c(), n = {
        push: function(f) {
          l.push(f), c();
        },
        filter: function(f) {
          return l = l.filter(f), n;
        }
      };
    }
  };
  return a;
}
function ii(e) {
  e === void 0 && (e = {});
  var t = oi(null);
  return t.options = oe({ async: !0, ssr: !1 }, e), t;
}
var En = function(e) {
  var t = e.sideCar, n = Cn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, oe({}, n));
};
En.isSideCarExport = !0;
function si(e, t) {
  return e.useMedium(t), En;
}
var Sn = ii(), bt = function() {
}, lt = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: bt,
    onWheelCapture: bt,
    onTouchMoveCapture: bt
  }), a = r[0], o = r[1], l = e.forwardProps, i = e.children, d = e.className, c = e.removeScrollBar, f = e.enabled, m = e.shards, h = e.sideCar, w = e.noRelative, S = e.noIsolation, v = e.inert, g = e.allowPinchZoom, p = e.as, E = p === void 0 ? "div" : p, N = e.gapMode, y = Cn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), O = h, j = ri([n, t]), b = oe(oe({}, y), a);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(O, { sideCar: Sn, removeScrollBar: c, shards: m, noRelative: w, noIsolation: S, inert: v, setCallbacks: o, allowPinchZoom: !!g, lockRef: n, gapMode: N }),
    l ? u.cloneElement(u.Children.only(i), oe(oe({}, b), { ref: j })) : u.createElement(E, oe({}, b, { className: d, ref: j }), i)
  );
});
lt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
lt.classNames = {
  fullWidth: at,
  zeroRight: rt
};
var li = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ci() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = li();
  return t && e.setAttribute("nonce", t), e;
}
function ui(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function di(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var fi = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ci()) && (ui(t, n), di(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, mi = function() {
  var e = fi();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Nn = function() {
  var e = mi(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, vi = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, _t = function(e) {
  return parseInt(e || "", 10) || 0;
}, hi = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [_t(n), _t(r), _t(a)];
}, pi = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return vi;
  var t = hi(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, gi = Nn(), Pe = "data-scroll-locked", wi = function(e, t, n, r) {
  var a = e.left, o = e.top, l = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Jo, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Pe, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(rt, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(at, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(rt, " .").concat(rt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(at, " .").concat(at, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Pe, `] {
    `).concat(ei, ": ").concat(i, `px;
  }
`);
}, rn = function() {
  var e = parseInt(document.body.getAttribute(Pe) || "0", 10);
  return isFinite(e) ? e : 0;
}, yi = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Pe, (rn() + 1).toString()), function() {
      var e = rn() - 1;
      e <= 0 ? document.body.removeAttribute(Pe) : document.body.setAttribute(Pe, e.toString());
    };
  }, []);
}, bi = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  yi();
  var o = u.useMemo(function() {
    return pi(a);
  }, [a]);
  return u.createElement(gi, { styles: wi(o, !t, a, n ? "" : "!important") });
}, xt = !1;
if (typeof window < "u")
  try {
    var Ke = Object.defineProperty({}, "passive", {
      get: function() {
        return xt = !0, !0;
      }
    });
    window.addEventListener("test", Ke, Ke), window.removeEventListener("test", Ke, Ke);
  } catch {
    xt = !1;
  }
var Ne = xt ? { passive: !1 } : !1, _i = function(e) {
  return e.tagName === "TEXTAREA";
}, Rn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !_i(e) && n[t] === "visible")
  );
}, Ci = function(e) {
  return Rn(e, "overflowY");
}, Ei = function(e) {
  return Rn(e, "overflowX");
}, an = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = Tn(e, r);
    if (a) {
      var o = Dn(e, r), l = o[1], i = o[2];
      if (l > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Si = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ni = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Tn = function(e, t) {
  return e === "v" ? Ci(t) : Ei(t);
}, Dn = function(e, t) {
  return e === "v" ? Si(t) : Ni(t);
}, Ri = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ti = function(e, t, n, r, a) {
  var o = Ri(e, window.getComputedStyle(t).direction), l = o * r, i = n.target, d = t.contains(i), c = !1, f = l > 0, m = 0, h = 0;
  do {
    if (!i)
      break;
    var w = Dn(e, i), S = w[0], v = w[1], g = w[2], p = v - g - o * S;
    (S || p) && Tn(e, i) && (m += p, h += S);
    var E = i.parentNode;
    i = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
  } while (
    // portaled content
    !d && i !== document.body || // self content
    d && (t.contains(i) || t === i)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(h) < 1) && (c = !0), c;
}, Ze = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, on = function(e) {
  return [e.deltaX, e.deltaY];
}, sn = function(e) {
  return e && "current" in e ? e.current : e;
}, Di = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, xi = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Pi = 0, Re = [];
function Oi(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), a = u.useState(Pi++)[0], o = u.useState(Nn)[0], l = u.useRef(e);
  u.useEffect(function() {
    l.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var v = Qo([e.lockRef.current], (e.shards || []).map(sn), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !l.current.allowPinchZoom;
    var p = Ze(v), E = n.current, N = "deltaX" in v ? v.deltaX : E[0] - p[0], y = "deltaY" in v ? v.deltaY : E[1] - p[1], O, j = v.target, b = Math.abs(N) > Math.abs(y) ? "h" : "v";
    if ("touches" in v && b === "h" && j.type === "range")
      return !1;
    var P = window.getSelection(), x = P && P.anchorNode, I = x ? x === j || x.contains(j) : !1;
    if (I)
      return !1;
    var B = an(b, j);
    if (!B)
      return !0;
    if (B ? O = b : (O = b === "v" ? "h" : "v", B = an(b, j)), !B)
      return !1;
    if (!r.current && "changedTouches" in v && (N || y) && (r.current = O), !O)
      return !0;
    var q = r.current || O;
    return Ti(q, g, v, q === "h" ? N : y);
  }, []), d = u.useCallback(function(v) {
    var g = v;
    if (!(!Re.length || Re[Re.length - 1] !== o)) {
      var p = "deltaY" in g ? on(g) : Ze(g), E = t.current.filter(function(O) {
        return O.name === g.type && (O.target === g.target || g.target === O.shadowParent) && Di(O.delta, p);
      })[0];
      if (E && E.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!E) {
        var N = (l.current.shards || []).map(sn).filter(Boolean).filter(function(O) {
          return O.contains(g.target);
        }), y = N.length > 0 ? i(g, N[0]) : !l.current.noIsolation;
        y && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(v, g, p, E) {
    var N = { name: v, delta: g, target: p, should: E, shadowParent: Ai(p) };
    t.current.push(N), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== N;
      });
    }, 1);
  }, []), f = u.useCallback(function(v) {
    n.current = Ze(v), r.current = void 0;
  }, []), m = u.useCallback(function(v) {
    c(v.type, on(v), v.target, i(v, e.lockRef.current));
  }, []), h = u.useCallback(function(v) {
    c(v.type, Ze(v), v.target, i(v, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Re.push(o), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", d, Ne), document.addEventListener("touchmove", d, Ne), document.addEventListener("touchstart", f, Ne), function() {
      Re = Re.filter(function(v) {
        return v !== o;
      }), document.removeEventListener("wheel", d, Ne), document.removeEventListener("touchmove", d, Ne), document.removeEventListener("touchstart", f, Ne);
    };
  }, []);
  var w = e.removeScrollBar, S = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    S ? u.createElement(o, { styles: xi(a) }) : null,
    w ? u.createElement(bi, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ai(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ki = si(Sn, Oi);
var xn = u.forwardRef(function(e, t) {
  return u.createElement(lt, oe({}, e, { ref: t, sideCar: ki }));
});
xn.classNames = lt.classNames;
var $i = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Te = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), Je = {}, Ct = 0, Pn = function(e) {
  return e && (e.host || Pn(e.parentNode));
}, Mi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Pn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Li = function(e, t, n, r) {
  var a = Mi(t, Array.isArray(e) ? e : [e]);
  Je[n] || (Je[n] = /* @__PURE__ */ new WeakMap());
  var o = Je[n], l = [], i = /* @__PURE__ */ new Set(), d = new Set(a), c = function(m) {
    !m || i.has(m) || (i.add(m), c(m.parentNode));
  };
  a.forEach(c);
  var f = function(m) {
    !m || d.has(m) || Array.prototype.forEach.call(m.children, function(h) {
      if (i.has(h))
        f(h);
      else
        try {
          var w = h.getAttribute(r), S = w !== null && w !== "false", v = (Te.get(h) || 0) + 1, g = (o.get(h) || 0) + 1;
          Te.set(h, v), o.set(h, g), l.push(h), v === 1 && S && Qe.set(h, !0), g === 1 && h.setAttribute(n, "true"), S || h.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", h, p);
        }
    });
  };
  return f(t), i.clear(), Ct++, function() {
    l.forEach(function(m) {
      var h = Te.get(m) - 1, w = o.get(m) - 1;
      Te.set(m, h), o.set(m, w), h || (Qe.has(m) || m.removeAttribute(r), Qe.delete(m)), w || m.removeAttribute(n);
    }), Ct--, Ct || (Te = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), Je = {});
  };
}, Ii = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = $i(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), Li(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, ct = "Dialog", [On] = go(ct), [Bi, ne] = On(ct), An = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: l = !0
  } = e, i = u.useRef(null), d = u.useRef(null), [c, f] = Co({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: ct
  });
  return /* @__PURE__ */ s(
    Bi,
    {
      scope: t,
      triggerRef: i,
      contentRef: d,
      contentId: ht(),
      titleId: ht(),
      descriptionId: ht(),
      open: c,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: l,
      children: n
    }
  );
};
An.displayName = ct;
var kn = "DialogTrigger", $n = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(kn, n), o = _e(t, a.triggerRef);
    return /* @__PURE__ */ s(
      le.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": $t(a.open),
        ...r,
        ref: o,
        onClick: ve(e.onClick, a.onOpenToggle)
      }
    );
  }
);
$n.displayName = kn;
var At = "DialogPortal", [Fi, Mn] = On(At, {
  forceMount: void 0
}), Ln = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: a } = e, o = ne(At, t);
  return /* @__PURE__ */ s(Fi, { scope: t, forceMount: n, children: u.Children.map(r, (l) => /* @__PURE__ */ s(st, { present: n || o.open, children: /* @__PURE__ */ s(_n, { asChild: !0, container: a, children: l }) })) });
};
Ln.displayName = At;
var it = "DialogOverlay", In = u.forwardRef(
  (e, t) => {
    const n = Mn(it, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = ne(it, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ s(st, { present: r || o.open, children: /* @__PURE__ */ s(ji, { ...a, ref: t }) }) : null;
  }
);
In.displayName = it;
var Wi = /* @__PURE__ */ hn("DialogOverlay.RemoveScroll"), ji = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(it, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ s(xn, { as: Wi, allowPinchZoom: !0, shards: [a.contentRef], children: /* @__PURE__ */ s(
        le.div,
        {
          "data-state": $t(a.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), be = "DialogContent", Bn = u.forwardRef(
  (e, t) => {
    const n = Mn(be, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = ne(be, e.__scopeDialog);
    return /* @__PURE__ */ s(st, { present: r || o.open, children: o.modal ? /* @__PURE__ */ s(Ui, { ...a, ref: t }) : /* @__PURE__ */ s(Hi, { ...a, ref: t }) });
  }
);
Bn.displayName = be;
var Ui = u.forwardRef(
  (e, t) => {
    const n = ne(be, e.__scopeDialog), r = u.useRef(null), a = _e(t, n.contentRef, r);
    return u.useEffect(() => {
      const o = r.current;
      if (o) return Ii(o);
    }, []), /* @__PURE__ */ s(
      Fn,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ve(e.onCloseAutoFocus, (o) => {
          var l;
          o.preventDefault(), (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: ve(e.onPointerDownOutside, (o) => {
          const l = o.detail.originalEvent, i = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || i) && o.preventDefault();
        }),
        onFocusOutside: ve(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), Hi = u.forwardRef(
  (e, t) => {
    const n = ne(be, e.__scopeDialog), r = u.useRef(!1), a = u.useRef(!1);
    return /* @__PURE__ */ s(
      Fn,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var l, i;
          (l = e.onCloseAutoFocus) == null || l.call(e, o), o.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), o.preventDefault()), r.current = !1, a.current = !1;
        },
        onInteractOutside: (o) => {
          var d, c;
          (d = e.onInteractOutside) == null || d.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const l = o.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(l)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault();
        }
      }
    );
  }
), Fn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: o, ...l } = e, i = ne(be, n), d = u.useRef(null), c = _e(t, d);
    return Zo(), /* @__PURE__ */ C(ot, { children: [
      /* @__PURE__ */ s(
        yn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: a,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ s(
            gn,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": $t(i.open),
              ...l,
              ref: c,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ C(ot, { children: [
        /* @__PURE__ */ s(zi, { titleId: i.titleId }),
        /* @__PURE__ */ s(qi, { contentRef: d, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), kt = "DialogTitle", Wn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(kt, n);
    return /* @__PURE__ */ s(le.h2, { id: a.titleId, ...r, ref: t });
  }
);
Wn.displayName = kt;
var jn = "DialogDescription", Un = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(jn, n);
    return /* @__PURE__ */ s(le.p, { id: a.descriptionId, ...r, ref: t });
  }
);
Un.displayName = jn;
var Hn = "DialogClose", zn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(Hn, n);
    return /* @__PURE__ */ s(
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
zn.displayName = Hn;
function $t(e) {
  return e ? "open" : "closed";
}
var Vn = "DialogTitleWarning", [Wl, qn] = po(Vn, {
  contentName: be,
  titleName: kt,
  docsSlug: "dialog"
}), zi = ({ titleId: e }) => {
  const t = qn(Vn), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Vi = "DialogDescriptionWarning", qi = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${qn(Vi).contentName}}.`;
  return u.useEffect(() => {
    var o;
    const a = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && a && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Yi = An, Gi = $n, Xi = Ln, Ki = In, Zi = Bn, Qi = Wn, Ji = Un, es = zn;
function ts(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Yn = _.createContext({
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
}), ze = () => {
  const e = _.useContext(Yn);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
ts(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function ns() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function rs() {
  return Mt(/^Mac/);
}
function as() {
  return Mt(/^iPhone/);
}
function ln() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function os() {
  return Mt(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  rs() && navigator.maxTouchPoints > 1;
}
function Gn() {
  return as() || os();
}
function Mt(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const is = 24, ss = typeof window < "u" ? fn : xe;
function cn(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const Et = typeof document < "u" && window.visualViewport;
function un(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Xn(e) {
  for (un(e) && (e = e.parentElement); e && !un(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const ls = /* @__PURE__ */ new Set([
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
let et = 0, St;
function cs(e = {}) {
  let { isDisabled: t } = e;
  ss(() => {
    if (!t)
      return et++, et === 1 && Gn() && (St = us()), () => {
        et--, et === 0 && (St == null || St());
      };
  }, [
    t
  ]);
}
function us() {
  let e, t = 0, n = (m) => {
    e = Xn(m.target), !(e === document.documentElement && e === document.body) && (t = m.changedTouches[0].pageY);
  }, r = (m) => {
    if (!e || e === document.documentElement || e === document.body) {
      m.preventDefault();
      return;
    }
    let h = m.changedTouches[0].pageY, w = e.scrollTop, S = e.scrollHeight - e.clientHeight;
    S !== 0 && ((w <= 0 && h > t || w >= S && h < t) && m.preventDefault(), t = h);
  }, a = (m) => {
    let h = m.target;
    Pt(h) && h !== document.activeElement && (m.preventDefault(), h.style.transform = "translateY(-2000px)", h.focus(), requestAnimationFrame(() => {
      h.style.transform = "";
    }));
  }, o = (m) => {
    let h = m.target;
    Pt(h) && (h.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      h.style.transform = "", Et && (Et.height < window.innerHeight ? requestAnimationFrame(() => {
        dn(h);
      }) : Et.addEventListener("resize", () => dn(h), {
        once: !0
      }));
    }));
  }, l = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, d = window.pageYOffset, c = cn(ds(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let f = cn(We(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), We(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), We(document, "touchend", a, {
    passive: !1,
    capture: !0
  }), We(document, "focus", o, !0), We(window, "scroll", l));
  return () => {
    c(), f(), window.scrollTo(i, d);
  };
}
function ds(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function We(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function dn(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Xn(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = e.getBoundingClientRect().bottom;
      const l = n.getBoundingClientRect().bottom + is;
      o > l && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function Pt(e) {
  return e instanceof HTMLInputElement && !ls.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function fs(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ms(...e) {
  return (t) => e.forEach((n) => fs(n, t));
}
function Kn(...e) {
  return u.useCallback(ms(...e), e);
}
const Zn = /* @__PURE__ */ new WeakMap();
function H(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([a, o]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, o);
      return;
    }
    r[a] = e.style[a], e.style[a] = o;
  }), !n && Zn.set(e, r);
}
function vs(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Zn.get(e);
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
function tt(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let a = r.match(/^matrix3d\((.+)\)$/);
  return a ? parseFloat(a[1].split(", ")[W(t) ? 13 : 12]) : (a = r.match(/^matrix\((.+)\)$/), a ? parseFloat(a[1].split(", ")[W(t) ? 5 : 4]) : null);
}
function hs(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Nt(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function ps(...e) {
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
}, Qn = 0.4, gs = 0.25, ws = 100, Jn = 8, ge = 16, Ot = 26, Rt = "vaul-dragging";
function er(e) {
  const t = _.useRef(e);
  return _.useEffect(() => {
    t.current = e;
  }), _.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function ys({ defaultProp: e, onChange: t }) {
  const n = _.useState(e), [r] = n, a = _.useRef(r), o = er(t);
  return _.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [
    r,
    a,
    o
  ]), n;
}
function tr({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = ys({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, l = o ? e : r, i = er(n), d = _.useCallback((c) => {
    if (o) {
      const m = typeof c == "function" ? c(e) : c;
      m !== e && i(m);
    } else
      a(c);
  }, [
    o,
    e,
    a,
    i
  ]);
  return [
    l,
    d
  ];
}
function bs({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: a, fadeFromIndex: o, onSnapPointChange: l, direction: i = "bottom", container: d, snapToSequentialPoint: c }) {
  const [f, m] = tr({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [h, w] = _.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  _.useEffect(() => {
    function b() {
      w({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, []);
  const S = _.useMemo(() => f === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    f
  ]), v = _.useMemo(() => {
    var b;
    return (b = n == null ? void 0 : n.findIndex((P) => P === f)) != null ? b : null;
  }, [
    n,
    f
  ]), g = n && n.length > 0 && (o || o === 0) && !Number.isNaN(o) && n[o] === f || !n, p = _.useMemo(() => {
    const b = d ? {
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
        const T = I ? B : h ? x * b.height : 0;
        return h ? i === "bottom" ? b.height - T : -b.height + T : T;
      }
      const q = I ? B : h ? x * b.width : 0;
      return h ? i === "right" ? b.width - q : -b.width + q : q;
    })) != null ? P : [];
  }, [
    n,
    h,
    d
  ]), E = _.useMemo(() => v !== null ? p == null ? void 0 : p[v] : null, [
    p,
    v
  ]), N = _.useCallback((b) => {
    var P;
    const x = (P = p == null ? void 0 : p.findIndex((I) => I === b)) != null ? P : null;
    l(x), H(r.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(i) ? `translate3d(0, ${b}px, 0)` : `translate3d(${b}px, 0, 0)`
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
      var b;
      const P = (b = n == null ? void 0 : n.findIndex((x) => x === e || x === f)) != null ? b : -1;
      p && P !== -1 && typeof p[P] == "number" && N(p[P]);
    }
  }, [
    f,
    e,
    n,
    p,
    N
  ]);
  function y({ draggedDistance: b, closeDrawer: P, velocity: x, dismissible: I }) {
    if (o === void 0) return;
    const B = i === "bottom" || i === "right" ? (E ?? 0) - b : (E ?? 0) + b, q = v === o - 1, T = v === 0, K = b > 0;
    if (q && H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), !c && x > 2 && !K) {
      I ? P() : N(p[0]);
      return;
    }
    if (!c && x > 2 && K && p && n) {
      N(p[n.length - 1]);
      return;
    }
    const Y = p == null ? void 0 : p.reduce((V, ie) => typeof V != "number" || typeof ie != "number" ? V : Math.abs(ie - B) < Math.abs(V - B) ? ie : V), Z = W(i) ? window.innerHeight : window.innerWidth;
    if (x > Qn && Math.abs(b) < Z * 0.4) {
      const V = K ? 1 : -1;
      if (V > 0 && S && n) {
        N(p[n.length - 1]);
        return;
      }
      if (T && V < 0 && I && P(), v === null) return;
      N(p[v + V]);
      return;
    }
    N(Y);
  }
  function O({ draggedDistance: b }) {
    if (E === null) return;
    const P = i === "bottom" || i === "right" ? E - b : E + b;
    (i === "bottom" || i === "right") && P < p[p.length - 1] || (i === "top" || i === "left") && P > p[p.length - 1] || H(r.current, {
      transform: W(i) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function j(b, P) {
    if (!n || typeof v != "number" || !p || o === void 0) return null;
    const x = v === o - 1;
    if (v >= o && P)
      return 0;
    if (x && !P) return 1;
    if (!g && !x) return null;
    const B = x ? v + 1 : v - 1, q = x ? p[B] - p[B - 1] : p[B + 1] - p[B], T = b / Math.abs(q);
    return x ? 1 - T : T;
  }
  return {
    isLastSnapPoint: S,
    activeSnapPoint: f,
    shouldFade: g,
    getPercentageDragged: j,
    setActiveSnapPoint: m,
    activeSnapPointIndex: v,
    onRelease: y,
    onDrag: O,
    snapPointsOffset: p
  };
}
const _s = () => () => {
};
function Cs() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: a } = ze(), o = _.useRef(null), l = yr(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - Ot) / window.innerWidth;
  }
  _.useEffect(() => {
    if (t && n) {
      o.current && clearTimeout(o.current);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d) return;
      ps(r && !a ? Nt(document.body, {
        background: "black"
      }) : _s, Nt(d, {
        transformOrigin: W(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${L.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
      }));
      const c = Nt(d, {
        borderRadius: `${Jn}px`,
        overflow: "hidden",
        ...W(e) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        c(), o.current = window.setTimeout(() => {
          l ? document.body.style.background = l : document.body.style.removeProperty("background");
        }, L.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    l
  ]);
}
let je = null;
function Es({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: a, noBodyStyles: o }) {
  const [l, i] = _.useState(() => typeof window < "u" ? window.location.href : ""), d = _.useRef(0), c = _.useCallback(() => {
    if (ln() && je === null && e && !o) {
      je = {
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
        const w = h - window.innerHeight;
        w && d.current >= h && (document.body.style.top = `${-(d.current + w)}px`);
      }), 300);
    }
  }, [
    e
  ]), f = _.useCallback(() => {
    if (ln() && je !== null && !o) {
      const m = -parseInt(document.body.style.top, 10), h = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, je), window.requestAnimationFrame(() => {
        if (a && l !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(h, m);
      }), je = null;
    }
  }, [
    l
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
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && c(), t || window.setTimeout(() => {
      f();
    }, 500)) : f());
  }, [
    e,
    r,
    l,
    t,
    n,
    c,
    f
  ]), {
    restorePositionSetting: f
  };
}
function Ss({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: a, snapPoints: o, shouldScaleBackground: l = !1, setBackgroundColorOnScale: i = !0, closeThreshold: d = gs, scrollLockTimeout: c = ws, dismissible: f = !0, handleOnly: m = !1, fadeFromIndex: h = o && o.length - 1, activeSnapPoint: w, setActiveSnapPoint: S, fixed: v, modal: g = !0, onClose: p, nested: E, noBodyStyles: N = !1, direction: y = "bottom", defaultOpen: O = !1, disablePreventScroll: j = !0, snapToSequentialPoint: b = !1, preventScrollRestoration: P = !1, repositionInputs: x = !0, onAnimationEnd: I, container: B, autoFocus: q = !1 }) {
  var T, K;
  const [Y = !1, Z] = tr({
    defaultProp: O,
    prop: e,
    onChange: (R) => {
      t == null || t(R), !R && !E && ur(), setTimeout(() => {
        I == null || I(R);
      }, L.DURATION * 1e3), R && !g && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), R || (document.body.style.pointerEvents = "auto");
    }
  }), [V, ie] = _.useState(!1), [ce, Ae] = _.useState(!1), [ar, Lt] = _.useState(!1), Ce = _.useRef(null), Ve = _.useRef(null), ut = _.useRef(null), dt = _.useRef(null), ke = _.useRef(null), $e = _.useRef(!1), ft = _.useRef(null), mt = _.useRef(0), Ee = _.useRef(!1), It = _.useRef(!O), Bt = _.useRef(0), D = _.useRef(null), Ft = _.useRef(((T = D.current) == null ? void 0 : T.getBoundingClientRect().height) || 0), Wt = _.useRef(((K = D.current) == null ? void 0 : K.getBoundingClientRect().width) || 0), vt = _.useRef(0), or = _.useCallback((R) => {
    o && R === Me.length - 1 && (Ve.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: ir, activeSnapPointIndex: Se, setActiveSnapPoint: jt, onRelease: sr, snapPointsOffset: Me, onDrag: lr, shouldFade: Ut, getPercentageDragged: cr } = bs({
    snapPoints: o,
    activeSnapPointProp: w,
    setActiveSnapPointProp: S,
    drawerRef: D,
    fadeFromIndex: h,
    overlayRef: Ce,
    onSnapPointChange: or,
    direction: y,
    container: B,
    snapToSequentialPoint: b
  });
  cs({
    isDisabled: !Y || ce || !g || ar || !V || !x || !j
  });
  const { restorePositionSetting: ur } = Es({
    isOpen: Y,
    modal: g,
    nested: E ?? !1,
    hasBeenOpened: V,
    preventScrollRestoration: P,
    noBodyStyles: N
  });
  function qe() {
    return (window.innerWidth - Ot) / window.innerWidth;
  }
  function dr(R) {
    var $, M;
    !f && !o || D.current && !D.current.contains(R.target) || (Ft.current = (($ = D.current) == null ? void 0 : $.getBoundingClientRect().height) || 0, Wt.current = ((M = D.current) == null ? void 0 : M.getBoundingClientRect().width) || 0, Ae(!0), ut.current = /* @__PURE__ */ new Date(), Gn() && window.addEventListener("touchend", () => $e.current = !1, {
      once: !0
    }), R.target.setPointerCapture(R.pointerId), mt.current = W(y) ? R.pageY : R.pageX);
  }
  function Ht(R, $) {
    var M;
    let A = R;
    const F = (M = window.getSelection()) == null ? void 0 : M.toString(), X = D.current ? tt(D.current, y) : null, G = /* @__PURE__ */ new Date();
    if (A.tagName === "SELECT" || A.hasAttribute("data-vaul-no-drag") || A.closest("[data-vaul-no-drag]"))
      return !1;
    if (y === "right" || y === "left")
      return !0;
    if (Ve.current && G.getTime() - Ve.current.getTime() < 500)
      return !1;
    if (X !== null && (y === "bottom" ? X > 0 : X < 0))
      return !0;
    if (F && F.length > 0)
      return !1;
    if (ke.current && G.getTime() - ke.current.getTime() < c && X === 0 || $)
      return ke.current = G, !1;
    for (; A; ) {
      if (A.scrollHeight > A.clientHeight) {
        if (A.scrollTop !== 0)
          return ke.current = /* @__PURE__ */ new Date(), !1;
        if (A.getAttribute("role") === "dialog")
          return !0;
      }
      A = A.parentNode;
    }
    return !0;
  }
  function fr(R) {
    if (D.current && ce) {
      const $ = y === "bottom" || y === "right" ? 1 : -1, M = (mt.current - (W(y) ? R.pageY : R.pageX)) * $, A = M > 0, F = o && !f && !A;
      if (F && Se === 0) return;
      const X = Math.abs(M), G = document.querySelector("[data-vaul-drawer-wrapper]"), ue = y === "bottom" || y === "top" ? Ft.current : Wt.current;
      let Q = X / ue;
      const he = cr(X, A);
      if (he !== null && (Q = he), F && Q >= 1 || !$e.current && !Ht(R.target, A)) return;
      if (D.current.classList.add(Rt), $e.current = !0, H(D.current, {
        transition: "none"
      }), H(Ce.current, {
        transition: "none"
      }), o && lr({
        draggedDistance: M
      }), A && !o) {
        const re = hs(M), Ye = Math.min(re * -1, 0) * $;
        H(D.current, {
          transform: W(y) ? `translate3d(0, ${Ye}px, 0)` : `translate3d(${Ye}px, 0, 0)`
        });
        return;
      }
      const de = 1 - Q;
      if ((Ut || h && Se === h - 1) && (r == null || r(R, Q), H(Ce.current, {
        opacity: `${de}`,
        transition: "none"
      }, !0)), G && Ce.current && l) {
        const re = Math.min(qe() + Q * (1 - qe()), 1), Ye = 8 - Q * 8, Vt = Math.max(0, 14 - Q * 14);
        H(G, {
          borderRadius: `${Ye}px`,
          transform: W(y) ? `scale(${re}) translate3d(0, ${Vt}px, 0)` : `scale(${re}) translate3d(${Vt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!o) {
        const re = X * $;
        H(D.current, {
          transform: W(y) ? `translate3d(0, ${re}px, 0)` : `translate3d(${re}px, 0, 0)`
        });
      }
    }
  }
  _.useEffect(() => {
    window.requestAnimationFrame(() => {
      It.current = !0;
    });
  }, []), _.useEffect(() => {
    var R;
    function $() {
      if (!D.current || !x) return;
      const M = document.activeElement;
      if (Pt(M) || Ee.current) {
        var A;
        const F = ((A = window.visualViewport) == null ? void 0 : A.height) || 0, X = window.innerHeight;
        let G = X - F;
        const ue = D.current.getBoundingClientRect().height || 0, Q = ue > X * 0.8;
        vt.current || (vt.current = ue);
        const he = D.current.getBoundingClientRect().top;
        if (Math.abs(Bt.current - G) > 60 && (Ee.current = !Ee.current), o && o.length > 0 && Me && Se) {
          const de = Me[Se] || 0;
          G += de;
        }
        if (Bt.current = G, ue > F || Ee.current) {
          const de = D.current.getBoundingClientRect().height;
          let re = de;
          de > F && (re = F - (Q ? he : Ot)), v ? D.current.style.height = `${de - Math.max(G, 0)}px` : D.current.style.height = `${Math.max(re, F - he)}px`;
        } else ns() || (D.current.style.height = `${vt.current}px`);
        o && o.length > 0 && !Ee.current ? D.current.style.bottom = "0px" : D.current.style.bottom = `${Math.max(G, 0)}px`;
      }
    }
    return (R = window.visualViewport) == null || R.addEventListener("resize", $), () => {
      var M;
      return (M = window.visualViewport) == null ? void 0 : M.removeEventListener("resize", $);
    };
  }, [
    Se,
    o,
    Me
  ]);
  function Le(R) {
    mr(), p == null || p(), R || Z(!1), setTimeout(() => {
      o && jt(o[0]);
    }, L.DURATION * 1e3);
  }
  function zt() {
    if (!D.current) return;
    const R = document.querySelector("[data-vaul-drawer-wrapper]"), $ = tt(D.current, y);
    H(D.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), H(Ce.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), l && $ && $ > 0 && Y && H(R, {
      borderRadius: `${Jn}px`,
      overflow: "hidden",
      ...W(y) ? {
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
  function mr() {
    !ce || !D.current || (D.current.classList.remove(Rt), $e.current = !1, Ae(!1), dt.current = /* @__PURE__ */ new Date());
  }
  function vr(R) {
    if (!ce || !D.current) return;
    D.current.classList.remove(Rt), $e.current = !1, Ae(!1), dt.current = /* @__PURE__ */ new Date();
    const $ = tt(D.current, y);
    if (!R || !Ht(R.target, !1) || !$ || Number.isNaN($) || ut.current === null) return;
    const M = dt.current.getTime() - ut.current.getTime(), A = mt.current - (W(y) ? R.pageY : R.pageX), F = Math.abs(A) / M;
    if (F > 0.05 && (Lt(!0), setTimeout(() => {
      Lt(!1);
    }, 200)), o) {
      sr({
        draggedDistance: A * (y === "bottom" || y === "right" ? 1 : -1),
        closeDrawer: Le,
        velocity: F,
        dismissible: f
      }), a == null || a(R, !0);
      return;
    }
    if (y === "bottom" || y === "right" ? A > 0 : A < 0) {
      zt(), a == null || a(R, !0);
      return;
    }
    if (F > Qn) {
      Le(), a == null || a(R, !1);
      return;
    }
    var X;
    const G = Math.min((X = D.current.getBoundingClientRect().height) != null ? X : 0, window.innerHeight);
    var ue;
    const Q = Math.min((ue = D.current.getBoundingClientRect().width) != null ? ue : 0, window.innerWidth), he = y === "left" || y === "right";
    if (Math.abs($) >= (he ? Q : G) * d) {
      Le(), a == null || a(R, !1);
      return;
    }
    a == null || a(R, !0), zt();
  }
  _.useEffect(() => (Y && (H(document.documentElement, {
    scrollBehavior: "auto"
  }), Ve.current = /* @__PURE__ */ new Date()), () => {
    vs(document.documentElement, "scrollBehavior");
  }), [
    Y
  ]);
  function hr(R) {
    const $ = R ? (window.innerWidth - ge) / window.innerWidth : 1, M = R ? -ge : 0;
    ft.current && window.clearTimeout(ft.current), H(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(y) ? `scale(${$}) translate3d(0, ${M}px, 0)` : `scale(${$}) translate3d(${M}px, 0, 0)`
    }), !R && D.current && (ft.current = setTimeout(() => {
      const A = tt(D.current, y);
      H(D.current, {
        transition: "none",
        transform: W(y) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
      });
    }, 500));
  }
  function pr(R, $) {
    if ($ < 0) return;
    const M = (window.innerWidth - ge) / window.innerWidth, A = M + $ * (1 - M), F = -ge + $ * ge;
    H(D.current, {
      transform: W(y) ? `scale(${A}) translate3d(0, ${F}px, 0)` : `scale(${A}) translate3d(${F}px, 0, 0)`,
      transition: "none"
    });
  }
  function gr(R, $) {
    const M = W(y) ? window.innerHeight : window.innerWidth, A = $ ? (M - ge) / M : 1, F = $ ? -ge : 0;
    $ && H(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(y) ? `scale(${A}) translate3d(0, ${F}px, 0)` : `scale(${A}) translate3d(${F}px, 0, 0)`
    });
  }
  return _.useEffect(() => {
    g || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    g
  ]), /* @__PURE__ */ _.createElement(Yi, {
    defaultOpen: O,
    onOpenChange: (R) => {
      !f && !R || (R ? ie(!0) : Le(!0), Z(R));
    },
    open: Y
  }, /* @__PURE__ */ _.createElement(Yn.Provider, {
    value: {
      activeSnapPoint: ir,
      snapPoints: o,
      setActiveSnapPoint: jt,
      drawerRef: D,
      overlayRef: Ce,
      onOpenChange: t,
      onPress: dr,
      onRelease: vr,
      onDrag: fr,
      dismissible: f,
      shouldAnimate: It,
      handleOnly: m,
      isOpen: Y,
      isDragging: ce,
      shouldFade: Ut,
      closeDrawer: Le,
      onNestedDrag: pr,
      onNestedOpenChange: hr,
      onNestedRelease: gr,
      keyboardIsOpen: Ee,
      modal: g,
      snapPointsOffset: Me,
      activeSnapPointIndex: Se,
      direction: y,
      shouldScaleBackground: l,
      setBackgroundColorOnScale: i,
      noBodyStyles: N,
      container: B,
      autoFocus: q
    }
  }, n));
}
const nr = /* @__PURE__ */ _.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: a, shouldFade: o, isOpen: l, modal: i, shouldAnimate: d } = ze(), c = Kn(t, n), f = r && r.length > 0;
  if (!i)
    return null;
  const m = _.useCallback((h) => a(h), [
    a
  ]);
  return /* @__PURE__ */ _.createElement(Ki, {
    onMouseUp: m,
    ref: c,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": l && f ? "true" : "false",
    "data-vaul-snap-points-overlay": l && o ? "true" : "false",
    "data-vaul-animate": d != null && d.current ? "true" : "false",
    ...e
  });
});
nr.displayName = "Drawer.Overlay";
const rr = /* @__PURE__ */ _.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, a) {
  const { drawerRef: o, onPress: l, onRelease: i, onDrag: d, keyboardIsOpen: c, snapPointsOffset: f, activeSnapPointIndex: m, modal: h, isOpen: w, direction: S, snapPoints: v, container: g, handleOnly: p, shouldAnimate: E, autoFocus: N } = ze(), [y, O] = _.useState(!1), j = Kn(a, o), b = _.useRef(null), P = _.useRef(null), x = _.useRef(!1), I = v && v.length > 0;
  Cs();
  const B = (T, K, Y = 0) => {
    if (x.current) return !0;
    const Z = Math.abs(T.y), V = Math.abs(T.x), ie = V > Z, ce = [
      "bottom",
      "right"
    ].includes(K) ? 1 : -1;
    if (K === "left" || K === "right") {
      if (!(T.x * ce < 0) && V >= 0 && V <= Y)
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
  function q(T) {
    b.current = null, x.current = !1, i(T);
  }
  return /* @__PURE__ */ _.createElement(Zi, {
    "data-vaul-drawer-direction": S,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": y ? "true" : "false",
    "data-vaul-snap-points": w && I ? "true" : "false",
    "data-vaul-custom-container": g ? "true" : "false",
    "data-vaul-animate": E != null && E.current ? "true" : "false",
    ...r,
    ref: j,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[m ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (T) => {
      p || (r.onPointerDown == null || r.onPointerDown.call(r, T), b.current = {
        x: T.pageX,
        y: T.pageY
      }, l(T));
    },
    onOpenAutoFocus: (T) => {
      n == null || n(T), N || T.preventDefault();
    },
    onPointerDownOutside: (T) => {
      if (e == null || e(T), !h || T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      c.current && (c.current = !1);
    },
    onFocusOutside: (T) => {
      if (!h) {
        T.preventDefault();
        return;
      }
    },
    onPointerMove: (T) => {
      if (P.current = T, p || (r.onPointerMove == null || r.onPointerMove.call(r, T), !b.current)) return;
      const K = T.pageY - b.current.y, Y = T.pageX - b.current.x, Z = T.pointerType === "touch" ? 10 : 2;
      B({
        x: Y,
        y: K
      }, S, Z) ? d(T) : (Math.abs(Y) > Z || Math.abs(K) > Z) && (b.current = null);
    },
    onPointerUp: (T) => {
      r.onPointerUp == null || r.onPointerUp.call(r, T), b.current = null, x.current = !1, i(T);
    },
    onPointerOut: (T) => {
      r.onPointerOut == null || r.onPointerOut.call(r, T), q(P.current);
    },
    onContextMenu: (T) => {
      r.onContextMenu == null || r.onContextMenu.call(r, T), P.current && q(P.current);
    }
  });
});
rr.displayName = "Drawer.Content";
const Ns = 250, Rs = 120, Ts = /* @__PURE__ */ _.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: a, isDragging: o, snapPoints: l, activeSnapPoint: i, setActiveSnapPoint: d, dismissible: c, handleOnly: f, isOpen: m, onPress: h, onDrag: w } = ze(), S = _.useRef(null), v = _.useRef(!1);
  function g() {
    if (v.current) {
      N();
      return;
    }
    window.setTimeout(() => {
      p();
    }, Rs);
  }
  function p() {
    if (o || e || v.current) {
      N();
      return;
    }
    if (N(), !l || l.length === 0) {
      c || a();
      return;
    }
    if (i === l[l.length - 1] && c) {
      a();
      return;
    }
    const O = l.findIndex((b) => b === i);
    if (O === -1) return;
    const j = l[O + 1];
    d(j);
  }
  function E() {
    S.current = window.setTimeout(() => {
      v.current = !0;
    }, Ns);
  }
  function N() {
    S.current && window.clearTimeout(S.current), v.current = !1;
  }
  return /* @__PURE__ */ _.createElement("div", {
    onClick: g,
    onPointerCancel: N,
    onPointerDown: (y) => {
      f && h(y), E();
    },
    onPointerMove: (y) => {
      f && w(y);
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
Ts.displayName = "Drawer.Handle";
function Ds(e) {
  const t = ze(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ _.createElement(Xi, {
    container: n,
    ...r
  });
}
const k = {
  Root: Ss,
  Content: rr,
  Overlay: nr,
  Trigger: Gi,
  Portal: Ds,
  Close: es,
  Title: Qi,
  Description: Ji
}, xs = "_overlay_fvui9_3", Ps = "_content_fvui9_10", Os = "_grabber_fvui9_34", As = "_headline_fvui9_45", ks = "_subhead_fvui9_57", $s = "_callout_fvui9_69", Ms = "_calloutLabel_fvui9_79", Ls = "_calloutRow_fvui9_88", Is = "_calloutGross_fvui9_94", Bs = "_calloutArrow_fvui9_102", Fs = "_calloutNet_fvui9_106", Ws = "_features_fvui9_116", js = "_divider_fvui9_125", Us = "_priceRow_fvui9_133", Hs = "_price_fvui9_133", zs = "_priceNote_fvui9_148", Vs = "_restore_fvui9_158", z = {
  overlay: xs,
  content: Ps,
  grabber: Os,
  headline: As,
  subhead: ks,
  callout: $s,
  calloutLabel: Ms,
  calloutRow: Ls,
  calloutGross: Is,
  calloutArrow: Bs,
  calloutNet: Fs,
  features: Ws,
  divider: js,
  priceRow: Us,
  price: Hs,
  priceNote: zs,
  restore: Vs
}, qs = [
  { title: "Bonus & overtime modelling", description: "Model any additional income", state: "active" },
  { title: "Marginal tax insight", description: "See what your next £1 is worth", state: "active" },
  { title: "Salary comparison", description: "Coming soon", state: "inactive" }
];
function jl({
  open: e,
  onOpenChange: t,
  trigger: n,
  priceFormatted: r,
  priceNote: a = "one-off · no subscription",
  features: o = qs,
  onPurchase: l,
  onRestore: i,
  isPurchasing: d = !1
}) {
  return /* @__PURE__ */ C(k.Root, { open: e, onOpenChange: t, children: [
    n && /* @__PURE__ */ s(k.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C(k.Portal, { children: [
      /* @__PURE__ */ s(k.Overlay, { className: z.overlay }),
      /* @__PURE__ */ C(k.Content, { className: z.content, "aria-label": "Unlock Netti Pro", children: [
        /* @__PURE__ */ s("div", { className: z.grabber, "aria-hidden": "true" }),
        /* @__PURE__ */ s(k.Title, { className: z.headline, children: "Unlock Netti Pro" }),
        /* @__PURE__ */ s(k.Description, { className: z.subhead, children: "See what you actually keep from your bonus, overtime, and every extra £1 you earn." }),
        /* @__PURE__ */ C("div", { className: z.callout, "aria-label": "Example: £5,000 bonus", children: [
          /* @__PURE__ */ s("span", { className: z.calloutLabel, children: "EXAMPLE  ·  £5,000 BONUS" }),
          /* @__PURE__ */ C("div", { className: z.calloutRow, children: [
            /* @__PURE__ */ s("span", { className: z.calloutGross, children: "£5,000 gross" }),
            /* @__PURE__ */ s("span", { className: z.calloutArrow, "aria-hidden": "true", children: "→" }),
            /* @__PURE__ */ s("span", { className: z.calloutNet, children: "£3,400 take-home" })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { className: z.features, role: "list", "aria-label": "Included features", children: o.map((c, f) => /* @__PURE__ */ s("div", { role: "listitem", children: /* @__PURE__ */ s(Vr, { title: c.title, description: c.description, state: c.state }) }, f)) }),
        /* @__PURE__ */ s("div", { className: z.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ C("div", { className: z.priceRow, children: [
          /* @__PURE__ */ s("span", { className: z.price, children: r }),
          a && /* @__PURE__ */ s("span", { className: z.priceNote, children: a })
        ] }),
        /* @__PURE__ */ s(
          Tt,
          {
            variant: "pro",
            size: "lg",
            fullWidth: !0,
            onClick: l,
            disabled: d,
            "aria-label": "Unlock Netti Pro",
            children: d ? "Unlocking…" : "Unlock Netti Pro"
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: z.restore,
            onClick: i,
            children: "Restore purchases"
          }
        )
      ] })
    ] })
  ] });
}
const Ys = "_overlay_qhbnf_6", Gs = "_content_qhbnf_13", Xs = "_grabber_qhbnf_33", Ks = "_title_qhbnf_42", Zs = "_list_qhbnf_58", Qs = "_divider_qhbnf_65", De = {
  overlay: Ys,
  content: Gs,
  grabber: Xs,
  title: Ks,
  list: Zs,
  divider: Qs
};
function Ul({
  open: e,
  onOpenChange: t,
  trigger: n,
  title: r = "Add additional income",
  types: a,
  onSelect: o
}) {
  return /* @__PURE__ */ C(k.Root, { open: e, onOpenChange: t, children: [
    n && /* @__PURE__ */ s(k.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C(k.Portal, { children: [
      /* @__PURE__ */ s(k.Overlay, { className: De.overlay }),
      /* @__PURE__ */ C(k.Content, { className: De.content, "aria-label": r, children: [
        /* @__PURE__ */ s("div", { className: De.grabber, "aria-hidden": "true" }),
        /* @__PURE__ */ s(k.Title, { className: De.title, children: r }),
        /* @__PURE__ */ s("div", { className: De.list, role: "list", children: a.map((l, i) => /* @__PURE__ */ C("div", { role: "listitem", children: [
          /* @__PURE__ */ s(
            la,
            {
              title: l.title,
              subtitle: l.subtitle,
              onClick: () => o(l.id)
            }
          ),
          i < a.length - 1 && /* @__PURE__ */ s("div", { className: De.divider, "aria-hidden": "true" })
        ] }, l.id)) })
      ] })
    ] })
  ] });
}
const Js = "_card_mp69k_9", el = "_left_mp69k_22", tl = "_label_mp69k_30", nl = "_amountRow_mp69k_37", rl = "_gross_mp69k_44", al = "_frequency_mp69k_50", ol = "_right_mp69k_57", il = "_periodLabel_mp69k_65", sl = "_periodAmount_mp69k_73", se = {
  card: Js,
  left: el,
  label: tl,
  amountRow: nl,
  gross: rl,
  frequency: al,
  right: ol,
  periodLabel: il,
  periodAmount: sl
};
function Hl({
  label: e = "Gross added",
  amountFormatted: t,
  frequency: n,
  periodLabel: r,
  periodAmountFormatted: a,
  className: o
}) {
  return /* @__PURE__ */ C("div", { className: [se.card, o ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ C("div", { className: se.left, children: [
      /* @__PURE__ */ s("span", { className: se.label, children: e }),
      /* @__PURE__ */ C("div", { className: se.amountRow, children: [
        /* @__PURE__ */ s("span", { className: se.gross, children: t }),
        /* @__PURE__ */ s("span", { className: se.frequency, children: `× ${n}` })
      ] })
    ] }),
    /* @__PURE__ */ C("div", { className: se.right, children: [
      /* @__PURE__ */ s("span", { className: se.periodLabel, children: r }),
      /* @__PURE__ */ s("span", { className: se.periodAmount, children: a })
    ] })
  ] });
}
const ll = "_card_sdoab_5", cl = "_header_sdoab_13", ul = "_title_sdoab_17", dl = "_subtitle_sdoab_27", nt = {
  card: ll,
  header: cl,
  title: ul,
  subtitle: dl
};
function zl({ children: e, title: t, subtitle: n, className: r }) {
  return /* @__PURE__ */ C("div", { className: [nt.card, r ?? ""].filter(Boolean).join(" "), children: [
    (t || n) && /* @__PURE__ */ C("div", { className: nt.header, children: [
      t && /* @__PURE__ */ s("h2", { className: nt.title, children: t }),
      n && /* @__PURE__ */ s("p", { className: nt.subtitle, children: n })
    ] }),
    e
  ] });
}
const fl = "_overlay_1ybzo_7", ml = "_content_1ybzo_14", vl = "_handle_1ybzo_35", hl = "_header_1ybzo_45", pl = "_body_1ybzo_49", gl = "_footer_1ybzo_56", wl = "_srOnly_1ybzo_62", ye = {
  overlay: fl,
  content: ml,
  handle: vl,
  header: hl,
  body: pl,
  footer: gl,
  srOnly: wl
}, yl = /* @__PURE__ */ s("div", { className: ye.handle, "aria-hidden": "true" });
function Vl({
  open: e,
  onOpenChange: t,
  trigger: n,
  header: r,
  children: a,
  footer: o,
  showHandle: l = !0,
  "aria-label": i = "Sheet",
  className: d,
  style: c
}) {
  const [f, m] = Oe(!1), h = e !== void 0, w = h ? e : f, S = br(
    (v) => {
      h ? t == null || t(v) : m(v);
    },
    [h, t]
  );
  return /* @__PURE__ */ C(k.Root, { open: w, onOpenChange: S, children: [
    n ? /* @__PURE__ */ s(k.Trigger, { asChild: !0, children: n }) : null,
    /* @__PURE__ */ C(k.Portal, { children: [
      /* @__PURE__ */ s(k.Overlay, { className: ye.overlay, style: c }),
      /* @__PURE__ */ C(
        k.Content,
        {
          className: [ye.content, d ?? ""].filter(Boolean).join(" "),
          style: c,
          "aria-label": i,
          children: [
            /* @__PURE__ */ s(k.Title, { className: ye.srOnly, children: i }),
            l ? yl : null,
            r ? /* @__PURE__ */ s("div", { className: ye.header, children: r }) : null,
            /* @__PURE__ */ s("div", { className: ye.body, children: a }),
            o ? /* @__PURE__ */ s("div", { className: ye.footer, children: o }) : null
          ]
        }
      )
    ] })
  ] });
}
const bl = "_overlay_q8ram_6", _l = "_content_q8ram_13", Cl = "_handle_q8ram_32", El = "_titleBar_q8ram_42", Sl = "_title_q8ram_42", Nl = "_titleSpacer_q8ram_58", Rl = "_back_q8ram_63", Tl = "_body_q8ram_89", Dl = "_footer_q8ram_97", xl = "_description_q8ram_101", ee = {
  overlay: bl,
  content: _l,
  handle: Cl,
  titleBar: El,
  title: Sl,
  titleSpacer: Nl,
  back: Rl,
  body: Tl,
  footer: Dl,
  description: xl
};
function ql({
  title: e,
  description: t,
  trigger: n,
  children: r,
  footer: a,
  open: o,
  onOpenChange: l,
  onBack: i,
  onOpen: d,
  onClose: c
}) {
  const [f, m] = Oe(!1), h = o !== void 0, w = h ? o : f, S = (v) => {
    h ? l == null || l(v) : m(v);
  };
  return xe(() => {
    w ? d == null || d() : c == null || c();
  }, [w]), /* @__PURE__ */ C(k.Root, { open: w, onOpenChange: S, children: [
    n && /* @__PURE__ */ s(k.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C(k.Portal, { children: [
      /* @__PURE__ */ s(k.Overlay, { className: ee.overlay }),
      /* @__PURE__ */ C(k.Content, { className: ee.content, "aria-label": e, children: [
        /* @__PURE__ */ s("div", { className: ee.handle, "aria-hidden": "true" }),
        e && /* @__PURE__ */ C("div", { className: ee.titleBar, children: [
          i ? /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: ee.back,
              onClick: i,
              "aria-label": "Back",
              children: /* @__PURE__ */ s("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ s("path", { d: "M15 18l-6-6 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            }
          ) : /* @__PURE__ */ s("div", { className: ee.titleSpacer }),
          /* @__PURE__ */ s(k.Title, { className: ee.title, children: e }),
          /* @__PURE__ */ s("div", { className: ee.titleSpacer })
        ] }),
        /* @__PURE__ */ C("div", { className: ee.body, children: [
          t && /* @__PURE__ */ s(k.Description, { className: ee.description, children: t }),
          r
        ] }),
        a && /* @__PURE__ */ s("div", { className: ee.footer, children: a })
      ] })
    ] })
  ] });
}
function Yl({
  title: e,
  open: t,
  onOpenChange: n,
  onBack: r,
  children: a,
  footer: o,
  hideClose: l,
  onOpen: i,
  onClose: d
}) {
  return xe(() => {
    t ? i == null || i() : d == null || d();
  }, [t]), t ? mn(
    /* @__PURE__ */ C("div", { className: "fss-root", children: [
      /* @__PURE__ */ C("div", { className: "fss-title-bar", children: [
        r ? /* @__PURE__ */ s("button", { type: "button", className: "fss-nav-btn", onClick: r, "aria-label": "Back", children: /* @__PURE__ */ s("svg", { viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ s("path", { d: "M15 18l-6-6 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) : /* @__PURE__ */ s("div", { className: "fss-spacer" }),
        e && /* @__PURE__ */ s("div", { className: "fss-title", children: e }),
        l ? /* @__PURE__ */ s("div", { className: "fss-spacer" }) : /* @__PURE__ */ s("button", { type: "button", className: "fss-nav-btn", onClick: () => n(!1), "aria-label": "Close", children: /* @__PURE__ */ s("svg", { viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ s("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
      ] }),
      /* @__PURE__ */ s("div", { className: `fss-body ${o ? "fss-body--with-footer" : "fss-body--no-footer"}`, children: a }),
      o && /* @__PURE__ */ s("div", { className: "fss-footer", children: o })
    ] }),
    document.body
  ) : null;
}
function Gl({ title: e, description: t, children: n }) {
  return /* @__PURE__ */ C(k.Root, { children: [
    /* @__PURE__ */ s(k.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C(k.Portal, { children: [
      /* @__PURE__ */ s(k.Overlay, { className: "drawer-overlay" }),
      /* @__PURE__ */ C(k.Content, { className: "info-sheet__content", children: [
        /* @__PURE__ */ C("div", { className: "info-sheet__header", children: [
          /* @__PURE__ */ s(k.Close, { className: "info-sheet__close", "aria-label": "Close", children: "×" }),
          /* @__PURE__ */ s("div", { className: "info-sheet__title", children: e }),
          /* @__PURE__ */ s("div", { className: "info-sheet__spacer" })
        ] }),
        /* @__PURE__ */ s("p", { className: "info-sheet__description", children: t })
      ] })
    ] })
  ] });
}
function Xl({ width: e = 72, height: t = 24, className: n }) {
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
        /* @__PURE__ */ s("g", { transform: "translate(0, 6.75)", children: /* @__PURE__ */ s("path", { d: "M7.88672 0.02132C8.01505 -0.0034738 8.13972 -0.00900585 8.25977 0.0174138V0.0183903C12.4572 0.0449027 14.3739 1.92008 14.9072 3.02523C14.9634 3.11975 15.0191 3.21855 15.0713 3.32405C15.6332 4.39561 15.914 5.70387 15.9141 7.24691V16.0379C15.914 16.2735 15.8271 16.4661 15.6543 16.616C15.503 16.766 15.3196 16.8416 15.1035 16.8416H11.667C11.4292 16.8416 11.2343 16.7661 11.083 16.616C10.9319 16.4661 10.8565 16.2734 10.8564 16.0379V7.43929C10.8564 6.30371 10.5754 5.42502 10.0137 4.80355C9.54049 4.24056 8.86801 3.92334 7.99707 3.85335C7.07264 3.90282 6.36423 4.21966 5.87207 4.80355C5.31286 5.42044 5.03322 6.29332 5.0332 7.42073V15.9549C5.0332 16.1887 4.95792 16.3803 4.80762 16.5291C4.65708 16.678 4.46312 16.7527 4.22656 16.7528H0.806641C0.591553 16.7528 0.408373 16.678 0.257812 16.5291C0.0859755 16.3803 0 16.1888 0 15.9549V7.22933C1.29896e-05 5.69773 0.279653 4.39939 0.838867 3.33577C0.858076 3.29703 0.878568 3.25961 0.898438 3.22249H0.897461C0.901879 3.21373 0.907466 3.20503 0.912109 3.19612C0.935755 3.15273 0.959824 3.11043 0.984375 3.06917C1.0007 3.04187 1.01693 3.01346 1.03516 2.98519C1.19548 2.73126 1.37369 2.51766 1.56836 2.32991C2.58106 1.29448 4.5982 0.0871206 7.88672 0.02132Z", fill: "white" }) }),
        /* @__PURE__ */ s("g", { transform: "translate(19.21, 6.64)", children: /* @__PURE__ */ s("path", { d: "M8.23503 17.3596C5.74939 17.3596 3.77169 16.6738 2.30192 15.3022C0.853764 13.9306 0.0864571 11.9374 0 9.32276C0 9.15131 0 8.92628 0 8.64767C0 8.34762 0 8.11188 0 7.94042C0.0864571 6.29019 0.464707 4.8757 1.13475 3.69696C1.80479 2.49679 2.74501 1.58594 3.95541 0.964424C5.16581 0.321474 6.58154 0 8.20261 0C10.0182 0 11.5312 0.375053 12.7416 1.12516C13.9736 1.85384 14.8922 2.86112 15.4974 4.14702C16.1242 5.41149 16.4376 6.86884 16.4376 8.51908V9.25847C16.4376 9.47278 16.3512 9.65495 16.1783 9.80497C16.027 9.955 15.8433 10.03 15.6271 10.03H5.02532C5.02532 10.0514 5.02532 10.0943 5.02532 10.1586C5.02532 10.2015 5.02532 10.2443 5.02532 10.2872C5.04693 10.973 5.17661 11.6052 5.41437 12.1839C5.67374 12.7411 6.03038 13.1912 6.48428 13.5341C6.95979 13.877 7.52176 14.0484 8.17019 14.0484C8.71055 14.0484 9.15364 13.9734 9.49947 13.8234C9.8453 13.6734 10.1263 13.4912 10.3424 13.2769C10.5802 13.0626 10.7531 12.8804 10.8612 12.7304C11.0557 12.5161 11.207 12.3875 11.3151 12.3446C11.4448 12.2803 11.6393 12.2482 11.8986 12.2482H15.2705C15.4866 12.2482 15.6595 12.3125 15.7892 12.4411C15.9405 12.5482 16.0054 12.709 15.9837 12.9233C15.9621 13.2662 15.7784 13.6948 15.4326 14.2092C15.1084 14.7021 14.622 15.195 13.9736 15.688C13.3252 16.1595 12.5147 16.5559 11.542 16.8774C10.591 17.1989 9.48866 17.3596 8.23503 17.3596ZM5.02532 7.10459H11.3799V7.04029C11.3799 6.26875 11.2502 5.60437 10.9909 5.04715C10.7531 4.4685 10.3965 4.01843 9.92094 3.69696C9.44543 3.37548 8.87265 3.21475 8.20261 3.21475C7.53257 3.21475 6.95979 3.37548 6.48428 3.69696C6.00876 4.01843 5.64132 4.4685 5.38195 5.04715C5.14419 5.60437 5.02532 6.26875 5.02532 7.04029V7.10459Z", fill: "white" }) }),
        /* @__PURE__ */ s("g", { transform: "translate(38.96, 4.09)", children: /* @__PURE__ */ s("path", { d: "M2.8855 18.9771C3.83653 19.4058 4.98208 19.6201 6.32217 19.6201H9.14283C9.35898 19.6201 9.5427 19.5451 9.694 19.3951C9.84529 19.245 9.92094 19.0521 9.92094 18.8164V16.4375C9.92094 16.2232 9.84529 16.041 9.694 15.891C9.5427 15.741 9.35898 15.6659 9.14283 15.6659H6.77607C6.04119 15.6659 5.52244 15.4409 5.21984 14.9908C4.93886 14.5194 4.79836 13.8764 4.79836 13.062V6.87484H8.85104C9.06718 6.87484 9.2509 6.79983 9.4022 6.64981C9.5535 6.49978 9.62915 6.3069 9.62915 6.07115V3.88512C9.62915 3.64938 9.5535 3.45649 9.4022 3.30647C9.2509 3.15645 9.06718 3.08144 8.85104 3.08144H4.79836V0.803685C4.79836 0.567938 4.72271 0.375054 4.57141 0.225033C4.42011 0.0750109 4.22559 0 3.98783 0L0.810533 0.89017C0.594391 0.89017 0.399863 0.965181 0.226948 1.1152C0.0756489 1.26522 0 1.45811 0 1.69386V3.08144V6.87484V13.4478C0 14.8408 0.237757 15.9981 0.71327 16.9197C1.2104 17.8413 1.93448 18.5271 2.8855 18.9771Z", fill: "white" }) }),
        /* @__PURE__ */ s("g", { transform: "translate(52.25, 4.09)", children: /* @__PURE__ */ s("path", { d: "M2.8855 18.9771C3.83653 19.4058 4.98208 19.6201 6.32217 19.6201H9.14283C9.35898 19.6201 9.5427 19.5451 9.694 19.3951C9.84529 19.245 9.92094 19.0521 9.92094 18.8164V16.4375C9.92094 16.2232 9.84529 16.041 9.694 15.891C9.5427 15.741 9.35898 15.6659 9.14283 15.6659H6.77607C6.04119 15.6659 5.52244 15.4409 5.21984 14.9908C4.93886 14.5194 4.79836 13.8764 4.79836 13.062V6.87484H8.85104C9.06718 6.87484 9.2509 6.79983 9.4022 6.64981C9.5535 6.49978 9.62915 6.3069 9.62915 6.07115V3.88512C9.62915 3.64938 9.5535 3.45649 9.4022 3.30647C9.2509 3.15645 9.06718 3.08144 8.85104 3.08144H4.79836V0.803685C4.79836 0.567938 4.72271 0.375054 4.57141 0.225033C4.42011 0.0750109 4.22559 0 3.98783 0L0.810533 0.89017C0.594391 0.89017 0.399863 0.965181 0.226948 1.1152C0.0756489 1.26522 0 1.45811 0 1.69386V3.08144V6.87484V13.4478C0 14.8408 0.237757 15.9981 0.71327 16.9197C1.2104 17.8413 1.93448 18.5271 2.8855 18.9771Z", fill: "white" }) }),
        /* @__PURE__ */ s("g", { transform: "translate(66.89, 6.96)", children: /* @__PURE__ */ s("path", { d: "M0.778111 16.7167C0.561969 16.7167 0.378248 16.6417 0.226948 16.4916C0.0756487 16.3416 0 16.1487 0 15.913V0.803687C0 0.567938 0.0756487 0.375054 0.226948 0.225034C0.378248 0.0750116 0.561969 0 0.778111 0H4.02025C4.25801 0 4.45254 0.0750116 4.60384 0.225034C4.75514 0.375054 4.83079 0.567938 4.83079 0.803687V15.913C4.83079 16.1487 4.75514 16.3416 4.60384 16.4916C4.45254 16.6417 4.25801 16.7167 4.02025 16.7167H0.778111Z", fill: "white" }) }),
        /* @__PURE__ */ s("circle", { cx: "69.32", cy: "2.68", r: "2.68", fill: "#26D4EB" })
      ]
    }
  );
}
function Kl({ className: e = "" }) {
  return /* @__PURE__ */ C("div", { className: `ds-ad-slot ${e}`, "data-testid": "ad-slot", children: [
    /* @__PURE__ */ C("svg", { className: "ds-ad-slot-icon", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ s("rect", { x: "1", y: "1", width: "14", height: "14", rx: "2", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ s("line", { x1: "1", y1: "5", x2: "15", y2: "5", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ s("line", { x1: "5", y1: "5", x2: "5", y2: "15", stroke: "currentColor", strokeWidth: "1.2" })
    ] }),
    /* @__PURE__ */ s("span", { className: "ds-ad-slot-text", children: "Ad Slot Placeholder" })
  ] });
}
function Zl({ children: e, className: t = "", ...n }) {
  return /* @__PURE__ */ s("button", { type: "button", className: `ds-primary-btn ${t}`, ...n, children: e });
}
export {
  Kl as AdSlot,
  Fl as AdditionalIncomeCard,
  Il as BottomNav,
  ql as BottomSheet,
  Tt as Button,
  zl as Card,
  Hl as ConfirmationCard,
  Ml as Divider,
  Vr as FeatureRow,
  Yl as FullScreenSheet,
  Ul as IncomeTypePicker,
  la as IncomeTypeRow,
  Gl as InfoSheet,
  kl as InputField,
  na as ListRow,
  $l as MoneyRow,
  Xl as NettiLogo,
  jl as PaywallSheet,
  Zl as PrimaryButton,
  Bl as SalaryCard,
  va as SegmentedControl,
  Ll as Select,
  Vl as Sheet,
  Fr as Tick
};
