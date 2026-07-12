import { ButtonHTMLAttributes } from 'react';
import { CSSProperties } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';

export declare function AdditionalIncomeCard({ items, onAdd, onItemClick, className, }: AdditionalIncomeCardProps): JSX_2.Element;

export declare interface AdditionalIncomeCardProps {
    items: IncomeItem[];
    onAdd: () => void;
    /** Tap handler for an income row — opens that item's edit screen. */
    onItemClick?: (id: string) => void;
    onRemove?: (id: string) => void;
    className?: string;
}

export declare function AdSlot({ className }: AdSlotProps): JSX_2.Element;

declare interface AdSlotProps {
    className?: string;
}

export declare function BottomNav({ items, activeId, onChange, className }: BottomNavProps): JSX_2.Element;

export declare interface BottomNavProps {
    items: NavItem[];
    activeId: string;
    onChange: (id: string) => void;
    className?: string;
}

/**
 * @deprecated Renamed to `TakeHomePaySheet`. This alias will be removed in a
 * future major version.
 */
export declare const BottomSheet: typeof TakeHomePaySheet;

/** @deprecated Use `TakeHomePaySheetProps`. */
export declare type BottomSheetProps = TakeHomePaySheetProps;

export declare function Button({ variant, size, icon, fullWidth, children, className, disabled, ...rest }: ButtonProps): JSX_2.Element;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** Leading icon rendered in the start slot, before the label. */
    icon?: ReactNode;
    fullWidth?: boolean;
    /**
     * Button label. Omit to render a square, icon-only button — in that case
     * pass `icon` and an `aria-label` for an accessible name.
     */
    children?: ReactNode;
}

export declare type ButtonSize = 'lg' | 'md';

export declare type ButtonVariant = 'pro' | 'primary' | 'secondary' | 'ghost' | 'text';

export declare function Card({ children, theme, title, subtitle, className }: CardProps): JSX_2.Element;

/**
 * Card
 *
 * The themed, slot-based core surface (Figma: Card, node 261:908). Renders as a
 * light or dark card and is the base for SalaryCard / AdditionalIncomeCard (dark)
 * and light settings surfaces.
 *
 * Theming is global: `theme` sets `data-theme` on the card, so the card AND its
 * content resolve the themed `--netti-color-{surface,on-surface,...}` tokens.
 * Because it's an attribute, themes nest — a dark Card sits happily on a light
 * screen.
 */
declare interface CardProps {
    children: ReactNode;
    /** Visual theme. Sets data-theme so the card and its content adapt. Default 'light'. */
    theme?: 'light' | 'dark';
    /** Optional convenience eyebrow title. */
    title?: string;
    /** Optional convenience subtitle. */
    subtitle?: string;
    className?: string;
}

export declare function ConfirmationCard({ label, amountFormatted, frequency, periodLabel, periodAmountFormatted, className, }: ConfirmationCardProps): JSX_2.Element;

/**
 * ConfirmationCard
 *
 * Cyan-tinted summary shown after adding an income item — confirms the gross
 * amount and its annualised value.
 *
 * Figma: node 64:18 (Confirmation Card).
 */
export declare interface ConfirmationCardProps {
    /** Small label above the entered amount. */
    label?: string;
    /** The amount the user entered, formatted, e.g. "£3,500". */
    amountFormatted: string;
    /** Frequency suffix shown after the amount, e.g. "yearly". */
    frequency: string;
    /** Right-hand period label, e.g. "Yearly". */
    periodLabel: string;
    /** Right-hand annualised amount, formatted, e.g. "£3,500". */
    periodAmountFormatted: string;
    className?: string;
}

export declare function Divider({ className }: {
    className?: string;
}): JSX_2.Element;

export declare function FeatureRow({ title, description, state, className, }: FeatureRowProps): JSX_2.Element;

