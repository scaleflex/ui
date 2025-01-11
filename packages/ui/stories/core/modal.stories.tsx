import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { defaultPalette } from '../../src/theme/roots/palette';
import { Color } from '../../src/utils/types/palette';
import Modal from '../../src/core/modal';
import { Size } from '../../src/core/modal/types';
import ModalTitle from '../../src/core/modal-title';
import ModalContent from '../../src/core/modal-content';
import ModalActions from '../../src/core/modal-actions';
import Button from '../../src/core/button';
import ModalDocsTemplate from '../docs/modal.mdx';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ModalDocsTemplate,
      subtitle: 'Modals display content.',
    },
  },
  argTypes: {
    children: {
      description: 'Modal children are sub-module components: `ModalTitle`, `ModalContent` and `ModalActions`.',
    },
    fullWidth: {
      description: 'If true, the modal stretches to maxWidth.',
    },
    maxWidth: {
      description: 'The maximum width of the modal. Available sizes: `xs`, `sm`, `md`, `lg`, `xl`.',
      options: Object.values(Size),
      control: {
        type: 'select',
      },
    },
    hideOverlay: {
      description: 'If true, the overlay is hidden.',
    },
    disableOverlayClick: {
      description: 'If true, the overlay click is disabled. and the modal will not close.',
    },
    open: {
      description: 'If true, the modal is open.',
    },
    modalStyles: {
      description: 'The styles of the modal.',
    },
    onClose: {
      description: 'The callback function that is called when the modal is closed.',
    },
    onDragOver: {
      description: 'The callback function for the drag over event.',
    },
    onDrop: {
      description: 'The callback function for the drop event.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const defaultArgs = {};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleClick = (): void => setOpen(true);
    const handleClose = (): void => setOpen(false);

    return (
      <>
        <Button onClick={handleClick} color="basic">
          OPEN MODAL
        </Button>

        <Modal {...args} open={open} onClose={handleClose}>
          <ModalTitle primary="Delete file?" />

          <ModalContent>1 file will be deleted, ok?</ModalContent>

          <ModalActions>
            <Button onClick={handleClose} color="basic">
              Cancel
            </Button>

            <Button onClick={handleClose} color="primary" style={{ background: defaultPalette[Color.Error] }}>
              Delete
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  },
};
