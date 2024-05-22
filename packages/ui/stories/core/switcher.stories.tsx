import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SwitcherSize } from '@scaleflex/ui/core/switcher/switcher-size';

import Switcher, { SwitcherProps } from '../../src/core/switcher';

const meta: Meta<typeof Switcher> = {
  title: 'Inputs/Switcher',
  component: Switcher,
  excludeStories: ['Switcher'],
};

export default meta;
type Story = StoryObj<typeof Switcher>;

const defaultArgs = {
  checked: false,
  readOnly: false,
  disabled: false,
  size: SwitcherSize.Sm,
};

const BasicTemplate = ({ checked, ...args }: SwitcherProps): JSX.Element => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return (
    <Switcher
      {...args}
      checked={checkedState}
      onChange={(event) => {
        setCheckedState(event.target.checked);
      }}
    />
  );
};

const WithChildrenTemplate = ({ checked, ...args }: SwitcherProps): JSX.Element => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return (
    <Switcher
      {...args}
      checked={checkedState}
      onChange={(event) => {
        setCheckedState(event.target.checked);
      }}
    >
      {checkedState ? 'on' : 'off'}
    </Switcher>
  );
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithChildren: Story = {
  args: { ...defaultArgs },
  render: (args) => <WithChildrenTemplate {...args} />,
};
