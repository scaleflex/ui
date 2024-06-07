import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ImageComparisonSlider, { ImageComparisonSliderProps } from '../../src/core/image-comparison-slider';

const meta: Meta<typeof ImageComparisonSlider> = {
  title: 'DataDisplay/ImageComparisonSlider',
  component: ImageComparisonSlider,
  excludeStories: ['ImageComparisonSlider'],
};

export default meta;
type Story = StoryObj<typeof ImageComparisonSlider>;

const defaultArgs = {
  leftImgProps: { src: 'https://images.fineartamerica.com/images-medium-large-5/2-earth-from-space-nasa.jpg', alt: 'globe' },
	rightImgProps: { src:'https://i.pinimg.com/originals/ea/e9/49/eae949d2acb583f31cc8d691a524c284.jpg',  alt: 'globe' },
};

const BasicTemplate = ({ ...args }: ImageComparisonSliderProps): JSX.Element => {
  return <ImageComparisonSlider {...args} />;
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
