import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioSize } from '@scaleflex/ui/core/radio';

import RadioGroup, { RadioGroupProps } from '../../src/core/radio-group';

const meta: Meta<typeof RadioGroup> = {
  title: 'Inputs/Radio/RadioGroup',
  component: RadioGroup,
  excludeStories: ['RadioGroup'],
  argTypes: {
    radioProps: {
      description: 'input attributes applied directly input element.',
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

const BasicTemplate = ({ checked, ...args }: RadioGroupProps): JSX.Element => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return <RadioGroup {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
