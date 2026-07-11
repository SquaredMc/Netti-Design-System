import { jsxs as C, jsx as s, Fragment as st } from "react/jsx-runtime";
import * as u from "react";
import y, { useId as hn, useState as ke, useRef as lt, useLayoutEffect as vn, useEffect as Pe, useMemo as yr, useCallback as Cr } from "react";
import * as Er from "react-dom";
import Sr, { createPortal as pn } from "react-dom";
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
const Br = "_tick_1upar_3", Fr = "_active_1upar_18", jr = "_inactive_1upar_23", Kt = {
  tick: Br,
  active: Fr,
  inactive: jr
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
      className: [Kt.tick, Kt[e], t ?? ""].filter(Boolean).join(" "),
      "aria-label": r,
      role: "img",
      children: "✓"
    }
  );
}
const Ur = "_row_1lfos_3", Hr = "_text_1lfos_10", Vr = "_title_1lfos_18", zr = "_muted_1lfos_26", qr = "_description_1lfos_30", Fe = {
  row: Ur,
  text: Hr,
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
  return /* @__PURE__ */ C("div", { className: [Fe.row, r ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s(Wr, { state: n }),
    /* @__PURE__ */ C("div", { className: Fe.text, children: [
      /* @__PURE__ */ s(
        "span",
        {
          className: [Fe.title, a ? Fe.muted : ""].filter(Boolean).join(" "),
          children: e
        }
      ),
      t && /* @__PURE__ */ s("span", { className: Fe.description, children: t })
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
  hasDivider: f = !0,
  badge: c,
  className: d
}) {
  const m = !!r && !o, h = /* @__PURE__ */ C(st, { children: [
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
  return /* @__PURE__ */ C("div", { className: [J.outer, d ?? ""].filter(Boolean).join(" "), children: [
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
    f && /* @__PURE__ */ s("div", { className: J.divider, "aria-hidden": "true" })
  ] });
}
const oa = "_row_1omvu_6", ia = "_labels_1omvu_20", sa = "_title_1omvu_29", la = "_subtitle_1omvu_37", ca = "_chevron_1omvu_45", je = {
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
const da = "_field_1x66c_10", fa = "_label_1x66c_17", ma = "_track_1x66c_25", ha = "_segment_1x66c_36", va = "_selected_1x66c_59", Re = {
  field: da,
  label: fa,
  track: ma,
  segment: ha,
  selected: va
};
function pa({
  options: e,
  value: t,
  onChange: n,
  label: r,
  context: a = "light",
  className: o,
  "aria-label": l = "Select period"
}) {
  const i = hn(), f = (d, m) => {
    let h = null;
    d.key === "ArrowRight" || d.key === "ArrowDown" ? h = (m + 1) % e.length : (d.key === "ArrowLeft" || d.key === "ArrowUp") && (h = (m - 1 + e.length) % e.length), h !== null && (d.preventDefault(), n(e[h].value));
  }, c = /* @__PURE__ */ s(
    "div",
    {
      className: [Re.track, Re[a], r ? "" : o ?? ""].filter(Boolean).join(" "),
      role: "tablist",
      "aria-label": r ? void 0 : l,
      "aria-labelledby": r ? i : void 0,
      children: e.map((d, m) => {
        const h = d.value === t;
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": h,
            tabIndex: h ? 0 : -1,
            className: [Re.segment, h ? Re.selected : ""].join(" "),
            onClick: () => n(d.value),
            onKeyDown: (_) => f(_, m),
            "data-testid": `segment-${d.value}`,
            children: d.label
          },
          d.value
        );
      })
    }
  );
  return r ? /* @__PURE__ */ C("div", { className: [Re.field, o ?? ""].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("span", { id: i, className: Re.label, children: r }),
    c
  ] }) : c;
}
const ga = "_root_18luu_1", _a = "_noLabel_18luu_11", wa = "_label_18luu_16", ba = "_track_18luu_26", ya = "_pill_18luu_39", Ca = "_offActive_18luu_67", Ea = "_onActive_18luu_68", fe = {
  root: ga,
  noLabel: _a,
  label: wa,
  track: ba,
  pill: ya,
  offActive: Ca,
  onActive: Ea
};
function Zl({
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
  }, f = [fe.root, n ? "" : fe.noLabel, o ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ C(
    "div",
    {
      className: f,
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
const Sa = "_row_1b642_3", Na = "_label_1b642_10", Ra = "_amount_1b642_17", Ta = "_positive_1b642_27", Da = "_negative_1b642_30", xa = "_title_1b642_33", Aa = "_subtitle_1b642_43", Pa = "_strong_1b642_53", Oa = "_divider_1b642_69", he = {
  row: Sa,
  label: Na,
  amount: Ra,
  positive: Ta,
  negative: Da,
  title: xa,
  subtitle: Aa,
  strong: Pa,
  divider: Oa
};
function Ql({
  label: e,
  amount: t,
  variant: n,
  strong: r = !1,
  showPositive: a = !0,
  className: o,
  currency: l = "GBP",
  locale: i = "en-GB"
}) {
  const c = !(n === "title" || n === "subtitle") && t !== void 0, d = c && t > 0 && a, m = c && t < 0;
  let h = "";
  if (c) {
    const _ = new Intl.NumberFormat(i, {
      style: "currency",
      currency: l,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(t));
    h = m ? `−${_}` : _;
  }
  return /* @__PURE__ */ C(
    "div",
    {
      className: [
        he.row,
        n ? he[n] : "",
        d ? he.positive : "",
        m ? he.negative : "",
        r ? he.strong : "",
        o ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("span", { className: he.label, children: e }),
        c ? /* @__PURE__ */ s("span", { className: he.amount, children: h }) : null
      ]
    }
  );
}
function Jl({ className: e }) {
  return /* @__PURE__ */ s("div", { className: [he.divider, e ?? ""].filter(Boolean).join(" ") });
}
const ka = "_field_ho7jj_3", $a = "_label_ho7jj_20", Ma = "_fieldStandard_ho7jj_3", La = "_inputBox_ho7jj_42", Ia = "_state_focused_ho7jj_54", Ba = "_state_filled_ho7jj_60", Fa = "_input_ho7jj_42", ja = "_fieldLarge_ho7jj_4", Wa = "_largeAmountRow_ho7jj_95", Ua = "_largePrefix_ho7jj_103", Ha = "_largeInput_ho7jj_115", Va = "_state_empty_ho7jj_136", za = "_underline_ho7jj_141", qa = "_underlineFocused_ho7jj_149", Ya = "_disabled_ho7jj_155", Ga = "_error_ho7jj_162", U = {
  field: ka,
  label: $a,
  fieldStandard: Ma,
  inputBox: La,
  state_focused: Ia,
  state_filled: Ba,
  input: Fa,
  fieldLarge: ja,
  largeAmountRow: Wa,
  largePrefix: Ua,
  largeInput: Ha,
  state_empty: Va,
  underline: za,
  underlineFocused: qa,
  disabled: Ya,
  error: Ga
};
function ec({
  label: e,
  value: t,
  onChange: n,
  variant: r = "standard",
  prefix: a = "£",
  error: o,
  className: l,
  placeholder: i,
  disabled: f,
  inputMode: c,
  ...d
}) {
  const [m, h] = ke(!1), _ = hn(), S = t !== "" && t !== void 0, v = m ? "focused" : S ? "filled" : "empty";
  return r === "largeAmount" ? /* @__PURE__ */ C(
    "div",
    {
      className: [
        U.field,
        U.fieldLarge,
        U[`state_${v}`],
        f ? U.disabled : "",
        l ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("label", { htmlFor: _, className: U.label, children: e }),
        /* @__PURE__ */ C("div", { className: U.largeAmountRow, children: [
          a && /* @__PURE__ */ s("span", { className: U.largePrefix, "aria-hidden": "true", children: a }),
          /* @__PURE__ */ s(
            "input",
            {
              id: _,
              type: "text",
              inputMode: c ?? "decimal",
              value: t,
              placeholder: S ? void 0 : "0",
              onChange: (p) => n(p.target.value),
              onFocus: () => h(!0),
              onBlur: () => h(!1),
              disabled: f,
              "aria-invalid": !!o,
              "aria-describedby": o ? `${_}-error` : void 0,
              className: U.largeInput,
              ...d
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
        o && /* @__PURE__ */ s("span", { id: `${_}-error`, className: U.error, role: "alert", children: o })
      ]
    }
  ) : /* @__PURE__ */ C(
    "div",
    {
      className: [
        U.field,
        U.fieldStandard,
        U[`state_${v}`],
        f ? U.disabled : "",
        l ?? ""
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s("label", { htmlFor: _, className: U.label, children: e }),
        /* @__PURE__ */ s("div", { className: U.inputBox, children: /* @__PURE__ */ s(
          "input",
          {
            id: _,
            type: "text",
            inputMode: c ?? "decimal",
            value: t,
            placeholder: i ?? "e.g. 16",
            onChange: (p) => n(p.target.value),
            onFocus: () => h(!0),
            onBlur: () => h(!1),
            disabled: f,
            "aria-invalid": !!o,
            "aria-describedby": o ? `${_}-error` : void 0,
            className: U.input,
            ...d
          }
        ) }),
        o && /* @__PURE__ */ s("span", { id: `${_}-error`, className: U.error, role: "alert", children: o })
      ]
    }
  );
}
const Ka = "_field_180mg_3", Xa = "_label_180mg_11", Za = "_trigger_180mg_19", Qa = "_triggerOpen_180mg_42", Ja = "_chevron_180mg_52", eo = "_chevronOpen_180mg_58", to = "_dropdown_180mg_64", no = "_dropdownUpward_180mg_76", ro = "_option_180mg_80", ao = "_optionSelected_180mg_101", ae = {
  field: Ka,
  label: Xa,
  trigger: Za,
  triggerOpen: Qa,
  chevron: Ja,
  chevronOpen: eo,
  dropdown: to,
  dropdownUpward: no,
  option: ro,
  optionSelected: ao
};
function tc({ label: e, options: t, value: n, onChange: r, className: a, disabled: o, "data-testid": l }) {
  const [i, f] = ke(!1), [c, d] = ke(null), m = lt(null), h = lt(null), _ = t.find((p) => p.value === n), S = () => {
    if (!m.current) return;
    const p = m.current.getBoundingClientRect(), g = window.innerHeight, E = Math.min(g * 0.6, 320), N = g - p.bottom - 12, w = p.top - 12, P = N < E && w > N;
    d({ top: P ? p.top - 8 : p.bottom + 8, left: p.left, width: p.width, upward: P });
  };
  vn(() => {
    i && S();
  }, [i]), Pe(() => {
    if (!i) return;
    const p = () => S(), g = () => S();
    return window.addEventListener("scroll", p, { passive: !0, capture: !0 }), window.addEventListener("resize", g), () => {
      window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", g);
    };
  }, [i]), Pe(() => {
    if (!i) return;
    const p = (g) => {
      var N, w;
      const E = g.target;
      !((N = m.current) != null && N.contains(E)) && !((w = h.current) != null && w.contains(E)) && f(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [i]), Pe(() => {
    if (!i) return;
    const p = (g) => {
      var E;
      g.key === "Escape" && (f(!1), (E = m.current) == null || E.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [i]);
  const v = i && c && pn(
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
        children: t.map((p) => /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [ae.option, n === p.value ? ae.optionSelected : ""].join(" "),
            onClick: () => {
              var g;
              r(p.value), f(!1), (g = m.current) == null || g.focus();
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
        ref: m,
        type: "button",
        className: [ae.trigger, i ? ae.triggerOpen : ""].join(" "),
        onClick: () => !o && f(!i),
        disabled: o,
        "data-testid": l,
        "aria-haspopup": "listbox",
        "aria-expanded": i,
        children: [
          /* @__PURE__ */ s("span", { children: (_ == null ? void 0 : _.label) ?? "Select…" }),
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
const oo = "_nav_1u5d6_3", io = "_item_1u5d6_12", so = "_active_1u5d6_33", lo = "_icon_1u5d6_37", co = "_label_1u5d6_46", We = {
  nav: oo,
  item: io,
  active: so,
  icon: lo,
  label: co
};
function nc({ items: e, activeId: t, onChange: n, className: r }) {
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
const uo = "_card_1kp17_11", fo = "_eyebrow_1kp17_25", mo = "_amount_1kp17_38", ho = "_amountEdit_1kp17_50", vo = "_amountPrefix_1kp17_57", po = "_amountInput_1kp17_58", go = "_badge_1kp17_81", _o = "_toggle_1kp17_100", me = {
  card: uo,
  eyebrow: fo,
  amount: mo,
  amountEdit: ho,
  amountPrefix: vo,
  amountInput: po,
  badge: go,
  toggle: _o
}, wo = [
  { value: "yearly", label: "Yearly" },
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" }
];
function rc({
  salaryFormatted: e,
  period: t,
  onPeriodChange: n,
  additionalIncomeSummary: r,
  className: a,
  editable: o = !1,
  value: l = "",
  onValueChange: i
}) {
  const f = !!r;
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
        f && /* @__PURE__ */ s("div", { className: me.badge, "aria-label": "Additional income", children: r }),
        /* @__PURE__ */ s(
          pa,
          {
            options: wo,
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
const bo = "_card_1nfj9_7", yo = "_empty_1nfj9_14", Co = "_hasItems_1nfj9_22", Eo = "_header_1nfj9_34", So = "_eyebrow_1nfj9_43", No = "_divider_1nfj9_56", Ro = "_rows_1nfj9_64", _e = {
  card: bo,
  empty: yo,
  hasItems: Co,
  header: Eo,
  eyebrow: So,
  divider: No,
  rows: Ro
};
function ac({
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
        _e.card,
        a ? _e.hasItems : _e.empty,
        r ?? ""
      ].filter(Boolean).join(" "),
      children: a ? /* @__PURE__ */ C(st, { children: [
        /* @__PURE__ */ C("div", { className: _e.header, children: [
          /* @__PURE__ */ s("span", { className: _e.eyebrow, children: "ADDITIONAL INCOME" }),
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
        /* @__PURE__ */ s("div", { className: _e.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: _e.rows, children: e.map((o, l) => /* @__PURE__ */ s(
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
function gn(...e) {
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
  return u.useCallback(gn(...e), e);
}
function To(e, t) {
  const n = u.createContext(t), r = (o) => {
    const { children: l, ...i } = o, f = u.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ s(n.Provider, { value: f, children: l });
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
function Do(e, t = []) {
  let n = [];
  function r(o, l) {
    const i = u.createContext(l), f = n.length;
    n = [...n, l];
    const c = (m) => {
      var g;
      const { scope: h, children: _, ...S } = m, v = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[f]) || i, p = u.useMemo(() => S, Object.values(S));
      return /* @__PURE__ */ s(v.Provider, { value: p, children: _ });
    };
    c.displayName = o + "Provider";
    function d(m, h) {
      var v;
      const _ = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[f]) || i, S = u.useContext(_);
      if (S) return S;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${o}\``);
    }
    return [c, d];
  }
  const a = () => {
    const o = n.map((l) => u.createContext(l));
    return function(i) {
      const f = (i == null ? void 0 : i[e]) || o;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: f } }),
        [i, f]
      );
    };
  };
  return a.scopeName = e, [r, xo(a, ...t)];
}
function xo(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(o) {
      const l = r.reduce((i, { useScope: f, scopeName: c }) => {
        const m = f(o)[`__scope${c}`];
        return { ...i, ...m };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var ze = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, Ao = u[" useId ".trim().toString()] || (() => {
}), Po = 0;
function _t(e) {
  const [t, n] = u.useState(Ao());
  return ze(() => {
    n((r) => r ?? String(Po++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Oo = u[" useInsertionEffect ".trim().toString()] || ze;
function ko({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [a, o, l] = $o({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, f = i ? e : a;
  {
    const d = u.useRef(e !== void 0);
    u.useEffect(() => {
      const m = d.current;
      m !== i && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = i;
    }, [i, r]);
  }
  const c = u.useCallback(
    (d) => {
      var m;
      if (i) {
        const h = Mo(d) ? d(e) : d;
        h !== e && ((m = l.current) == null || m.call(l, h));
      } else
        o(d);
    },
    [i, e, o, l]
  );
  return [f, c];
}
function $o({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), a = u.useRef(n), o = u.useRef(t);
  return Oo(() => {
    o.current = t;
  }, [t]), u.useEffect(() => {
    var l;
    a.current !== n && ((l = o.current) == null || l.call(o, n), a.current = n);
  }, [n, a]), [n, r, o];
}
function Mo(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  const t = /* @__PURE__ */ Lo(e), n = u.forwardRef((r, a) => {
    const { children: o, ...l } = r, i = u.Children.toArray(o), f = i.find(Bo);
    if (f) {
      const c = f.props.children, d = i.map((m) => m === f ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : m);
      return /* @__PURE__ */ s(t, { ...l, ref: a, children: u.isValidElement(c) ? u.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ s(t, { ...l, ref: a, children: o });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Lo(e) {
  const t = u.forwardRef((n, r) => {
    const { children: a, ...o } = n;
    if (u.isValidElement(a)) {
      const l = jo(a), i = Fo(o, a.props);
      return a.type !== u.Fragment && (i.ref = r ? gn(r, l) : l), u.cloneElement(a, i);
    }
    return u.Children.count(a) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Io = Symbol("radix.slottable");
function Bo(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Io;
}
function Fo(e, t) {
  const n = { ...t };
  for (const r in t) {
    const a = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? a && o ? n[r] = (...i) => {
      const f = o(...i);
      return a(...i), f;
    } : a && (n[r] = a) : r === "style" ? n[r] = { ...a, ...o } : r === "className" && (n[r] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function jo(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Wo = [
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
], le = Wo.reduce((e, t) => {
  const n = /* @__PURE__ */ _n(`Primitive.${t}`), r = u.forwardRef((a, o) => {
    const { asChild: l, ...i } = a, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ s(f, { ...i, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Uo(e, t) {
  e && Er.flushSync(() => e.dispatchEvent(t));
}
function qe(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Ho(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e);
  u.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Vo = "DismissableLayer", Pt = "dismissableLayer.update", zo = "dismissableLayer.pointerDownOutside", qo = "dismissableLayer.focusOutside", Zt, wn = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), bn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: a,
      onFocusOutside: o,
      onInteractOutside: l,
      onDismiss: i,
      ...f
    } = e, c = u.useContext(wn), [d, m] = u.useState(null), h = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, _] = u.useState({}), S = Ce(t, (b) => m(b)), v = Array.from(c.layers), [p] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), g = v.indexOf(p), E = d ? v.indexOf(d) : -1, N = c.layersWithOutsidePointerEventsDisabled.size > 0, w = E >= g, P = Ko((b) => {
      const A = b.target, x = [...c.branches].some((I) => I.contains(A));
      !w || x || (a == null || a(b), l == null || l(b), b.defaultPrevented || i == null || i());
    }, h), W = Xo((b) => {
      const A = b.target;
      [...c.branches].some((I) => I.contains(A)) || (o == null || o(b), l == null || l(b), b.defaultPrevented || i == null || i());
    }, h);
    return Ho((b) => {
      E === c.layers.size - 1 && (r == null || r(b), !b.defaultPrevented && i && (b.preventDefault(), i()));
    }, h), u.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Zt = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Qt(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Zt);
        };
    }, [d, h, n, c]), u.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Qt());
    }, [d, c]), u.useEffect(() => {
      const b = () => _({});
      return document.addEventListener(Pt, b), () => document.removeEventListener(Pt, b);
    }, []), /* @__PURE__ */ s(
      le.div,
      {
        ...f,
        ref: S,
        style: {
          pointerEvents: N ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: pe(e.onFocusCapture, W.onFocusCapture),
        onBlurCapture: pe(e.onBlurCapture, W.onBlurCapture),
        onPointerDownCapture: pe(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
bn.displayName = Vo;
var Yo = "DismissableLayerBranch", Go = u.forwardRef((e, t) => {
  const n = u.useContext(wn), r = u.useRef(null), a = Ce(t, r);
  return u.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ s(le.div, { ...e, ref: a });
});
Go.displayName = Yo;
function Ko(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = u.useRef(!1), a = u.useRef(() => {
  });
  return u.useEffect(() => {
    const o = (i) => {
      if (i.target && !r.current) {
        let f = function() {
          yn(
            zo,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = f, t.addEventListener("click", a.current, { once: !0 })) : f();
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
function Xo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const a = (o) => {
      o.target && !r.current && yn(qo, n, { originalEvent: o }, {
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
  t && a.addEventListener(e, t, { once: !0 }), r ? Uo(a, o) : a.dispatchEvent(o);
}
var wt = "focusScope.autoFocusOnMount", bt = "focusScope.autoFocusOnUnmount", Jt = { bubbles: !1, cancelable: !0 }, Zo = "FocusScope", Cn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o,
    ...l
  } = e, [i, f] = u.useState(null), c = qe(a), d = qe(o), m = u.useRef(null), h = Ce(t, (v) => f(v)), _ = u.useRef({
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
        if (_.paused || !i) return;
        const w = N.target;
        i.contains(w) ? m.current = w : ve(m.current, { select: !0 });
      }, p = function(N) {
        if (_.paused || !i) return;
        const w = N.relatedTarget;
        w !== null && (i.contains(w) || ve(m.current, { select: !0 }));
      }, g = function(N) {
        if (document.activeElement === document.body)
          for (const P of N)
            P.removedNodes.length > 0 && ve(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", p);
      const E = new MutationObserver(g);
      return i && E.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", p), E.disconnect();
      };
    }
  }, [r, i, _.paused]), u.useEffect(() => {
    if (i) {
      tn.add(_);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const g = new CustomEvent(wt, Jt);
        i.addEventListener(wt, c), i.dispatchEvent(g), g.defaultPrevented || (Qo(ri(En(i)), { select: !0 }), document.activeElement === v && ve(i));
      }
      return () => {
        i.removeEventListener(wt, c), setTimeout(() => {
          const g = new CustomEvent(bt, Jt);
          i.addEventListener(bt, d), i.dispatchEvent(g), g.defaultPrevented || ve(v ?? document.body, { select: !0 }), i.removeEventListener(bt, d), tn.remove(_);
        }, 0);
      };
    }
  }, [i, c, d, _]);
  const S = u.useCallback(
    (v) => {
      if (!n && !r || _.paused) return;
      const p = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, g = document.activeElement;
      if (p && g) {
        const E = v.currentTarget, [N, w] = Jo(E);
        N && w ? !v.shiftKey && g === w ? (v.preventDefault(), n && ve(N, { select: !0 })) : v.shiftKey && g === N && (v.preventDefault(), n && ve(w, { select: !0 })) : g === E && v.preventDefault();
      }
    },
    [n, r, _.paused]
  );
  return /* @__PURE__ */ s(le.div, { tabIndex: -1, ...l, ref: h, onKeyDown: S });
});
Cn.displayName = Zo;
function Qo(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ve(r, { select: t }), document.activeElement !== n) return;
}
function Jo(e) {
  const t = En(e), n = en(t, e), r = en(t.reverse(), e);
  return [n, r];
}
function En(e) {
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
    if (!ei(n, { upTo: t })) return n;
}
function ei(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ti(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ti(e) && t && e.select();
  }
}
var tn = ni();
function ni() {
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
function ri(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ai = "Portal", Sn = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [a, o] = u.useState(!1);
  ze(() => o(!0), []);
  const l = n || a && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return l ? Sr.createPortal(/* @__PURE__ */ s(le.div, { ...r, ref: t }), l) : null;
});
Sn.displayName = ai;
function oi(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var ut = (e) => {
  const { present: t, children: n } = e, r = ii(t), a = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), o = Ce(r.ref, si(a));
  return typeof n == "function" || r.isPresent ? u.cloneElement(a, { ref: o }) : null;
};
ut.displayName = "Presence";
function ii(e) {
  const [t, n] = u.useState(), r = u.useRef(null), a = u.useRef(e), o = u.useRef("none"), l = e ? "mounted" : "unmounted", [i, f] = oi(l, {
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
  }, [i]), ze(() => {
    const c = r.current, d = a.current;
    if (d !== e) {
      const h = o.current, _ = Ze(c);
      e ? f("MOUNT") : _ === "none" || (c == null ? void 0 : c.display) === "none" ? f("UNMOUNT") : f(d && h !== _ ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, f]), ze(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, m = (_) => {
        const v = Ze(r.current).includes(CSS.escape(_.animationName));
        if (_.target === t && v && (f("ANIMATION_END"), !a.current)) {
          const p = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = p);
          });
        }
      }, h = (_) => {
        _.target === t && (o.current = Ze(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: u.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function Ze(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function si(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var yt = 0;
function li() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? rn()), document.body.insertAdjacentElement("beforeend", e[1] ?? rn()), yt++, () => {
      yt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), yt--;
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
function Nn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function ci(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, a = t.length, o; r < a; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var ot = "right-scroll-bar-position", it = "width-before-scroll-bar", ui = "with-scroll-bars-hidden", di = "--removed-body-scroll-bar-size";
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function fi(e, t) {
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
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var mi = typeof window < "u" ? u.useLayoutEffect : u.useEffect, an = /* @__PURE__ */ new WeakMap();
function hi(e, t) {
  var n = fi(null, function(r) {
    return e.forEach(function(a) {
      return Ct(a, r);
    });
  });
  return mi(function() {
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
function vi(e) {
  return e;
}
function pi(e, t) {
  t === void 0 && (t = vi);
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
      var f = function() {
        var d = l;
        l = [], d.forEach(o);
      }, c = function() {
        return Promise.resolve().then(f);
      };
      c(), n = {
        push: function(d) {
          l.push(d), c();
        },
        filter: function(d) {
          return l = l.filter(d), n;
        }
      };
    }
  };
  return a;
}
function gi(e) {
  e === void 0 && (e = {});
  var t = pi(null);
  return t.options = oe({ async: !0, ssr: !1 }, e), t;
}
var Rn = function(e) {
  var t = e.sideCar, n = Nn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, oe({}, n));
};
Rn.isSideCarExport = !0;
function _i(e, t) {
  return e.useMedium(t), Rn;
}
var Tn = gi(), Et = function() {
}, dt = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Et,
    onWheelCapture: Et,
    onTouchMoveCapture: Et
  }), a = r[0], o = r[1], l = e.forwardProps, i = e.children, f = e.className, c = e.removeScrollBar, d = e.enabled, m = e.shards, h = e.sideCar, _ = e.noRelative, S = e.noIsolation, v = e.inert, p = e.allowPinchZoom, g = e.as, E = g === void 0 ? "div" : g, N = e.gapMode, w = Nn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = h, W = hi([n, t]), b = oe(oe({}, w), a);
  return u.createElement(
    u.Fragment,
    null,
    d && u.createElement(P, { sideCar: Tn, removeScrollBar: c, shards: m, noRelative: _, noIsolation: S, inert: v, setCallbacks: o, allowPinchZoom: !!p, lockRef: n, gapMode: N }),
    l ? u.cloneElement(u.Children.only(i), oe(oe({}, b), { ref: W })) : u.createElement(E, oe({}, b, { className: f, ref: W }), i)
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
var wi = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function bi() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = wi();
  return t && e.setAttribute("nonce", t), e;
}
function yi(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ci(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ei = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = bi()) && (yi(t, n), Ci(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Si = function() {
  var e = Ei();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Dn = function() {
  var e = Si(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, Ni = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, St = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ri = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [St(n), St(r), St(a)];
}, Ti = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ni;
  var t = Ri(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Di = Dn(), Oe = "data-scroll-locked", xi = function(e, t, n, r) {
  var a = e.left, o = e.top, l = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ui, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Oe, `] {
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
  
  body[`).concat(Oe, `] {
    `).concat(di, ": ").concat(i, `px;
  }
`);
}, on = function() {
  var e = parseInt(document.body.getAttribute(Oe) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ai = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Oe, (on() + 1).toString()), function() {
      var e = on() - 1;
      e <= 0 ? document.body.removeAttribute(Oe) : document.body.setAttribute(Oe, e.toString());
    };
  }, []);
}, Pi = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r;
  Ai();
  var o = u.useMemo(function() {
    return Ti(a);
  }, [a]);
  return u.createElement(Di, { styles: xi(o, !t, a, n ? "" : "!important") });
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
var Te = Ot ? { passive: !1 } : !1, Oi = function(e) {
  return e.tagName === "TEXTAREA";
}, xn = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Oi(e) && n[t] === "visible")
  );
}, ki = function(e) {
  return xn(e, "overflowY");
}, $i = function(e) {
  return xn(e, "overflowX");
}, sn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var a = An(e, r);
    if (a) {
      var o = Pn(e, r), l = o[1], i = o[2];
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
}, Li = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, An = function(e, t) {
  return e === "v" ? ki(t) : $i(t);
}, Pn = function(e, t) {
  return e === "v" ? Mi(t) : Li(t);
}, Ii = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Bi = function(e, t, n, r, a) {
  var o = Ii(e, window.getComputedStyle(t).direction), l = o * r, i = n.target, f = t.contains(i), c = !1, d = l > 0, m = 0, h = 0;
  do {
    if (!i)
      break;
    var _ = Pn(e, i), S = _[0], v = _[1], p = _[2], g = v - p - o * S;
    (S || g) && An(e, i) && (m += g, h += S);
    var E = i.parentNode;
    i = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
  } while (
    // portaled content
    !f && i !== document.body || // self content
    f && (t.contains(i) || t === i)
  );
  return (d && Math.abs(m) < 1 || !d && Math.abs(h) < 1) && (c = !0), c;
}, Je = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ln = function(e) {
  return [e.deltaX, e.deltaY];
}, cn = function(e) {
  return e && "current" in e ? e.current : e;
}, Fi = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ji = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Wi = 0, De = [];
function Ui(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), a = u.useState(Wi++)[0], o = u.useState(Dn)[0], l = u.useRef(e);
  u.useEffect(function() {
    l.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var v = ci([e.lockRef.current], (e.shards || []).map(cn), !0).filter(Boolean);
      return v.forEach(function(p) {
        return p.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), v.forEach(function(p) {
          return p.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(v, p) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !l.current.allowPinchZoom;
    var g = Je(v), E = n.current, N = "deltaX" in v ? v.deltaX : E[0] - g[0], w = "deltaY" in v ? v.deltaY : E[1] - g[1], P, W = v.target, b = Math.abs(N) > Math.abs(w) ? "h" : "v";
    if ("touches" in v && b === "h" && W.type === "range")
      return !1;
    var A = window.getSelection(), x = A && A.anchorNode, I = x ? x === W || x.contains(W) : !1;
    if (I)
      return !1;
    var B = sn(b, W);
    if (!B)
      return !0;
    if (B ? P = b : (P = b === "v" ? "h" : "v", B = sn(b, W)), !B)
      return !1;
    if (!r.current && "changedTouches" in v && (N || w) && (r.current = P), !P)
      return !0;
    var q = r.current || P;
    return Bi(q, p, v, q === "h" ? N : w);
  }, []), f = u.useCallback(function(v) {
    var p = v;
    if (!(!De.length || De[De.length - 1] !== o)) {
      var g = "deltaY" in p ? ln(p) : Je(p), E = t.current.filter(function(P) {
        return P.name === p.type && (P.target === p.target || p.target === P.shadowParent) && Fi(P.delta, g);
      })[0];
      if (E && E.should) {
        p.cancelable && p.preventDefault();
        return;
      }
      if (!E) {
        var N = (l.current.shards || []).map(cn).filter(Boolean).filter(function(P) {
          return P.contains(p.target);
        }), w = N.length > 0 ? i(p, N[0]) : !l.current.noIsolation;
        w && p.cancelable && p.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(v, p, g, E) {
    var N = { name: v, delta: p, target: g, should: E, shadowParent: Hi(g) };
    t.current.push(N), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== N;
      });
    }, 1);
  }, []), d = u.useCallback(function(v) {
    n.current = Je(v), r.current = void 0;
  }, []), m = u.useCallback(function(v) {
    c(v.type, ln(v), v.target, i(v, e.lockRef.current));
  }, []), h = u.useCallback(function(v) {
    c(v.type, Je(v), v.target, i(v, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return De.push(o), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", f, Te), document.addEventListener("touchmove", f, Te), document.addEventListener("touchstart", d, Te), function() {
      De = De.filter(function(v) {
        return v !== o;
      }), document.removeEventListener("wheel", f, Te), document.removeEventListener("touchmove", f, Te), document.removeEventListener("touchstart", d, Te);
    };
  }, []);
  var _ = e.removeScrollBar, S = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    S ? u.createElement(o, { styles: ji(a) }) : null,
    _ ? u.createElement(Pi, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Hi(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Vi = _i(Tn, Ui);
var On = u.forwardRef(function(e, t) {
  return u.createElement(dt, oe({}, e, { ref: t, sideCar: Vi }));
});
On.classNames = dt.classNames;
var zi = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, xe = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), tt = {}, Nt = 0, kn = function(e) {
  return e && (e.host || kn(e.parentNode));
}, qi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = kn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Yi = function(e, t, n, r) {
  var a = qi(t, Array.isArray(e) ? e : [e]);
  tt[n] || (tt[n] = /* @__PURE__ */ new WeakMap());
  var o = tt[n], l = [], i = /* @__PURE__ */ new Set(), f = new Set(a), c = function(m) {
    !m || i.has(m) || (i.add(m), c(m.parentNode));
  };
  a.forEach(c);
  var d = function(m) {
    !m || f.has(m) || Array.prototype.forEach.call(m.children, function(h) {
      if (i.has(h))
        d(h);
      else
        try {
          var _ = h.getAttribute(r), S = _ !== null && _ !== "false", v = (xe.get(h) || 0) + 1, p = (o.get(h) || 0) + 1;
          xe.set(h, v), o.set(h, p), l.push(h), v === 1 && S && et.set(h, !0), p === 1 && h.setAttribute(n, "true"), S || h.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", h, g);
        }
    });
  };
  return d(t), i.clear(), Nt++, function() {
    l.forEach(function(m) {
      var h = xe.get(m) - 1, _ = o.get(m) - 1;
      xe.set(m, h), o.set(m, _), h || (et.has(m) || m.removeAttribute(r), et.delete(m)), _ || m.removeAttribute(n);
    }), Nt--, Nt || (xe = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), tt = {});
  };
}, Gi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = zi(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))), Yi(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, ft = "Dialog", [$n] = Do(ft), [Ki, ne] = $n(ft), Mn = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: a,
    onOpenChange: o,
    modal: l = !0
  } = e, i = u.useRef(null), f = u.useRef(null), [c, d] = ko({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: ft
  });
  return /* @__PURE__ */ s(
    Ki,
    {
      scope: t,
      triggerRef: i,
      contentRef: f,
      contentId: _t(),
      titleId: _t(),
      descriptionId: _t(),
      open: c,
      onOpenChange: d,
      onOpenToggle: u.useCallback(() => d((m) => !m), [d]),
      modal: l,
      children: n
    }
  );
};
Mn.displayName = ft;
var Ln = "DialogTrigger", In = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(Ln, n), o = Ce(t, a.triggerRef);
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
In.displayName = Ln;
var Mt = "DialogPortal", [Xi, Bn] = $n(Mt, {
  forceMount: void 0
}), Fn = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: a } = e, o = ne(Mt, t);
  return /* @__PURE__ */ s(Xi, { scope: t, forceMount: n, children: u.Children.map(r, (l) => /* @__PURE__ */ s(ut, { present: n || o.open, children: /* @__PURE__ */ s(Sn, { asChild: !0, container: a, children: l }) })) });
};
Fn.displayName = Mt;
var ct = "DialogOverlay", jn = u.forwardRef(
  (e, t) => {
    const n = Bn(ct, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = ne(ct, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ s(ut, { present: r || o.open, children: /* @__PURE__ */ s(Qi, { ...a, ref: t }) }) : null;
  }
);
jn.displayName = ct;
var Zi = /* @__PURE__ */ _n("DialogOverlay.RemoveScroll"), Qi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(ct, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ s(On, { as: Zi, allowPinchZoom: !0, shards: [a.contentRef], children: /* @__PURE__ */ s(
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
), ye = "DialogContent", Wn = u.forwardRef(
  (e, t) => {
    const n = Bn(ye, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, o = ne(ye, e.__scopeDialog);
    return /* @__PURE__ */ s(ut, { present: r || o.open, children: o.modal ? /* @__PURE__ */ s(Ji, { ...a, ref: t }) : /* @__PURE__ */ s(es, { ...a, ref: t }) });
  }
);
Wn.displayName = ye;
var Ji = u.forwardRef(
  (e, t) => {
    const n = ne(ye, e.__scopeDialog), r = u.useRef(null), a = Ce(t, n.contentRef, r);
    return u.useEffect(() => {
      const o = r.current;
      if (o) return Gi(o);
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
), es = u.forwardRef(
  (e, t) => {
    const n = ne(ye, e.__scopeDialog), r = u.useRef(!1), a = u.useRef(!1);
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
          var f, c;
          (f = e.onInteractOutside) == null || f.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
          const l = o.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(l)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault();
        }
      }
    );
  }
), Un = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: o, ...l } = e, i = ne(ye, n), f = u.useRef(null), c = Ce(t, f);
    return li(), /* @__PURE__ */ C(st, { children: [
      /* @__PURE__ */ s(
        Cn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: a,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ s(
            bn,
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
        /* @__PURE__ */ s(ts, { titleId: i.titleId }),
        /* @__PURE__ */ s(rs, { contentRef: f, descriptionId: i.descriptionId })
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
var Vn = "DialogDescription", zn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(Vn, n);
    return /* @__PURE__ */ s(le.p, { id: a.descriptionId, ...r, ref: t });
  }
);
zn.displayName = Vn;
var qn = "DialogClose", Yn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, a = ne(qn, n);
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
Yn.displayName = qn;
function It(e) {
  return e ? "open" : "closed";
}
var Gn = "DialogTitleWarning", [oc, Kn] = To(Gn, {
  contentName: ye,
  titleName: Lt,
  docsSlug: "dialog"
}), ts = ({ titleId: e }) => {
  const t = Kn(Gn), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, ns = "DialogDescriptionWarning", rs = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Kn(ns).contentName}}.`;
  return u.useEffect(() => {
    var o;
    const a = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && a && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, as = Mn, os = In, is = Fn, ss = jn, ls = Wn, cs = Hn, us = zn, ds = Yn;
function fs(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Xn = y.createContext({
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
}), Ye = () => {
  const e = y.useContext(Xn);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
fs(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function ms() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function hs() {
  return Bt(/^Mac/);
}
function vs() {
  return Bt(/^iPhone/);
}
function un() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function ps() {
  return Bt(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  hs() && navigator.maxTouchPoints > 1;
}
function Zn() {
  return vs() || ps();
}
function Bt(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const gs = 24, _s = typeof window < "u" ? vn : Pe;
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
const ws = /* @__PURE__ */ new Set([
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
function bs(e = {}) {
  let { isDisabled: t } = e;
  _s(() => {
    if (!t)
      return nt++, nt === 1 && Zn() && (Tt = ys()), () => {
        nt--, nt === 0 && (Tt == null || Tt());
      };
  }, [
    t
  ]);
}
function ys() {
  let e, t = 0, n = (m) => {
    e = Qn(m.target), !(e === document.documentElement && e === document.body) && (t = m.changedTouches[0].pageY);
  }, r = (m) => {
    if (!e || e === document.documentElement || e === document.body) {
      m.preventDefault();
      return;
    }
    let h = m.changedTouches[0].pageY, _ = e.scrollTop, S = e.scrollHeight - e.clientHeight;
    S !== 0 && ((_ <= 0 && h > t || _ >= S && h < t) && m.preventDefault(), t = h);
  }, a = (m) => {
    let h = m.target;
    kt(h) && h !== document.activeElement && (m.preventDefault(), h.style.transform = "translateY(-2000px)", h.focus(), requestAnimationFrame(() => {
      h.style.transform = "";
    }));
  }, o = (m) => {
    let h = m.target;
    kt(h) && (h.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      h.style.transform = "", Rt && (Rt.height < window.innerHeight ? requestAnimationFrame(() => {
        mn(h);
      }) : Rt.addEventListener("resize", () => mn(h), {
        once: !0
      }));
    }));
  }, l = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, f = window.pageYOffset, c = dn(Cs(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = dn(Ue(document, "touchstart", n, {
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
    c(), d(), window.scrollTo(i, f);
  };
}
function Cs(e, t, n) {
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
      let r = n.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = e.getBoundingClientRect().bottom;
      const l = n.getBoundingClientRect().bottom + gs;
      o > l && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function kt(e) {
  return e instanceof HTMLInputElement && !ws.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Es(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ss(...e) {
  return (t) => e.forEach((n) => Es(n, t));
}
function Jn(...e) {
  return u.useCallback(Ss(...e), e);
}
const er = /* @__PURE__ */ new WeakMap();
function H(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([a, o]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, o);
      return;
    }
    r[a] = e.style[a], e.style[a] = o;
  }), !n && er.set(e, r);
}
function Ns(e, t) {
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
function rt(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let a = r.match(/^matrix3d\((.+)\)$/);
  return a ? parseFloat(a[1].split(", ")[j(t) ? 13 : 12]) : (a = r.match(/^matrix\((.+)\)$/), a ? parseFloat(a[1].split(", ")[j(t) ? 5 : 4]) : null);
}
function Rs(e) {
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
function Ts(...e) {
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
}, tr = 0.4, Ds = 0.25, xs = 100, nr = 8, we = 16, $t = 26, xt = "vaul-dragging";
function rr(e) {
  const t = y.useRef(e);
  return y.useEffect(() => {
    t.current = e;
  }), y.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function As({ defaultProp: e, onChange: t }) {
  const n = y.useState(e), [r] = n, a = y.useRef(r), o = rr(t);
  return y.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [
    r,
    a,
    o
  ]), n;
}
function ar({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = As({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, l = o ? e : r, i = rr(n), f = y.useCallback((c) => {
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
    f
  ];
}
function Ps({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: a, fadeFromIndex: o, onSnapPointChange: l, direction: i = "bottom", container: f, snapToSequentialPoint: c }) {
  const [d, m] = ar({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [h, _] = y.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  y.useEffect(() => {
    function b() {
      _({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, []);
  const S = y.useMemo(() => d === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    d
  ]), v = y.useMemo(() => {
    var b;
    return (b = n == null ? void 0 : n.findIndex((A) => A === d)) != null ? b : null;
  }, [
    n,
    d
  ]), p = n && n.length > 0 && (o || o === 0) && !Number.isNaN(o) && n[o] === d || !n, g = y.useMemo(() => {
    const b = f ? {
      width: f.getBoundingClientRect().width,
      height: f.getBoundingClientRect().height
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
      if (I && (B = parseInt(x, 10)), j(i)) {
        const T = I ? B : h ? x * b.height : 0;
        return h ? i === "bottom" ? b.height - T : -b.height + T : T;
      }
      const q = I ? B : h ? x * b.width : 0;
      return h ? i === "right" ? b.width - q : -b.width + q : q;
    })) != null ? A : [];
  }, [
    n,
    h,
    f
  ]), E = y.useMemo(() => v !== null ? g == null ? void 0 : g[v] : null, [
    g,
    v
  ]), N = y.useCallback((b) => {
    var A;
    const x = (A = g == null ? void 0 : g.findIndex((I) => I === b)) != null ? A : null;
    l(x), H(r.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: j(i) ? `translate3d(0, ${b}px, 0)` : `translate3d(${b}px, 0, 0)`
    }), g && x !== g.length - 1 && o !== void 0 && x !== o && x < o ? H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "0"
    }) : H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), m(n == null ? void 0 : n[Math.max(x, 0)]);
  }, [
    r.current,
    n,
    g,
    o,
    a,
    m
  ]);
  y.useEffect(() => {
    if (d || e) {
      var b;
      const A = (b = n == null ? void 0 : n.findIndex((x) => x === e || x === d)) != null ? b : -1;
      g && A !== -1 && typeof g[A] == "number" && N(g[A]);
    }
  }, [
    d,
    e,
    n,
    g,
    N
  ]);
  function w({ draggedDistance: b, closeDrawer: A, velocity: x, dismissible: I }) {
    if (o === void 0) return;
    const B = i === "bottom" || i === "right" ? (E ?? 0) - b : (E ?? 0) + b, q = v === o - 1, T = v === 0, X = b > 0;
    if (q && H(a.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), !c && x > 2 && !X) {
      I ? A() : N(g[0]);
      return;
    }
    if (!c && x > 2 && X && g && n) {
      N(g[n.length - 1]);
      return;
    }
    const Y = g == null ? void 0 : g.reduce((z, ie) => typeof z != "number" || typeof ie != "number" ? z : Math.abs(ie - B) < Math.abs(z - B) ? ie : z), Z = j(i) ? window.innerHeight : window.innerWidth;
    if (x > tr && Math.abs(b) < Z * 0.4) {
      const z = X ? 1 : -1;
      if (z > 0 && S && n) {
        N(g[n.length - 1]);
        return;
      }
      if (T && z < 0 && I && A(), v === null) return;
      N(g[v + z]);
      return;
    }
    N(Y);
  }
  function P({ draggedDistance: b }) {
    if (E === null) return;
    const A = i === "bottom" || i === "right" ? E - b : E + b;
    (i === "bottom" || i === "right") && A < g[g.length - 1] || (i === "top" || i === "left") && A > g[g.length - 1] || H(r.current, {
      transform: j(i) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
    });
  }
  function W(b, A) {
    if (!n || typeof v != "number" || !g || o === void 0) return null;
    const x = v === o - 1;
    if (v >= o && A)
      return 0;
    if (x && !A) return 1;
    if (!p && !x) return null;
    const B = x ? v + 1 : v - 1, q = x ? g[B] - g[B - 1] : g[B + 1] - g[B], T = b / Math.abs(q);
    return x ? 1 - T : T;
  }
  return {
    isLastSnapPoint: S,
    activeSnapPoint: d,
    shouldFade: p,
    getPercentageDragged: W,
    setActiveSnapPoint: m,
    activeSnapPointIndex: v,
    onRelease: w,
    onDrag: P,
    snapPointsOffset: g
  };
}
const Os = () => () => {
};
function ks() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: a } = Ye(), o = y.useRef(null), l = yr(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - $t) / window.innerWidth;
  }
  y.useEffect(() => {
    if (t && n) {
      o.current && clearTimeout(o.current);
      const f = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!f) return;
      Ts(r && !a ? Dt(document.body, {
        background: "black"
      }) : Os, Dt(f, {
        transformOrigin: j(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${L.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
      }));
      const c = Dt(f, {
        borderRadius: `${nr}px`,
        overflow: "hidden",
        ...j(e) ? {
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
function $s({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: a, noBodyStyles: o }) {
  const [l, i] = y.useState(() => typeof window < "u" ? window.location.href : ""), f = y.useRef(0), c = y.useCallback(() => {
    if (un() && He === null && e && !o) {
      He = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: m, innerHeight: h } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-f.current}px`,
        left: `${-m}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const _ = h - window.innerHeight;
        _ && f.current >= h && (document.body.style.top = `${-(f.current + _)}px`);
      }), 300);
    }
  }, [
    e
  ]), d = y.useCallback(() => {
    if (un() && He !== null && !o) {
      const m = -parseInt(document.body.style.top, 10), h = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, He), window.requestAnimationFrame(() => {
        if (a && l !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(h, m);
      }), He = null;
    }
  }, [
    l
  ]);
  return y.useEffect(() => {
    function m() {
      f.current = window.scrollY;
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
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && c(), t || window.setTimeout(() => {
      d();
    }, 500)) : d());
  }, [
    e,
    r,
    l,
    t,
    n,
    c,
    d
  ]), {
    restorePositionSetting: d
  };
}
function Ms({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: a, snapPoints: o, shouldScaleBackground: l = !1, setBackgroundColorOnScale: i = !0, closeThreshold: f = Ds, scrollLockTimeout: c = xs, dismissible: d = !0, handleOnly: m = !1, fadeFromIndex: h = o && o.length - 1, activeSnapPoint: _, setActiveSnapPoint: S, fixed: v, modal: p = !0, onClose: g, nested: E, noBodyStyles: N = !1, direction: w = "bottom", defaultOpen: P = !1, disablePreventScroll: W = !0, snapToSequentialPoint: b = !1, preventScrollRestoration: A = !1, repositionInputs: x = !0, onAnimationEnd: I, container: B, autoFocus: q = !1 }) {
  var T, X;
  const [Y = !1, Z] = ar({
    defaultProp: P,
    prop: e,
    onChange: (R) => {
      t == null || t(R), !R && !E && mr(), setTimeout(() => {
        I == null || I(R);
      }, L.DURATION * 1e3), R && !p && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), R || (document.body.style.pointerEvents = "auto");
    }
  }), [z, ie] = y.useState(!1), [ce, $e] = y.useState(!1), [sr, Ft] = y.useState(!1), Ee = y.useRef(null), Ge = y.useRef(null), mt = y.useRef(null), ht = y.useRef(null), Me = y.useRef(null), Le = y.useRef(!1), vt = y.useRef(null), pt = y.useRef(0), Se = y.useRef(!1), jt = y.useRef(!P), Wt = y.useRef(0), D = y.useRef(null), Ut = y.useRef(((T = D.current) == null ? void 0 : T.getBoundingClientRect().height) || 0), Ht = y.useRef(((X = D.current) == null ? void 0 : X.getBoundingClientRect().width) || 0), gt = y.useRef(0), lr = y.useCallback((R) => {
    o && R === Ie.length - 1 && (Ge.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: cr, activeSnapPointIndex: Ne, setActiveSnapPoint: Vt, onRelease: ur, snapPointsOffset: Ie, onDrag: dr, shouldFade: zt, getPercentageDragged: fr } = Ps({
    snapPoints: o,
    activeSnapPointProp: _,
    setActiveSnapPointProp: S,
    drawerRef: D,
    fadeFromIndex: h,
    overlayRef: Ee,
    onSnapPointChange: lr,
    direction: w,
    container: B,
    snapToSequentialPoint: b
  });
  bs({
    isDisabled: !Y || ce || !p || sr || !z || !x || !W
  });
  const { restorePositionSetting: mr } = $s({
    isOpen: Y,
    modal: p,
    nested: E ?? !1,
    hasBeenOpened: z,
    preventScrollRestoration: A,
    noBodyStyles: N
  });
  function Ke() {
    return (window.innerWidth - $t) / window.innerWidth;
  }
  function hr(R) {
    var $, M;
    !d && !o || D.current && !D.current.contains(R.target) || (Ut.current = (($ = D.current) == null ? void 0 : $.getBoundingClientRect().height) || 0, Ht.current = ((M = D.current) == null ? void 0 : M.getBoundingClientRect().width) || 0, $e(!0), mt.current = /* @__PURE__ */ new Date(), Zn() && window.addEventListener("touchend", () => Le.current = !1, {
      once: !0
    }), R.target.setPointerCapture(R.pointerId), pt.current = j(w) ? R.pageY : R.pageX);
  }
  function qt(R, $) {
    var M;
    let O = R;
    const F = (M = window.getSelection()) == null ? void 0 : M.toString(), K = D.current ? rt(D.current, w) : null, G = /* @__PURE__ */ new Date();
    if (O.tagName === "SELECT" || O.hasAttribute("data-vaul-no-drag") || O.closest("[data-vaul-no-drag]"))
      return !1;
    if (w === "right" || w === "left")
      return !0;
    if (Ge.current && G.getTime() - Ge.current.getTime() < 500)
      return !1;
    if (K !== null && (w === "bottom" ? K > 0 : K < 0))
      return !0;
    if (F && F.length > 0)
      return !1;
    if (Me.current && G.getTime() - Me.current.getTime() < c && K === 0 || $)
      return Me.current = G, !1;
    for (; O; ) {
      if (O.scrollHeight > O.clientHeight) {
        if (O.scrollTop !== 0)
          return Me.current = /* @__PURE__ */ new Date(), !1;
        if (O.getAttribute("role") === "dialog")
          return !0;
      }
      O = O.parentNode;
    }
    return !0;
  }
  function vr(R) {
    if (D.current && ce) {
      const $ = w === "bottom" || w === "right" ? 1 : -1, M = (pt.current - (j(w) ? R.pageY : R.pageX)) * $, O = M > 0, F = o && !d && !O;
      if (F && Ne === 0) return;
      const K = Math.abs(M), G = document.querySelector("[data-vaul-drawer-wrapper]"), ue = w === "bottom" || w === "top" ? Ut.current : Ht.current;
      let Q = K / ue;
      const ge = fr(K, O);
      if (ge !== null && (Q = ge), F && Q >= 1 || !Le.current && !qt(R.target, O)) return;
      if (D.current.classList.add(xt), Le.current = !0, H(D.current, {
        transition: "none"
      }), H(Ee.current, {
        transition: "none"
      }), o && dr({
        draggedDistance: M
      }), O && !o) {
        const re = Rs(M), Xe = Math.min(re * -1, 0) * $;
        H(D.current, {
          transform: j(w) ? `translate3d(0, ${Xe}px, 0)` : `translate3d(${Xe}px, 0, 0)`
        });
        return;
      }
      const de = 1 - Q;
      if ((zt || h && Ne === h - 1) && (r == null || r(R, Q), H(Ee.current, {
        opacity: `${de}`,
        transition: "none"
      }, !0)), G && Ee.current && l) {
        const re = Math.min(Ke() + Q * (1 - Ke()), 1), Xe = 8 - Q * 8, Gt = Math.max(0, 14 - Q * 14);
        H(G, {
          borderRadius: `${Xe}px`,
          transform: j(w) ? `scale(${re}) translate3d(0, ${Gt}px, 0)` : `scale(${re}) translate3d(${Gt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!o) {
        const re = K * $;
        H(D.current, {
          transform: j(w) ? `translate3d(0, ${re}px, 0)` : `translate3d(${re}px, 0, 0)`
        });
      }
    }
  }
  y.useEffect(() => {
    window.requestAnimationFrame(() => {
      jt.current = !0;
    });
  }, []), y.useEffect(() => {
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
        if (Math.abs(Wt.current - G) > 60 && (Se.current = !Se.current), o && o.length > 0 && Ie && Ne) {
          const de = Ie[Ne] || 0;
          G += de;
        }
        if (Wt.current = G, ue > F || Se.current) {
          const de = D.current.getBoundingClientRect().height;
          let re = de;
          de > F && (re = F - (Q ? ge : $t)), v ? D.current.style.height = `${de - Math.max(G, 0)}px` : D.current.style.height = `${Math.max(re, F - ge)}px`;
        } else ms() || (D.current.style.height = `${gt.current}px`);
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
    Ie
  ]);
  function Be(R) {
    pr(), g == null || g(), R || Z(!1), setTimeout(() => {
      o && Vt(o[0]);
    }, L.DURATION * 1e3);
  }
  function Yt() {
    if (!D.current) return;
    const R = document.querySelector("[data-vaul-drawer-wrapper]"), $ = rt(D.current, w);
    H(D.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`
    }), H(Ee.current, {
      transition: `opacity ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      opacity: "1"
    }), l && $ && $ > 0 && Y && H(R, {
      borderRadius: `${nr}px`,
      overflow: "hidden",
      ...j(w) ? {
        transform: `scale(${Ke()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Ke()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${L.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${L.EASE.join(",")})`
    }, !0);
  }
  function pr() {
    !ce || !D.current || (D.current.classList.remove(xt), Le.current = !1, $e(!1), ht.current = /* @__PURE__ */ new Date());
  }
  function gr(R) {
    if (!ce || !D.current) return;
    D.current.classList.remove(xt), Le.current = !1, $e(!1), ht.current = /* @__PURE__ */ new Date();
    const $ = rt(D.current, w);
    if (!R || !qt(R.target, !1) || !$ || Number.isNaN($) || mt.current === null) return;
    const M = ht.current.getTime() - mt.current.getTime(), O = pt.current - (j(w) ? R.pageY : R.pageX), F = Math.abs(O) / M;
    if (F > 0.05 && (Ft(!0), setTimeout(() => {
      Ft(!1);
    }, 200)), o) {
      ur({
        draggedDistance: O * (w === "bottom" || w === "right" ? 1 : -1),
        closeDrawer: Be,
        velocity: F,
        dismissible: d
      }), a == null || a(R, !0);
      return;
    }
    if (w === "bottom" || w === "right" ? O > 0 : O < 0) {
      Yt(), a == null || a(R, !0);
      return;
    }
    if (F > tr) {
      Be(), a == null || a(R, !1);
      return;
    }
    var K;
    const G = Math.min((K = D.current.getBoundingClientRect().height) != null ? K : 0, window.innerHeight);
    var ue;
    const Q = Math.min((ue = D.current.getBoundingClientRect().width) != null ? ue : 0, window.innerWidth), ge = w === "left" || w === "right";
    if (Math.abs($) >= (ge ? Q : G) * f) {
      Be(), a == null || a(R, !1);
      return;
    }
    a == null || a(R, !0), Yt();
  }
  y.useEffect(() => (Y && (H(document.documentElement, {
    scrollBehavior: "auto"
  }), Ge.current = /* @__PURE__ */ new Date()), () => {
    Ns(document.documentElement, "scrollBehavior");
  }), [
    Y
  ]);
  function _r(R) {
    const $ = R ? (window.innerWidth - we) / window.innerWidth : 1, M = R ? -we : 0;
    vt.current && window.clearTimeout(vt.current), H(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: j(w) ? `scale(${$}) translate3d(0, ${M}px, 0)` : `scale(${$}) translate3d(${M}px, 0, 0)`
    }), !R && D.current && (vt.current = setTimeout(() => {
      const O = rt(D.current, w);
      H(D.current, {
        transition: "none",
        transform: j(w) ? `translate3d(0, ${O}px, 0)` : `translate3d(${O}px, 0, 0)`
      });
    }, 500));
  }
  function wr(R, $) {
    if ($ < 0) return;
    const M = (window.innerWidth - we) / window.innerWidth, O = M + $ * (1 - M), F = -we + $ * we;
    H(D.current, {
      transform: j(w) ? `scale(${O}) translate3d(0, ${F}px, 0)` : `scale(${O}) translate3d(${F}px, 0, 0)`,
      transition: "none"
    });
  }
  function br(R, $) {
    const M = j(w) ? window.innerHeight : window.innerWidth, O = $ ? (M - we) / M : 1, F = $ ? -we : 0;
    $ && H(D.current, {
      transition: `transform ${L.DURATION}s cubic-bezier(${L.EASE.join(",")})`,
      transform: j(w) ? `scale(${O}) translate3d(0, ${F}px, 0)` : `scale(${O}) translate3d(${F}px, 0, 0)`
    });
  }
  return y.useEffect(() => {
    p || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    p
  ]), /* @__PURE__ */ y.createElement(as, {
    defaultOpen: P,
    onOpenChange: (R) => {
      !d && !R || (R ? ie(!0) : Be(!0), Z(R));
    },
    open: Y
  }, /* @__PURE__ */ y.createElement(Xn.Provider, {
    value: {
      activeSnapPoint: cr,
      snapPoints: o,
      setActiveSnapPoint: Vt,
      drawerRef: D,
      overlayRef: Ee,
      onOpenChange: t,
      onPress: hr,
      onRelease: gr,
      onDrag: vr,
      dismissible: d,
      shouldAnimate: jt,
      handleOnly: m,
      isOpen: Y,
      isDragging: ce,
      shouldFade: zt,
      closeDrawer: Be,
      onNestedDrag: wr,
      onNestedOpenChange: _r,
      onNestedRelease: br,
      keyboardIsOpen: Se,
      modal: p,
      snapPointsOffset: Ie,
      activeSnapPointIndex: Ne,
      direction: w,
      shouldScaleBackground: l,
      setBackgroundColorOnScale: i,
      noBodyStyles: N,
      container: B,
      autoFocus: q
    }
  }, n));
}
const or = /* @__PURE__ */ y.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: a, shouldFade: o, isOpen: l, modal: i, shouldAnimate: f } = Ye(), c = Jn(t, n), d = r && r.length > 0;
  if (!i)
    return null;
  const m = y.useCallback((h) => a(h), [
    a
  ]);
  return /* @__PURE__ */ y.createElement(ss, {
    onMouseUp: m,
    ref: c,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": l && d ? "true" : "false",
    "data-vaul-snap-points-overlay": l && o ? "true" : "false",
    "data-vaul-animate": f != null && f.current ? "true" : "false",
    ...e
  });
});
or.displayName = "Drawer.Overlay";
const ir = /* @__PURE__ */ y.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, a) {
  const { drawerRef: o, onPress: l, onRelease: i, onDrag: f, keyboardIsOpen: c, snapPointsOffset: d, activeSnapPointIndex: m, modal: h, isOpen: _, direction: S, snapPoints: v, container: p, handleOnly: g, shouldAnimate: E, autoFocus: N } = Ye(), [w, P] = y.useState(!1), W = Jn(a, o), b = y.useRef(null), A = y.useRef(null), x = y.useRef(!1), I = v && v.length > 0;
  ks();
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
  y.useEffect(() => {
    I && window.requestAnimationFrame(() => {
      P(!0);
    });
  }, []);
  function q(T) {
    b.current = null, x.current = !1, i(T);
  }
  return /* @__PURE__ */ y.createElement(ls, {
    "data-vaul-drawer-direction": S,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": w ? "true" : "false",
    "data-vaul-snap-points": _ && I ? "true" : "false",
    "data-vaul-custom-container": p ? "true" : "false",
    "data-vaul-animate": E != null && E.current ? "true" : "false",
    ...r,
    ref: W,
    style: d && d.length > 0 ? {
      "--snap-point-height": `${d[m ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (T) => {
      g || (r.onPointerDown == null || r.onPointerDown.call(r, T), b.current = {
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
      if (A.current = T, g || (r.onPointerMove == null || r.onPointerMove.call(r, T), !b.current)) return;
      const X = T.pageY - b.current.y, Y = T.pageX - b.current.x, Z = T.pointerType === "touch" ? 10 : 2;
      B({
        x: Y,
        y: X
      }, S, Z) ? f(T) : (Math.abs(Y) > Z || Math.abs(X) > Z) && (b.current = null);
    },
    onPointerUp: (T) => {
      r.onPointerUp == null || r.onPointerUp.call(r, T), b.current = null, x.current = !1, i(T);
    },
    onPointerOut: (T) => {
      r.onPointerOut == null || r.onPointerOut.call(r, T), q(A.current);
    },
    onContextMenu: (T) => {
      r.onContextMenu == null || r.onContextMenu.call(r, T), A.current && q(A.current);
    }
  });
});
ir.displayName = "Drawer.Content";
const Ls = 250, Is = 120, Bs = /* @__PURE__ */ y.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: a, isDragging: o, snapPoints: l, activeSnapPoint: i, setActiveSnapPoint: f, dismissible: c, handleOnly: d, isOpen: m, onPress: h, onDrag: _ } = Ye(), S = y.useRef(null), v = y.useRef(!1);
  function p() {
    if (v.current) {
      N();
      return;
    }
    window.setTimeout(() => {
      g();
    }, Is);
  }
  function g() {
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
    const P = l.findIndex((b) => b === i);
    if (P === -1) return;
    const W = l[P + 1];
    f(W);
  }
  function E() {
    S.current = window.setTimeout(() => {
      v.current = !0;
    }, Ls);
  }
  function N() {
    S.current && window.clearTimeout(S.current), v.current = !1;
  }
  return /* @__PURE__ */ y.createElement("div", {
    onClick: p,
    onPointerCancel: N,
    onPointerDown: (w) => {
      d && h(w), E();
    },
    onPointerMove: (w) => {
      d && _(w);
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
Bs.displayName = "Drawer.Handle";
function Fs(e) {
  const t = Ye(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ y.createElement(is, {
    container: n,
    ...r
  });
}
const k = {
  Root: Ms,
  Content: ir,
  Overlay: or,
  Trigger: os,
  Portal: Fs,
  Close: ds,
  Title: cs,
  Description: us
}, js = "_overlay_deg94_3", Ws = "_content_deg94_10", Us = "_grabber_deg94_35", Hs = "_headline_deg94_46", Vs = "_subhead_deg94_58", zs = "_callout_deg94_70", qs = "_calloutLabel_deg94_80", Ys = "_calloutRow_deg94_89", Gs = "_calloutGross_deg94_95", Ks = "_calloutArrow_deg94_103", Xs = "_calloutNet_deg94_107", Zs = "_features_deg94_117", Qs = "_divider_deg94_126", Js = "_priceRow_deg94_134", el = "_price_deg94_134", tl = "_priceNote_deg94_149", nl = "_restore_deg94_159", V = {
  overlay: js,
  content: Ws,
  grabber: Us,
  headline: Hs,
  subhead: Vs,
  callout: zs,
  calloutLabel: qs,
  calloutRow: Ys,
  calloutGross: Gs,
  calloutArrow: Ks,
  calloutNet: Xs,
  features: Zs,
  divider: Qs,
  priceRow: Js,
  price: el,
  priceNote: tl,
  restore: nl
}, rl = [
  { title: "Bonus & overtime modelling", description: "Model any additional income", state: "active" },
  { title: "Marginal tax insight", description: "See what your next £1 is worth", state: "active" },
  { title: "Salary comparison", description: "Coming soon", state: "inactive" }
];
function ic({
  open: e,
  onOpenChange: t,
  trigger: n,
  priceFormatted: r,
  priceNote: a = "one-off · no subscription",
  features: o = rl,
  onPurchase: l,
  onRestore: i,
  isPurchasing: f = !1
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
        /* @__PURE__ */ s("div", { className: V.features, role: "list", "aria-label": "Included features", children: o.map((c, d) => /* @__PURE__ */ s("div", { role: "listitem", children: /* @__PURE__ */ s(Yr, { title: c.title, description: c.description, state: c.state }) }, d)) }),
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
            disabled: f,
            "aria-label": "Unlock Netti Pro",
            children: f ? "Unlocking…" : "Unlock Netti Pro"
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
const al = "_overlay_qhbnf_6", ol = "_content_qhbnf_13", il = "_grabber_qhbnf_33", sl = "_title_qhbnf_42", ll = "_list_qhbnf_58", cl = "_divider_qhbnf_65", Ae = {
  overlay: al,
  content: ol,
  grabber: il,
  title: sl,
  list: ll,
  divider: cl
};
function sc({
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
      /* @__PURE__ */ s(k.Overlay, { className: Ae.overlay }),
      /* @__PURE__ */ C(k.Content, { className: Ae.content, "aria-label": r, children: [
        /* @__PURE__ */ s("div", { className: Ae.grabber, "aria-hidden": "true" }),
        /* @__PURE__ */ s(k.Title, { className: Ae.title, children: r }),
        /* @__PURE__ */ s("div", { className: Ae.list, role: "list", children: a.map((l, i) => /* @__PURE__ */ C("div", { role: "listitem", children: [
          /* @__PURE__ */ s(
            ua,
            {
              title: l.title,
              subtitle: l.subtitle,
              onClick: () => o(l.id)
            }
          ),
          i < a.length - 1 && /* @__PURE__ */ s("div", { className: Ae.divider, "aria-hidden": "true" })
        ] }, l.id)) })
      ] })
    ] })
  ] });
}
const ul = "_card_mp69k_9", dl = "_left_mp69k_22", fl = "_label_mp69k_30", ml = "_amountRow_mp69k_37", hl = "_gross_mp69k_44", vl = "_frequency_mp69k_50", pl = "_right_mp69k_57", gl = "_periodLabel_mp69k_65", _l = "_periodAmount_mp69k_73", se = {
  card: ul,
  left: dl,
  label: fl,
  amountRow: ml,
  gross: hl,
  frequency: vl,
  right: pl,
  periodLabel: gl,
  periodAmount: _l
};
function lc({
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
const wl = "_card_13yqi_7", bl = "_header_13yqi_19", yl = "_title_13yqi_25", Cl = "_subtitle_13yqi_36", at = {
  card: wl,
  header: bl,
  title: yl,
  subtitle: Cl
};
function cc({ children: e, theme: t = "light", title: n, subtitle: r, className: a }) {
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
const El = "_overlay_18r1b_7", Sl = "_content_18r1b_14", Nl = "_handle_18r1b_35", Rl = "_header_18r1b_45", Tl = "_body_18r1b_49", Dl = "_footer_18r1b_56", xl = "_srOnly_18r1b_62", be = {
  overlay: El,
  content: Sl,
  handle: Nl,
  header: Rl,
  body: Tl,
  footer: Dl,
  srOnly: xl
}, Al = /* @__PURE__ */ s("div", { className: be.handle, "aria-hidden": "true" });
function uc({
  open: e,
  onOpenChange: t,
  trigger: n,
  header: r,
  children: a,
  footer: o,
  showHandle: l = !0,
  overlay: i = !0,
  "aria-label": f = "Sheet",
  className: c,
  style: d
}) {
  const [m, h] = ke(!1), _ = e !== void 0, S = _ ? e : m, v = Cr(
    (p) => {
      _ ? t == null || t(p) : h(p);
    },
    [_, t]
  );
  return /* @__PURE__ */ C(k.Root, { open: S, onOpenChange: v, children: [
    n ? /* @__PURE__ */ s(k.Trigger, { asChild: !0, children: n }) : null,
    /* @__PURE__ */ C(k.Portal, { children: [
      i ? /* @__PURE__ */ s(k.Overlay, { className: be.overlay, style: d }) : null,
      /* @__PURE__ */ C(
        k.Content,
        {
          className: [be.content, c ?? ""].filter(Boolean).join(" "),
          style: d,
          "aria-label": f,
          children: [
            /* @__PURE__ */ s(k.Title, { className: be.srOnly, children: f }),
            l ? Al : null,
            r ? /* @__PURE__ */ s("div", { className: be.header, children: r }) : null,
            /* @__PURE__ */ s("div", { className: be.body, children: a }),
            o ? /* @__PURE__ */ s("div", { className: be.footer, children: o }) : null
          ]
        }
      )
    ] })
  ] });
}
const Pl = "_header_nxtp1_8", Ol = "_title_nxtp1_16", kl = "_spacer_nxtp1_28", $l = "_icon_nxtp1_33", Ml = "_iconButton_nxtp1_34", Ve = {
  header: Pl,
  title: Ol,
  spacer: kl,
  icon: $l,
  iconButton: Ml
}, Ll = /* @__PURE__ */ s("span", { className: Ve.spacer, "aria-hidden": "true" });
function dc({
  title: e,
  icon: t,
  onIconClick: n,
  iconLabel: r = "More information",
  className: a
}) {
  const o = !!t;
  return /* @__PURE__ */ C("div", { className: [Ve.header, a ?? ""].filter(Boolean).join(" "), children: [
    o ? Ll : null,
    /* @__PURE__ */ s("span", { className: Ve.title, children: e }),
    o ? n ? /* @__PURE__ */ s(
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
const Il = "_overlay_q8ram_6", Bl = "_content_q8ram_13", Fl = "_handle_q8ram_32", jl = "_titleBar_q8ram_42", Wl = "_title_q8ram_42", Ul = "_titleSpacer_q8ram_58", Hl = "_back_q8ram_63", Vl = "_body_q8ram_89", zl = "_footer_q8ram_97", ql = "_description_q8ram_101", ee = {
  overlay: Il,
  content: Bl,
  handle: Fl,
  titleBar: jl,
  title: Wl,
  titleSpacer: Ul,
  back: Hl,
  body: Vl,
  footer: zl,
  description: ql
};
function Yl({
  title: e,
  description: t,
  trigger: n,
  children: r,
  footer: a,
  open: o,
  onOpenChange: l,
  onBack: i,
  onOpen: f,
  onClose: c
}) {
  const [d, m] = ke(!1), h = o !== void 0, _ = h ? o : d, S = (p) => {
    h ? l == null || l(p) : m(p);
  }, v = lt(_);
  return Pe(() => {
    _ !== v.current && (v.current = _, _ ? f == null || f() : c == null || c());
  }, [_]), /* @__PURE__ */ C(k.Root, { open: _, onOpenChange: S, children: [
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
const fc = Yl;
function mc({
  title: e,
  open: t,
  onOpenChange: n,
  onBack: r,
  children: a,
  footer: o,
  hideClose: l,
  onOpen: i,
  onClose: f
}) {
  const c = lt(t);
  return Pe(() => {
    t !== c.current && (c.current = t, t ? i == null || i() : f == null || f());
  }, [t]), t ? pn(
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
function hc({ title: e, description: t, children: n }) {
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
function vc({ width: e = 72, height: t = 24, className: n }) {
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
function pc({ className: e = "" }) {
  return /* @__PURE__ */ C("div", { className: `ds-ad-slot ${e}`, "data-testid": "ad-slot", children: [
    /* @__PURE__ */ C("svg", { className: "ds-ad-slot-icon", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
      /* @__PURE__ */ s("rect", { x: "1", y: "1", width: "14", height: "14", rx: "2", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ s("line", { x1: "1", y1: "5", x2: "15", y2: "5", stroke: "currentColor", strokeWidth: "1.2" }),
      /* @__PURE__ */ s("line", { x1: "5", y1: "5", x2: "5", y2: "15", stroke: "currentColor", strokeWidth: "1.2" })
    ] }),
    /* @__PURE__ */ s("span", { className: "ds-ad-slot-text", children: "Ad Slot Placeholder" })
  ] });
}
function gc({ children: e, className: t = "", ...n }) {
  return /* @__PURE__ */ s("button", { type: "button", className: `ds-primary-btn ${t}`, ...n, children: e });
}
export {
  pc as AdSlot,
  ac as AdditionalIncomeCard,
  nc as BottomNav,
  fc as BottomSheet,
  At as Button,
  cc as Card,
  lc as ConfirmationCard,
  Jl as Divider,
  Yr as FeatureRow,
  mc as FullScreenSheet,
  sc as IncomeTypePicker,
  ua as IncomeTypeRow,
  hc as InfoSheet,
  ec as InputField,
  aa as ListRow,
  Ql as MoneyRow,
  vc as NettiLogo,
  ic as PaywallSheet,
  gc as PrimaryButton,
  rc as SalaryCard,
  pa as SegmentedControl,
  tc as Select,
  uc as Sheet,
  dc as SheetHeader,
  Zl as Switch,
  Yl as TakeHomePaySheet,
  Wr as Tick
};
