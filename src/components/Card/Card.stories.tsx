import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'Themed, slot-based core surface. `theme="light" | "dark"` sets `data-theme` ' +
          'on the card, so the card and its content adapt via the global ' +
          '`--netti-color-{surface,on-surface,…}` tokens. Themes nest, so a dark Card ' +
          'works on a light screen.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

const body = <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: 'var(--netti-color-on-surface-muted)' }}>
  Content uses the themed on-surface tokens, so it adapts with the card.
</p>;

const frame = (children: React.ReactNode, bg = '#e9eaee') => (
  <div style={{ width: 393, padding: 24, background: bg }}>{children}</div>
);

/** Light theme — white surface, dark text. */
export const Light: Story = {
  render: () => frame(<Card theme="light" title="Your salary">{body}</Card>),
};

/** Dark theme — navy surface, white text. */
export const Dark: Story = {
  render: () => frame(<Card theme="dark" title="Your salary">{body}</Card>, '#00021b'),
};

/** Both, plus a dark card on a light screen — themes nest via data-theme. */
export const Nested: Story = {
  render: () => frame(
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Card theme="dark" title="Salary card (dark)">{body}</Card>
      <Card theme="light" title="Settings panel (light)">{body}</Card>
    </div>
  ),
};
