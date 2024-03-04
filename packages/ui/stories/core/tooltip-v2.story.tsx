import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Button from '../../src/core/button';
import _TooltipV2, { TooltipV2Props } from '../../src/core/tooltip-v2';
import { Size } from '../../src/core/tooltip/types';
import { StoryGroup } from './types';

export const TooltipV2 = _TooltipV2;

export default {
  // title: `${StoryGroup.DataDisplay}/TooltipV2`,
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
} as Meta;

const defaultArgs = {
  // title: 'Tooltip text',
  size: Size.Sm,
  arrow: true,
  warning: false,
  enableHover: true,
  position: 'top',
  offsetX: 0,
  offsetY: 10,
};

const BasicTemplate: Story<TooltipV2Props> = (args) => (
  <div style={{ margin: '50px 0 0 100px' }}>
    <TooltipV2 {...args}>
      <Button color="secondary" size="sm">
        tooltip
      </Button>
    </TooltipV2>
  </div>
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
