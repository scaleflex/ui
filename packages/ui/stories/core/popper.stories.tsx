import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';

import Popper, { VirtualElement } from '../../src/core/popper';
import { Position } from '../../src/core/popper/types';
import { PopperPositionType } from '../../src/core/popper/popper.props';
import PopperDocsTemplate from '../docs/popper.mdx';
import Button from '../../src/core/button';

const meta = {
  title: 'DataDisplay/Popper',
  component: Popper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'A Popper can be used to display some content on top of another.',
      page: PopperDocsTemplate,
    },
  },
  argTypes: {
    anchorEl: {
      description:
        'Set the position of the popper. The return value will passed as the reference object of the Popper instance.',
    },
    position: {
      description: 'Popper Placement.',
    },
    popperOptions: {
      description: 'Options provided to the [Popper.js](https://popper.js.org/docs/v2/constructors/#options) instance.',
    },
    open: {
      description: 'If true, the component is shown.',
    },
    warning: {
      description: 'Changes arrow color to warning color',
    },
    overlay: {
      description: 'Enables overlay element under popper',
    },
    onClick: {
      description: 'Handle onclick on the overlay element',
    },
    arrow: {
      description: 'Shows arrow on popper element.',
    },
    zIndex: {
      description: 'Modifies Popper element z-index.',
    },
    enableUnderlayingEvent: {
      description: 'Enables clicking on any element behind overlay element.',
    },
    wrapperStyles: {
      description: 'Modifies popper wrapper styles',
    },
    disablePortal: {
      description: 'The children will be under the DOM hierarchy of the parent component.',
    },
  },
} satisfies Meta<typeof Popper>;

export default meta;
type Story = StoryObj<typeof meta>;

const TextWrapper = styled.div`
  border: 1px solid;
  padding: 8px;
  background-color: #37414b;
  color: white;
`;

const Container = styled.div`
  width: 550px;
  margin: 16px;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MiddleGridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
`;

const MiddleGridLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50%;
  gap: 2px;
  margin: 4px 0px;

  & > button {
    text-transform: uppercase;
  }
`;

const MiddleGridRight = styled.div`
  display: flex;
  max-width: 50%;
  width: 100%;
  align-items: flex-end;
  gap: 2px;
  flex-direction: column;
  margin: 4px 0px;

  & > button {
    text-transform: uppercase;
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2px;

  & > button {
    text-transform: uppercase;
  }
`;

export const Primary: Story = {
  args: {
    position: Position.Bottom,
    open: false,
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = React.useState<Element | VirtualElement | undefined>(undefined);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
      setAnchorEl(anchorEl ? undefined : event.currentTarget);
    };

    return (
      <div>
        <button type="button" onClick={handleClick}>
          Toggle Popper
        </button>
        <Popper position={args.position} open={args.open || Boolean(anchorEl)} anchorEl={anchorEl}>
          <TextWrapper>The content of the Popper.</TextWrapper>
        </Popper>
      </div>
    );
  },
};

export const PositionedPopper: Story = {
  args: {
    position: Position.Bottom,
    open: false,
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = React.useState<Element | VirtualElement | undefined>(undefined);
    const [open, setOpen] = React.useState(false);
    const [position, setPosition] = React.useState<PopperPositionType>(Position.Auto);

    const handleClick =
      (newPosition: PopperPositionType) =>
      (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => position !== newPosition || !prev);
        setPosition(newPosition);
      };

    return (
      <Container>
        <Popper position={position} open={open || args.open} anchorEl={anchorEl}>
          <TextWrapper>The content of the Popper.</TextWrapper>
        </Popper>
        <GridContainer>
          <Grid>
            <Button onClick={handleClick(Position.TopStart)}>{Position.TopStart}</Button>
            <Button onClick={handleClick(Position.Top)}> {Position.Top}</Button>
            <Button onClick={handleClick(Position.TopEnd)}>{Position.TopEnd}</Button>
          </Grid>
        </GridContainer>
        <MiddleGridContainer>
          <MiddleGridLeft>
            <Button onClick={handleClick(Position.LeftStart)}>{Position.LeftStart}</Button>
            <Button onClick={handleClick(Position.Left)}> {Position.Left}</Button>
            <Button onClick={handleClick(Position.LeftEnd)}>{Position.LeftEnd}</Button>
          </MiddleGridLeft>
          <MiddleGridRight>
            <Button onClick={handleClick(Position.RightStart)}>{Position.RightStart}</Button>
            <Button onClick={handleClick(Position.Right)}> {Position.Right}</Button>
            <Button onClick={handleClick(Position.RightEnd)}>{Position.RightEnd}</Button>
          </MiddleGridRight>
        </MiddleGridContainer>
        <GridContainer>
          <Grid>
            <Button onClick={handleClick(Position.BottomStart)}>{Position.BottomStart}</Button>
            <Button onClick={handleClick(Position.Bottom)}> {Position.Bottom}</Button>
            <Button onClick={handleClick(Position.BottomEnd)}>{Position.BottomEnd}</Button>
          </Grid>
        </GridContainer>
      </Container>
    );
  },
};
