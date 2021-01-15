export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  label?: ReactNode;
  value?: string | number;
  active?: boolean;
}
