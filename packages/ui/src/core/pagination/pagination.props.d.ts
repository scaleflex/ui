export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  boundaryCount?: number;
  count?: number;
  defaultPage?: number;
  disabled?: boolean;
  onChange?: () => void;
  getItemAriaLabel?: func;
  page?: number;
  siblingCount?: number;
}
