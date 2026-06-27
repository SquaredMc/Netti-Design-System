import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import '../../tokens.css';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          'On/Off segmented switch. Off-active: white pill with navy border. ' +
          'On-active: navy pill with white text. Optional visible label to the left.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Switch>;

/** Interactive — starts in the "Off" state. */
export const OffState: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} label="Switch label" />;
  },
};

/** Interactive — starts in the "On" state. */
export const OnState: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Switch checked={checked} onChange={setChecked} label="Switch label" />;
  },
};

/** No label — track only, right-aligned. */
export const NoLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} />;
  },
};

/** Both states side by side for visual comparison. */
export const BothStates: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Switch checked={false} onChange={() => {}} label="Notifications" />
        <Switch checked={true}  onChange={() => {}} label="Dark mode" />
        <Switch checked={checked} onChange={setChecked} label="Interactive" />
      </div>
    );
  },
};
