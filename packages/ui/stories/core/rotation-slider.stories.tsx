import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import RotationSlider, { RotationSliderProps } from '../../src/core/rotation-slider';
import { LabelTooltip } from '../../src/core/slider/types';

const meta: Meta<typeof RotationSlider> = {
  title: 'Inputs/Sliders/RotationSlider',
  component: RotationSlider,
  excludeStories: ['RotationSlider'],
};

export default meta;
type Story = StoryObj<typeof RotationSlider>;

const defaultArgs = {
  min: -180,
  max: 180,
  step: 1,
  value: 0,
  angle: 60,
  labelTooltipOptions: LabelTooltip.Auto,
};

const BasicTemplate = ({ ...args }: RotationSliderProps): JSX.Element => {
  const [value, setValue] = useState<number | number[] | undefined>(args.value);

  const handleChange = (event: any, newValue: number | number[]): void => {
    setValue(newValue);
  };
  return <RotationSlider {...args} onChange={handleChange} value={value} style={{ marginTop: '50px' }} />;
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
