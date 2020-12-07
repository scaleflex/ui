import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Popup, { PopupProps } from '../src/popup';
import Button from '../src/button';
import { Status } from '../src/robot/types';

export const Popup = _Popup;

export default {
  title: 'Feedback/Popup',
  component: Popup,
  excludeStories: ['Popup'],
} as Meta;

const defaultArgs = {
  message: 'New folder “2022 annual event” was created',
  status: Status.Happy,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
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
      <Popup {...args} open={openState} />
    </>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
