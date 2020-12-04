import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _Loader, { LoaderProps } from '../src/loader';

export const Loader = _Loader;

export default {
  title: 'Data Display/Loader',
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
