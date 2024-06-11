import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ImageComparisonSlider, { ImageComparisonSliderProps } from '../../src/core/image-comparison-slider';
import { lightPalette } from '@scaleflex/ui/theme/roots/palette';
import { Color } from '@scaleflex/ui/utils/types/palette';
import ErrorBroke from '@scaleflex/icons/error-broke';

const meta: Meta<typeof ImageComparisonSlider> = {
  title: 'DataDisplay/ImageComparisonSlider',
  component: ImageComparisonSlider,
  excludeStories: ['ImageComparisonSlider'],
};

export default meta;
type Story = StoryObj<typeof ImageComparisonSlider>;

const defaultArgs = {
  leftImgProps: { src: 'https://scaleflex.cloudimg.io/v7/sfx-ui/eae949d2acb583f31cc8d691a524c284.jpg?vh=0ddbce', alt: 'globe' },
  rightImgProps: { src:'https://scaleflex.cloudimg.io/v7/sfx-ui/2-earth-from-space-nasa.jpg?vh=4be2d8',  alt: 'globe' },
  fallbackPreviewProps: {
    gap: 10,
    iconSize: 150,
    iconColor: lightPalette[Color.IconsSecondary],
    backgroundColor: lightPalette[Color.BackgroundPrimaryHover],
    msgProps: { text: 'Failed to load image', color: lightPalette[Color.TextSecondary] },
    icon: ErrorBroke
  }
};

const BasicTemplate = ({ ...args }: ImageComparisonSliderProps): JSX.Element => {
  return <ImageComparisonSlider {...args} />;
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};