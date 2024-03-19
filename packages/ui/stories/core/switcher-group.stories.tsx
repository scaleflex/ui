import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SwitcherSize } from '@scaleflex/ui/core/switcher/switcher-size';

import SwitcherGroup, { SwitcherGroupProps } from '../../src/core/switcher-group';

const meta: Meta<typeof SwitcherGroup> = {
  title: 'Inputs/Switcher/SwitcherGroup',
  component: SwitcherGroup,
  excludeStories: ['SwitcherGroup'],

  argTypes: {
    switcherProps: {
      description: 'input attributes applied directly input element.',
    },
    SwitcherProps: {
      description: 'Props passed directly to root element.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwitcherGroup>;

const defaultArgs = {
  label: 'Group',
  checked: false,
  readOnly: false,
  disabled: false,
  size: SwitcherSize.Sm,
};

const BasicTemplate = ({ checked, ...args }: SwitcherGroupProps): JSX.Element => {
  const [checkedState, setCheckedState] = useState(false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return <SwitcherGroup {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
