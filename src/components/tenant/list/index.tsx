import React, { useEffect, useState } from 'react';

import { EyeIcon } from '@src/components/icons/EyeIcon';
import { EditIcon } from '@src/components/icons/EditIcon';
import { DeleteIcon } from '@src/components/icons/DeleteIcon';
import { useGetTenant } from '@src/hooks/tenant/useGetTenant';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Table from '@src/components/table/table';
import CheckStatus from './checkStatus';
import CheckPembayaran from './checkPembayaran';
import { useDeleteTenant } from '@src/hooks/tenant/useDeleteTenant';
import { Pagination } from '@nextui-org/react';

export default function List() {
  const [params, setParams] = useState<any>({ page: 1, limit: 100000 });
  const { data: listTenant, isLoading, refetch } = useGetTenant(params);
  const { mutate } = useDeleteTenant();

  const defaultColumns: ColumnDef<any>[] = [
    {
      header: 'Nama',
      size: 5,
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.name,
    },

    {
      header: 'Tipe',
      size: 20,
      cell: (info) => info.getValue(),
      accessorFn: (row) => row?.tenantType?.name,
    },
    {
      header: 'Jenis',
      size: 20,
      cell: (info) => info.getValue(),
      accessorFn: (row) => (row?.contracts?.length > 0 ? row.contracts[0].tenantJenis?.name : null),
    },
    {
      header: 'Status',
      size: 20,
      cell: (info) => <CheckStatus data={info.getValue()} />,
      accessorFn: (row) => (row.contracts?.length > 0 ? moment(row.contracts[0].endDate).diff(moment(), 'days') : null),
    },
    {
      header: 'Pembayaran',
      size: 20,
      cell: (info) => <CheckPembayaran data={info.getValue()} />,
      accessorFn: (row) => (row?.contracts?.length > 0 ? row?.contracts[0] : null),
    },
    {
      header: 'Action',
      size: 20,
      accessorFn: (row) => (
        <>
          <div className="relative flex items-center px-4 gap-4">
            <Link to={`/tenant/${row.id}/edit`}>
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon /> Lihat Detail
              </span>
            </Link>

            <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => mutate({ id: row.id })}>
              <DeleteIcon /> Hapus
            </span>
          </div>
        </>
      ),
      cell: (info) => info.getValue(),
    },
  ];

  const [columns] = React.useState<typeof defaultColumns>(() => defaultColumns);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const handleRowsPerPageChange = (selectedRow: any) => {
    setCurrentPage(1);
    setRowsPerPage(selectedRow);
    setParams({ ...params, page: currentPage, limit: selectedRow });
  };

  useEffect(() => {
    setParams({ ...params, page: currentPage, limit: rowsPerPage });
  }, [currentPage]);

  return (
    <>
      <Table data={listTenant?.data || []} columns={columns} />
      <div className="flex w-full justify-end">
        <div className="my-8 mx-4">
          <Pagination isCompact showControls showShadow color="primary" page={listTenant?.current_page} total={listTenant?.total_page} onChange={(page: any) => setCurrentPage(page)} />
          <div className="flex justify-end items-center gap-4 mt-4">
            <label className="flex items-center text-default-400 text-small">
              Rows per page:
              <select value={rowsPerPage} className="bg-transparent outline-none text-default-400 text-small" onChange={(selected) => handleRowsPerPageChange(selected.target.value)}>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
