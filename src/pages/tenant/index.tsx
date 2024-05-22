import React, { useEffect, useState } from 'react';
import { Button, Input, SelectItem, Card, CardBody } from '@nextui-org/react';
import ExportDropdown from '@src/components/dropdown/export';
import FormAkun from '@src/components/formik/formAkun';
import FormBulan from '@src/components/formik/formBulan';
import FormInput from '@src/components/formik/formInput';
import FormJenisTenant from '@src/components/formik/formJenisTenant';
import FormSelect from '@src/components/formik/formSelect';
import { Form, Formik } from 'formik';
import Select from 'react-select';

import { EyeIcon } from '@src/components/icons/EyeIcon';
import { EditIcon } from '@src/components/icons/EditIcon';
import { DeleteIcon } from '@src/components/icons/DeleteIcon';
import { useGetTenant } from '@src/hooks/tenant/useGetTenant';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Table from '@src/components/table/table';

import { useDeleteTenant } from '@src/hooks/tenant/useDeleteTenant';
import { Pagination } from '@nextui-org/react';
import CheckStatus from '@src/components/tenant/list/checkStatus';
import CheckPembayaran from '@src/components/tenant/list/checkPembayaran';

const tipeData = [
  {
    label: 'ALL',
    value: 'ALL',
  },
  {
    label: 'Individual',
    value: 1,
  },
  {
    label: 'Perusahaan',
    value: 2,
  },
];
const statusData = [
  {
    label: 'ALL',
    value: 'ALL',
  },
  {
    label: 'Sedang Berjalan',
    value: 'Sedang Berjalan',
  },
  {
    label: 'Segera Berakhir',
    value: 'Segera Berakhir',
  },
  {
    label: 'Telah Berakhir',
    value: 'Telah Berakhir',
  },
];
const pembayaranData = [
  {
    label: 'ALL',
    value: 'ALL',
  },
  {
    label: 'Lunas',
    value: 'Lunas',
  },
  {
    label: 'Belum Lunas',
    value: 'Belum Lunas',
  },
];

const defaultData = {
  name: '',
  tenantTypeId: 'ALL',
  tenantJenisId: 'ALL',
  status: 'ALL',
  pembayaran: 'ALL',
};

const TenantPage = () => {
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
  const [rowsPerPage, setRowsPerPage] = useState(100000);

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
      <h1>Tenant</h1>
      <Card className="p-2">
        <CardBody>
          <Formik
            initialValues={defaultData}
            // validationSchema={AddAkunRules}
            enableReinitialize={true}
            validateOnMount={true}
            onSubmit={(values: any) => {
              setParams({
                ...params,
                name: values.name,
                tenantTypeId: values.tenantTypeId === 'ALL' ? null : values.tenantTypeId,
                tenantJenisId: values.tenantJenisId === 'ALL' ? null : values.tenantJenisId,
                status: values.status === 'ALL' ? null : values.status,
                pembayaran: values.pembayaran === 'ALL' ? null : values.pembayaran,
              });
            }}
          >
            {({ values }) => (
              <Form>
                <div className="flex flex-wrap gap-4 items-end mb-8">
                  <div className="md:flex-auto flex gap-2 justify-end">
                    <ExportDropdown
                      title="Tambah Tenant"
                      color="success"
                      variant="solid"
                      options={[
                        {
                          key: 'individual',
                          title: 'Individual',
                          link: '/tenant/add/individual',
                        },
                        {
                          key: 'perusahaan',
                          title: 'Perusahaan',
                          link: '/tenant/add/perusahaan',
                        },
                      ]}
                    />
                  </div>
                </div>
                <div>
                  <FormInput placeholder="-- Nama Tenant --" type="text" name="name" label="Nama Tenant" />
                  <FormSelect name="tenantTypeId" label="Tipe" datas={tipeData} placeholder="-- SELECT TIPE --" />
                  <FormJenisTenant showAll name="tenantJenisId" label="Jenis Tenant" />
                  <FormSelect name="status" label="Status" datas={statusData} placeholder="-- SELECT STATUS --" />
                  <FormSelect name="pembayaran" label="Pembayaran" datas={pembayaranData} placeholder="-- SELECT PEMBAYARAN --" />

                  <div className="flex justify-end mb-8">
                    <div className="mt-6 mr-2"></div>
                    <Button color="primary" className="text-white  mt-6" type="submit">
                      Cari
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

          <>
            <Table data={listTenant?.data || []} columns={columns} />
          </>
        </CardBody>
      </Card>
    </>
  );
};

export default TenantPage;
