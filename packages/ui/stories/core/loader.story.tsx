import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _Loader, { LoaderProps } from '../../src/core/loader';
import { StoryGroup } from './types';

export const Loader = _Loader;

export default {
  title: `${StoryGroup.Feedback}/Loader`,
  component: Loader,
  excludeStories: ['Loader'],
} as Meta;

const defaultArgs = {};

const BasicTemplate: Story<LoaderProps> = ({
  ...args
}) => (
  <Loader {...args} />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