/**
 * FeatureRow
 *
 * A single feature line in the Paywall Sheet.
 * Tick + title + optional sub-label.
 *
 * state=active   — full colour, for included features
 * state=inactive — muted colour, for "coming soon" items
 */
export declare interface FeatureRowProps {
    title: string;
    description?: string;
    state?: TickState;
    className?: string;
}

export declare function FullScreenSheet({ title, open, onOpenChange, onBack, children, footer, hideClose, onOpen, onClose, }: FullScreenSheetProps): ReactPortal | null;

declare interface FullScreenSheetProps {
    title?: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onBack?: () => void;
    children?: ReactNode;
    footer?: ReactNode;
    hideClose?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

/**
 * AdditionalIncomeCard
 *
 * Dark navy card below the SalaryCard on the Calculate screen.
 *
 * Empty state — no items:
 *   Full-width Ghost button fills the card.
 *
 * Has-items state:
 *   Header row: "Extra Income" label + "Add income" Ghost button inline (right).
 *   Income rows below — no remove buttons in this view.
 *   Tapping a row (onItemClick) opens its edit screen, where removal happens.
 *
 * Figma: node 80:65 (Has Items) and 80:35 (Empty); edit flow node 38:6255.
 */
export declare interface IncomeItem {
    id: string;
    label: string;
    subLabel?: string;
    amountFormatted: string;
}

/**
 * IncomeTypePicker
 *
 * Bottom sheet for choosing which kind of additional income to add.
 * Uses vaul Drawer for native-feeling drag-to-dismiss, mirroring PaywallSheet.
 *
 * Figma: node 68:48 (Income Type Picker Sheet).
 */
export declare interface IncomeType {
    id: string;
    title: string;
    subtitle?: string;
}

export declare function IncomeTypePicker({ open, onOpenChange, trigger, title, types, onSelect, }: IncomeTypePickerProps): JSX_2.Element;

export declare interface IncomeTypePickerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    /** Optional element that opens the sheet. */
    trigger?: ReactNode;
    /** Sheet heading. */
    title?: string;
    /** Income types to choose from, in display order. */
    types: IncomeType[];
    /** Called with the chosen type's id. */
    onSelect: (id: string) => void;
}

export declare function IncomeTypeRow({ title, subtitle, onClick, className }: IncomeTypeRowProps): JSX_2.Element;

/**
 * IncomeTypeRow
 *
 * A tappable row inside the Income Type Picker sheet.
 * Title + optional subtitle on the left, chevron affordance on the right.
 *
 * Figma: node 64:11 (Income Type Row).
 */
export declare interface IncomeTypeRowProps {
    title: string;
    /** Supporting description, e.g. "Recurring bonus payment" */
    subtitle?: string;
    onClick?: () => void;
    className?: string;
}

export declare function InfoSheet({ title, description, children }: InfoSheetProps): JSX_2.Element;

declare interface InfoSheetProps {
    title: string;
    description: string;
    children: ReactNode;
}

export declare function InputField({ label, value, onChange, variant, prefix, error, className, placeholder, disabled, inputMode, ...rest }: InputFieldProps): JSX_2.Element;

export declare interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'prefix'> {
    label: string;
    value: string;
    onChange: (value: string) => void;
    variant?: InputFieldVariant;
    /** Currency/unit prefix shown before the value. e.g. "£" or "%" */
    prefix?: string;
    /** Error message — shown below the field when set */
    error?: string;
    className?: string;
}

/**
 * InputField
 *
 * Two visual variants mapping directly to the Figma Input Field component:
 *
 *   standard     — bordered box (42px). Used for numeric/text inputs like
 *                  "Hours worked". Label above, value inside the box.
 *
 *   largeAmount  — large display style with underline cursor (no border box).
 *                  Used for primary monetary inputs like "Hourly rate" or
 *                  "Bonus amount". £/% prefix alongside 36px value.
 *
 * State is derived automatically from value + focus:
 *   empty   — no value, not focused
 *   focused — currently active
 *   filled  — has a value, not focused
 */
