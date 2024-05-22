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
import FormTenantJenis from '@src/components/formik/formTenantJenis';
import { useGetUangMuka } from '@src/hooks/uangMuka/useGetUangMuka';
import FormSewaPerRow from '@src/components/formik/inTable/FormSewaPerRow';
import FormPenyesuaian from '@src/components/formik/inTable/formPenyesuaian';
import { addSeparator } from '@src/utils/fieldFormatter';
import { BACKEND_URL } from '@src/constant/constant';
import { useDateStore } from '@src/main';

const UangMukaSewaPage = () => {
  const defaultColumns: ColumnDef<any>[] = [
    {
      header: 'Penyewa',
      size: 5,
      cell: (info) => info.getValue(),
      accessorFn: (row) => row?.tenant?.name,
    },
    {
      header: 'Periode Kontrak',
      // footer: (props) => console.log(values[name]),
      cell: (info: any) => moment(info.getValue()?.startDate).format('YYYY-MM-DD') + ' - ' + moment(info.getValue()?.endDate).format('YYYY-MM-DD'),
      accessorFn: (row) => row,
    },
    {
      header: 'Sisa Uang Muka Tahun Lalu',
      size: 20,
      cell: (info: any) => addSeparator(info.getValue()),
      accessorFn: (row) => row.tahunLaluUM,
    },
    {
      header: 'Januari',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="januari" bulanMoment="2023-01-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'Februari',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="februari" bulanMoment="2023-02-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'Maret',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="maret" bulanMoment="2023-03-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'April',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="april" bulanMoment="2023-04-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'Mei',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="mei" bulanMoment="2023-05-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'Juni',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="juni" bulanMoment="2023-06-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'Juli',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="juli" bulanMoment="2023-07-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'Agustus',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="agustus" bulanMoment="2023-08-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'September',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="september" bulanMoment="2023-09-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'Oktober',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="oktober" bulanMoment="2023-10-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'November',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="november" bulanMoment="2023-11-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'Desember',
      size: 20,
      cell: (info) => <FormPenyesuaian bulan="desember" bulanMoment="2023-12-01" data={info.getValue()} />,
      accessorFn: (row) => row,
    },
    {
      header: 'Sisa Uang Muka Tahun Berjalan',
      size: 20,
      cell: (info: any) => addSeparator(info.getValue()),
      accessorFn: (row) => row.tahunBerjalanUM,
    },
    // {
    //   header: 'Total 2023',
    //   size: 20,
    //   cell: info => <FormSaldoPerRow data={info.getValue()}/>,
    //   accessorFn: row => row.contracts?.length > 0 ? row.contracts[0] : null
    // },
    // {
    //   header: 'Sisa UM 2023',
    //   size: 20,
    //   cell: info => <FormSaldoPerRow data={info.getValue()}/>,
    //   accessorFn: row => row.contracts?.length > 0 ? row.contracts[0] : null
    // },
  ];

  const defaultData = {
    tahun: moment().year().toString(),
    tenantJenisId: '1',
  };
  const [isSearched, setIsSearched] = useState(false);
  const [columns] = React.useState<typeof defaultColumns>(() => defaultColumns);

  const [params, setParams] = useState<any>(null);
  const { data: listUangMuka, isLoading } = useGetUangMuka(params);
  const { date, setDate } = useDateStore();

  return (
    <>
      <h1>Rekap Kontrak</h1>

      {/* FORMIKCONTENT */}
      <Formik
        initialValues={defaultData}
        // validationSchema={AddAkunRules}
        enableReinitialize={true}
        validateOnMount={true}
        onSubmit={(values: any) => {
          setIsSearched(true);
          let startDate = moment(`${values.tahun}-01-01`).format('YYYY-MM-DD');
          let endDate = moment(`${values.tahun}-12-01`).endOf('month').format('YYYY-MM-DD');
          setParams({
            tenantJenisId: values.tenantJenisId,
            startDate: startDate,
            endDate: endDate,
          });
        }}
      >
        {({ values }: { values: any }) => (
          <Form>
            <div className="rounded shadow-lg p-6 bg-white mb-4">
              {/* AKUN */}
              <FormTahun name="tahun" required label="Tahun" />
              <FormTenantJenis name="tenantJenisId" required label="Jenis Tenant" />

              {/* ACTION */}

              <div className="flex justify-end">
                <Button
                  color="success"
                  className="text-white mr-2 mt-6"
                  type="button"
                  onClick={() => {
                    let startDate = moment(`${values.tahun}-01-01`).format('YYYY-MM-DD');
                    let endDate = moment(`${values.tahun}-12-01`).endOf('month').format('YYYY-MM-DD');

                    window.open(`${BACKEND_URL}/uang-muka/download-excel?tenantJenisId=${values.tenantJenisId}&startDate=${startDate}&endDate=${endDate}`, '_blank');
                  }}
                >
                  Download Excel
                </Button>
                <Button color="primary" className="text-white mr-6 mt-6" type="submit">
                  Cari
                </Button>
              </div>
            </div>

            {/* ############ LIST TABLE ####3 */}
            {isSearched ? (
              <div className="rounded shadow-lg p-2 bg-white">
                <Table data={listUangMuka?.data || []} columns={columns} defaultWidth="3000px" />
              </div>
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UangMukaSewaPage;
