import { ButtonHTMLAttributes, ReactNode } from 'react';
import './PrimaryButton.css';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function PrimaryButton({ children, className = '', ...props }: PrimaryButtonProps) {
  return (
    <button type="button" className={`ds-primary-btn ${className}`} {...props}>
      {children}
    </button>
  );
}
