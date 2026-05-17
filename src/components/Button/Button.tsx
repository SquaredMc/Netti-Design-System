import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  children: ReactNode;
}

export function Button({ leftIcon, children, className = '', ...props }: ButtonProps) {
  return (
    <button type="button" className={`ds-button${className ? ` ${className}` : ''}`} {...props}>
      {leftIcon && <span className="ds-button__icon" aria-hidden="true">{leftIcon}</span>}
      <span>{children}</span>
    </button>
  );
}
