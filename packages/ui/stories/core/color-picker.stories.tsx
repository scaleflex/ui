import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ColorPicker from '../../src/core/color-picker';
import ColorPickerDocsTemplate from '../docs/color-picker.mdx';

const meta: Meta<typeof ColorPicker> = {
  title: 'Inputs/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ColorPickerDocsTemplate,
      subtitle: 'The color picker is a component that allows users to pick a color from a palette.',
    },
  },
  argTypes: {
    defaultColor: {
      description: 'The default color of the color picker',
    },
    pinnedColors: {
      description: 'The pinned colors of the color picker',
    },
    onChange: {
      description: 'The callback function that is called when the color picker is changed',
    },
    showTransparentColor: {
      description: 'If true, the transparent color will be shown in the color picker',
    },
    hidePinIcon: {
      description: 'If true, the pin icon will be hidden in the color picker',
    },
    MenuProps: {
      description:
        'The props of the menu component applied tot the select input in the color picker. Please refer to the [Menu](https://scaleflex.github.io/ui/?path=/docs/navigation-menu--docs#api) component for more information.',
    },
  },
};

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

export const Primary: Story = {
  render: (args) => {
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
            width: '300px',
            height: '24px',
            border: `2px solid ${color}`,
            boxSizing: 'border-box',
            padding: '12px',
            marginLeft: '12px',
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
  },
};
