import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import Autocomplete, { AutocompleteProps } from '../../src/core/autocomplete';
import { StoryGroup } from './types';
import { Size, Background } from '../../src/core/autocomplete/types';

export default {
  title: `${StoryGroup.Inputs}/Autocomplete`,
  component: Autocomplete,
} as Meta;

const defaultArgs = {
  placeholder: 'placeholder',
  label: 'Label',
  hint: 'Some hint goes here',
  background: Background.Primary,
  size: Size.Md,
};

const BasicTemplate: Story<AutocompleteProps> = ({ ...args }) => {
  const [value, setValue] = useState(args.multiple ? [] : '');
  const options = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

  useEffect(() => {
    setValue(args.multiple ? [] : '');
  }, [args.multiple]);

  return (
    <div>
      <Autocomplete {...args} value={value} onChange={(ev: any, val: any) => setValue(val)} options={options} />
    </div>
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
