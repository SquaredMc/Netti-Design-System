import { ReactNode } from 'react';
import styles from './BottomNav.module.css';

export interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
}

export interface BottomNavProps {
  items: NavItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export function BottomNav({ items, activeId, onChange, className }: BottomNavProps) {
  return (
    <nav className={[styles.nav, className ?? ''].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={[styles.item, activeId === item.id ? styles.active : ''].filter(Boolean).join(' ')}
          onClick={() => onChange(item.id)}
          aria-current={activeId === item.id ? 'page' : undefined}
          data-testid={`nav-${item.id}`}
        >
          <span className={styles.icon} aria-hidden="true">{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
