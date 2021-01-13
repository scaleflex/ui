import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Rating, { RatingProps } from '../../src/core/rating';
import { StoryGroup } from './types';

export const Rating = _Rating;

export default {
  title: `${StoryGroup.Inputs}/Rating`,
  component: Rating,
  excludeStories: ['Rating'],

  argTypes: {
    value: {
      description: 'The rating value.'
    },
    name: {
      description: 'The name attribute of the radio input elements. If readOnly is true, the prop is required, this input name should be unique within the parent form.'
    }
  }
} as Meta;

const defaultArgs = {
  value: 3,
};

const ReadOnlyTemplate: Story<RatingProps> = ({
  ...args
}) => (
  <Rating {...args} />
);

const ControlledTemplate: Story<RatingProps> = ({
  value, ...args
}) => {
  const [valueState, setValueState] = useState(value);

  useEffect(() => {
    setValueState(value);
  }, [value]);

  return (
    <Rating
      {...args}
      value={valueState}
      onChange={({ target }) => setValueState(+target.value)}
    />
  );
};

// Controlled
export const Controlled = ControlledTemplate.bind({});
Controlled.args = {
  ...defaultArgs,
  name: 'controlled-raiting-field'
};

// ReadOnly
export const ReadOnly = ReadOnlyTemplate.bind({});
ReadOnly.args = {
  ...defaultArgs,
  readOnly: true
};
