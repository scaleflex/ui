import React from 'react';
import type { Meta, Story } from '@storybook/react';
import UploadIcon from '@scaleflex/icons/upload';
import MoreDetails from '@scaleflex/icons/more-details';
import type { IconProps } from '@scaleflex/icons/icon.props';
import _Button, { ButtonProps } from '../../src/core/button';
import { ButtonSize, ButtonColor } from '../../src/utils/types';
import { ButtonTypes } from '@scaleflex/ui/core/button/types';
import { StoryGroup } from './types';

export const Button = _Button;

export default {
  title: `${StoryGroup.Inputs}/Button`,
  component: Button,
  excludeStories: ['Button'],

  argTypes: {
    icon: {
      description:
        'If you want to have proper icon size to button size (md, lg, ...) you need to use icon function like `icon={(props) => <UploadIcon {...props} />}` otherwise `icon={<UploadIcon />}`',
    },
  },
} as Meta;

const defaultArgs = {
  children: 'Upload',
  size: ButtonSize.Md,
  color: ButtonColor.Secondary,
  ButtonType: ButtonTypes.Default,
  disabled: false,
  active: false,
  loading: false,
  rightSlide: false,
  leftSlide: false,
};

const BasicTemplate: Story<ButtonProps> = ({ children, ...args }) => <Button {...args}>{children}</Button>;

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
  icon: (props: IconProps) => <UploadIcon {...props} />,
};

// WithBadge
export const WithBadge = BasicTemplate.bind({});
WithBadge.args = {
  ...defaultArgs,
  badge: '(1)',
  children: 'Select',
};

// WithIconsAndBadge
export const WithIconsAndBadge = BasicTemplate.bind({});
WithIconsAndBadge.args = {
  ...defaultArgs,
  icon: (props: IconProps) => <UploadIcon {...props} />,
  badge: '(1)',
};

// SidebarTrigger
export const SidebarTrigger = BasicTemplate.bind({});
SidebarTrigger.args = {
  ...defaultArgs,
  children: 'Details',
  ButtonType: ButtonTypes.Sidebar,
  active: true,
  rightSlide: true,
  icon: (props: IconProps) => <MoreDetails {...props} />,
};
