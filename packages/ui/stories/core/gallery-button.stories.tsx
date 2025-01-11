import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GalleryButton from '../../src/core/gallery-button';

const meta: Meta<typeof GalleryButton> = {
  title: 'Inputs/IconButton/GalleryButton',
  component: GalleryButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Display a gallery button.',
    },
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      description: 'if true the button is disabled.',
    },
    active: {
      description: 'if true the button is active.',
    },
  },
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
