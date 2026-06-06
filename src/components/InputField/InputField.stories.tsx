import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Two variants: **standard** (bordered box, e.g. Hours worked) and **largeAmount** (large display with underline, e.g. Hourly rate / Bonus amount). State (empty/focused/filled) is derived automatically.',
      },
    },
  },
  argTypes: {
    variant: { control: 'radio', options: ['standard', 'largeAmount'] },
    prefix: { control: 'text' },
    label: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof InputField>;

// ── Standard ──────────────────────────────────────────────

function StandardControlled(props: Partial<React.ComponentProps<typeof InputField>>) {
  const [val, setVal] = useState(props.value ?? '');
  return (
    <div style={{ width: 353 }}>
      <InputField
        label="Hours worked"
        variant="standard"
        value={val as string}
        onChange={setVal}
        placeholder="e.g. 16"
        {...props}
      />
    </div>
  );
}

export const StandardEmpty: Story = {
  render: () => <StandardControlled value="" />,
};

export const StandardFilled: Story = {
  render: () => <StandardControlled value="16" />,
};

export const StandardDisabled: Story = {
  render: () => <StandardControlled value="" disabled />,
};

export const StandardError: Story = {
  render: () => <StandardControlled value="" error="Please enter hours worked" />,
};

// ── Large Amount ──────────────────────────────────────────

function LargeControlled(props: Partial<React.ComponentProps<typeof InputField>>) {
  const [val, setVal] = useState(props.value ?? '');
  return (
    <div style={{ width: 353 }}>
      <InputField
        label="Hourly rate"
        variant="largeAmount"
        prefix="£"
        value={val as string}
        onChange={setVal}
        {...props}
      />
    </div>
  );
}

export const LargeEmpty: Story = {
  render: () => <LargeControlled value="" />,
};

export const LargeFilled: Story = {
  render: () => <LargeControlled value="18" />,
};

export const LargeDisabled: Story = {
  render: () => <LargeControlled value="" disabled />,
};

export const LargeBonusAmount: Story = {
  name: 'Large — Bonus amount',
  render: () => <LargeControlled label="Bonus amount before tax" value="3500" />,
};

// ── Side by side ─────────────────────────────────────────

export const BothVariants: Story = {
  name: 'Both variants',
  render: () => {
    const [hourly, setHourly] = useState('18');
    const [hours, setHours] = useState('');
    return (
      <div style={{ width: 353, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <InputField label="Hourly rate"   variant="largeAmount" prefix="£" value={hourly} onChange={setHourly} />
        <InputField label="Hours worked"  variant="standard"                value={hours}  onChange={setHours}  placeholder="e.g. 16" />
      </div>
    );
  },
};
