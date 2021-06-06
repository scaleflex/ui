/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PT from 'prop-types';
import Arrow from '../arrow';
import { intrinsicComponent } from '../../utils/functions';
import type { PaginationProps } from './pagination.props';
import { usePagination } from '../../hooks/use-pagination';
import Styled from './pagination.styles';

function defaultGetAriaLabel(type: string, page: number, selected: boolean): string {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`;
  }
  return `Go to ${type} page`;
}
const Pagination = intrinsicComponent<PaginationProps, HTMLDivElement>(
  (props: PaginationProps, ref): JSX.Element => {
    const { items } = usePagination({ ...props, componentName: 'Pagination' });
    const { getItemAriaLabel = defaultGetAriaLabel, ...other } = props;

    const paginationItem = (paginationitems: any): JSX.Element => {
      const { component, disabled = false, page, selected = false, type = 'page', variant, ...rest } = paginationitems;

      const normalizedIcons: any = {
        previous: () => <Arrow type="left" IconProps={{ size: 8 }} />,
        next: () => <Arrow type="right" IconProps={{ size: 8 }} />,
        // first: FirstPageIcon,
        // last: LastPageIcon,
      };

      const Icon = normalizedIcons[type];
      return type === 'start-ellipsis' || type === 'end-ellipsis' ? (
        <Styled.PaginationItem disabled={disabled} selected={selected} {...rest}>
          …
        </Styled.PaginationItem>
      ) : (
        <Styled.PaginationItem ref={ref} disabled={disabled} selected={selected} {...rest}>
          {type === 'page' && page}
          {Icon ? <Icon /> : null}
        </Styled.PaginationItem>
      );
    };

    return (
      <nav ref={ref} {...other}>
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
      </nav>
    );
  }
);

Pagination.defaultProps = {};

export const propTypes = {
  boundaryCount: PT.number,
  count: PT.number,
  defaultPage: PT.number,
  disabled: PT.bool,
  onChange: PT.func,
  getItemAriaLabel: PT.func,
  page: PT.number,
  siblingCount: PT.number,
};

Pagination.propTypes = propTypes;

export default Pagination;
