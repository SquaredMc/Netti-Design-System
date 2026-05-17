import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import './Select.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  testId?: string;
}

interface DropdownPosition {
  top: number;
  left: number;
  width: number;
  openUpward: boolean;
}

export function Select({ label, options, value, onChange, className = '', testId }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<DropdownPosition | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const calculatePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const sideOffset = 8;
    const collisionPadding = 12;
    const dropdownMaxHeight = Math.min(viewportHeight * 0.6, 320);
    const spaceBelow = viewportHeight - rect.bottom - collisionPadding;
    const spaceAbove = rect.top - collisionPadding;
    const openUpward = spaceBelow < dropdownMaxHeight && spaceAbove > spaceBelow;
    setPosition({
      top: openUpward ? rect.top - sideOffset : rect.bottom + sideOffset,
      left: rect.left,
      width: rect.width,
      openUpward,
    });
  };

  useLayoutEffect(() => {
    if (isOpen) calculatePosition();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => calculatePosition();
    const handleResize = () => calculatePosition();
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const dropdown =
    isOpen &&
    position &&
    createPortal(
      <div
        ref={dropdownRef}
        className={`ds-select-dropdown ${position.openUpward ? 'ds-select-dropdown--upward' : ''}`}
        style={{
          position: 'fixed',
          top: position.openUpward ? 'auto' : position.top,
          bottom: position.openUpward ? `${window.innerHeight - position.top}px` : 'auto',
          left: position.left,
          width: position.width,
        }}
        data-testid={testId ? `${testId}-dropdown` : undefined}
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`ds-select-option ${value === option.value ? 'ds-select-option--selected' : ''}`}
            onClick={() => {
              onChange(option.value);
              setIsOpen(false);
              triggerRef.current?.focus();
            }}
            data-testid={`option-${option.value}`}
          >
            {option.label}
          </button>
        ))}
      </div>,
      document.body
    );

  return (
    <div className={`ds-select-field ${className}`} ref={containerRef}>
      <label className="ds-select-label">{label}</label>
      <button
        ref={triggerRef}
        type="button"
        className={`ds-select-trigger ${isOpen ? 'ds-select-trigger--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        data-testid={testId}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedOption?.label || 'Select...'}</span>
        <svg className="ds-select-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {dropdown}
    </div>
  );
}
