import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ErrorBroke from '@scaleflex/icons/error-broke';

import { lightPalette } from '../../src/theme/roots/palette';
import { Color } from '../../src/utils/types/palette';
import ImageComparisonSlider from '../../src/core/image-comparison-slider';
import ImageComparisonSliderDocsTemplate from '../docs/image-comparison-slider.mdx';

const meta: Meta<typeof ImageComparisonSlider> = {
  title: 'DataDisplay/ImageComparisonSlider',
  component: ImageComparisonSlider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ImageComparisonSliderDocsTemplate,
      subtitle: 'Display an image comparison slider.',
    },
  },
  argTypes: {
    leftImgProps: {
      description: 'The left image props passed to image element.',
    },
    rightImgProps: {
      description: 'The right image props passed to image element.',
    },
    fallbackPreviewProps: {
      description:
        'fallback props used when image failed to load. <br/> ``{ gap?: number; iconSize?: number; iconColor?: string;backgroundColor?: string; msgProps?: { text?: string; color?: string }; icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;}``',
    },
    handleProps: {
      description: 'The handle props for the drag slider.',
    },
    imgWrapperProps: {
      description: 'Image wrapper props for the left and right images.',
    },
    footerProps: {
      description:
        'Props for the footer under the image slider. <br/> ``{ leftText?: string; rightText?: string; hideFooter?: boolean }``',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageComparisonSlider>;

const defaultArgs = {
  leftImgProps: {
    // src: 'https://scaleflex.cloudimg.io/v7/sfx-ui/grey-2-earth-from-space-nasa.webp?vh=8d2de0',
    src: 'https://fyjnhqim.filerobot.com/11111.jpeg?vh=i0aa2f7f',
    alt: 'globe',
  },
  rightImgProps: { src: 'https://fyjnhqim.filerobot.com/11111.jpeg?vh=i0aa2f7f&grey=1', alt: 'globe' },
  fallbackPreviewProps: {
    gap: 10,
    iconSize: 150,
    iconColor: lightPalette[Color.IconsSecondary],
    backgroundColor: lightPalette[Color.BackgroundPrimaryHover],
    msgProps: { text: 'Failed to load image', color: lightPalette[Color.TextSecondary] },
    icon: ErrorBroke,
  },
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <ImageComparisonSlider style={{ width: 600, height: 600 }} {...args} />,
};
