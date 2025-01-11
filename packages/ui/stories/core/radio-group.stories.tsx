import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioSize } from '@scaleflex/ui/core/radio';

import RadioGroup from '../../src/core/radio-group';
import RadioGroupDocsTemplate from '../docs/radio-group.mdx';

const meta: Meta<typeof RadioGroup> = {
  title: 'Inputs/Radio/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: RadioGroupDocsTemplate,
      subtitle: 'Radio input allow users to select one option from a list.',
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
    label: {
      description: 'The label of the radio group.',
    },
    labelStyles: {
      description: 'The styles of the label.',
    },
    radioStyles: {
      description: 'The styles of the radio input.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const defaultArgs = {
  label: 'Group',
  checked: false,
  readOnly: false,
  disabled: false,
  size: RadioSize.Sm,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [checkedState, setCheckedState] = useState(false);

    return <RadioGroup {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
  },
};
