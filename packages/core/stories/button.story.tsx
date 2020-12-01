import React from 'react';
import type { Meta, Story } from '@storybook/react';
import UploadIcon from '@sfx-ui/icons/upload';
import _Button, { ButtonProps } from '../src/button';
import { Size, Color, Status } from '../src/button/types';

export const Button = _Button;

export default {
  title: 'Inputs/Button',
  component: Button,
  excludeStories: ['Button'],
} as Meta;

const defaultArgs = {
  children: 'Upload',
  size: Size.Md,
  color: Color.Secondary,
  status: Status.Stateless,
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
