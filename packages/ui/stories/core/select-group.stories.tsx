import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import CountryIcon from '@scaleflex/icons/country';
import { InputSize } from '@scaleflex/ui/utils/types';

import SelectGroup, { SelectGroupProps } from '../../src/core/select-group';
import MenuItem, { MenuItemIcon, MenuItemLabel } from '../../src/core/menu-item';

const meta: Meta<typeof SelectGroup> = {
  title: 'Inputs/Select/SelectGroup',
  component: SelectGroup,
  excludeStories: ['SelectGroup'],

  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },
    selectProps: {
      description: 'input attributes applied directly input element.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectGroup>;

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

const BasicTemplate = ({ ...args }: SelectGroupProps): JSX.Element => {
  const [valueState, setValueState] = useState();

  return (
    <SelectGroup {...args} value={valueState} onChange={(ev: any) => setValueState(ev)}>
      <MenuItem value="item1">Item 1</MenuItem>
      <MenuItem value="item2">Item 2</MenuItem>
    </SelectGroup>
  );
};

const WithIconTemplate = ({ ...args }: SelectGroupProps): JSX.Element => {
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

export const Select: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
export const SelectMultiple: Story = {
  args: { ...defaultArgs, multiple: true },
  render: (args) => <BasicTemplate {...args} />,
};
export const SelectWithIconStart: Story = {
  args: {
    ...defaultArgs,
    LabelProps: {
      iconStart: (props: any) => <QuestionMarkOutline {...props} />,
    },
  },
  render: (args) => <BasicTemplate {...args} />,
};
export const SelectWithIconEnd: Story = {
  args: {
    ...defaultArgs,
    LabelProps: {
      iconEnd: (props: any) => <QuestionMarkOutline {...props} />,
    },
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithMenuIcon: Story = {
  args: { ...defaultArgs },
  render: (args) => <WithIconTemplate {...args} />,
};
