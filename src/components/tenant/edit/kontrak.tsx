import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue, Spinner } from '@nextui-org/react';
import { EditIcon } from '@src/components/icons/EditIcon';
import { DeleteIcon } from '@src/components/icons/DeleteIcon';
import { useGetTenant } from '@src/hooks/tenant/useGetTenant';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useGetContract } from '@src/hooks/tenant/useGetContract';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input } from '@nextui-org/react';
import DateRange from '@src/components/dateRange';
import FormInput from '@src/components/formik/formInput';
import FormJenisTenant from '@src/components/formik/formJenisTenant';
import FormRadio from '@src/components/formik/formRadio';
import FormTextArea from '@src/components/formik/formTextArea';
import { FieldArray, Form, Formik } from 'formik';
import { usePostcontract } from '@src/hooks/tenant/usePostContract';
import { useDeleteKontrak } from '@src/hooks/tenant/useDeleteKontrak';
import { useUpdateKontrak } from '@src/hooks/tenant/useUpdateKontrak';

const columns = [
  { name: 'AKTIF', uid: 'isActive' },
  { name: 'START DATE', uid: 'startDate' },
  { name: 'END DATE', uid: 'endDate' },
  { name: 'PEMBAYARAN', uid: 'isPaid' },
  { name: 'ACTIONS', uid: 'actions' },
];


type User = (typeof users)[0];

export default function TenantContracts({ id }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: listTenant, isLoading, refetch } = useGetContract({ page: currentPage, limit: rowsPerPage, tenantId: id });
  const { mutateAsync: mutateContract, data: dataContract, isLoading: isLoadingContract, isSuccess: isSuccessContract } = usePostcontract();
  const { mutateAsync: mutateUpdateContract } = useUpdateKontrak();

  const { mutate } = useDeleteKontrak();

  const renderCell = React.useCallback((user: any, columnKey: React.Key) => {
    const subDate = user.contracts?.length > 0 ? moment(user.contracts[0].endDate).diff(moment(), 'days') : 0;
    const cellValue = user[columnKey];

    switch (columnKey) {
      case 'role':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case 'isActive':
        return (
          <Checkbox
          isSelected={user.isActive === true}
            onClick={() => {
              const kontrak = {
                tenggatPembayaran: {
                  startDate: new Date(user?.tenggatPembayaran),
                  endDate: new Date(user?.tenggatPembayaran)
                },
                keterangan: user?.keterangan,
                noGedung: user?.noGedung,
                isPaid: user?.isPaid,
                tenantId: user?.tenantId,
                isActive: !user.isActive
              }
              const pembayaran = user?.pembayaran
              mutateUpdateContract({ id: parseInt(user.id), formData: { kontrak: kontrak, pembayaran: pembayaran } });
            }}
          >
            Aktif
          </Checkbox>
        );
      case 'startDate':
        return moment(user.startDate).format('YYYY-MM-DD');
      case 'endDate':
        return moment(user.endDate).format('YYYY-MM-DD');
      case 'tenantTypeName':
        return user.tenantType.name;
      case 'tenantJenis':
        return user.contracts?.length > 0 ? user.contracts[0].tenantJenis?.name : null;
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Link to={`/kontrak/${user.id}`}>
              <Tooltip content="Edit">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
            </Link>

            <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => mutate({ id: user.id })}>
              <DeleteIcon />
            </span>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const defaultData = {
    kontrak: {
      masaKontrak: {
        startDate: null,
        endDate: null,
      },
      tenantJenisId: '',
      hargaSewa: '',
      noGedung: '',
      isPaid: false,
    },
  };

  useEffect(() => {
    if (isSuccessContract) {
      onClose();
    }
  }, [isSuccessContract]);

  return (
    <div className="p-4">
      {isLoading || !listTenant ? (
        <div className=" flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold mb-6">List Kontrak Tenant</h2>
            <Link to={`/tenant/${id}/kontrak-baru`}>
              <Button color="primary" className="text-white ml-2" type="button">
                Tambah Kontrak Baru
              </Button>
            </Link>
          </div>
          <Formik
            initialValues={defaultData}
            // validationSchema={AddAkunRules}
            enableReinitialize={true}
            validateOnMount={true}
            onSubmit={(values) => {
              const contract: any = {
                hargaSewa: values.kontrak.hargaSewa ? parseInt(values.kontrak.hargaSewa) : null,
                tenantJenisId: values.kontrak.tenantJenisId ? parseInt(values.kontrak.tenantJenisId) : null,
                noGedung: values.kontrak.noGedung,
                isPaid: values.kontrak.isPaid,
                startDate: values.kontrak.masaKontrak.startDate ? new Date(values.kontrak.masaKontrak.startDate) : null,
                endDate: values.kontrak.masaKontrak.endDate ? new Date(values.kontrak.masaKontrak.endDate) : null,
                tenantId: parseInt(id),
              };
              mutateContract(contract);
            }}
          >
            <Form></Form>
          </Formik>

          <Table selectionMode="single" removeWrapper aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={listTenant?.data || []}>{(item: any) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}</TableBody>
          </Table>
        </>
      )}
    </div>
  );
}
