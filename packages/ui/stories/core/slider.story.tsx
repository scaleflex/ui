import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Slider, { SliderProps } from '../../src/core/slider';
import { StoryGroup } from './types';
import { NumberofSliders } from '../../src/core/slider/types';

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
  value: { from: 5, to: 35 },
  numberOfSliders: NumberofSliders.One,
};

const BasicTemplate: Story<SliderProps> = ({ ...args }) => {
  const [isFileSizeActive, setIsFileSizeActive] = useState(false);
  return (
    <Slider
      {...args}
      onChange={() => setIsFileSizeActive(true)}
      isActive={isFileSizeActive}
      style={{ width: '350px' }}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
