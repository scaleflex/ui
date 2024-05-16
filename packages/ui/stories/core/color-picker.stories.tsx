/* eslint-disable no-console */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ColorPicker from '../../src/core/color-picker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Surfaces/ColorPicker',
  component: ColorPicker,
  excludeStories: ['ColorPicker'],
} as Meta;

export default meta;
type Story = StoryObj<typeof ColorPicker>;

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

const BasicTemplate = ({ ...args }): JSX.Element => {
  const [pinnedColors, setPinnedColors] = useState<Array<string> | undefined>(DEFAULT_EDITOR_COLOR);
  const [color, setColor] = useState('#d35c9d');

  const handleChange = (
    hexColor: string,
    rgbColor: string | undefined,
    colorPickerPinnedColors: Array<string> | undefined
  ): void => {
    console.log('hexColor:', hexColor, 'rgbColor:', rgbColor);
    console.log('colorPickerPinned', colorPickerPinnedColors);
    setColor(hexColor);
    setPinnedColors(colorPickerPinnedColors);
  };

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
        {...args}
        defaultColor={color}
        pinnedColors={pinnedColors}
        onChange={handleChange}
        showTransparentColor
      />
    </>
  );
};

export const Primary: Story = {
  render: (args) => <BasicTemplate {...args} />,
};
