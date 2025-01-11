import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Accordion from '../../src/core/accordion';
import AccordionDocsTemplate from '../docs/accordion.mdx';

const meta: Meta<typeof Accordion> = {
  title: 'Surfaces/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: AccordionDocsTemplate,
      subTitle: 'The Accordion component lets users show and hide sections of related content on a page.',
    },
  },
  argTypes: {
    children: {
      description: 'The content of the component.',
    },
    expanded: {
      description: 'If true, the component is expanded.',
    },
    onChange: {
      description: 'Callback fired when the state is changed.',
    },
    onClick: {
      description: 'Callback fired when the component is clicked.',
    },
    onContextMenu: {
      description: 'Callback fired when the component is context-clicked.',
    },
    hideIcon: {
      description: 'If true, arrow icon is hidden.',
    },
    label: {
      description: 'The label of the component.',
    },
    iconProps: {
      description: 'Props applied to the arrow icon.',
    },
    fullWidth: {
      description: 'If true, the component is full width.',
    },
    detailStyle: {
      description: 'Styles applied to the details component.',
    },
    headerStyle: {
      description: 'Styles applied to the header component.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const defaultArgs = {
  label: 'Folders (5)',
  expanded: false,
  hideIcon: false,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [openState, setOpenState] = useState(args.expanded || false);

    useEffect(() => {
      setOpenState(args.expanded || false);
    }, [args.expanded]);

    return (
      <Accordion {...args} expanded={openState} onChange={(value) => setOpenState(value)}>
        <div>This is Scaleflex Accordion </div>
      </Accordion>
    );
  },
};
