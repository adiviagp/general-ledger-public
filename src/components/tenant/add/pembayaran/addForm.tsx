import { Button, Tooltip } from '@nextui-org/react';
import DateSingle from '@src/components/formik/inTable/dateSingle';
import FormCurrency from '@src/components/formik/inTable/formCurrency';
import FormInput from '@src/components/formik/inTable/formInput';
import { DeleteIcon } from '@src/components/icons/DeleteIcon';
import TableNoOverlay from '@src/components/table/tableNoOverlay';
import { ColumnDef } from '@tanstack/react-table';
import { getIn, useFormikContext } from 'formik';
import React, { useCallback, useEffect } from 'react';

// ! for a while deskripsi been disable

const AddForm = ({ name, handleAdd, handleRemove }: any) => {
  const { values } = useFormikContext();
  const formikSlice = getIn(values, name) || [];

  const defaultColumns: ColumnDef<any>[] = [
    {
      header: 'Termin',
      size: 3,
      cell: ({ row: { index } }) => <p className="text-center">{index + 1}</p>,
      accessorKey: 'nominal',
    },
    {
      header: 'Nominal',
      cell: ({ row: { index } }) => <FormCurrency type="text" name={`${name}[${index}].nominal`} required counter={`${name}[${index}].credit`} />,
      accessorKey: 'nominal',
    },
    {
      header: 'Tanggal Bayar',
      cell: ({ row: { index } }) => <DateSingle type="text" name={`${name}[${index}].tanggalBayar`} />,
      accessorKey: 'tanggalBayar',
    },
    {
      header: 'Keterangan',
      cell: ({ row: { index } }) => <FormInput placeholder="-- Keterangan --" type="text" name={`${name}[${index}].keterangan`} />,
      accessorKey: 'keterangan',
    },
    {
      header: 'Action',
      size: 20,
      cell: ({ row: { index } }) => (
        <div className="relative flex items-center px-4">
          <Tooltip color="danger" content="Delete Row">
            <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => handleRemove(index)}>
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      ),
      accessorKey: 'action',
    },
  ];

  const [data, setData] = React.useState(() => formikSlice);
  const [columns] = React.useState<typeof defaultColumns>(() => defaultColumns);

  useEffect(() => {
    setData(formikSlice);
  }, [formikSlice]);

  const onAdd = useCallback(() => {
    const newState = [...data];
    const item = {
      nominal: 0,
      tanggalBayar: {
        startDate: null,
        endDate: null,
      },
      keterangan: '',
    };

    newState.push(item);
    setData(newState);
    handleAdd(item);
  }, [handleAdd, data]);

  return (
    <div>
      <TableNoOverlay data={data} columns={columns} />
      <div className="flex justify-end mb-5">
        <Button color="primary" className="text-white mr-6 mt-6" onClick={onAdd}>
          Tambah Termin +
        </Button>
      </div>
    </div>
  );
};

export default AddForm;
