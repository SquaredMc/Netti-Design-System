import { ReactNode } from 'react';
import styles from './Card.module.css';

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

export interface CardProps {
  children: ReactNode;
  /** Visual theme. Sets data-theme so the card and its content adapt. Default 'light'. */
  theme?: 'light' | 'dark';
  /** Optional convenience eyebrow title. */
  title?: string;
  /** Optional convenience subtitle. */
  subtitle?: string;
  className?: string;
}

export function Card({ children, theme = 'light', title, subtitle, className }: CardProps) {
  return (
    <div
      data-theme={theme}
      className={[styles.card, className ?? ''].filter(Boolean).join(' ')}
    >
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
