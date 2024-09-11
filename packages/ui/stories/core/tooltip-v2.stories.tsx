import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import { DeleteOutline } from '@scaleflex/icons';

import TooltipV2, { TooltipV2Props } from '../../src/core/tooltip-v2';
import { TooltipPositionType } from '../../src/core/tooltip-v2/tooltip-v2.props';
import { Size } from '../../src/core/tooltip/types';
import { Position, Variant } from '../../src/core/tooltip-v2/types';
import TooltipDocsTemplate from '../docs/tooltip-v2.mdx';
import IconButton from '../../src//core/icon-button';
import Button from '../../src/core/button';

const meta: Meta<typeof TooltipV2> = {
  title: 'DataDisplay/TooltipV2',
  component: TooltipV2,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Tooltip title.',
    },
    position: {
      description: 'Tooltip placement.',
    },
    variant: {
      description: 'Tooltip variants.',
    },
    size: {
      description: 'Tooltip sizes.',
    },
    arrow: {
      description: 'If true, adds an arrow to the tooltip.',
    },
    children: {
      description: 'Tooltip reference element.',
    },
    enterDelay: {
      description: 'The number of milliseconds to wait before opening the tooltip.',
    },
    leaveDelay: {
      description: 'The number of milliseconds to wait before hiding the tooltip.',
    },
    offsetX: {
      description: 'Displaces the tooltip from its reference element in pixels (skidding).',
    },
    offsetY: {
      description: 'Displaces the tooltip from its reference element in pixels (distance).',
    },
    enableHover: {
      description: 'If true, tooltip will not close when you hover on the tooltip.',
    },
    info: {
      description: 'Apply info variant to tooltip. Please use `variant` prop instead.',
    },
    warning: {
      description: 'Apply warning variant to tooltip. Please use `variant` prop instead.',
    },
  },
  parameters: {
    docs: {
      subtitle: 'Tooltips display informative text when users hover over, focus on, or tap an element.',
      page: TooltipDocsTemplate,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TooltipV2>;

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
`;

const MiddleGridRight = styled.div`
  display: flex;
  max-width: 50%;
  width: 100%;
  align-items: flex-end;
  gap: 2px;
  flex-direction: column;
  margin: 4px 0px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2px;
`;

const SfxButton = styled(Button)`
  text-transform: uppercase;
`;

const defaultArgs = {
  size: Size.Sm,
  arrow: false,
  warning: false,
  info: false,
  isHidden: false,
  enableHover: true,
  position: Position.Top,
  offsetX: 0,
  offsetY: 10,
  title: 'Delete',
};

const renderButtonWithTooltip = ({
  position = Position.Top,
  args,
  buttonTitle,
  title,
}: {
  position?: TooltipPositionType;
  args: TooltipV2Props;
  buttonTitle?: string;
  title?: string;
}) => (
  <TooltipV2 {...args} position={position} title={title || position}>
    <SfxButton>{buttonTitle || position}</SfxButton>
  </TooltipV2>
);

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => (
    <TooltipV2 {...args}>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </TooltipV2>
  ),
};

export const PositionedTooltips: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    return (
      <Container>
        <GridContainer>
          <Grid>
            {renderButtonWithTooltip({ position: Position.TopStart, args })}
            {renderButtonWithTooltip({ position: Position.Top, args })}
            {renderButtonWithTooltip({ position: Position.TopEnd, args })}
          </Grid>
        </GridContainer>
        <MiddleGridContainer>
          <MiddleGridLeft>
            {renderButtonWithTooltip({ position: Position.LeftStart, args })}
            {renderButtonWithTooltip({ position: Position.Left, args })}
            {renderButtonWithTooltip({ position: Position.LeftEnd, args })}
          </MiddleGridLeft>
          <MiddleGridRight>
            {renderButtonWithTooltip({ position: Position.RightStart, args })}
            {renderButtonWithTooltip({ position: Position.Right, args })}
            {renderButtonWithTooltip({ position: Position.RightEnd, args })}
          </MiddleGridRight>
        </MiddleGridContainer>
        <GridContainer>
          <Grid>
            {renderButtonWithTooltip({ position: Position.BottomStart, args })}
            {renderButtonWithTooltip({ position: Position.Bottom, args })}
            {renderButtonWithTooltip({ position: Position.BottomEnd, args })}
          </Grid>
        </GridContainer>
      </Container>
    );
  },
};

export const ArrowTooltips: Story = {
  args: { ...defaultArgs },
  render: (args) => (
    <div style={{ display: 'flex', gap: '4px' }}>
      {renderButtonWithTooltip({ position: Position.TopStart, args: { ...args, arrow: true } })}
      {renderButtonWithTooltip({ position: Position.LeftEnd, args: { ...args, arrow: true } })}
      {renderButtonWithTooltip({ position: Position.Right, args: { ...args, arrow: true } })}
      {renderButtonWithTooltip({ position: Position.BottomEnd, args: { ...args, arrow: true } })}
    </div>
  ),
};

export const ShowingAndHiding: Story = {
  args: { ...defaultArgs },
  render: (args) =>
    renderButtonWithTooltip({
      args: { ...args, enterDelay: 400, leaveDelay: 300 },
      buttonTitle: '[400MS, 300MS]',
    }),
};

export const Variants: Story = {
  args: { ...defaultArgs },
  render: (args) => (
    <div style={{ display: 'flex', gap: '4px' }}>
      {renderButtonWithTooltip({ args, buttonTitle: 'default', title: 'default' })}
      {renderButtonWithTooltip({
        args: { ...args, variant: Variant.Warning },
        buttonTitle: 'Warning',
        title: 'Warning',
      })}
      {renderButtonWithTooltip({
        args: { ...args, variant: Variant.Info },
        buttonTitle: 'Info',
        title: 'Info',
      })}
      {renderButtonWithTooltip({
        args: { ...args, variant: Variant.Error },
        buttonTitle: 'Error',
        title: 'Error',
      })}
    </div>
  ),
};

export const Sizes: Story = {
  args: { ...defaultArgs },
  render: (args) => (
    <div style={{ display: 'flex', gap: '4px' }}>
      {renderButtonWithTooltip({
        args: { ...args, size: Size.Sm },
        buttonTitle: 'small',
        title: 'small',
      })}
      {renderButtonWithTooltip({
        args: { ...args, size: Size.Md },
        buttonTitle: 'Medium',
        title: 'Medium',
      })}
      {renderButtonWithTooltip({
        args: { ...args, size: Size.Lg },
        buttonTitle: 'Large',
        title: 'Large',
      })}
    </div>
  ),
};

export const Offset: Story = {
  args: { ...defaultArgs },
  render: (args) =>
    renderButtonWithTooltip({
      args: { ...args, offsetX: 20, offsetY: 30 },
      buttonTitle: '[20, 30]',
    }),
};
