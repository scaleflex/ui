import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Button from '../../src/core/button';
import _TippyTooltip, { TippyTooltipProps } from '../../src/core/tippy-tooltip';
import { Size } from '../../src/core/tooltip/types';
import { StoryGroup } from './types';

export const TippyTooltip = _TippyTooltip;

export default {
  title: `${StoryGroup.DataDisplay}/TippyTooltip`,
  component: TippyTooltip,
  argTypes: {
    enterDelay: {
      description: 'Set delay time in milliseconds',
    },
    leaveDelay: {
      description: 'Set delay time in milliseconds',
    },
  },
  excludeStories: ['TippyTooltip'],
} as Meta;

const defaultArgs = {
  title: 'Tooltip text',
  size: Size.Sm,
  arrow: true,
  warning: false,
  enableHover: true,
  position: 'top',
  shitXDirection: 0,
  shitYDirection: 10,
};

const BasicTemplate: Story<TippyTooltipProps> = (args) => (
  <div style={{ marginTop: 50 }}>
    <TippyTooltip {...args}>
      <Button color="secondary" size="sm">
        tooltip
      </Button>
    </TippyTooltip>
  </div>
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
