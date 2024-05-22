import { FieldArray, Form, Formik } from 'formik';
import AddForm from './addForm';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const PembayaranTenant = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold">Pembayaran</h2>
      <div className="py-6">
        <FieldArray name="pembayaran">{(arrayHelpers: any) => <AddForm name="pembayaran" handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
      </div>
    </div>
  );
};

export default PembayaranTenant;
