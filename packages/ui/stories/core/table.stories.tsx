import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Table, { TableProps } from '../../src/core/table';
import { Padding, Size } from '../../src/core/table-cell/types';
import TableContainer from '../../src/core/table-container';
import TableHead from '../../src/core/table-head';
import TableCell from '../../src/core/table-cell';
import TableRow from '../../src/core/table-row';
import TableBody from '../../src/core/table-body';
import TablePagination from '../../src/core/table-pagination';
import More from '../../../icons/src/more';
import RobotHappy from '../../../icons/src/robot-happy';
import Copy from '../../../icons/src/copy';

const meta: Meta<typeof Table> = {
  title: 'DataDisplay/Table',
  component: Table,
  excludeStories: ['Table', 'TableContainer', 'TableHead', 'TableCell', 'TableRow', 'TableBody', 'TablePagination'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const defaultArgs = {
  padding: Padding.Default,
  size: Size.Medium,
};

const BasicTemplate = ({ ...args }: TableProps): JSX.Element => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (_: any, newPage: any): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any): void => {
    setRowsPerPage(Number.parseInt(event, 10));
    setPage(1);
  };

  const action = () => (
    <span>
      <Copy size={10} />
      <span style={{ marginLeft: '4px' }}>Copy</span>
    </span>
  );
  const createData = (
    name: string,
    Permissions: string,
    CreatedAt: string,
    Active: JSX.Element,
    Actions: JSX.Element
  ): any => {
    return {
      name,
      Permissions,
      CreatedAt,
      Active,
      Actions,
    };
  };

  const rows = [
    createData('Global Key', '42f89117d2d944b4423c18cc340956', '2020-06-15 14:21', <RobotHappy size={25} />, action()),
    createData(
      'Autogenerated - Demo Sealing',
      '42f89117d2d944b4423c18cc340956',
      '2020-06-15 14:21',
      <RobotHappy size={25} />,
      action()
    ),
    createData(
      'WP new key with all permissions	',
      '42f89117d2d944b4423c18cc340956',
      '2020-06-15 14:21',
      <RobotHappy size={25} />,
      action()
    ),
    createData(
      'UploaderWidget',
      '42f89117d2d944b4423c18cc340956',
      '2020-06-15 14:21',
      <RobotHappy size={25} />,
      action()
    ),
    createData('Test1', '42f89117d2d944b4423c18cc340956', '2020-06-15 14:21', <RobotHappy size={25} />, action()),
    createData('Test2', '42f89117d2d944b4423c18cc340956', '2020-06-15 14:21', <RobotHappy size={25} />, action()),
    createData('Test3', '42f89117d2d944b4423c18cc340956', '2020-06-15 14:21', <RobotHappy size={25} />, action()),
    createData('Test4', '42f89117d2d944b4423c18cc340956', '2020-06-15 14:21', <RobotHappy size={25} />, action()),
    createData('Test5', '42f89117d2d944b4423c18cc340956', '2020-06-15 14:21', <RobotHappy size={25} />, action()),
    createData('Test6', '42f89117d2d944b4423c18cc340956', '2020-06-15 14:21', <RobotHappy size={25} />, action()),
    createData('Test7', '42f89117d2d944b4423c18cc340956', '2020-06-15 14:21', <RobotHappy size={25} />, action()),
    createData('Test8', '42f89117d2d944b4423c18cc340956', '2020-06-15 14:21', <RobotHappy size={25} />, action()),
    createData('Test9', '42f89117d2d944b4423c18cc340956', '2020-06-15 14:21', <RobotHappy size={25} />, action()),
  ];

  return (
    <>
      <TableContainer>
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Permissions</TableCell>
              <TableCell>CreatedAt</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell padding="options" />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.name}>
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell>{row.Permissions}</TableCell>
                <TableCell>{row.CreatedAt}</TableCell>
                <TableCell>{row.Active}</TableCell>
                <TableCell>{row.Actions}</TableCell>
                <TableCell padding="options">
                  <More />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(event, val) => handleChangePage(event, val)}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
