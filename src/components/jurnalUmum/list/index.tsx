import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue } from '@nextui-org/react';
import { columns, users } from './data';
import { EyeIcon } from '@src/components/icons/EyeIcon';
import { EditIcon } from '@src/components/icons/EditIcon';
import { DeleteIcon } from '@src/components/icons/DeleteIcon';
import { useGetJurnal } from '@src/hooks/jurnal/useGetJurnal';
import moment from 'moment';

const statusColorMap: Record<string, ChipProps['color']> = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
};

type User = (typeof users)[0];

export default function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data: listAkuns, isLoading, refetch } = useGetJurnal({ page: currentPage, limit: rowsPerPage });

  const renderCell = React.useCallback((user: any, columnKey: React.Key) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case 'date':
        return moment(user?.createdAt).format('YYYY-MM-DD');
      case 'debit':
        return user?.debit ? user?.debit : '-';
      case 'credit':
        return user?.credit ? user?.credit : '-';
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit Jurnal">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete Jurnal">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table removeWrapper aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={listAkuns?.data || []}>{(item) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}</TableBody>
    </Table>
  );
}
