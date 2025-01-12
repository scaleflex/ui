import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TimePicker from '../../src/core/time-picker';
import { Position } from '../../src/core/popper/types';
import TimePickerDocsTemplate from '../docs/time-picker.mdx';
import { InputSize } from '../../src/utils/types';

const meta: Meta<typeof TimePicker> = {
  title: 'Inputs/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TimePickerDocsTemplate,
      subtitle: 'The Time Picker component lets the user select a time.',
    },
  },
  argTypes: {
    fullWidth: {
      description: 'If true, the input will take the full width of the container.',
    },
    inputGroupProps: {
      description:
        'Props for the input group. Please refer to the [InputGroup](https://scaleflex.github.io/ui/?path=/docs/inputs-input-inputgroup--docs#api) component for more information.',
    },
    InputProps: {
      description:
        'Props for the input. Please refer to the [Input](https://scaleflex.github.io/ui/?path=/docs/inputs-input--docs#api) component for more information.',
    },
    position: {
      description:
        'The position of the menu. refer to the [Popper](https://scaleflex.github.io/ui/?path=/docs/datadisplay-popper--docs#positioned-popper) component to see the available positions.',
      options: Object.values(Position),
      control: {
        type: 'select',
      },
    },
    onChange: {
      description: 'The callback function that is called when the time changes.',
    },
    size: {
      description: 'The size of the time picker. `sm` or `md`',
      options: Object.values(InputSize),
      control: {
        type: 'select',
      },
    },
    popperOptions: {
      description:
        'The props for the popper component. Please refer to the [Popper](https://scaleflex.github.io/ui/?path=/docs/datadisplay-popper--docs#api) component for more information.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  label: 'Label',
  hint: 'Some hint goes here',
  position: Position.BottomStart,
  size: InputSize.Md,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <TimePicker {...args} />,
};
