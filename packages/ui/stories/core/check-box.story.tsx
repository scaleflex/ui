import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _CheckBox, { CheckBoxProps } from '../../src/core/check-box';
import { StoryGroup } from './types';

export const CheckBox = _CheckBox;

export default {
  title: `${StoryGroup.Inputs}/CheckBox`,
  component: CheckBox,
  excludeStories: ['CheckBox'],
} as Meta;

const defaultArgs = {
  checked: false,
  readOnly: false,
  disabled: false,
};

const BasicTemplate: Story<CheckBoxProps> = ({ checked, ...args }) => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return <CheckBox {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
