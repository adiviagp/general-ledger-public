import FormAkun from '@src/components/formik/formAkun';
import Table from '@src/components/table/table';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Button, Select, SelectItem, Tooltip } from '@nextui-org/react';
import moment from 'moment';
import FormBulan from '@src/components/formik/formBulan';
import FormTahun from '@src/components/formik/formTahun';
import { useGetBukuBesar } from '@src/hooks/jurnal/useGetBukuBesar';
import FormSaldoPerRow from '@src/components/formik/inTable/formSaldoPerRow';
import { Link } from 'react-router-dom';
import { useGetJurnalContainer } from '@src/hooks/jurnal/useGetJurnalContainer';
import { DeleteIcon } from '@src/components/icons/DeleteIcon';
import { EditIcon } from '@src/components/icons/EditIcon';
import { useDeleteJurnal } from '@src/hooks/jurnal/useDeleteJurnal';

const JurnalUmumUangMukaPage = () => {
  const { mutate, isLoading: isSuccess } = useDeleteJurnal();

  const defaultColumns: ColumnDef<any>[] = [
    {
      header: 'id',
      size: 5,
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.id,
    },
    {
      header: 'Tanggal Jurnal',
      size: 20,
      cell: (info) => info.getValue(),
      accessorFn: (row) => moment(row.date).format('YYYY-MM-DD'),
    },
    {
      header: 'Keterangan',
      size: 20,
      cell: (info) => info.getValue(),
      accessorFn: (row) => row?.keterangan,
    },
    {
      header: 'Action',
      size: 20,
      accessorFn: (row) => (
        <>
          <div className="relative flex items-center px-4 gap-4">
            <Link to={`/jurnal/jurnal-umum/uang-muka-sewa/${row.id}/edit`}>
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

  const defaultData = {
    bulan: (moment().month() + 1).toString(),
    tahun: moment().year().toString(),
  };
  const [data, setData] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [columns] = React.useState<typeof defaultColumns>(() => defaultColumns);

  const [params, setParams] = useState<any>(null);
  const { data: listBukuBesar, isLoading } = useGetJurnalContainer(params);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1> Jurnal Umum - Khusus Uang Muka Sewa</h1>
        <Link to="/jurnal/jurnal-umum/uang-muka-sewa/add">
          <Button color="success" className="text-white">
            Tambah Jurnal
          </Button>
        </Link>
      </div>
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
              akunId: values.selected_akun,
              page: 1,
              limit: 20,
              startDate,
              endDate,
              tipe: 'jurnal-umum-uang-muka-sewa',
            });
          }}
        >
          <Form>
            {/* BULAN */}
            <FormBulan name="bulan" required label="Bulan" />
            {/* TAHUN */}
            <FormTahun name="tahun" required label="Tahun" />

            {/* ACTION */}
            <div className="flex justify-end mt-6">
              <Button color="primary" className="text-white mr-2 " type="submit">
                Cari
              </Button>
            </div>
          </Form>
        </Formik>
      </div>

      {/* ############ LIST TABLE ####3 */}
      {isSearched ? (
        <div className="rounded shadow-lg p-2 bg-white">
          <Table data={listBukuBesar?.data || []} columns={columns} />
        </div>
      ) : null}
    </>
  );
};

export default JurnalUmumUangMukaPage;
