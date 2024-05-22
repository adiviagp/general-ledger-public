import { Input } from '@nextui-org/react';
import { useField } from 'formik';

interface FormInputProps {
  type: string;
  name: string;
  required?: boolean;
  label: string;
  placeholder?: string;
  testId?: string;
  variant?: "bordered" | "flat" | "faded" | "underlined" | undefined;
  disabled?: boolean;
}
const FormInput = ({ type, name, placeholder, label, required, testId = 'formInput', disabled, variant = "bordered" }: FormInputProps) => {
  const [field, meta] = useField(name);
  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;

  return (
    <div className="flex flex-col md:flex-row mb-3">
      <div className="md:min-w-[300px] md:pt-3">
        {label} {required && <span className="text-danger">*</span>}
      </div>
      <div className="flex-1">
        <Input placeholder={placeholder} {...field} disabled={disabled} type={type} validationState={isFieldDirty ? 'invalid' : 'valid'} errorMessage={isFieldDirty && fieldError} fullWidth size="lg" variant={variant} />
      </div>
    </div>
  );
};

export default FormInput;

