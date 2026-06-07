import { ReactNode } from 'react';
import styles from './Card.module.css';

export interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Card({ children, title, subtitle, className }: CardProps) {
  return (
    <div className={[styles.card, className ?? ''].filter(Boolean).join(' ')}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title    && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <p  className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
