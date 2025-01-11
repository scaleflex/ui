import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import PopupContent, { PopupContentProps } from '@scaleflex/ui/core/popup-content';

import Popup from '../../src/core/popup';
import Button from '../../src/core/button';
import { Status } from '../../src/core/popup-status/types';
import { Horizontal, Vertical } from '../../src/core/popup/types';
import PopupDocsTemplate from '../docs/popup.mdx';

const meta: Meta<typeof Popup> = {
  title: 'Feedback/Popup',
  component: Popup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: PopupDocsTemplate,
      subtitle: 'Popup informs users that an action has been or will be performed by the app.',
    },
  },
  argTypes: {
    message: {
      description: 'The message of the popup.',
    },
    anchorOrigin: {
      description: 'The position of the popup.',
    },
    status: {
      description: 'The status of the popup.',
      options: Object.values(Status),
      control: {
        type: 'select',
      },
    },
    open: {
      description: 'If true, the popup is open.',
    },
    onClose: {
      description: 'The function to call when the popup is closed.',
    },
    autoHideDuration: {
      description: 'The duration of the popup in milliseconds.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popup>;

const Item = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const defaultArgs = {
  message: 'New folder “2022 annual event” was created',
  status: Status.Success,
  open: false,
};

const items: PopupContentProps[] = [
  {
    message: 'New folder “2022 annual event” was created',
    status: Status.Success,
  },
  {
    message: 'Image resolution is less than selected resize parameters',
    status: Status.Info,
  },
  {
    message: 'You cannot upload file bigger than 25MB',
    status: Status.Error,
  },
  {
    message: 'You set visibility to public, everyone can view these files',
    status: Status.Warning,
  },
];

export const Primary: Story = {
  args: {
    ...defaultArgs,
    anchorOrigin: {
      vertical: Vertical.Bottom,
      horizontal: Horizontal.Left,
    },
  },
  render: ({ open, ...args }) => {
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
  },
};

export const Statuses: Story = {
  render: (args) => (
    <div>
      {items.map((props) => (
        <Item key={props.status}>
          <PopupContent {...args} {...props} />
        </Item>
      ))}
    </div>
  ),
};
