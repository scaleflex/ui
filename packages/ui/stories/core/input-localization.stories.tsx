import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LanguagesIcon from '@scaleflex/icons/languages';
import type { IconProps } from '@scaleflex/icons/icon.props';
import InputLocalization from '../../src/core/input-localization';
import MenuItem from '../../src/core/menu-item';
import { InputSize } from '../../src/utils/types';

const meta: Meta<typeof InputLocalization> = {
  title: 'Inputs/InputLocalization',
  component: InputLocalization,
  excludeStories: ['InputLocalization'],

  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputLocalization>;

const defaultArgs = {
  readOnly: false,
  disabled: false,
  size: InputSize.Md,
};

const options = ['France', 'Germany', 'Ukraine'];

const BasicTemplate = ({ ...args }): JSX.Element => {
  const [value, setValue] = useState(args.multiple ? [options[0]] : options[0]);

  return (
    <InputLocalization {...args} value={value} onChange={(ev: any) => setValue(ev)}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </InputLocalization>
  );
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};

export const Multiple: Story = {
  args: { ...defaultArgs, multiple: true },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIcon: Story = {
  args: {
    ...defaultArgs,
    icon: (props: IconProps) => <LanguagesIcon {...props} />,
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIconAndCustomLabel: Story = {
  args: {
    ...defaultArgs,
    icon: <LanguagesIcon size={12} />,
    renderLabel: (value: string) => `Value: ${value}`,
  },
  render: (args) => <BasicTemplate {...args} />,
};
