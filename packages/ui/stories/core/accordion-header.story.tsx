import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _AccordionHeader, { AccordionHeaderProps } from '../../src/core/accordion-header';
import { StoryGroup } from './types';

export const AccordionHeader = _AccordionHeader;

export default {
  title: `${StoryGroup.Surfaces}/AccordionHeader`,
  component: AccordionHeader,
  excludeStories: ['AccordionHeader'],
} as Meta;

const defaultArgs = {
  label: 'Folders (5)',
  open: false,
};

const BasicTemplate: Story<AccordionHeaderProps> = ({
  open, ...args
}) => {
  const [openState, setOpenState] = useState(open || false);

  useEffect(() => {
    setOpenState(open || false);
  }, [open]);

  return (
    <AccordionHeader
      {...args}
      open={openState}
      onChange={(value) => setOpenState(value)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
