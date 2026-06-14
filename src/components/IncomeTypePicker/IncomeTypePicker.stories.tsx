import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { IncomeTypePicker, IncomeType } from './IncomeTypePicker';
import { Button } from '../Button/Button';

const meta: Meta<typeof IncomeTypePicker> = {
  title: 'Components/IncomeTypePicker',
  component: IncomeTypePicker,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Bottom sheet for choosing which kind of additional income to add. ' +
          'Drag-to-dismiss via vaul. Composes IncomeTypeRow.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof IncomeTypePicker>;

const TYPES: IncomeType[] = [
  { id: 'bonus',      title: 'Bonus',          subtitle: 'Recurring bonus payment' },
  { id: 'overtime',   title: 'Overtime',       subtitle: 'Hourly overtime pay' },
  { id: 'commission', title: 'Commission',     subtitle: 'Sales or performance payments' },
  { id: 'single',     title: 'Single payment', subtitle: 'A one-off payment this tax year' },
];

/** Opens via a trigger button; select logs the chosen id. */
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 40 }}>
        <IncomeTypePicker
          open={open}
          onOpenChange={setOpen}
          trigger={<Button variant="pro" size="lg">+ Add additional income</Button>}
          types={TYPES}
          onSelect={(id) => {
            setOpen(false);
            // eslint-disable-next-line no-alert
            alert(`Selected: ${id}`);
          }}
        />
      </div>
    );
  },
};
