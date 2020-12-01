import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _CheckBox, { CheckBoxProps } from '../src/check-box';

export const CheckBox = _CheckBox;

export default {
  title: 'Inputs/CheckBox',
  component: CheckBox,
  excludeStories: ['CheckBox'],
} as Meta;

const defaultArgs = {
  checked: false
};

const BasicTemplate: Story<CheckBoxProps> = ({
  checked, ...args
}) => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return (
    <CheckBox
      {...args}
      checked={checkedState}
      onChange={(event) => setCheckedState(event.target.checked)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
