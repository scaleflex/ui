import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _ModalActions, { ModalActionsProps } from '../src/modal-actions';
// import { Align } from '../src/modal-actions/types';
import Button from '../src/button';
import { StoryGroup } from './types';

export const ModalActions = _ModalActions;

export default {
  title: `${StoryGroup.DataDisplay}/ModalActions`,
  component: ModalActions,
  excludeStories: ['ModalActions'],
} as Meta;

const defaultArgs = {};

const BasicTemplate: Story<ModalActionsProps> = ({
  ...args
}) => (
  <ModalActions {...args}>
    <Button color="link">
      Cancel
    </Button>

    <Button color="primary">
      Save
    </Button>
  </ModalActions>
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
