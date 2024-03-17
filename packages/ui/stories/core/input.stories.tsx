import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Type } from '@scaleflex/ui/core/input/types';
import CensorIcon from '@scaleflex/icons/censor';
import SearchIcon from '@scaleflex/icons/search';
import Success from '@scaleflex/icons/success';

import Input from '../../src/core/input';
import { InputSize } from '../../src/utils/types';

const meta: Meta<typeof Input> = {
  title: 'Inputs/Input',
  component: Input,
  excludeStories: ['Input'],
};

export default meta;
type Story = StoryObj<typeof Input>;

const defaultArgs = {
  size: InputSize.Md,
  placeholder: 'placeholder',
  hideCopyIcon: false,
  readOnly: false,
  disabled: false,
  focusOnClick: true,
  copyTextMessage: 'Link copied to clipboard',
  copySuccessIcon: <Success size={16} />,
};

const BasicTemplate = ({ ...args }) => {
  const [value, setValue] = useState('Text');

  return (
    <div style={{ marginTop: 40 }}>
      <Input
        {...args}
        value={value}
        onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => setValue(currentTarget.value)}
      />
    </div>
  );
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIconStart: Story = {
  args: {
    ...defaultArgs,
    iconStart: (props: any) => <SearchIcon {...props} />,
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIconEnd: Story = {
  args: {
    ...defaultArgs,
    iconEnd: (props: any) => <CensorIcon {...props} />,
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIcons: Story = {
  args: {
    ...defaultArgs,
    iconStart: (props: any) => <SearchIcon {...props} />,
    iconEnd: (props: any) => <CensorIcon {...props} />,
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIconChange: Story = {
  args: {
    ...defaultArgs,
    iconChange: (props: any) => <Success {...props} />,
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithPassword: Story = {
  args: {
    ...defaultArgs,
    placeholder: 'Enter your password',
    inputType: Type.Password,
  },
  render: (args) => <BasicTemplate {...args} />,
};
