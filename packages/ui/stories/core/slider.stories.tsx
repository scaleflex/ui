import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Slider from '../../src/core/slider';
import { LabelTooltip } from '../../src/core/slider/types';
import SliderDocsTemplate from '../docs/slider.mdx';

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Sliders/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SliderDocsTemplate,
      subtitle: 'Sliders allow users to select a value from a range of values.',
    },
  },
  argTypes: {
    components: {
      description:
        'To replace components used for each slot inside the Slider:	`{ Rail?: React.ElementType, Track?: React.ElementType, `<br />` Thumb?: React.ElementType, LabelTooltip?: React.ElementType }`',
    },
    componentsProps: {
      description:
        'Props passed to each slot inside the Slider:	`{ rail?: object, thumb?: object; track?: object, labelTooltip?: object }`',
    },
    value: {
      description: 'The value of the slider.',
    },
    labelTooltip: {
      description: 'Show the current value of the slider in a tooltip.',
    },
    annotation: {
      description: 'The unit of the slider.',
    },
    hideAnnotation: {
      description: 'Hide the annotation of the slider.',
    },
    hideTrack: {
      description: 'Hide the track of the slider.',
    },
    min: {
      description: 'The minimum value of the slider.',
    },
    max: {
      description: 'The maximum value of the slider.',
    },
    step: {
      description: 'The step value of the slider.',
    },
    defaultValue: {
      description: 'The default value of the slider.',
    },
    onChange: {
      description: 'The callback function that is called when the slider value changes.',
    },
    onMouseDown: {
      description: 'The callback function that is called when the slider is clicked.',
    },
    onMouseUp: {
      description: 'The callback function that is called when the slider is released.',
    },
    disabled: {
      description: 'if true, the slider is disabled.',
    },
    disableSwap: {
      description:
        "If true, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.",
    },
  },
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

export const Primary: Story = {
  args: { ...defaultArgs, value: 35 },
  render: (args) => {
    const [value, setValue] = useState<number | number[] | undefined>(args.value);

    const handleChange = (_: any, newValue: number | number[]): void => {
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
  },
};

export const RangeSlider: Story = {
  args: { ...defaultArgs, value: [20, 45], labelTooltip: LabelTooltip.On },
  render: Primary.render,
};

export const UsingComponentProps: Story = {
  args: { ...defaultArgs, value: 50 },
  render: (args) => {
    const [value, setValue] = useState<number | number[] | undefined>(args.value);

    const handleChange = (_: any, newValue: number | number[]): void => {
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
  },
};

export const UnControlledSlider: Story = {
  args: { ...defaultArgs, defaultValue: 30 },
  render: (args) => (
    <Slider
      {...args}
      defaultValue={args.defaultValue}
      style={{ width: '350px', marginTop: '20px', marginLeft: '10px' }}
    />
  ),
};

export const LabelsTooltip: Story = {
  args: { ...defaultArgs, defaultValue: 30 },
  render: (args) => {
    const [value, setValue] = useState<number | number[] | undefined>(args.value);

    const handleChange = (_: any, newValue: number | number[]): void => {
      setValue(newValue);
    };

    return (
      <div style={{ width: '350px' }}>
        <Slider {...args} value={value} onChange={handleChange} />
        <Slider {...args} value={value} onChange={handleChange} labelTooltip={LabelTooltip.On} />
        <Slider {...args} value={value} onChange={handleChange} labelTooltip={LabelTooltip.Off} />
      </div>
    );
  },
};
