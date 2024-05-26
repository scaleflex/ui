import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Search, { SearchProps } from '../../src/core/search';
import { InputSize } from '../../src/utils/types';

const meta: Meta<typeof Search> = {
  title: 'Inputs/Search',
  component: Search,
  excludeStories: ['Search'],
};

export default meta;
type Story = StoryObj<typeof Search>;

const defaultArgs = {
  size: InputSize.Md,
  placeholder: 'Search',
};

const BasicTemplate = ({ ...args }: SearchProps): JSX.Element => {
  const [value, setValue] = useState('');

  return (
    <Search
      {...args}
      value={value}
      onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => setValue(currentTarget?.value || '')}
    />
  );
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
