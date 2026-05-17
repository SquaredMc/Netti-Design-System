import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
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

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return <InputField label="Salary" value={value} onChange={setValue} placeholder="0" />;
  },
};

export const WithPrefix: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return <InputField label="Annual Salary" value={value} onChange={setValue} prefix="£" inputMode="numeric" />;
  },
};

export const WithSuffix: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return <InputField label="Hours per week" value={value} onChange={setValue} suffix="hrs" inputMode="numeric" />;
  },
};
