import { Button, Tooltip } from '@nextui-org/react';
import FormAkun from '@src/components/formik/inTable/formAkun';
import FormArea from '@src/components/formik/inTable/formArea';
import FormCurrency from '@src/components/formik/inTable/formCurrency';
import FormTotalSum from '@src/components/formik/inTable/formTotalSum';
import { DeleteIcon } from '@src/components/icons/DeleteIcon';
import Table from '@src/components/table/table';
import { ColumnDef } from '@tanstack/react-table';
import { getIn, useFormikContext } from 'formik';
import React, { useCallback, useEffect } from 'react';

// ! for a while deskripsi been disable

const AddForm = ({ no, name, handleAdd, handleRemove }: any) => {
  const { values } = useFormikContext();
  const formikSlice = getIn(values, name) || [];

  const onAdd = useCallback(() => {
    const item = {
      tipe: name
    };

    handleAdd(item);
  }, [handleAdd]);


  return (
    <>
      {formikSlice?.map((_, index) => (
        <tr key={index}>
          <td className="border border-slate-600">{no}.{index + 1}</td>
          <td className="border border-slate-600 p-2">
            <FormAkun name={`${name}[${index}].akunId`} />
          </td>
          <td className="border border-slate-600">
            {' '}
            <Tooltip color="danger" content="Delete Row">
              <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => handleRemove(index)}>
                <DeleteIcon />
              </span>
            </Tooltip>
          </td>
        </tr>
      ))}

      <tr>
        <td className="border border-slate-600">&nbsp;</td>
        <td className="border border-slate-600" colSpan={2}>
          <p color="primary" className="text-primary px-4 py-2 cursor-pointer" onClick={onAdd}>
            Add Row +
          </p>
        </td>
      </tr>
    </>
  );
};

export default AddForm;
