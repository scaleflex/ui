import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import _AccordionHeader from '../../../src/core/accordion-header';

export const AccordionHeader = _AccordionHeader;

const meta: Meta<typeof AccordionHeader> = {
  // title: `${StoryGroup.Surfaces}/Accordion/AccordionDetails`,
  // title: 'Surface/Accordion/AccordionDetails',
  component: AccordionHeader,
  excludeStories: ['AccordionHeader'],
};

export default meta;
type Story = StoryObj<typeof AccordionHeader>;

const defaultArgs = {
  label: 'Folders (5)',
  expanded: false,
};

const BasicTemplate = ({ expanded, ...args }) => {
  const [openState, setOpenState] = useState(expanded || false);

  useEffect(() => {
    setOpenState(expanded || false);
  }, [expanded]);

  return <AccordionHeader {...args} expanded={openState} onChange={(value) => setOpenState(value)} />;
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate expanded={args.expanded} args={args} />,
};
