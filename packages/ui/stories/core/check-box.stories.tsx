import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Size, Type } from '../../src/core/check-box/types';
import _CheckBox, { CheckBoxProps } from '../../src/core/check-box';

export const CheckBox = _CheckBox;

const meta: Meta<typeof CheckBox> = {
  title: 'Inputs/CheckBox',
  component: CheckBox,
  excludeStories: ['CheckBox'],
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

const defaultArgs = {
  checked: false,
  readOnly: false,
  disabled: false,
  size: Size.Md,
  type: Type.Checkbox,
};

const BasicTemplate = ({ checked, ...args }: CheckBoxProps): JSX.Element => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return <CheckBox {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate {...args} />,
};
