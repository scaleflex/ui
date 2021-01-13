import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Popup, { PopupProps } from '../../src/core/popup';
import Button from '../../src/core/button';
import { Status } from '../../src/core/robot/types';
import { Horizontal, Vertical } from '../../src/core/popup/types';
import { StoryGroup } from './types';

export const Popup = _Popup;

export default {
  title: `${StoryGroup.Feedback}/Popup`,
  component: Popup,
  excludeStories: ['Popup'],
} as Meta;

const defaultArgs = {
  message: 'New folder “2022 annual event” was created',
  status: Status.Happy,
  open: false,
};

const BasicTemplate: Story<PopupProps> = ({
  open, ...args
}) => {
  const [openState, setOpenState] = useState(open || false);

  useEffect(() => {
    setOpenState(open || false);
  }, [open]);

  return (
    <>
      <Button color="link" size="sm" onClick={() => setOpenState(!openState)}>Open simple popup</Button>
      <Popup
        {...args}
        open={openState}
        autoHideDuration={3000}
        onClose={() => setOpenState(false)}
      />
    </>
  );
};

// BottomLeft
export const BottomLeft = BasicTemplate.bind({});
BottomLeft.args = {
  ...defaultArgs,
  anchorOrigin: {
    vertical: Vertical.Bottom,
    horizontal: Horizontal.Left
  },
};

// BottomCenter
export const BottomCenter = BasicTemplate.bind({});
BottomCenter.args = {
  ...defaultArgs,
  anchorOrigin: {
    vertical: Vertical.Bottom,
    horizontal: Horizontal.Center
  },
};

// BottomRight
export const BottomRight = BasicTemplate.bind({});
BottomRight.args = {
  ...defaultArgs,
  anchorOrigin: {
    vertical: Vertical.Bottom,
    horizontal: Horizontal.Right
  },
};

// TopLeft
export const TopLeft = BasicTemplate.bind({});
TopLeft.args = {
  ...defaultArgs,
  anchorOrigin: {
    vertical: Vertical.Top,
    horizontal: Horizontal.Left
  },
};

// TopCenter
export const TopCenter = BasicTemplate.bind({});
TopCenter.args = {
  ...defaultArgs,
  anchorOrigin: {
    vertical: Vertical.Top,
    horizontal: Horizontal.Center
  },
};

// TopRight
export const TopRight = BasicTemplate.bind({});
TopRight.args = {
  ...defaultArgs,
  anchorOrigin: {
    vertical: Vertical.Top,
    horizontal: Horizontal.Right
  },
};
