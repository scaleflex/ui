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
  leftImgProps: { src: 'https://scaleflex.cloudimg.io/v7/demo/Ask-demo/sunflower.jpg?smoothing=100', alt: 'sunflower' },
  rightImgProps: { src:'https://fdocs.filerobot.com/https://ask.filerobot.com/deliver/fdocs/72ea764f-8ca7-4db1-b259-6b5e09dced2a.png',  alt: 'sunflower' },
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
  return <ImageComparisonSlider style={{ width: 600, height: 600 }} {...args} />;
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};