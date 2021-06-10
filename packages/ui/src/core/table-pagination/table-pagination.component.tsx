/* eslint-disable sonarjs/cognitive-complexity */
import React, { useState } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { TablePaginationProps } from './table-pagination.props';
import Select from '../select';
import MenuItem from '../menu-item';
import Pagination from '../pagination';
import Input from '../input';
import Button from '../button';

import { Size, Background } from '../select/types';
import Styled from './table-pagination.styles';

const defaultLabelDisplayedRows = ({ from, to, count }: any): string => {
  return `Showing ${from}-${to} of ${count !== -1 ? count : `more than ${to}`} results`;
};

const TablePagination = intrinsicComponent<TablePaginationProps, HTMLTableSectionElement>(
  (
    {
      children,
      page,
      count,
      rowsPerPage = 5,
      rowsPerPageOptions = [5, 10, 25],
      onPageChange,
      onRowsPerPageChange,
      ...rest
    }: TablePaginationProps,
    ref
  ): JSX.Element => {
    const [buttonValue, setButtonValue] = useState(page);

    const getLabelDisplayedRowsTo = (): number => {
      if (count === -1) return page * rowsPerPage;
      return rowsPerPage === -1 ? count : Math.min(count, page * rowsPerPage);
    };

    const handleChange = (event: any): void => {
      setButtonValue(event.target.value);
    };

    const perPageOption = rowsPerPageOptions.map((item: number) => `${item} / page`);

    const paginationCount = rowsPerPage > count ? 1 : Math.ceil(count / rowsPerPage);

    return (
      <Styled.TablePagination ref={ref} {...rest}>
        <Styled.Section>
          <Styled.ShowPages>
            {defaultLabelDisplayedRows({
              from: count === 0 ? 0 : (page - 1) * rowsPerPage + 1,
              to: getLabelDisplayedRowsTo(),
              count: count === -1 ? -1 : count,
              page,
            })}
          </Styled.ShowPages>

          <Styled.Amount>
            {rowsPerPageOptions.length > 1 && (
              <Select
                style={{ width: '95px', border: 'none' }}
                background={Background.Secondary}
                value={`${rowsPerPage} / page`}
                onChange={onRowsPerPageChange}
              >
                {perPageOption.map((rowsPerPageOption: any) => (
                  <MenuItem
                    key={rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption}
                    value={rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption}
                  >
                    {rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption}
                  </MenuItem>
                ))}
              </Select>
            )}
          </Styled.Amount>
        </Styled.Section>
        <Styled.Section>
          <Pagination
            page={Number(page)}
            count={paginationCount}
            boundaryCount={2}
            onChange={(event, value) => onPageChange(value)}
          />
          <Input
            style={{ width: '116px', paddingRight: '0px', marginLeft: '24px' }}
            value={buttonValue}
            onChange={handleChange}
          >
            <Button
              size={Size.Sm}
              style={{ paddingTop: '6.5px', paddingBottom: '6.5px' }}
              onClick={() =>
                onPageChange(buttonValue > paginationCount ? Number(paginationCount) : Number(buttonValue))
              }
            >
              Go To
            </Button>
          </Input>
        </Styled.Section>
      </Styled.TablePagination>
    );
  }
);

TablePagination.propTypes = {
  page: PT.number.isRequired,
  count: PT.number.isRequired,
  rowsPerPage: PT.number,
  rowsPerPageOptions: PT.arrayOf(PT.number),
  onPageChange: PT.func.isRequired,
  onRowsPerPageChange: PT.func.isRequired,
};

export default TablePagination;
