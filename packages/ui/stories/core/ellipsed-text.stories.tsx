import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import EllipsedText, { EllipsedTextProps } from '../../src/core/ellipsed-text';

const meta: Meta<typeof EllipsedText> = {
  title: 'DataDisplay/EllipsedText',
  component: EllipsedText,
  excludeStories: ['EllipsedText'],
};

export default meta;
type Story = StoryObj<typeof EllipsedText>;

const defaultArgs = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ex nulla. Donec purus enim, elementum eu neque id, aliquet dapibus velit. Cras pulvinar accumsan risus nec convallis. Morbi luctus ut eros at auctor. Maecenas ornare aliquet risus a feugiat. Mauris ut pharetra purus, eget elementum sem. Aliquam erat volutpat. Duis ullamcorper blandit orci, id tincidunt massa fermentum ac. Pellentesque nisi orci, consectetur nec enim in, scelerisque pulvinar dui. Suspendisse potenti. Phasellus euismod tempus congue. Nullam sit amet maximus orci',
  maxLinesCount: 2,
  noTooltip: false,
};

const BasicTemplate = (args: EllipsedTextProps): JSX.Element => {
  return (
    <div style={{ maxWidth: 200 }}>
      <EllipsedText {...args}>{args.children}</EllipsedText>
    </div>
  );
};
export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
