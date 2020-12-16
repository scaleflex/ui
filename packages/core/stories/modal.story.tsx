import React, { useState } from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';
import _Modal, { ModalProps } from '../src/modal';
import ModalStyled from '../src/modal/modal.styles';
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

const defaultArgs = {};

const StyledModalContainer = styled(ModalStyled.Container)`
  position: relative;
  top: auto;
  left: auto;
  transform: none;
`;

const BasicTemplate: Story<ModalProps> = ({
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const renderModalContent = () => (
    <>
      <ModalTitle primary="Test" />
    </>
  );

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <StyledModalContainer {...args} open>
          <ModalStyled.Modal>
            {renderModalContent()}
          </ModalStyled.Modal>
        </StyledModalContainer>
      </div>

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
        {renderModalContent()}
      </Modal>
    </div>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
