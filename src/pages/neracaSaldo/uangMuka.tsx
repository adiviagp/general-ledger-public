import FormAkun from '@src/components/formik/formAkun';
import Table from '@src/components/table/table';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Button, Select, SelectItem } from '@nextui-org/react';
import moment from 'moment';
import FormBulan from '@src/components/formik/formBulan';
import FormTahun from '@src/components/formik/formTahun';
import { useGetBukuBesar } from '@src/hooks/jurnal/useGetBukuBesar';
import FormSaldoPerRow from '@src/components/formik/inTable/formSaldoPerRow';
import { useGetNeracaSaldo } from '@src/hooks/neracaSaldo/useGetNeracaSaldo';
import { useDateStore, useUangMuka } from '@src/main';
import { addSeparator } from '@src/utils/fieldFormatter';
import FormTotalSum from '@src/components/formik/inTable/formTotalSum';
import Total from './total';
import { useGetNeracaSaldoUangMuka } from '@src/hooks/neracaSaldo/useGetNeracaSaldoUangMuka';
import { Link } from 'react-router-dom';

const NeracaSaldoUangMukaPage = () => {
  const { startDate, endDate } = useUangMuka();

  const [columns, setColumns] = useState<any>([]);

  const { data, isLoading } = useGetNeracaSaldoUangMuka({ startDate, endDate });

  useEffect(() => {
    if (data) {
      setColumns([
        {
          header: 'Nama Tenant',
          size: 5,
          cell: (info) => info.getValue(),
          accessorFn: (row) => row.name,
        },
        {
          header: 'Jenis Tenant',
          size: 5,
          cell: (info) => info.getValue(),
          accessorFn: (row) => row.contracts?.length > 0 ?  row.contracts[0]?.tenantJenis.name: null
        },
        {
          header: 'Saldo',
          size: 20,
          cell: (info: any) => 'Rp. ' + addSeparator(info.getValue()),
          accessorFn: (row) => row.totalCredit,
          footer: () => <Total data={data.totalAllCredit} field="credit" />,
        },
      ]);
    }
  }, [data]);

  return (
    <>
      <h1>Neraca Saldo - Sewa Diterima Dimuka</h1>

      <div className="rounded shadow-lg p-2 bg-white">
        <div className="flex justify-between p-2">
          <h2>Neraca Saldo: {endDate && moment(endDate).format('YYYY-MM-DD')}</h2>
          <div></div>
        </div>

        {data ? <Table data={data?.data || []} columns={columns} /> : null}

        <div className='m-6 flex justify-end'>
        <Link to="/neraca-saldo">
        <Button color="danger" variant="flat">
          Kembali
        </Button>
      </Link>
      </div>
      </div>

     
    </>
  );
};

export default NeracaSaldoUangMukaPage;
