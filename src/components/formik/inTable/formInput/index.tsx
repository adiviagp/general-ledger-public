import { Input } from '@nextui-org/react';
import { useField } from 'formik';

interface FormInputProps {
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  testId?: string;
  startContent?: any;
  disabled?: any;
}
const FormInput = ({ type, name, placeholder, required, startContent, disabled, testId = 'formInput' }: FormInputProps) => {
  const [field, meta] = useField(name);
  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;

  return (
    <div className="m-2">
      <Input
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        validationState={isFieldDirty ? 'invalid' : 'valid'}
        errorMessage={isFieldDirty && fieldError}
        fullWidth
        size="md"
        variant="bordered"
        startContent={<div className="pointer-events-none flex items-center">{startContent && startContent}</div>}
      />
    </div>
  );
};
export default FormInput;
