import { Select, SelectItem } from '@nextui-org/react';
import { useField, useFormikContext } from 'formik';
import moment from 'moment';

interface FormInputProps {
  name: string;
  required: boolean;
  label: string;
}
const FormBulan = ({ name, label, required }: FormInputProps) => {
  const [field, meta] = useField(name);

  const { setFieldValue, handleBlur } = useFormikContext();

  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;

  const months = [
    {
      label: 'Januari',
      value: '1',
    },
    {
      label: 'Februari',
      value: '2',
    },
    {
      label: 'Maret',
      value: '3',
    },
    {
      label: 'April',
      value: '4',
    },
    {
      label: 'Mei',
      value: '5',
    },
    {
      label: 'Juni',
      value: '6',
    },
    {
      label: 'Juli',
      value: '7',
    },
    {
      label: 'Agustus',
      value: '8',
    },
    {
      label: 'September',
      value: '9',
    },
    {
      label: 'Oktober',
      value: '10',
    },
    {
      label: 'November',
      value: '11',
    },
    {
      label: 'Desember',
      value: '12',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row mb-3">
      <div className="md:min-w-[300px] md:pt-3">
        {label} {required && <span className="text-danger">*</span>}
      </div>
      <div className="flex-1">
        <Select
          aria-label={label}
          name={field.name}
          isInvalid={isFieldDirty || false}
          variant="bordered"
          fullWidth
          labelPlacement="outside"
          placeholder="-- SELECT BULAN --"
          defaultSelectedKeys={[field.value]}
          onChange={(e: any) => setFieldValue(name, e.target.value)}
          onBlur={handleBlur(name)}
        >
          {months.map((data) => (
            <SelectItem key={data.value} value={data.value}>
              {data.label}
            </SelectItem>
          ))}
        </Select>

        {isFieldDirty && (
          <span className="pl-0 text-danger" style={{ fontSize: '0.85rem' }}>
            {fieldError}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormBulan;
