import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import { SwitcherSize } from '@scaleflex/ui/core/switcher/switcher-size';

import _SwitcherGroup, { SwitcherGroupProps } from '../../src/core/switcher-group';
import { StoryGroup } from './types';

export const SwitcherGroup = _SwitcherGroup;

export default {
  title: `${StoryGroup.Inputs}/Switcher/SwitcherGroup`,
  component: SwitcherGroup,
  excludeStories: ['SwitcherGroup'],

  argTypes: {
    switcherProps: {
      description: 'input attributes applied directly input element.',
    },
  },
} as Meta;

const defaultArgs = {
  label: 'label',
  checked: false,
  readOnly: false,
  disabled: false,
  size: SwitcherSize.Sm,
};

const BasicTemplate: Story<SwitcherGroupProps> = ({ checked, ...args }) => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return <SwitcherGroup {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
