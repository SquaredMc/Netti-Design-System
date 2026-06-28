import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Sheet } from './Sheet';
import { Button } from '../Button/Button';

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Product-agnostic bottom-sheet primitive. Pure `header` / `children` / ' +
          '`footer` slots, themeable via `--sheet-*` CSS variables (with Netti-token ' +
          'fallbacks). Use this for new/other products; use `BottomSheet` for the ' +
          'Netti-flavoured title-bar sheet.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Sheet>;

const paragraph = {
  fontSize: 15,
  lineHeight: 1.5,
  color: '#4a5565',
  margin: '0 0 12px',
} as const;

/** Header, body and footer slots — composed by the consumer. */
export const Slots: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ padding: 40 }}>
        <Sheet
          open={open}
          onOpenChange={setOpen}
          aria-label="Details"
          trigger={<Button variant="pro" size="lg">Open sheet</Button>}
          header={
            <h2 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 12px', textAlign: 'center' }}>
              Sheet title
            </h2>
          }
          footer={
            <Button variant="pro" size="lg" fullWidth onClick={() => setOpen(false)}>
              Done
            </Button>
          }
        >
          <p style={paragraph}>
            Everything here is a slot — header, body and footer are whatever you pass.
            The body scrolls when it overflows; the footer stays pinned.
          </p>
          <p style={paragraph}>No Netti-specific layout is baked in.</p>
        </Sheet>
      </div>
    );
  },
};

/** `overlay={false}` — no scrim behind the sheet (Figma `hasOverlay=No`). */
export const NoOverlay: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ padding: 40 }}>
        <Sheet
          open={open}
          onOpenChange={setOpen}
          overlay={false}
          aria-label="No overlay"
          trigger={<Button variant="pro" size="lg">Open sheet (no overlay)</Button>}
          footer={
            <Button variant="pro" size="lg" fullWidth onClick={() => setOpen(false)}>
              Done
            </Button>
          }
        >
          <p style={paragraph}>No scrim — the content behind stays fully visible.</p>
        </Sheet>
      </div>
    );
  },
};

/** Re-themed via `--sheet-*` overrides — proving it's product-agnostic. */
export const Retheme: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ padding: 40 }}>
        <Sheet
          open={open}
          onOpenChange={setOpen}
          aria-label="Re-themed"
          // Override the themeable variables — no Netti tokens involved.
          // Applied to the portaled overlay + content via the `style` prop.
          style={{
            ['--sheet-surface' as string]: '#1b1033',
            ['--sheet-radius' as string]: '12px',
            ['--sheet-handle' as string]: '#7f77dd',
            ['--sheet-overlay' as string]: 'rgba(0,0,0,0.7)',
          }}
          trigger={<Button variant="pro" size="lg">Open re-themed sheet</Button>}
          footer={
            <Button variant="pro" size="lg" fullWidth onClick={() => setOpen(false)}>
              Close
            </Button>
          }
        >
          <p style={{ ...paragraph, color: '#cecbf6' }}>
            Same component, different brand — only the <code>--sheet-*</code> variables changed.
          </p>
        </Sheet>
      </div>
    );
  },
};
