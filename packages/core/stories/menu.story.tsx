import React, { FormEvent, useState } from 'react';
import type { Meta, Story } from '@storybook/react';
// import FlagIcon from '@sfx-ui/icons/flag';
import _Menu, { MenuProps } from '../src/menu';
import MenuItem from '../src/menu-item';
import Button from '../src/button';
import { StoryGroup } from './types';

export const Menu = _Menu;

export default {
  title: `${StoryGroup.DataDisplay}/Menu`,
  component: Menu,
  excludeStories: ['Menu'],
} as Meta;

const defaultArgs = {
  // open: false,
};

const BasicTemplate: Story<MenuProps> = ({
  ...args
}) => {
  const [anchorEl, setAnchorEl] = useState(undefined);
  const handleClick = (event): void => setAnchorEl(event.currentTarget);
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
        fullWidth
      >
        <MenuItem onClick={handleClose}>Menu item 1</MenuItem>
        <MenuItem onClick={handleClose}>Menu item 2</MenuItem>
        <MenuItem onClick={handleClose}>Menu item 3</MenuItem>
      </Menu>
    </div>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// // Active
// export const Active = BasicTemplate.bind({});
// Active.args = {
//   ...defaultArgs,
//   active: true,
// };

// // WithIcon
// export const WithIcon = BasicTemplate.bind({});
// WithIcon.args = {
//   ...defaultArgs,
//   icon: (props) => <FlagIcon {...props} />,
// };

// // ActiveWithIcon
// export const ActiveWithIcon = BasicTemplate.bind({});
// ActiveWithIcon.args = {
//   ...defaultArgs,
//   active: true,
//   icon: (props) => <FlagIcon {...props} />,
// };
