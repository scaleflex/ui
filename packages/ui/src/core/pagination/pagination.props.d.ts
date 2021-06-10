export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  boundaryCount?: number;
  count?: number;
  defaultPage?: number;
  disabled?: boolean;
  onChange?: (event: any, value: any) => void;
  getItemAriaLabel?: func;
  page?: number;
  siblingCount?: number;
}
