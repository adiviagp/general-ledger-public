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
import { Link } from 'react-router-dom';
import { addSeparator, removeNonNumeric } from '@src/utils/fieldFormatter';
import { BACKEND_URL } from '@src/constant/constant';
import { useDateStore } from '@src/main';

const BukuBesarPage = () => {
  const defaultColumns: ColumnDef<any>[] = [
    {
      header: 'Tanggal',
      size: 5,
      cell: (info) => info.getValue(),
      accessorFn: (row) => moment(row.date).format('YYYY-MM-DD'),
    },
    {
      header: 'Keterangan',
      size: 10,
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.keterangan,
    },
    {
      header: 'Ref',
      size: 20,
      cell: (info: any) => {
        if (info.getValue()?.tipe === 'jurnal-umum')
          return (
            <Link className="text-primary" to={`/jurnal/jurnal-umum/${info.getValue()?.id}/edit`}>
              {'JU-' + info.getValue()?.id}
            </Link>
          );
        if (info.getValue()?.tipe === 'jurnal-umum-uang-muka-sewa')
          return (
            <Link className="text-primary" to={`/jurnal/jurnal-umum/uang-muka-sewa/${info.getValue()?.id}/edit`}>
              {'JU-' + info.getValue()?.id}
            </Link>
          );
        if (info.getValue()?.tipe === 'jurnal-umum-pendapatan')
          return (
            <Link className="text-primary" to={`/jurnal/jurnal-umum/pendapatan/${info.getValue()?.id}/edit`}>
              {'JU-' + info.getValue()?.id}
            </Link>
          );
        if (info.getValue()?.tipe === 'jurnal-umum-modal')
          return (
            <Link className="text-primary" to={`/jurnal/jurnal-umum/modal/${info.getValue()?.id}/edit`}>
              {'JU-' + info.getValue()?.id}
            </Link>
          );
      },
      accessorFn: (row) => row.jurnalContainer,
    },
    {
      header: 'Debit',
      size: 20,
      cell: (info: any) => addSeparator(info.getValue()),
      accessorFn: (row) => row.debit,
    },
    {
      header: 'Kredit',
      size: 20,
      cell: (info: any) => addSeparator(info.getValue()),
      accessorFn: (row) => row.credit,
    },
    {
      header: 'Saldo',
      size: 30,
      cell: (info: any) => 'Rp. ' + addSeparator(info.getValue()),
      accessorFn: (row) => row.currentSaldo,
    },
  ];

  const defaultData = {
    selected_akun: 'ALL',
    bulan: (moment().month() + 1).toString(),
    tahun: moment().year().toString(),
  };
  const [data, setData] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [columns] = React.useState<typeof defaultColumns>(() => defaultColumns);

  const [params, setParams] = useState<any>(null);
  const { data: listBukuBesar, isLoading } = useGetBukuBesar(params);
  const { date, setDate } = useDateStore();

  return (
    <>
      <h1>Buku Besar</h1>
      <div className="rounded shadow-lg p-6 bg-white mb-4">
        {/* FORMIKCONTENT */}
        <Formik
          initialValues={defaultData}
          // validationSchema={AddAkunRules}
          enableReinitialize={true}
          validateOnMount={true}
          onSubmit={(values: any) => {
            // console.log(values);
            setIsSearched(true);
            let startDate = `${values.tahun}-${values.bulan}-01`;
            let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD');
            setParams({
              akunId: values.selected_akun === 'ALL' ? null : values.selected_akun,
              startDate,
              endDate,
            });
          }}
        >
          {({ values }: { values: any }) => (
            <Form>
              {/* BULAN */}
              <FormBulan name="bulan" required label="Bulan" />
              {/* TAHUN */}
              <FormTahun name="tahun" required label="Tahun" />
              {/* AKUN */}
              <FormAkun showAll name="selected_akun" required label="Akun" />

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

                    let finalAkun = values.selected_akun === 'ALL' ? null : values.selected_akun;
                    window.open(`${BACKEND_URL}/bukubesar/download-excel?akunId=${finalAkun}&startDate=${startDate}&endDate=${endDate}`, '_blank');
                  }}
                >
                  Download Excel
                </Button>

                <Button color="primary" className="text-white mr-6 mt-6" type="submit" isDisabled={values.selected_akun === '' ? true : false}>
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
          <Table data={listBukuBesar || []} columns={columns} />
        </div>
      ) : null}
    </>
  );
};

export default BukuBesarPage;
