import { ReactNode } from 'react';
import { Drawer } from 'vaul';
import './InfoSheet.css';

interface InfoSheetProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function InfoSheet({ title, description, children }: InfoSheetProps) {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="drawer-overlay" />
        <Drawer.Content className="info-sheet__content">
          <div className="info-sheet__header">
            <Drawer.Close className="info-sheet__close" aria-label="Close">
              ×
            </Drawer.Close>
            <div className="info-sheet__title">{title}</div>
            <div className="info-sheet__spacer" />
          </div>
          <p className="info-sheet__description">{description}</p>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
