import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LanguagesIcon from '@scaleflex/icons/languages';

import InputLocalization from '../../src/core/input-localization';
import MenuItem from '../../src/core/menu-item';
import { InputSize } from '../../src/utils/types';
import InputLocalizationDocsTemplate from '../docs/input-localization.mdx';

const meta: Meta<typeof InputLocalization> = {
  title: 'DataDisplay/InputLocalization',
  component: InputLocalization,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: InputLocalizationDocsTemplate,
      subtitle: 'InputLocalization is a component that allows users to select a language.',
    },
  },
  argTypes: {
    children: {
      description: 'Menu contents, normally `MenuItem`s.',
    },
    renderLabel: {
      description: 'Custom label render function.',
    },
    icon: {
      description: 'Icon to display.',
    },
    value: {
      description: 'The value of the input.',
    },
    onChange: {
      description: 'Callback function called when the value changes.',
    },
    size: {
      description: 'The size of the input. `sm` or `md`.',
      options: Object.values(InputSize),
      control: {
        type: 'select',
      },
    },
    MenuProps: {
      description:
        'The props of the menu component. Please refer to the [Menu](/?path=/docs/navigation-menu--docs#api) component for more information.',
    },
    readOnly: {
      description: 'if true, the input is read-only.',
    },
    disabled: {
      description: 'if true, the input is disabled.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputLocalization>;

const defaultArgs = {
  readOnly: false,
  disabled: false,
  size: InputSize.Md,
};

const options = ['France', 'Germany', 'Ukraine'];

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
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
  },
};

export const Multiple: Story = {
  args: { ...defaultArgs, multiple: true },
  render: Primary.render,
};

export const WithIcon: Story = {
  args: {
    ...defaultArgs,
    icon: <LanguagesIcon size={12} />,
  },
  render: Primary.render,
};

export const WithIconAndCustomLabel: Story = {
  args: {
    ...defaultArgs,
    icon: <LanguagesIcon size={12} />,
    renderLabel: (value) => `Value: ${value}`,
  },
  render: Primary.render,
};
