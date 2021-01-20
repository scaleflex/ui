import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _AccordionDetails, { AccordionDetailsProps } from '../../src/core/accordion-details';
import { StoryGroup } from './types';

export const AccordionDetails = _AccordionDetails;

export default {
  title: `${StoryGroup.Surfaces}/AccordionDetails`,
  component: AccordionDetails,
  excludeStories: ['AccordionDetails'],
} as Meta;

const defaultArgs = {
  expanded: false,
};

const BasicTemplate: Story<AccordionDetailsProps> = ({
  expanded, ...args
}) => {
  const [openState, setOpenState] = useState(expanded || false);

  useEffect(() => {
    setOpenState(expanded || false);
  }, [expanded]);

  return (
    <AccordionDetails
      {...args}
      expanded={openState}
    >
      <p>Scaleflex Accordion Details</p>
    </AccordionDetails>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
