import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import Autocomplete, { AutocompleteProps } from '../../src/core/autocomplete';
import { StoryGroup } from './types';

export default {
  title: `${StoryGroup.Inputs}/Autocomplete`,
  component: Autocomplete,
} as Meta;

const defaultArgs = {
  placeholder: 'placeholder',
};

const BasicTemplate: Story<AutocompleteProps> = ({ ...args }) => {
  const [value, setValue] = useState('');
  const options = ['item1', 'item2'];

  return (
    <div>
      <Autocomplete {...args} value={value} onChange={(ev: any) => setValue(ev)} options={options} />
    </div>
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
