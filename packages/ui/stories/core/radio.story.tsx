import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';

import _Radio, { RadioProps, RadioSize } from '../../src/core/radio';
import { StoryGroup } from './types';

export const Radio = _Radio;

export default {
  title: `${StoryGroup.Inputs}/Radio`,
  component: Radio,
  excludeStories: ['Radio'],
} as Meta;

const defaultArgs = {
  checked: false,
  readOnly: false,
  disabled: false,
  size: RadioSize.Sm,
};

const BasicTemplate: Story<RadioProps> = ({ checked, ...args }) => {
  const [checkedState, setCheckedState] = useState(checked || false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return <Radio {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
