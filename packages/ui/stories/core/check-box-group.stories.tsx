import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { IconProps } from '@scaleflex/icons/icon.props';
import InfoOutline from '@scaleflex/icons/info-outline';

import { LabelPosition } from '../../src/core/check-box-group/types';
import { Size, Type } from '../../src/core/check-box/types';

import _CheckBoxGroup, { CheckBoxGroupProps } from '../../src/core/check-box-group';

export const CheckBoxGroup = _CheckBoxGroup;

const meta: Meta<typeof CheckBoxGroup> = {
  title: 'Inputs/Checkbox/CheckBoxGroup',
  component: CheckBoxGroup,
  excludeStories: ['CheckBoxGroup'],
  argTypes: {
    checkBoxProps: {
      description: 'input attributes applied directly input element.',
    },
    icon: {
      description:
        'To customize an icon you can do like `icon={(props) => <QuestionMarkOutline {...props} />}` otherwise `icon={<QuestionMarkOutline />}`',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBoxGroup>;

const defaultArgs = {
  label: 'label',
  checked: false,
  readOnly: false,
  disabled: false,
  labelPosition: LabelPosition.After,
  size: Size.Sm,
  type: Type.Checkbox,
};

const BasicTemplate = ({ checked, ...args }: CheckBoxGroupProps): JSX.Element => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return <CheckBoxGroup {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIcon: Story = {
  args: {
    ...defaultArgs,
    icon: (props: IconProps) => <InfoOutline {...props} />,
  },
  render: (args) => <BasicTemplate {...args} />,
};
