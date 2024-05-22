import { Textarea } from '@nextui-org/react';
import { useField } from 'formik';

interface FormInputProps {
  name: string;
  required: boolean;
  placeholder?: string;
  testId?: string;
}
const FormArea = ({ name, placeholder, required, testId = 'formInput' }: FormInputProps) => {
  const [field, meta] = useField(name);
  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;

  return (
    <div className="m-2">
      <Textarea
        {...field}
        minRows={1}
        validationState={isFieldDirty ? 'invalid' : 'valid'}
        errorMessage={isFieldDirty && fieldError}
        fullWidth
        size="md"
        variant="bordered"
      />
    </div>
  );
};

export default FormArea;
