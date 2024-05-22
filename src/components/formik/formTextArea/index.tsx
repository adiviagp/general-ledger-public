import { Input, Textarea } from '@nextui-org/react';
import { useField } from 'formik';

interface FormInputProps {
  name: string;
  required?: boolean;
  label: string;
  placeholder?: string;
  testId?: string;
}
const FormTextArea = ({ name, placeholder, label, required = false, testId = 'formInput' }: FormInputProps) => {
  const [field, meta] = useField(name);
  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;

  return (
    <div className="flex flex-col md:flex-row mb-3">
      <div className="md:min-w-[300px] md:pt-3">{label} {required && (<span className='text-danger'>*</span>)}</div>
      <div className="flex-1">
        <Textarea {...field} validationState={isFieldDirty ? 'invalid' : 'valid'} errorMessage={isFieldDirty && fieldError} fullWidth size="lg" variant="bordered" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormTextArea;
