import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Search, { SearchProps } from '../../src/core/search';
import { InputSize } from '../../src/utils/types';
import { StoryGroup } from './types';

export const Search = _Search;

export default {
  title: `${StoryGroup.Inputs}/Search`,
  component: Search,
  excludeStories: ['Search'],
} as Meta;

const defaultArgs = {
  size: InputSize.Md,
};

const BasicTemplate: Story<SearchProps> = ({ ...args }) => {
  const [value, setValue] = useState('Text');

  return (
    <Search
      {...args}
      value={value}
      onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => setValue(currentTarget.value)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
