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
import { Link } from 'react-router-dom';
import Direct from './Direct';
import { BACKEND_URL } from '@src/constant/constant';

const NeracaSaldoPage = () => {
  const [columns, setColumns] = useState<any>([]);

  const defaultData = {
    bulan: (moment().month() + 1).toString(),
    tahun: moment().year().toString(),
  };
  const [data, setData] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const [params, setParams] = useState<any>(null);
  const { data: listBukuBesar, isLoading } = useGetNeracaSaldo(params);

  const [dateFinal, setDateFinal] = useState<any>();
  const { setStartDate, setEndDate } = useUangMuka();

  useEffect(() => {
    if (listBukuBesar) {
      setColumns([
        {
          header: 'No Akun',
          size: 5,
          cell: (info) => <Direct data={info.getValue()} />,
          accessorFn: (row) => row.akun,
        },
        {
          header: 'Nama Akun',
          size: 5,
          cell: (info) => info.getValue(),
          accessorFn: (row) => row.label,
        },
        {
          header: 'Debit',
          size: 20,
          cell: (info: any) => 'Rp. ' + addSeparator(info.getValue()),
          accessorFn: (row) => row.totalDebit,
          footer: () => <Total data={listBukuBesar.totalAllDebit} field="debit" />,
        },
        {
          header: 'Kredit',
          size: 20,
          cell: (info: any) => 'Rp. ' + addSeparator(info.getValue()),
          accessorFn: (row) => row.totalCredit,
          footer: () => <Total data={listBukuBesar.totalAllCredit} field="debit" />,
        },
      ]);
    }
  }, [listBukuBesar]);

  // TODAY
  const { date, setDate } = useDateStore();

  return (
    <>
      <h1>Neraca Saldo</h1>
      <div className="rounded shadow-lg p-6 bg-white mb-4">
        {/* FORMIKCONTENT */}
        <Formik
          initialValues={defaultData}
          // validationSchema={AddAkunRules}
          enableReinitialize={true}
          validateOnMount={true}
          onSubmit={(values: any) => {
            let startDate = moment(`${values.tahun}-${values.bulan}-01`).format('YYYY-MM-DD');
            let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD');

            // * set endDate tanggal hari ini kalau selected bulan sama dengan bulan berjalan
            if (moment(date?.startDate).month() === moment(startDate).month()) {
              endDate = moment(date?.endDate).format('YYYY-MM-DD');
            }
            setIsSearched(true);
            setDateFinal(endDate);
            setParams({
              startDate,
              endDate,
            });

            setStartDate(startDate);
            setEndDate(endDate);
          }}
        >
          {({ values }: { values: any }) => (
            <Form>
              {/* BULAN */}
              <FormBulan name="bulan" required label="Bulan" />
              {/* TAHUN */}
              <FormTahun name="tahun" required label="Tahun" />

              {/* ACTION */}
              <div className="flex justify-end">
                <Button
                  color="success"
                  className="text-white mr-2 mt-6"
                  type="button"
                  onClick={() => {
                    let startDate = moment(`${values.tahun}-${values.bulan}-01`).format('YYYY-MM-DD');
                    let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD');

                    // * set endDate tanggal hari ini kalau selected bulan sama dengan bulan berjalan
                    if (moment(date?.startDate).month() === moment(startDate).month()) {
                      endDate = moment(date?.endDate).format('YYYY-MM-DD');
                    }
                    window.open(`${BACKEND_URL}/neraca-saldo/download-excel?startDate=${startDate}&endDate=${endDate}`, '_blank');
                  }}
                >
                  Download Excel
                </Button>
                <Button color="primary" className="text-white mr-6 mt-6" type="submit">
                  Cari
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* ############ LIST TABLE ####3 */}
      {isSearched ? (
        <div className="rounded shadow-lg p-2 bg-white">
          <div className="flex justify-between p-2">
            <h2>Neraca Saldo: {dateFinal && moment(dateFinal).format('YYYY-MM-DD')}</h2>
            <div></div>
          </div>

          {listBukuBesar ? <Table data={listBukuBesar?.data || []} columns={columns} /> : null}
        </div>
      ) : null}
    </>
  );
};

export default NeracaSaldoPage;
