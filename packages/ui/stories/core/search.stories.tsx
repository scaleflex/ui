import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Search from '../../src/core/search';
import { InputSize } from '../../src/utils/types';
import SearchDocsTemplate from '../docs/search.mdx';

const meta: Meta<typeof Search> = {
  title: 'Inputs/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SearchDocsTemplate,
      subtitle: 'A search input allows users to search for a specific item.',
    },
  },
  argTypes: {
    size: {
      description: 'The size of the search input.',
      options: Object.values(InputSize),
      control: {
        type: 'select',
      },
    },
    value: {
      description: 'The value of the search input.',
    },
    onChange: {
      description: 'The callback function that is called when the value of the input changes.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

const defaultArgs = {
  size: InputSize.Md,
  placeholder: 'Search',
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <Search
        {...args}
        value={value}
        onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => setValue(currentTarget?.value || '')}
      />
    );
  },
};
