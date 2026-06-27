import { jsxs as C, jsx as s, Fragment as it } from "react/jsx-runtime";
import * as u from "react";
import b, { useState as Oe, useId as wr, useRef as Yt, useLayoutEffect as mn, useEffect as xe, useMemo as _r, useCallback as br } from "react";
import * as Cr from "react-dom";
import Er, { createPortal as vn } from "react-dom";
const Sr = "_button_qjyoi_7", Nr = "_sizeLg_qjyoi_32", Rr = "_sizeMd_qjyoi_41", Tr = "_variantPro_qjyoi_53", Dr = "_variantPrimary_qjyoi_63", xr = "_variantSecondary_qjyoi_74", Pr = "_variantGhost_qjyoi_85", Or = "_variantText_qjyoi_97", Ar = "_fullWidth_qjyoi_114", $r = "_icon_qjyoi_123", kr = "_label_qjyoi_132", te = {
  button: Sr,
  sizeLg: Nr,
  sizeMd: Rr,
  variantPro: Tr,
  variantPrimary: Dr,
  variantSecondary: xr,
  variantGhost: Pr,
  variantText: Or,
  fullWidth: Ar,
  icon: $r,
  label: kr
}, Mr = {
  pro: te.variantPro,
  primary: te.variantPrimary,
  secondary: te.variantSecondary,
  ghost: te.variantGhost,
  text: te.variantText
}, Lr = {
  lg: te.sizeLg,
  md: te.sizeMd
};
function Dt({
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
        Mr[e],
        Lr[t],
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
const Ir = "_tick_ax8ei_3", Br = "_active_ax8ei_18", Fr = "_inactive_ax8ei_23", Gt = {
  tick: Ir,
  active: Br,
  inactive: Fr
};
function Wr({
  state: e = "active",
  className: t,
  "aria-label": n
}) {
  const r = n ?? (e === "active" ? "Included" : "Coming soon");
  return /* @__PURE__ */ s(
    "span",
    {
      className: [Gt.tick, Gt[e], t ?? ""].filter(Boolean).join(" "),
      "aria-label": r,
      role: "img",
      children: "✓"
    }
  );
}
const jr = "_row_1fxt2_3", Ur = "_text_1fxt2_10", Hr = "_title_1fxt2_18", zr = "_muted_1fxt2_26", Vr = "_description_1fxt2_30", Ie = {
  row: jr,
  text: Ur,
  title: Hr,
  muted: zr,
  description: Vr
};
function qr({
  title: e,
  description: t,
  state: n = "active",
  className: r
}) {
  const a = n === "inactive";
  return /* @__PURE__ */ C("div", { className: [Ie.row, r ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s(Wr, { state: n }),
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
const Yr = "_outer_1auh8_7", Gr = "_row_1auh8_14", Xr = "_interactive_1auh8_25", Kr = "_labels_1auh8_49", Zr = "_label_1auh8_49", Qr = "_subLabel_1auh8_69", Jr = "_right_1auh8_79", ea = "_amount_1auh8_86", ta = "_remove_1auh8_97", na = "_divider_1auh8_128", J = {
  outer: Yr,
  row: Gr,
  interactive: Xr,
  labels: Kr,
  label: Zr,
  subLabel: Qr,
  right: Jr,
  amount: ea,
  remove: ta,
  divider: na
};
function ra({
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
  className: m
}) {
  const f = !!r && !o, v = /* @__PURE__ */ C(it, { children: [
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
  return /* @__PURE__ */ C("div", { className: [J.outer, m ?? ""].filter(Boolean).join(" "), children: [
    f ? /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: [J.row, J.interactive].join(" "),
        onClick: r,
        "aria-label": a,
        children: v
      }
    ) : /* @__PURE__ */ s("div", { className: J.row, children: v }),
    d && /* @__PURE__ */ s("div", { className: J.divider, "aria-hidden": "true" })
  ] });
}
const aa = "_row_1omvu_6", oa = "_labels_1omvu_20", ia = "_title_1omvu_29", sa = "_subtitle_1omvu_37", la = "_chevron_1omvu_45", Be = {
  row: aa,
  labels: oa,
  title: ia,
  subtitle: sa,
  chevron: la
};
function ca({ title: e, subtitle: t, onClick: n, className: r }) {
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
const ua = "_track_fjawl_7", da = "_dark_fjawl_3", fa = "_light_fjawl_4", ma = "_segment_fjawl_27", va = "_selected_fjawl_59", Xe = {
  track: ua,
  dark: da,
  light: fa,
  segment: ma,
  selected: va
};
function ha({
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
      className: [Xe.track, Xe[r], a ?? ""].filter(Boolean).join(" "),
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
            className: [Xe.segment, c ? Xe.selected : ""].join(" "),
            onClick: () => n(i.value),
            onKeyDown: (m) => l(m, d),
            "data-testid": `segment-${i.value}`,
            children: i.label
          },
          i.value
        );
      })
    }
  );
}
const pa = "_field_13yb0_3", ga = "_label_13yb0_16", ya = "_fieldStandard_13yb0_3", wa = "_inputBox_13yb0_38", _a = "_state_focused_13yb0_50", ba = "_state_filled_13yb0_56", Ca = "_input_13yb0_38", Ea = "_fieldLarge_13yb0_4", Sa = "_largeAmountRow_13yb0_91", Na = "_largePrefix_13yb0_99", Ra = "_largeInput_13yb0_111", Ta = "_state_empty_13yb0_132", Da = "_underline_13yb0_137", xa = "_underlineFocused_13yb0_145", Pa = "_disabled_13yb0_151", Oa = "_error_13yb0_158", U = {
  field: pa,
  label: ga,
  fieldStandard: ya,
  inputBox: wa,
  state_focused: _a,
  state_filled: ba,
  input: Ca,
  fieldLarge: Ea,
  largeAmountRow: Sa,
  largePrefix: Na,
  largeInput: Ra,
  state_empty: Ta,
  underline: Da,
  underlineFocused: xa,
  disabled: Pa,
  error: Oa
};
function Hl({
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
  ...m
}) {
  const [f, v] = Oe(!1), y = wr(), S = t !== "" && t !== void 0, h = f ? "focused" : S ? "filled" : "empty";
  return r === "largeAmount" ? /* @__PURE__ */ C(
    "div",
    {
      className: [
        U.field,
        U.fieldLarge,
        U[`state_${h}`],
        d ? U.disabled : "",
        l ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("label", { htmlFor: y, className: U.label, children: e }),
        /* @__PURE__ */ C("div", { className: U.largeAmountRow, children: [
          a && /* @__PURE__ */ s("span", { className: U.largePrefix, "aria-hidden": "true", children: a }),
          /* @__PURE__ */ s(
            "input",
            {
              id: y,
              type: "text",
              inputMode: c ?? "decimal",
              value: t,
              placeholder: S ? void 0 : "0",
              onChange: (g) => n(g.target.value),
              onFocus: () => v(!0),
              onBlur: () => v(!1),
              disabled: d,
              "aria-invalid": !!o,
              "aria-describedby": o ? `${y}-error` : void 0,
              className: U.largeInput,
              ...m
            }
          )
        ] }),
        /* @__PURE__ */ s(
          "div",
          {
            className: [U.underline, f ? U.underlineFocused : ""].join(" "),
            "aria-hidden": "true"
          }
        ),
        o && /* @__PURE__ */ s("span", { id: `${y}-error`, className: U.error, role: "alert", children: o })
      ]
    }
  ) : /* @__PURE__ */ C(
    "div",
    {
      className: [
        U.field,
        U.fieldStandard,
        U[`state_${h}`],
        d ? U.disabled : "",
        l ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("label", { htmlFor: y, className: U.label, children: e }),
        /* @__PURE__ */ s("div", { className: U.inputBox, children: /* @__PURE__ */ s(
          "input",
          {
            id: y,
            type: "text",
            inputMode: c ?? "decimal",
            value: t,
            placeholder: i ?? "e.g. 16",
            onChange: (g) => n(g.target.value),
            onFocus: () => v(!0),
            onBlur: () => v(!1),
            disabled: d,
            "aria-invalid": !!o,
            "aria-describedby": o ? `${y}-error` : void 0,
            className: U.input,
            ...m
          }
        ) }),
        o && /* @__PURE__ */ s("span", { id: `${y}-error`, className: U.error, role: "alert", children: o })
      ]
    }
  );
}
const Aa = "_row_15olv_3", $a = "_label_15olv_10", ka = "_amount_15olv_17", Ma = "_positive_15olv_27", La = "_negative_15olv_30", Ia = "_title_15olv_33", Ba = "_subtitle_15olv_43", Fa = "_strong_15olv_53", Wa = "_divider_15olv_69", me = {
  row: Aa,
  label: $a,
  amount: ka,
  positive: Ma,
  negative: La,
  title: Ia,
  subtitle: Ba,
  strong: Fa,
  divider: Wa
};
function zl({
  label: e,
  amount: t,
  variant: n,
  strong: r = !1,
  showPositive: a = !0,
  className: o,
  currency: l = "GBP",
  locale: i = "en-GB"
}) {
  const c = !(n === "title" || n === "subtitle") && t !== void 0, m = c && t > 0 && a, f = c && t < 0;
  let v = "";
  if (c) {
    const y = new Intl.NumberFormat(i, {
      style: "currency",
      currency: l,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(t));
    v = f ? `−${y}` : y;
  }
  return /* @__PURE__ */ C(
    "div",
    {
      className: [
        me.row,
        n ? me[n] : "",
        m ? me.positive : "",
        f ? me.negative : "",
        r ? me.strong : "",
        o ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("span", { className: me.label, children: e }),
        c ? /* @__PURE__ */ s("span", { className: me.amount, children: v }) : null
      ]
    }
  );
}
function Vl({ className: e }) {
  return /* @__PURE__ */ s("div", { className: [me.divider, e ?? ""].filter(Boolean).join(" ") });
}
const ja = "_field_180mg_3", Ua = "_label_180mg_11", Ha = "_trigger_180mg_19", za = "_triggerOpen_180mg_42", Va = "_chevron_180mg_52", qa = "_chevronOpen_180mg_58", Ya = "_dropdown_180mg_64", Ga = "_dropdownUpward_180mg_76", Xa = "_option_180mg_80", Ka = "_optionSelected_180mg_101", ae = {
  field: ja,
  label: Ua,
  trigger: Ha,
  triggerOpen: za,
  chevron: Va,
  chevronOpen: qa,
  dropdown: Ya,
  dropdownUpward: Ga,
  option: Xa,
  optionSelected: Ka
};
function ql({ label: e, options: t, value: n, onChange: r, className: a, disabled: o, "data-testid": l }) {
  const [i, d] = Oe(!1), [c, m] = Oe(null), f = Yt(null), v = Yt(null), y = t.find((g) => g.value === n), S = () => {
    if (!f.current) return;
    const g = f.current.getBoundingClientRect(), p = window.innerHeight, E = Math.min(p * 0.6, 320), N = p - g.bottom - 12, w = g.top - 12, O = N < E && w > N;
    m({ top: O ? g.top - 8 : g.bottom + 8, left: g.left, width: g.width, upward: O });
  };
  mn(() => {
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
      var N, w;
      const E = p.target;
      !((N = f.current) != null && N.contains(E)) && !((w = v.current) != null && w.contains(E)) && d(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [i]), xe(() => {
    if (!i) return;
    const g = (p) => {
      var E;
      p.key === "Escape" && (d(!1), (E = f.current) == null || E.focus());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [i]);
  const h = i && c && vn(
    /* @__PURE__ */ s(
      "div",
      {
        ref: v,
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
              r(g.value), d(!1), (p = f.current) == null || p.focus();
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
        ref: f,
        type: "button",
        className: [ae.trigger, i ? ae.triggerOpen : ""].join(" "),
        onClick: () => !o && d(!i),
        disabled: o,
        "data-testid": l,
        "aria-haspopup": "listbox",
        "aria-expanded": i,
        children: [
          /* @__PURE__ */ s("span", { children: (y == null ? void 0 : y.label) ?? "Select…" }),
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
    h
  ] });
}
const Za = "_nav_1y8fh_3", Qa = "_item_1y8fh_12", Ja = "_active_1y8fh_33", eo = "_icon_1y8fh_37", to = "_label_1y8fh_46", Fe = {
  nav: Za,
  item: Qa,
  active: Ja,
  icon: eo,
  label: to
};
function Yl({ items: e, activeId: t, onChange: n, className: r }) {
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
const no = "_card_1w2rv_11", ro = "_eyebrow_1w2rv_25", ao = "_amount_1w2rv_39", oo = "_amountEdit_1w2rv_51", io = "_amountPrefix_1w2rv_58", so = "_amountInput_1w2rv_59", lo = "_badge_1w2rv_82", co = "_toggle_1w2rv_101", fe = {
  card: no,
  eyebrow: ro,
  amount: ao,
  amountEdit: oo,
  amountPrefix: io,
  amountInput: so,
  badge: lo,
  toggle: co
}, uo = [
  { value: "yearly", label: "Yearly" },
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" }
];
function Gl({
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
          ha,
          {
            options: uo,
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
const fo = "_card_b3zmz_7", mo = "_empty_b3zmz_14", vo = "_hasItems_b3zmz_22", ho = "_header_b3zmz_33", po = "_eyebrow_b3zmz_42", go = "_divider_b3zmz_56", yo = "_rows_b3zmz_64", ge = {
  card: fo,
  empty: mo,
  hasItems: vo,
  header: ho,
  eyebrow: po,
  divider: go,
  rows: yo
};
function Xl({
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
        ge.card,
        a ? ge.hasItems : ge.empty,
        r ?? ""
      ].filter(Boolean).join(" "),
      children: a ? /* @__PURE__ */ C(it, { children: [
        /* @__PURE__ */ C("div", { className: ge.header, children: [
          /* @__PURE__ */ s("span", { className: ge.eyebrow, children: "ADDITIONAL INCOME" }),
          /* @__PURE__ */ s(
            Dt,
            {
              variant: "ghost",
              size: "md",
              onClick: t,
              "aria-label": "Add another income source",
              children: "+ Add income"
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { className: ge.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: ge.rows, children: e.map((o, l) => /* @__PURE__ */ s(
          ra,
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
          Dt,
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
function he(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function Xt(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function hn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((a) => {
      const o = Xt(a, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          typeof o == "function" ? o() : Xt(e[a], null);
        }
      };
  };
}
function be(...e) {
  return u.useCallback(hn(...e), e);
}
function wo(e, t) {
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
function _o(e, t = []) {
  let n = [];
  function r(o, l) {
    const i = u.createContext(l), d = n.length;
    n = [...n, l];
    const c = (f) => {
      var p;
      const { scope: v, children: y, ...S } = f, h = ((p = v == null ? void 0 : v[e]) == null ? void 0 : p[d]) || i, g = u.useMemo(() => S, Object.values(S));
      return /* @__PURE__ */ s(h.Provider, { value: g, children: y });
    };
    c.displayName = o + "Provider";
    function m(f, v) {
      var h;
      const y = ((h = v == null ? void 0 : v[e]) == null ? void 0 : h[d]) || i, S = u.useContext(y);
      if (S) return S;
      if (l !== void 0) return l;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return [c, m];
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
  return a.scopeName = e, [r, bo(a, ...t)];
}
function bo(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(o) {
      const l = r.reduce((i, { useScope: d, scopeName: c }) => {
        const f = d(o)[`__scope${c}`];
        return { ...i, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var He = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, Co = u[" useId ".trim().toString()] || (() => {
}), Eo = 0;
function pt(e) {
  const [t, n] = u.useState(Co());
  return He(() => {
    n((r) => r ?? String(Eo++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var So = u[" useInsertionEffect ".trim().toString()] || He;
function No({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [a, o, l] = Ro({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, d = i ? e : a;
  {
    const m = u.useRef(e !== void 0);
    u.useEffect(() => {
      const f = m.current;
      f !== i && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), m.current = i;
    }, [i, r]);
  }
  const c = u.useCallback(
    (m) => {
      var f;
      if (i) {
        const v = To(m) ? m(e) : m;
        v !== e && ((f = l.current) == null || f.call(l, v));
      } else
        o(m);
    },
    [i, e, o, l]
  );
  return [d, c];
}
function Ro({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), a = u.useRef(n), o = u.useRef(t);
  return So(() => {
    o.current = t;
  }, [t]), u.useEffect(() => {
    var l;
    a.current !== n && ((l = o.current) == null || l.call(o, n), a.current = n);
  }, [n, a]), [n, r, o];
}
function To(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  const t = /* @__PURE__ */ Do(e), n = u.forwardRef((r, a) => {
    const { children: o, ...l } = r, i = u.Children.toArray(o), d = i.find(Po);
    if (d) {
      const c = d.props.children, m = i.map((f) => f === d ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ s(t, { ...l, ref: a, children: u.isValidElement(c) ? u.cloneElement(c, void 0, m) : null });
    }
    return /* @__PURE__ */ s(t, { ...l, ref: a, children: o });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Do(e) {
  const t = u.forwardRef((n, r) => {
    const { children: a, ...o } = n;
    if (u.isValidElement(a)) {
      const l = Ao(a), i = Oo(o, a.props);
      return a.type !== u.Fragment && (i.ref = r ? hn(r, l) : l), u.cloneElement(a, i);
    }
    return u.Children.count(a) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var xo = Symbol("radix.slottable");
function Po(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xo;
}
function Oo(e, t) {
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
function Ao(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var $o = [
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
], le = $o.reduce((e, t) => {
  const n = /* @__PURE__ */ pn(`Primitive.${t}`), r = u.forwardRef((a, o) => {
    const { asChild: l, ...i } = a, d = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ s(d, { ...i, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ko(e, t) {
  e && Cr.flushSync(() => e.dispatchEvent(t));
}
function ze(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Mo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e);
  u.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Lo = "DismissableLayer", xt = "dismissableLayer.update", Io = "dismissableLayer.pointerDownOutside", Bo = "dismissableLayer.focusOutside", Kt, gn = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), yn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: l,
      onDismiss: i,
      ...d
    } = e, c = u.useContext(gn), [m, f] = u.useState(null), v = (m == null ? void 0 : m.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, y] = u.useState({}), S = be(t, (_) => f(_)), h = Array.from(c.layers), [g] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), p = h.indexOf(g), E = m ? h.indexOf(m) : -1, N = c.layersWithOutsidePointerEventsDisabled.size > 0, w = E >= p, O = jo((_) => {
      const P = _.target, x = [...c.branches].some((I) => I.contains(P));
      !w || x || (a == null || a(_), l == null || l(_), _.defaultPrevented || i == null || i());
    }, v), j = Uo((_) => {
      const P = _.target;
      [...c.branches].some((I) => I.contains(P)) || (o == null || o(_), l == null || l(_), _.defaultPrevented || i == null || i());
    }, v);
    return Mo((_) => {
      E === c.layers.size - 1 && (r == null || r(_), !_.defaultPrevented && i && (_.preventDefault(), i()));
    }, v), u.useEffect(() => {
      if (m)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Kt = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(m)), c.layers.add(m), Zt(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Kt);
        };
    }, [m, v, n, c]), u.useEffect(() => () => {
      m && (c.layers.delete(m), c.layersWithOutsidePointerEventsDisabled.delete(m), Zt());
    }, [m, c]), u.useEffect(() => {
      const _ = () => y({});
      return document.addEventListener(xt, _), () => document.removeEventListener(xt, _);
    }, []), /* @__PURE__ */ s(
      le.div,
      {
        ...d,
        ref: S,
        style: {
          pointerEvents: N ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: he(e.onFocusCapture, j.onFocusCapture),
        onBlurCapture: he(e.onBlurCapture, j.onBlurCapture),
        onPointerDownCapture: he(
          e.onPointerDownCapture,
          O.onPointerDownCapture
        )
      }
    );
  }
);
yn.displayName = Lo;
var Fo = "DismissableLayerBranch", Wo = u.forwardRef((e, t) => {
  const n = u.useContext(gn), r = u.useRef(null), a = be(t, r);
  return u.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ s(le.div, { ...e, ref: a });
});
Wo.displayName = Fo;
function jo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = u.useRef(!1), a = u.useRef(() => {
  });
  return u.useEffect(() => {
    const o = (i) => {
      if (i.target && !r.current) {
        let d = function() {
          wn(
            Io,
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
function Uo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const a = (o) => {
      o.target && !r.current && wn(Bo, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Zt() {
  const e = new CustomEvent(xt);
  document.dispatchEvent(e);
}
function wn(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? ko(a, o) : a.dispatchEvent(o);
}
var gt = "focusScope.autoFocusOnMount", yt = "focusScope.autoFocusOnUnmount", Qt = { bubbles: !1, cancelable: !0 }, Ho = "FocusScope", _n = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...l
  } = e, [i, d] = u.useState(null), c = ze(a), m = ze(o), f = u.useRef(null), v = be(t, (h) => d(h)), y = u.useRef({
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
      let h = function(N) {
        if (y.paused || !i) return;
        const w = N.target;
        i.contains(w) ? f.current = w : ve(f.current, { select: !0 });
      }, g = function(N) {
        if (y.paused || !i) return;
        const w = N.relatedTarget;
        w !== null && (i.contains(w) || ve(f.current, { select: !0 }));
      }, p = function(N) {
        if (document.activeElement === document.body)
          for (const O of N)
            O.removedNodes.length > 0 && ve(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const E = new MutationObserver(p);
      return i && E.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), E.disconnect();
      };
    }
  }, [r, i, y.paused]), u.useEffect(() => {
    if (i) {
      en.add(y);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const p = new CustomEvent(gt, Qt);
        i.addEventListener(gt, c), i.dispatchEvent(p), p.defaultPrevented || (zo(Xo(bn(i)), { select: !0 }), document.activeElement === h && ve(i));
      }
      return () => {
        i.removeEventListener(gt, c), setTimeout(() => {
          const p = new CustomEvent(yt, Qt);
          i.addEventListener(yt, m), i.dispatchEvent(p), p.defaultPrevented || ve(h ?? document.body, { select: !0 }), i.removeEventListener(yt, m), en.remove(y);
        }, 0);
      };
    }
  }, [i, c, m, y]);
  const S = u.useCallback(
    (h) => {
      if (!n && !r || y.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, p = document.activeElement;
      if (g && p) {
        const E = h.currentTarget, [N, w] = Vo(E);
        N && w ? !h.shiftKey && p === w ? (h.preventDefault(), n && ve(N, { select: !0 })) : h.shiftKey && p === N && (h.preventDefault(), n && ve(w, { select: !0 })) : p === E && h.preventDefault();
      }
    },
    [n, r, y.paused]
  );
  return /* @__PURE__ */ s(le.div, { tabIndex: -1, ...l, ref: v, onKeyDown: S });
});
_n.displayName = Ho;
function zo(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ve(r, { select: t }), document.activeElement !== n) return;
}
function Vo(e) {
  const t = bn(e), n = Jt(t, e), r = Jt(t.reverse(), e);
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
function Jt(e, t) {
  for (const n of e)
    if (!qo(n, { upTo: t })) return n;
}
function qo(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Yo(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Yo(e) && t && e.select();
  }
}
var en = Go();
function Go() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = tn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = tn(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function tn(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Xo(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ko = "Portal", Cn = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [a, o] = u.useState(!1);
  He(() => o(!0), []);
  const l = n || a && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return l ? Er.createPortal(/* @__PURE__ */ s(le.div, { ...r, ref: t }), l) : null;
});
Cn.displayName = Ko;
function Zo(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var lt = (e) => {
  const { present: t, children: n } = e, r = Qo(t), a = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), o = be(r.ref, Jo(a));
  return typeof n == "function" || r.isPresent ? u.cloneElement(a, { ref: o }) : null;
};
lt.displayName = "Presence";
function Qo(e) {
  const [t, n] = u.useState(), r = u.useRef(null), a = u.useRef(e), o = u.useRef("none"), l = e ? "mounted" : "unmounted", [i, d] = Zo(l, {
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
    const c = Ke(r.current);
    o.current = i === "mounted" ? c : "none";
  }, [i]), He(() => {
    const c = r.current, m = a.current;
    if (m !== e) {
      const v = o.current, y = Ke(c);
      e ? d("MOUNT") : y === "none" || (c == null ? void 0 : c.display) === "none" ? d("UNMOUNT") : d(m && v !== y ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, d]), He(() => {
    if (t) {
      let c;
      const m = t.ownerDocument.defaultView ?? window, f = (y) => {
        const h = Ke(r.current).includes(CSS.escape(y.animationName));
        if (y.target === t && h && (d("ANIMATION_END"), !a.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, v = (y) => {
        y.target === t && (o.current = Ke(r.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        m.clearTimeout(c), t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
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
function Ke(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Jo(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var wt = 0;
function ei() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? nn()), document.body.insertAdjacentElement("beforeend", e[1] ?? nn()), wt++, () => {
      wt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), wt--;
    };
  }, []);
}
function nn() {
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
function En(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function ti(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var at = "right-scroll-bar-position", ot = "width-before-scroll-bar", ni = "with-scroll-bars-hidden", ri = "--removed-body-scroll-bar-size";
function _t(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ai(e, t) {
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
var oi = typeof window < "u" ? u.useLayoutEffect : u.useEffect, rn = /* @__PURE__ */ new WeakMap();
function ii(e, t) {
  var n = ai(null, function(r) {
    return e.forEach(function(a) {
      return _t(a, r);
    });
  });
  return oi(function() {
    var r = rn.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), l = n.current;
      a.forEach(function(i) {
        o.has(i) || _t(i, null);
      }), o.forEach(function(i) {
        a.has(i) || _t(i, l);
      });
    }
    rn.set(n, e);
  }, [e]), n;
}
function si(e) {
  return e;
}
function li(e, t) {
  t === void 0 && (t = si);
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
        var m = l;
        l = [], m.forEach(o);
      }, c = function() {
        return Promise.resolve().then(d);
      };
      c(), n = {
        push: function(m) {
          l.push(m), c();
        },
        filter: function(m) {
          return l = l.filter(m), n;
        }
      };
    }
  };
  return a;
}
function ci(e) {
  e === void 0 && (e = {});
  var t = li(null);
  return t.options = oe({ async: !0, ssr: !1 }, e), t;
}
var Sn = function(e) {
  var t = e.sideCar, n = En(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, oe({}, n));
};
Sn.isSideCarExport = !0;
function ui(e, t) {
  return e.useMedium(t), Sn;
}
var Nn = ci(), bt = function() {
}, ct = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: bt,
    onWheelCapture: bt,
    onTouchMoveCapture: bt
  }), a = r[0], o = r[1], l = e.forwardProps, i = e.children, d = e.className, c = e.removeScrollBar, m = e.enabled, f = e.shards, v = e.sideCar, y = e.noRelative, S = e.noIsolation, h = e.inert, g = e.allowPinchZoom, p = e.as, E = p === void 0 ? "div" : p, N = e.gapMode, w = En(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), O = v, j = ii([n, t]), _ = oe(oe({}, w), a);
  return u.createElement(
    u.Fragment,
    null,
    m && u.createElement(O, { sideCar: Nn, removeScrollBar: c, shards: f, noRelative: y, noIsolation: S, inert: h, setCallbacks: o, allowPinchZoom: !!g, lockRef: n, gapMode: N }),
    l ? u.cloneElement(u.Children.only(i), oe(oe({}, _), { ref: j })) : u.createElement(E, oe({}, _, { className: d, ref: j }), i)
  );
});
ct.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ct.classNames = {
  fullWidth: ot,
  zeroRight: at
};
var di = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function fi() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = di();
  return t && e.setAttribute("nonce", t), e;
}
function mi(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function vi(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var hi = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = fi()) && (mi(t, n), vi(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, pi = function() {
  var e = hi();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Rn = function() {
  var e = pi(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, gi = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ct = function(e) {
  return parseInt(e || "", 10) || 0;
}, yi = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ct(n), Ct(r), Ct(a)];
}, wi = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return gi;
  var t = yi(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, _i = Rn(), Pe = "data-scroll-locked", bi = function(e, t, n, r) {
  var a = e.left, o = e.top, l = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ni, ` {
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
  
  .`).concat(at, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ot, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(at, " .").concat(at, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ot, " .").concat(ot, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Pe, `] {
    `).concat(ri, ": ").concat(i, `px;
  }
`);
}, an = function() {
  var e = parseInt(document.body.getAttribute(Pe) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ci = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Pe, (an() + 1).toString()), function() {
      var e = an() - 1;
      e <= 0 ? document.body.removeAttribute(Pe) : document.body.setAttribute(Pe, e.toString());
    };
  }, []);
}, Ei = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  Ci();
  var o = u.useMemo(function() {
    return wi(a);
  }, [a]);
  return u.createElement(_i, { styles: bi(o, !t, a, n ? "" : "!important") });
}, Pt = !1;
if (typeof window < "u")
  try {
    var Ze = Object.defineProperty({}, "passive", {
      get: function() {
        return Pt = !0, !0;
      }
    });
    window.addEventListener("test", Ze, Ze), window.removeEventListener("test", Ze, Ze);
  } catch {
    Pt = !1;
  }
var Ne = Pt ? { passive: !1 } : !1, Si = function(e) {
  return e.tagName === "TEXTAREA";
}, Tn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Si(e) && n[t] === "visible")
  );
}, Ni = function(e) {
  return Tn(e, "overflowY");
}, Ri = function(e) {
  return Tn(e, "overflowX");
}, on = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = Dn(e, r);
    if (a) {
      var o = xn(e, r), l = o[1], i = o[2];
      if (l > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Ti = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Di = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Dn = function(e, t) {
  return e === "v" ? Ni(t) : Ri(t);
}, xn = function(e, t) {
  return e === "v" ? Ti(t) : Di(t);
}, xi = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Pi = function(e, t, n, r, a) {
  var o = xi(e, window.getComputedStyle(t).direction), l = o * r, i = n.target, d = t.contains(i), c = !1, m = l > 0, f = 0, v = 0;
  do {
    if (!i)
      break;
    var y = xn(e, i), S = y[0], h = y[1], g = y[2], p = h - g - o * S;
    (S || p) && Dn(e, i) && (f += p, v += S);
    var E = i.parentNode;
    i = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
  } while (
    // portaled content
    !d && i !== document.body || // self content
    d && (t.contains(i) || t === i)
  );
  return (m && Math.abs(f) < 1 || !m && Math.abs(v) < 1) && (c = !0), c;
}, Qe = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, sn = function(e) {
  return [e.deltaX, e.deltaY];
}, ln = function(e) {
  return e && "current" in e ? e.current : e;
}, Oi = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Ai = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, $i = 0, Re = [];
function ki(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), a = u.useState($i++)[0], o = u.useState(Rn)[0], l = u.useRef(e);
  u.useEffect(function() {
    l.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var h = ti([e.lockRef.current], (e.shards || []).map(ln), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !l.current.allowPinchZoom;
    var p = Qe(h), E = n.current, N = "deltaX" in h ? h.deltaX : E[0] - p[0], w = "deltaY" in h ? h.deltaY : E[1] - p[1], O, j = h.target, _ = Math.abs(N) > Math.abs(w) ? "h" : "v";
    if ("touches" in h && _ === "h" && j.type === "range")
      return !1;
    var P = window.getSelection(), x = P && P.anchorNode, I = x ? x === j || x.contains(j) : !1;
    if (I)
      return !1;
    var B = on(_, j);
    if (!B)
      return !0;
    if (B ? O = _ : (O = _ === "v" ? "h" : "v", B = on(_, j)), !B)
      return !1;
    if (!r.current && "changedTouches" in h && (N || w) && (r.current = O), !O)
      return !0;
    var q = r.current || O;
    return Pi(q, g, h, q === "h" ? N : w);
  }, []), d = u.useCallback(function(h) {
    var g = h;
    if (!(!Re.length || Re[Re.length - 1] !== o)) {
      var p = "deltaY" in g ? sn(g) : Qe(g), E = t.current.filter(function(O) {
        return O.name === g.type && (O.target === g.target || g.target === O.shadowParent) && Oi(O.delta, p);
      })[0];
      if (E && E.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!E) {
        var N = (l.current.shards || []).map(ln).filter(Boolean).filter(function(O) {
          return O.contains(g.target);
        }), w = N.length > 0 ? i(g, N[0]) : !l.current.noIsolation;
        w && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(h, g, p, E) {
    var N = { name: h, delta: g, target: p, should: E, shadowParent: Mi(p) };
    t.current.push(N), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== N;
      });
    }, 1);
  }, []), m = u.useCallback(function(h) {
    n.current = Qe(h), r.current = void 0;
  }, []), f = u.useCallback(function(h) {
    c(h.type, sn(h), h.target, i(h, e.lockRef.current));
  }, []), v = u.useCallback(function(h) {
    c(h.type, Qe(h), h.target, i(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Re.push(o), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", d, Ne), document.addEventListener("touchmove", d, Ne), document.addEventListener("touchstart", m, Ne), function() {
      Re = Re.filter(function(h) {
        return h !== o;
      }), document.removeEventListener("wheel", d, Ne), document.removeEventListener("touchmove", d, Ne), document.removeEventListener("touchstart", m, Ne);
    };
  }, []);
  var y = e.removeScrollBar, S = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    S ? u.createElement(o, { styles: Ai(a) }) : null,
    y ? u.createElement(Ei, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Mi(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Li = ui(Nn, ki);
var Pn = u.forwardRef(function(e, t) {
  return u.createElement(ct, oe({}, e, { ref: t, sideCar: Li }));
});
Pn.classNames = ct.classNames;
var Ii = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Te = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), et = {}, Et = 0, On = function(e) {
  return e && (e.host || On(e.parentNode));
}, Bi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = On(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Fi = function(e, t, n, r) {
  var a = Bi(t, Array.isArray(e) ? e : [e]);
  et[n] || (et[n] = /* @__PURE__ */ new WeakMap());
  var o = et[n], l = [], i = /* @__PURE__ */ new Set(), d = new Set(a), c = function(f) {
    !f || i.has(f) || (i.add(f), c(f.parentNode));
  };
  a.forEach(c);
  var m = function(f) {
    !f || d.has(f) || Array.prototype.forEach.call(f.children, function(v) {
      if (i.has(v))
        m(v);
      else
        try {
          var y = v.getAttribute(r), S = y !== null && y !== "false", h = (Te.get(v) || 0) + 1, g = (o.get(v) || 0) + 1;
          Te.set(v, h), o.set(v, g), l.push(v), h === 1 && S && Je.set(v, !0), g === 1 && v.setAttribute(n, "true"), S || v.setAttribute(r, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", v, p);
        }
    });
  };
  return m(t), i.clear(), Et++, function() {
    l.forEach(function(f) {
      var v = Te.get(f) - 1, y = o.get(f) - 1;
      Te.set(f, v), o.set(f, y), v || (Je.has(f) || f.removeAttribute(r), Je.delete(f)), y || f.removeAttribute(n);
    }), Et--, Et || (Te = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), et = {});
  };
}, Wi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = Ii(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), Fi(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, ut = "Dialog", [An] = _o(ut), [ji, ne] = An(ut), $n = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: l = !0
  } = e, i = u.useRef(null), d = u.useRef(null), [c, m] = No({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: ut
  });
  return /* @__PURE__ */ s(
    ji,
    {
      scope: t,
      triggerRef: i,
      contentRef: d,
      contentId: pt(),
      titleId: pt(),
      descriptionId: pt(),
      open: c,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((f) => !f), [m]),
      modal: l,
      children: n
    }
  );
};
$n.displayName = ut;
var kn = "DialogTrigger", Mn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(kn, n), o = be(t, a.triggerRef);
    return /* @__PURE__ */ s(
      le.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": Mt(a.open),
        ...r,
        ref: o,
        onClick: he(e.onClick, a.onOpenToggle)
      }
    );
  }
);
Mn.displayName = kn;
var $t = "DialogPortal", [Ui, Ln] = An($t, {
  forceMount: void 0
}), In = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: a } = e, o = ne($t, t);
  return /* @__PURE__ */ s(Ui, { scope: t, forceMount: n, children: u.Children.map(r, (l) => /* @__PURE__ */ s(lt, { present: n || o.open, children: /* @__PURE__ */ s(Cn, { asChild: !0, container: a, children: l }) })) });
};
In.displayName = $t;
var st = "DialogOverlay", Bn = u.forwardRef(
  (e, t) => {
    const n = Ln(st, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = ne(st, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ s(lt, { present: r || o.open, children: /* @__PURE__ */ s(zi, { ...a, ref: t }) }) : null;
  }
);
Bn.displayName = st;
var Hi = /* @__PURE__ */ pn("DialogOverlay.RemoveScroll"), zi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(st, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ s(Pn, { as: Hi, allowPinchZoom: !0, shards: [a.contentRef], children: /* @__PURE__ */ s(
        le.div,
        {
          "data-state": Mt(a.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), _e = "DialogContent", Fn = u.forwardRef(
  (e, t) => {
    const n = Ln(_e, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = ne(_e, e.__scopeDialog);
    return /* @__PURE__ */ s(lt, { present: r || o.open, children: o.modal ? /* @__PURE__ */ s(Vi, { ...a, ref: t }) : /* @__PURE__ */ s(qi, { ...a, ref: t }) });
  }
);
Fn.displayName = _e;
var Vi = u.forwardRef(
  (e, t) => {
    const n = ne(_e, e.__scopeDialog), r = u.useRef(null), a = be(t, n.contentRef, r);
    return u.useEffect(() => {
      const o = r.current;
      if (o) return Wi(o);
    }, []), /* @__PURE__ */ s(
      Wn,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: he(e.onCloseAutoFocus, (o) => {
          var l;
          o.preventDefault(), (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: he(e.onPointerDownOutside, (o) => {
          const l = o.detail.originalEvent, i = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || i) && o.preventDefault();
        }),
        onFocusOutside: he(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), qi = u.forwardRef(
  (e, t) => {
    const n = ne(_e, e.__scopeDialog), r = u.useRef(!1), a = u.useRef(!1);
    return /* @__PURE__ */ s(
      Wn,
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
), Wn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: o, ...l } = e, i = ne(_e, n), d = u.useRef(null), c = be(t, d);
    return ei(), /* @__PURE__ */ C(it, { children: [
      /* @__PURE__ */ s(
        _n,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: a,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ s(
            yn,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Mt(i.open),
              ...l,
              ref: c,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ C(it, { children: [
        /* @__PURE__ */ s(Yi, { titleId: i.titleId }),
        /* @__PURE__ */ s(Xi, { contentRef: d, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), kt = "DialogTitle", jn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(kt, n);
    return /* @__PURE__ */ s(le.h2, { id: a.titleId, ...r, ref: t });
  }
);
jn.displayName = kt;
var Un = "DialogDescription", Hn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(Un, n);
    return /* @__PURE__ */ s(le.p, { id: a.descriptionId, ...r, ref: t });
  }
);
Hn.displayName = Un;
var zn = "DialogClose", Vn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(zn, n);
    return /* @__PURE__ */ s(
      le.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: he(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
Vn.displayName = zn;
function Mt(e) {
  return e ? "open" : "closed";
}
var qn = "DialogTitleWarning", [Kl, Yn] = wo(qn, {
  contentName: _e,
  titleName: kt,
  docsSlug: "dialog"
}), Yi = ({ titleId: e }) => {
  const t = Yn(qn), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Gi = "DialogDescriptionWarning", Xi = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Yn(Gi).contentName}}.`;
  return u.useEffect(() => {
    var o;
    const a = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && a && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Ki = $n, Zi = Mn, Qi = In, Ji = Bn, es = Fn, ts = jn, ns = Hn, rs = Vn;
function as(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Gn = b.createContext({
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
}), Ve = () => {
  const e = b.useContext(Gn);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
as(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function os() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function is() {
  return Lt(/^Mac/);
}
function ss() {
  return Lt(/^iPhone/);
}
function cn() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function ls() {
  return Lt(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  is() && navigator.maxTouchPoints > 1;
}
function Xn() {
  return ss() || ls();
}
function Lt(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const cs = 24, us = typeof window < "u" ? mn : xe;
function un(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const St = typeof document < "u" && window.visualViewport;
function dn(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Kn(e) {
  for (dn(e) && (e = e.parentElement); e && !dn(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const ds = /* @__PURE__ */ new Set([
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
let tt = 0, Nt;
function fs(e = {}) {
  let { isDisabled: t } = e;
  us(() => {
    if (!t)
      return tt++, tt === 1 && Xn() && (Nt = ms()), () => {
        tt--, tt === 0 && (Nt == null || Nt());
      };
  }, [
    t
  ]);
}
function ms() {
  let e, t = 0, n = (f) => {
    e = Kn(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let v = f.changedTouches[0].pageY, y = e.scrollTop, S = e.scrollHeight - e.clientHeight;
    S !== 0 && ((y <= 0 && v > t || y >= S && v < t) && f.preventDefault(), t = v);
  }, a = (f) => {
    let v = f.target;
    Ot(v) && v !== document.activeElement && (f.preventDefault(), v.style.transform = "translateY(-2000px)", v.focus(), requestAnimationFrame(() => {
      v.style.transform = "";
    }));
  }, o = (f) => {
    let v = f.target;
    Ot(v) && (v.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      v.style.transform = "", St && (St.height < window.innerHeight ? requestAnimationFrame(() => {
        fn(v);
      }) : St.addEventListener("resize", () => fn(v), {
        once: !0
      }));
    }));
  }, l = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, d = window.pageYOffset, c = un(vs(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let m = un(We(document, "touchstart", n, {
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
    c(), m(), window.scrollTo(i, d);
  };
}
function vs(e, t, n) {
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
function fn(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Kn(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = e.getBoundingClientRect().bottom;
      const l = n.getBoundingClientRect().bottom + cs;
      o > l && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function Ot(e) {
  return e instanceof HTMLInputElement && !ds.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function hs(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ps(...e) {
  return (t) => e.forEach((n) => hs(n, t));
}
function Zn(...e) {
  return u.useCallback(ps(...e), e);
}
const Qn = /* @__PURE__ */ new WeakMap();
function H(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([a, o]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, o);
      return;
    }
    r[a] = e.style[a], e.style[a] = o;
  }), !n && Qn.set(e, r);
}
function gs(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Qn.get(e);
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
function nt(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let a = r.match(/^matrix3d\((.+)\)$/);
  return a ? parseFloat(a[1].split(", ")[W(t) ? 13 : 12]) : (a = r.match(/^matrix\((.+)\)$/), a ? parseFloat(a[1].split(", ")[W(t) ? 5 : 4]) : null);
}
function ys(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Rt(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function ws(...e) {
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
}, Jn = 0.4, _s = 0.25, bs = 100, er = 8, ye = 16, At = 26, Tt = "vaul-dragging";
function tr(e) {
  const t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function Cs({ defaultProp: e, onChange: t }) {
  const n = b.useState(e), [r] = n, a = b.useRef(r), o = tr(t);
  return b.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [
    r,
    a,
    o
  ]), n;
}
function nr({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = Cs({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, l = o ? e : r, i = tr(n), d = b.useCallback((c) => {
    if (o) {
      const f = typeof c == "function" ? c(e) : c;
      f !== e && i(f);
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
function Es({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: a, fadeFromIndex: o, onSnapPointChange: l, direction: i = "bottom", container: d, snapToSequentialPoint: c }) {
  const [m, f] = nr({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [v, y] = b.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  b.useEffect(() => {
    function _() {
      y({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, []);
  const S = b.useMemo(() => m === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    m
  ]), h = b.useMemo(() => {
    var _;
    return (_ = n == null ? void 0 : n.findIndex((P) => P === m)) != null ? _ : null;
  }, [
    n,
    m
  ]), g = n && n.length > 0 && (o || o === 0) && !Number.isNaN(o) && n[o] === m || !n, p = b.useMemo(() => {
    const _ = d ? {
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
        const T = I ? B : v ? x * _.height : 0;
        return v ? i === "bottom" ? _.height - T : -_.height + T : T;
      }
      const q = I ? B : v ? x * _.width : 0;
      return v ? i === "right" ? _.width - q : -_.width + q : q;
    })) != null ? P : [];
  }, [
    n,
    v,
    d
  ]), E = b.useMemo(() => h !== null ? p == null ? void 0 : p[h] : null, [
    p,
    h
  ]), N = b.useCallback((_) => {
    var P;
    const x = (P = p == null ? void 0 : p.findIndex((I) => I === _)) != null ? P : null;
    l(x), H(r.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(i) ? `translate3d(0, ${_}px, 0)` : `translate3d(${_}px, 0, 0)`
    }), p && x !== p.length - 1 && o !== void 0 && x !== o && x < o ? H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "0"
    }) : H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), f(n == null ? void 0 : n[Math.max(x, 0)]);
  }, [
    r.current,
    n,
    p,
    o,
    a,
    f
  ]);
  b.useEffect(() => {
    if (m || e) {
      var _;
      const P = (_ = n == null ? void 0 : n.findIndex((x) => x === e || x === m)) != null ? _ : -1;
      p && P !== -1 && typeof p[P] == "number" && N(p[P]);
    }
  }, [
    m,
    e,
    n,
    p,
    N
  ]);
  function w({ draggedDistance: _, closeDrawer: P, velocity: x, dismissible: I }) {
    if (o === void 0) return;
    const B = i === "bottom" || i === "right" ? (E ?? 0) - _ : (E ?? 0) + _, q = h === o - 1, T = h === 0, K = _ > 0;
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
    if (x > Jn && Math.abs(_) < Z * 0.4) {
      const V = K ? 1 : -1;
      if (V > 0 && S && n) {
        N(p[n.length - 1]);
        return;
      }
      if (T && V < 0 && I && P(), h === null) return;
      N(p[h + V]);
      return;
    }
    N(Y);
  }
  function O({ draggedDistance: _ }) {
    if (E === null) return;
    const P = i === "bottom" || i === "right" ? E - _ : E + _;
    (i === "bottom" || i === "right") && P < p[p.length - 1] || (i === "top" || i === "left") && P > p[p.length - 1] || H(r.current, {
      transform: W(i) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function j(_, P) {
    if (!n || typeof h != "number" || !p || o === void 0) return null;
    const x = h === o - 1;
    if (h >= o && P)
      return 0;
    if (x && !P) return 1;
    if (!g && !x) return null;
    const B = x ? h + 1 : h - 1, q = x ? p[B] - p[B - 1] : p[B + 1] - p[B], T = _ / Math.abs(q);
    return x ? 1 - T : T;
  }
  return {
    isLastSnapPoint: S,
    activeSnapPoint: m,
    shouldFade: g,
    getPercentageDragged: j,
    setActiveSnapPoint: f,
    activeSnapPointIndex: h,
    onRelease: w,
    onDrag: O,
    snapPointsOffset: p
  };
}
const Ss = () => () => {
};
function Ns() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: a } = Ve(), o = b.useRef(null), l = _r(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - At) / window.innerWidth;
  }
  b.useEffect(() => {
    if (t && n) {
      o.current && clearTimeout(o.current);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d) return;
      ws(r && !a ? Rt(document.body, {
        background: "black"
      }) : Ss, Rt(d, {
        transformOrigin: W(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${L.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
      }));
      const c = Rt(d, {
        borderRadius: `${er}px`,
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
function Rs({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: a, noBodyStyles: o }) {
  const [l, i] = b.useState(() => typeof window < "u" ? window.location.href : ""), d = b.useRef(0), c = b.useCallback(() => {
    if (cn() && je === null && e && !o) {
      je = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: f, innerHeight: v } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-d.current}px`,
        left: `${-f}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const y = v - window.innerHeight;
        y && d.current >= v && (document.body.style.top = `${-(d.current + y)}px`);
      }), 300);
    }
  }, [
    e
  ]), m = b.useCallback(() => {
    if (cn() && je !== null && !o) {
      const f = -parseInt(document.body.style.top, 10), v = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, je), window.requestAnimationFrame(() => {
        if (a && l !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(v, f);
      }), je = null;
    }
  }, [
    l
  ]);
  return b.useEffect(() => {
    function f() {
      d.current = window.scrollY;
    }
    return f(), window.addEventListener("scroll", f), () => {
      window.removeEventListener("scroll", f);
    };
  }, []), b.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || m();
      };
  }, [
    t,
    m
  ]), b.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && c(), t || window.setTimeout(() => {
      m();
    }, 500)) : m());
  }, [
    e,
    r,
    l,
    t,
    n,
    c,
    m
  ]), {
    restorePositionSetting: m
  };
}
function Ts({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: a, snapPoints: o, shouldScaleBackground: l = !1, setBackgroundColorOnScale: i = !0, closeThreshold: d = _s, scrollLockTimeout: c = bs, dismissible: m = !0, handleOnly: f = !1, fadeFromIndex: v = o && o.length - 1, activeSnapPoint: y, setActiveSnapPoint: S, fixed: h, modal: g = !0, onClose: p, nested: E, noBodyStyles: N = !1, direction: w = "bottom", defaultOpen: O = !1, disablePreventScroll: j = !0, snapToSequentialPoint: _ = !1, preventScrollRestoration: P = !1, repositionInputs: x = !0, onAnimationEnd: I, container: B, autoFocus: q = !1 }) {
  var T, K;
  const [Y = !1, Z] = nr({
    defaultProp: O,
    prop: e,
    onChange: (R) => {
      t == null || t(R), !R && !E && dr(), setTimeout(() => {
        I == null || I(R);
      }, L.DURATION * 1e3), R && !g && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), R || (document.body.style.pointerEvents = "auto");
    }
  }), [V, ie] = b.useState(!1), [ce, Ae] = b.useState(!1), [or, It] = b.useState(!1), Ce = b.useRef(null), qe = b.useRef(null), dt = b.useRef(null), ft = b.useRef(null), $e = b.useRef(null), ke = b.useRef(!1), mt = b.useRef(null), vt = b.useRef(0), Ee = b.useRef(!1), Bt = b.useRef(!O), Ft = b.useRef(0), D = b.useRef(null), Wt = b.useRef(((T = D.current) == null ? void 0 : T.getBoundingClientRect().height) || 0), jt = b.useRef(((K = D.current) == null ? void 0 : K.getBoundingClientRect().width) || 0), ht = b.useRef(0), ir = b.useCallback((R) => {
    o && R === Me.length - 1 && (qe.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: sr, activeSnapPointIndex: Se, setActiveSnapPoint: Ut, onRelease: lr, snapPointsOffset: Me, onDrag: cr, shouldFade: Ht, getPercentageDragged: ur } = Es({
    snapPoints: o,
    activeSnapPointProp: y,
    setActiveSnapPointProp: S,
    drawerRef: D,
    fadeFromIndex: v,
    overlayRef: Ce,
    onSnapPointChange: ir,
    direction: w,
    container: B,
    snapToSequentialPoint: _
  });
  fs({
    isDisabled: !Y || ce || !g || or || !V || !x || !j
  });
  const { restorePositionSetting: dr } = Rs({
    isOpen: Y,
    modal: g,
    nested: E ?? !1,
    hasBeenOpened: V,
    preventScrollRestoration: P,
    noBodyStyles: N
  });
  function Ye() {
    return (window.innerWidth - At) / window.innerWidth;
  }
  function fr(R) {
    var k, M;
    !m && !o || D.current && !D.current.contains(R.target) || (Wt.current = ((k = D.current) == null ? void 0 : k.getBoundingClientRect().height) || 0, jt.current = ((M = D.current) == null ? void 0 : M.getBoundingClientRect().width) || 0, Ae(!0), dt.current = /* @__PURE__ */ new Date(), Xn() && window.addEventListener("touchend", () => ke.current = !1, {
      once: !0
    }), R.target.setPointerCapture(R.pointerId), vt.current = W(w) ? R.pageY : R.pageX);
  }
  function zt(R, k) {
    var M;
    let A = R;
    const F = (M = window.getSelection()) == null ? void 0 : M.toString(), X = D.current ? nt(D.current, w) : null, G = /* @__PURE__ */ new Date();
    if (A.tagName === "SELECT" || A.hasAttribute("data-vaul-no-drag") || A.closest("[data-vaul-no-drag]"))
      return !1;
    if (w === "right" || w === "left")
      return !0;
    if (qe.current && G.getTime() - qe.current.getTime() < 500)
      return !1;
    if (X !== null && (w === "bottom" ? X > 0 : X < 0))
      return !0;
    if (F && F.length > 0)
      return !1;
    if ($e.current && G.getTime() - $e.current.getTime() < c && X === 0 || k)
      return $e.current = G, !1;
    for (; A; ) {
      if (A.scrollHeight > A.clientHeight) {
        if (A.scrollTop !== 0)
          return $e.current = /* @__PURE__ */ new Date(), !1;
        if (A.getAttribute("role") === "dialog")
          return !0;
      }
      A = A.parentNode;
    }
    return !0;
  }
  function mr(R) {
    if (D.current && ce) {
      const k = w === "bottom" || w === "right" ? 1 : -1, M = (vt.current - (W(w) ? R.pageY : R.pageX)) * k, A = M > 0, F = o && !m && !A;
      if (F && Se === 0) return;
      const X = Math.abs(M), G = document.querySelector("[data-vaul-drawer-wrapper]"), ue = w === "bottom" || w === "top" ? Wt.current : jt.current;
      let Q = X / ue;
      const pe = ur(X, A);
      if (pe !== null && (Q = pe), F && Q >= 1 || !ke.current && !zt(R.target, A)) return;
      if (D.current.classList.add(Tt), ke.current = !0, H(D.current, {
        transition: "none"
      }), H(Ce.current, {
        transition: "none"
      }), o && cr({
        draggedDistance: M
      }), A && !o) {
        const re = ys(M), Ge = Math.min(re * -1, 0) * k;
        H(D.current, {
          transform: W(w) ? `translate3d(0, ${Ge}px, 0)` : `translate3d(${Ge}px, 0, 0)`
        });
        return;
      }
      const de = 1 - Q;
      if ((Ht || v && Se === v - 1) && (r == null || r(R, Q), H(Ce.current, {
        opacity: `${de}`,
        transition: "none"
      }, !0)), G && Ce.current && l) {
        const re = Math.min(Ye() + Q * (1 - Ye()), 1), Ge = 8 - Q * 8, qt = Math.max(0, 14 - Q * 14);
        H(G, {
          borderRadius: `${Ge}px`,
          transform: W(w) ? `scale(${re}) translate3d(0, ${qt}px, 0)` : `scale(${re}) translate3d(${qt}px, 0, 0)`,
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
  b.useEffect(() => {
    window.requestAnimationFrame(() => {
      Bt.current = !0;
    });
  }, []), b.useEffect(() => {
    var R;
    function k() {
      if (!D.current || !x) return;
      const M = document.activeElement;
      if (Ot(M) || Ee.current) {
        var A;
        const F = ((A = window.visualViewport) == null ? void 0 : A.height) || 0, X = window.innerHeight;
        let G = X - F;
        const ue = D.current.getBoundingClientRect().height || 0, Q = ue > X * 0.8;
        ht.current || (ht.current = ue);
        const pe = D.current.getBoundingClientRect().top;
        if (Math.abs(Ft.current - G) > 60 && (Ee.current = !Ee.current), o && o.length > 0 && Me && Se) {
          const de = Me[Se] || 0;
          G += de;
        }
        if (Ft.current = G, ue > F || Ee.current) {
          const de = D.current.getBoundingClientRect().height;
          let re = de;
          de > F && (re = F - (Q ? pe : At)), h ? D.current.style.height = `${de - Math.max(G, 0)}px` : D.current.style.height = `${Math.max(re, F - pe)}px`;
        } else os() || (D.current.style.height = `${ht.current}px`);
        o && o.length > 0 && !Ee.current ? D.current.style.bottom = "0px" : D.current.style.bottom = `${Math.max(G, 0)}px`;
      }
    }
    return (R = window.visualViewport) == null || R.addEventListener("resize", k), () => {
      var M;
      return (M = window.visualViewport) == null ? void 0 : M.removeEventListener("resize", k);
    };
  }, [
    Se,
    o,
    Me
  ]);
  function Le(R) {
    vr(), p == null || p(), R || Z(!1), setTimeout(() => {
      o && Ut(o[0]);
    }, L.DURATION * 1e3);
  }
  function Vt() {
    if (!D.current) return;
    const R = document.querySelector("[data-vaul-drawer-wrapper]"), k = nt(D.current, w);
    H(D.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), H(Ce.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), l && k && k > 0 && Y && H(R, {
      borderRadius: `${er}px`,
      overflow: "hidden",
      ...W(w) ? {
        transform: `scale(${Ye()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Ye()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${L.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
    }, !0);
  }
  function vr() {
    !ce || !D.current || (D.current.classList.remove(Tt), ke.current = !1, Ae(!1), ft.current = /* @__PURE__ */ new Date());
  }
  function hr(R) {
    if (!ce || !D.current) return;
    D.current.classList.remove(Tt), ke.current = !1, Ae(!1), ft.current = /* @__PURE__ */ new Date();
    const k = nt(D.current, w);
    if (!R || !zt(R.target, !1) || !k || Number.isNaN(k) || dt.current === null) return;
    const M = ft.current.getTime() - dt.current.getTime(), A = vt.current - (W(w) ? R.pageY : R.pageX), F = Math.abs(A) / M;
    if (F > 0.05 && (It(!0), setTimeout(() => {
      It(!1);
    }, 200)), o) {
      lr({
        draggedDistance: A * (w === "bottom" || w === "right" ? 1 : -1),
        closeDrawer: Le,
        velocity: F,
        dismissible: m
      }), a == null || a(R, !0);
      return;
    }
    if (w === "bottom" || w === "right" ? A > 0 : A < 0) {
      Vt(), a == null || a(R, !0);
      return;
    }
    if (F > Jn) {
      Le(), a == null || a(R, !1);
      return;
    }
    var X;
    const G = Math.min((X = D.current.getBoundingClientRect().height) != null ? X : 0, window.innerHeight);
    var ue;
    const Q = Math.min((ue = D.current.getBoundingClientRect().width) != null ? ue : 0, window.innerWidth), pe = w === "left" || w === "right";
    if (Math.abs(k) >= (pe ? Q : G) * d) {
      Le(), a == null || a(R, !1);
      return;
    }
    a == null || a(R, !0), Vt();
  }
  b.useEffect(() => (Y && (H(document.documentElement, {
    scrollBehavior: "auto"
  }), qe.current = /* @__PURE__ */ new Date()), () => {
    gs(document.documentElement, "scrollBehavior");
  }), [
    Y
  ]);
  function pr(R) {
    const k = R ? (window.innerWidth - ye) / window.innerWidth : 1, M = R ? -ye : 0;
    mt.current && window.clearTimeout(mt.current), H(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(w) ? `scale(${k}) translate3d(0, ${M}px, 0)` : `scale(${k}) translate3d(${M}px, 0, 0)`
    }), !R && D.current && (mt.current = setTimeout(() => {
      const A = nt(D.current, w);
      H(D.current, {
        transition: "none",
        transform: W(w) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
      });
    }, 500));
  }
  function gr(R, k) {
    if (k < 0) return;
    const M = (window.innerWidth - ye) / window.innerWidth, A = M + k * (1 - M), F = -ye + k * ye;
    H(D.current, {
      transform: W(w) ? `scale(${A}) translate3d(0, ${F}px, 0)` : `scale(${A}) translate3d(${F}px, 0, 0)`,
      transition: "none"
    });
  }
  function yr(R, k) {
    const M = W(w) ? window.innerHeight : window.innerWidth, A = k ? (M - ye) / M : 1, F = k ? -ye : 0;
    k && H(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(w) ? `scale(${A}) translate3d(0, ${F}px, 0)` : `scale(${A}) translate3d(${F}px, 0, 0)`
    });
  }
  return b.useEffect(() => {
    g || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    g
  ]), /* @__PURE__ */ b.createElement(Ki, {
    defaultOpen: O,
    onOpenChange: (R) => {
      !m && !R || (R ? ie(!0) : Le(!0), Z(R));
    },
    open: Y
  }, /* @__PURE__ */ b.createElement(Gn.Provider, {
    value: {
      activeSnapPoint: sr,
      snapPoints: o,
      setActiveSnapPoint: Ut,
      drawerRef: D,
      overlayRef: Ce,
      onOpenChange: t,
      onPress: fr,
      onRelease: hr,
      onDrag: mr,
      dismissible: m,
      shouldAnimate: Bt,
      handleOnly: f,
      isOpen: Y,
      isDragging: ce,
      shouldFade: Ht,
      closeDrawer: Le,
      onNestedDrag: gr,
      onNestedOpenChange: pr,
      onNestedRelease: yr,
      keyboardIsOpen: Ee,
      modal: g,
      snapPointsOffset: Me,
      activeSnapPointIndex: Se,
      direction: w,
      shouldScaleBackground: l,
      setBackgroundColorOnScale: i,
      noBodyStyles: N,
      container: B,
      autoFocus: q
    }
  }, n));
}
const rr = /* @__PURE__ */ b.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: a, shouldFade: o, isOpen: l, modal: i, shouldAnimate: d } = Ve(), c = Zn(t, n), m = r && r.length > 0;
  if (!i)
    return null;
  const f = b.useCallback((v) => a(v), [
    a
  ]);
  return /* @__PURE__ */ b.createElement(Ji, {
    onMouseUp: f,
    ref: c,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": l && m ? "true" : "false",
    "data-vaul-snap-points-overlay": l && o ? "true" : "false",
    "data-vaul-animate": d != null && d.current ? "true" : "false",
    ...e
  });
});
rr.displayName = "Drawer.Overlay";
const ar = /* @__PURE__ */ b.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, a) {
  const { drawerRef: o, onPress: l, onRelease: i, onDrag: d, keyboardIsOpen: c, snapPointsOffset: m, activeSnapPointIndex: f, modal: v, isOpen: y, direction: S, snapPoints: h, container: g, handleOnly: p, shouldAnimate: E, autoFocus: N } = Ve(), [w, O] = b.useState(!1), j = Zn(a, o), _ = b.useRef(null), P = b.useRef(null), x = b.useRef(!1), I = h && h.length > 0;
  Ns();
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
  b.useEffect(() => {
    I && window.requestAnimationFrame(() => {
      O(!0);
    });
  }, []);
  function q(T) {
    _.current = null, x.current = !1, i(T);
  }
  return /* @__PURE__ */ b.createElement(es, {
    "data-vaul-drawer-direction": S,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": w ? "true" : "false",
    "data-vaul-snap-points": y && I ? "true" : "false",
    "data-vaul-custom-container": g ? "true" : "false",
    "data-vaul-animate": E != null && E.current ? "true" : "false",
    ...r,
    ref: j,
    style: m && m.length > 0 ? {
      "--snap-point-height": `${m[f ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (T) => {
      p || (r.onPointerDown == null || r.onPointerDown.call(r, T), _.current = {
        x: T.pageX,
        y: T.pageY
      }, l(T));
    },
    onOpenAutoFocus: (T) => {
      n == null || n(T), N || T.preventDefault();
    },
    onPointerDownOutside: (T) => {
      if (e == null || e(T), !v || T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      c.current && (c.current = !1);
    },
    onFocusOutside: (T) => {
      if (!v) {
        T.preventDefault();
        return;
      }
    },
    onPointerMove: (T) => {
      if (P.current = T, p || (r.onPointerMove == null || r.onPointerMove.call(r, T), !_.current)) return;
      const K = T.pageY - _.current.y, Y = T.pageX - _.current.x, Z = T.pointerType === "touch" ? 10 : 2;
      B({
        x: Y,
        y: K
      }, S, Z) ? d(T) : (Math.abs(Y) > Z || Math.abs(K) > Z) && (_.current = null);
    },
    onPointerUp: (T) => {
      r.onPointerUp == null || r.onPointerUp.call(r, T), _.current = null, x.current = !1, i(T);
    },
    onPointerOut: (T) => {
      r.onPointerOut == null || r.onPointerOut.call(r, T), q(P.current);
    },
    onContextMenu: (T) => {
      r.onContextMenu == null || r.onContextMenu.call(r, T), P.current && q(P.current);
    }
  });
});
ar.displayName = "Drawer.Content";
const Ds = 250, xs = 120, Ps = /* @__PURE__ */ b.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: a, isDragging: o, snapPoints: l, activeSnapPoint: i, setActiveSnapPoint: d, dismissible: c, handleOnly: m, isOpen: f, onPress: v, onDrag: y } = Ve(), S = b.useRef(null), h = b.useRef(!1);
  function g() {
    if (h.current) {
      N();
      return;
    }
    window.setTimeout(() => {
      p();
    }, xs);
  }
  function p() {
    if (o || e || h.current) {
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
    const O = l.findIndex((_) => _ === i);
    if (O === -1) return;
    const j = l[O + 1];
    d(j);
  }
  function E() {
    S.current = window.setTimeout(() => {
      h.current = !0;
    }, Ds);
  }
  function N() {
    S.current && window.clearTimeout(S.current), h.current = !1;
  }
  return /* @__PURE__ */ b.createElement("div", {
    onClick: g,
    onPointerCancel: N,
    onPointerDown: (w) => {
      m && v(w), E();
    },
    onPointerMove: (w) => {
      m && y(w);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": f ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ b.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
Ps.displayName = "Drawer.Handle";
function Os(e) {
  const t = Ve(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ b.createElement(Qi, {
    container: n,
    ...r
  });
}
const $ = {
  Root: Ts,
  Content: ar,
  Overlay: rr,
  Trigger: Zi,
  Portal: Os,
  Close: rs,
  Title: ts,
  Description: ns
}, As = "_overlay_fvui9_3", $s = "_content_fvui9_10", ks = "_grabber_fvui9_34", Ms = "_headline_fvui9_45", Ls = "_subhead_fvui9_57", Is = "_callout_fvui9_69", Bs = "_calloutLabel_fvui9_79", Fs = "_calloutRow_fvui9_88", Ws = "_calloutGross_fvui9_94", js = "_calloutArrow_fvui9_102", Us = "_calloutNet_fvui9_106", Hs = "_features_fvui9_116", zs = "_divider_fvui9_125", Vs = "_priceRow_fvui9_133", qs = "_price_fvui9_133", Ys = "_priceNote_fvui9_148", Gs = "_restore_fvui9_158", z = {
  overlay: As,
  content: $s,
  grabber: ks,
  headline: Ms,
  subhead: Ls,
  callout: Is,
  calloutLabel: Bs,
  calloutRow: Fs,
  calloutGross: Ws,
  calloutArrow: js,
  calloutNet: Us,
  features: Hs,
  divider: zs,
  priceRow: Vs,
  price: qs,
  priceNote: Ys,
  restore: Gs
}, Xs = [
  { title: "Bonus & overtime modelling", description: "Model any additional income", state: "active" },
  { title: "Marginal tax insight", description: "See what your next £1 is worth", state: "active" },
  { title: "Salary comparison", description: "Coming soon", state: "inactive" }
];
function Zl({
  open: e,
  onOpenChange: t,
  trigger: n,
  priceFormatted: r,
  priceNote: a = "one-off · no subscription",
  features: o = Xs,
  onPurchase: l,
  onRestore: i,
  isPurchasing: d = !1
}) {
  return /* @__PURE__ */ C($.Root, { open: e, onOpenChange: t, children: [
    n && /* @__PURE__ */ s($.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C($.Portal, { children: [
      /* @__PURE__ */ s($.Overlay, { className: z.overlay }),
      /* @__PURE__ */ C($.Content, { className: z.content, "aria-label": "Unlock Netti Pro", children: [
        /* @__PURE__ */ s("div", { className: z.grabber, "aria-hidden": "true" }),
        /* @__PURE__ */ s($.Title, { className: z.headline, children: "Unlock Netti Pro" }),
        /* @__PURE__ */ s($.Description, { className: z.subhead, children: "See what you actually keep from your bonus, overtime, and every extra £1 you earn." }),
        /* @__PURE__ */ C("div", { className: z.callout, "aria-label": "Example: £5,000 bonus", children: [
          /* @__PURE__ */ s("span", { className: z.calloutLabel, children: "EXAMPLE  ·  £5,000 BONUS" }),
          /* @__PURE__ */ C("div", { className: z.calloutRow, children: [
            /* @__PURE__ */ s("span", { className: z.calloutGross, children: "£5,000 gross" }),
            /* @__PURE__ */ s("span", { className: z.calloutArrow, "aria-hidden": "true", children: "→" }),
            /* @__PURE__ */ s("span", { className: z.calloutNet, children: "£3,400 take-home" })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { className: z.features, role: "list", "aria-label": "Included features", children: o.map((c, m) => /* @__PURE__ */ s("div", { role: "listitem", children: /* @__PURE__ */ s(qr, { title: c.title, description: c.description, state: c.state }) }, m)) }),
        /* @__PURE__ */ s("div", { className: z.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ C("div", { className: z.priceRow, children: [
          /* @__PURE__ */ s("span", { className: z.price, children: r }),
          a && /* @__PURE__ */ s("span", { className: z.priceNote, children: a })
        ] }),
        /* @__PURE__ */ s(
          Dt,
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
const Ks = "_overlay_qhbnf_6", Zs = "_content_qhbnf_13", Qs = "_grabber_qhbnf_33", Js = "_title_qhbnf_42", el = "_list_qhbnf_58", tl = "_divider_qhbnf_65", De = {
  overlay: Ks,
  content: Zs,
  grabber: Qs,
  title: Js,
  list: el,
  divider: tl
};
function Ql({
  open: e,
  onOpenChange: t,
  trigger: n,
  title: r = "Add additional income",
  types: a,
  onSelect: o
}) {
  return /* @__PURE__ */ C($.Root, { open: e, onOpenChange: t, children: [
    n && /* @__PURE__ */ s($.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C($.Portal, { children: [
      /* @__PURE__ */ s($.Overlay, { className: De.overlay }),
      /* @__PURE__ */ C($.Content, { className: De.content, "aria-label": r, children: [
        /* @__PURE__ */ s("div", { className: De.grabber, "aria-hidden": "true" }),
        /* @__PURE__ */ s($.Title, { className: De.title, children: r }),
        /* @__PURE__ */ s("div", { className: De.list, role: "list", children: a.map((l, i) => /* @__PURE__ */ C("div", { role: "listitem", children: [
          /* @__PURE__ */ s(
            ca,
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
const nl = "_card_mp69k_9", rl = "_left_mp69k_22", al = "_label_mp69k_30", ol = "_amountRow_mp69k_37", il = "_gross_mp69k_44", sl = "_frequency_mp69k_50", ll = "_right_mp69k_57", cl = "_periodLabel_mp69k_65", ul = "_periodAmount_mp69k_73", se = {
  card: nl,
  left: rl,
  label: al,
  amountRow: ol,
  gross: il,
  frequency: sl,
  right: ll,
  periodLabel: cl,
  periodAmount: ul
};
function Jl({
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
const dl = "_card_sdoab_5", fl = "_header_sdoab_13", ml = "_title_sdoab_17", vl = "_subtitle_sdoab_27", rt = {
  card: dl,
  header: fl,
  title: ml,
  subtitle: vl
};
function ec({ children: e, title: t, subtitle: n, className: r }) {
  return /* @__PURE__ */ C("div", { className: [rt.card, r ?? ""].filter(Boolean).join(" "), children: [
    (t || n) && /* @__PURE__ */ C("div", { className: rt.header, children: [
      t && /* @__PURE__ */ s("h2", { className: rt.title, children: t }),
      n && /* @__PURE__ */ s("p", { className: rt.subtitle, children: n })
    ] }),
    e
  ] });
}
const hl = "_overlay_1ybzo_7", pl = "_content_1ybzo_14", gl = "_handle_1ybzo_35", yl = "_header_1ybzo_45", wl = "_body_1ybzo_49", _l = "_footer_1ybzo_56", bl = "_srOnly_1ybzo_62", we = {
  overlay: hl,
  content: pl,
  handle: gl,
  header: yl,
  body: wl,
  footer: _l,
  srOnly: bl
}, Cl = /* @__PURE__ */ s("div", { className: we.handle, "aria-hidden": "true" });
function tc({
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
  const [m, f] = Oe(!1), v = e !== void 0, y = v ? e : m, S = br(
    (h) => {
      v ? t == null || t(h) : f(h);
    },
    [v, t]
  );
  return /* @__PURE__ */ C($.Root, { open: y, onOpenChange: S, children: [
    n ? /* @__PURE__ */ s($.Trigger, { asChild: !0, children: n }) : null,
    /* @__PURE__ */ C($.Portal, { children: [
      /* @__PURE__ */ s($.Overlay, { className: we.overlay, style: c }),
      /* @__PURE__ */ C(
        $.Content,
        {
          className: [we.content, d ?? ""].filter(Boolean).join(" "),
          style: c,
          "aria-label": i,
          children: [
            /* @__PURE__ */ s($.Title, { className: we.srOnly, children: i }),
            l ? Cl : null,
            r ? /* @__PURE__ */ s("div", { className: we.header, children: r }) : null,
            /* @__PURE__ */ s("div", { className: we.body, children: a }),
            o ? /* @__PURE__ */ s("div", { className: we.footer, children: o }) : null
          ]
        }
      )
    ] })
  ] });
}
const El = "_header_105f3_8", Sl = "_title_105f3_16", Nl = "_spacer_105f3_28", Rl = "_icon_105f3_33", Tl = "_iconButton_105f3_34", Ue = {
  header: El,
  title: Sl,
  spacer: Nl,
  icon: Rl,
  iconButton: Tl
}, Dl = /* @__PURE__ */ s("span", { className: Ue.spacer, "aria-hidden": "true" });
function nc({
  title: e,
  icon: t,
  onIconClick: n,
  iconLabel: r = "More information",
  className: a
}) {
  const o = !!t;
  return /* @__PURE__ */ C("div", { className: [Ue.header, a ?? ""].filter(Boolean).join(" "), children: [
    o ? Dl : null,
    /* @__PURE__ */ s("span", { className: Ue.title, children: e }),
    o ? n ? /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: Ue.iconButton,
        onClick: n,
        "aria-label": r,
        children: t
      }
    ) : /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: t }) : null
  ] });
}
const xl = "_overlay_q8ram_6", Pl = "_content_q8ram_13", Ol = "_handle_q8ram_32", Al = "_titleBar_q8ram_42", $l = "_title_q8ram_42", kl = "_titleSpacer_q8ram_58", Ml = "_back_q8ram_63", Ll = "_body_q8ram_89", Il = "_footer_q8ram_97", Bl = "_description_q8ram_101", ee = {
  overlay: xl,
  content: Pl,
  handle: Ol,
  titleBar: Al,
  title: $l,
  titleSpacer: kl,
  back: Ml,
  body: Ll,
  footer: Il,
  description: Bl
};
function Fl({
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
  const [m, f] = Oe(!1), v = o !== void 0, y = v ? o : m, S = (h) => {
    v ? l == null || l(h) : f(h);
  };
  return xe(() => {
    y ? d == null || d() : c == null || c();
  }, [y]), /* @__PURE__ */ C($.Root, { open: y, onOpenChange: S, children: [
    n && /* @__PURE__ */ s($.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C($.Portal, { children: [
      /* @__PURE__ */ s($.Overlay, { className: ee.overlay }),
      /* @__PURE__ */ C($.Content, { className: ee.content, "aria-label": e, children: [
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
          /* @__PURE__ */ s($.Title, { className: ee.title, children: e }),
          /* @__PURE__ */ s("div", { className: ee.titleSpacer })
        ] }),
        /* @__PURE__ */ C("div", { className: ee.body, children: [
          t && /* @__PURE__ */ s($.Description, { className: ee.description, children: t }),
          r
        ] }),
        a && /* @__PURE__ */ s("div", { className: ee.footer, children: a })
      ] })
    ] })
  ] });
}
const rc = Fl;
function ac({
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
  }, [t]), t ? vn(
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
function oc({ title: e, description: t, children: n }) {
  return /* @__PURE__ */ C($.Root, { children: [
    /* @__PURE__ */ s($.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C($.Portal, { children: [
      /* @__PURE__ */ s($.Overlay, { className: "drawer-overlay" }),
      /* @__PURE__ */ C($.Content, { className: "info-sheet__content", children: [
        /* @__PURE__ */ C("div", { className: "info-sheet__header", children: [
          /* @__PURE__ */ s($.Close, { className: "info-sheet__close", "aria-label": "Close", children: "×" }),
          /* @__PURE__ */ s("div", { className: "info-sheet__title", children: e }),
          /* @__PURE__ */ s("div", { className: "info-sheet__spacer" })
        ] }),
        /* @__PURE__ */ s("p", { className: "info-sheet__description", children: t })
      ] })
    ] })
  ] });
}
function ic({ width: e = 72, height: t = 24, className: n }) {
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
function sc({ className: e = "" }) {
  return /* @__PURE__ */ C("div", { className: `ds-ad-slot ${e}`, "data-testid": "ad-slot", children: [
    /* @__PURE__ */ C("svg", { className: "ds-ad-slot-icon", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ s("rect", { x: "1", y: "1", width: "14", height: "14", rx: "2", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ s("line", { x1: "1", y1: "5", x2: "15", y2: "5", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ s("line", { x1: "5", y1: "5", x2: "5", y2: "15", stroke: "currentColor", strokeWidth: "1.2" })
    ] }),
    /* @__PURE__ */ s("span", { className: "ds-ad-slot-text", children: "Ad Slot Placeholder" })
  ] });
}
function lc({ children: e, className: t = "", ...n }) {
  return /* @__PURE__ */ s("button", { type: "button", className: `ds-primary-btn ${t}`, ...n, children: e });
}
export {
  sc as AdSlot,
  Xl as AdditionalIncomeCard,
  Yl as BottomNav,
  rc as BottomSheet,
  Dt as Button,
  ec as Card,
  Jl as ConfirmationCard,
  Vl as Divider,
  qr as FeatureRow,
  ac as FullScreenSheet,
  Ql as IncomeTypePicker,
  ca as IncomeTypeRow,
  oc as InfoSheet,
  Hl as InputField,
  ra as ListRow,
  zl as MoneyRow,
  ic as NettiLogo,
  Zl as PaywallSheet,
  lc as PrimaryButton,
  Gl as SalaryCard,
  ha as SegmentedControl,
  ql as Select,
  tc as Sheet,
  nc as SheetHeader,
  Fl as TakeHomePaySheet,
  Wr as Tick
};
