import { Input } from '@nextui-org/react';
import { addSeparator, removeNonNumericCurrency } from '@src/utils/fieldFormatter';
import { useField, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';

interface FormInputProps {
  type: string;
  name: string;
  required?: boolean;
  label: string;
  placeholder?: string;
  testId?: string;
  variant?: 'bordered' | 'flat' | 'faded' | 'underlined' | undefined;
  disabled?: boolean;
}
const FormCurrency = ({ name, placeholder, label, required, testId = 'formInput', disabled, variant = 'bordered' }: FormInputProps) => {
  const [number, setNumber] = useState('');
  const { setFieldValue, handleBlur } = useFormikContext();

  const [field, meta] = useField(name);
  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;

  useEffect(() => {
    if (field.value) {
      setNumber(field.value);
    }
  }, [field.value]);

  return (
    <div className="flex flex-col md:flex-row mb-3">
      <div className="md:min-w-[300px] md:pt-3">
        {label} {required && <span className="text-danger">*</span>}
      </div>
      <div className="flex-1">
        <NumericFormat
          validationState={isFieldDirty ? 'invalid' : 'valid'}
          errorMessage={isFieldDirty && fieldError}
          fullWidth
          size="lg"
          disabled={disabled}
          variant={variant}
          decimalScale={0}
          value={number}
          customInput={Input}
          thousandSeparator=","
          onChange={(e) => {
            console.log(removeNonNumericCurrency(e.target.value));
            setNumber(removeNonNumericCurrency(e.target.value));
          }}
          onBlur={(e) => {
            setFieldValue(name, removeNonNumericCurrency(e.target.value));
          }}
          startContent={<div className="pointer-events-none flex items-center text-gray-400">Rp. </div>}
        />
      </div>
    </div>
  );
};

export default FormCurrency;
