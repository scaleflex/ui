import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';

import _ColorPicker, { ColorPickerProps } from '../../src/core/color-picker';
import { StoryGroup } from './types';

export const ColorPicker = _ColorPicker;

export default {
  title: `${StoryGroup.Surfaces}/ColorPicker`,
  component: ColorPicker,
  excludeStories: ['ColorPicker'],
} as Meta;

const DEFAULT_EDITOR_COLOR = [
  '#ffffff',
  '#728394',
  '#34495e',
  '#3498db',
  '#1870a9',
  '#5b48a2',
  '#8d44ad',
  '#d35c9e',
  '#ffa800',
  '#e67e22',
  '#e74c3c',
  '#8fb021',
  '#1abc9c',
  '#27ae60',
];

const defaultArgs = {
  color: {
    circleBarPos: 181.51260504201682,
    circleSquarePos: [26, 89.11764705882354],
    hexValue: '#d35c9e',
    hue: 326.7226890756302,
    inputType: 'hex',
    rgbValue: [211, 92, 158],
  },
  pinnedColors: DEFAULT_EDITOR_COLOR,
};

const BasicTemplate: Story<ColorPickerProps> = ({ ...args }) => {
  const [pinnedColors, setPinnedColors] = useState<Array<string>>(args.pinnedColors);
  const [present, setPresent] = useState(args.color);

  return (
    <div
      style={{
        width: '20%',
        padding: '12px',
        borderRadius: '2px',
        boxShadow:
          'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
        backgroundColor: 'rgb(255 255 255)',
      }}
    >
      <ColorPicker
        pinnedColors={pinnedColors}
        color={present}
        setColor={setPresent}
        setPinnedColors={setPinnedColors}
      />
    </div>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
