import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@scaleflex/ui/core';

import Slider, { SliderProps } from '../../src/core/slider';
import { LabelTooltip } from '../../src/core/slider/types';

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Sliders/Slider',
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
};

export default meta;
type Story = StoryObj<typeof Slider>;

const defaultArgs = {
  annotation: 'MB',
  min: 0,
  max: 200,
  step: 1,
  labelTooltip: LabelTooltip.Auto,
};

const BasicTemplate = ({ ...args }: SliderProps): JSX.Element => {
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

const SliderComponentPropsTemplate = ({ ...args }: SliderProps): JSX.Element => {
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

const UnControlledSliderTemplate = ({ ...args }: SliderProps): JSX.Element => {
  return (
    <Slider
      {...args}
      defaultValue={args.defaultValue}
      style={{ width: '350px', marginTop: '20px', marginLeft: '10px' }}
    />
  );
};

const SliderLabelTemplate = ({ ...args }: SliderProps): JSX.Element => {
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

export const Primary: Story = {
  args: { ...defaultArgs, value: 35 },
  render: (args) => <BasicTemplate {...args} />,
};

export const RangeSlider: Story = {
  args: { ...defaultArgs, value: [20, 45], labelTooltip: LabelTooltip.On },
  render: (args) => <BasicTemplate {...args} />,
};

export const UsingComponentProps: Story = {
  args: { ...defaultArgs, value: 50 },
  render: (args) => <SliderComponentPropsTemplate {...args} />,
};

export const UnControlledSlider: Story = {
  args: { ...defaultArgs, defaultValue: 30 },
  render: (args) => <UnControlledSliderTemplate {...args} />,
};

export const WithLabel: Story = {
  args: { ...defaultArgs, value: 20 },
  render: (args) => <SliderLabelTemplate {...args} />,
};
