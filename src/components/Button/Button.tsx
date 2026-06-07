import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'pro' | 'primary' | 'secondary' | 'ghost' | 'text';
export type ButtonSize = 'lg' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
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
  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        styles.button,
        VARIANT_CLASS[variant],
        SIZE_CLASS[size],
        fullWidth ? styles.fullWidth : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <span className={styles.label}>{children}</span>
    </button>
  );
}
