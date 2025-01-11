import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import RotationSlider from '../../src/core/rotation-slider';
import { LabelTooltip } from '../../src/core/slider/types';
import RotationSliderDocsTemplate from '../docs/rotation-slider.mdx';

const meta: Meta<typeof RotationSlider> = {
  title: 'Inputs/Sliders/RotationSlider',
  component: RotationSlider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: RotationSliderDocsTemplate,
      subtitle:
        'A slider component designed for precise angle adjustments between -180° and 180°. Ideal for rotating objects or setting directional values with intuitive visual feedback. It is built on top of the Slider component.',
    },
  },
  argTypes: {
    angle: {
      description: 'The angle of the rotation slider.',
    },
    labelTooltipOptions: {
      description: 'The tooltip options of the rotation slider. passed to the Slider component `labelTooltip` prop.',
    },
    labelTooltipProps: {
      description:
        'The props of the tooltip of the rotation slider. passed to the Slider component `componentsProps.labelTooltip` prop.',
    },
    thumbProps: {
      description:
        'The props of the thumb of the rotation slider. passed to the Slider component `componentsProps.thumb` prop.',
    },
    railProps: {
      description:
        'The props of the rail of the rotation slider. passed to the Slider component `componentsProps.rail` prop.',
    },
    trackProps: {
      description:
        'The props of the track of the rotation slider. passed to the Slider component `componentsProps.track` prop.',
    },
    onChange: {
      description: 'The callback function that is called when the value of the rotation slider changes.',
    },
    onMouseDown: {
      description: 'The callback function that is called when the mouse button is pressed down on the rotation slider.',
    },
    onMouseUp: {
      description: 'The callback function that is called when the mouse button is released from the rotation slider.',
    },
    max: {
      description: 'The maximum value of the rotation slider.',
    },
    min: {
      description: 'The minimum value of the rotation slider.',
    },
    step: {
      description: 'The step value of the rotation slider.',
    },
    value: {
      description: 'The value of the rotation slider.',
    },
    annotation: {
      description: 'The unit of the rotation slider.',
    },
    hideMarkText: {
      description: 'Hide the text under the rotation slider.',
    },
    showCurrentMarkText: {
      description: 'Show only the mark text that the slider is currently at.',
    },
    markStyles: {
      description: 'The styles of the mark wrapper of the rotation slider.',
    },
    markTextStyles: {
      description: 'The styles of the mark text of the rotation slider.',
    },
  },
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

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [value, setValue] = useState<number | undefined>(args.value);

    const handleChange = (_: any, newValue: number): void => {
      setValue(newValue);
    };
    return <RotationSlider {...args} onChange={handleChange} value={value} style={{ marginTop: '50px' }} />;
  },
};
