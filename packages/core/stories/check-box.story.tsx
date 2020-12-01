import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _CheckBox, { CheckBoxProps } from '../src/check-box';

export const CheckBox = _CheckBox;

export default {
  title: 'Inputs/CheckBox',
  component: CheckBox,
  excludeStories: ['CheckBox'],
} as Meta;

const defaultArgs = {
  // checked: false
};

const BasicTemplate: Story<CheckBoxProps> = ({
  ...args
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckBox
      {...args}
      checked={checked}
      onChange={(newValue) => setChecked(newValue)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
