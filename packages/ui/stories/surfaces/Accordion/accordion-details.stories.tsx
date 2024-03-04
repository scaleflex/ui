import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import _AccordionDetails from '../../../src/core/accordion-details';

export const AccordionDetails = _AccordionDetails;

const meta: Meta<typeof AccordionDetails> = {
  // title: `${StoryGroup.Surfaces}/Accordion/AccordionDetails`,
  // title: 'Surface/Accordion/AccordionDetails',
  component: AccordionDetails,
  excludeStories: ['AccordionDetails'],
};

export default meta;
type Story = StoryObj<typeof AccordionDetails>;

const defaultArgs = {
  expanded: true,
};

const BasicTemplate = ({ expanded, ...args }) => {
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
  render: (args) => <BasicTemplate expanded={args.expanded} args={args} />,
};
