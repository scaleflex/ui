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
  color: '#8f4646',
};

const BasicTemplate: Story<ColorPickerProps> = ({ ...args }) => {
  const [pinnedColors, setPinnedColors] = useState<Array<string>>(DEFAULT_EDITOR_COLOR);

  const [color, setColor] = useState(() => args.color);

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          borderRadius: '2px',
          width: '24px',
          height: '24px',
          border: `2px solid ${color}`,
          cursor: 'pointer',
          boxSizing: 'border-box',
        }}
      />

      <ColorPicker
        pinnedColors={pinnedColors}
        defaultColor={color}
        setPinnedColors={setPinnedColors}
        onChange={setColor}
      />
    </>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
