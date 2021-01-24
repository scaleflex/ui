export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  value?: string | number;
  onChange?: (value: string | number) => void;
}
