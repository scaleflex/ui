export interface EllipsedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
  maxLinesCount?: number;
  customMaxHeight?: number;
  noTooltip?: boolean;
  text?: string;
  tooltipProps?: object;
}