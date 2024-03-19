import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../src/core/button';
import _Tooltip, { TooltipProps } from '../../src/core/tooltip';
import { Size } from '../../src/core/tooltip/types';

export const Tooltip = _Tooltip;

const meta: Meta<typeof Tooltip> = {
  title: 'DataDisplay/Tooltip',
  component: Tooltip,
  argTypes: {
    enterDelay: {
      description: 'Set delay time in milliseconds',
    },
    leaveDelay: {
      description: 'Set delay time in milliseconds',
    },
  },
  excludeStories: ['Tooltip'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const defaultArgs = {
  // title: 'Tooltip text',
  size: Size.Sm,
  arrow: true,
  warning: false,
  stayOpen: false,
};

const BasicTemplate = (args: TooltipProps): JSX.Element => (
  <div style={{ display: 'flex', marginTop: 40 }}>
    <Tooltip {...args} position="right">
      <Button color="secondary" size="sm">
        Right
      </Button>
    </Tooltip>
    &nbsp;
    <Tooltip {...args} position="top">
      <Button color="secondary" size="sm">
        Top
      </Button>
    </Tooltip>
    &nbsp;
    <Tooltip {...args} position="bottom">
      <Button color="secondary" size="sm">
        Bottom
      </Button>
    </Tooltip>
    &nbsp;
    <Tooltip {...args} position="left">
      <Button color="secondary" size="sm">
        Left
      </Button>
    </Tooltip>
  </div>
);

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
