import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Table from '../../src/core/table';
import { Padding, Size } from '../../src/core/table-cell/types';
import TableContainer from '../../src/core/table-container';
import TableHead from '../../src/core/table-head';
import TableCell from '../../src/core/table-cell';
import TableRow from '../../src/core/table-row';
import TableBody from '../../src/core/table-body';
import TablePagination from '../../src/core/table-pagination';
import TableDocsTemplate from '../docs/table.mdx';

const meta: Meta<typeof Table> = {
  title: 'DataDisplay/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TableDocsTemplate,
      subtitle: 'Tables display sets of data. They can be fully customized.',
    },
  },
  argTypes: {
    children: {
      description: 'The content of the table.',
    },
    padding: {
      description: 'Different padding options for the table cells. `default`, `options`, `none`',
      options: Object.values(Padding),
      control: {
        type: 'select',
      },
    },
    size: {
      description: 'The size of the table. `medium`, `small`',
      options: Object.values(Size),
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const defaultArgs = {
  padding: Padding.Default,
  size: Size.Medium,
};

interface Data {
  id: number;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (_: any, newPage: any): void => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any): void => {
      setRowsPerPage(Number.parseInt(event, 10));
      setPage(1);
    };

    const createData = (
      id: number,
      name: string,
      calories: number,
      fat: number,
      carbs: number,
      protein: number
    ): Data => {
      return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
      };
    };

    const rows = [
      createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
      createData(2, 'Donut', 452, 25.0, 51, 4.9),
      createData(3, 'Eclair', 262, 16.0, 24, 6.0),
      createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
      createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
      createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
      createData(9, 'KitKat', 518, 26.0, 65, 7.0),
      createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
      createData(11, 'Marshmallow', 318, 0, 81, 2.0),
      createData(12, 'Nougat', 360, 19.0, 9, 37.0),
      createData(13, 'Oreo', 437, 18.0, 63, 4.0),
    ];

    return (
      <>
        <TableContainer style={{ width: '800px' }}>
          <Table {...args}>
            <TableHead>
              <TableRow>
                <TableCell>Desert</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Calories</TableCell>
                <TableCell>Fat</TableCell>
                <TableCell>Carbs</TableCell>
                <TableCell>Protein</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.name}>
                  <TableCell scope="row">{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                  <TableCell>{row.protein}</TableCell>
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
  },
};
