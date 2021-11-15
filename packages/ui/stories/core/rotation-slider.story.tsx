import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _RotationSlider, { RotationSliderProps } from '../../src/core/rotation-slider';
import { StoryGroup } from './types';

export const RotationSLider = _RotationSlider;

export default {
  title: `${StoryGroup.Inputs}/Sliders/RotationSlider`,
  component: RotationSLider,
  excludeStories: ['RotationSLider'],
} as Meta;

const defaultArgs = {
  start: -20,
  end: 20,
  step: 1,
  value: 0,
};

const BasicTemplate: Story<RotationSliderProps> = ({ ...args }) => {
  const [isFileSizeActive, setIsFileSizeActive] = useState(false);
  return (
    <>
      <RotationSLider
        {...args}
        onChange={() => setIsFileSizeActive(true)}
        isActive={isFileSizeActive}
        showAnntotaionTooltip
        style={{ marginTop: '50px' }}
      />
    </>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
