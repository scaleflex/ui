import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Autocomplete, { AutocompleteProps } from '../../src/core/autocomplete';
import { InputSize } from '../../src/utils/types';
import { StoryGroup } from './types';

export const Autocomplete = _Autocomplete;

export default {
  title: `${StoryGroup.Inputs}/Autocomplete`,
  component: Autocomplete,
  excludeStories: ['Autocomplete'],
  argTypes: {
    scroll: {
      description: 'Prop directly change scroll design',
    },
  },
} as Meta;

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
  // multiple: true,
  fullWidth: false,
};
const getOptionDisabled = (_: any, index: number): boolean => index % 2 === 0;

const BasicTemplate: Story<AutocompleteProps> = ({ ...args }) => {
  const [value, setValue] = useState(args.multiple ? [] : '');

  return (
    <Autocomplete {...args} value={value} options={args.options} onChange={(event: any, val: any) => setValue(val)} />
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

const AutocompleteObjectsTemplate: Story<AutocompleteProps> = ({ ...args }) => {
  const [value, setValue] = useState(args.multiple ? [] : '');
  const [id, setID] = useState(args.multiple ? [] : '');

  return (
    <Autocomplete
      {...args}
      value={value}
      id={id}
      options={args.options}
      getOptionDisabled={getOptionDisabled}
      onChange={(_, val: any, _id: any) => {
        setID(_id);
        setValue(val);
      }}
    />
  );
};

const options = [
  { id: 1, label: 'item1' },
  { id: 2, label: 'item2' },
  { id: 3, label: 'item3' },
  { id: 4, label: 'item4' },
  { id: 5, label: 'item5' },
  { id: 6, label: 'item6' },
  { id: 7, label: 'item7' },
  { id: 8, label: 'item8' },
  { id: 9, label: 'item9' },
  { id: 10, label: 'item10' },
  { id: 11, label: 'item11' },
  { id: 12, label: 'item12' },
];

export const AutocompleteObjects = AutocompleteObjectsTemplate.bind({});
AutocompleteObjects.args = {
  ...defaultArgs,
  options,
};
