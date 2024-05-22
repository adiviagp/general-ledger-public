import FormAkun from '@src/components/formik/formAkun';
import Table from '@src/components/table/table';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Button, Pagination, Select, SelectItem, Tooltip } from '@nextui-org/react';
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

const JurnalUmumPage = () => {
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
            <Link to={`/jurnal/jurnal-umum/${row.id}/edit`}>
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
      <div className="flex justify-between items-center">
        <h1>Jurnal Umum</h1>

        <Link to="/jurnal/jurnal-umum/add">
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
              limit: 100,
              startDate,
              endDate,
              tipe: 'jurnal-umum',
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
        <>
          <div className="rounded shadow-lg p-2 bg-white">
            <Table data={listBukuBesar?.data || []} columns={columns} />

            <div className="flex w-full justify-end">
              <div className="my-8 mx-4">
                <Pagination isCompact showControls showShadow color="primary" page={listBukuBesar?.current_page} total={listBukuBesar?.total_page} onChange={(page: any) => setCurrentPage(page)} />
                <div className="flex justify-end items-center gap-4 mt-4">
                  {/* <span className="text-default-400 text-small">Total Data: {listAkuns.total_data} </span> */}
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
          </div>
        </>
      ) : null}
    </>
  );
};

export default JurnalUmumPage;
