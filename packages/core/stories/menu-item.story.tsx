import React from 'react';
import type { Meta, Story } from '@storybook/react';
import FlagIcon from '@sfx-ui/icons/flag';
import _MenuItem, { MenuItemProps } from '../src/menu-item';
import { Size } from '../src/menu-item/types';
import { StoryGroup } from './types';

export const MenuItem = _MenuItem;

export default {
  title: `${StoryGroup.DataDisplay}/MenuItem`,
  component: MenuItem,
  excludeStories: ['MenuItem'],
} as Meta;

const defaultArgs = {
  size: Size.Md,
  children: 'France',
  active: false,
};

const BasicTemplate: Story<MenuItemProps> = ({
  ...args
}) => (
  <MenuItem {...args} />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// Active
export const Active = BasicTemplate.bind({});
Active.args = {
  ...defaultArgs,
  active: true,
};

// WithIcon
export const WithIcon = BasicTemplate.bind({});
WithIcon.args = {
  ...defaultArgs,
  icon: (props) => <FlagIcon {...props} />,
};

// ActiveWithIcon
export const ActiveWithIcon = BasicTemplate.bind({});
ActiveWithIcon.args = {
  ...defaultArgs,
  active: true,
  icon: (props) => <FlagIcon {...props} />,
};
