import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import LanguagesIcon from '@sfx-ui/icons/languages';
import _InputLocalization, { InputLocalizationProps } from '../src/input-localization';
import MenuItem from '../src/menu-item';
import { StoryGroup } from './types';

export const InputLocalization = _InputLocalization;

export default {
  title: `${StoryGroup.Inputs}/InputLocalization`,
  component: InputLocalization,
  excludeStories: ['InputLocalization'],

  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    }
  }
} as Meta;

const defaultArgs = {};

const options = ['France', 'Germany', 'Ukraine'];

const BasicTemplate: Story<InputLocalizationProps> = ({
  ...args
}) => {
  const [value, setValue] = useState(options[0]);

  return (
    <InputLocalization
      {...args}
      value={value}
      onChange={setValue}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>{option}</MenuItem>
      ))}
    </InputLocalization>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// WithIcon
export const WithIcon = BasicTemplate.bind({});
WithIcon.args = {
  ...defaultArgs,
  icon: <LanguagesIcon size={12} />,
};
