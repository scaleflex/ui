import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _ContinuousSlider, { ContinuousSliderProps } from '../../src/core/continuous-slider';
import { StoryGroup } from './types';

export const ContinuousSlider = _ContinuousSlider;

export default {
  title: `${StoryGroup.Inputs}/Sliders/ContinuousSlider`,
  component: ContinuousSlider,
  excludeStories: ['ContinuousSlider'],
} as Meta;

const defaultArgs = {
  start: -20,
  end: 200,
  step: 1,
  value: 0,
};

const BasicTemplate: Story<ContinuousSliderProps> = ({ ...args }) => {
  return (
    <>
      <ContinuousSlider {...args} style={{ marginTop: '20px', width: '350px' }} hideOverlay />
    </>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