export declare type InputFieldVariant = 'standard' | 'largeAmount';

export declare function ListRow({ label, subLabel, amountFormatted, onClick, rowLabel, hasRemove, onRemove, removeLabel, hasDivider, badge, className, }: ListRowProps): JSX_2.Element;

/**
 * ListRow
 *
 * A single income item row inside the Additional Income Card.
 * Dark surface — always used on navy card backgrounds.
 *
 * Left:  label + optional sub-label (grows to fill)
 * Right: formatted amount + optional remove button
 *
 * hasRemove defaults to false — the remove button is only shown
 * when the user is actively editing an item, not in the default list view.
 * This matches the Figma spec where removal happens via the edit screen.
 *
 * Pass `onClick` to make the whole row tappable (e.g. open an edit screen).
 * The row then renders as a <button>; `onClick` and `hasRemove` are mutually
 * exclusive — a tappable row never nests the remove button.
 */
export declare interface ListRowProps {
    label: string;
    /** e.g. "(yearly)" */
    subLabel?: string;
    /** Formatted amount string, e.g. "£5,000" */
    amountFormatted?: string;
    /** Tap handler for the whole row — makes it a <button> (e.g. open edit screen). */
    onClick?: () => void;
    /** Accessible label for the tappable row. Defaults to the visible content. */
    rowLabel?: string;
    /**
     * Show the remove (−) button.
     * False by default — only shown in edit/detail context, not in the card list.
     */
    hasRemove?: boolean;
    /** Called when the remove button is pressed */
    onRemove?: () => void;
    /** Accessible label for the remove button */
    removeLabel?: string;
    /** Show a 1px divider at the bottom of the row */
    hasDivider?: boolean;
    /** Slot for a right-side badge (e.g. "Pro") */
    badge?: ReactNode;
    className?: string;
}

export declare function MoneyRow({ label, amount, variant, strong, showPositive, className, currency, locale, }: MoneyRowProps): JSX_2.Element;

export declare interface MoneyRowProps {
    label: string;
    /** Raw numeric amount. Formatted automatically with Intl. Omit for title/subtitle. */
    amount?: number;
    /**
     * Label-only section headers within a breakdown (no amount):
     * `title` — 18px, `subtitle` — 14px. Maps to Figma Breakdown Row variants.
     */
    variant?: 'title' | 'subtitle';
    /** Makes the row larger and bolder — use for totals */
    strong?: boolean;
    /** Colour-code positive amounts green */
    showPositive?: boolean;
    className?: string;
    currency?: string;
    locale?: string;
}

export declare interface NavItem {
    id: string;
    label: string;
    icon: ReactNode;
}

export declare function NettiLogo({ width, height, className }: NettiLogoProps): JSX_2.Element;

declare interface NettiLogoProps {
    width?: number;
    height?: number;
    className?: string;
}

/**
 * PaywallSheet
 *
 * Bottom sheet shown when a free user attempts to access a Pro feature.
 * Uses vaul Drawer for native-feeling drag-to-dismiss behaviour.
 *
 * Pull price from the store at runtime — never hard-code it.
 * Analytics events (paywall_shown, paywall_dismissed, pro_purchase_initiated)
 * should be fired by the parent via onShow / onDismiss / onPurchase callbacks.
 */
export declare interface PaywallFeature extends Pick<FeatureRowProps, 'title' | 'description' | 'state'> {
}

export declare function PaywallSheet({ open, onOpenChange, trigger, priceFormatted, priceNote, features, onPurchase, onRestore, isPurchasing, }: PaywallSheetProps): JSX_2.Element;

