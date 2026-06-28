import { jsxs as C, jsx as s, Fragment as st } from "react/jsx-runtime";
import * as u from "react";
import b, { useState as Oe, useId as yr, useRef as lt, useLayoutEffect as vn, useEffect as Ae, useMemo as br, useCallback as Cr } from "react";
import * as Er from "react-dom";
import Sr, { createPortal as hn } from "react-dom";
const Nr = "_button_laugu_7", Rr = "_sizeLg_laugu_32", Tr = "_sizeMd_laugu_41", Dr = "_variantPro_laugu_53", xr = "_variantPrimary_laugu_63", Ar = "_variantSecondary_laugu_74", Pr = "_variantGhost_laugu_85", Or = "_variantText_laugu_97", kr = "_fullWidth_laugu_114", $r = "_icon_laugu_123", Mr = "_label_laugu_132", te = {
  button: Nr,
  sizeLg: Rr,
  sizeMd: Tr,
  variantPro: Dr,
  variantPrimary: xr,
  variantSecondary: Ar,
  variantGhost: Pr,
  variantText: Or,
  fullWidth: kr,
  icon: $r,
  label: Mr
}, Lr = {
  pro: te.variantPro,
  primary: te.variantPrimary,
  secondary: te.variantSecondary,
  ghost: te.variantGhost,
  text: te.variantText
}, Ir = {
  lg: te.sizeLg,
  md: te.sizeMd
};
function At({
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
        Lr[e],
        Ir[t],
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
const Br = "_tick_ax8ei_3", Fr = "_active_ax8ei_18", Wr = "_inactive_ax8ei_23", Kt = {
  tick: Br,
  active: Fr,
  inactive: Wr
};
function Ur({
  state: e = "active",
  className: t,
  "aria-label": n
}) {
  const r = n ?? (e === "active" ? "Included" : "Coming soon");
  return /* @__PURE__ */ s(
    "span",
    {
      className: [Kt.tick, Kt[e], t ?? ""].filter(Boolean).join(" "),
      "aria-label": r,
      role: "img",
      children: "✓"
    }
  );
}
const Hr = "_row_1fxt2_3", jr = "_text_1fxt2_10", Vr = "_title_1fxt2_18", zr = "_muted_1fxt2_26", qr = "_description_1fxt2_30", Be = {
  row: Hr,
  text: jr,
  title: Vr,
  muted: zr,
  description: qr
};
function Yr({
  title: e,
  description: t,
  state: n = "active",
  className: r
}) {
  const a = n === "inactive";
  return /* @__PURE__ */ C("div", { className: [Be.row, r ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s(Ur, { state: n }),
    /* @__PURE__ */ C("div", { className: Be.text, children: [
      /* @__PURE__ */ s(
        "span",
        {
          className: [Be.title, a ? Be.muted : ""].filter(Boolean).join(" "),
          children: e
        }
      ),
      t && /* @__PURE__ */ s("span", { className: Be.description, children: t })
    ] })
  ] });
}
const Gr = "_outer_mn3d3_7", Kr = "_row_mn3d3_14", Xr = "_interactive_mn3d3_25", Zr = "_labels_mn3d3_49", Qr = "_label_mn3d3_49", Jr = "_subLabel_mn3d3_69", ea = "_right_mn3d3_78", ta = "_amount_mn3d3_85", na = "_remove_mn3d3_96", ra = "_divider_mn3d3_126", J = {
  outer: Gr,
  row: Kr,
  interactive: Xr,
  labels: Zr,
  label: Qr,
  subLabel: Jr,
  right: ea,
  amount: ta,
  remove: na,
  divider: ra
};
function aa({
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
  const f = !!r && !o, v = /* @__PURE__ */ C(st, { children: [
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
const oa = "_row_1omvu_6", ia = "_labels_1omvu_20", sa = "_title_1omvu_29", la = "_subtitle_1omvu_37", ca = "_chevron_1omvu_45", Fe = {
  row: oa,
  labels: ia,
  title: sa,
  subtitle: la,
  chevron: ca
};
function ua({ title: e, subtitle: t, onClick: n, className: r }) {
  return /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: [Fe.row, r ?? ""].filter(Boolean).join(" "),
      onClick: n,
      children: [
        /* @__PURE__ */ C("span", { className: Fe.labels, children: [
          /* @__PURE__ */ s("span", { className: Fe.title, children: e }),
          t && /* @__PURE__ */ s("span", { className: Fe.subtitle, children: t })
        ] }),
        /* @__PURE__ */ s(
          "svg",
          {
            className: Fe.chevron,
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
const da = "_track_an1ad_8", fa = "_segment_an1ad_19", ma = "_selected_an1ad_40", Xe = {
  track: da,
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
const ha = "_root_18luu_1", pa = "_noLabel_18luu_11", ga = "_label_18luu_16", wa = "_track_18luu_26", _a = "_pill_18luu_39", ya = "_offActive_18luu_67", ba = "_onActive_18luu_68", fe = {
  root: ha,
  noLabel: pa,
  label: ga,
  track: wa,
  pill: _a,
  offActive: ya,
  onActive: ba
};
function Kl({
  checked: e,
  onChange: t,
  label: n,
  offLabel: r = "Off",
  onLabel: a = "On",
  className: o,
  "aria-label": l
}) {
  const i = (c) => {
    c.key === "ArrowRight" || c.key === "ArrowDown" ? (c.preventDefault(), t(!0)) : (c.key === "ArrowLeft" || c.key === "ArrowUp") && (c.preventDefault(), t(!1));
  }, d = [fe.root, n ? "" : fe.noLabel, o ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ C(
    "div",
    {
      className: d,
      role: "group",
      "aria-label": l ?? n,
      children: [
        n && /* @__PURE__ */ s("span", { className: fe.label, children: n }),
        /* @__PURE__ */ C("div", { className: fe.track, role: "radiogroup", children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": !e,
              tabIndex: e ? -1 : 0,
              className: [fe.pill, e ? "" : fe.offActive].filter(Boolean).join(" "),
              onClick: () => t(!1),
              onKeyDown: i,
              "data-testid": "switch-off",
              children: r
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": e,
              tabIndex: e ? 0 : -1,
              className: [fe.pill, e ? fe.onActive : ""].filter(Boolean).join(" "),
              onClick: () => t(!0),
              onKeyDown: i,
              "data-testid": "switch-on",
              children: a
            }
          )
        ] })
      ]
    }
  );
}
const Ca = "_row_1b642_3", Ea = "_label_1b642_10", Sa = "_amount_1b642_17", Na = "_positive_1b642_27", Ra = "_negative_1b642_30", Ta = "_title_1b642_33", Da = "_subtitle_1b642_43", xa = "_strong_1b642_53", Aa = "_divider_1b642_69", ve = {
  row: Ca,
  label: Ea,
  amount: Sa,
  positive: Na,
  negative: Ra,
  title: Ta,
  subtitle: Da,
  strong: xa,
  divider: Aa
};
function Xl({
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
    const w = new Intl.NumberFormat(i, {
      style: "currency",
      currency: l,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(t));
    v = f ? `−${w}` : w;
  }
  return /* @__PURE__ */ C(
    "div",
    {
      className: [
        ve.row,
        n ? ve[n] : "",
        m ? ve.positive : "",
        f ? ve.negative : "",
        r ? ve.strong : "",
        o ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("span", { className: ve.label, children: e }),
        c ? /* @__PURE__ */ s("span", { className: ve.amount, children: v }) : null
      ]
    }
  );
}
function Zl({ className: e }) {
  return /* @__PURE__ */ s("div", { className: [ve.divider, e ?? ""].filter(Boolean).join(" ") });
}
const Pa = "_field_newdv_3", Oa = "_label_newdv_20", ka = "_fieldStandard_newdv_3", $a = "_inputBox_newdv_42", Ma = "_state_focused_newdv_54", La = "_state_filled_newdv_60", Ia = "_input_newdv_42", Ba = "_fieldLarge_newdv_4", Fa = "_largeAmountRow_newdv_95", Wa = "_largePrefix_newdv_103", Ua = "_largeInput_newdv_115", Ha = "_state_empty_newdv_136", ja = "_underline_newdv_141", Va = "_underlineFocused_newdv_149", za = "_disabled_newdv_155", qa = "_error_newdv_162", H = {
  field: Pa,
  label: Oa,
  fieldStandard: ka,
  inputBox: $a,
  state_focused: Ma,
  state_filled: La,
  input: Ia,
  fieldLarge: Ba,
  largeAmountRow: Fa,
  largePrefix: Wa,
  largeInput: Ua,
  state_empty: Ha,
  underline: ja,
  underlineFocused: Va,
  disabled: za,
  error: qa
};
function Ql({
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
  const [f, v] = Oe(!1), w = yr(), S = t !== "" && t !== void 0, h = f ? "focused" : S ? "filled" : "empty";
  return r === "largeAmount" ? /* @__PURE__ */ C(
    "div",
    {
      className: [
        H.field,
        H.fieldLarge,
        H[`state_${h}`],
        d ? H.disabled : "",
        l ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("label", { htmlFor: w, className: H.label, children: e }),
        /* @__PURE__ */ C("div", { className: H.largeAmountRow, children: [
          a && /* @__PURE__ */ s("span", { className: H.largePrefix, "aria-hidden": "true", children: a }),
          /* @__PURE__ */ s(
            "input",
            {
              id: w,
              type: "text",
              inputMode: c ?? "decimal",
              value: t,
              placeholder: S ? void 0 : "0",
              onChange: (p) => n(p.target.value),
              onFocus: () => v(!0),
              onBlur: () => v(!1),
              disabled: d,
              "aria-invalid": !!o,
              "aria-describedby": o ? `${w}-error` : void 0,
              className: H.largeInput,
              ...m
            }
          )
        ] }),
        /* @__PURE__ */ s(
          "div",
          {
            className: [H.underline, f ? H.underlineFocused : ""].join(" "),
            "aria-hidden": "true"
          }
        ),
        o && /* @__PURE__ */ s("span", { id: `${w}-error`, className: H.error, role: "alert", children: o })
      ]
    }
  ) : /* @__PURE__ */ C(
    "div",
    {
      className: [
        H.field,
        H.fieldStandard,
        H[`state_${h}`],
        d ? H.disabled : "",
        l ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("label", { htmlFor: w, className: H.label, children: e }),
        /* @__PURE__ */ s("div", { className: H.inputBox, children: /* @__PURE__ */ s(
          "input",
          {
            id: w,
            type: "text",
            inputMode: c ?? "decimal",
            value: t,
            placeholder: i ?? "e.g. 16",
            onChange: (p) => n(p.target.value),
            onFocus: () => v(!0),
            onBlur: () => v(!1),
            disabled: d,
            "aria-invalid": !!o,
            "aria-describedby": o ? `${w}-error` : void 0,
            className: H.input,
            ...m
          }
        ) }),
        o && /* @__PURE__ */ s("span", { id: `${w}-error`, className: H.error, role: "alert", children: o })
      ]
    }
  );
}
const Ya = "_field_180mg_3", Ga = "_label_180mg_11", Ka = "_trigger_180mg_19", Xa = "_triggerOpen_180mg_42", Za = "_chevron_180mg_52", Qa = "_chevronOpen_180mg_58", Ja = "_dropdown_180mg_64", eo = "_dropdownUpward_180mg_76", to = "_option_180mg_80", no = "_optionSelected_180mg_101", ae = {
  field: Ya,
  label: Ga,
  trigger: Ka,
  triggerOpen: Xa,
  chevron: Za,
  chevronOpen: Qa,
  dropdown: Ja,
  dropdownUpward: eo,
  option: to,
  optionSelected: no
};
function Jl({ label: e, options: t, value: n, onChange: r, className: a, disabled: o, "data-testid": l }) {
  const [i, d] = Oe(!1), [c, m] = Oe(null), f = lt(null), v = lt(null), w = t.find((p) => p.value === n), S = () => {
    if (!f.current) return;
    const p = f.current.getBoundingClientRect(), g = window.innerHeight, E = Math.min(g * 0.6, 320), N = g - p.bottom - 12, _ = p.top - 12, P = N < E && _ > N;
    m({ top: P ? p.top - 8 : p.bottom + 8, left: p.left, width: p.width, upward: P });
  };
  vn(() => {
    i && S();
  }, [i]), Ae(() => {
    if (!i) return;
    const p = () => S(), g = () => S();
    return window.addEventListener("scroll", p, { passive: !0, capture: !0 }), window.addEventListener("resize", g), () => {
      window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", g);
    };
  }, [i]), Ae(() => {
    if (!i) return;
    const p = (g) => {
      var N, _;
      const E = g.target;
      !((N = f.current) != null && N.contains(E)) && !((_ = v.current) != null && _.contains(E)) && d(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [i]), Ae(() => {
    if (!i) return;
    const p = (g) => {
      var E;
      g.key === "Escape" && (d(!1), (E = f.current) == null || E.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [i]);
  const h = i && c && hn(
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
        children: t.map((p) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [ae.option, n === p.value ? ae.optionSelected : ""].join(" "),
            onClick: () => {
              var g;
              r(p.value), d(!1), (g = f.current) == null || g.focus();
            },
            "data-testid": `option-${p.value}`,
            children: p.label
          },
          p.value
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
    h
  ] });
}
const ro = "_nav_1y8fh_3", ao = "_item_1y8fh_12", oo = "_active_1y8fh_33", io = "_icon_1y8fh_37", so = "_label_1y8fh_46", We = {
  nav: ro,
  item: ao,
  active: oo,
  icon: io,
  label: so
};
function ec({ items: e, activeId: t, onChange: n, className: r }) {
  return /* @__PURE__ */ s("nav", { className: [We.nav, r ?? ""].filter(Boolean).join(" "), children: e.map((a) => /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: [We.item, t === a.id ? We.active : ""].filter(Boolean).join(" "),
      onClick: () => n(a.id),
      "aria-current": t === a.id ? "page" : void 0,
      "data-testid": `nav-${a.id}`,
      children: [
        /* @__PURE__ */ s("span", { className: We.icon, "aria-hidden": "true", children: a.icon }),
        /* @__PURE__ */ s("span", { className: We.label, children: a.label })
      ]
    },
    a.id
  )) });
}
const lo = "_card_1kp17_11", co = "_eyebrow_1kp17_25", uo = "_amount_1kp17_38", fo = "_amountEdit_1kp17_50", mo = "_amountPrefix_1kp17_57", vo = "_amountInput_1kp17_58", ho = "_badge_1kp17_81", po = "_toggle_1kp17_100", me = {
  card: lo,
  eyebrow: co,
  amount: uo,
  amountEdit: fo,
  amountPrefix: mo,
  amountInput: vo,
  badge: ho,
  toggle: po
}, go = [
  { value: "yearly", label: "Yearly" },
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" }
];
function tc({
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
      "data-theme": "dark",
      className: [me.card, a ?? ""].filter(Boolean).join(" "),
      "aria-label": "Your salary",
      children: [
        /* @__PURE__ */ s("span", { className: me.eyebrow, children: "YOUR SALARY" }),
        o ? /* @__PURE__ */ C("div", { className: me.amountEdit, children: [
          /* @__PURE__ */ s("span", { className: me.amountPrefix, "aria-hidden": "true", children: "£" }),
          /* @__PURE__ */ s(
            "input",
            {
              className: me.amountInput,
              type: "text",
              inputMode: "decimal",
              value: l,
              onChange: (c) => i == null ? void 0 : i(c.target.value),
              "aria-label": "Salary amount in pounds",
              style: { width: `calc(${Math.max(1, l.length)}ch + 2px)` }
            }
          )
        ] }) : /* @__PURE__ */ s("span", { className: me.amount, "aria-live": "polite", children: e }),
        d && /* @__PURE__ */ s("div", { className: me.badge, "aria-label": "Additional income", children: r }),
        /* @__PURE__ */ s(
          va,
          {
            options: go,
            value: t,
            onChange: (c) => n(c),
            context: "dark",
            "aria-label": "Pay period",
            className: me.toggle
          }
        )
      ]
    }
  );
}
const wo = "_card_15cx3_7", _o = "_empty_15cx3_14", yo = "_hasItems_15cx3_22", bo = "_header_15cx3_33", Co = "_eyebrow_15cx3_42", Eo = "_divider_15cx3_55", So = "_rows_15cx3_63", we = {
  card: wo,
  empty: _o,
  hasItems: yo,
  header: bo,
  eyebrow: Co,
  divider: Eo,
  rows: So
};
function nc({
  items: e,
  onAdd: t,
  onItemClick: n,
  className: r
}) {
  const a = e.length > 0;
  return /* @__PURE__ */ s(
    "div",
    {
      "data-theme": "dark",
      className: [
        we.card,
        a ? we.hasItems : we.empty,
        r ?? ""
      ].filter(Boolean).join(" "),
      children: a ? /* @__PURE__ */ C(st, { children: [
        /* @__PURE__ */ C("div", { className: we.header, children: [
          /* @__PURE__ */ s("span", { className: we.eyebrow, children: "ADDITIONAL INCOME" }),
          /* @__PURE__ */ s(
            At,
            {
              variant: "ghost",
              size: "md",
              onClick: t,
              "aria-label": "Add another income source",
              children: "+ Add income"
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { className: we.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: we.rows, children: e.map((o, l) => /* @__PURE__ */ s(
          aa,
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
          At,
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
function pe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
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
function pn(...e) {
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
function Ce(...e) {
  return u.useCallback(pn(...e), e);
}
function No(e, t) {
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
function Ro(e, t = []) {
  let n = [];
  function r(o, l) {
    const i = u.createContext(l), d = n.length;
    n = [...n, l];
    const c = (f) => {
      var g;
      const { scope: v, children: w, ...S } = f, h = ((g = v == null ? void 0 : v[e]) == null ? void 0 : g[d]) || i, p = u.useMemo(() => S, Object.values(S));
      return /* @__PURE__ */ s(h.Provider, { value: p, children: w });
    };
    c.displayName = o + "Provider";
    function m(f, v) {
      var h;
      const w = ((h = v == null ? void 0 : v[e]) == null ? void 0 : h[d]) || i, S = u.useContext(w);
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
  return a.scopeName = e, [r, To(a, ...t)];
}
function To(...e) {
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
var Ve = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, Do = u[" useId ".trim().toString()] || (() => {
}), xo = 0;
function wt(e) {
  const [t, n] = u.useState(Do());
  return Ve(() => {
    n((r) => r ?? String(xo++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Ao = u[" useInsertionEffect ".trim().toString()] || Ve;
function Po({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [a, o, l] = Oo({
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
        const v = ko(m) ? m(e) : m;
        v !== e && ((f = l.current) == null || f.call(l, v));
      } else
        o(m);
    },
    [i, e, o, l]
  );
  return [d, c];
}
function Oo({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), a = u.useRef(n), o = u.useRef(t);
  return Ao(() => {
    o.current = t;
  }, [t]), u.useEffect(() => {
    var l;
    a.current !== n && ((l = o.current) == null || l.call(o, n), a.current = n);
  }, [n, a]), [n, r, o];
}
function ko(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function gn(e) {
  const t = /* @__PURE__ */ $o(e), n = u.forwardRef((r, a) => {
    const { children: o, ...l } = r, i = u.Children.toArray(o), d = i.find(Lo);
    if (d) {
      const c = d.props.children, m = i.map((f) => f === d ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ s(t, { ...l, ref: a, children: u.isValidElement(c) ? u.cloneElement(c, void 0, m) : null });
    }
    return /* @__PURE__ */ s(t, { ...l, ref: a, children: o });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function $o(e) {
  const t = u.forwardRef((n, r) => {
    const { children: a, ...o } = n;
    if (u.isValidElement(a)) {
      const l = Bo(a), i = Io(o, a.props);
      return a.type !== u.Fragment && (i.ref = r ? pn(r, l) : l), u.cloneElement(a, i);
    }
    return u.Children.count(a) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Mo = Symbol("radix.slottable");
function Lo(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Mo;
}
function Io(e, t) {
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
function Bo(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Fo = [
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
], le = Fo.reduce((e, t) => {
  const n = /* @__PURE__ */ gn(`Primitive.${t}`), r = u.forwardRef((a, o) => {
    const { asChild: l, ...i } = a, d = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ s(d, { ...i, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Wo(e, t) {
  e && Er.flushSync(() => e.dispatchEvent(t));
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
function Uo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e);
  u.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Ho = "DismissableLayer", Pt = "dismissableLayer.update", jo = "dismissableLayer.pointerDownOutside", Vo = "dismissableLayer.focusOutside", Zt, wn = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), _n = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: l,
      onDismiss: i,
      ...d
    } = e, c = u.useContext(wn), [m, f] = u.useState(null), v = (m == null ? void 0 : m.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = u.useState({}), S = Ce(t, (y) => f(y)), h = Array.from(c.layers), [p] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), g = h.indexOf(p), E = m ? h.indexOf(m) : -1, N = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = E >= g, P = Yo((y) => {
      const A = y.target, x = [...c.branches].some((I) => I.contains(A));
      !_ || x || (a == null || a(y), l == null || l(y), y.defaultPrevented || i == null || i());
    }, v), U = Go((y) => {
      const A = y.target;
      [...c.branches].some((I) => I.contains(A)) || (o == null || o(y), l == null || l(y), y.defaultPrevented || i == null || i());
    }, v);
    return Uo((y) => {
      E === c.layers.size - 1 && (r == null || r(y), !y.defaultPrevented && i && (y.preventDefault(), i()));
    }, v), u.useEffect(() => {
      if (m)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Zt = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(m)), c.layers.add(m), Qt(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Zt);
        };
    }, [m, v, n, c]), u.useEffect(() => () => {
      m && (c.layers.delete(m), c.layersWithOutsidePointerEventsDisabled.delete(m), Qt());
    }, [m, c]), u.useEffect(() => {
      const y = () => w({});
      return document.addEventListener(Pt, y), () => document.removeEventListener(Pt, y);
    }, []), /* @__PURE__ */ s(
      le.div,
      {
        ...d,
        ref: S,
        style: {
          pointerEvents: N ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: pe(e.onFocusCapture, U.onFocusCapture),
        onBlurCapture: pe(e.onBlurCapture, U.onBlurCapture),
        onPointerDownCapture: pe(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
_n.displayName = Ho;
var zo = "DismissableLayerBranch", qo = u.forwardRef((e, t) => {
  const n = u.useContext(wn), r = u.useRef(null), a = Ce(t, r);
  return u.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ s(le.div, { ...e, ref: a });
});
qo.displayName = zo;
function Yo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = u.useRef(!1), a = u.useRef(() => {
  });
  return u.useEffect(() => {
    const o = (i) => {
      if (i.target && !r.current) {
        let d = function() {
          yn(
            jo,
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
function Go(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const a = (o) => {
      o.target && !r.current && yn(Vo, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Qt() {
  const e = new CustomEvent(Pt);
  document.dispatchEvent(e);
}
function yn(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), r ? Wo(a, o) : a.dispatchEvent(o);
}
var _t = "focusScope.autoFocusOnMount", yt = "focusScope.autoFocusOnUnmount", Jt = { bubbles: !1, cancelable: !0 }, Ko = "FocusScope", bn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...l
  } = e, [i, d] = u.useState(null), c = ze(a), m = ze(o), f = u.useRef(null), v = Ce(t, (h) => d(h)), w = u.useRef({
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
        if (w.paused || !i) return;
        const _ = N.target;
        i.contains(_) ? f.current = _ : he(f.current, { select: !0 });
      }, p = function(N) {
        if (w.paused || !i) return;
        const _ = N.relatedTarget;
        _ !== null && (i.contains(_) || he(f.current, { select: !0 }));
      }, g = function(N) {
        if (document.activeElement === document.body)
          for (const P of N)
            P.removedNodes.length > 0 && he(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", p);
      const E = new MutationObserver(g);
      return i && E.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", p), E.disconnect();
      };
    }
  }, [r, i, w.paused]), u.useEffect(() => {
    if (i) {
      tn.add(w);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const g = new CustomEvent(_t, Jt);
        i.addEventListener(_t, c), i.dispatchEvent(g), g.defaultPrevented || (Xo(ti(Cn(i)), { select: !0 }), document.activeElement === h && he(i));
      }
      return () => {
        i.removeEventListener(_t, c), setTimeout(() => {
          const g = new CustomEvent(yt, Jt);
          i.addEventListener(yt, m), i.dispatchEvent(g), g.defaultPrevented || he(h ?? document.body, { select: !0 }), i.removeEventListener(yt, m), tn.remove(w);
        }, 0);
      };
    }
  }, [i, c, m, w]);
  const S = u.useCallback(
    (h) => {
      if (!n && !r || w.paused) return;
      const p = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, g = document.activeElement;
      if (p && g) {
        const E = h.currentTarget, [N, _] = Zo(E);
        N && _ ? !h.shiftKey && g === _ ? (h.preventDefault(), n && he(N, { select: !0 })) : h.shiftKey && g === N && (h.preventDefault(), n && he(_, { select: !0 })) : g === E && h.preventDefault();
      }
    },
    [n, r, w.paused]
  );
  return /* @__PURE__ */ s(le.div, { tabIndex: -1, ...l, ref: v, onKeyDown: S });
});
bn.displayName = Ko;
function Xo(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (he(r, { select: t }), document.activeElement !== n) return;
}
function Zo(e) {
  const t = Cn(e), n = en(t, e), r = en(t.reverse(), e);
  return [n, r];
}
function Cn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function en(e, t) {
  for (const n of e)
    if (!Qo(n, { upTo: t })) return n;
}
function Qo(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Jo(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function he(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Jo(e) && t && e.select();
  }
}
var tn = ei();
function ei() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = nn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = nn(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function nn(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ti(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ni = "Portal", En = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [a, o] = u.useState(!1);
  Ve(() => o(!0), []);
  const l = n || a && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return l ? Sr.createPortal(/* @__PURE__ */ s(le.div, { ...r, ref: t }), l) : null;
});
En.displayName = ni;
function ri(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var ut = (e) => {
  const { present: t, children: n } = e, r = ai(t), a = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), o = Ce(r.ref, oi(a));
  return typeof n == "function" || r.isPresent ? u.cloneElement(a, { ref: o }) : null;
};
ut.displayName = "Presence";
function ai(e) {
  const [t, n] = u.useState(), r = u.useRef(null), a = u.useRef(e), o = u.useRef("none"), l = e ? "mounted" : "unmounted", [i, d] = ri(l, {
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
    const c = Ze(r.current);
    o.current = i === "mounted" ? c : "none";
  }, [i]), Ve(() => {
    const c = r.current, m = a.current;
    if (m !== e) {
      const v = o.current, w = Ze(c);
      e ? d("MOUNT") : w === "none" || (c == null ? void 0 : c.display) === "none" ? d("UNMOUNT") : d(m && v !== w ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, d]), Ve(() => {
    if (t) {
      let c;
      const m = t.ownerDocument.defaultView ?? window, f = (w) => {
        const h = Ze(r.current).includes(CSS.escape(w.animationName));
        if (w.target === t && h && (d("ANIMATION_END"), !a.current)) {
          const p = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = p);
          });
        }
      }, v = (w) => {
        w.target === t && (o.current = Ze(r.current));
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
function Ze(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function oi(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var bt = 0;
function ii() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? rn()), document.body.insertAdjacentElement("beforeend", e[1] ?? rn()), bt++, () => {
      bt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), bt--;
    };
  }, []);
}
function rn() {
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
function Sn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function si(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var ot = "right-scroll-bar-position", it = "width-before-scroll-bar", li = "with-scroll-bars-hidden", ci = "--removed-body-scroll-bar-size";
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ui(e, t) {
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
var di = typeof window < "u" ? u.useLayoutEffect : u.useEffect, an = /* @__PURE__ */ new WeakMap();
function fi(e, t) {
  var n = ui(null, function(r) {
    return e.forEach(function(a) {
      return Ct(a, r);
    });
  });
  return di(function() {
    var r = an.get(n);
    if (r) {
      var a = new Set(r), o = new Set(e), l = n.current;
      a.forEach(function(i) {
        o.has(i) || Ct(i, null);
      }), o.forEach(function(i) {
        a.has(i) || Ct(i, l);
      });
    }
    an.set(n, e);
  }, [e]), n;
}
function mi(e) {
  return e;
}
function vi(e, t) {
  t === void 0 && (t = mi);
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
function hi(e) {
  e === void 0 && (e = {});
  var t = vi(null);
  return t.options = oe({ async: !0, ssr: !1 }, e), t;
}
var Nn = function(e) {
  var t = e.sideCar, n = Sn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, oe({}, n));
};
Nn.isSideCarExport = !0;
function pi(e, t) {
  return e.useMedium(t), Nn;
}
var Rn = hi(), Et = function() {
}, dt = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Et,
    onWheelCapture: Et,
    onTouchMoveCapture: Et
  }), a = r[0], o = r[1], l = e.forwardProps, i = e.children, d = e.className, c = e.removeScrollBar, m = e.enabled, f = e.shards, v = e.sideCar, w = e.noRelative, S = e.noIsolation, h = e.inert, p = e.allowPinchZoom, g = e.as, E = g === void 0 ? "div" : g, N = e.gapMode, _ = Sn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = v, U = fi([n, t]), y = oe(oe({}, _), a);
  return u.createElement(
    u.Fragment,
    null,
    m && u.createElement(P, { sideCar: Rn, removeScrollBar: c, shards: f, noRelative: w, noIsolation: S, inert: h, setCallbacks: o, allowPinchZoom: !!p, lockRef: n, gapMode: N }),
    l ? u.cloneElement(u.Children.only(i), oe(oe({}, y), { ref: U })) : u.createElement(E, oe({}, y, { className: d, ref: U }), i)
  );
});
dt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
dt.classNames = {
  fullWidth: it,
  zeroRight: ot
};
var gi = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function wi() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = gi();
  return t && e.setAttribute("nonce", t), e;
}
function _i(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function yi(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var bi = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = wi()) && (_i(t, n), yi(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ci = function() {
  var e = bi();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Tn = function() {
  var e = Ci(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, Ei = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, St = function(e) {
  return parseInt(e || "", 10) || 0;
}, Si = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [St(n), St(r), St(a)];
}, Ni = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ei;
  var t = Si(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Ri = Tn(), Pe = "data-scroll-locked", Ti = function(e, t, n, r) {
  var a = e.left, o = e.top, l = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(li, ` {
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
  
  .`).concat(ot, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(it, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ot, " .").concat(ot, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(it, " .").concat(it, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Pe, `] {
    `).concat(ci, ": ").concat(i, `px;
  }
`);
}, on = function() {
  var e = parseInt(document.body.getAttribute(Pe) || "0", 10);
  return isFinite(e) ? e : 0;
}, Di = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Pe, (on() + 1).toString()), function() {
      var e = on() - 1;
      e <= 0 ? document.body.removeAttribute(Pe) : document.body.setAttribute(Pe, e.toString());
    };
  }, []);
}, xi = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  Di();
  var o = u.useMemo(function() {
    return Ni(a);
  }, [a]);
  return u.createElement(Ri, { styles: Ti(o, !t, a, n ? "" : "!important") });
}, Ot = !1;
if (typeof window < "u")
  try {
    var Qe = Object.defineProperty({}, "passive", {
      get: function() {
        return Ot = !0, !0;
      }
    });
    window.addEventListener("test", Qe, Qe), window.removeEventListener("test", Qe, Qe);
  } catch {
    Ot = !1;
  }
var Re = Ot ? { passive: !1 } : !1, Ai = function(e) {
  return e.tagName === "TEXTAREA";
}, Dn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Ai(e) && n[t] === "visible")
  );
}, Pi = function(e) {
  return Dn(e, "overflowY");
}, Oi = function(e) {
  return Dn(e, "overflowX");
}, sn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = xn(e, r);
    if (a) {
      var o = An(e, r), l = o[1], i = o[2];
      if (l > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, ki = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, $i = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, xn = function(e, t) {
  return e === "v" ? Pi(t) : Oi(t);
}, An = function(e, t) {
  return e === "v" ? ki(t) : $i(t);
}, Mi = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Li = function(e, t, n, r, a) {
  var o = Mi(e, window.getComputedStyle(t).direction), l = o * r, i = n.target, d = t.contains(i), c = !1, m = l > 0, f = 0, v = 0;
  do {
    if (!i)
      break;
    var w = An(e, i), S = w[0], h = w[1], p = w[2], g = h - p - o * S;
    (S || g) && xn(e, i) && (f += g, v += S);
    var E = i.parentNode;
    i = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
  } while (
    // portaled content
    !d && i !== document.body || // self content
    d && (t.contains(i) || t === i)
  );
  return (m && Math.abs(f) < 1 || !m && Math.abs(v) < 1) && (c = !0), c;
}, Je = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ln = function(e) {
  return [e.deltaX, e.deltaY];
}, cn = function(e) {
  return e && "current" in e ? e.current : e;
}, Ii = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Bi = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Fi = 0, Te = [];
function Wi(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), a = u.useState(Fi++)[0], o = u.useState(Tn)[0], l = u.useRef(e);
  u.useEffect(function() {
    l.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var h = si([e.lockRef.current], (e.shards || []).map(cn), !0).filter(Boolean);
      return h.forEach(function(p) {
        return p.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), h.forEach(function(p) {
          return p.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(h, p) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !l.current.allowPinchZoom;
    var g = Je(h), E = n.current, N = "deltaX" in h ? h.deltaX : E[0] - g[0], _ = "deltaY" in h ? h.deltaY : E[1] - g[1], P, U = h.target, y = Math.abs(N) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && y === "h" && U.type === "range")
      return !1;
    var A = window.getSelection(), x = A && A.anchorNode, I = x ? x === U || x.contains(U) : !1;
    if (I)
      return !1;
    var B = sn(y, U);
    if (!B)
      return !0;
    if (B ? P = y : (P = y === "v" ? "h" : "v", B = sn(y, U)), !B)
      return !1;
    if (!r.current && "changedTouches" in h && (N || _) && (r.current = P), !P)
      return !0;
    var q = r.current || P;
    return Li(q, p, h, q === "h" ? N : _);
  }, []), d = u.useCallback(function(h) {
    var p = h;
    if (!(!Te.length || Te[Te.length - 1] !== o)) {
      var g = "deltaY" in p ? ln(p) : Je(p), E = t.current.filter(function(P) {
        return P.name === p.type && (P.target === p.target || p.target === P.shadowParent) && Ii(P.delta, g);
      })[0];
      if (E && E.should) {
        p.cancelable && p.preventDefault();
        return;
      }
      if (!E) {
        var N = (l.current.shards || []).map(cn).filter(Boolean).filter(function(P) {
          return P.contains(p.target);
        }), _ = N.length > 0 ? i(p, N[0]) : !l.current.noIsolation;
        _ && p.cancelable && p.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(h, p, g, E) {
    var N = { name: h, delta: p, target: g, should: E, shadowParent: Ui(g) };
    t.current.push(N), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== N;
      });
    }, 1);
  }, []), m = u.useCallback(function(h) {
    n.current = Je(h), r.current = void 0;
  }, []), f = u.useCallback(function(h) {
    c(h.type, ln(h), h.target, i(h, e.lockRef.current));
  }, []), v = u.useCallback(function(h) {
    c(h.type, Je(h), h.target, i(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Te.push(o), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", d, Re), document.addEventListener("touchmove", d, Re), document.addEventListener("touchstart", m, Re), function() {
      Te = Te.filter(function(h) {
        return h !== o;
      }), document.removeEventListener("wheel", d, Re), document.removeEventListener("touchmove", d, Re), document.removeEventListener("touchstart", m, Re);
    };
  }, []);
  var w = e.removeScrollBar, S = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    S ? u.createElement(o, { styles: Bi(a) }) : null,
    w ? u.createElement(xi, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ui(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Hi = pi(Rn, Wi);
var Pn = u.forwardRef(function(e, t) {
  return u.createElement(dt, oe({}, e, { ref: t, sideCar: Hi }));
});
Pn.classNames = dt.classNames;
var ji = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, De = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), tt = {}, Nt = 0, On = function(e) {
  return e && (e.host || On(e.parentNode));
}, Vi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = On(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, zi = function(e, t, n, r) {
  var a = Vi(t, Array.isArray(e) ? e : [e]);
  tt[n] || (tt[n] = /* @__PURE__ */ new WeakMap());
  var o = tt[n], l = [], i = /* @__PURE__ */ new Set(), d = new Set(a), c = function(f) {
    !f || i.has(f) || (i.add(f), c(f.parentNode));
  };
  a.forEach(c);
  var m = function(f) {
    !f || d.has(f) || Array.prototype.forEach.call(f.children, function(v) {
      if (i.has(v))
        m(v);
      else
        try {
          var w = v.getAttribute(r), S = w !== null && w !== "false", h = (De.get(v) || 0) + 1, p = (o.get(v) || 0) + 1;
          De.set(v, h), o.set(v, p), l.push(v), h === 1 && S && et.set(v, !0), p === 1 && v.setAttribute(n, "true"), S || v.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", v, g);
        }
    });
  };
  return m(t), i.clear(), Nt++, function() {
    l.forEach(function(f) {
      var v = De.get(f) - 1, w = o.get(f) - 1;
      De.set(f, v), o.set(f, w), v || (et.has(f) || f.removeAttribute(r), et.delete(f)), w || f.removeAttribute(n);
    }), Nt--, Nt || (De = /* @__PURE__ */ new WeakMap(), De = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), tt = {});
  };
}, qi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = ji(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), zi(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, ft = "Dialog", [kn] = Ro(ft), [Yi, ne] = kn(ft), $n = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: l = !0
  } = e, i = u.useRef(null), d = u.useRef(null), [c, m] = Po({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: ft
  });
  return /* @__PURE__ */ s(
    Yi,
    {
      scope: t,
      triggerRef: i,
      contentRef: d,
      contentId: wt(),
      titleId: wt(),
      descriptionId: wt(),
      open: c,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((f) => !f), [m]),
      modal: l,
      children: n
    }
  );
};
$n.displayName = ft;
var Mn = "DialogTrigger", Ln = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(Mn, n), o = Ce(t, a.triggerRef);
    return /* @__PURE__ */ s(
      le.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": It(a.open),
        ...r,
        ref: o,
        onClick: pe(e.onClick, a.onOpenToggle)
      }
    );
  }
);
Ln.displayName = Mn;
var Mt = "DialogPortal", [Gi, In] = kn(Mt, {
  forceMount: void 0
}), Bn = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: a } = e, o = ne(Mt, t);
  return /* @__PURE__ */ s(Gi, { scope: t, forceMount: n, children: u.Children.map(r, (l) => /* @__PURE__ */ s(ut, { present: n || o.open, children: /* @__PURE__ */ s(En, { asChild: !0, container: a, children: l }) })) });
};
Bn.displayName = Mt;
var ct = "DialogOverlay", Fn = u.forwardRef(
  (e, t) => {
    const n = In(ct, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = ne(ct, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ s(ut, { present: r || o.open, children: /* @__PURE__ */ s(Xi, { ...a, ref: t }) }) : null;
  }
);
Fn.displayName = ct;
var Ki = /* @__PURE__ */ gn("DialogOverlay.RemoveScroll"), Xi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(ct, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ s(Pn, { as: Ki, allowPinchZoom: !0, shards: [a.contentRef], children: /* @__PURE__ */ s(
        le.div,
        {
          "data-state": It(a.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), be = "DialogContent", Wn = u.forwardRef(
  (e, t) => {
    const n = In(be, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = ne(be, e.__scopeDialog);
    return /* @__PURE__ */ s(ut, { present: r || o.open, children: o.modal ? /* @__PURE__ */ s(Zi, { ...a, ref: t }) : /* @__PURE__ */ s(Qi, { ...a, ref: t }) });
  }
);
Wn.displayName = be;
var Zi = u.forwardRef(
  (e, t) => {
    const n = ne(be, e.__scopeDialog), r = u.useRef(null), a = Ce(t, n.contentRef, r);
    return u.useEffect(() => {
      const o = r.current;
      if (o) return qi(o);
    }, []), /* @__PURE__ */ s(
      Un,
      {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: pe(e.onCloseAutoFocus, (o) => {
          var l;
          o.preventDefault(), (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: pe(e.onPointerDownOutside, (o) => {
          const l = o.detail.originalEvent, i = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || i) && o.preventDefault();
        }),
        onFocusOutside: pe(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), Qi = u.forwardRef(
  (e, t) => {
    const n = ne(be, e.__scopeDialog), r = u.useRef(!1), a = u.useRef(!1);
    return /* @__PURE__ */ s(
      Un,
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
), Un = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: o, ...l } = e, i = ne(be, n), d = u.useRef(null), c = Ce(t, d);
    return ii(), /* @__PURE__ */ C(st, { children: [
      /* @__PURE__ */ s(
        bn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: a,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ s(
            _n,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": It(i.open),
              ...l,
              ref: c,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ C(st, { children: [
        /* @__PURE__ */ s(Ji, { titleId: i.titleId }),
        /* @__PURE__ */ s(ts, { contentRef: d, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Lt = "DialogTitle", Hn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(Lt, n);
    return /* @__PURE__ */ s(le.h2, { id: a.titleId, ...r, ref: t });
  }
);
Hn.displayName = Lt;
var jn = "DialogDescription", Vn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(jn, n);
    return /* @__PURE__ */ s(le.p, { id: a.descriptionId, ...r, ref: t });
  }
);
Vn.displayName = jn;
var zn = "DialogClose", qn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(zn, n);
    return /* @__PURE__ */ s(
      le.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: pe(e.onClick, () => a.onOpenChange(!1))
      }
    );
  }
);
qn.displayName = zn;
function It(e) {
  return e ? "open" : "closed";
}
var Yn = "DialogTitleWarning", [rc, Gn] = No(Yn, {
  contentName: be,
  titleName: Lt,
  docsSlug: "dialog"
}), Ji = ({ titleId: e }) => {
  const t = Gn(Yn), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, es = "DialogDescriptionWarning", ts = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Gn(es).contentName}}.`;
  return u.useEffect(() => {
    var o;
    const a = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && a && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, ns = $n, rs = Ln, as = Bn, os = Fn, is = Wn, ss = Hn, ls = Vn, cs = qn;
function us(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Kn = b.createContext({
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
}), qe = () => {
  const e = b.useContext(Kn);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
us(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function ds() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function fs() {
  return Bt(/^Mac/);
}
function ms() {
  return Bt(/^iPhone/);
}
function un() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function vs() {
  return Bt(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  fs() && navigator.maxTouchPoints > 1;
}
function Xn() {
  return ms() || vs();
}
function Bt(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const hs = 24, ps = typeof window < "u" ? vn : Ae;
function dn(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const Rt = typeof document < "u" && window.visualViewport;
function fn(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Zn(e) {
  for (fn(e) && (e = e.parentElement); e && !fn(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const gs = /* @__PURE__ */ new Set([
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
let nt = 0, Tt;
function ws(e = {}) {
  let { isDisabled: t } = e;
  ps(() => {
    if (!t)
      return nt++, nt === 1 && Xn() && (Tt = _s()), () => {
        nt--, nt === 0 && (Tt == null || Tt());
      };
  }, [
    t
  ]);
}
function _s() {
  let e, t = 0, n = (f) => {
    e = Zn(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let v = f.changedTouches[0].pageY, w = e.scrollTop, S = e.scrollHeight - e.clientHeight;
    S !== 0 && ((w <= 0 && v > t || w >= S && v < t) && f.preventDefault(), t = v);
  }, a = (f) => {
    let v = f.target;
    kt(v) && v !== document.activeElement && (f.preventDefault(), v.style.transform = "translateY(-2000px)", v.focus(), requestAnimationFrame(() => {
      v.style.transform = "";
    }));
  }, o = (f) => {
    let v = f.target;
    kt(v) && (v.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      v.style.transform = "", Rt && (Rt.height < window.innerHeight ? requestAnimationFrame(() => {
        mn(v);
      }) : Rt.addEventListener("resize", () => mn(v), {
        once: !0
      }));
    }));
  }, l = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, d = window.pageYOffset, c = dn(ys(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let m = dn(Ue(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Ue(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Ue(document, "touchend", a, {
    passive: !1,
    capture: !0
  }), Ue(document, "focus", o, !0), Ue(window, "scroll", l));
  return () => {
    c(), m(), window.scrollTo(i, d);
  };
}
function ys(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Ue(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function mn(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Zn(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = e.getBoundingClientRect().bottom;
      const l = n.getBoundingClientRect().bottom + hs;
      o > l && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function kt(e) {
  return e instanceof HTMLInputElement && !gs.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function bs(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Cs(...e) {
  return (t) => e.forEach((n) => bs(n, t));
}
function Qn(...e) {
  return u.useCallback(Cs(...e), e);
}
const Jn = /* @__PURE__ */ new WeakMap();
function j(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([a, o]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, o);
      return;
    }
    r[a] = e.style[a], e.style[a] = o;
  }), !n && Jn.set(e, r);
}
function Es(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Jn.get(e);
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
function rt(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let a = r.match(/^matrix3d\((.+)\)$/);
  return a ? parseFloat(a[1].split(", ")[W(t) ? 13 : 12]) : (a = r.match(/^matrix\((.+)\)$/), a ? parseFloat(a[1].split(", ")[W(t) ? 5 : 4]) : null);
}
function Ss(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Dt(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function Ns(...e) {
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
}, er = 0.4, Rs = 0.25, Ts = 100, tr = 8, _e = 16, $t = 26, xt = "vaul-dragging";
function nr(e) {
  const t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function Ds({ defaultProp: e, onChange: t }) {
  const n = b.useState(e), [r] = n, a = b.useRef(r), o = nr(t);
  return b.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [
    r,
    a,
    o
  ]), n;
}
function rr({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = Ds({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, l = o ? e : r, i = nr(n), d = b.useCallback((c) => {
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
function xs({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: a, fadeFromIndex: o, onSnapPointChange: l, direction: i = "bottom", container: d, snapToSequentialPoint: c }) {
  const [m, f] = rr({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [v, w] = b.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  b.useEffect(() => {
    function y() {
      w({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []);
  const S = b.useMemo(() => m === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    m
  ]), h = b.useMemo(() => {
    var y;
    return (y = n == null ? void 0 : n.findIndex((A) => A === m)) != null ? y : null;
  }, [
    n,
    m
  ]), p = n && n.length > 0 && (o || o === 0) && !Number.isNaN(o) && n[o] === m || !n, g = b.useMemo(() => {
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
    var A;
    return (A = n == null ? void 0 : n.map((x) => {
      const I = typeof x == "string";
      let B = 0;
      if (I && (B = parseInt(x, 10)), W(i)) {
        const T = I ? B : v ? x * y.height : 0;
        return v ? i === "bottom" ? y.height - T : -y.height + T : T;
      }
      const q = I ? B : v ? x * y.width : 0;
      return v ? i === "right" ? y.width - q : -y.width + q : q;
    })) != null ? A : [];
  }, [
    n,
    v,
    d
  ]), E = b.useMemo(() => h !== null ? g == null ? void 0 : g[h] : null, [
    g,
    h
  ]), N = b.useCallback((y) => {
    var A;
    const x = (A = g == null ? void 0 : g.findIndex((I) => I === y)) != null ? A : null;
    l(x), j(r.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(i) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)`
    }), g && x !== g.length - 1 && o !== void 0 && x !== o && x < o ? j(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "0"
    }) : j(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), f(n == null ? void 0 : n[Math.max(x, 0)]);
  }, [
    r.current,
    n,
    g,
    o,
    a,
    f
  ]);
  b.useEffect(() => {
    if (m || e) {
      var y;
      const A = (y = n == null ? void 0 : n.findIndex((x) => x === e || x === m)) != null ? y : -1;
      g && A !== -1 && typeof g[A] == "number" && N(g[A]);
    }
  }, [
    m,
    e,
    n,
    g,
    N
  ]);
  function _({ draggedDistance: y, closeDrawer: A, velocity: x, dismissible: I }) {
    if (o === void 0) return;
    const B = i === "bottom" || i === "right" ? (E ?? 0) - y : (E ?? 0) + y, q = h === o - 1, T = h === 0, X = y > 0;
    if (q && j(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), !c && x > 2 && !X) {
      I ? A() : N(g[0]);
      return;
    }
    if (!c && x > 2 && X && g && n) {
      N(g[n.length - 1]);
      return;
    }
    const Y = g == null ? void 0 : g.reduce((z, ie) => typeof z != "number" || typeof ie != "number" ? z : Math.abs(ie - B) < Math.abs(z - B) ? ie : z), Z = W(i) ? window.innerHeight : window.innerWidth;
    if (x > er && Math.abs(y) < Z * 0.4) {
      const z = X ? 1 : -1;
      if (z > 0 && S && n) {
        N(g[n.length - 1]);
        return;
      }
      if (T && z < 0 && I && A(), h === null) return;
      N(g[h + z]);
      return;
    }
    N(Y);
  }
  function P({ draggedDistance: y }) {
    if (E === null) return;
    const A = i === "bottom" || i === "right" ? E - y : E + y;
    (i === "bottom" || i === "right") && A < g[g.length - 1] || (i === "top" || i === "left") && A > g[g.length - 1] || j(r.current, {
      transform: W(i) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
    });
  }
  function U(y, A) {
    if (!n || typeof h != "number" || !g || o === void 0) return null;
    const x = h === o - 1;
    if (h >= o && A)
      return 0;
    if (x && !A) return 1;
    if (!p && !x) return null;
    const B = x ? h + 1 : h - 1, q = x ? g[B] - g[B - 1] : g[B + 1] - g[B], T = y / Math.abs(q);
    return x ? 1 - T : T;
  }
  return {
    isLastSnapPoint: S,
    activeSnapPoint: m,
    shouldFade: p,
    getPercentageDragged: U,
    setActiveSnapPoint: f,
    activeSnapPointIndex: h,
    onRelease: _,
    onDrag: P,
    snapPointsOffset: g
  };
}
const As = () => () => {
};
function Ps() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: a } = qe(), o = b.useRef(null), l = br(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - $t) / window.innerWidth;
  }
  b.useEffect(() => {
    if (t && n) {
      o.current && clearTimeout(o.current);
      const d = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!d) return;
      Ns(r && !a ? Dt(document.body, {
        background: "black"
      }) : As, Dt(d, {
        transformOrigin: W(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${L.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
      }));
      const c = Dt(d, {
        borderRadius: `${tr}px`,
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
let He = null;
function Os({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: a, noBodyStyles: o }) {
  const [l, i] = b.useState(() => typeof window < "u" ? window.location.href : ""), d = b.useRef(0), c = b.useCallback(() => {
    if (un() && He === null && e && !o) {
      He = {
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
        const w = v - window.innerHeight;
        w && d.current >= v && (document.body.style.top = `${-(d.current + w)}px`);
      }), 300);
    }
  }, [
    e
  ]), m = b.useCallback(() => {
    if (un() && He !== null && !o) {
      const f = -parseInt(document.body.style.top, 10), v = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, He), window.requestAnimationFrame(() => {
        if (a && l !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(v, f);
      }), He = null;
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
function ks({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: a, snapPoints: o, shouldScaleBackground: l = !1, setBackgroundColorOnScale: i = !0, closeThreshold: d = Rs, scrollLockTimeout: c = Ts, dismissible: m = !0, handleOnly: f = !1, fadeFromIndex: v = o && o.length - 1, activeSnapPoint: w, setActiveSnapPoint: S, fixed: h, modal: p = !0, onClose: g, nested: E, noBodyStyles: N = !1, direction: _ = "bottom", defaultOpen: P = !1, disablePreventScroll: U = !0, snapToSequentialPoint: y = !1, preventScrollRestoration: A = !1, repositionInputs: x = !0, onAnimationEnd: I, container: B, autoFocus: q = !1 }) {
  var T, X;
  const [Y = !1, Z] = rr({
    defaultProp: P,
    prop: e,
    onChange: (R) => {
      t == null || t(R), !R && !E && fr(), setTimeout(() => {
        I == null || I(R);
      }, L.DURATION * 1e3), R && !p && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), R || (document.body.style.pointerEvents = "auto");
    }
  }), [z, ie] = b.useState(!1), [ce, ke] = b.useState(!1), [ir, Ft] = b.useState(!1), Ee = b.useRef(null), Ye = b.useRef(null), mt = b.useRef(null), vt = b.useRef(null), $e = b.useRef(null), Me = b.useRef(!1), ht = b.useRef(null), pt = b.useRef(0), Se = b.useRef(!1), Wt = b.useRef(!P), Ut = b.useRef(0), D = b.useRef(null), Ht = b.useRef(((T = D.current) == null ? void 0 : T.getBoundingClientRect().height) || 0), jt = b.useRef(((X = D.current) == null ? void 0 : X.getBoundingClientRect().width) || 0), gt = b.useRef(0), sr = b.useCallback((R) => {
    o && R === Le.length - 1 && (Ye.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: lr, activeSnapPointIndex: Ne, setActiveSnapPoint: Vt, onRelease: cr, snapPointsOffset: Le, onDrag: ur, shouldFade: zt, getPercentageDragged: dr } = xs({
    snapPoints: o,
    activeSnapPointProp: w,
    setActiveSnapPointProp: S,
    drawerRef: D,
    fadeFromIndex: v,
    overlayRef: Ee,
    onSnapPointChange: sr,
    direction: _,
    container: B,
    snapToSequentialPoint: y
  });
  ws({
    isDisabled: !Y || ce || !p || ir || !z || !x || !U
  });
  const { restorePositionSetting: fr } = Os({
    isOpen: Y,
    modal: p,
    nested: E ?? !1,
    hasBeenOpened: z,
    preventScrollRestoration: A,
    noBodyStyles: N
  });
  function Ge() {
    return (window.innerWidth - $t) / window.innerWidth;
  }
  function mr(R) {
    var $, M;
    !m && !o || D.current && !D.current.contains(R.target) || (Ht.current = (($ = D.current) == null ? void 0 : $.getBoundingClientRect().height) || 0, jt.current = ((M = D.current) == null ? void 0 : M.getBoundingClientRect().width) || 0, ke(!0), mt.current = /* @__PURE__ */ new Date(), Xn() && window.addEventListener("touchend", () => Me.current = !1, {
      once: !0
    }), R.target.setPointerCapture(R.pointerId), pt.current = W(_) ? R.pageY : R.pageX);
  }
  function qt(R, $) {
    var M;
    let O = R;
    const F = (M = window.getSelection()) == null ? void 0 : M.toString(), K = D.current ? rt(D.current, _) : null, G = /* @__PURE__ */ new Date();
    if (O.tagName === "SELECT" || O.hasAttribute("data-vaul-no-drag") || O.closest("[data-vaul-no-drag]"))
      return !1;
    if (_ === "right" || _ === "left")
      return !0;
    if (Ye.current && G.getTime() - Ye.current.getTime() < 500)
      return !1;
    if (K !== null && (_ === "bottom" ? K > 0 : K < 0))
      return !0;
    if (F && F.length > 0)
      return !1;
    if ($e.current && G.getTime() - $e.current.getTime() < c && K === 0 || $)
      return $e.current = G, !1;
    for (; O; ) {
      if (O.scrollHeight > O.clientHeight) {
        if (O.scrollTop !== 0)
          return $e.current = /* @__PURE__ */ new Date(), !1;
        if (O.getAttribute("role") === "dialog")
          return !0;
      }
      O = O.parentNode;
    }
    return !0;
  }
  function vr(R) {
    if (D.current && ce) {
      const $ = _ === "bottom" || _ === "right" ? 1 : -1, M = (pt.current - (W(_) ? R.pageY : R.pageX)) * $, O = M > 0, F = o && !m && !O;
      if (F && Ne === 0) return;
      const K = Math.abs(M), G = document.querySelector("[data-vaul-drawer-wrapper]"), ue = _ === "bottom" || _ === "top" ? Ht.current : jt.current;
      let Q = K / ue;
      const ge = dr(K, O);
      if (ge !== null && (Q = ge), F && Q >= 1 || !Me.current && !qt(R.target, O)) return;
      if (D.current.classList.add(xt), Me.current = !0, j(D.current, {
        transition: "none"
      }), j(Ee.current, {
        transition: "none"
      }), o && ur({
        draggedDistance: M
      }), O && !o) {
        const re = Ss(M), Ke = Math.min(re * -1, 0) * $;
        j(D.current, {
          transform: W(_) ? `translate3d(0, ${Ke}px, 0)` : `translate3d(${Ke}px, 0, 0)`
        });
        return;
      }
      const de = 1 - Q;
      if ((zt || v && Ne === v - 1) && (r == null || r(R, Q), j(Ee.current, {
        opacity: `${de}`,
        transition: "none"
      }, !0)), G && Ee.current && l) {
        const re = Math.min(Ge() + Q * (1 - Ge()), 1), Ke = 8 - Q * 8, Gt = Math.max(0, 14 - Q * 14);
        j(G, {
          borderRadius: `${Ke}px`,
          transform: W(_) ? `scale(${re}) translate3d(0, ${Gt}px, 0)` : `scale(${re}) translate3d(${Gt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!o) {
        const re = K * $;
        j(D.current, {
          transform: W(_) ? `translate3d(0, ${re}px, 0)` : `translate3d(${re}px, 0, 0)`
        });
      }
    }
  }
  b.useEffect(() => {
    window.requestAnimationFrame(() => {
      Wt.current = !0;
    });
  }, []), b.useEffect(() => {
    var R;
    function $() {
      if (!D.current || !x) return;
      const M = document.activeElement;
      if (kt(M) || Se.current) {
        var O;
        const F = ((O = window.visualViewport) == null ? void 0 : O.height) || 0, K = window.innerHeight;
        let G = K - F;
        const ue = D.current.getBoundingClientRect().height || 0, Q = ue > K * 0.8;
        gt.current || (gt.current = ue);
        const ge = D.current.getBoundingClientRect().top;
        if (Math.abs(Ut.current - G) > 60 && (Se.current = !Se.current), o && o.length > 0 && Le && Ne) {
          const de = Le[Ne] || 0;
          G += de;
        }
        if (Ut.current = G, ue > F || Se.current) {
          const de = D.current.getBoundingClientRect().height;
          let re = de;
          de > F && (re = F - (Q ? ge : $t)), h ? D.current.style.height = `${de - Math.max(G, 0)}px` : D.current.style.height = `${Math.max(re, F - ge)}px`;
        } else ds() || (D.current.style.height = `${gt.current}px`);
        o && o.length > 0 && !Se.current ? D.current.style.bottom = "0px" : D.current.style.bottom = `${Math.max(G, 0)}px`;
      }
    }
    return (R = window.visualViewport) == null || R.addEventListener("resize", $), () => {
      var M;
      return (M = window.visualViewport) == null ? void 0 : M.removeEventListener("resize", $);
    };
  }, [
    Ne,
    o,
    Le
  ]);
  function Ie(R) {
    hr(), g == null || g(), R || Z(!1), setTimeout(() => {
      o && Vt(o[0]);
    }, L.DURATION * 1e3);
  }
  function Yt() {
    if (!D.current) return;
    const R = document.querySelector("[data-vaul-drawer-wrapper]"), $ = rt(D.current, _);
    j(D.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), j(Ee.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), l && $ && $ > 0 && Y && j(R, {
      borderRadius: `${tr}px`,
      overflow: "hidden",
      ...W(_) ? {
        transform: `scale(${Ge()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Ge()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${L.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
    }, !0);
  }
  function hr() {
    !ce || !D.current || (D.current.classList.remove(xt), Me.current = !1, ke(!1), vt.current = /* @__PURE__ */ new Date());
  }
  function pr(R) {
    if (!ce || !D.current) return;
    D.current.classList.remove(xt), Me.current = !1, ke(!1), vt.current = /* @__PURE__ */ new Date();
    const $ = rt(D.current, _);
    if (!R || !qt(R.target, !1) || !$ || Number.isNaN($) || mt.current === null) return;
    const M = vt.current.getTime() - mt.current.getTime(), O = pt.current - (W(_) ? R.pageY : R.pageX), F = Math.abs(O) / M;
    if (F > 0.05 && (Ft(!0), setTimeout(() => {
      Ft(!1);
    }, 200)), o) {
      cr({
        draggedDistance: O * (_ === "bottom" || _ === "right" ? 1 : -1),
        closeDrawer: Ie,
        velocity: F,
        dismissible: m
      }), a == null || a(R, !0);
      return;
    }
    if (_ === "bottom" || _ === "right" ? O > 0 : O < 0) {
      Yt(), a == null || a(R, !0);
      return;
    }
    if (F > er) {
      Ie(), a == null || a(R, !1);
      return;
    }
    var K;
    const G = Math.min((K = D.current.getBoundingClientRect().height) != null ? K : 0, window.innerHeight);
    var ue;
    const Q = Math.min((ue = D.current.getBoundingClientRect().width) != null ? ue : 0, window.innerWidth), ge = _ === "left" || _ === "right";
    if (Math.abs($) >= (ge ? Q : G) * d) {
      Ie(), a == null || a(R, !1);
      return;
    }
    a == null || a(R, !0), Yt();
  }
  b.useEffect(() => (Y && (j(document.documentElement, {
    scrollBehavior: "auto"
  }), Ye.current = /* @__PURE__ */ new Date()), () => {
    Es(document.documentElement, "scrollBehavior");
  }), [
    Y
  ]);
  function gr(R) {
    const $ = R ? (window.innerWidth - _e) / window.innerWidth : 1, M = R ? -_e : 0;
    ht.current && window.clearTimeout(ht.current), j(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(_) ? `scale(${$}) translate3d(0, ${M}px, 0)` : `scale(${$}) translate3d(${M}px, 0, 0)`
    }), !R && D.current && (ht.current = setTimeout(() => {
      const O = rt(D.current, _);
      j(D.current, {
        transition: "none",
        transform: W(_) ? `translate3d(0, ${O}px, 0)` : `translate3d(${O}px, 0, 0)`
      });
    }, 500));
  }
  function wr(R, $) {
    if ($ < 0) return;
    const M = (window.innerWidth - _e) / window.innerWidth, O = M + $ * (1 - M), F = -_e + $ * _e;
    j(D.current, {
      transform: W(_) ? `scale(${O}) translate3d(0, ${F}px, 0)` : `scale(${O}) translate3d(${F}px, 0, 0)`,
      transition: "none"
    });
  }
  function _r(R, $) {
    const M = W(_) ? window.innerHeight : window.innerWidth, O = $ ? (M - _e) / M : 1, F = $ ? -_e : 0;
    $ && j(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: W(_) ? `scale(${O}) translate3d(0, ${F}px, 0)` : `scale(${O}) translate3d(${F}px, 0, 0)`
    });
  }
  return b.useEffect(() => {
    p || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    p
  ]), /* @__PURE__ */ b.createElement(ns, {
    defaultOpen: P,
    onOpenChange: (R) => {
      !m && !R || (R ? ie(!0) : Ie(!0), Z(R));
    },
    open: Y
  }, /* @__PURE__ */ b.createElement(Kn.Provider, {
    value: {
      activeSnapPoint: lr,
      snapPoints: o,
      setActiveSnapPoint: Vt,
      drawerRef: D,
      overlayRef: Ee,
      onOpenChange: t,
      onPress: mr,
      onRelease: pr,
      onDrag: vr,
      dismissible: m,
      shouldAnimate: Wt,
      handleOnly: f,
      isOpen: Y,
      isDragging: ce,
      shouldFade: zt,
      closeDrawer: Ie,
      onNestedDrag: wr,
      onNestedOpenChange: gr,
      onNestedRelease: _r,
      keyboardIsOpen: Se,
      modal: p,
      snapPointsOffset: Le,
      activeSnapPointIndex: Ne,
      direction: _,
      shouldScaleBackground: l,
      setBackgroundColorOnScale: i,
      noBodyStyles: N,
      container: B,
      autoFocus: q
    }
  }, n));
}
const ar = /* @__PURE__ */ b.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: a, shouldFade: o, isOpen: l, modal: i, shouldAnimate: d } = qe(), c = Qn(t, n), m = r && r.length > 0;
  if (!i)
    return null;
  const f = b.useCallback((v) => a(v), [
    a
  ]);
  return /* @__PURE__ */ b.createElement(os, {
    onMouseUp: f,
    ref: c,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": l && m ? "true" : "false",
    "data-vaul-snap-points-overlay": l && o ? "true" : "false",
    "data-vaul-animate": d != null && d.current ? "true" : "false",
    ...e
  });
});
ar.displayName = "Drawer.Overlay";
const or = /* @__PURE__ */ b.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, a) {
  const { drawerRef: o, onPress: l, onRelease: i, onDrag: d, keyboardIsOpen: c, snapPointsOffset: m, activeSnapPointIndex: f, modal: v, isOpen: w, direction: S, snapPoints: h, container: p, handleOnly: g, shouldAnimate: E, autoFocus: N } = qe(), [_, P] = b.useState(!1), U = Qn(a, o), y = b.useRef(null), A = b.useRef(null), x = b.useRef(!1), I = h && h.length > 0;
  Ps();
  const B = (T, X, Y = 0) => {
    if (x.current) return !0;
    const Z = Math.abs(T.y), z = Math.abs(T.x), ie = z > Z, ce = [
      "bottom",
      "right"
    ].includes(X) ? 1 : -1;
    if (X === "left" || X === "right") {
      if (!(T.x * ce < 0) && z >= 0 && z <= Y)
        return ie;
    } else if (!(T.y * ce < 0) && Z >= 0 && Z <= Y)
      return !ie;
    return x.current = !0, !0;
  };
  b.useEffect(() => {
    I && window.requestAnimationFrame(() => {
      P(!0);
    });
  }, []);
  function q(T) {
    y.current = null, x.current = !1, i(T);
  }
  return /* @__PURE__ */ b.createElement(is, {
    "data-vaul-drawer-direction": S,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": _ ? "true" : "false",
    "data-vaul-snap-points": w && I ? "true" : "false",
    "data-vaul-custom-container": p ? "true" : "false",
    "data-vaul-animate": E != null && E.current ? "true" : "false",
    ...r,
    ref: U,
    style: m && m.length > 0 ? {
      "--snap-point-height": `${m[f ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (T) => {
      g || (r.onPointerDown == null || r.onPointerDown.call(r, T), y.current = {
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
      if (A.current = T, g || (r.onPointerMove == null || r.onPointerMove.call(r, T), !y.current)) return;
      const X = T.pageY - y.current.y, Y = T.pageX - y.current.x, Z = T.pointerType === "touch" ? 10 : 2;
      B({
        x: Y,
        y: X
      }, S, Z) ? d(T) : (Math.abs(Y) > Z || Math.abs(X) > Z) && (y.current = null);
    },
    onPointerUp: (T) => {
      r.onPointerUp == null || r.onPointerUp.call(r, T), y.current = null, x.current = !1, i(T);
    },
    onPointerOut: (T) => {
      r.onPointerOut == null || r.onPointerOut.call(r, T), q(A.current);
    },
    onContextMenu: (T) => {
      r.onContextMenu == null || r.onContextMenu.call(r, T), A.current && q(A.current);
    }
  });
});
or.displayName = "Drawer.Content";
const $s = 250, Ms = 120, Ls = /* @__PURE__ */ b.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: a, isDragging: o, snapPoints: l, activeSnapPoint: i, setActiveSnapPoint: d, dismissible: c, handleOnly: m, isOpen: f, onPress: v, onDrag: w } = qe(), S = b.useRef(null), h = b.useRef(!1);
  function p() {
    if (h.current) {
      N();
      return;
    }
    window.setTimeout(() => {
      g();
    }, Ms);
  }
  function g() {
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
    const P = l.findIndex((y) => y === i);
    if (P === -1) return;
    const U = l[P + 1];
    d(U);
  }
  function E() {
    S.current = window.setTimeout(() => {
      h.current = !0;
    }, $s);
  }
  function N() {
    S.current && window.clearTimeout(S.current), h.current = !1;
  }
  return /* @__PURE__ */ b.createElement("div", {
    onClick: p,
    onPointerCancel: N,
    onPointerDown: (_) => {
      m && v(_), E();
    },
    onPointerMove: (_) => {
      m && w(_);
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
Ls.displayName = "Drawer.Handle";
function Is(e) {
  const t = qe(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ b.createElement(as, {
    container: n,
    ...r
  });
}
const k = {
  Root: ks,
  Content: or,
  Overlay: ar,
  Trigger: rs,
  Portal: Is,
  Close: cs,
  Title: ss,
  Description: ls
}, Bs = "_overlay_fvui9_3", Fs = "_content_fvui9_10", Ws = "_grabber_fvui9_34", Us = "_headline_fvui9_45", Hs = "_subhead_fvui9_57", js = "_callout_fvui9_69", Vs = "_calloutLabel_fvui9_79", zs = "_calloutRow_fvui9_88", qs = "_calloutGross_fvui9_94", Ys = "_calloutArrow_fvui9_102", Gs = "_calloutNet_fvui9_106", Ks = "_features_fvui9_116", Xs = "_divider_fvui9_125", Zs = "_priceRow_fvui9_133", Qs = "_price_fvui9_133", Js = "_priceNote_fvui9_148", el = "_restore_fvui9_158", V = {
  overlay: Bs,
  content: Fs,
  grabber: Ws,
  headline: Us,
  subhead: Hs,
  callout: js,
  calloutLabel: Vs,
  calloutRow: zs,
  calloutGross: qs,
  calloutArrow: Ys,
  calloutNet: Gs,
  features: Ks,
  divider: Xs,
  priceRow: Zs,
  price: Qs,
  priceNote: Js,
  restore: el
}, tl = [
  { title: "Bonus & overtime modelling", description: "Model any additional income", state: "active" },
  { title: "Marginal tax insight", description: "See what your next £1 is worth", state: "active" },
  { title: "Salary comparison", description: "Coming soon", state: "inactive" }
];
function ac({
  open: e,
  onOpenChange: t,
  trigger: n,
  priceFormatted: r,
  priceNote: a = "one-off · no subscription",
  features: o = tl,
  onPurchase: l,
  onRestore: i,
  isPurchasing: d = !1
}) {
  return /* @__PURE__ */ C(k.Root, { open: e, onOpenChange: t, children: [
    n && /* @__PURE__ */ s(k.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C(k.Portal, { children: [
      /* @__PURE__ */ s(k.Overlay, { className: V.overlay }),
      /* @__PURE__ */ C(k.Content, { className: V.content, "aria-label": "Unlock Netti Pro", children: [
        /* @__PURE__ */ s("div", { className: V.grabber, "aria-hidden": "true" }),
        /* @__PURE__ */ s(k.Title, { className: V.headline, children: "Unlock Netti Pro" }),
        /* @__PURE__ */ s(k.Description, { className: V.subhead, children: "See what you actually keep from your bonus, overtime, and every extra £1 you earn." }),
        /* @__PURE__ */ C("div", { className: V.callout, "aria-label": "Example: £5,000 bonus", children: [
          /* @__PURE__ */ s("span", { className: V.calloutLabel, children: "EXAMPLE  ·  £5,000 BONUS" }),
          /* @__PURE__ */ C("div", { className: V.calloutRow, children: [
            /* @__PURE__ */ s("span", { className: V.calloutGross, children: "£5,000 gross" }),
            /* @__PURE__ */ s("span", { className: V.calloutArrow, "aria-hidden": "true", children: "→" }),
            /* @__PURE__ */ s("span", { className: V.calloutNet, children: "£3,400 take-home" })
          ] })
        ] }),
        /* @__PURE__ */ s("div", { className: V.features, role: "list", "aria-label": "Included features", children: o.map((c, m) => /* @__PURE__ */ s("div", { role: "listitem", children: /* @__PURE__ */ s(Yr, { title: c.title, description: c.description, state: c.state }) }, m)) }),
        /* @__PURE__ */ s("div", { className: V.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ C("div", { className: V.priceRow, children: [
          /* @__PURE__ */ s("span", { className: V.price, children: r }),
          a && /* @__PURE__ */ s("span", { className: V.priceNote, children: a })
        ] }),
        /* @__PURE__ */ s(
          At,
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
            className: V.restore,
            onClick: i,
            children: "Restore purchases"
          }
        )
      ] })
    ] })
  ] });
}
const nl = "_overlay_qhbnf_6", rl = "_content_qhbnf_13", al = "_grabber_qhbnf_33", ol = "_title_qhbnf_42", il = "_list_qhbnf_58", sl = "_divider_qhbnf_65", xe = {
  overlay: nl,
  content: rl,
  grabber: al,
  title: ol,
  list: il,
  divider: sl
};
function oc({
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
      /* @__PURE__ */ s(k.Overlay, { className: xe.overlay }),
      /* @__PURE__ */ C(k.Content, { className: xe.content, "aria-label": r, children: [
        /* @__PURE__ */ s("div", { className: xe.grabber, "aria-hidden": "true" }),
        /* @__PURE__ */ s(k.Title, { className: xe.title, children: r }),
        /* @__PURE__ */ s("div", { className: xe.list, role: "list", children: a.map((l, i) => /* @__PURE__ */ C("div", { role: "listitem", children: [
          /* @__PURE__ */ s(
            ua,
            {
              title: l.title,
              subtitle: l.subtitle,
              onClick: () => o(l.id)
            }
          ),
          i < a.length - 1 && /* @__PURE__ */ s("div", { className: xe.divider, "aria-hidden": "true" })
        ] }, l.id)) })
      ] })
    ] })
  ] });
}
const ll = "_card_mp69k_9", cl = "_left_mp69k_22", ul = "_label_mp69k_30", dl = "_amountRow_mp69k_37", fl = "_gross_mp69k_44", ml = "_frequency_mp69k_50", vl = "_right_mp69k_57", hl = "_periodLabel_mp69k_65", pl = "_periodAmount_mp69k_73", se = {
  card: ll,
  left: cl,
  label: ul,
  amountRow: dl,
  gross: fl,
  frequency: ml,
  right: vl,
  periodLabel: hl,
  periodAmount: pl
};
function ic({
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
const gl = "_card_13yqi_7", wl = "_header_13yqi_19", _l = "_title_13yqi_25", yl = "_subtitle_13yqi_36", at = {
  card: gl,
  header: wl,
  title: _l,
  subtitle: yl
};
function sc({ children: e, theme: t = "light", title: n, subtitle: r, className: a }) {
  return /* @__PURE__ */ C(
    "div",
    {
      "data-theme": t,
      className: [at.card, a ?? ""].filter(Boolean).join(" "),
      children: [
        (n || r) && /* @__PURE__ */ C("div", { className: at.header, children: [
          n && /* @__PURE__ */ s("h2", { className: at.title, children: n }),
          r && /* @__PURE__ */ s("p", { className: at.subtitle, children: r })
        ] }),
        e
      ]
    }
  );
}
const bl = "_overlay_1ybzo_7", Cl = "_content_1ybzo_14", El = "_handle_1ybzo_35", Sl = "_header_1ybzo_45", Nl = "_body_1ybzo_49", Rl = "_footer_1ybzo_56", Tl = "_srOnly_1ybzo_62", ye = {
  overlay: bl,
  content: Cl,
  handle: El,
  header: Sl,
  body: Nl,
  footer: Rl,
  srOnly: Tl
}, Dl = /* @__PURE__ */ s("div", { className: ye.handle, "aria-hidden": "true" });
function lc({
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
  const [m, f] = Oe(!1), v = e !== void 0, w = v ? e : m, S = Cr(
    (h) => {
      v ? t == null || t(h) : f(h);
    },
    [v, t]
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
            l ? Dl : null,
            r ? /* @__PURE__ */ s("div", { className: ye.header, children: r }) : null,
            /* @__PURE__ */ s("div", { className: ye.body, children: a }),
            o ? /* @__PURE__ */ s("div", { className: ye.footer, children: o }) : null
          ]
        }
      )
    ] })
  ] });
}
const xl = "_header_ifgvr_8", Al = "_title_ifgvr_16", Pl = "_spacer_ifgvr_28", Ol = "_icon_ifgvr_33", kl = "_iconButton_ifgvr_34", je = {
  header: xl,
  title: Al,
  spacer: Pl,
  icon: Ol,
  iconButton: kl
}, $l = /* @__PURE__ */ s("span", { className: je.spacer, "aria-hidden": "true" });
function cc({
  title: e,
  icon: t,
  onIconClick: n,
  iconLabel: r = "More information",
  className: a
}) {
  const o = !!t;
  return /* @__PURE__ */ C("div", { className: [je.header, a ?? ""].filter(Boolean).join(" "), children: [
    o ? $l : null,
    /* @__PURE__ */ s("span", { className: je.title, children: e }),
    o ? n ? /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: je.iconButton,
        onClick: n,
        "aria-label": r,
        children: t
      }
    ) : /* @__PURE__ */ s("span", { className: je.icon, "aria-hidden": "true", children: t }) : null
  ] });
}
const Ml = "_overlay_q8ram_6", Ll = "_content_q8ram_13", Il = "_handle_q8ram_32", Bl = "_titleBar_q8ram_42", Fl = "_title_q8ram_42", Wl = "_titleSpacer_q8ram_58", Ul = "_back_q8ram_63", Hl = "_body_q8ram_89", jl = "_footer_q8ram_97", Vl = "_description_q8ram_101", ee = {
  overlay: Ml,
  content: Ll,
  handle: Il,
  titleBar: Bl,
  title: Fl,
  titleSpacer: Wl,
  back: Ul,
  body: Hl,
  footer: jl,
  description: Vl
};
function zl({
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
  const [m, f] = Oe(!1), v = o !== void 0, w = v ? o : m, S = (p) => {
    v ? l == null || l(p) : f(p);
  }, h = lt(w);
  return Ae(() => {
    w !== h.current && (h.current = w, w ? d == null || d() : c == null || c());
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
const uc = zl;
function dc({
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
  const c = lt(t);
  return Ae(() => {
    t !== c.current && (c.current = t, t ? i == null || i() : d == null || d());
  }, [t]), t ? hn(
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
function fc({ title: e, description: t, children: n }) {
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
function mc({ width: e = 72, height: t = 24, className: n }) {
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
function vc({ className: e = "" }) {
  return /* @__PURE__ */ C("div", { className: `ds-ad-slot ${e}`, "data-testid": "ad-slot", children: [
    /* @__PURE__ */ C("svg", { className: "ds-ad-slot-icon", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ s("rect", { x: "1", y: "1", width: "14", height: "14", rx: "2", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ s("line", { x1: "1", y1: "5", x2: "15", y2: "5", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ s("line", { x1: "5", y1: "5", x2: "5", y2: "15", stroke: "currentColor", strokeWidth: "1.2" })
    ] }),
    /* @__PURE__ */ s("span", { className: "ds-ad-slot-text", children: "Ad Slot Placeholder" })
  ] });
}
function hc({ children: e, className: t = "", ...n }) {
  return /* @__PURE__ */ s("button", { type: "button", className: `ds-primary-btn ${t}`, ...n, children: e });
}
export {
  vc as AdSlot,
  nc as AdditionalIncomeCard,
  ec as BottomNav,
  uc as BottomSheet,
  At as Button,
  sc as Card,
  ic as ConfirmationCard,
  Zl as Divider,
  Yr as FeatureRow,
  dc as FullScreenSheet,
  oc as IncomeTypePicker,
  ua as IncomeTypeRow,
  fc as InfoSheet,
  Ql as InputField,
  aa as ListRow,
  Xl as MoneyRow,
  mc as NettiLogo,
  ac as PaywallSheet,
  hc as PrimaryButton,
  tc as SalaryCard,
  va as SegmentedControl,
  Jl as Select,
  lc as Sheet,
  cc as SheetHeader,
  Kl as Switch,
  zl as TakeHomePaySheet,
  Ur as Tick
};
