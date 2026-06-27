import type { Meta, StoryObj } from '@storybook/react';
import { SheetHeader } from './SheetHeader';

const InfoIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const meta: Meta<typeof SheetHeader> = {
  title: 'Components/SheetHeader',
  component: SheetHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Centred sheet title with an optional trailing icon. Drop into the ' +
          '`header` slot of `Sheet`. A leading spacer balances the icon so the ' +
          'title stays centred.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof SheetHeader>;

const frame = (children: React.ReactNode) => (
  <div style={{ width: 393, padding: 20, background: '#fff' }}>{children}</div>
);

/** With a trailing info icon (tappable). */
export const Default: Story = {
  render: () => frame(
    <SheetHeader title="Sheet title" icon={InfoIcon} onIconClick={() => alert('Info')} />
  ),
};

/** Plain centred title, no icon. */
export const NoIcon: Story = {
  render: () => frame(<SheetHeader title="Sheet title" />),
};
