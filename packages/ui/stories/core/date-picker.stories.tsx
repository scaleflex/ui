import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from '../../src/core/date-picker';
import { Position } from '../../src/core/popper/types';
import { InputSize } from '../../src/utils/types';
import DatePickerDocsTemplate from '../docs/date-picker.mdx';

const meta: Meta<typeof DatePicker> = {
  title: 'Inputs/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: DatePickerDocsTemplate,
      subtitle: 'The Date Picker component lets users select a date.',
    },
  },
  argTypes: {
    label: {
      description: 'The label of the date picker',
    },
    size: {
      description: 'The size of the date picker',
      options: Object.values(InputSize),
      control: {
        type: 'select',
      },
    },
    maxDate: {
      description: 'The maximum date that can be selected, format: yyyy-mm-dd',
    },
    minDate: {
      description: 'The minimum date that can be selected, format: yyyy-mm-dd',
    },
    position: {
      description: 'The position of the calendar popper',
      options: Object.values(Position),
      control: {
        type: 'select',
      },
    },
    fullWidth: {
      description: 'If true the date picker will take the full width of the container',
    },
    placeholder: {
      description: 'The placeholder of the date picker',
    },
    hint: {
      description: 'The hint of the date picker',
    },
    readOnly: {
      description: 'If true the date picker will be read only',
    },
    disabled: {
      description: 'If true the date picker will be disabled',
    },
    autoSelectToday: {
      description: 'If true the date picker will automatically select today',
    },
    // enableAutoSelect: {
    //   description: 'If true the date picker will automatically select today',
    // },
    InputProps: {
      description:
        'The props of the input component. Please refer to the [Input](https://scaleflex.github.io/ui/?path=/docs/inputs-input--docs#api) component for more information.',
    },
    inputGroupProps: {
      description:
        'Props for the input group. Please refer to the [InputGroup](https://scaleflex.github.io/ui/?path=/docs/inputs-input-inputgroup--docs#api) component for more information.',
    },
    popperOptions: {
      description:
        'PopperOptions prop in the popper component. Please refer to the [Popper](https://scaleflex.github.io/ui/?path=/docs/datadisplay-popper--docs#api) component for more information.',
    },
    zIndex: {
      description: 'The z-index of the popper component',
    },
    calendarStyles: {
      description: 'The styles of the calendar component that will be applied to the calendar root element',
    },
    popperWrapperStyles: {
      description: 'The styles of the popper wrapper component',
    },
    onChange: {
      description: 'The callback function that is called when the date is changed',
    },
    value: {
      description: 'The value of the date picker',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const defaultArgs = {
  label: 'Label',
  size: InputSize.Md,
  hint: 'Some hint goes here',
  readOnly: false,
  disabled: false,
  autoSelectToday: false,
  placeholder: 'mm/dd/yyyy',
  fullWidth: false,
  maxDate: '',
  minDate: '',
  position: Position.BottomStart,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [value, setValue] = useState('');

    return <DatePicker {...args} value={value} onChange={(newValue: string): void => setValue(newValue)} />;
  },
};

export const Sizes: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <DatePicker
          {...args}
          size={InputSize.Sm}
          value={value}
          onChange={(newValue: string): void => setValue(newValue)}
        />
        <DatePicker {...args} value={value} onChange={(newValue: string): void => setValue(newValue)} />
      </div>
    );
  },
};
