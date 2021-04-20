import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import LanguagesIcon from '@scaleflex/icons/languages';
import _InputLocalization, { InputLocalizationProps } from '../../src/core/input-localization';
import MenuItem from '../../src/core/menu-item';
import { StoryGroup } from './types';

export const InputLocalization = _InputLocalization;

export default {
  title: `${StoryGroup.Inputs}/InputLocalization`,
  component: InputLocalization,
  excludeStories: ['InputLocalization'],

  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },
  },
} as Meta;

const defaultArgs = {
  readOnly: false,
  disabled: false,
};

const options = ['France', 'Germany', 'Ukraine'];

const BasicTemplate: Story<InputLocalizationProps> = ({ ...args }) => {
  const [value, setValue] = useState(options[0]);

  return (
    <InputLocalization {...args} value={value} onChange={(ev: any) => setValue(ev)}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
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

// WithIconAndCustomLabel
export const WithIconAndCustomLabel = BasicTemplate.bind({});
WithIconAndCustomLabel.args = {
  ...defaultArgs,
  icon: <LanguagesIcon size={12} />,
  renderLabel: (value: string) => `Value: ${value}`,
};
