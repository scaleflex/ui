import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TimePicker from '../../src/core/time-Picker';
import { Position } from '../../src/core/popper/types';

const meta: Meta<typeof TimePicker> = {
  title: 'Inputs/TimePicker',
  component: TimePicker,
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  label: 'Label',
  hint: 'Some hint goes here',
  readOnly: false,
  position: Position.BottomStart,
};

const BasicTemplate = ({ ...args }) => <TimePicker {...args} />;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
