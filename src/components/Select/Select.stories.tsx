import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Select>;

const taxYears = [
  { value: '2025', label: '2025/26' },
  { value: '2024', label: '2024/25' },
  { value: '2023', label: '2023/24' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('2025');
    return <Select label="Tax Year" options={taxYears} value={value} onChange={setValue} />;
  },
};
