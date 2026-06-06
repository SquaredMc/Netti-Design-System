/**
 * Netti Design System
 *
 * Import tokens.css in your app root before using components:
 *   import '@netti/design-system/tokens.css';
 *
 * All components reference semantic CSS custom properties from that stylesheet.
 * To re-theme for a new product, override the semantic layer in your own CSS.
 */

/* ── Primitives ─────────────────────────────────────────────────────────── */
export { Button }                   from './components/Button/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button/Button';

export { Tick }                     from './components/Tick/Tick';
export type { TickProps, TickState } from './components/Tick/Tick';

export { FeatureRow }               from './components/FeatureRow/FeatureRow';
export type { FeatureRowProps }     from './components/FeatureRow/FeatureRow';

export { ListRow }                  from './components/ListRow/ListRow';
export type { ListRowProps }        from './components/ListRow/ListRow';

export { SegmentedControl }         from './components/SegmentedControl/SegmentedControl';
export type { SegmentedControlProps, SegmentOption } from './components/SegmentedControl/SegmentedControl';

export { MoneyRow, Divider }        from './components/MoneyRow/MoneyRow';

export { InputField }               from './components/InputField/InputField';

export { Select }                   from './components/Select/Select';

/* ── Composed ───────────────────────────────────────────────────────────── */
export { SalaryCard }               from './components/SalaryCard/SalaryCard';
export type { SalaryCardProps, Period } from './components/SalaryCard/SalaryCard';

export { AdditionalIncomeCard }     from './components/AdditionalIncomeCard/AdditionalIncomeCard';
export type { AdditionalIncomeCardProps, IncomeItem } from './components/AdditionalIncomeCard/AdditionalIncomeCard';

export { PaywallSheet }             from './components/PaywallSheet/PaywallSheet';
export type { PaywallSheetProps, PaywallFeature } from './components/PaywallSheet/PaywallSheet';

/* ── Surfaces ───────────────────────────────────────────────────────────── */
export { Card }                     from './components/Card/Card';
export { BottomSheet }              from './components/BottomSheet/BottomSheet';
export { FullScreenSheet }          from './components/FullScreenSheet/FullScreenSheet';
export { InfoSheet }                from './components/InfoSheet/InfoSheet';

/* ── Navigation ─────────────────────────────────────────────────────────── */
export { BottomNav }                from './components/BottomNav/BottomNav';

/* ── Brand ──────────────────────────────────────────────────────────────── */
export { NettiLogo }                from './components/NettiLogo/NettiLogo';
export { AdSlot }                   from './components/AdSlot/AdSlot';

/**
 * @deprecated Use Button with variant="pro" instead.
 * PrimaryButton will be removed in the next major version.
 */
export { PrimaryButton }            from './components/PrimaryButton/PrimaryButton';
