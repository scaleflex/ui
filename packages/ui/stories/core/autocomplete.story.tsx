import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Autocomplete, { AutocompleteProps } from '../../src/core/autocomplete';
import { InputSize, InputBackgroundColor } from '../../src/utils/types';
import { StoryGroup } from './types';

export const Autocomplete = _Autocomplete;

export default {
  title: `${StoryGroup.Inputs}/Autocomplete`,
  component: Autocomplete,
  excludeStories: ['Autocomplete'],
} as Meta;

const defaultArgs = {
  placeholder: 'placeholder',
  label: 'Label',
  hint: 'Some hint goes here',
  background: InputBackgroundColor.Primary,
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
const groupBy = (option: any): any => option.firstLetter;

const BasicTemplate: Story<AutocompleteProps> = ({ ...args }) => {
  const [value, setValue] = useState(args.multiple ? [] : '');

  return (
    <Autocomplete
      {...args}
      value={value}
      options={args.options}
      getOptionDisabled={getOptionDisabled}
      onChange={(event: any, val: any) => setValue(val)}
    />
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

const AutocompleteObjectsTemplate: Story<AutocompleteProps> = ({ ...args }) => {
  const [value, setValue] = useState(args.multiple ? [] : '');

  return (
    <Autocomplete
      {...args}
      value={value}
      groupBy={groupBy}
      options={args.options}
      getOptionDisabled={getOptionDisabled}
      onChange={(_, val: any) => setValue(val)}
    />
  );
};

const options = [
  { id: 1, label: 'zahraa', firstLetter: 'z' },
  { id: 2, label: 'hazem', firstLetter: 'h' },
  { id: 3, label: 'nermeen', firstLetter: 'n' },
  { id: 4, label: 'eman', firstLetter: 'e' },
  { id: 5, label: 'mohamed', firstLetter: 'm' },
  { id: 6, label: 'amr', firstLetter: 'a' },
  { id: 7, label: 'wagdy', firstLetter: 'w' },
  { id: 8, label: '12item', firstLetter: '1' },
  { id: 9, label: '2item', firstLetter: '2' },
  { id: 10, label: 'mohy', firstLetter: 'm' },
  { id: 11, label: 'sara', firstLetter: 's' },
  { id: 12, label: '41item', firstLetter: '4' },
  { id: 13, label: 'hamdy', firstLetter: 'h' },
];

export const AutocompleteObjects = AutocompleteObjectsTemplate.bind({});
AutocompleteObjects.args = {
  ...defaultArgs,
  options,
};
