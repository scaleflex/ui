import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import EllipsedText from '../../src/core/ellipsed-text';
import EllipsedTextDocsTemplate from '../docs/ellipsed-text.mdx';

const meta: Meta<typeof EllipsedText> = {
  title: 'DataDisplay/EllipsedText',
  component: EllipsedText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: EllipsedTextDocsTemplate,
      subtitle: 'Display a text with ellipsis.',
    },
  },
  argTypes: {
    textSuffix: {
      description:
        'The text suffix is displayed after the ellipsis only when the text is truncated, and it is limited to a maximum of 3 characters.',
    },
    maxLinesCount: {
      description: 'The maximum number of lines to display.',
    },
    noTooltip: {
      description: 'Whether to display the tooltip.',
    },
    children: {
      description: 'The text to display.',
    },
    element: {
      description: 'The html tag to pass to `as` attribute.',
    },
    textWrapperProps: {
      description: 'The props to pass to the text wrapper.',
    },
    tooltipProps: {
      description: 'The props to pass to the tooltip.',
    },
    tooltipTitle: {
      description: 'The title to display in the tooltip.',
    },
    customMaxHeight: {
      description: 'The custom maximum height to apply to ellipsed text.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EllipsedText>;

const defaultArgs = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ex nulla. Donec purus enim, elementum eu neque id, aliquet dapibus velit. Cras pulvinar accumsan risus nec convallis. Morbi luctus ut eros at auctor. Maecenas ornare aliquet risus a feugiat. Mauris ut pharetra purus, eget elementum sem. Aliquam erat volutpat. Duis ullamcorper blandit orci, id tincidunt massa fermentum ac. Pellentesque nisi orci, consectetur nec enim in, scelerisque pulvinar dui. Suspendisse potenti. Phasellus euismod tempus congue. Nullam sit amet maximus orci',
  maxLinesCount: 2,
  noTooltip: false,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => (
    <div style={{ maxWidth: 200 }}>
      <EllipsedText {...args}>{args.children}</EllipsedText>
    </div>
  ),
};
