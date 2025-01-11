import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Radio, { RadioSize } from '../../src/core/radio';
import RadioDocsTemplate from '../docs/radio.mdx';

const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: RadioDocsTemplate,
      subtitle: 'Radio buttons allow users to select one option from a list.',
    },
  },
  argTypes: {
    checked: {
      description: 'If true, the radio input is checked.',
    },
    readOnly: {
      description: 'If true, the radio input is read only.',
    },
    disabled: {
      description: 'If true, the radio input is disabled.',
    },
    onChange: {
      description: 'The callback function when the radio input is changed.',
    },
    radioProps: {
      description: 'The props passed to the base radio input.',
    },
    size: {
      description: 'The size of the radio input. `sm` or `md`.',
      options: Object.values(RadioSize),
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

const defaultArgs = {
  checked: false,
  readOnly: false,
  disabled: false,
  size: RadioSize.Sm,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: ({ ...args }) => {
    const [checkedState, setCheckedState] = useState(false);

    return <Radio {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
  },
};

export const Sizes: Story = {
  args: { ...defaultArgs, size: RadioSize.Sm },
  render: (args) => {
    const [checkedSm, setCheckedSm] = useState(true);
    const [checkedMd, setCheckedMd] = useState(false);

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Radio {...args} checked={checkedSm} onChange={(event) => setCheckedSm(event.target.checked)} />
        <Radio
          {...args}
          checked={checkedMd}
          size={RadioSize.Md}
          onChange={(event) => setCheckedMd(event.target.checked)}
        />
      </div>
    );
  },
};
