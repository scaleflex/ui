import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Select from '../../src/core/select';
import MenuItem from '../../src/core/menu-item';
import { InputSize } from '../../src/utils/types';
import SelectDocsTemplate from '../docs/select.mdx';

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SelectDocsTemplate,
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
    MenuProps: {
      description:
        'The props of the menu component. Please refer to the [Menu](https://scaleflex.github.io/ui/?path=/docs/navigation-menu--docs#api) component for more information.',
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
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const defaultArgs = {
  size: InputSize.Md,
  multiple: false,
  readOnly: false,
  disabled: false,
  placeholder: 'placeholder',
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [value, setValue] = useState(args.multiple ? [] : '');

    useEffect(() => {
      setValue(args.multiple ? [] : '');
    }, [args.multiple]);

    return (
      <Select {...args} value={value} onChange={(ev: any) => setValue(ev)}>
        <MenuItem value="item1">Menu item 1</MenuItem>
        <MenuItem value="item2">Menu item 2</MenuItem>
        <MenuItem value="item3">Menu item 3</MenuItem>
      </Select>
    );
  },
};
