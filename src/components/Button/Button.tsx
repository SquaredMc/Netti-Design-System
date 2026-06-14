import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  children: ReactNode;
  /** Visual style. `pro` is the cyan Pro CTA (navy text); `default` is the outlined light button. */
  variant?: 'default' | 'pro';
}

export function Button({ leftIcon, children, variant = 'default', className = '', ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`ds-button ds-button--${variant}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {leftIcon && <span className="ds-button__icon" aria-hidden="true">{leftIcon}</span>}
      <span>{children}</span>
    </button>
  );
}
