import React from 'react';
import type { Meta, Story } from '@storybook/react';

import _Popper, { PopperProps } from '../../src/core/popper';

import { StoryGroup } from './types';

export const Popper = _Popper;

export default {
  title: `${StoryGroup.Surfaces}/Popper`,
  component: Popper,
  excludeStories: ['Popper'],
} as Meta;

const defaultArgs = {
  position: 'top'
};

const style = {
  border: '1px solid',
  padding: '8px',
  backgroundColor: '#37414b',
  color: 'white'
};

const BasicTemplate: Story<PopperProps> = ({
  ...args
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const handleClick = (event:React.MouseEvent<HTMLButtonElement>):void => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper {...args} id={id} open={open} anchorEl={anchorEl}>
        <div style={style}>The content of the Popper.</div>
      </Popper>
    </div>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
