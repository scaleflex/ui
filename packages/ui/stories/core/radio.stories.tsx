import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Radio, { RadioProps, RadioSize } from '../../src/core/radio';

const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
  excludeStories: ['Radio'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

const defaultArgs = {
  checked: false,
  readOnly: false,
  disabled: false,
  size: RadioSize.Sm,
};

const BasicTemplate = ({ checked, ...args }: RadioProps): JSX.Element => {
  const [checkedState, setCheckedState] = useState(checked || false);

  useEffect(() => {
    setCheckedState(checked || false);
  }, [checked]);

  return <Radio {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />;
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
