import { jsxs as C, jsx as s, Fragment as lt } from "react/jsx-runtime";
import * as u from "react";
import b, { useId as hn, useState as ke, useRef as ze, useLayoutEffect as vn, useEffect as be, useMemo as br, useCallback as Cr } from "react";
import * as Er from "react-dom";
import Sr, { createPortal as pn } from "react-dom";
const Nr = "_button_6rj8t_7", Rr = "_sizeLg_6rj8t_33", Tr = "_sizeMd_6rj8t_42", Dr = "_variantPro_6rj8t_54", xr = "_variantPrimary_6rj8t_64", Pr = "_variantSecondary_6rj8t_75", Or = "_variantGhost_6rj8t_86", Ar = "_variantText_6rj8t_98", kr = "_fullWidth_6rj8t_115", $r = "_iconOnly_6rj8t_118", Lr = "_icon_6rj8t_118", Mr = "_label_6rj8t_142", Q = {
  button: Nr,
  sizeLg: Rr,
  sizeMd: Tr,
  variantPro: Dr,
  variantPrimary: xr,
  variantSecondary: Pr,
  variantGhost: Or,
  variantText: Ar,
  fullWidth: kr,
  iconOnly: $r,
  icon: Lr,
  label: Mr
}, Ir = {
  pro: Q.variantPro,
  primary: Q.variantPrimary,
  secondary: Q.variantSecondary,
  ghost: Q.variantGhost,
  text: Q.variantText
}, Br = {
  lg: Q.sizeLg,
  md: Q.sizeMd
};
function Pt({
  variant: e = "primary",
  size: t = "lg",
  icon: n,
  fullWidth: r = !1,
  children: o,
  className: a,
  disabled: l,
  ...i
}) {
  const h = !o && n != null;
  return /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      disabled: l,
      className: [
        Q.button,
        Ir[e],
        Br[t],
        h ? Q.iconOnly : "",
        r ? Q.fullWidth : "",
        a ?? ""
      ].filter(Boolean).join(" "),
      ...i,
      children: [
        n && /* @__PURE__ */ s("span", { className: Q.icon, "aria-hidden": "true", children: n }),
        o ? /* @__PURE__ */ s("span", { className: Q.label, children: o }) : null
      ]
    }
  );
}
const Fr = "_tick_1upar_3", jr = "_active_1upar_18", Wr = "_inactive_1upar_23", Kt = {
  tick: Fr,
  active: jr,
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
const Hr = "_row_1lfos_3", Vr = "_text_1lfos_10", zr = "_title_1lfos_18", qr = "_muted_1lfos_26", Yr = "_description_1lfos_30", Fe = {
  row: Hr,
  text: Vr,
  title: zr,
  muted: qr,
  description: Yr
};
function Gr({
  title: e,
  description: t,
  state: n = "active",
  className: r
}) {
  const o = n === "inactive";
  return /* @__PURE__ */ C("div", { className: [Fe.row, r ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s(Ur, { state: n }),
    /* @__PURE__ */ C("div", { className: Fe.text, children: [
      /* @__PURE__ */ s(
        "span",
        {
          className: [Fe.title, o ? Fe.muted : ""].filter(Boolean).join(" "),
          children: e
        }
      ),
      t && /* @__PURE__ */ s("span", { className: Fe.description, children: t })
    ] })
  ] });
}
const Kr = "_outer_mn3d3_7", Xr = "_row_mn3d3_14", Zr = "_interactive_mn3d3_25", Qr = "_labels_mn3d3_49", Jr = "_label_mn3d3_49", eo = "_subLabel_mn3d3_69", to = "_right_mn3d3_78", no = "_amount_mn3d3_85", ro = "_remove_mn3d3_96", oo = "_divider_mn3d3_126", ee = {
  outer: Kr,
  row: Xr,
  interactive: Zr,
  labels: Qr,
  label: Jr,
  subLabel: eo,
  right: to,
  amount: no,
  remove: ro,
  divider: oo
};
function ao({
  label: e,
  subLabel: t,
  amountFormatted: n,
  onClick: r,
  rowLabel: o,
  hasRemove: a = !1,
  onRemove: l,
  removeLabel: i = `Remove ${e}`,
  hasDivider: h = !0,
  badge: c,
  className: f
}) {
  const d = !!r && !a, m = /* @__PURE__ */ C(lt, { children: [
    /* @__PURE__ */ C("div", { className: ee.labels, children: [
      /* @__PURE__ */ s("span", { className: ee.label, children: e }),
      t && /* @__PURE__ */ s("span", { className: ee.subLabel, children: t })
    ] }),
    /* @__PURE__ */ C("div", { className: ee.right, children: [
      c,
      n && /* @__PURE__ */ s("span", { className: ee.amount, children: n }),
      a && l && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: ee.remove,
          onClick: l,
          "aria-label": i,
          children: /* @__PURE__ */ s("span", { "aria-hidden": "true", children: "−" })
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ C("div", { className: [ee.outer, f ?? ""].filter(Boolean).join(" "), children: [
    d ? /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: [ee.row, ee.interactive].join(" "),
        onClick: r,
        "aria-label": o,
        children: m
      }
    ) : /* @__PURE__ */ s("div", { className: ee.row, children: m }),
    h && /* @__PURE__ */ s("div", { className: ee.divider, "aria-hidden": "true" })
  ] });
}
const io = "_row_1omvu_6", so = "_labels_1omvu_20", lo = "_title_1omvu_29", co = "_subtitle_1omvu_37", uo = "_chevron_1omvu_45", je = {
  row: io,
  labels: so,
  title: lo,
  subtitle: co,
  chevron: uo
};
function fo({ title: e, subtitle: t, onClick: n, className: r }) {
  return /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: [je.row, r ?? ""].filter(Boolean).join(" "),
      onClick: n,
      children: [
        /* @__PURE__ */ C("span", { className: je.labels, children: [
          /* @__PURE__ */ s("span", { className: je.title, children: e }),
          t && /* @__PURE__ */ s("span", { className: je.subtitle, children: t })
        ] }),
        /* @__PURE__ */ s(
          "svg",
          {
            className: je.chevron,
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
const mo = "_field_1x66c_10", ho = "_label_1x66c_17", vo = "_track_1x66c_25", po = "_segment_1x66c_36", go = "_selected_1x66c_59", Te = {
  field: mo,
  label: ho,
  track: vo,
  segment: po,
  selected: go
};
function _o({
  options: e,
  value: t,
  onChange: n,
  label: r,
  context: o = "light",
  className: a,
  "aria-label": l = "Select period"
}) {
  const i = hn(), h = (f, d) => {
    let m = null;
    f.key === "ArrowRight" || f.key === "ArrowDown" ? m = (d + 1) % e.length : (f.key === "ArrowLeft" || f.key === "ArrowUp") && (m = (d - 1 + e.length) % e.length), m !== null && (f.preventDefault(), n(e[m].value));
  }, c = /* @__PURE__ */ s(
    "div",
    {
      className: [Te.track, Te[o], r ? "" : a ?? ""].filter(Boolean).join(" "),
      role: "tablist",
      "aria-label": r ? void 0 : l,
      "aria-labelledby": r ? i : void 0,
      children: e.map((f, d) => {
        const m = f.value === t;
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": m,
            tabIndex: m ? 0 : -1,
            className: [Te.segment, m ? Te.selected : ""].join(" "),
            onClick: () => n(f.value),
            onKeyDown: (g) => h(g, d),
            "data-testid": `segment-${f.value}`,
            children: f.label
          },
          f.value
        );
      })
    }
  );
  return r ? /* @__PURE__ */ C("div", { className: [Te.field, a ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("span", { id: i, className: Te.label, children: r }),
    c
  ] }) : c;
}
const wo = "_root_18luu_1", yo = "_noLabel_18luu_11", bo = "_label_18luu_16", Co = "_track_18luu_26", Eo = "_pill_18luu_39", So = "_offActive_18luu_67", No = "_onActive_18luu_68", fe = {
  root: wo,
  noLabel: yo,
  label: bo,
  track: Co,
  pill: Eo,
  offActive: So,
  onActive: No
};
function Ql({
  checked: e,
  onChange: t,
  label: n,
  offLabel: r = "Off",
  onLabel: o = "On",
  className: a,
  "aria-label": l
}) {
  const i = (c) => {
    c.key === "ArrowRight" || c.key === "ArrowDown" ? (c.preventDefault(), t(!0)) : (c.key === "ArrowLeft" || c.key === "ArrowUp") && (c.preventDefault(), t(!1));
  }, h = [fe.root, n ? "" : fe.noLabel, a ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ C(
    "div",
    {
      className: h,
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
              children: o
            }
          )
        ] })
      ]
    }
  );
}
const Ro = "_row_1b642_3", To = "_label_1b642_10", Do = "_amount_1b642_17", xo = "_positive_1b642_27", Po = "_negative_1b642_30", Oo = "_title_1b642_33", Ao = "_subtitle_1b642_43", ko = "_strong_1b642_53", $o = "_divider_1b642_69", he = {
  row: Ro,
  label: To,
  amount: Do,
  positive: xo,
  negative: Po,
  title: Oo,
  subtitle: Ao,
  strong: ko,
  divider: $o
};
function Jl({
  label: e,
  amount: t,
  variant: n,
  strong: r = !1,
  showPositive: o = !0,
  className: a,
  currency: l = "GBP",
  locale: i = "en-GB"
}) {
  const c = !(n === "title" || n === "subtitle") && t !== void 0, f = c && t > 0 && o, d = c && t < 0;
  let m = "";
  if (c) {
    const g = new Intl.NumberFormat(i, {
      style: "currency",
      currency: l,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(t));
    m = d ? `−${g}` : g;
  }
  return /* @__PURE__ */ C(
    "div",
    {
      className: [
        he.row,
        n ? he[n] : "",
        f ? he.positive : "",
        d ? he.negative : "",
        r ? he.strong : "",
        a ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("span", { className: he.label, children: e }),
        c ? /* @__PURE__ */ s("span", { className: he.amount, children: m }) : null
      ]
    }
  );
}
function ec({ className: e }) {
  return /* @__PURE__ */ s("div", { className: [he.divider, e ?? ""].filter(Boolean).join(" ") });
}
const Lo = "_field_ho7jj_3", Mo = "_label_ho7jj_20", Io = "_fieldStandard_ho7jj_3", Bo = "_inputBox_ho7jj_42", Fo = "_state_focused_ho7jj_54", jo = "_state_filled_ho7jj_60", Wo = "_input_ho7jj_42", Uo = "_fieldLarge_ho7jj_4", Ho = "_largeAmountRow_ho7jj_95", Vo = "_largePrefix_ho7jj_103", zo = "_largeInput_ho7jj_115", qo = "_state_empty_ho7jj_136", Yo = "_underline_ho7jj_141", Go = "_underlineFocused_ho7jj_149", Ko = "_disabled_ho7jj_155", Xo = "_error_ho7jj_162", U = {
  field: Lo,
  label: Mo,
  fieldStandard: Io,
  inputBox: Bo,
  state_focused: Fo,
  state_filled: jo,
  input: Wo,
  fieldLarge: Uo,
  largeAmountRow: Ho,
  largePrefix: Vo,
  largeInput: zo,
  state_empty: qo,
  underline: Yo,
  underlineFocused: Go,
  disabled: Ko,
  error: Xo
};
function tc({
  label: e,
  value: t,
  onChange: n,
  variant: r = "standard",
  prefix: o = "£",
  error: a,
  className: l,
  placeholder: i,
  disabled: h,
  inputMode: c,
  ...f
}) {
  const [d, m] = ke(!1), g = hn(), S = t !== "" && t !== void 0, v = d ? "focused" : S ? "filled" : "empty";
  return r === "largeAmount" ? /* @__PURE__ */ C(
    "div",
    {
      className: [
        U.field,
        U.fieldLarge,
        U[`state_${v}`],
        h ? U.disabled : "",
        l ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("label", { htmlFor: g, className: U.label, children: e }),
        /* @__PURE__ */ C("div", { className: U.largeAmountRow, children: [
          o && /* @__PURE__ */ s("span", { className: U.largePrefix, "aria-hidden": "true", children: o }),
          /* @__PURE__ */ s(
            "input",
            {
              id: g,
              type: "text",
              inputMode: c ?? "decimal",
              value: t,
              placeholder: S ? void 0 : "0",
              onChange: (p) => n(p.target.value),
              onFocus: () => m(!0),
              onBlur: () => m(!1),
              disabled: h,
              "aria-invalid": !!a,
              "aria-describedby": a ? `${g}-error` : void 0,
              className: U.largeInput,
              ...f
            }
          )
        ] }),
        /* @__PURE__ */ s(
          "div",
          {
            className: [U.underline, d ? U.underlineFocused : ""].join(" "),
            "aria-hidden": "true"
          }
        ),
        a && /* @__PURE__ */ s("span", { id: `${g}-error`, className: U.error, role: "alert", children: a })
      ]
    }
  ) : /* @__PURE__ */ C(
    "div",
    {
      className: [
        U.field,
        U.fieldStandard,
        U[`state_${v}`],
        h ? U.disabled : "",
        l ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("label", { htmlFor: g, className: U.label, children: e }),
        /* @__PURE__ */ s("div", { className: U.inputBox, children: /* @__PURE__ */ s(
          "input",
          {
            id: g,
            type: "text",
            inputMode: c ?? "decimal",
            value: t,
            placeholder: i ?? "e.g. 16",
            onChange: (p) => n(p.target.value),
            onFocus: () => m(!0),
            onBlur: () => m(!1),
            disabled: h,
            "aria-invalid": !!a,
            "aria-describedby": a ? `${g}-error` : void 0,
            className: U.input,
            ...f
          }
        ) }),
        a && /* @__PURE__ */ s("span", { id: `${g}-error`, className: U.error, role: "alert", children: a })
      ]
    }
  );
}
const Zo = "_field_180mg_3", Qo = "_label_180mg_11", Jo = "_trigger_180mg_19", ea = "_triggerOpen_180mg_42", ta = "_chevron_180mg_52", na = "_chevronOpen_180mg_58", ra = "_dropdown_180mg_64", oa = "_dropdownUpward_180mg_76", aa = "_option_180mg_80", ia = "_optionSelected_180mg_101", oe = {
  field: Zo,
  label: Qo,
  trigger: Jo,
  triggerOpen: ea,
  chevron: ta,
  chevronOpen: na,
  dropdown: ra,
  dropdownUpward: oa,
  option: aa,
  optionSelected: ia
};
function nc({ label: e, options: t, value: n, onChange: r, className: o, disabled: a, "data-testid": l }) {
  const [i, h] = ke(!1), [c, f] = ke(null), d = ze(null), m = ze(null), g = t.find((p) => p.value === n), S = () => {
    if (!d.current) return;
    const p = d.current.getBoundingClientRect(), _ = window.innerHeight, E = Math.min(_ * 0.6, 320), N = _ - p.bottom - 12, w = p.top - 12, O = N < E && w > N;
    f({ top: O ? p.top - 8 : p.bottom + 8, left: p.left, width: p.width, upward: O });
  };
  vn(() => {
    i && S();
  }, [i]), be(() => {
    if (!i) return;
    const p = () => S(), _ = () => S();
    return window.addEventListener("scroll", p, { passive: !0, capture: !0 }), window.addEventListener("resize", _), () => {
      window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", _);
    };
  }, [i]), be(() => {
    if (!i) return;
    const p = (_) => {
      var N, w;
      const E = _.target;
      !((N = d.current) != null && N.contains(E)) && !((w = m.current) != null && w.contains(E)) && h(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [i]), be(() => {
    if (!i) return;
    const p = (_) => {
      var E;
      _.key === "Escape" && (h(!1), (E = d.current) == null || E.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [i]);
  const v = i && c && pn(
    /* @__PURE__ */ s(
      "div",
      {
        ref: m,
        className: [oe.dropdown, c.upward ? oe.dropdownUpward : ""].join(" "),
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
            className: [oe.option, n === p.value ? oe.optionSelected : ""].join(" "),
            onClick: () => {
              var _;
              r(p.value), h(!1), (_ = d.current) == null || _.focus();
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
  return /* @__PURE__ */ C("div", { className: [oe.field, o ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("label", { className: oe.label, children: e }),
    /* @__PURE__ */ C(
      "button",
      {
        ref: d,
        type: "button",
        className: [oe.trigger, i ? oe.triggerOpen : ""].join(" "),
        onClick: () => !a && h(!i),
        disabled: a,
        "data-testid": l,
        "aria-haspopup": "listbox",
        "aria-expanded": i,
        children: [
          /* @__PURE__ */ s("span", { children: (g == null ? void 0 : g.label) ?? "Select…" }),
          /* @__PURE__ */ s(
            "svg",
            {
              className: [oe.chevron, i ? oe.chevronOpen : ""].join(" "),
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
const sa = "_nav_1u5d6_3", la = "_item_1u5d6_12", ca = "_active_1u5d6_33", ua = "_icon_1u5d6_37", da = "_label_1u5d6_46", We = {
  nav: sa,
  item: la,
  active: ca,
  icon: ua,
  label: da
};
function rc({ items: e, activeId: t, onChange: n, className: r }) {
  return /* @__PURE__ */ s("nav", { className: [We.nav, r ?? ""].filter(Boolean).join(" "), children: e.map((o) => /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: [We.item, t === o.id ? We.active : ""].filter(Boolean).join(" "),
      onClick: () => n(o.id),
      "aria-current": t === o.id ? "page" : void 0,
      "data-testid": `nav-${o.id}`,
      children: [
        /* @__PURE__ */ s("span", { className: We.icon, "aria-hidden": "true", children: o.icon }),
        /* @__PURE__ */ s("span", { className: We.label, children: o.label })
      ]
    },
    o.id
  )) });
}
const fa = "_card_6kfl6_11", ma = "_eyebrow_6kfl6_27", ha = "_amount_6kfl6_38", va = "_amountEdit_6kfl6_50", pa = "_amountPrefix_6kfl6_57", ga = "_amountInput_6kfl6_58", _a = "_badge_6kfl6_81", wa = "_toggle_6kfl6_100", me = {
  card: fa,
  eyebrow: ma,
  amount: ha,
  amountEdit: va,
  amountPrefix: pa,
  amountInput: ga,
  badge: _a,
  toggle: wa
}, ya = [
  { value: "yearly", label: "Yearly" },
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" }
];
function oc({
  salaryFormatted: e,
  period: t,
  onPeriodChange: n,
  additionalIncomeSummary: r,
  className: o,
  editable: a = !1,
  value: l = "",
  onValueChange: i
}) {
  const h = !!r;
  return /* @__PURE__ */ C(
    "article",
    {
      "data-theme": "dark",
      className: [me.card, o ?? ""].filter(Boolean).join(" "),
      "aria-label": "Your salary",
      children: [
        /* @__PURE__ */ s("span", { className: me.eyebrow, children: "Your Salary" }),
        a ? /* @__PURE__ */ C("div", { className: me.amountEdit, children: [
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
        h && /* @__PURE__ */ s("div", { className: me.badge, "aria-label": "Additional income", children: r }),
        /* @__PURE__ */ s(
          _o,
          {
            options: ya,
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
const ba = "_card_1khs7_7", Ca = "_empty_1khs7_14", Ea = "_hasItems_1khs7_22", Sa = "_header_1khs7_34", Na = "_eyebrow_1khs7_44", Ra = "_divider_1khs7_55", Ta = "_rows_1khs7_63", _e = {
  card: ba,
  empty: Ca,
  hasItems: Ea,
  header: Sa,
  eyebrow: Na,
  divider: Ra,
  rows: Ta
};
function ac({
  items: e,
  onAdd: t,
  onItemClick: n,
  className: r
}) {
  const o = e.length > 0;
  return /* @__PURE__ */ s(
    "div",
    {
      "data-theme": "dark",
      className: [
        _e.card,
        o ? _e.hasItems : _e.empty,
        r ?? ""
      ].filter(Boolean).join(" "),
      children: o ? /* @__PURE__ */ C(lt, { children: [
        /* @__PURE__ */ C("div", { className: _e.header, children: [
          /* @__PURE__ */ s("span", { className: _e.eyebrow, children: "Extra Income" }),
          /* @__PURE__ */ s(
            Pt,
            {
              variant: "ghost",
              size: "md",
              onClick: t,
              "aria-label": "Add another income source",
              children: "+ Add income"
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { className: _e.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: _e.rows, children: e.map((a, l) => /* @__PURE__ */ s(
          ao,
          {
            label: a.label,
            subLabel: a.subLabel,
            amountFormatted: a.amountFormatted,
            onClick: n ? () => n(a.id) : void 0,
            rowLabel: n ? `Edit ${a.label}` : void 0,
            hasRemove: !1,
            hasDivider: l < e.length - 1
          },
          a.id
        )) })
      ] }) : (
        /* Empty state — Ghost button fills the full card */
        /* @__PURE__ */ s(
          Pt,
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
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Xt(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function gn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Xt(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Xt(e[o], null);
        }
      };
  };
}
function Ee(...e) {
  return u.useCallback(gn(...e), e);
}
function Da(e, t) {
  const n = u.createContext(t), r = (a) => {
    const { children: l, ...i } = a, h = u.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ s(n.Provider, { value: h, children: l });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const l = u.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function xa(e, t = []) {
  let n = [];
  function r(a, l) {
    const i = u.createContext(l), h = n.length;
    n = [...n, l];
    const c = (d) => {
      var _;
      const { scope: m, children: g, ...S } = d, v = ((_ = m == null ? void 0 : m[e]) == null ? void 0 : _[h]) || i, p = u.useMemo(() => S, Object.values(S));
      return /* @__PURE__ */ s(v.Provider, { value: p, children: g });
    };
    c.displayName = a + "Provider";
    function f(d, m) {
      var v;
      const g = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[h]) || i, S = u.useContext(g);
      if (S) return S;
      if (l !== void 0) return l;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [c, f];
  }
  const o = () => {
    const a = n.map((l) => u.createContext(l));
    return function(i) {
      const h = (i == null ? void 0 : i[e]) || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: h } }),
        [i, h]
      );
    };
  };
  return o.scopeName = e, [r, Pa(o, ...t)];
}
function Pa(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const l = r.reduce((i, { useScope: h, scopeName: c }) => {
        const d = h(a)[`__scope${c}`];
        return { ...i, ...d };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var qe = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, Oa = u[" useId ".trim().toString()] || (() => {
}), Aa = 0;
function _t(e) {
  const [t, n] = u.useState(Oa());
  return qe(() => {
    n((r) => r ?? String(Aa++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var ka = u[" useInsertionEffect ".trim().toString()] || qe;
function $a({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, l] = La({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, h = i ? e : o;
  {
    const f = u.useRef(e !== void 0);
    u.useEffect(() => {
      const d = f.current;
      d !== i && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const c = u.useCallback(
    (f) => {
      var d;
      if (i) {
        const m = Ma(f) ? f(e) : f;
        m !== e && ((d = l.current) == null || d.call(l, m));
      } else
        a(f);
    },
    [i, e, a, l]
  );
  return [h, c];
}
function La({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return ka(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var l;
    o.current !== n && ((l = a.current) == null || l.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Ma(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  const t = /* @__PURE__ */ Ia(e), n = u.forwardRef((r, o) => {
    const { children: a, ...l } = r, i = u.Children.toArray(a), h = i.find(Fa);
    if (h) {
      const c = h.props.children, f = i.map((d) => d === h ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ s(t, { ...l, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, f) : null });
    }
    return /* @__PURE__ */ s(t, { ...l, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Ia(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const l = Wa(o), i = ja(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? gn(r, l) : l), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ba = Symbol("radix.slottable");
function Fa(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ba;
}
function ja(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const h = a(...i);
      return o(...i), h;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Wa(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ua = [
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
], le = Ua.reduce((e, t) => {
  const n = /* @__PURE__ */ _n(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: l, ...i } = o, h = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ s(h, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ha(e, t) {
  e && Er.flushSync(() => e.dispatchEvent(t));
}
function Ye(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Va(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var za = "DismissableLayer", Ot = "dismissableLayer.update", qa = "dismissableLayer.pointerDownOutside", Ya = "dismissableLayer.focusOutside", Zt, wn = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), yn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: i,
      ...h
    } = e, c = u.useContext(wn), [f, d] = u.useState(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = u.useState({}), S = Ee(t, (y) => d(y)), v = Array.from(c.layers), [p] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), _ = v.indexOf(p), E = f ? v.indexOf(f) : -1, N = c.layersWithOutsidePointerEventsDisabled.size > 0, w = E >= _, O = Xa((y) => {
      const P = y.target, x = [...c.branches].some((I) => I.contains(P));
      !w || x || (o == null || o(y), l == null || l(y), y.defaultPrevented || i == null || i());
    }, m), W = Za((y) => {
      const P = y.target;
      [...c.branches].some((I) => I.contains(P)) || (a == null || a(y), l == null || l(y), y.defaultPrevented || i == null || i());
    }, m);
    return Va((y) => {
      E === c.layers.size - 1 && (r == null || r(y), !y.defaultPrevented && i && (y.preventDefault(), i()));
    }, m), u.useEffect(() => {
      if (f)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Zt = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(f)), c.layers.add(f), Qt(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Zt);
        };
    }, [f, m, n, c]), u.useEffect(() => () => {
      f && (c.layers.delete(f), c.layersWithOutsidePointerEventsDisabled.delete(f), Qt());
    }, [f, c]), u.useEffect(() => {
      const y = () => g({});
      return document.addEventListener(Ot, y), () => document.removeEventListener(Ot, y);
    }, []), /* @__PURE__ */ s(
      le.div,
      {
        ...h,
        ref: S,
        style: {
          pointerEvents: N ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: pe(e.onFocusCapture, W.onFocusCapture),
        onBlurCapture: pe(e.onBlurCapture, W.onBlurCapture),
        onPointerDownCapture: pe(
          e.onPointerDownCapture,
          O.onPointerDownCapture
        )
      }
    );
  }
);
yn.displayName = za;
var Ga = "DismissableLayerBranch", Ka = u.forwardRef((e, t) => {
  const n = u.useContext(wn), r = u.useRef(null), o = Ee(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ s(le.div, { ...e, ref: o });
});
Ka.displayName = Ga;
function Xa(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let h = function() {
          bn(
            qa,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = h, t.addEventListener("click", o.current, { once: !0 })) : h();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Za(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && bn(Ya, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Qt() {
  const e = new CustomEvent(Ot);
  document.dispatchEvent(e);
}
function bn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ha(o, a) : o.dispatchEvent(a);
}
var wt = "focusScope.autoFocusOnMount", yt = "focusScope.autoFocusOnUnmount", Jt = { bubbles: !1, cancelable: !0 }, Qa = "FocusScope", Cn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...l
  } = e, [i, h] = u.useState(null), c = Ye(o), f = Ye(a), d = u.useRef(null), m = Ee(t, (v) => h(v)), g = u.useRef({
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
        if (g.paused || !i) return;
        const w = N.target;
        i.contains(w) ? d.current = w : ve(d.current, { select: !0 });
      }, p = function(N) {
        if (g.paused || !i) return;
        const w = N.relatedTarget;
        w !== null && (i.contains(w) || ve(d.current, { select: !0 }));
      }, _ = function(N) {
        if (document.activeElement === document.body)
          for (const O of N)
            O.removedNodes.length > 0 && ve(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", p);
      const E = new MutationObserver(_);
      return i && E.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", p), E.disconnect();
      };
    }
  }, [r, i, g.paused]), u.useEffect(() => {
    if (i) {
      tn.add(g);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const _ = new CustomEvent(wt, Jt);
        i.addEventListener(wt, c), i.dispatchEvent(_), _.defaultPrevented || (Ja(oi(En(i)), { select: !0 }), document.activeElement === v && ve(i));
      }
      return () => {
        i.removeEventListener(wt, c), setTimeout(() => {
          const _ = new CustomEvent(yt, Jt);
          i.addEventListener(yt, f), i.dispatchEvent(_), _.defaultPrevented || ve(v ?? document.body, { select: !0 }), i.removeEventListener(yt, f), tn.remove(g);
        }, 0);
      };
    }
  }, [i, c, f, g]);
  const S = u.useCallback(
    (v) => {
      if (!n && !r || g.paused) return;
      const p = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, _ = document.activeElement;
      if (p && _) {
        const E = v.currentTarget, [N, w] = ei(E);
        N && w ? !v.shiftKey && _ === w ? (v.preventDefault(), n && ve(N, { select: !0 })) : v.shiftKey && _ === N && (v.preventDefault(), n && ve(w, { select: !0 })) : _ === E && v.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ s(le.div, { tabIndex: -1, ...l, ref: m, onKeyDown: S });
});
Cn.displayName = Qa;
function Ja(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ve(r, { select: t }), document.activeElement !== n) return;
}
function ei(e) {
  const t = En(e), n = en(t, e), r = en(t.reverse(), e);
  return [n, r];
}
function En(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function en(e, t) {
  for (const n of e)
    if (!ti(n, { upTo: t })) return n;
}
function ti(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ni(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ni(e) && t && e.select();
  }
}
var tn = ri();
function ri() {
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
function oi(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ai = "Portal", Sn = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  qe(() => a(!0), []);
  const l = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return l ? Sr.createPortal(/* @__PURE__ */ s(le.div, { ...r, ref: t }), l) : null;
});
Sn.displayName = ai;
function ii(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var ut = (e) => {
  const { present: t, children: n } = e, r = si(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = Ee(r.ref, li(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
ut.displayName = "Presence";
function si(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), l = e ? "mounted" : "unmounted", [i, h] = ii(l, {
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
    const c = Qe(r.current);
    a.current = i === "mounted" ? c : "none";
  }, [i]), qe(() => {
    const c = r.current, f = o.current;
    if (f !== e) {
      const m = a.current, g = Qe(c);
      e ? h("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? h("UNMOUNT") : h(f && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, h]), qe(() => {
    if (t) {
      let c;
      const f = t.ownerDocument.defaultView ?? window, d = (g) => {
        const v = Qe(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && v && (h("ANIMATION_END"), !o.current)) {
          const p = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = p);
          });
        }
      }, m = (g) => {
        g.target === t && (a.current = Qe(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(c), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      h("ANIMATION_END");
  }, [t, h]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: u.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function Qe(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function li(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var bt = 0;
function ci() {
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
var ae = function() {
  return ae = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ae.apply(this, arguments);
};
function Nn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ui(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var it = "right-scroll-bar-position", st = "width-before-scroll-bar", di = "with-scroll-bars-hidden", fi = "--removed-body-scroll-bar-size";
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function mi(e, t) {
  var n = ke(function() {
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
var hi = typeof window < "u" ? u.useLayoutEffect : u.useEffect, on = /* @__PURE__ */ new WeakMap();
function vi(e, t) {
  var n = mi(null, function(r) {
    return e.forEach(function(o) {
      return Ct(o, r);
    });
  });
  return hi(function() {
    var r = on.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), l = n.current;
      o.forEach(function(i) {
        a.has(i) || Ct(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Ct(i, l);
      });
    }
    on.set(n, e);
  }, [e]), n;
}
function pi(e) {
  return e;
}
function gi(e, t) {
  t === void 0 && (t = pi);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var l = t(a, r);
      return n.push(l), function() {
        n = n.filter(function(i) {
          return i !== l;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var l = n;
        n = [], l.forEach(a);
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
      var l = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), l = n;
      }
      var h = function() {
        var f = l;
        l = [], f.forEach(a);
      }, c = function() {
        return Promise.resolve().then(h);
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
  return o;
}
function _i(e) {
  e === void 0 && (e = {});
  var t = gi(null);
  return t.options = ae({ async: !0, ssr: !1 }, e), t;
}
var Rn = function(e) {
  var t = e.sideCar, n = Nn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, ae({}, n));
};
Rn.isSideCarExport = !0;
function wi(e, t) {
  return e.useMedium(t), Rn;
}
var Tn = _i(), Et = function() {
}, dt = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Et,
    onWheelCapture: Et,
    onTouchMoveCapture: Et
  }), o = r[0], a = r[1], l = e.forwardProps, i = e.children, h = e.className, c = e.removeScrollBar, f = e.enabled, d = e.shards, m = e.sideCar, g = e.noRelative, S = e.noIsolation, v = e.inert, p = e.allowPinchZoom, _ = e.as, E = _ === void 0 ? "div" : _, N = e.gapMode, w = Nn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), O = m, W = vi([n, t]), y = ae(ae({}, w), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(O, { sideCar: Tn, removeScrollBar: c, shards: d, noRelative: g, noIsolation: S, inert: v, setCallbacks: a, allowPinchZoom: !!p, lockRef: n, gapMode: N }),
    l ? u.cloneElement(u.Children.only(i), ae(ae({}, y), { ref: W })) : u.createElement(E, ae({}, y, { className: h, ref: W }), i)
  );
});
dt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
dt.classNames = {
  fullWidth: st,
  zeroRight: it
};
var yi = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function bi() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = yi();
  return t && e.setAttribute("nonce", t), e;
}
function Ci(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ei(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Si = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = bi()) && (Ci(t, n), Ei(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ni = function() {
  var e = Si();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Dn = function() {
  var e = Ni(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Ri = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, St = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ti = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [St(n), St(r), St(o)];
}, Di = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ri;
  var t = Ti(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, xi = Dn(), Ae = "data-scroll-locked", Pi = function(e, t, n, r) {
  var o = e.left, a = e.top, l = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(di, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Ae, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(it, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(st, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(it, " .").concat(it, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(st, " .").concat(st, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ae, `] {
    `).concat(fi, ": ").concat(i, `px;
  }
`);
}, an = function() {
  var e = parseInt(document.body.getAttribute(Ae) || "0", 10);
  return isFinite(e) ? e : 0;
}, Oi = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Ae, (an() + 1).toString()), function() {
      var e = an() - 1;
      e <= 0 ? document.body.removeAttribute(Ae) : document.body.setAttribute(Ae, e.toString());
    };
  }, []);
}, Ai = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Oi();
  var a = u.useMemo(function() {
    return Di(o);
  }, [o]);
  return u.createElement(xi, { styles: Pi(a, !t, o, n ? "" : "!important") });
}, At = !1;
if (typeof window < "u")
  try {
    var Je = Object.defineProperty({}, "passive", {
      get: function() {
        return At = !0, !0;
      }
    });
    window.addEventListener("test", Je, Je), window.removeEventListener("test", Je, Je);
  } catch {
    At = !1;
  }
var De = At ? { passive: !1 } : !1, ki = function(e) {
  return e.tagName === "TEXTAREA";
}, xn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ki(e) && n[t] === "visible")
  );
}, $i = function(e) {
  return xn(e, "overflowY");
}, Li = function(e) {
  return xn(e, "overflowX");
}, sn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Pn(e, r);
    if (o) {
      var a = On(e, r), l = a[1], i = a[2];
      if (l > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Mi = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ii = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Pn = function(e, t) {
  return e === "v" ? $i(t) : Li(t);
}, On = function(e, t) {
  return e === "v" ? Mi(t) : Ii(t);
}, Bi = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Fi = function(e, t, n, r, o) {
  var a = Bi(e, window.getComputedStyle(t).direction), l = a * r, i = n.target, h = t.contains(i), c = !1, f = l > 0, d = 0, m = 0;
  do {
    if (!i)
      break;
    var g = On(e, i), S = g[0], v = g[1], p = g[2], _ = v - p - a * S;
    (S || _) && Pn(e, i) && (d += _, m += S);
    var E = i.parentNode;
    i = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
  } while (
    // portaled content
    !h && i !== document.body || // self content
    h && (t.contains(i) || t === i)
  );
  return (f && Math.abs(d) < 1 || !f && Math.abs(m) < 1) && (c = !0), c;
}, et = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ln = function(e) {
  return [e.deltaX, e.deltaY];
}, cn = function(e) {
  return e && "current" in e ? e.current : e;
}, ji = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Wi = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Ui = 0, xe = [];
function Hi(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Ui++)[0], a = u.useState(Dn)[0], l = u.useRef(e);
  u.useEffect(function() {
    l.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = ui([e.lockRef.current], (e.shards || []).map(cn), !0).filter(Boolean);
      return v.forEach(function(p) {
        return p.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(p) {
          return p.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(v, p) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !l.current.allowPinchZoom;
    var _ = et(v), E = n.current, N = "deltaX" in v ? v.deltaX : E[0] - _[0], w = "deltaY" in v ? v.deltaY : E[1] - _[1], O, W = v.target, y = Math.abs(N) > Math.abs(w) ? "h" : "v";
    if ("touches" in v && y === "h" && W.type === "range")
      return !1;
    var P = window.getSelection(), x = P && P.anchorNode, I = x ? x === W || x.contains(W) : !1;
    if (I)
      return !1;
    var B = sn(y, W);
    if (!B)
      return !0;
    if (B ? O = y : (O = y === "v" ? "h" : "v", B = sn(y, W)), !B)
      return !1;
    if (!r.current && "changedTouches" in v && (N || w) && (r.current = O), !O)
      return !0;
    var q = r.current || O;
    return Fi(q, p, v, q === "h" ? N : w);
  }, []), h = u.useCallback(function(v) {
    var p = v;
    if (!(!xe.length || xe[xe.length - 1] !== a)) {
      var _ = "deltaY" in p ? ln(p) : et(p), E = t.current.filter(function(O) {
        return O.name === p.type && (O.target === p.target || p.target === O.shadowParent) && ji(O.delta, _);
      })[0];
      if (E && E.should) {
        p.cancelable && p.preventDefault();
        return;
      }
      if (!E) {
        var N = (l.current.shards || []).map(cn).filter(Boolean).filter(function(O) {
          return O.contains(p.target);
        }), w = N.length > 0 ? i(p, N[0]) : !l.current.noIsolation;
        w && p.cancelable && p.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(v, p, _, E) {
    var N = { name: v, delta: p, target: _, should: E, shadowParent: Vi(_) };
    t.current.push(N), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== N;
      });
    }, 1);
  }, []), f = u.useCallback(function(v) {
    n.current = et(v), r.current = void 0;
  }, []), d = u.useCallback(function(v) {
    c(v.type, ln(v), v.target, i(v, e.lockRef.current));
  }, []), m = u.useCallback(function(v) {
    c(v.type, et(v), v.target, i(v, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return xe.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", h, De), document.addEventListener("touchmove", h, De), document.addEventListener("touchstart", f, De), function() {
      xe = xe.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", h, De), document.removeEventListener("touchmove", h, De), document.removeEventListener("touchstart", f, De);
    };
  }, []);
  var g = e.removeScrollBar, S = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    S ? u.createElement(a, { styles: Wi(o) }) : null,
    g ? u.createElement(Ai, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Vi(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const zi = wi(Tn, Hi);
var An = u.forwardRef(function(e, t) {
  return u.createElement(dt, ae({}, e, { ref: t, sideCar: zi }));
});
An.classNames = dt.classNames;
var qi = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Pe = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), nt = {}, Nt = 0, kn = function(e) {
  return e && (e.host || kn(e.parentNode));
}, Yi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = kn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Gi = function(e, t, n, r) {
  var o = Yi(t, Array.isArray(e) ? e : [e]);
  nt[n] || (nt[n] = /* @__PURE__ */ new WeakMap());
  var a = nt[n], l = [], i = /* @__PURE__ */ new Set(), h = new Set(o), c = function(d) {
    !d || i.has(d) || (i.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var f = function(d) {
    !d || h.has(d) || Array.prototype.forEach.call(d.children, function(m) {
      if (i.has(m))
        f(m);
      else
        try {
          var g = m.getAttribute(r), S = g !== null && g !== "false", v = (Pe.get(m) || 0) + 1, p = (a.get(m) || 0) + 1;
          Pe.set(m, v), a.set(m, p), l.push(m), v === 1 && S && tt.set(m, !0), p === 1 && m.setAttribute(n, "true"), S || m.setAttribute(r, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", m, _);
        }
    });
  };
  return f(t), i.clear(), Nt++, function() {
    l.forEach(function(d) {
      var m = Pe.get(d) - 1, g = a.get(d) - 1;
      Pe.set(d, m), a.set(d, g), m || (tt.has(d) || d.removeAttribute(r), tt.delete(d)), g || d.removeAttribute(n);
    }), Nt--, Nt || (Pe = /* @__PURE__ */ new WeakMap(), Pe = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), nt = {});
  };
}, Ki = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = qi(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Gi(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ft = "Dialog", [$n] = xa(ft), [Xi, ne] = $n(ft), Ln = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: l = !0
  } = e, i = u.useRef(null), h = u.useRef(null), [c, f] = $a({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: ft
  });
  return /* @__PURE__ */ s(
    Xi,
    {
      scope: t,
      triggerRef: i,
      contentRef: h,
      contentId: _t(),
      titleId: _t(),
      descriptionId: _t(),
      open: c,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((d) => !d), [f]),
      modal: l,
      children: n
    }
  );
};
Ln.displayName = ft;
var Mn = "DialogTrigger", In = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ne(Mn, n), a = Ee(t, o.triggerRef);
    return /* @__PURE__ */ s(
      le.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": It(o.open),
        ...r,
        ref: a,
        onClick: pe(e.onClick, o.onOpenToggle)
      }
    );
  }
);
In.displayName = Mn;
var Lt = "DialogPortal", [Zi, Bn] = $n(Lt, {
  forceMount: void 0
}), Fn = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = ne(Lt, t);
  return /* @__PURE__ */ s(Zi, { scope: t, forceMount: n, children: u.Children.map(r, (l) => /* @__PURE__ */ s(ut, { present: n || a.open, children: /* @__PURE__ */ s(Sn, { asChild: !0, container: o, children: l }) })) });
};
Fn.displayName = Lt;
var ct = "DialogOverlay", jn = u.forwardRef(
  (e, t) => {
    const n = Bn(ct, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ne(ct, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ s(ut, { present: r || a.open, children: /* @__PURE__ */ s(Ji, { ...o, ref: t }) }) : null;
  }
);
jn.displayName = ct;
var Qi = /* @__PURE__ */ _n("DialogOverlay.RemoveScroll"), Ji = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ne(ct, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ s(An, { as: Qi, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ s(
        le.div,
        {
          "data-state": It(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ce = "DialogContent", Wn = u.forwardRef(
  (e, t) => {
    const n = Bn(Ce, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ne(Ce, e.__scopeDialog);
    return /* @__PURE__ */ s(ut, { present: r || a.open, children: a.modal ? /* @__PURE__ */ s(es, { ...o, ref: t }) : /* @__PURE__ */ s(ts, { ...o, ref: t }) });
  }
);
Wn.displayName = Ce;
var es = u.forwardRef(
  (e, t) => {
    const n = ne(Ce, e.__scopeDialog), r = u.useRef(null), o = Ee(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Ki(a);
    }, []), /* @__PURE__ */ s(
      Un,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: pe(e.onCloseAutoFocus, (a) => {
          var l;
          a.preventDefault(), (l = n.triggerRef.current) == null || l.focus();
        }),
        onPointerDownOutside: pe(e.onPointerDownOutside, (a) => {
          const l = a.detail.originalEvent, i = l.button === 0 && l.ctrlKey === !0;
          (l.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: pe(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), ts = u.forwardRef(
  (e, t) => {
    const n = ne(Ce, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ s(
      Un,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var l, i;
          (l = e.onCloseAutoFocus) == null || l.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var h, c;
          (h = e.onInteractOutside) == null || h.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const l = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Un = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...l } = e, i = ne(Ce, n), h = u.useRef(null), c = Ee(t, h);
    return ci(), /* @__PURE__ */ C(lt, { children: [
      /* @__PURE__ */ s(
        Cn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ s(
            yn,
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
      /* @__PURE__ */ C(lt, { children: [
        /* @__PURE__ */ s(ns, { titleId: i.titleId }),
        /* @__PURE__ */ s(os, { contentRef: h, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Mt = "DialogTitle", Hn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ne(Mt, n);
    return /* @__PURE__ */ s(le.h2, { id: o.titleId, ...r, ref: t });
  }
);
Hn.displayName = Mt;
var Vn = "DialogDescription", zn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ne(Vn, n);
    return /* @__PURE__ */ s(le.p, { id: o.descriptionId, ...r, ref: t });
  }
);
zn.displayName = Vn;
var qn = "DialogClose", Yn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ne(qn, n);
    return /* @__PURE__ */ s(
      le.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: pe(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Yn.displayName = qn;
function It(e) {
  return e ? "open" : "closed";
}
var Gn = "DialogTitleWarning", [ic, Kn] = Da(Gn, {
  contentName: Ce,
  titleName: Mt,
  docsSlug: "dialog"
}), ns = ({ titleId: e }) => {
  const t = Kn(Gn), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, rs = "DialogDescriptionWarning", os = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Kn(rs).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, as = Ln, is = In, ss = Fn, ls = jn, cs = Wn, us = Hn, ds = zn, fs = Yn;
function ms(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Xn = b.createContext({
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
}), Ge = () => {
  const e = b.useContext(Xn);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
ms(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function hs() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function vs() {
  return Bt(/^Mac/);
}
function ps() {
  return Bt(/^iPhone/);
}
function un() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function gs() {
  return Bt(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  vs() && navigator.maxTouchPoints > 1;
}
function Zn() {
  return ps() || gs();
}
function Bt(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const _s = 24, ws = typeof window < "u" ? vn : be;
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
function Qn(e) {
  for (fn(e) && (e = e.parentElement); e && !fn(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const ys = /* @__PURE__ */ new Set([
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
let rt = 0, Tt;
function bs(e = {}) {
  let { isDisabled: t } = e;
  ws(() => {
    if (!t)
      return rt++, rt === 1 && Zn() && (Tt = Cs()), () => {
        rt--, rt === 0 && (Tt == null || Tt());
      };
  }, [
    t
  ]);
}
function Cs() {
  let e, t = 0, n = (d) => {
    e = Qn(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY);
  }, r = (d) => {
    if (!e || e === document.documentElement || e === document.body) {
      d.preventDefault();
      return;
    }
    let m = d.changedTouches[0].pageY, g = e.scrollTop, S = e.scrollHeight - e.clientHeight;
    S !== 0 && ((g <= 0 && m > t || g >= S && m < t) && d.preventDefault(), t = m);
  }, o = (d) => {
    let m = d.target;
    kt(m) && m !== document.activeElement && (d.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
      m.style.transform = "";
    }));
  }, a = (d) => {
    let m = d.target;
    kt(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      m.style.transform = "", Rt && (Rt.height < window.innerHeight ? requestAnimationFrame(() => {
        mn(m);
      }) : Rt.addEventListener("resize", () => mn(m), {
        once: !0
      }));
    }));
  }, l = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, h = window.pageYOffset, c = dn(Es(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let f = dn(Ue(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Ue(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Ue(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), Ue(document, "focus", a, !0), Ue(window, "scroll", l));
  return () => {
    c(), f(), window.scrollTo(i, h);
  };
}
function Es(e, t, n) {
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
    let n = Qn(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const l = n.getBoundingClientRect().bottom + _s;
      a > l && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function kt(e) {
  return e instanceof HTMLInputElement && !ys.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Ss(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ns(...e) {
  return (t) => e.forEach((n) => Ss(n, t));
}
function Jn(...e) {
  return u.useCallback(Ns(...e), e);
}
const er = /* @__PURE__ */ new WeakMap();
function H(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && er.set(e, r);
}
function Rs(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = er.get(e);
  n && (e.style[t] = n[t]);
}
const j = (e) => {
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
function ot(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[j(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[j(t) ? 5 : 4]) : null);
}
function Ts(e) {
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
function Ds(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const M = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, tr = 0.4, xs = 0.25, Ps = 100, nr = 8, we = 16, $t = 26, xt = "vaul-dragging";
function rr(e) {
  const t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function Os({ defaultProp: e, onChange: t }) {
  const n = b.useState(e), [r] = n, o = b.useRef(r), a = rr(t);
  return b.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function or({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Os({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : r, i = rr(n), h = b.useCallback((c) => {
    if (a) {
      const d = typeof c == "function" ? c(e) : c;
      d !== e && i(d);
    } else
      o(c);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    l,
    h
  ];
}
function As({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: l, direction: i = "bottom", container: h, snapToSequentialPoint: c }) {
  const [f, d] = or({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [m, g] = b.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  b.useEffect(() => {
    function y() {
      g({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []);
  const S = b.useMemo(() => f === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    f
  ]), v = b.useMemo(() => {
    var y;
    return (y = n == null ? void 0 : n.findIndex((P) => P === f)) != null ? y : null;
  }, [
    n,
    f
  ]), p = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === f || !n, _ = b.useMemo(() => {
    const y = h ? {
      width: h.getBoundingClientRect().width,
      height: h.getBoundingClientRect().height
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
      if (I && (B = parseInt(x, 10)), j(i)) {
        const T = I ? B : m ? x * y.height : 0;
        return m ? i === "bottom" ? y.height - T : -y.height + T : T;
      }
      const q = I ? B : m ? x * y.width : 0;
      return m ? i === "right" ? y.width - q : -y.width + q : q;
    })) != null ? P : [];
  }, [
    n,
    m,
    h
  ]), E = b.useMemo(() => v !== null ? _ == null ? void 0 : _[v] : null, [
    _,
    v
  ]), N = b.useCallback((y) => {
    var P;
    const x = (P = _ == null ? void 0 : _.findIndex((I) => I === y)) != null ? P : null;
    l(x), H(r.current, {
      transition: `transform ${M.DURATION}s cubic-bezier(${M.EASE.join(",")})`,
      transform: j(i) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)`
    }), _ && x !== _.length - 1 && a !== void 0 && x !== a && x < a ? H(o.current, {
      transition: `opacity ${M.DURATION}s cubic-bezier(${M.EASE.join(",")})`,
      opacity: "0"
    }) : H(o.current, {
      transition: `opacity ${M.DURATION}s cubic-bezier(${M.EASE.join(",")})`,
      opacity: "1"
    }), d(n == null ? void 0 : n[Math.max(x, 0)]);
  }, [
    r.current,
    n,
    _,
    a,
    o,
    d
  ]);
  b.useEffect(() => {
    if (f || e) {
      var y;
      const P = (y = n == null ? void 0 : n.findIndex((x) => x === e || x === f)) != null ? y : -1;
      _ && P !== -1 && typeof _[P] == "number" && N(_[P]);
    }
  }, [
    f,
    e,
    n,
    _,
    N
  ]);
  function w({ draggedDistance: y, closeDrawer: P, velocity: x, dismissible: I }) {
    if (a === void 0) return;
    const B = i === "bottom" || i === "right" ? (E ?? 0) - y : (E ?? 0) + y, q = v === a - 1, T = v === 0, X = y > 0;
    if (q && H(o.current, {
      transition: `opacity ${M.DURATION}s cubic-bezier(${M.EASE.join(",")})`
    }), !c && x > 2 && !X) {
      I ? P() : N(_[0]);
      return;
    }
    if (!c && x > 2 && X && _ && n) {
      N(_[n.length - 1]);
      return;
    }
    const Y = _ == null ? void 0 : _.reduce((z, ie) => typeof z != "number" || typeof ie != "number" ? z : Math.abs(ie - B) < Math.abs(z - B) ? ie : z), Z = j(i) ? window.innerHeight : window.innerWidth;
    if (x > tr && Math.abs(y) < Z * 0.4) {
      const z = X ? 1 : -1;
      if (z > 0 && S && n) {
        N(_[n.length - 1]);
        return;
      }
      if (T && z < 0 && I && P(), v === null) return;
      N(_[v + z]);
      return;
    }
    N(Y);
  }
  function O({ draggedDistance: y }) {
    if (E === null) return;
    const P = i === "bottom" || i === "right" ? E - y : E + y;
    (i === "bottom" || i === "right") && P < _[_.length - 1] || (i === "top" || i === "left") && P > _[_.length - 1] || H(r.current, {
      transform: j(i) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function W(y, P) {
    if (!n || typeof v != "number" || !_ || a === void 0) return null;
    const x = v === a - 1;
    if (v >= a && P)
      return 0;
    if (x && !P) return 1;
    if (!p && !x) return null;
    const B = x ? v + 1 : v - 1, q = x ? _[B] - _[B - 1] : _[B + 1] - _[B], T = y / Math.abs(q);
    return x ? 1 - T : T;
  }
  return {
    isLastSnapPoint: S,
    activeSnapPoint: f,
    shouldFade: p,
    getPercentageDragged: W,
    setActiveSnapPoint: d,
    activeSnapPointIndex: v,
    onRelease: w,
    onDrag: O,
    snapPointsOffset: _
  };
}
const ks = () => () => {
};
function $s() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = Ge(), a = b.useRef(null), l = br(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - $t) / window.innerWidth;
  }
  b.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const h = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!h) return;
      Ds(r && !o ? Dt(document.body, {
        background: "black"
      }) : ks, Dt(h, {
        transformOrigin: j(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${M.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${M.EASE.join(",")})`
      }));
      const c = Dt(h, {
        borderRadius: `${nr}px`,
        overflow: "hidden",
        ...j(e) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        c(), a.current = window.setTimeout(() => {
          l ? document.body.style.background = l : document.body.style.removeProperty("background");
        }, M.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    l
  ]);
}
let He = null;
function Ls({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [l, i] = b.useState(() => typeof window < "u" ? window.location.href : ""), h = b.useRef(0), c = b.useCallback(() => {
    if (un() && He === null && e && !a) {
      He = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: d, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-h.current}px`,
        left: `${-d}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const g = m - window.innerHeight;
        g && h.current >= m && (document.body.style.top = `${-(h.current + g)}px`);
      }), 300);
    }
  }, [
    e
  ]), f = b.useCallback(() => {
    if (un() && He !== null && !a) {
      const d = -parseInt(document.body.style.top, 10), m = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, He), window.requestAnimationFrame(() => {
        if (o && l !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(m, d);
      }), He = null;
    }
  }, [
    l
  ]);
  return b.useEffect(() => {
    function d() {
      h.current = window.scrollY;
    }
    return d(), window.addEventListener("scroll", d), () => {
      window.removeEventListener("scroll", d);
    };
  }, []), b.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || f();
      };
  }, [
    t,
    f
  ]), b.useEffect(() => {
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
function Ms({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: l = !1, setBackgroundColorOnScale: i = !0, closeThreshold: h = xs, scrollLockTimeout: c = Ps, dismissible: f = !0, handleOnly: d = !1, fadeFromIndex: m = a && a.length - 1, activeSnapPoint: g, setActiveSnapPoint: S, fixed: v, modal: p = !0, onClose: _, nested: E, noBodyStyles: N = !1, direction: w = "bottom", defaultOpen: O = !1, disablePreventScroll: W = !0, snapToSequentialPoint: y = !1, preventScrollRestoration: P = !1, repositionInputs: x = !0, onAnimationEnd: I, container: B, autoFocus: q = !1 }) {
  var T, X;
  const [Y = !1, Z] = or({
    defaultProp: O,
    prop: e,
    onChange: (R) => {
      t == null || t(R), !R && !E && mr(), setTimeout(() => {
        I == null || I(R);
      }, M.DURATION * 1e3), R && !p && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), R || (document.body.style.pointerEvents = "auto");
    }
  }), [z, ie] = b.useState(!1), [ce, $e] = b.useState(!1), [sr, Ft] = b.useState(!1), Se = b.useRef(null), Ke = b.useRef(null), mt = b.useRef(null), ht = b.useRef(null), Le = b.useRef(null), Me = b.useRef(!1), vt = b.useRef(null), pt = b.useRef(0), Ne = b.useRef(!1), jt = b.useRef(!O), Wt = b.useRef(0), D = b.useRef(null), Ut = b.useRef(((T = D.current) == null ? void 0 : T.getBoundingClientRect().height) || 0), Ht = b.useRef(((X = D.current) == null ? void 0 : X.getBoundingClientRect().width) || 0), gt = b.useRef(0), lr = b.useCallback((R) => {
    a && R === Ie.length - 1 && (Ke.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: cr, activeSnapPointIndex: Re, setActiveSnapPoint: Vt, onRelease: ur, snapPointsOffset: Ie, onDrag: dr, shouldFade: zt, getPercentageDragged: fr } = As({
    snapPoints: a,
    activeSnapPointProp: g,
    setActiveSnapPointProp: S,
    drawerRef: D,
    fadeFromIndex: m,
    overlayRef: Se,
    onSnapPointChange: lr,
    direction: w,
    container: B,
    snapToSequentialPoint: y
  });
  bs({
    isDisabled: !Y || ce || !p || sr || !z || !x || !W
  });
  const { restorePositionSetting: mr } = Ls({
    isOpen: Y,
    modal: p,
    nested: E ?? !1,
    hasBeenOpened: z,
    preventScrollRestoration: P,
    noBodyStyles: N
  });
  function Xe() {
    return (window.innerWidth - $t) / window.innerWidth;
  }
  function hr(R) {
    var $, L;
    !f && !a || D.current && !D.current.contains(R.target) || (Ut.current = (($ = D.current) == null ? void 0 : $.getBoundingClientRect().height) || 0, Ht.current = ((L = D.current) == null ? void 0 : L.getBoundingClientRect().width) || 0, $e(!0), mt.current = /* @__PURE__ */ new Date(), Zn() && window.addEventListener("touchend", () => Me.current = !1, {
      once: !0
    }), R.target.setPointerCapture(R.pointerId), pt.current = j(w) ? R.pageY : R.pageX);
  }
  function qt(R, $) {
    var L;
    let A = R;
    const F = (L = window.getSelection()) == null ? void 0 : L.toString(), K = D.current ? ot(D.current, w) : null, G = /* @__PURE__ */ new Date();
    if (A.tagName === "SELECT" || A.hasAttribute("data-vaul-no-drag") || A.closest("[data-vaul-no-drag]"))
      return !1;
    if (w === "right" || w === "left")
      return !0;
    if (Ke.current && G.getTime() - Ke.current.getTime() < 500)
      return !1;
    if (K !== null && (w === "bottom" ? K > 0 : K < 0))
      return !0;
    if (F && F.length > 0)
      return !1;
    if (Le.current && G.getTime() - Le.current.getTime() < c && K === 0 || $)
      return Le.current = G, !1;
    for (; A; ) {
      if (A.scrollHeight > A.clientHeight) {
        if (A.scrollTop !== 0)
          return Le.current = /* @__PURE__ */ new Date(), !1;
        if (A.getAttribute("role") === "dialog")
          return !0;
      }
      A = A.parentNode;
    }
    return !0;
  }
  function vr(R) {
    if (D.current && ce) {
      const $ = w === "bottom" || w === "right" ? 1 : -1, L = (pt.current - (j(w) ? R.pageY : R.pageX)) * $, A = L > 0, F = a && !f && !A;
      if (F && Re === 0) return;
      const K = Math.abs(L), G = document.querySelector("[data-vaul-drawer-wrapper]"), ue = w === "bottom" || w === "top" ? Ut.current : Ht.current;
      let J = K / ue;
      const ge = fr(K, A);
      if (ge !== null && (J = ge), F && J >= 1 || !Me.current && !qt(R.target, A)) return;
      if (D.current.classList.add(xt), Me.current = !0, H(D.current, {
        transition: "none"
      }), H(Se.current, {
        transition: "none"
      }), a && dr({
        draggedDistance: L
      }), A && !a) {
        const re = Ts(L), Ze = Math.min(re * -1, 0) * $;
        H(D.current, {
          transform: j(w) ? `translate3d(0, ${Ze}px, 0)` : `translate3d(${Ze}px, 0, 0)`
        });
        return;
      }
      const de = 1 - J;
      if ((zt || m && Re === m - 1) && (r == null || r(R, J), H(Se.current, {
        opacity: `${de}`,
        transition: "none"
      }, !0)), G && Se.current && l) {
        const re = Math.min(Xe() + J * (1 - Xe()), 1), Ze = 8 - J * 8, Gt = Math.max(0, 14 - J * 14);
        H(G, {
          borderRadius: `${Ze}px`,
          transform: j(w) ? `scale(${re}) translate3d(0, ${Gt}px, 0)` : `scale(${re}) translate3d(${Gt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const re = K * $;
        H(D.current, {
          transform: j(w) ? `translate3d(0, ${re}px, 0)` : `translate3d(${re}px, 0, 0)`
        });
      }
    }
  }
  b.useEffect(() => {
    window.requestAnimationFrame(() => {
      jt.current = !0;
    });
  }, []), b.useEffect(() => {
    var R;
    function $() {
      if (!D.current || !x) return;
      const L = document.activeElement;
      if (kt(L) || Ne.current) {
        var A;
        const F = ((A = window.visualViewport) == null ? void 0 : A.height) || 0, K = window.innerHeight;
        let G = K - F;
        const ue = D.current.getBoundingClientRect().height || 0, J = ue > K * 0.8;
        gt.current || (gt.current = ue);
        const ge = D.current.getBoundingClientRect().top;
        if (Math.abs(Wt.current - G) > 60 && (Ne.current = !Ne.current), a && a.length > 0 && Ie && Re) {
          const de = Ie[Re] || 0;
          G += de;
        }
        if (Wt.current = G, ue > F || Ne.current) {
          const de = D.current.getBoundingClientRect().height;
          let re = de;
          de > F && (re = F - (J ? ge : $t)), v ? D.current.style.height = `${de - Math.max(G, 0)}px` : D.current.style.height = `${Math.max(re, F - ge)}px`;
        } else hs() || (D.current.style.height = `${gt.current}px`);
        a && a.length > 0 && !Ne.current ? D.current.style.bottom = "0px" : D.current.style.bottom = `${Math.max(G, 0)}px`;
      }
    }
    return (R = window.visualViewport) == null || R.addEventListener("resize", $), () => {
      var L;
      return (L = window.visualViewport) == null ? void 0 : L.removeEventListener("resize", $);
    };
  }, [
    Re,
    a,
    Ie
  ]);
  function Be(R) {
    pr(), _ == null || _(), R || Z(!1), setTimeout(() => {
      a && Vt(a[0]);
    }, M.DURATION * 1e3);
  }
  function Yt() {
    if (!D.current) return;
    const R = document.querySelector("[data-vaul-drawer-wrapper]"), $ = ot(D.current, w);
    H(D.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${M.DURATION}s cubic-bezier(${M.EASE.join(",")})`
    }), H(Se.current, {
      transition: `opacity ${M.DURATION}s cubic-bezier(${M.EASE.join(",")})`,
      opacity: "1"
    }), l && $ && $ > 0 && Y && H(R, {
      borderRadius: `${nr}px`,
      overflow: "hidden",
      ...j(w) ? {
        transform: `scale(${Xe()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Xe()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${M.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${M.EASE.join(",")})`
    }, !0);
  }
  function pr() {
    !ce || !D.current || (D.current.classList.remove(xt), Me.current = !1, $e(!1), ht.current = /* @__PURE__ */ new Date());
  }
  function gr(R) {
    if (!ce || !D.current) return;
    D.current.classList.remove(xt), Me.current = !1, $e(!1), ht.current = /* @__PURE__ */ new Date();
    const $ = ot(D.current, w);
    if (!R || !qt(R.target, !1) || !$ || Number.isNaN($) || mt.current === null) return;
    const L = ht.current.getTime() - mt.current.getTime(), A = pt.current - (j(w) ? R.pageY : R.pageX), F = Math.abs(A) / L;
    if (F > 0.05 && (Ft(!0), setTimeout(() => {
      Ft(!1);
    }, 200)), a) {
      ur({
        draggedDistance: A * (w === "bottom" || w === "right" ? 1 : -1),
        closeDrawer: Be,
        velocity: F,
        dismissible: f
      }), o == null || o(R, !0);
      return;
    }
    if (w === "bottom" || w === "right" ? A > 0 : A < 0) {
      Yt(), o == null || o(R, !0);
      return;
    }
    if (F > tr) {
      Be(), o == null || o(R, !1);
      return;
    }
    var K;
    const G = Math.min((K = D.current.getBoundingClientRect().height) != null ? K : 0, window.innerHeight);
    var ue;
    const J = Math.min((ue = D.current.getBoundingClientRect().width) != null ? ue : 0, window.innerWidth), ge = w === "left" || w === "right";
    if (Math.abs($) >= (ge ? J : G) * h) {
      Be(), o == null || o(R, !1);
      return;
    }
    o == null || o(R, !0), Yt();
  }
  b.useEffect(() => (Y && (H(document.documentElement, {
    scrollBehavior: "auto"
  }), Ke.current = /* @__PURE__ */ new Date()), () => {
    Rs(document.documentElement, "scrollBehavior");
  }), [
    Y
  ]);
  function _r(R) {
    const $ = R ? (window.innerWidth - we) / window.innerWidth : 1, L = R ? -we : 0;
    vt.current && window.clearTimeout(vt.current), H(D.current, {
      transition: `transform ${M.DURATION}s cubic-bezier(${M.EASE.join(",")})`,
      transform: j(w) ? `scale(${$}) translate3d(0, ${L}px, 0)` : `scale(${$}) translate3d(${L}px, 0, 0)`
    }), !R && D.current && (vt.current = setTimeout(() => {
      const A = ot(D.current, w);
      H(D.current, {
        transition: "none",
        transform: j(w) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
      });
    }, 500));
  }
  function wr(R, $) {
    if ($ < 0) return;
    const L = (window.innerWidth - we) / window.innerWidth, A = L + $ * (1 - L), F = -we + $ * we;
    H(D.current, {
      transform: j(w) ? `scale(${A}) translate3d(0, ${F}px, 0)` : `scale(${A}) translate3d(${F}px, 0, 0)`,
      transition: "none"
    });
  }
  function yr(R, $) {
    const L = j(w) ? window.innerHeight : window.innerWidth, A = $ ? (L - we) / L : 1, F = $ ? -we : 0;
    $ && H(D.current, {
      transition: `transform ${M.DURATION}s cubic-bezier(${M.EASE.join(",")})`,
      transform: j(w) ? `scale(${A}) translate3d(0, ${F}px, 0)` : `scale(${A}) translate3d(${F}px, 0, 0)`
    });
  }
  return b.useEffect(() => {
    p || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    p
  ]), /* @__PURE__ */ b.createElement(as, {
    defaultOpen: O,
    onOpenChange: (R) => {
      !f && !R || (R ? ie(!0) : Be(!0), Z(R));
    },
    open: Y
  }, /* @__PURE__ */ b.createElement(Xn.Provider, {
    value: {
      activeSnapPoint: cr,
      snapPoints: a,
      setActiveSnapPoint: Vt,
      drawerRef: D,
      overlayRef: Se,
      onOpenChange: t,
      onPress: hr,
      onRelease: gr,
      onDrag: vr,
      dismissible: f,
      shouldAnimate: jt,
      handleOnly: d,
      isOpen: Y,
      isDragging: ce,
      shouldFade: zt,
      closeDrawer: Be,
      onNestedDrag: wr,
      onNestedOpenChange: _r,
      onNestedRelease: yr,
      keyboardIsOpen: Ne,
      modal: p,
      snapPointsOffset: Ie,
      activeSnapPointIndex: Re,
      direction: w,
      shouldScaleBackground: l,
      setBackgroundColorOnScale: i,
      noBodyStyles: N,
      container: B,
      autoFocus: q
    }
  }, n));
}
const ar = /* @__PURE__ */ b.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: a, isOpen: l, modal: i, shouldAnimate: h } = Ge(), c = Jn(t, n), f = r && r.length > 0;
  if (!i)
    return null;
  const d = b.useCallback((m) => o(m), [
    o
  ]);
  return /* @__PURE__ */ b.createElement(ls, {
    onMouseUp: d,
    ref: c,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": l && f ? "true" : "false",
    "data-vaul-snap-points-overlay": l && a ? "true" : "false",
    "data-vaul-animate": h != null && h.current ? "true" : "false",
    ...e
  });
});
ar.displayName = "Drawer.Overlay";
const ir = /* @__PURE__ */ b.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: a, onPress: l, onRelease: i, onDrag: h, keyboardIsOpen: c, snapPointsOffset: f, activeSnapPointIndex: d, modal: m, isOpen: g, direction: S, snapPoints: v, container: p, handleOnly: _, shouldAnimate: E, autoFocus: N } = Ge(), [w, O] = b.useState(!1), W = Jn(o, a), y = b.useRef(null), P = b.useRef(null), x = b.useRef(!1), I = v && v.length > 0;
  $s();
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
      O(!0);
    });
  }, []);
  function q(T) {
    y.current = null, x.current = !1, i(T);
  }
  return /* @__PURE__ */ b.createElement(cs, {
    "data-vaul-drawer-direction": S,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": w ? "true" : "false",
    "data-vaul-snap-points": g && I ? "true" : "false",
    "data-vaul-custom-container": p ? "true" : "false",
    "data-vaul-animate": E != null && E.current ? "true" : "false",
    ...r,
    ref: W,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[d ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (T) => {
      _ || (r.onPointerDown == null || r.onPointerDown.call(r, T), y.current = {
        x: T.pageX,
        y: T.pageY
      }, l(T));
    },
    onOpenAutoFocus: (T) => {
      n == null || n(T), N || T.preventDefault();
    },
    onPointerDownOutside: (T) => {
      if (e == null || e(T), !m || T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      c.current && (c.current = !1);
    },
    onFocusOutside: (T) => {
      if (!m) {
        T.preventDefault();
        return;
      }
    },
    onPointerMove: (T) => {
      if (P.current = T, _ || (r.onPointerMove == null || r.onPointerMove.call(r, T), !y.current)) return;
      const X = T.pageY - y.current.y, Y = T.pageX - y.current.x, Z = T.pointerType === "touch" ? 10 : 2;
      B({
        x: Y,
        y: X
      }, S, Z) ? h(T) : (Math.abs(Y) > Z || Math.abs(X) > Z) && (y.current = null);
    },
    onPointerUp: (T) => {
      r.onPointerUp == null || r.onPointerUp.call(r, T), y.current = null, x.current = !1, i(T);
    },
    onPointerOut: (T) => {
      r.onPointerOut == null || r.onPointerOut.call(r, T), q(P.current);
    },
    onContextMenu: (T) => {
      r.onContextMenu == null || r.onContextMenu.call(r, T), P.current && q(P.current);
    }
  });
});
ir.displayName = "Drawer.Content";
const Is = 250, Bs = 120, Fs = /* @__PURE__ */ b.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: a, snapPoints: l, activeSnapPoint: i, setActiveSnapPoint: h, dismissible: c, handleOnly: f, isOpen: d, onPress: m, onDrag: g } = Ge(), S = b.useRef(null), v = b.useRef(!1);
  function p() {
    if (v.current) {
      N();
      return;
    }
    window.setTimeout(() => {
      _();
    }, Bs);
  }
  function _() {
    if (a || e || v.current) {
      N();
      return;
    }
    if (N(), !l || l.length === 0) {
      c || o();
      return;
    }
    if (i === l[l.length - 1] && c) {
      o();
      return;
    }
    const O = l.findIndex((y) => y === i);
    if (O === -1) return;
    const W = l[O + 1];
    h(W);
  }
  function E() {
    S.current = window.setTimeout(() => {
      v.current = !0;
    }, Is);
  }
  function N() {
    S.current && window.clearTimeout(S.current), v.current = !1;
  }
  return /* @__PURE__ */ b.createElement("div", {
    onClick: p,
    onPointerCancel: N,
    onPointerDown: (w) => {
      f && m(w), E();
    },
    onPointerMove: (w) => {
      f && g(w);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": d ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ b.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
Fs.displayName = "Drawer.Handle";
function js(e) {
  const t = Ge(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ b.createElement(ss, {
    container: n,
    ...r
  });
}
const k = {
  Root: Ms,
  Content: ir,
  Overlay: ar,
  Trigger: is,
  Portal: js,
  Close: fs,
  Title: us,
  Description: ds
}, Ws = "_overlay_deg94_3", Us = "_content_deg94_10", Hs = "_grabber_deg94_35", Vs = "_headline_deg94_46", zs = "_subhead_deg94_58", qs = "_callout_deg94_70", Ys = "_calloutLabel_deg94_80", Gs = "_calloutRow_deg94_89", Ks = "_calloutGross_deg94_95", Xs = "_calloutArrow_deg94_103", Zs = "_calloutNet_deg94_107", Qs = "_features_deg94_117", Js = "_divider_deg94_126", el = "_priceRow_deg94_134", tl = "_price_deg94_134", nl = "_priceNote_deg94_149", rl = "_restore_deg94_159", V = {
  overlay: Ws,
  content: Us,
  grabber: Hs,
  headline: Vs,
  subhead: zs,
  callout: qs,
  calloutLabel: Ys,
  calloutRow: Gs,
  calloutGross: Ks,
  calloutArrow: Xs,
  calloutNet: Zs,
  features: Qs,
  divider: Js,
  priceRow: el,
  price: tl,
  priceNote: nl,
  restore: rl
}, ol = [
  { title: "Bonus & overtime modelling", description: "Model any additional income", state: "active" },
  { title: "Marginal tax insight", description: "See what your next £1 is worth", state: "active" },
  { title: "Salary comparison", description: "Coming soon", state: "inactive" }
];
function sc({
  open: e,
  onOpenChange: t,
  trigger: n,
  priceFormatted: r,
  priceNote: o = "one-off · no subscription",
  features: a = ol,
  onPurchase: l,
  onRestore: i,
  isPurchasing: h = !1
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
        /* @__PURE__ */ s("div", { className: V.features, role: "list", "aria-label": "Included features", children: a.map((c, f) => /* @__PURE__ */ s("div", { role: "listitem", children: /* @__PURE__ */ s(Gr, { title: c.title, description: c.description, state: c.state }) }, f)) }),
        /* @__PURE__ */ s("div", { className: V.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ C("div", { className: V.priceRow, children: [
          /* @__PURE__ */ s("span", { className: V.price, children: r }),
          o && /* @__PURE__ */ s("span", { className: V.priceNote, children: o })
        ] }),
        /* @__PURE__ */ s(
          Pt,
          {
            variant: "pro",
            size: "lg",
            fullWidth: !0,
            onClick: l,
            disabled: h,
            "aria-label": "Unlock Netti Pro",
            children: h ? "Unlocking…" : "Unlock Netti Pro"
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
const al = "_overlay_qhbnf_6", il = "_content_qhbnf_13", sl = "_grabber_qhbnf_33", ll = "_title_qhbnf_42", cl = "_list_qhbnf_58", ul = "_divider_qhbnf_65", Oe = {
  overlay: al,
  content: il,
  grabber: sl,
  title: ll,
  list: cl,
  divider: ul
};
function lc({
  open: e,
  onOpenChange: t,
  trigger: n,
  title: r = "Add additional income",
  types: o,
  onSelect: a
}) {
  return /* @__PURE__ */ C(k.Root, { open: e, onOpenChange: t, children: [
    n && /* @__PURE__ */ s(k.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C(k.Portal, { children: [
      /* @__PURE__ */ s(k.Overlay, { className: Oe.overlay }),
      /* @__PURE__ */ C(k.Content, { className: Oe.content, "aria-label": r, children: [
        /* @__PURE__ */ s("div", { className: Oe.grabber, "aria-hidden": "true" }),
        /* @__PURE__ */ s(k.Title, { className: Oe.title, children: r }),
        /* @__PURE__ */ s("div", { className: Oe.list, role: "list", children: o.map((l, i) => /* @__PURE__ */ C("div", { role: "listitem", children: [
          /* @__PURE__ */ s(
            fo,
            {
              title: l.title,
              subtitle: l.subtitle,
              onClick: () => a(l.id)
            }
          ),
          i < o.length - 1 && /* @__PURE__ */ s("div", { className: Oe.divider, "aria-hidden": "true" })
        ] }, l.id)) })
      ] })
    ] })
  ] });
}
const dl = "_card_mp69k_9", fl = "_left_mp69k_22", ml = "_label_mp69k_30", hl = "_amountRow_mp69k_37", vl = "_gross_mp69k_44", pl = "_frequency_mp69k_50", gl = "_right_mp69k_57", _l = "_periodLabel_mp69k_65", wl = "_periodAmount_mp69k_73", se = {
  card: dl,
  left: fl,
  label: ml,
  amountRow: hl,
  gross: vl,
  frequency: pl,
  right: gl,
  periodLabel: _l,
  periodAmount: wl
};
function cc({
  label: e = "Gross added",
  amountFormatted: t,
  frequency: n,
  periodLabel: r,
  periodAmountFormatted: o,
  className: a
}) {
  return /* @__PURE__ */ C("div", { className: [se.card, a ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ C("div", { className: se.left, children: [
      /* @__PURE__ */ s("span", { className: se.label, children: e }),
      /* @__PURE__ */ C("div", { className: se.amountRow, children: [
        /* @__PURE__ */ s("span", { className: se.gross, children: t }),
        /* @__PURE__ */ s("span", { className: se.frequency, children: `× ${n}` })
      ] })
    ] }),
    /* @__PURE__ */ C("div", { className: se.right, children: [
      /* @__PURE__ */ s("span", { className: se.periodLabel, children: r }),
      /* @__PURE__ */ s("span", { className: se.periodAmount, children: o })
    ] })
  ] });
}
const yl = "_card_13yqi_7", bl = "_header_13yqi_19", Cl = "_title_13yqi_25", El = "_subtitle_13yqi_36", at = {
  card: yl,
  header: bl,
  title: Cl,
  subtitle: El
};
function uc({ children: e, theme: t = "light", title: n, subtitle: r, className: o }) {
  return /* @__PURE__ */ C(
    "div",
    {
      "data-theme": t,
      className: [at.card, o ?? ""].filter(Boolean).join(" "),
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
const Sl = "_overlay_18r1b_7", Nl = "_content_18r1b_14", Rl = "_handle_18r1b_35", Tl = "_header_18r1b_45", Dl = "_body_18r1b_49", xl = "_footer_18r1b_56", Pl = "_srOnly_18r1b_62", ye = {
  overlay: Sl,
  content: Nl,
  handle: Rl,
  header: Tl,
  body: Dl,
  footer: xl,
  srOnly: Pl
}, Ol = /* @__PURE__ */ s("div", { className: ye.handle, "aria-hidden": "true" });
function dc({
  open: e,
  onOpenChange: t,
  trigger: n,
  header: r,
  children: o,
  footer: a,
  showHandle: l = !0,
  overlay: i = !0,
  "aria-label": h = "Sheet",
  className: c,
  style: f
}) {
  const [d, m] = ke(!1), g = e !== void 0, S = g ? e : d, v = Cr(
    (p) => {
      g ? t == null || t(p) : m(p);
    },
    [g, t]
  );
  return /* @__PURE__ */ C(k.Root, { open: S, onOpenChange: v, children: [
    n ? /* @__PURE__ */ s(k.Trigger, { asChild: !0, children: n }) : null,
    /* @__PURE__ */ C(k.Portal, { children: [
      i ? /* @__PURE__ */ s(k.Overlay, { className: ye.overlay, style: f }) : null,
      /* @__PURE__ */ C(
        k.Content,
        {
          className: [ye.content, c ?? ""].filter(Boolean).join(" "),
          style: f,
          "aria-label": h,
          children: [
            /* @__PURE__ */ s(k.Title, { className: ye.srOnly, children: h }),
            l ? Ol : null,
            r ? /* @__PURE__ */ s("div", { className: ye.header, children: r }) : null,
            /* @__PURE__ */ s("div", { className: ye.body, children: o }),
            a ? /* @__PURE__ */ s("div", { className: ye.footer, children: a }) : null
          ]
        }
      )
    ] })
  ] });
}
const Al = "_header_cu1m2_9", kl = "_title_cu1m2_17", $l = "_spacer_cu1m2_28", Ll = "_icon_cu1m2_33", Ml = "_iconButton_cu1m2_34", Ve = {
  header: Al,
  title: kl,
  spacer: $l,
  icon: Ll,
  iconButton: Ml
}, Il = /* @__PURE__ */ s("span", { className: Ve.spacer, "aria-hidden": "true" });
function fc({
  title: e,
  icon: t,
  onIconClick: n,
  iconLabel: r = "More information",
  className: o
}) {
  const a = !!t;
  return /* @__PURE__ */ C("div", { className: [Ve.header, o ?? ""].filter(Boolean).join(" "), children: [
    a ? Il : null,
    /* @__PURE__ */ s("span", { className: Ve.title, children: e }),
    a ? n ? /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: Ve.iconButton,
        onClick: n,
        "aria-label": r,
        children: t
      }
    ) : /* @__PURE__ */ s("span", { className: Ve.icon, "aria-hidden": "true", children: t }) : null
  ] });
}
const Bl = "_overlay_q8ram_6", Fl = "_content_q8ram_13", jl = "_handle_q8ram_32", Wl = "_titleBar_q8ram_42", Ul = "_title_q8ram_42", Hl = "_titleSpacer_q8ram_58", Vl = "_back_q8ram_63", zl = "_body_q8ram_89", ql = "_footer_q8ram_97", Yl = "_description_q8ram_101", te = {
  overlay: Bl,
  content: Fl,
  handle: jl,
  titleBar: Wl,
  title: Ul,
  titleSpacer: Hl,
  back: Vl,
  body: zl,
  footer: ql,
  description: Yl
};
function Gl({
  title: e,
  description: t,
  trigger: n,
  children: r,
  footer: o,
  open: a,
  onOpenChange: l,
  onBack: i,
  onOpen: h,
  onClose: c
}) {
  const [f, d] = ke(!1), m = a !== void 0, g = m ? a : f, S = (p) => {
    m ? l == null || l(p) : d(p);
  }, v = ze(g);
  return be(() => {
    g !== v.current && (v.current = g, g ? h == null || h() : c == null || c());
  }, [g]), /* @__PURE__ */ C(k.Root, { open: g, onOpenChange: S, children: [
    n && /* @__PURE__ */ s(k.Trigger, { asChild: !0, children: n }),
    /* @__PURE__ */ C(k.Portal, { children: [
      /* @__PURE__ */ s(k.Overlay, { className: te.overlay }),
      /* @__PURE__ */ C(k.Content, { className: te.content, "aria-label": e, children: [
        /* @__PURE__ */ s("div", { className: te.handle, "aria-hidden": "true" }),
        e && /* @__PURE__ */ C("div", { className: te.titleBar, children: [
          i ? /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: te.back,
              onClick: i,
              "aria-label": "Back",
              children: /* @__PURE__ */ s("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ s("path", { d: "M15 18l-6-6 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            }
          ) : /* @__PURE__ */ s("div", { className: te.titleSpacer }),
          /* @__PURE__ */ s(k.Title, { className: te.title, children: e }),
          /* @__PURE__ */ s("div", { className: te.titleSpacer })
        ] }),
        /* @__PURE__ */ C("div", { className: te.body, children: [
          t && /* @__PURE__ */ s(k.Description, { className: te.description, children: t }),
          r
        ] }),
        o && /* @__PURE__ */ s("div", { className: te.footer, children: o })
      ] })
    ] })
  ] });
}
const mc = Gl;
function hc({
  title: e,
  open: t,
  onOpenChange: n,
  onBack: r,
  children: o,
  footer: a,
  hideClose: l,
  onOpen: i,
  onClose: h
}) {
  const c = ze(t);
  be(() => {
    t !== c.current && (c.current = t, t ? i == null || i() : h == null || h());
  }, [t]);
  const f = ze(null);
  return be(() => {
    if (!t) return;
    const d = window.visualViewport, m = f.current;
    if (!d || !m) return;
    const g = () => {
      m.style.height = `${d.height}px`, m.style.top = `${d.offsetTop}px`;
    };
    return g(), d.addEventListener("resize", g), d.addEventListener("scroll", g), () => {
      d.removeEventListener("resize", g), d.removeEventListener("scroll", g), m.style.height = "", m.style.top = "";
    };
  }, [t]), t ? pn(
    /* @__PURE__ */ C("div", { className: "fss-root", ref: f, children: [
      /* @__PURE__ */ C("div", { className: "fss-title-bar", children: [
        r ? /* @__PURE__ */ s("button", { type: "button", className: "fss-nav-btn", onClick: r, "aria-label": "Back", children: /* @__PURE__ */ s("svg", { viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ s("path", { d: "M15 18l-6-6 6-6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) : /* @__PURE__ */ s("div", { className: "fss-spacer" }),
        e && /* @__PURE__ */ s("div", { className: "fss-title", children: e }),
        l ? /* @__PURE__ */ s("div", { className: "fss-spacer" }) : /* @__PURE__ */ s("button", { type: "button", className: "fss-nav-btn", onClick: () => n(!1), "aria-label": "Close", children: /* @__PURE__ */ s("svg", { viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ s("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
      ] }),
      /* @__PURE__ */ s("div", { className: `fss-body ${a ? "fss-body--with-footer" : "fss-body--no-footer"}`, children: o }),
      a && /* @__PURE__ */ s("div", { className: "fss-footer", children: a })
    ] }),
    document.body
  ) : null;
}
function vc({ title: e, description: t, children: n }) {
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
function pc({ width: e = 72, height: t = 24, className: n }) {
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
function gc({ className: e = "" }) {
  return /* @__PURE__ */ C("div", { className: `ds-ad-slot ${e}`, "data-testid": "ad-slot", children: [
    /* @__PURE__ */ C("svg", { className: "ds-ad-slot-icon", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ s("rect", { x: "1", y: "1", width: "14", height: "14", rx: "2", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ s("line", { x1: "1", y1: "5", x2: "15", y2: "5", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ s("line", { x1: "5", y1: "5", x2: "5", y2: "15", stroke: "currentColor", strokeWidth: "1.2" })
    ] }),
    /* @__PURE__ */ s("span", { className: "ds-ad-slot-text", children: "Ad Slot Placeholder" })
  ] });
}
function _c({ children: e, className: t = "", ...n }) {
  return /* @__PURE__ */ s("button", { type: "button", className: `ds-primary-btn ${t}`, ...n, children: e });
}
export {
  gc as AdSlot,
  ac as AdditionalIncomeCard,
  rc as BottomNav,
  mc as BottomSheet,
  Pt as Button,
  uc as Card,
  cc as ConfirmationCard,
  ec as Divider,
  Gr as FeatureRow,
  hc as FullScreenSheet,
  lc as IncomeTypePicker,
  fo as IncomeTypeRow,
  vc as InfoSheet,
  tc as InputField,
  ao as ListRow,
  Jl as MoneyRow,
  pc as NettiLogo,
  sc as PaywallSheet,
  _c as PrimaryButton,
  oc as SalaryCard,
  _o as SegmentedControl,
  nc as Select,
  dc as Sheet,
  fc as SheetHeader,
  Ql as Switch,
  Gl as TakeHomePaySheet,
  Ur as Tick
};
