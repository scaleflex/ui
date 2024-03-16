import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import _AccordionHeader, { AccordionHeaderProps } from '../../src/core/accordion-header';

export const AccordionHeader = _AccordionHeader;

const meta: Meta<typeof AccordionHeader> = {
  title: 'Surface/Accordion/AccordionHeader',
  component: AccordionHeader,
  excludeStories: ['AccordionHeader'],
};

export default meta;
type Story = StoryObj<typeof AccordionHeader>;

const defaultArgs = {
  label: 'Folders (5)',
  expanded: false,
};

const BasicTemplate = ({ expanded, ...args }: AccordionHeaderProps): JSX.Element => {
  const [openState, setOpenState] = useState(expanded || false);

  useEffect(() => {
    setOpenState(expanded || false);
  }, [expanded]);

  return <AccordionHeader {...args} expanded={openState} onChange={(value) => setOpenState(value)} />;
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate expanded={args.expanded} {...args} />,
};
