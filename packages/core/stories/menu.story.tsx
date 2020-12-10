import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Menu, { MenuProps } from '../src/menu';
import MenuItem from '../src/menu-item';
import Button from '../src/button';
import { StoryGroup } from './types';

export const Menu = _Menu;

export default {
  title: `${StoryGroup.Navigation}/Menu`,
  component: Menu,
  excludeStories: ['Menu'],

  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    }
  }
} as Meta;

const defaultArgs = {
  fullWidth: false,
};

const BasicTemplate: Story<MenuProps> = ({
  ...args
}) => {
  const [anchorEl, setAnchorEl] = useState(undefined);
  const handleClick = (event: any): void => setAnchorEl(event.currentTarget);
  const handleClose = (): void => setAnchorEl(undefined);

  return (
    <div>
      <Button
        onClick={handleClick}
        color="link"
      >
        Open menu
      </Button>

      <Menu
        {...args}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Item 1</MenuItem>
        <MenuItem onClick={handleClose}>Item 2</MenuItem>
        <MenuItem onClick={handleClose}>Item 3</MenuItem>
      </Menu>
    </div>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
