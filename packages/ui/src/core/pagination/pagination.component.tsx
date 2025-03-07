import React from 'react';

import Arrow from '../arrow';
import type { PaginationProps } from './pagination.props';
import { usePagination } from '../../hooks/use-pagination';
import Styled from './pagination.styles';

function defaultGetAriaLabel(type: string, page: number, selected: boolean): string {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`;
  }
  return `Go to ${type} page`;
}
const Pagination = (props: PaginationProps): JSX.Element => {
  const { items } = usePagination({ ...props });

  const { getItemAriaLabel = defaultGetAriaLabel, ref, ...rest } = props;

  const paginationItem = (paginationitems: any): JSX.Element => {
    const { disabled = false, page, selected = false, type = 'page', ...other } = paginationitems;

    const Icons: any = {
      previous: () => <Arrow type="left" IconProps={{ size: 8 }} />,
      next: () => <Arrow type="right" IconProps={{ size: 8 }} />,
      // first: FirstPageIcon,
      // last: LastPageIcon,
    };

    const Icon = Icons[type];
    return type === 'start-ellipsis' || type === 'end-ellipsis' ? (
      <Styled.PaginationItem disabled={disabled} selected={selected} {...other}>
        …
      </Styled.PaginationItem>
    ) : (
      <Styled.PaginationItem ref={ref} disabled={disabled} selected={selected} {...other}>
        {type === 'page' && page}
        {Icon ? <Icon /> : null}
      </Styled.PaginationItem>
    );
  };

  return (
    <Styled.Pagination ref={ref} style={rest.style}>
      <Styled.PaginationList>
        {items.map((item: any, index: number) => (
          <Styled.PaginationItemList key={index}>
            {paginationItem({
              ...item,
              'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
              varaint: 'text',
            })}
          </Styled.PaginationItemList>
        ))}
      </Styled.PaginationList>
    </Styled.Pagination>
  );
};

export default Pagination;
