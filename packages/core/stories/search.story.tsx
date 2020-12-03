import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Search, { SearchProps } from '../src/search';
import { Size } from '../src/input/types';

export const Search = _Search;

export default {
  title: 'Inputs/Search',
  component: Search,
  excludeStories: ['Search'],
} as Meta;

const defaultArgs = {
  size: Size.Md,
};

const BasicTemplate: Story<SearchProps> = ({
  ...args
}) => {
  const [value, setValue] = useState('Text');

  return (
    <Search
      {...args}
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
