import React from 'react';
import { StoryObj } from '@storybook/react';

import PaletteDocsTemplate from '../docs/palette.mdx';

const meta = {
  title: 'Theme/Palette',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'The palette enables you to modify the color of the components.',
      page: PaletteDocsTemplate,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <div>No Story Provided</div>,
};
