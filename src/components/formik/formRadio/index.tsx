import { Input, Radio, RadioGroup } from '@nextui-org/react';
import { useField } from 'formik';

interface option {
  value: any;
  label: any;
}
interface FormInputProps {
  name: string;
  required: boolean;
  label: string;
  placeholder?: string;
  testId?: string;
  disabled?: boolean;
  options: option[];
}
const FormRadio = ({ name, placeholder, options, label, required, testId = 'formInput', disabled }: FormInputProps) => {
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
        <RadioGroup label="" {...field} isDisabled={disabled}>
          {options?.map((option: option) => (
            <Radio key={option.value} value={option.value}>{option.label}</Radio>
          ))}
        </RadioGroup>
        {/* <Input {...field} type={type} validationState={isFieldDirty ? 'invalid' : 'valid'} errorMessage={isFieldDirty && fieldError} fullWidth size="lg" variant="bordered" /> */}
      </div>
    </div>
  );
};

export default FormRadio;
