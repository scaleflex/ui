import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Modal, { ModalProps } from '../src/modal';
import ModalTitle from '../src/modal-title';
import Button from '../src/button';
import { StoryGroup } from './types';

export const Modal = _Modal;

export default {
  title: `${StoryGroup.Feedback}/Modal`,
  component: Modal,
  excludeStories: ['Modal'],

  argTypes: {
    children: {
      description: 'Modal children are sub-module components: `ModalTitle`, `ModalContent` and `ModalActions`.',
    }
  }
} as Meta;

const defaultArgs = {
};

const BasicTemplate: Story<ModalProps> = ({
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleClick}
        color="link"
      >
        Open modal
      </Button>

      <Modal
        {...args}
        open={open}
        onClose={handleClose}
      >
        <ModalTitle primary="Test" />
        {/* <ModalItem onClick={handleClose}>Item 1</ModalItem>
        <ModalItem onClick={handleClose}>Item 2</ModalItem>
        <ModalItem onClick={handleClose}>Item 3</ModalItem> */}
      </Modal>
    </div>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
