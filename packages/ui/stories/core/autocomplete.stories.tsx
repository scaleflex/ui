import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Autocomplete from '../../src/core/autocomplete';
import { InputSize } from '../../src/utils/types';

const meta: Meta<typeof Autocomplete> = {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  excludeStories: ['Autocomplete'],
  argTypes: {
    scroll: {
      description: 'Prop directly change scroll design',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const defaultArgs = {
  placeholder: 'placeholder',
  label: 'Label',
  readOnly: false,
  hint: 'Some hint goes here',
  size: InputSize.Md,
  options: [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
    'item9',
    'item10',
    'item11',
    'item12',
  ],
  multiple: false,
  fullWidth: false,
};

const options = [
  { id: 1, label: 'sfx1' },
  { id: 2, label: 'sfx2' },
  { id: 3, label: 'sfx3' },
  { id: 4, label: 'sfx4' },
  { id: 5, label: 'sfx5' },
  { id: 6, label: 'sfx6' },
  { id: 7, label: 'sfx7' },
];

const getOptionDisabled = (_: any, index: number): boolean => index % 2 === 0;

const BasicTemplate = ({ ...args }): JSX.Element => {
  const [value, setValue] = useState(args.multiple ? [] : '');

  return (
    <Autocomplete
      {...args}
      value={value}
      options={args.options}
      getOptionDisabled={getOptionDisabled}
      getOptionValue={(option: any) => option}
      getOptionLabel={(option: any) => option}
      onChange={(_: any, val: any) => setValue(val)}
    />
  );
};

const AutocompleteObjectsTemplate = ({ ...args }): JSX.Element => {
  const [value, setValue] = useState(args.multiple ? [] : '');

  return (
    <Autocomplete
      {...args}
      value={value}
      options={args.options}
      onChange={(_, val: any) => setValue(val)}
      getOptionValue={(option: any) => option?.id}
      getOptionLabel={(option: any) => option?.label}
      getOptionDisabled={getOptionDisabled}
    />
  );
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate {...args} />,
};

export const AutocompleteObjects: Story = {
  args: {
    ...defaultArgs,
    options,
  },
  render: (args) => <AutocompleteObjectsTemplate {...args} />,
};
