export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  hover?: boolean;
  selected?: boolean;
  ref?: React.Ref<HTMLTableRowElement>;
}
