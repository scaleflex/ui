import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import LanguagesIcon from '@scaleflex/icons/languages';
import type { IconProps } from '@scaleflex/icons/icon.props';
import _InputLocalization, { InputLocalizationProps } from '../../src/core/input-localization';
import MenuItem from '../../src/core/menu-item';
import { StoryGroup } from './types';
import { InputSize } from '../../src/utils/types';

export const InputLocalization = _InputLocalization;

export default {
  // title: `${StoryGroup.Inputs}/InputLocalization`,
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
  size: InputSize.Md,
};

const options = ['France', 'Germany', 'Ukraine'];

const BasicTemplate: Story<InputLocalizationProps> = ({ ...args }) => {
  const [value, setValue] = useState(args.multiple ? [options[0]] : options[0]);

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

// Multiple
export const Multiple = BasicTemplate.bind({});
Multiple.args = { ...defaultArgs, multiple: true };

// WithIcon
export const WithIcon = BasicTemplate.bind({});
WithIcon.args = {
  ...defaultArgs,
  icon: (props: IconProps) => <LanguagesIcon {...props} />,
};

// WithIconAndCustomLabel
export const WithIconAndCustomLabel = BasicTemplate.bind({});
WithIconAndCustomLabel.args = {
  ...defaultArgs,
  icon: <LanguagesIcon size={12} />,
  renderLabel: (value: string) => `Value: ${value}`,
};
