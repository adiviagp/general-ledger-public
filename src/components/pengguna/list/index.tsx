import React, { useState } from 'react';

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
import { useGetPengguna } from '@src/hooks/auth/useGetPengguna';


const getHakAkses = (data) => {
  if(data === 1) return "Admin"
  if(data === 2) return "Staff"
  if(data === 3) return "Pengunjung"
}
export default function List() {
  const { data, isLoading, refetch } = useGetPengguna({});
  const { mutate } = useDeleteTenant();

  const defaultColumns: ColumnDef<any>[] = [
    {
      header: 'Username',
      size: 5,
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.username,
    },
    
    {
      header: 'Hak Akses',
      size: 20,
      cell: (info) => getHakAkses(info.getValue()),
      accessorFn: (row) => row?.hakAkses,
    },
   
    // {
    //   header: 'Action',
    //   size: 20,
    //   accessorFn: (row) => (
    //     <div className="relative flex items-center px-4 gap-4">
    //       {/* <Link to={`/tenant/${row.id}/edit`}>
    //         <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
    //           <EditIcon /> Lihat Detail
    //         </span>
    //       </Link> */}
    //       <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => mutate({ id: row.id })}>
    //         <DeleteIcon /> Hapus
    //       </span>
    //     </div>
    //   ),
    //   cell: (info) => info.getValue(),
    // },
  ];


  const [columns] = React.useState<typeof defaultColumns>(() => defaultColumns);
  

  return (
    <Table data={data?.data || []} columns={columns} />
  );
}
