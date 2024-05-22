import { Button, Tooltip } from '@nextui-org/react';
import FormAkun from '@src/components/formik/inTable/formAkun';
import FormArea from '@src/components/formik/inTable/formArea';
import FormCurrency from '@src/components/formik/inTable/formCurrency';
import FormCurrencyEdit from '@src/components/formik/inTable/formCurrency/edit';
import FormTotalSum from '@src/components/formik/inTable/formTotalSum';
import { DeleteIcon } from '@src/components/icons/DeleteIcon';
import Table from '@src/components/table/table';
import { ColumnDef } from '@tanstack/react-table';
import { getIn, useFormikContext } from 'formik';
import React, { useCallback, useEffect } from 'react';


// ! for a while deskripsi been disable

const AddForm = ({ name, handleAdd, handleRemove }: any) => {
  const { values } = useFormikContext();
  const formikSlice = getIn(values, name) || [];

  const defaultColumns: ColumnDef<any>[] = [
    {
      header: 'Akun',
      cell: ({ row: { index } }) => <FormAkun name={`${name}[${index}].akunId`} />,
      accessorKey: 'akunId',
    },
    {
      header: 'Keterangan',
      cell: ({ row: { index } }) => <FormArea name={`${name}[${index}].keterangan`} required />,
      accessorKey: 'keterangan',
    },
    {
      header: 'Debit',
      footer: () => <FormTotalSum name="jurnals" field="debit" />,
      // footer: (props) => console.log(values[name]),
      cell: ({ row: { index } }) => <FormCurrency type="text" name={`${name}[${index}].debit`} required counter={`${name}[${index}].credit`} />,
      accessorKey: 'debit',
    },
    {
      header: 'Credit',
      footer: () => <FormTotalSum name="jurnals" field="credit" />,
      cell: ({ row: { index } }) => <FormCurrency type="text" name={`${name}[${index}].credit`} required counter={`${name}[${index}].debit`} />,
      accessorKey: 'credit',
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

    };

    newState.push(item);
    setData(newState);
    handleAdd(item);
  }, [handleAdd, data]);


  return (
    <div>
      <div className="flex justify-end mb-5">
        <Button color="primary" className="text-white mr-6 mt-6" onClick={onAdd}>
          Add Row +
        </Button>
      </div>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default AddForm;
