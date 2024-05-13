import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Popper, { VirtualElement } from '../../src/core/popper';
import { Position } from '../../src/core/popper/types';

const meta = {
  title: 'Surfaces/Popper',
  component: Popper,
} satisfies Meta<typeof Popper>;

export default meta;
type Story = StoryObj<typeof meta>;

const style = {
  border: '1px solid',
  padding: '8px',
  backgroundColor: '#37414b',
  color: 'white',
};

const BasicTemplate = ({ ...args }): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<Element | VirtualElement | undefined>(undefined);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(anchorEl ? undefined : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper position={args.position} open={args.open || open} anchorEl={anchorEl}>
        <div style={style}>The content of the Popper.</div>
      </Popper>
    </div>
  );
};

export const Primary: Story = {
  args: {
    position: Position.Bottom,
    open: false,
  },
  render: (args) => <BasicTemplate {...args} />,
};
