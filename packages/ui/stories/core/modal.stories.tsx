import React, { useState } from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import RemoveIcon from '@scaleflex/icons/remove';

import { defaultPalette } from '../../src/theme/roots/palette';
import { Color } from '../../src/utils/types/palette';
import Modal, { ModalProps } from '../../src/core/modal';
import ModalStyled from '../../src/core/modal/modal.styles';
import ModalTitle from '../../src/core/modal-title';
import ModalContent from '../../src/core/modal-content';
import ModalActions from '../../src/core/modal-actions';
import SelectGroup from '../../src/core/select-group';
import MenuItem from '../../src/core/menu-item';
import Button from '../../src/core/button';
import { Variant } from '../../src/core/modal-title/types';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  excludeStories: ['Modal'],
  argTypes: {
    children: {
      description: 'Modal children are sub-module components: `ModalTitle`, `ModalContent` and `ModalActions`.',
    },

    fullWidth: {
      description:
        'If true, the modal stretches to maxWidth. Notice that the modal width grow is limited by the default margin.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const defaultArgs = {};

const StyledModalContainer = styled(ModalStyled.Container)`
  position: relative;
  top: auto;
  left: auto;
  transform: none;
`;

const BasicTemplate = ({ TitleProps = {}, args }: { TitleProps?: object; args: ModalProps }): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleClick = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const renderModalContent = (): JSX.Element => (
    <>
      <ModalTitle {...TitleProps} primary="Delete file?" />

      <ModalContent>1 file will be deleted, ok?</ModalContent>

      <ModalActions>
        <Button onClick={handleClose} color="basic">
          Cancel
        </Button>

        <Button onClick={handleClose} color="primary" style={{ background: defaultPalette[Color.Error] }}>
          Delete
        </Button>
      </ModalActions>
    </>
  );

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: 16 }}>
        <StyledModalContainer {...args} open>
          <ModalStyled.Modal>{renderModalContent()}</ModalStyled.Modal>
        </StyledModalContainer>
      </div>

      <Button onClick={handleClick} color="basic">
        Open modal
      </Button>

      <Modal {...args} open={open} onClose={handleClose}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

const SelectGroupTemplate = (args: ModalProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [valueState, setValueState] = useState();
  const handleClick = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const renderModalContent = (): JSX.Element => (
    <>
      <ModalTitle primary="Create item" />

      <ModalContent>
        <SelectGroup
          value={valueState}
          onChange={(ev: any) => setValueState(ev)}
          label="Label"
          hint="Some hint goes here"
          fullWidth
        >
          <MenuItem value="item1">Item 1</MenuItem>
          <MenuItem value="item2">Item 2</MenuItem>
        </SelectGroup>
      </ModalContent>

      <ModalActions>
        <Button onClick={handleClose} color="basic">
          Cancel
        </Button>

        <Button onClick={handleClose} color="primary">
          Save
        </Button>
      </ModalActions>
    </>
  );

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: 16 }}>
        <StyledModalContainer {...args} open>
          <ModalStyled.Modal>{renderModalContent()}</ModalStyled.Modal>
        </StyledModalContainer>
      </div>

      <Button onClick={handleClick} color="basic">
        Open modal
      </Button>

      <Modal {...args} open={open} onClose={handleClose}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate args={args} />,
};

export const FullWidth: Story = {
  args: { ...defaultArgs, fullWidth: true },
  render: (args) => <BasicTemplate args={args} />,
};

export const WithIcon: Story = {
  args: { ...defaultArgs, fullWidth: true },
  render: (args) => (
    <BasicTemplate
      TitleProps={{
        variant: Variant.WithIcon,
        secondary: 'Secondary text',
        icon: <RemoveIcon size={25} />,
      }}
      args={args}
    />
  ),
};

export const WithSelectGroup: Story = {
  args: { ...defaultArgs, fullWidth: true },
  render: (args) => <SelectGroupTemplate {...args} />,
};
