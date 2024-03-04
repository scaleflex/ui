import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import type { IconProps } from '@scaleflex/icons/icon.props';
import InfoOutline from '@scaleflex/icons/info-outline';

import { LabelPosition } from '../../src/core/check-box-group/types';
import { Size, Type } from '../../src/core/check-box/types';

import _CheckBoxGroup, { CheckBoxGroupProps } from '../../src/core/check-box-group';
import { StoryGroup } from './types';

export const CheckBoxGroup = _CheckBoxGroup;

export default {
  // title: `${StoryGroup.Inputs}/Checkbox/CheckBoxGroup`,
  component: CheckBoxGroup,
  excludeStories: ['CheckBoxGroup'],

  argTypes: {
    checkProps: {
      description: 'input attributes applied directly input element.',
    },
    icon: {
      description:
        'To customize an icon you can do like `icon={(props) => <QuestionMarkOutline {...props} />}` otherwise `icon={<QuestionMarkOutline />}`',
    },
  },
} as Meta;

const defaultArgs = {
  label: 'label',
  checked: false,
  readOnly: false,
  disabled: false,
  labelPosition: LabelPosition.After,
  size: Size.Sm,
  type: Type.Checkbox,
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

// WithIcons
export const WithIcon = BasicTemplate.bind({});
WithIcon.args = {
  ...defaultArgs,
  // title: 'Tooltip text',
  icon: (props: IconProps) => <InfoOutline {...props} />,
};
