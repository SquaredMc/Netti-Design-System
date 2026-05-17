import { ReactNode } from 'react';
import './BottomNav.css';

interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
}

interface BottomNavProps {
  items: NavItem[];
  activeId: string;
  onChange: (id: string) => void;
}

export function BottomNav({ items, activeId, onChange }: BottomNavProps) {
  return (
    <nav className="ds-bottom-nav">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`ds-bottom-nav-item ${activeId === item.id ? 'ds-bottom-nav-item--active' : ''}`}
          onClick={() => onChange(item.id)}
          data-testid={`nav-${item.id}`}
        >
          <span className="ds-bottom-nav-icon">{item.icon}</span>
          <span className="ds-bottom-nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
