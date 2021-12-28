import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Slider, { SliderProps } from '../../src/core/slider';
import { StoryGroup } from './types';
import { LabelTooltip } from '../../src/core/slider/types';

export const Slider = _Slider;

export default {
  title: `${StoryGroup.Inputs}/Sliders/Slider`,
  component: Slider,
  excludeStories: ['Slider'],
} as Meta;

const defaultArgs = {
  annotation: 'MB',
  min: 0,
  max: 200,
  step: 1,
  labelTooltip: LabelTooltip.Auto,
};

const BasicTemplate: Story<SliderProps> = ({ ...args }) => {
  const [value, setValue] = useState<number | number[]>(30);

  const handleChange = (event: any, newValue: number | number[]): void => {
    setValue(newValue);
  };

  return (
    <Slider
      {...args}
      value={value}
      onChange={handleChange}
      style={{ width: '350px', marginTop: '20px', marginLeft: '10px' }}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
