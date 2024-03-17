import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import More from '@scaleflex/icons/more';
import type { IconProps } from '@scaleflex/icons/icon.props';
import IconButtonTable from '../../src/core/icon-button-table';
import { ButtonSize } from '../../src/utils/types';

const meta: Meta<typeof IconButtonTable> = {
  title: 'Inputs/IconButtonTable',
  component: IconButtonTable,
  excludeStories: ['IconButtonTable'],

  argTypes: {
    children: {
      description:
        "IconButtonTable is used in tables as IconButton as it has different states, normally contains `icon` function `(props) => <MyIcon {...props} />`. If you use function you will have adaptive icon size. If you don't need it just use `<IconButtonTable><MyIcon /></IconButtonTable>`",
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonTable>;

const defaultArgs = {
  size: ButtonSize.Md,
  disabled: false,
  active: false,
  children: (props: IconProps) => <More {...props} />,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: ({ children, ...args }) => <IconButtonTable {...args}>{children}</IconButtonTable>,
};
