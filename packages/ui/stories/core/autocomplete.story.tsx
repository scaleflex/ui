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
  multiple: false,
  fullWidth: false,
};
const getOptionDisabled = (_: any, index: number): boolean => index % 2 === 0;

const BasicTemplate: Story<AutocompleteProps> = ({ ...args }) => {
  const [value, setValue] = useState(args.multiple ? [] : '');

  return (
    <Autocomplete
      {...args}
      value={value}
      options={args.options}
      getOptionDisabled={getOptionDisabled}
      onChange={(_: any, val: any) => setValue(val)}
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
      options={args.options}
      onChange={(_, val: any) => setValue(val)}
      getOptionValue={(option: any) => option?.uuid}
      getOptionLabel={(option: any) => option?.name}
      getOptionDisabled={getOptionDisabled}
    />
  );
};

const options = [
  { uuid: '1_scaleflex', name: 'sfx1' },
  { uuid: '2_scaleflex', name: 'sfx2' },
  { uuid: '3_scaleflex', name: 'sfx3' },
  { uuid: '4_scaleflex', name: 'sfx4' },
  { uuid: '5_scaleflex', name: 'sfx5' },
  { uuid: '6_scaleflex', name: 'sfx6' },
  { uuid: '7_scaleflex', name: 'sfx7' },
];

export const AutocompleteObjects = AutocompleteObjectsTemplate.bind({});
AutocompleteObjects.args = {
  ...defaultArgs,
  options,
};
