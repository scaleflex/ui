import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Switcher, { SwitcherProps } from '../../src/core/switcher';
import { StoryGroup } from './types';

export const Switcher = _Switcher;

export default {
  title: `${StoryGroup.Inputs}/Switcher`,
  component: Switcher,
  excludeStories: ['Switcher'],
} as Meta;

const defaultArgs = {
  checked: false,
  readOnly: false,
  disabled: false,
};

const BasicTemplate: Story<SwitcherProps> = ({ checked, ...args }) => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return <Switcher {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
