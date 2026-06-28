import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Select.module.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
  'data-testid'?: string;
}

export function Select({ label, options, value, onChange, className, disabled, 'data-testid': testId }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number; width: number; upward: boolean } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  const calcPos = () => {
    if (!triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const maxH = Math.min(vh * 0.6, 320);
    const spaceBelow = vh - r.bottom - 12;
    const spaceAbove = r.top - 12;
    const upward = spaceBelow < maxH && spaceAbove > spaceBelow;
    setPos({ top: upward ? r.top - 8 : r.bottom + 8, left: r.left, width: r.width, upward });
  };

  useLayoutEffect(() => { if (isOpen) calcPos(); }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onScroll = () => calcPos();
    const onResize = () => calcPos();
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('scroll', onScroll, true); window.removeEventListener('resize', onResize); };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onOutside = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!triggerRef.current?.contains(t) && !dropdownRef.current?.contains(t)) setIsOpen(false);
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setIsOpen(false); triggerRef.current?.focus(); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const dropdown = isOpen && pos && createPortal(
    <div
      ref={dropdownRef}
      className={[styles.dropdown, pos.upward ? styles.dropdownUpward : ''].join(' ')}
      style={{
        position: 'fixed',
        top:    pos.upward ? 'auto' : pos.top,
        bottom: pos.upward ? `${window.innerHeight - pos.top}px` : 'auto',
        left:   pos.left,
        width:  pos.width,
      }}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={[styles.option, value === opt.value ? styles.optionSelected : ''].join(' ')}
          onClick={() => { onChange(opt.value); setIsOpen(false); triggerRef.current?.focus(); }}
          data-testid={`option-${opt.value}`}
        >
          {opt.label}
        </button>
      ))}
    </div>,
    document.body
  );

  return (
    <div className={[styles.field, className ?? ''].filter(Boolean).join(' ')}>
      <label className={styles.label}>{label}</label>
      <button
        ref={triggerRef}
        type="button"
        className={[styles.trigger, isOpen ? styles.triggerOpen : ''].join(' ')}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        data-testid={testId}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selected?.label ?? 'Select…'}</span>
        <svg
          className={[styles.chevron, isOpen ? styles.chevronOpen : ''].join(' ')}
          width="16" height="16" viewBox="0 0 16 16" fill="none"
        >
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {dropdown}
    </div>
  );
}
