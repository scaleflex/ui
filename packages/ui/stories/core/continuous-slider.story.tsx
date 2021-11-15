import React, { useState } from 'react';
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
  start: 0,
  end: 200,
  step: 1,
  value: 30,
};

const BasicTemplate: Story<ContinuousSliderProps> = ({ ...args }) => {
  const [isFileSizeActive, setIsFileSizeActive] = useState(false);

  return (
    <>
      <ContinuousSlider
        {...args}
        onDragStart={() => setIsFileSizeActive(true)}
        showAnntotaionTooltip={isFileSizeActive}
        style={{ marginTop: '20px', width: '350px' }}
      />
    </>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
