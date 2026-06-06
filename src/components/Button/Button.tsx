import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

/**
 * Button
 *
 * Netti Design System primary interactive element.
 *
 * Variants map directly to the Figma Button component set:
 *   pro       — cyan fill, navy text. Primary CTA (paywall, unlock).
 *   primary   — white fill, cyan border. Confirm / secondary action.
 *   secondary — white fill, grey border. Cancel / restore.
 *   ghost     — translucent white fill on dark surfaces. "Add income" pill.
 *   text      — no fill or border. Inline tertiary action.
 *
 * Sizes:
 *   lg — 42px height, 18px text. Full-width CTAs.
 *   md — 34px height, 14px text. In-card and inline actions.
 */

export type ButtonVariant = 'pro' | 'primary' | 'secondary' | 'ghost' | 'text';
export type ButtonSize = 'lg' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Optional icon rendered before the label */
  icon?: ReactNode;
  /** Fill available width */
  fullWidth?: boolean;
  children: ReactNode;
}

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
      data-variant={variant}
      data-size={size}
      className={[
        styles.button,
        fullWidth ? styles.fullWidth : '',
        disabled ? styles.disabled : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.label}>{children}</span>
    </button>
  );
}
