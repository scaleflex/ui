import React, { useState } from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';
import RemoveIcon from '@scaleflex/icons/remove';
import { defaultPalette } from '../../src/theme/roots/palette';
import { Color } from '../../src/utils/types/palette';
import _Modal, { ModalProps } from '../../src/core/modal';
import ModalStyled from '../../src/core/modal/modal.styles';
import ModalTitle from '../../src/core/modal-title';
import ModalContent from '../../src/core/modal-content';
import ModalActions from '../../src/core/modal-actions';
import SelectGroup from '../../src/core/select-group';
import MenuItem from '../../src/core/menu-item';
import Button from '../../src/core/button';
import { StoryGroup } from './types';
import { Variant } from '../../src/core/modal-title/types';

export const Modal = _Modal;

export default {
  title: `${StoryGroup.Feedback}/Modal`,
  component: Modal,
  excludeStories: ['Modal'],

  argTypes: {
    children: {
      description: 'Modal children are sub-module components: `ModalTitle`, `ModalContent` and `ModalActions`.',
    },

    fullWidth: {
      description: 'If true, the modal stretches to maxWidth. Notice that the modal width grow is limited by the default margin.'
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

const generateTemplate = ({ TitleProps = {} } = {}) => ({ ...args }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const renderModalContent = () => (
    <>
      <ModalTitle {...TitleProps} primary="Delete file?" />

      <ModalContent>
        1 file will be deleted, ok?
      </ModalContent>

      <ModalActions>
        <Button
          onClick={handleClose}
          color="link"
        >
          Cancel
        </Button>

        <Button
          onClick={handleClose}
          color="primary"
          style={{ background: defaultPalette[Color.Error] }}
        >
          Delete
        </Button>
      </ModalActions>
    </>
  );

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: 16 }}>
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

const BasicTemplate: Story<ModalProps> = generateTemplate();

// Base
export const Base = BasicTemplate.bind({});
Base.args = { ...defaultArgs };

// FullWidth
export const FullWidth = BasicTemplate.bind({});
FullWidth.args = { ...defaultArgs, fullWidth: true };

const IconTemplate: Story<ModalProps> = generateTemplate({
  TitleProps: {
    variant: Variant.WithIcon,
    secondary: 'Secondary text',
    icon: <RemoveIcon size={25} />
  }
});

// WithIcon
export const WithIcon = IconTemplate.bind({});
WithIcon.args = { ...defaultArgs, fullWidth: true };

/**
 * SelectGroupTemplate
 */
const SelectGroupTemplate: Story<ModalProps> = ({ ...args }) => {
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
          onChange={setValueState}
          label="Label"
          hint="Some hint goes here"
        >
          <MenuItem value="item1">Item 1</MenuItem>
          <MenuItem value="item2">Item 2</MenuItem>
        </SelectGroup>

      </ModalContent>

      <ModalActions>
        <Button
          onClick={handleClose}
          color="link"
        >
          Cancel
        </Button>

        <Button
          onClick={handleClose}
          color="primary"
        >
          Save
        </Button>
      </ModalActions>
    </>
  );

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: 16 }}>
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

// WithSelectGroup
export const WithSelectGroup = SelectGroupTemplate.bind({});
WithSelectGroup.args = { ...defaultArgs, fullWidth: true };
