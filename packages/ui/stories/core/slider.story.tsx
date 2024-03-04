import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import { Label } from '@scaleflex/ui/core';
import _Slider, { SliderProps } from '../../src/core/slider';
import { StoryGroup } from './types';
import { LabelTooltip } from '../../src/core/slider/types';

export const Slider = _Slider;

export default {
  // title: `${StoryGroup.Inputs}/Sliders/Slider`,
  component: Slider,
  argTypes: {
    components: {
      description:
        'To replace components used for each slot inside the Slider:	`{ Rail?: React.ElementType, Track?: React.ElementType, `<br />` Thumb?: React.ElementType, LabelTooltip?: React.ElementType }`',
    },
    componentsProps: {
      description:
        'Props passed to each slot inside the Slider:	`{ rail?: object, thumb?: object; track?: object, labelTooltip?: object }`',
    },
  },
  excludeStories: ['Slider'],
} as Meta;

const defaultArgs = {
  annotation: 'MB',
  min: 0,
  max: 200,
  step: 1,
  labelTooltip: LabelTooltip.Auto,
};

/**
 * BasicTemplate
 */
const BasicTemplate: Story<SliderProps> = ({ ...args }) => {
  const [value, setValue] = useState<number | number[] | undefined>(args.value);

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
Basic.args = { ...defaultArgs, value: 35 };

// RangeSlider
export const RangeSlider = BasicTemplate.bind({});
RangeSlider.args = { ...defaultArgs, value: [20, 45], labelTooltip: LabelTooltip.On };

/**
 * SliderComponentPropsTemplate
 */
const SliderComponentPropsTemplate: Story<SliderProps> = ({ ...args }) => {
  const [value, setValue] = useState<number | number[] | undefined>(args.value);

  const handleChange = (event: any, newValue: number | number[]): void => {
    setValue(newValue);
  };

  const color = 'rgb(177, 54, 54)';
  return (
    <Slider
      {...args}
      value={value}
      onChange={handleChange}
      style={{ width: '350px', marginTop: '20px', marginLeft: '10px' }}
      componentsProps={{
        rail: {
          style: {
            background: color,
          },
        },
        track: {
          style: {
            background: color,
            border: `1px solid ${color}`,
          },
        },
        thumb: {
          style: {
            border: `2px solid ${color}`,
            background: 'rgb(255, 255, 255)',
          },
        },
        labelTooltip: {
          style: {
            background: color,
          },
        },
      }}
    />
  );
};

// UsingComponentProps
export const UsingComponentProps = SliderComponentPropsTemplate.bind({});
UsingComponentProps.args = { ...defaultArgs, value: 50 };

const unControlledSliderTemplate: Story<SliderProps> = ({ ...args }) => {
  return (
    <Slider
      {...args}
      defaultValue={args.defaultValue}
      style={{ width: '350px', marginTop: '20px', marginLeft: '10px' }}
    />
  );
};

// UnControlledSlider
export const UncontrolledSlider = unControlledSliderTemplate.bind({});
UncontrolledSlider.args = { ...defaultArgs, defaultValue: 30 };

const SliderLabelTemplate: Story<SliderProps> = ({ ...args }) => {
  const [value, setValue] = useState<number | number[] | undefined>(args.value);

  const handleChange = (event: any, newValue: number | number[]): void => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
        marginLeft: '10px',
      }}
    >
      <Slider
        {...args}
        value={value}
        onChange={handleChange}
        hideAnnotation
        hideTrack
        style={{ width: '350px', marginRight: '4px' }}
      />
      <Label>{`${value}%`}</Label>
    </div>
  );
};

// UnControlledSlider
export const withLabel = SliderLabelTemplate.bind({});
withLabel.args = { ...defaultArgs, value: 20 };
