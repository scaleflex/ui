import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../src/core/button';
import TooltipV2, { TooltipV2Props } from '../../src/core/tooltip-v2';
import { Size } from '../../src/core/tooltip/types';
import { Position } from '../../src/core/tooltip-v2/types';

const meta: Meta<typeof TooltipV2> = {
  title: 'DataDisplay/TooltipV2',
  component: TooltipV2,
  argTypes: {
    enterDelay: {
      description: 'Set delay time in milliseconds',
    },
    leaveDelay: {
      description: 'Set delay time in milliseconds',
    },
  },
  excludeStories: ['TooltipV2'],
};

export default meta;
type Story = StoryObj<typeof TooltipV2>;

const defaultArgs = {
  size: Size.Sm,
  arrow: true,
  warning: false,
  info: false,
  enableHover: true,
  position: Position.Top,
  offsetX: 0,
  offsetY: 10,
};

const BasicTemplate = (args: TooltipV2Props): JSX.Element => (
  <div style={{ margin: '50px 0 0 100px' }}>
    <TooltipV2 {...args}>
      <Button color="secondary" size="sm">
        tooltip
      </Button>
    </TooltipV2>
  </div>
);

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
