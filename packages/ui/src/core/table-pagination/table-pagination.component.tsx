import React, { useState } from 'react';

import { intrinsicComponent } from '../../utils/functions';
import type { TablePaginationProps } from './table-pagination.props';
import Select from '../select';
import MenuItem from '../menu-item';
import Pagination from '../pagination';
import Input from '../input';
import Button from '../button';
import { InputSize } from '../../utils/types';
import Styled from './table-pagination.styles';

const getTotalCount = (count: number, to: number): JSX.Element => (
  <Styled.WeightedText>{count !== -1 ? count : `more than ${to}`}</Styled.WeightedText>
);

const FromTo = (from: number, to: number): JSX.Element => (
  <Styled.WeightedText>{`${from} - ${to}`}</Styled.WeightedText>
);

const defaultLabelDisplayedRows = ({ from, to, count }: any): JSX.Element => {
  return (
    <span>
      Showing {FromTo(from, to)} of {getTotalCount(count, to)} result
    </span>
  );
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
                style={{ width: '95px', border: 'none', fontWeight: 500 }}
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
            onChange={(event, value) => onPageChange(event, value)}
          />
          <Input
            style={{ width: '116px', paddingRight: '0px', marginLeft: '24px' }}
            value={buttonValue}
            onChange={handleChange}
          >
            <Button
              size={InputSize.Sm}
              style={{ paddingTop: '6.5px', paddingBottom: '6.5px', color: '#A9B6C2' }}
              onClick={(ev) =>
                onPageChange(ev, buttonValue > paginationCount ? Number(paginationCount) : Number(buttonValue))
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

export default TablePagination;
