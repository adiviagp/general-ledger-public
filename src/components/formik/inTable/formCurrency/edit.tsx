import { Input } from '@nextui-org/react';
import { addSeparator, removeNonNumeric } from '@src/utils/fieldFormatter';
import { useField, useFormikContext } from 'formik';
import { useEffect, useRef, useState } from 'react';

interface FormInputProps {
  type: string;
  name: string;
  counter: string;
  required: boolean;
  placeholder?: string;
  testId?: string;
}
const FormCurrencyEdit = ({ type, name, counter, required, testId = 'formInput' }: FormInputProps) => {
  const [number, setNumber] = useState('');
  const { setFieldValue, handleBlur } = useFormikContext();

  const [field, meta] = useField(name);
  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;
	const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      setNumber(addSeparator(removeNonNumeric(field.value)));
		} else {
			isMounted.current = true;
		}
  }, [field.value]);


  return (
    <div className="m-2">
      <Input
        value={number}
        onChange={(e: any) => {
          setNumber(addSeparator(removeNonNumeric(e.target.value)));
          setFieldValue(name, removeNonNumeric(e.target.value));
        }}
        type={type}
        validationState={isFieldDirty ? 'invalid' : 'valid'}
        errorMessage={isFieldDirty && fieldError}
        placeholder="0"
        fullWidth
        size="md"
        variant="bordered"
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">Rp. </span>
          </div>
        }
      />
    </div>
  );
};

export default FormCurrencyEdit;
