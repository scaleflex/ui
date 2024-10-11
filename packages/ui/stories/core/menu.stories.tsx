import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Download, Upload } from '@scaleflex/icons';

import Menu from '../../src/core/menu';
import MenuItem from '../../src/core/menu-item';
import Button from '../../src/core/button';
import MenuDocsTemplate from '../docs/menu.mdx';

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },
    anchorEl: {
      description: "An HTML element, or a function that returns one. It's used to set the position of the menu.",
    },
    position: {
      description: 'Menu Placement.',
    },
    popperOptions: {
      description: 'Options provided to the `Popper` component.',
    },
    open: {
      description: 'If true, the component is shown.',
    },
    enableOverlay: {
      description: 'Enables overlay element under Menu',
    },
    onClose: {
      description: 'Fires when menu closes',
    },
    zIndex: {
      description: 'Modifies `Popper` component z-index.',
    },
    enableUnderlayingEvent: {
      description: 'Enables clicking on any element behind overlay element.',
    },
    popperWrapperStyles: {
      description: 'Modifies `Popper` component wrapper styles',
    },
    hideScroll: {
      description: 'Hide body scroll when menu opens',
    },
    maxHeight: {
      description: 'Modifies the max height of the menu and shows scrolls if the items are overflowing.',
    },
    containerProps: {
      description: '**Deprecated** <br/> you can pass props to the root element directly.',
    },
  },
  parameters: {
    docs: {
      subtitle: 'Menus display a list of choices on temporary surfaces.',
      page: MenuDocsTemplate,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  args: {},
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState(undefined);
    const handleClick = (event: any): void => setAnchorEl(event.currentTarget);
    const handleClose = (): void => setAnchorEl(undefined);

    return (
      <div>
        <Button onClick={handleClick} color="basic">
          Basic menu
        </Button>

        <Menu {...args} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} position="top">
          <MenuItem onClick={handleClose}>Download</MenuItem>
          <MenuItem onClick={handleClose}>Upload</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
      </div>
    );
  },
};

export const PositionedMenu: Story = {
  args: {},
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState(undefined);
    const handleClick = (event: any): void => setAnchorEl(event.currentTarget);
    const handleClose = (): void => setAnchorEl(undefined);

    return (
      <div>
        <Button onClick={handleClick} color="basic">
          Positioned menu
        </Button>

        <Menu {...args} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} position="left">
          <MenuItem onClick={handleClose}>Download</MenuItem>
          <MenuItem onClick={handleClose}>Upload</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
      </div>
    );
  },
};

export const MaxHeightMenu: Story = {
  args: {},
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState(undefined);
    const handleClick = (event: any): void => setAnchorEl(event.currentTarget);
    const handleClose = (): void => setAnchorEl(undefined);

    const options = [
      'None',
      'Atria',
      'Callisto',
      'Dione',
      'Ganymede',
      'Hangouts Call',
      'Luna',
      'Oberon',
      'Phobos',
      'Pyxis',
      'Sedna',
      'Titania',
      'Triton',
      'Umbriel',
    ];

    return (
      <div>
        <Button onClick={handleClick} color="basic">
          Max height menu
        </Button>

        <Menu
          {...args}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          position="bottom"
          maxHeight={300}
        >
          {options.map((item) => (
            <MenuItem key={item} onClick={handleClose}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  },
};

export const SubListMenu: Story = {
  args: {},
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState(undefined);
    const handleClick = (event: any): void => setAnchorEl(event.currentTarget);
    const handleClose = (): void => setAnchorEl(undefined);

    return (
      <div>
        <Button onClick={handleClick} color="basic">
          Sub list menu
        </Button>

        <Menu {...args} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem
            list={[
              {
                content: 'Download',
                onClick: () => console.log('Downloading'),
                prefix: () => <Download width="14" height="14" color="#768A9F" />,
                subList: [
                  { content: 'Original', key: 'ORIGINAL' },
                  {
                    content: 'divider',
                    key: 'ITEM1.1_DIVIDER',
                  },
                  { content: 'Transformation', key: 'TRANSFORMATION', onClick: () => console.log('Transformingg') },
                ],
                key: 'DOWNLOAD',
              },
              {
                content: 'Upload',
                prefix: () => <Upload width="14" height="14" color="#768A9F" />,
                key: 'UPLOAD',
              },
            ]}
          />
        </Menu>
      </div>
    );
  },
};
