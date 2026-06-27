/**
 * Netti Design System
 *
 * Import the token stylesheet once in your app root before using components:
 *   import '@netti/design-system/tokens.css';
 *
 * All components reference semantic CSS custom properties.
 * Re-theme for a new product by overriding the semantic layer in your CSS.
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

export { IncomeTypeRow }            from './components/IncomeTypeRow/IncomeTypeRow';
export type { IncomeTypeRowProps }  from './components/IncomeTypeRow/IncomeTypeRow';

export { SegmentedControl }         from './components/SegmentedControl/SegmentedControl';
export type { SegmentedControlProps, SegmentOption } from './components/SegmentedControl/SegmentedControl';

export { InputField }               from './components/InputField/InputField';
export type { InputFieldProps, InputFieldVariant } from './components/InputField/InputField';

export { MoneyRow, Divider }        from './components/MoneyRow/MoneyRow';
export type { MoneyRowProps }       from './components/MoneyRow/MoneyRow';

export { Select }                   from './components/Select/Select';
export type { SelectProps, SelectOption } from './components/Select/Select';

export { BottomNav }                from './components/BottomNav/BottomNav';
export type { BottomNavProps, NavItem } from './components/BottomNav/BottomNav';

/* ── Composed ───────────────────────────────────────────────────────────── */
export { SalaryCard }               from './components/SalaryCard/SalaryCard';
export type { SalaryCardProps, Period } from './components/SalaryCard/SalaryCard';

export { AdditionalIncomeCard }     from './components/AdditionalIncomeCard/AdditionalIncomeCard';
export type { AdditionalIncomeCardProps, IncomeItem } from './components/AdditionalIncomeCard/AdditionalIncomeCard';

export { PaywallSheet }             from './components/PaywallSheet/PaywallSheet';
export type { PaywallSheetProps, PaywallFeature } from './components/PaywallSheet/PaywallSheet';

export { IncomeTypePicker }         from './components/IncomeTypePicker/IncomeTypePicker';
export type { IncomeTypePickerProps, IncomeType } from './components/IncomeTypePicker/IncomeTypePicker';

export { ConfirmationCard }         from './components/ConfirmationCard/ConfirmationCard';
export type { ConfirmationCardProps } from './components/ConfirmationCard/ConfirmationCard';

/* ── Surfaces ───────────────────────────────────────────────────────────── */
export { Card }                     from './components/Card/Card';

/** Product-agnostic, slot-based bottom sheet (header/body/footer). */
export { Sheet }                    from './components/Sheet/Sheet';
export type { SheetProps }          from './components/Sheet/Sheet';

export { BottomSheet }              from './components/BottomSheet/BottomSheet';
export { FullScreenSheet }          from './components/FullScreenSheet/FullScreenSheet';
export { InfoSheet }                from './components/InfoSheet/InfoSheet';

/* ── Brand ──────────────────────────────────────────────────────────────── */
export { NettiLogo }                from './components/NettiLogo/NettiLogo';
export { AdSlot }                   from './components/AdSlot/AdSlot';

/**
 * @deprecated Use Button with variant="pro" instead.
 */
export { PrimaryButton }            from './components/PrimaryButton/PrimaryButton';
