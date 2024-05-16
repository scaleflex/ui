import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Rating, { RatingProps } from '../../src/core/rating';

const meta: Meta<typeof Rating> = {
  title: 'Inputs/Rating',
  component: Rating,
  excludeStories: ['Rating'],

  argTypes: {
    value: {
      description: 'The rating value.',
    },
    name: {
      description:
        'The name attribute of the radio input elements. If readOnly is true, the prop is required, this input name should be unique within the parent form.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

const defaultArgs = {
  value: 3,
};

const ReadOnlyTemplate = ({ ...args }: RatingProps): JSX.Element => <Rating {...args} />;

const ControlledTemplate = ({ value, ...args }: RatingProps): JSX.Element => {
  const [valueState, setValueState] = useState(value);

  useEffect(() => {
    setValueState(value);
  }, [value]);

  return (
    <Rating
      {...args}
      value={valueState}
      onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => setValueState(+currentTarget.value)}
    />
  );
};

export const ReadOnly: Story = {
  args: { ...defaultArgs, readOnly: true },
  render: (args) => <ReadOnlyTemplate {...args} />,
};

export const Controlled: Story = {
  args: { ...defaultArgs, name: 'controlled-raiting-field' },
  render: (args) => <ControlledTemplate {...args} />,
};
