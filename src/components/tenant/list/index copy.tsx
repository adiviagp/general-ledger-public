import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue } from '@nextui-org/react';
import { columns, users } from './data';
import { EyeIcon } from '@src/components/icons/EyeIcon';
import { EditIcon } from '@src/components/icons/EditIcon';
import { DeleteIcon } from '@src/components/icons/DeleteIcon';
import { useGetTenant } from '@src/hooks/tenant/useGetTenant';
import moment from 'moment';
import { Link } from 'react-router-dom';

const checkStatusLabel = (subDate: any) => {
  if (subDate <= 0) {
    return (
      <Chip className="capitalize" color="default" size="sm" variant="flat">
        Telah Berakhir
      </Chip>
    );
  }
  if (subDate <= 10) {
    return (
      <Chip className="capitalize" color={'danger'} size="sm" variant="flat">
        Segera Berakhir
      </Chip>
    );
  }
  if (subDate > 10) {
    return (
      <Chip className="capitalize" color={'success'} size="sm" variant="flat">
        Sedang Berjalan
      </Chip>
    );
  }
};

type User = (typeof users)[0];

export default function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10999999);

  const { data: listTenant, isLoading, refetch } = useGetTenant({ page: currentPage, limit: rowsPerPage });

  const renderCell = React.useCallback((user: any, columnKey: React.Key) => {
    const subDate = user.contracts?.length > 0 ? moment(user.contracts[0].endDate).diff(moment(), 'days') : 0;
    const cellValue = user[columnKey];

    switch (columnKey) {
      case 'role':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case 'status':
        return checkStatusLabel(subDate);
      case 'tenantTypeName':
        return user.tenantType.name;
      case 'tenantJenis':
        return user.contracts?.length > 0 ? user.contracts[0].tenantJenis?.name : null;
      case 'isPaid':
        return user.contracts?.length > 0 ? (
          <Chip className="capitalize" color={user.contracts[0].isPaid === 'Lunas' ? 'success' : 'danger'} size="sm" variant="flat">
            {user.contracts[0].isPaid}
          </Chip>
        ) : null;
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit Tenant">
              <Link to={`/tenant/${user.id}/edit`}>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Link>
            </Tooltip>
            <Tooltip color="danger" content="Delete Tenant">
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
    <Table selectionMode="single" removeWrapper aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={listTenant?.data || []}>{(item: any) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}</TableBody>
    </Table>
  );
}
