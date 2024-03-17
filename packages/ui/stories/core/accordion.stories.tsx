import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion, { AccordionProps } from '../../src/core/accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Surfaces/Accordion',
  component: Accordion,
  argTypes: {
    children: {
      description: 'Accordion children are sub-module components: `AccordionHeader, AccordionDetails`.',
    },
  },
  excludeStories: ['Accordion'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const defaultArgs = {
  label: 'Folders (5)',
  expanded: false,
  hideIcon: false,
};

const BasicTemplate = ({ expanded, ...args }: AccordionProps): JSX.Element => {
  const [openState, setOpenState] = useState(expanded || false);

  useEffect(() => {
    setOpenState(expanded || false);
  }, [expanded]);

  return (
    <Accordion {...args} expanded={openState} onChange={(value) => setOpenState(value)}>
      <div>This is Scaleflex Accordion </div>
    </Accordion>
  );
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate expanded={args.expanded} {...args} />,
};