export declare interface PaywallSheetProps {
    /** Control sheet open state from outside */
    open: boolean;
    onOpenChange: (open: boolean) => void;
    /** Element that opens the sheet (optional — can be controlled externally) */
    trigger?: ReactNode;
    /** Price string pulled from RevenueCat at runtime, e.g. "£9.99" */
    priceFormatted: string;
    /** Note beneath the price, e.g. "one-off · no subscription" */
    priceNote?: string;
    /** Feature rows — ordered as they appear in the sheet */
    features?: PaywallFeature[];
    /** Called when the Unlock CTA is pressed */
    onPurchase: () => void;
    /** Called when the Restore link is pressed */
    onRestore: () => void;
    /** Whether a purchase is in progress (shows loading state on CTA) */
    isPurchasing?: boolean;
}

export declare type Period = 'yearly' | 'monthly' | 'weekly' | 'daily';

export declare function PrimaryButton({ children, className, ...props }: PrimaryButtonProps): JSX_2.Element;

declare interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export declare function SalaryCard({ salaryFormatted, period, onPeriodChange, additionalIncomeSummary, className, editable, value, onValueChange, }: SalaryCardProps): JSX_2.Element;

export declare interface SalaryCardProps {
    /** Formatted amount for display-only mode, e.g. "£35,000". */
    salaryFormatted: string;
    period: Period;
    onPeriodChange: (period: Period) => void;
    additionalIncomeSummary?: string;
    className?: string;
    /** When true, the amount renders as an inline editable input instead of a span. */
    editable?: boolean;
    /** Controlled raw value for editable mode, e.g. "35000". */
    value?: string;
    /** Called with the raw input value as the user types. */
    onValueChange?: (value: string) => void;
}

export declare function SegmentedControl({ options, value, onChange, label, context, className, 'aria-label': ariaLabel, }: SegmentedControlProps): JSX_2.Element;

export declare interface SegmentedControlProps {
    options: SegmentOption[];
    value: string;
    onChange: (value: string) => void;
    /** Optional text label shown above the control. */
    label?: string;
    context?: 'dark' | 'light';
    className?: string;
    /** Accessible label for the group */
    'aria-label'?: string;
}

/**
 * SegmentedControl (Toggle)
 *
 * Period or mode selector — maps to the Figma Toggle component.
 *
 * context:
 *   dark  — renders on navy card backgrounds (Salary Card, Additional Income Card)
 *   light — renders on white surface backgrounds (Bottom Sheet)
 *
 * Supports 2, 3, or 4 options. All widths share the same 44px height and
 * the same total width so they are interchangeable on screen.
 */
export declare interface SegmentOption {
    value: string;
    label: string;
}

export declare function Select({ label, options, value, onChange, className, disabled, 'data-testid': testId }: SelectProps): JSX_2.Element;

export declare interface SelectOption {
    value: string;
    label: string;
}

export declare interface SelectProps {
    label: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
    disabled?: boolean;
    'data-testid'?: string;
}

export declare function Sheet({ open: controlledOpen, onOpenChange, trigger, header, children, footer, showHandle, overlay, 'aria-label': ariaLabel, className, style, }: SheetProps): JSX_2.Element;

export declare function SheetHeader({ title, icon, onIconClick, iconLabel, className, }: SheetHeaderProps): JSX_2.Element;

/**
 * SheetHeader
 *
 * A centred sheet title with an optional trailing icon — drop into the
 * `header` slot of `Sheet`. A balancing spacer keeps the title centred when
 * the icon is present.
 *
 * Figma: node 258:841 (Sheet Header).
 */
export declare interface SheetHeaderProps {
    title: string;
    /** Trailing icon node (e.g. an info glyph). Omit for a plain centred title. */
    icon?: ReactNode;
    /** When provided, the icon renders as a button calling this handler. */
    onIconClick?: () => void;
    /** Accessible label for the icon button. */
    iconLabel?: string;
    className?: string;
}

