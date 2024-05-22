import { Input } from '@nextui-org/react';
import { addSeparator } from '@src/utils/fieldFormatter';
import { useField, useFormikContext } from 'formik';
import { useEffect } from 'react';

const FormTotalSum = ({name, field}) => {
  const { values, setFieldValue } = useFormikContext();
  const getTotals = () => {
    let total = 0;
    values[name]?.forEach(item => {
      total += item[field] ? parseInt(item[field]) : 0;
    });
    return total.toString();
  };


  return <div className="m-2">Total: {addSeparator(getTotals())}</div>;
};

export default FormTotalSum;
