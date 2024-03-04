import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import { Type } from '@scaleflex/ui/core/input/types';
import CensorIcon from '@scaleflex/icons/censor';
import SearchIcon from '@scaleflex/icons/search';
import Success from '@scaleflex/icons/success';

import _Input, { InputProps } from '../../src/core/input';
import { InputSize } from '../../src/utils/types';
import { StoryGroup } from './types';

export const Input = _Input;

export default {
  // title: `${StoryGroup.Inputs}/Input`,
  component: Input,
  excludeStories: ['Input'],
} as Meta;

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

const BasicTemplate: Story<InputProps> = ({ ...args }) => {
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

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// WithIconStart
export const WithIconStart = BasicTemplate.bind({});
WithIconStart.args = {
  ...defaultArgs,
  iconStart: (props: any) => <SearchIcon {...props} />,
};

// WithIconEnd
export const WithIconEnd = BasicTemplate.bind({});
WithIconEnd.args = {
  ...defaultArgs,
  iconEnd: (props: any) => <CensorIcon {...props} />,
};

// WithIcons
export const WithIcons = BasicTemplate.bind({});
WithIcons.args = {
  ...defaultArgs,
  iconStart: (props: any) => <SearchIcon {...props} />,
  iconEnd: (props: any) => <CensorIcon {...props} />,
};

// WithIconChange
export const WithIconChange = BasicTemplate.bind({});
WithIconChange.args = {
  ...defaultArgs,
  iconChange: (props: any) => <Success {...props} />,
};

// WithPassword
export const WithPassword = BasicTemplate.bind({});
WithPassword.args = {
  ...defaultArgs,
  placeholder: 'Enter your password',
  inputType: Type.Password,
};
