import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _AccordionHeader, { AccordionHeaderProps } from '../../src/core/accordion-header';
import { StoryGroup } from './types';

export const AccordionHeader = _AccordionHeader;

export default {
  title: `${StoryGroup.Surfaces}/Accordion/AccordionHeader`,
  component: AccordionHeader,
  excludeStories: ['AccordionHeader'],
} as Meta;

const defaultArgs = {
  label: 'Folders (5)',
  expanded: false,
};

const BasicTemplate: Story<AccordionHeaderProps> = ({ expanded, ...args }) => {
  const [openState, setOpenState] = useState(expanded || false);

  useEffect(() => {
    setOpenState(expanded || false);
  }, [expanded]);

  return <AccordionHeader {...args} expanded={openState} onChange={(value) => setOpenState(value)} />;
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
