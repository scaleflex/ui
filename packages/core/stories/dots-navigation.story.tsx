import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _DotsNavigation, { DotsNavigationProps } from '../src/dots-navigation';

export const DotsNavigation = _DotsNavigation;

export default {
  title: 'Navigation/DotsNavigation',
  component: DotsNavigation,
  excludeStories: ['DotsNavigation'],

  argTypes: {
    activeItem: {
      description: 'Set the active item (zero based index). Set to -1 to disable all the steps.'
    }
  }
} as Meta;

const defaultArgs = {
  size: 5,
  activeItem: 1
};

const BasicTemplate: Story<DotsNavigationProps> = ({
  ...args
}) => (
  <DotsNavigation
    {...args}
  />
);

// Base
export const Base = BasicTemplate.bind({});
Base.args = { ...defaultArgs };
