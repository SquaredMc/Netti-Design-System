import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Card({ children, title, subtitle, className = '' }: CardProps) {
  return (
    <div className={`ds-card ${className}`}>
      {(title || subtitle) && (
        <div className="ds-card-header">
          {title && <h2 className="ds-card-title">{title}</h2>}
          {subtitle && <p className="ds-card-subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
