import React from 'react';
import type { Meta, Story } from '@storybook/react';
import { IconButtonProps } from '@scaleflex/ui/core/icon-button';
import _GalleryButton from '../../src/core/gallery-button';
import { StoryGroup } from './types';

export const GalleryButton = _GalleryButton;

export default {
  // title: `${StoryGroup.Inputs}/GalleryButton`,
  component: GalleryButton,
  excludeStories: ['GalleryButton'],
} as Meta;

const defaultArgs = {
  disabled: false,
  active: false,
};

const BasicTemplate: Story<IconButtonProps> = ({ ...args }) => <GalleryButton {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
