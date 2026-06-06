import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';
import '../../tokens.css';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    docs: {
      description: {
        component:
          'Labelled text or numeric input. The border colour responds to focus and filled states automatically. ' +
          '`prefix` and `suffix` are inline adornments (£, hrs, %). All colours reference semantic tokens.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof InputField>;

/** Empty — border uses muted colour until the user interacts. */
export const Empty: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <InputField
        label="Salary"
        value={value}
        onChange={setValue}
        placeholder="Enter amount"
      />
    );
  },
};

/** Pre-filled value — border switches to `--netti-color-text-secondary`. */
export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('35000');
    return (
      <InputField
        label="Annual Salary"
        value={value}
        onChange={setValue}
        prefix="£"
        inputMode="numeric"
      />
    );
  },
};

/** Currency prefix — £ symbol sits inline before the input. */
export const WithPrefix: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <InputField
        label="Annual Salary"
        value={value}
        onChange={setValue}
        prefix="£"
        inputMode="numeric"
        placeholder="0"
      />
    );
  },
};

/** Unit suffix — "hrs" or "%" sits inline after the input. */
export const WithSuffix: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <InputField
        label="Hours per week"
        value={value}
        onChange={setValue}
        suffix="hrs"
        inputMode="numeric"
        placeholder="40"
      />
    );
  },
};

/** Both prefix and suffix — e.g. a percentage field with a £ baseline. */
export const PrefixAndSuffix: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <InputField
        label="Commission rate"
        value={value}
        onChange={setValue}
        prefix="+"
        suffix="%"
        inputMode="decimal"
        placeholder="0.0"
      />
    );
  },
};

/** Multiple fields in a column — how they look together in a form. */
export const FormGroup: Story = {
  render: () => {
    const [salary, setSalary]   = useState('35000');
    const [hours,  setHours]    = useState('');
    const [bonus,  setBonus]    = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--netti-card-gap)' }}>
        <InputField label="Annual Salary"  value={salary} onChange={setSalary} prefix="£" inputMode="numeric" />
        <InputField label="Hours per week" value={hours}  onChange={setHours}  suffix="hrs" inputMode="numeric" placeholder="40" />
        <InputField label="Annual Bonus"   value={bonus}  onChange={setBonus}  prefix="£" inputMode="numeric" placeholder="0" />
      </div>
    );
  },
};
