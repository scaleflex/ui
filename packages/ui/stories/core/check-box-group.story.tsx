import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import { LabelPosition } from '@scaleflex/ui/core/check-box-group/types';
import _CheckBoxGroup, { CheckBoxGroupProps } from '../../src/core/check-box-group';
import { StoryGroup } from './types';

export const CheckBoxGroup = _CheckBoxGroup;

export default {
  title: `${StoryGroup.Inputs}/Checkbox/CheckBoxGroup`,
  component: CheckBoxGroup,
  excludeStories: ['CheckBoxGroup'],
  argTypes: {
    checkProps: {
      description: 'input attributes applied directly input element.',
    },
  },
} as Meta;

const defaultArgs = {
  label: 'label',
  checked: false,
  readOnly: false,
  disabled: false,
  labelPosition: LabelPosition.After,
};

const BasicTemplate: Story<CheckBoxGroupProps> = ({ checked, ...args }) => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return <CheckBoxGroup {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
