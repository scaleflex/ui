import React from 'react';
import type { Meta, Story } from '@storybook/react';
import More from '@scaleflex/icons/more';
import type { IconProps } from '@scaleflex/icons/icon.props';
import _IconButtonTable, { IconButtonTableProps } from '../../src/core/icon-button-table';
import { ButtonSize } from '../../src/utils/types';
import { StoryGroup } from './types';

export const IconButtonTable = _IconButtonTable;

export default {
  // title: `${StoryGroup.Inputs}/IconButtonTable`,
  component: IconButtonTable,
  excludeStories: ['IconButtonTable'],

  argTypes: {
    children: {
      description:
        "IconButtonTable is used in tables as IconButton as it has different states, normally contains `icon` function `(props) => <MyIcon {...props} />`. If you use function you will have adaptive icon size. If you don't need it just use `<IconButtonTable><MyIcon /></IconButtonTable>`",
    },
  },
} as Meta;

const defaultArgs = {
  size: ButtonSize.Md,
  disabled: false,
  active: false,
  children: (props: IconProps) => <More {...props} />,
};

const BasicTemplate: Story<IconButtonTableProps> = ({ children, ...args }) => (
  <IconButtonTable {...args}>{children}</IconButtonTable>
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
