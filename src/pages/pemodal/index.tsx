import Table from '@src/components/table/table';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Button, Select, SelectItem, Tooltip } from '@nextui-org/react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { DeleteIcon } from '@src/components/icons/DeleteIcon';
import { EditIcon } from '@src/components/icons/EditIcon';
import { useGetPemodal } from '@src/hooks/pemodal/useGetPemodal';
import FormInput from '@src/components/formik/formInput';
import { useDeletePemodal } from '@src/hooks/pemodal/useDeletePemodal';

const PemodalPage = () => {
  const [params, setParams] = useState<any>(null);
  const { data: listBukuBesar, isLoading } = useGetPemodal(params);
  const { mutate, isLoading: isSuccess } = useDeletePemodal();

  const defaultColumns: ColumnDef<any>[] = [
    {
      header: 'Nama Pemodal',
      size: 5,
      cell: (info) => info.getValue(),
      accessorFn: (row) => row.name,
    },
    {
      header: 'Action',
      size: 20,
      accessorFn: (row) => (
        <div className="relative flex items-center px-4 gap-4">
          <Link to={`/pemodal/${row.id}/edit`}>
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EditIcon /> Lihat Detail
            </span>
          </Link>

          <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => mutate({ id: row.id })}>
            <DeleteIcon /> Hapus
          </span>
        </div>
      ),
      cell: (info) => info.getValue(),
    },
  ];

  const defaultData = {
    name: '',
  };
  const [data, setData] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [columns] = React.useState<typeof defaultColumns>(() => defaultColumns);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1>Pemodal</h1>
        <Link to="/pemodal/add">
          <Button color="success" className="text-white">
            Tambah Pemodal
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
            setParams({
              name: values.name,
            });
          }}
        >
          <Form>
            {/* BULAN */}
            <FormInput placeholder='-- Nama Pemodal --' type="text" name="name" required label="Nama Pemodal" />

            {/* ACTION */}
            <div className="flex justify-end mt-6">
              <Button color="primary" className="text-white mr-2 " type="submit">
                Cari
              </Button>
            </div>
          </Form>
        </Formik>
      </div>

      {isSearched ? (
        <div className="rounded shadow-lg p-2 bg-white">
          <Table data={listBukuBesar?.data || []} columns={columns} />{' '}
        </div>
      ) : null}
    </>
  );
};

export default PemodalPage;
