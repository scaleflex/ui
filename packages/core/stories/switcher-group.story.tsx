import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _SwitcherGroup, { SwitcherGroupProps } from '../src/switcher-group';
import { StoryGroup } from './types';

export const SwitcherGroup = _SwitcherGroup;

export default {
  title: `${StoryGroup.Inputs}/SwitcherGroup`,
  component: SwitcherGroup,
  excludeStories: ['SwitcherGroup'],
} as Meta;

const defaultArgs = {
  label: 'label',
  checked: false
};

const BasicTemplate: Story<SwitcherGroupProps> = ({
  checked, ...args
}) => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return (
    <SwitcherGroup
      {...args}
      checked={checkedState}
      onChange={(event) => setCheckedState(event.target.checked)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
