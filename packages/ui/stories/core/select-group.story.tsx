import React, { useEffect, useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import { SelectProps } from '@scaleflex/ui/core/select';
import CountryIcon from '@scaleflex/icons/country';
import { InputSize } from '@scaleflex/ui/utils/types';
import _SelectGroup, { SelectGroupProps } from '../../src/core/select-group';
import MenuItem, { MenuItemIcon, MenuItemLabel } from '../../src/core/menu-item';
import { StoryGroup } from './types';

export const SelectGroup = _SelectGroup;

export default {
  // title: `${StoryGroup.Inputs}/Select/SelectGroup`,
  component: SelectGroup,
  excludeStories: ['SelectGroup'],

  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },

    switcherProps: {
      description: 'input attributes applied directly input element.',
    },
    scroll: {
      description: 'Prop directly change scroll design',
    },
  },
} as Meta;

const defaultArgs = {
  size: InputSize.Md,
  label: 'Label',
  hint: 'Some hint goes here',
  readOnly: false,
  disabled: false,
  placeholder: 'placeholder',
  children: 'France',
  active: false,
};

const BasicTemplate: Story<SelectGroupProps> = ({ ...args }) => {
  const [valueState, setValueState] = useState();

  return (
    <SelectGroup {...args} value={valueState} onChange={(ev: any) => setValueState(ev)}>
      <MenuItem value="item1">Item 1</MenuItem>
      <MenuItem value="item2">Item 2</MenuItem>
    </SelectGroup>
  );
};

// Select
export const Select = BasicTemplate.bind({});
Select.args = { ...defaultArgs };

// SelectMultiple
export const SelectMultiple = BasicTemplate.bind({});
SelectMultiple.args = {
  ...defaultArgs,
  multiple: true,
};

// Select with iconStart
export const SelectWithIconStart = BasicTemplate.bind({});
SelectWithIconStart.args = {
  ...defaultArgs,
  LabelProps: {
    iconStart: (props: any) => <QuestionMarkOutline {...props} />,
  },
};

// Select with iconEnd
export const SelectWithIconEnd = BasicTemplate.bind({});
SelectWithIconEnd.args = {
  ...defaultArgs,
  LabelProps: {
    iconEnd: (props: any) => <QuestionMarkOutline {...props} />,
  },
};

const WithIconTemplate: Story<SelectProps> = ({ ...args }) => {
  const [value, setValue] = useState(args.multiple ? [] : '');

  useEffect(() => {
    setValue(args.multiple ? [] : '');
  }, [args.multiple]);

  return (
    <SelectGroup {...args} value={value} onChange={(ev: any) => setValue(ev)}>
      <MenuItem value="item1">
        <MenuItemIcon>
          <CountryIcon size={args.size === 'md' ? 16 : 14} />
        </MenuItemIcon>
        <MenuItemLabel>{args.children}</MenuItemLabel>
      </MenuItem>

      <MenuItem value="item2">
        <MenuItemIcon>
          <CountryIcon size={args.size === 'md' ? 16 : 14} />
        </MenuItemIcon>
        <MenuItemLabel>{args.children}</MenuItemLabel>
      </MenuItem>

      <MenuItem value="item3">
        <MenuItemIcon>
          <CountryIcon size={args.size === 'md' ? 16 : 14} />
        </MenuItemIcon>
        <MenuItemLabel>{args.children}</MenuItemLabel>
      </MenuItem>
    </SelectGroup>
  );
};
// with menu icon
export const WithMenuIcon = WithIconTemplate.bind({});
WithMenuIcon.args = { ...defaultArgs };
