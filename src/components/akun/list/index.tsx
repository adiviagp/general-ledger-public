import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Tooltip, Spinner, Pagination } from '@nextui-org/react';
import { columns, users } from './data';
import { EditIcon } from '@src/components/icons/EditIcon';
import { DeleteIcon } from '@src/components/icons/DeleteIcon';
import { useGetAkun } from '@src/hooks/akun/useGetAkun';
import { Link } from 'react-router-dom';
import { useDeleteAkun } from '@src/hooks/akun/useDeleteAkun';
import { addSeparator } from '@src/utils/fieldFormatter';

export default function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const { data: listAkuns, isLoading, refetch } = useGetAkun({ page: currentPage, limit: rowsPerPage });
  const { mutate, isLoading: isSuccess } = useDeleteAkun();

  const handleRowsPerPageChange = (selectedRow: any) => {
    setCurrentPage(1);
    setRowsPerPage(selectedRow);
  };

  const renderCell = (data: any, columnKey: React.Key) => {
    const cellValue = data[columnKey];

    switch (columnKey) {
      case 'saldoAwal':
        return addSeparator(data.saldoAwal);
      case 'actions':
        return (
          <>
            <div className="relative flex items-center gap-2">
              {['220-10', '220-20'].includes(data.akun) ? null : (
                <Link to={`/akun/${data.id}/edit`}>
                  <Tooltip content="Edit">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <EditIcon />
                    </span>
                  </Tooltip>
                </Link>
              )}
              <div>
                {['220-10', '220-20', '400-10', '400-20'].includes(data.akun) ? null : (
                  <Tooltip color="danger" content="Delete">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => mutate({ id: data.id })}>
                      <DeleteIcon />
                    </span>
                  </Tooltip>
                )}
              </div>
            </div>
          </>
        );
      default:
        return cellValue;
    }
  };

  return (
    <Table
      selectionMode="single"
      removeWrapper
      aria-label="Example table with custom cells"
      classNames={{
        table: 'min-h-[400px]',
      }}
      bottomContent={
        listAkuns && listAkuns?.total_page > 0 ? (
          <div className="flex w-full justify-end">
            <div className="my-8">
              <Pagination isCompact showControls showShadow color="primary" page={listAkuns.current_page} total={listAkuns.total_page} onChange={(page: any) => setCurrentPage(page)} />
              <div className="flex justify-end items-center gap-4 mt-4">
                {/* <span className="text-default-400 text-small">Total Data: {listAkuns.total_data} </span> */}
                <label className="flex items-center text-default-400 text-small">
                  Rows per page:
                  <select value={rowsPerPage} className="bg-transparent outline-none text-default-400 text-small" onChange={(selected) => handleRowsPerPageChange(selected.target.value)}>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="100">100</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        ) : null
      }
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody
        items={listAkuns && !isLoading ? listAkuns.data : []}
        isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." />}
        emptyContent={listAkuns?.data?.length === 0 ? 'Tidak ada data yang bisa ditampilkan' : null}
      >
        {(item: any) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
      </TableBody>
    </Table>
  );
}
