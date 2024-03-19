import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Popper, { PopperProps } from '../../src/core/popper';
import { Position } from '../../src/core/popper/types';

const meta: Meta<typeof Popper> = {
  title: 'Surfaces/Popper',
  component: Popper,
  excludeStories: ['Popper'],
};

export default meta;
type Story = StoryObj<typeof Popper>;

const defaultArgs = {
  position: Position.Top,
};

const style = {
  border: '1px solid',
  padding: '8px',
  backgroundColor: '#37414b',
  color: 'white',
};

const BasicTemplate = ({ ...args }: PopperProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper {...args} open={open} anchorEl={anchorEl}>
        <div style={style}>The content of the Popper.</div>
      </Popper>
    </div>
  );
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
