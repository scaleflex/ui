import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SwitcherSize } from '@scaleflex/ui/core/switcher/switcher-size';

import SwitcherGroup, { SwitcherGroupProps } from '../../src/core/switcher-group';
import SwitcherGroupDocsTemplate from '../docs/switcher-group.mdx';

const meta: Meta<typeof SwitcherGroup> = {
  title: 'Inputs/Switcher/SwitcherGroup',
  component: SwitcherGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SwitcherGroupDocsTemplate,
      subtitle: 'SwitcherGroup is a component that displays a switcher group.',
    },
  },
  argTypes: {
    size: {
      description: 'The size of the switcher. `sm` or `md`',
      options: Object.values(SwitcherSize),
      control: {
        type: 'select',
      },
    },
    checked: {
      description: 'if true, the switcher is checked',
    },
    readOnly: {
      description: 'if true, the switcher is read only',
    },
    disabled: {
      description: 'if true, the switcher is disabled',
    },
    onChange: {
      description: 'The event handler for the switcher change event.',
    },
    switcherProps: {
      description: 'The props for the switcher input element.',
    },
    SwitcherProps: {
      description: 'Props passed directly to root element.',
    },
    label: {
      description: 'The label of the switcher group.',
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
