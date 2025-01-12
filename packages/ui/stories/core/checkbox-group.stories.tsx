import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { IconProps } from '@scaleflex/icons/icon.props';
import InfoOutline from '@scaleflex/icons/info-outline';

import { LabelPosition } from '../../src/core/check-box-group/types';
import { Size, Type } from '../../src/core/check-box/types';
import CheckBoxGroup from '../../src/core/check-box-group';
import checkboxGroupDocsTemplate from '../docs/checkbox-group.mdx';

const meta: Meta<typeof CheckBoxGroup> = {
  title: 'Inputs/Checkbox/CheckBoxGroup',
  component: CheckBoxGroup,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description:
        'Icon to show after checkbox` icon={(props) => <QuestionMarkOutline {...props} />}` otherwise `icon={<QuestionMarkOutline />}`',
    },
    checked: {
      description: 'If true, the component is checked.',
    },
    label: {
      description: 'checkbox label.',
    },
    labelPosition: {
      description: 'label position, `before` or `after` the checkbox.',
    },
    checkBoxProps: {
      description:
        '[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes) applied to the checkbox input element.',
    },
    checkBoxGroupProps: {
      description: 'Attributes applied to the root element',
    },
    disabled: {
      description: 'If true, the component is disabled.',
    },
    onChange: {
      description: 'Callback fired when the state is changed',
    },
    readOnly: {
      description: 'If true, the component is readonly.',
    },
    size: {
      description: 'Size of the checkbox, `sm` or `md`',
      options: Object.values(Size),
      control: {
        type: 'select',
      },
    },
    type: {
      description: 'Type of the checkbox, `checkbox` or `intermediate`',
      options: Object.values(Type),
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'CheckboxGroup is a wrapper used to group Checkbox components.',
      page: checkboxGroupDocsTemplate,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBoxGroup>;

const defaultArgs = {
  label: 'label',
  checked: false,
  readOnly: false,
  disabled: false,
  labelPosition: LabelPosition.After,
  size: Size.Sm,
  type: Type.Checkbox,
};

export const Primary: Story = {
  args: { ...defaultArgs, icon: (props: IconProps) => <InfoOutline {...props} /> },
  render: ({ checked, ...args }) => {
    const [checkedState, setCheckedState] = useState(false);

    useEffect(() => {
      setCheckedState(checked || false);
    }, [checked]);

    return (
      <CheckBoxGroup {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />
    );
  },
};
