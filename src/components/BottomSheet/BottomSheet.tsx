import { ReactNode, useEffect, useState } from 'react';
import { Drawer } from 'vaul';
import './BottomSheet.css';

interface BottomSheetProps {
  title?: string;
  description?: string;
  trigger?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onBack?: () => void;
  onOpen?: () => void;
  onClose?: () => void;
}

export function BottomSheet({
  title,
  description,
  trigger,
  children,
  footer,
  open: controlledOpen,
  onOpenChange,
  onBack,
  onOpen,
  onClose,
}: BottomSheetProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const handleOpenChange = (next: boolean) => {
    if (isControlled) {
      onOpenChange?.(next);
    } else {
      setInternalOpen(next);
    }
  };

  useEffect(() => {
    if (open) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [open]);

  return (
    <Drawer.Root open={open} onOpenChange={handleOpenChange}>
      {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
      <Drawer.Portal>
        <Drawer.Overlay className="drawer-overlay" />
        <Drawer.Content className="bottom-sheet__content">
          <div className="bottom-sheet__handle" />
          {title && (
            <div className="bottom-sheet__title-bar">
              {onBack ? (
                <button type="button" className="bottom-sheet__back" onClick={onBack} aria-label="Back">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ) : (
                <div className="bottom-sheet__title-spacer" />
              )}
              <div className="bottom-sheet__title">{title}</div>
              <div className="bottom-sheet__title-spacer" />
            </div>
          )}
          <div className="bottom-sheet__body">
            {description && <p className="bottom-sheet__description">{description}</p>}
            {children}
          </div>
          {footer && <div className="bottom-sheet__footer">{footer}</div>}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
