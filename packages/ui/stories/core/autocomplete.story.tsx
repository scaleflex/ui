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
  // multiple: true,
  fullWidth: false,
};
const getOptionDisabled = (_: any, index: number): boolean => index % 2 === 0;

const BasicTemplate: Story<AutocompleteProps> = ({ ...args }) => {
  const [value, setValue] = useState(args.multiple ? [] : '');
  const options = [
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
  ];

  return (
    <Autocomplete
      {...args}
      value={value}
      options={options}
      getOptionDisabled={getOptionDisabled}
      onChange={(event: any, val: any) => setValue(val)}
    />
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };