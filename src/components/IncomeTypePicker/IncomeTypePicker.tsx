import { ReactNode } from 'react';
import { Drawer } from 'vaul';
import { IncomeTypeRow } from '../IncomeTypeRow/IncomeTypeRow';
import styles from './IncomeTypePicker.module.css';

/**
 * IncomeTypePicker
 *
 * Bottom sheet for choosing which kind of additional income to add.
 * Uses vaul Drawer for native-feeling drag-to-dismiss, mirroring PaywallSheet.
 *
 * Figma: node 68:48 (Income Type Picker Sheet).
 */

export interface IncomeType {
  id: string;
  title: string;
  subtitle?: string;
}

export interface IncomeTypePickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Optional element that opens the sheet. */
  trigger?: ReactNode;
  /** Sheet heading. */
  title?: string;
  /** Income types to choose from, in display order. */
  types: IncomeType[];
  /** Called with the chosen type's id. */
  onSelect: (id: string) => void;
}

export function IncomeTypePicker({
  open,
  onOpenChange,
  trigger,
  title = 'Add additional income',
  types,
  onSelect,
}: IncomeTypePickerProps) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />
        <Drawer.Content className={styles.content} aria-label={title}>
          <div className={styles.grabber} aria-hidden="true" />
          <Drawer.Title className={styles.title}>{title}</Drawer.Title>

          <div className={styles.list} role="list">
            {types.map((type, index) => (
              <div key={type.id} role="listitem">
                <IncomeTypeRow
                  title={type.title}
                  subtitle={type.subtitle}
                  onClick={() => onSelect(type.id)}
                />
                {index < types.length - 1 && (
                  <div className={styles.divider} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
