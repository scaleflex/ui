import React from 'react';
import type { Meta, Story } from '@storybook/react';
import UploadIcon from '@scaleflex/icons/upload';
import MoreDetails from '@scaleflex/icons/more-details';
import Remove from '@scaleflex/icons/remove';
import type { IconProps } from '@scaleflex/icons/icon.props';
import { ButtonType, SideBar } from '@scaleflex/ui/core/button/types';
import _Button, { ButtonProps } from '../../src/core/button';
import { ButtonSize, ButtonColor } from '../../src/utils/types';
import { StoryGroup } from './types';

export const Button = _Button;

export default {
  title: `${StoryGroup.Inputs}/Button`,
  component: Button,
  excludeStories: ['Button'],

  argTypes: {
    startIcon: {
      description:
        'If you want to have proper icon size to button size (md, lg, ...) you need to use icon function like `icon={(props) => <UploadIcon {...props} />}` otherwise `icon={<UploadIcon />}`',
    },
  },
} as Meta;

const defaultArgs = {
  children: 'Upload',
  size: ButtonSize.Md,
  color: ButtonColor.Secondary,
  buttonType: ButtonType.Default,
  disabled: false,
  active: false,
  loading: false,
};

const BasicTemplate: Story<ButtonProps> = ({ children, ...args }) => <Button {...args}>{children}</Button>;

//  Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

//  WithIcon
export const WithIcon = BasicTemplate.bind({});
WithIcon.args = {
  ...defaultArgs,
  startIcon: (props: IconProps) => <UploadIcon {...props} />,
};

//  WithBadge
export const WithBadge = BasicTemplate.bind({});
WithBadge.args = {
  ...defaultArgs,
  badge: '(1)',
  children: 'Select',
};

//  WithIconsAndBadge
export const WithIconsAndBadge = BasicTemplate.bind({});
WithIconsAndBadge.args = {
  ...defaultArgs,
  startIcon: (props: IconProps) => <UploadIcon {...props} />,
  badge: '(1)',
};

// Warning
export const Warning = BasicTemplate.bind({});
Warning.args = {
  ...defaultArgs,
  children: 'Delete',
  color: ButtonColor.WarningPrimary,
  startIcon: (props: IconProps) => <Remove {...props} />,
};

//  SidebarButton
export const SidebarButton = BasicTemplate.bind({});
SidebarButton.args = {
  size: ButtonSize.Md,
  children: 'Details',
  buttonType: ButtonType.Sidebar,
  sideBarType: SideBar.Left,
  active: false,
  startIcon: (props: IconProps) => <MoreDetails {...props} />,
};
