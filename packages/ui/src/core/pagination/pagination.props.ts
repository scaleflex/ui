export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  boundaryCount?: number;
  count?: number;
  defaultPage?: number;
  disabled?: boolean;
  onChange?: (event: any, value: any) => void;
  getItemAriaLabel?: (type: string, page: number, selected: boolean) => string;
  page?: number;
  siblingCount?: number;
}
