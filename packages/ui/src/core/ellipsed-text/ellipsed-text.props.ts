import { HTMLAttributes } from 'react';
import { TooltipV2Props } from '../tooltip-v2';

export interface EllipsedTextProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
  maxLinesCount?: number;
  customMaxHeight?: number;
  noTooltip?: boolean;
  tooltipProps?: TooltipV2Props;
  textWrapperProps?: HTMLAttributes<HTMLDivElement>;
  tooltipTitle?: string;
}
