import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SwitcherSize } from '@scaleflex/ui/core/switcher/switcher-size';

import Switcher from '../../src/core/switcher';
import SwitcherDocsTemplate from '../docs/switcher.mdx';

const meta: Meta<typeof Switcher> = {
  title: 'Inputs/Switcher',
  component: Switcher,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SwitcherDocsTemplate,
      subtitle: 'Switcher is a component that displays a switcher.',
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
    SwitcherPropsData: {
      description: 'The props for the switcher wrapper element.',
    },
    children: {
      description: 'if you want to display a text inside the switcher, you can pass it as a child.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switcher>;

const defaultArgs = {
  checked: false,
  readOnly: false,
  disabled: false,
  size: SwitcherSize.Md,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [checkedState, setCheckedState] = useState(false);

    return (
      <Switcher
        {...args}
        checked={checkedState}
        onChange={(event) => {
          setCheckedState(event.target.checked);
        }}
      />
    );
  },
};

export const WithChildren: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [checkedState, setCheckedState] = useState(false);

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
  },
};

export const Sizes: Story = {
  args: { ...defaultArgs, size: SwitcherSize.Sm },
  render: (args) => {
    const [checkedSm, setCheckedSm] = useState(false);
    const [checkedMd, setCheckedMd] = useState(false);

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Switcher
          {...args}
          checked={checkedSm}
          onChange={(event) => {
            setCheckedSm(event.target.checked);
          }}
        />
        <Switcher
          {...args}
          checked={checkedMd}
          size={SwitcherSize.Md}
          onChange={(event) => {
            setCheckedMd(event.target.checked);
          }}
        />
      </div>
    );
  },
};
