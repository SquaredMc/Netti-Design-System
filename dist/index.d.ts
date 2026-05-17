import { ButtonHTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';

export declare function AdSlot({ className }: AdSlotProps): JSX_2.Element;

declare interface AdSlotProps {
    className?: string;
}

export declare function BottomNav({ items, activeId, onChange }: BottomNavProps): JSX_2.Element;

declare interface BottomNavProps {
    items: NavItem[];
    activeId: string;
    onChange: (id: string) => void;
}

export declare function BottomSheet({ title, description, trigger, children, footer, open: controlledOpen, onOpenChange, onBack, onOpen, onClose, }: BottomSheetProps): JSX_2.Element;

declare interface BottomSheetProps {
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

export declare function Button({ leftIcon, children, className, ...props }: ButtonProps): JSX_2.Element;

declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    leftIcon?: ReactNode;
    children: ReactNode;
}

export declare function Card({ children, title, subtitle, className }: CardProps): JSX_2.Element;

declare interface CardProps {
    children: ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
}

export declare function Divider(): JSX_2.Element;

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

export declare function InfoSheet({ title, description, children }: InfoSheetProps): JSX_2.Element;

declare interface InfoSheetProps {
    title: string;
    description: string;
    children: ReactNode;
}

export declare function InputField({ label, value, onChange, onBlur, type, placeholder, prefix, suffix, className, inputMode, testId, }: InputFieldProps): JSX_2.Element;

declare interface InputFieldProps {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
    onBlur?: () => void;
    type?: 'text' | 'number';
    placeholder?: string;
    prefix?: string;
    suffix?: string;
    className?: string;
    inputMode?: 'text' | 'numeric' | 'decimal';
    testId?: string;
}

export declare function MoneyRow({ label, amount, strong, showSign, className, currency, locale, }: MoneyRowProps): JSX_2.Element;

declare interface MoneyRowProps {
    label: string;
    amount: number;
    strong?: boolean;
    showSign?: boolean;
    className?: string;
    currency?: string;
    locale?: string;
}

declare interface NavItem {
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

export declare function PrimaryButton({ children, className, ...props }: PrimaryButtonProps): JSX_2.Element;

declare interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export declare function SegmentedControl({ options, value, onChange, className }: SegmentedControlProps): JSX_2.Element;

declare interface SegmentedControlProps {
    options: {
        value: string;
        label: string;
    }[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export declare function Select({ label, options, value, onChange, className, testId }: SelectProps): JSX_2.Element;

declare interface SelectOption {
    value: string;
    label: string;
}

declare interface SelectProps {
    label: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
    testId?: string;
}

export declare function Switch({ checked, onChange, offLabel, onLabel, className }: SwitchProps): JSX_2.Element;

declare interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    offLabel?: string;
    onLabel?: string;
    className?: string;
}

export { }
