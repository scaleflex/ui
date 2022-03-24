import React from 'react';

export interface TablePaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  page: number;
  count: number;
  rowsPerPage?: number;
  rowsPerPageOptions?: array<number>;
  onPageChange: (event: any, val: any) => void;
  onRowsPerPageChange: (event: any) => void;
}
