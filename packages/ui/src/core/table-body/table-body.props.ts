export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  ref?: React.Ref<HTMLTableSectionElement>;
}
