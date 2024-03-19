import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Popup, { PopupProps } from '../../src/core/popup';
import Button from '../../src/core/button';
import { Status } from '../../src/core/popup-status/types';
import { Horizontal, Vertical } from '../../src/core/popup/types';

const meta: Meta<typeof Popup> = {
  title: 'Feedback/Popup',
  component: Popup,
  excludeStories: ['Popup'],
};

export default meta;
type Story = StoryObj<typeof Popup>;

const defaultArgs = {
  message: 'New folder “2022 annual event” was created',
  status: Status.Success,
  open: false,
};

const BasicTemplate = ({ open, ...args }: PopupProps): JSX.Element => {
  const [openState, setOpenState] = useState(open || false);

  useEffect(() => {
    setOpenState(open || false);
  }, [open]);

  return (
    <>
      <Button color="basic" size="sm" onClick={() => setOpenState(!openState)}>
        Open simple popup
      </Button>
      <Popup {...args} open={openState} autoHideDuration={3000} onClose={() => setOpenState(false)} />
    </>
  );
};

export const BottomLeft: Story = {
  args: {
    ...defaultArgs,
    anchorOrigin: {
      vertical: Vertical.Bottom,
      horizontal: Horizontal.Left,
    },
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const BottomCenter: Story = {
  args: {
    ...defaultArgs,
    anchorOrigin: {
      vertical: Vertical.Bottom,
      horizontal: Horizontal.Center,
    },
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const BottomRight: Story = {
  args: {
    ...defaultArgs,
    anchorOrigin: {
      vertical: Vertical.Bottom,
      horizontal: Horizontal.Right,
    },
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const TopLeft: Story = {
  args: {
    ...defaultArgs,
    anchorOrigin: {
      vertical: Vertical.Top,
      horizontal: Horizontal.Left,
    },
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const TopCenter: Story = {
  args: {
    ...defaultArgs,
    anchorOrigin: {
      vertical: Vertical.Top,
      horizontal: Horizontal.Center,
    },
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const TopRight: Story = {
  args: {
    ...defaultArgs,
    anchorOrigin: {
      vertical: Vertical.Top,
      horizontal: Horizontal.Right,
    },
  },
  render: (args) => <BasicTemplate {...args} />,
};
