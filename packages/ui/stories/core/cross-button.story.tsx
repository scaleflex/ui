import React from 'react';
import type { Meta, Story } from '@storybook/react';
import CrossOutline from '@scaleflex/icons/cross-outline';
import type { IconProps } from '@scaleflex/icons/icon.props';
import _CrossButton, { CrossButtonProps } from '../../src/core/cross-button';
import { Size } from '../../src/core/cross-button/types';
import { StoryGroup } from './types';

export const CrossButton = _CrossButton;

export default {
  title: `${StoryGroup.Inputs}/CrossButton`,
  component: CrossButton,
  excludeStories: ['CrossButton'],
} as Meta;

const defaultArgs = {
  size: Size.Lg,
  children: (props: IconProps) => <CrossOutline {...props} />,
};

const BasicTemplate: Story<CrossButtonProps> = ({ children, ...args }) => <CrossButton {...args}>{children}</CrossButton>;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
