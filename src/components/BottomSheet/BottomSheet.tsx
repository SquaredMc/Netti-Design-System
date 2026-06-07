import { ReactNode, useEffect, useState } from 'react';
import { Drawer } from 'vaul';
import styles from './BottomSheet.module.css';

export interface BottomSheetProps {
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
    if (isControlled) onOpenChange?.(next);
    else setInternalOpen(next);
  };

  useEffect(() => {
    if (open) onOpen?.();
    else onClose?.();
  }, [open]);

  return (
    <Drawer.Root open={open} onOpenChange={handleOpenChange}>
      {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />
        <Drawer.Content className={styles.content} aria-label={title}>
          <div className={styles.handle} aria-hidden="true" />

          {title && (
            <div className={styles.titleBar}>
              {onBack ? (
                <button
                  type="button"
                  className={styles.back}
                  onClick={onBack}
                  aria-label="Back"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ) : (
                <div className={styles.titleSpacer} />
              )}
              <Drawer.Title className={styles.title}>{title}</Drawer.Title>
              <div className={styles.titleSpacer} />
            </div>
          )}

          <div className={styles.body}>
            {description && (
              <Drawer.Description className={styles.description}>
                {description}
              </Drawer.Description>
            )}
            {children}
          </div>

          {footer && <div className={styles.footer}>{footer}</div>}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
