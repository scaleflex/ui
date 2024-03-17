import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AccordionDetails, { AccordionDetailsProps } from '../../src/core/accordion-details';

const meta: Meta<typeof AccordionDetails> = {
  title: 'Surfaces/Accordion/AccordionDetails',
  component: AccordionDetails,
  excludeStories: ['AccordionDetails'],
};

export default meta;
type Story = StoryObj<typeof AccordionDetails>;

const defaultArgs = {
  expanded: true,
};

const BasicTemplate = ({ expanded, ...args }: AccordionDetailsProps): JSX.Element => {
  const [openState, setOpenState] = useState(expanded || true);

  useEffect(() => {
    setOpenState(expanded || true);
  }, [expanded]);

  return (
    <AccordionDetails {...args} expanded={openState}>
      <p>Scaleflex Accordion Details</p>
    </AccordionDetails>
  );
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate expanded={args.expanded} {...args} />,
};
