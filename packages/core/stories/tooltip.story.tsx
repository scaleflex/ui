import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Button from '../src/button';
import _Tooltip, { TooltipProps } from '../src/tooltip';
import { Size } from '../src/tooltip/types';
import { StoryGroup } from './types';

export const Tooltip = _Tooltip;

export default {
  title: `${StoryGroup.DataDisplay}/Tooltip`,
  component: Tooltip,
  excludeStories: ['Tooltip'],
} as Meta;

const defaultArgs = {
  title: 'Tooltip text',
  size: Size.Sm,
};

const BasicTemplate: Story<TooltipProps> = (args) => (
  <div style={{ display: 'flex', margin: '40px 40px 0 0' }}>
    <Tooltip {...args} position="right">
      <Button color="secondary" size="sm">Right</Button>
    </Tooltip>
    &nbsp;

    <Tooltip {...args} position="top">
      <Button color="secondary" size="sm">Top</Button>
    </Tooltip>
    &nbsp;

    <Tooltip {...args} position="bottom">
      <Button color="secondary" size="sm">Bottom</Button>
    </Tooltip>
    &nbsp;

    <Tooltip {...args} position="left">
      <Button color="secondary" size="sm">Left</Button>
    </Tooltip>
  </div>
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
