export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  index: string | number;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}
