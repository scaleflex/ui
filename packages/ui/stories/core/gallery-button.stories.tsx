import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GalleryButton from '../../src/core/gallery-button';

const meta: Meta<typeof GalleryButton> = {
  title: 'Inputs/GalleryButton',
  component: GalleryButton,
  excludeStories: ['GalleryButton'],
};

export default meta;
type Story = StoryObj<typeof GalleryButton>;

const defaultArgs = {
  disabled: false,
  active: false,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <GalleryButton {...args} />,
};
