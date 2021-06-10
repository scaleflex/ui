import React from 'packages/icons/node_modules/@types/react';

export interface TablePaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  page: number;
  count: number;
  rowsPerPage?: number;
  rowsPerPageOptions?: array<number>;
  onPageChange: (val: any) => void;
  onRowsPerPageChange: (event: any) => void;
}