/**
 * Sheet
 *
 * A product-agnostic bottom sheet primitive. Unlike BottomSheet (which is
 * Netti-flavoured with a prescribed title bar), Sheet is pure slots:
 * `header`, `children` (body) and `footer` — compose whatever you need.
 *
 * Theming is via `--sheet-*` CSS custom properties, each falling back to the
 * Netti token, then a hard-coded default — so it works standalone, inside
 * Netti, or fully re-themed:
 *   --sheet-surface, --sheet-overlay, --sheet-radius, --sheet-shadow,
 *   --sheet-handle, --sheet-padding-x, --sheet-padding-top,
 *   --sheet-padding-bottom, --sheet-gap, --sheet-max-height
 *
 * Controlled (`open` + `onOpenChange`) or uncontrolled (via `trigger`).
 * Built on vaul for drag-to-dismiss.
 */
export declare interface SheetProps {
    /** Controlled open state. Omit to run uncontrolled (driven by `trigger`). */
    open?: boolean;
    /** Called when the open state changes. */
    onOpenChange?: (open: boolean) => void;
    /** Element that opens the sheet (uncontrolled, or alongside controlled). */
    trigger?: ReactNode;
    /** Top slot — title bar, close button, etc. Pinned above the body. */
    header?: ReactNode;
    /** Main content — scrolls when it overflows. */
    children?: ReactNode;
    /** Bottom slot — actions. Pinned below the scrolling body. */
    footer?: ReactNode;
    /** Show the drag handle. Default true. */
    showHandle?: boolean;
    /** Render the scrim/overlay behind the sheet (Figma `hasOverlay`). Default true. */
    overlay?: boolean;
    /** Accessible name for the dialog (a visually-hidden title). */
    'aria-label'?: string;
    /** Extra class on the content panel. */
    className?: string;
    /**
     * Theming / inline styles. Applied to BOTH the overlay and the content so
     * `--sheet-*` custom properties resolve through vaul's portal (which renders
     * to document.body, escaping React-tree variable scope). Intended for the
     * `--sheet-*` theming variables.
     */
    style?: CSSProperties;
}

export declare function Switch({ checked, onChange, label, offLabel, onLabel, className, 'aria-label': ariaLabel, }: SwitchProps): JSX_2.Element;

export declare interface SwitchProps {
    /** Whether the "On" option is selected. */
    checked: boolean;
    onChange: (checked: boolean) => void;
    /** Optional label displayed to the left of the switch. */
    label?: string;
    offLabel?: string;
    onLabel?: string;
    className?: string;
    /** Accessible label for the switch group (used when no visible label is provided). */
    'aria-label'?: string;
}

export declare function TakeHomePaySheet({ title, description, trigger, children, footer, open: controlledOpen, onOpenChange, onBack, onOpen, onClose, }: TakeHomePaySheetProps): JSX_2.Element;

/**
 * TakeHomePaySheet
 *
 * The Netti-flavoured sheet (Figma: "Take home pay sheet", node 51:153) — a
 * title bar with optional back button, a scrolling body and a pinned footer.
 *
 * For a product-agnostic, fully slot-based sheet use `Sheet` instead.
 *
 * Renamed from `BottomSheet`; `BottomSheet` remains exported as a deprecated alias.
 */
export declare interface TakeHomePaySheetProps {
    title?: string;
    description?: string;
    trigger?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    onBack?: () => void;
    onOpen?: () => void;
    onClose?: () => void;
}

export declare function Tick({ state, className, 'aria-label': ariaLabel, }: TickProps): JSX_2.Element;

export declare interface TickProps {
    state?: TickState;
    className?: string;
    /** Screen-reader label — defaults to state description */
    'aria-label'?: string;
}

/**
 * Tick
 *
 * 22×22 circle with a checkmark. Used in feature lists and confirmation flows.
 *
 * state=active   — green circle, green tick (feature included)
 * state=inactive — grey circle, muted tick (coming soon / locked)
 */
export declare type TickState = 'active' | 'inactive';

export { }
