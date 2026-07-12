import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'pro' | 'primary' | 'secondary' | 'ghost' | 'text';
export type ButtonSize = 'lg' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  pro:       styles.variantPro,
  primary:   styles.variantPrimary,
  secondary: styles.variantSecondary,
  ghost:     styles.variantGhost,
  text:      styles.variantText,
};

const SIZE_CLASS: Record<ButtonSize, string> = {
  lg: styles.sizeLg,
  md: styles.sizeMd,
};

export function Button({
  variant = 'primary',
  size = 'lg',
  icon,
  fullWidth = false,
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  // No label → icon-only (square) button. Requires `icon` + an `aria-label`.
  const iconOnly = !children && icon != null;

  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        styles.button,
        VARIANT_CLASS[variant],
        SIZE_CLASS[size],
        iconOnly ? styles.iconOnly : '',
        fullWidth ? styles.fullWidth : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      {children ? <span className={styles.label}>{children}</span> : null}
    </button>
  );
}
