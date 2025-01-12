import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import CountryIcon from '@scaleflex/icons/country';
import { InputSize } from '@scaleflex/ui/utils/types';

import SelectGroup from '../../src/core/select-group';
import MenuItem, { MenuItemIcon, MenuItemLabel } from '../../src/core/menu-item';
import SelectGroupDocsTemplate from '../docs/select-group.mdx';

const meta: Meta<typeof SelectGroup> = {
  title: 'Inputs/Select/SelectGroup',
  component: SelectGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SelectGroupDocsTemplate,
      subtitle: 'Selects allow users to select one option from a list.',
    },
  },
  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },
    size: {
      description: 'The size of the select input. `sm` or `md`.',
      options: Object.values(InputSize),
      control: {
        type: 'select',
      },
    },
    multiple: {
      description: 'If true, the select input allows multiple selections.',
    },
    readOnly: {
      description: 'If true, the select input is read only.',
    },
    disabled: {
      description: 'If true, the select input is disabled.',
    },
    placeholder: {
      description: 'The placeholder text of the select input.',
    },
    value: {
      description: 'The value of the select input.',
    },
    error: {
      description: 'If true, the select input is in error state.',
    },
    fullWidth: {
      description: 'If true, the select input will take the full width of its container.',
    },
    hideEllipsis: {
      description: 'If true, the ellipsis will be hidden in the label.',
    },
    hideMenuItemsActions: {
      description: 'If true, the menu items actions will be hidden in the menu items.',
    },
    onChange: {
      description: 'The onChange event handler of the select input.',
    },
    selectProps: {
      description: 'The props of the base select input.',
    },
    SelectProps: {
      description:
        'The props of the select component. Please refer to the [Select](?path=/docs/inputs-select--docs#api) component for more information.',
    },
    LabelProps: {
      description:
        'The props of the label component. Please refer to the [Label](?path=/docs/datadisplay-label--docs#api) component for more information.',
    },
    MenuProps: {
      description:
        'The props of the menu component. Please refer to the [Menu](?path=/docs/navigation-menu--docs#api) component for more information.',
    },
    onClickClearIcon: {
      description: 'The onClick event handler of the clear icon.',
    },
    renderLabel: {
      description: 'The render function of the label.',
    },
    showSelectionKey: {
      description:
        'If true, the value of the selected option will be shown in in the input instead of the option text.',
    },
    showClearIcon: {
      description: 'If true, the clear icon will be shown in the input.',
    },
    onRequestClose: {
      description: 'callback function called when the menu is closed.',
    },
    hint: {
      description: 'The hint text of the select input.',
    },
    label: {
      description: 'The label of the select input.',
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

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [valueState, setValueState] = useState();

    return (
      <SelectGroup {...args} value={valueState} onChange={(ev: any) => setValueState(ev)}>
        <MenuItem value="item1">Item 1</MenuItem>
        <MenuItem value="item2">Item 2</MenuItem>
      </SelectGroup>
    );
  },
};

export const SelectMultiple: Story = {
  args: { ...defaultArgs, multiple: true },
  render: Primary.render,
};

export const SelectWithIconStart: Story = {
  args: {
    ...defaultArgs,
    LabelProps: {
      iconStart: (props: any) => <QuestionMarkOutline {...props} />,
    },
  },
  render: Primary.render,
};
export const SelectWithIconEnd: Story = {
  args: {
    ...defaultArgs,
    LabelProps: {
      iconEnd: (props: any) => <QuestionMarkOutline {...props} />,
    },
  },
  render: Primary.render,
};

export const WithMenuIcon: Story = {
  args: { ...defaultArgs },
  render: (args) => {
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
  },
};
