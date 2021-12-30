import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _RotationSlider, { RotationSliderProps } from '../../src/core/rotation-slider';
import { StoryGroup } from './types';
import { LabelTooltip } from '../../src/core/slider/types';

export const RotationSLider = _RotationSlider;

export default {
  title: `${StoryGroup.Inputs}/Sliders/RotationSlider`,
  component: RotationSLider,
  excludeStories: ['RotationSLider'],
} as Meta;

const defaultArgs = {
  min: -60,
  max: 60,
  step: 1,
  value: 0,
  labelTooltipOptions: LabelTooltip.Auto,
};

const BasicTemplate: Story<RotationSliderProps> = ({ ...args }) => {
  const [value, setValue] = useState<number | number[] | undefined>(args.value);

  const handleChange = (event: any, newValue: number | number[]): void => {
    setValue(newValue);
  };
  return (
    <>
      <RotationSLider {...args} onChange={handleChange} value={value} style={{ marginTop: '50px' }} />
    </>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
