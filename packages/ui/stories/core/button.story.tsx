import React from 'react';
import type { Meta, Story } from '@storybook/react';
import UploadIcon from '@scaleflex/icons/upload';
import _Button, { ButtonProps } from '../../src/core/button';
import { Size, Color } from '../../src/core/button/types';
import { StoryGroup } from './types';

export const Button = _Button;

export default {
  title: `${StoryGroup.Inputs}/Button`,
  component: Button,
  excludeStories: ['Button'],

  argTypes: {
    icon: {
      description: 'If you want to have proper icon size to button size (md, lg, ...) you need to use icon function like `icon={(props) => <UploadIcon {...props} />}` otherwise `icon={<UploadIcon />}`'
    }
  }
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
