export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  index: number;
  children?: ReactNode;
}
