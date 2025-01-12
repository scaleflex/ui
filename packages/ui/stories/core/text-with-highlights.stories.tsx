import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TextWithHighlights from '../../src/core/text-with-highlights';
import TextWithHighlightsDocsTemplate from '../docs/text-with-highlights.mdx';

const meta: Meta<typeof TextWithHighlights> = {
  title: 'Feedback/TextWithHighlights',
  component: TextWithHighlights,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Highlights words in text',
      page: TextWithHighlightsDocsTemplate,
    },
  },
  argTypes: {
    text: {
      description: 'Text to be shown',
    },
    highlightText: {
      description: 'Part of the text that you want to highlight',
    },
    highlightBackgroundColor: {
      description: 'Background color for the highlighted part',
      control: {
        type: 'color',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextWithHighlights>;

const defaultArgs = {
  text: 'Scaleflex',
  highlightText: 'Scale',
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <TextWithHighlights {...args} />,
};
