import React from 'react';
import type { Meta, Story } from '@storybook/react';
import UploadIcon from '@sfx-ui/icons/upload';
import _Button, { ButtonProps } from '../src/button';
import { Size, Color } from '../src/button/types';
import { StoryGroup } from './types';

export const Button = _Button;

export default {
  title: `${StoryGroup.Inputs}/Button`,
  component: Button,
  excludeStories: ['Button'],
} as Meta;

const defaultArgs = {
  children: 'Upload',
  size: Size.Md,
  color: Color.Secondary,
  disabled: false,
};

const BasicTemplate: Story<ButtonProps> = ({
  children, ...args
}) => (
  <Button
    {...args}
  >
    {children}
  </Button>
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// Disabled
export const Disabled = BasicTemplate.bind({});
Disabled.args = { ...defaultArgs, disabled: true };

// WithIcon
export const WithIcon = BasicTemplate.bind({});
WithIcon.args = {
  ...defaultArgs,
  icon: (props) => <UploadIcon {...props} />,
};

// WithBadge
export const WithBadge = BasicTemplate.bind({});
WithBadge.args = {
  ...defaultArgs,
  badge: 1,
  children: 'Select',
};

// WithIconsAndBadge
export const WithIconsAndBadge = BasicTemplate.bind({});
WithIconsAndBadge.args = {
  ...defaultArgs,
  icon: (props) => <UploadIcon {...props} />,
  badge: 22,
};
