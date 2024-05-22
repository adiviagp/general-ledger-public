import { Select, SelectItem } from '@nextui-org/react';
import { useField, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';

interface FormInputProps {
  name: string;
  required: boolean;
  label: string;
}
const FormTahun = ({ name, label, required }: FormInputProps) => {
  const [field, meta] = useField(name);
  const [years, setYears] = useState<any>([]);

  const { setFieldValue, handleBlur } = useFormikContext();

  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;

  function getTahun(back: number) {
    const yearList = [];
    const year = new Date().getFullYear();
    for (let i = 0; i < 3; i += 1) {
      const penambahan = Number(year) + i;
      yearList.unshift({
        label: penambahan.toString(),
        value: penambahan.toString(),
      });
    }

    for (let i = 1; i < 3; i += 1) {
      const pengurangan = Number(year) - i;
      yearList.push({
        label: pengurangan.toString(),
        value: pengurangan.toString(),
      });
    }
    return yearList;
  }

  useEffect(() => {
    setYears(getTahun(10));
  }, []);

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
          placeholder="-- SELECT TAHUN --"
          defaultSelectedKeys={[field.value]}
          onChange={(e: any) => setFieldValue(name, e.target.value)}
          onBlur={handleBlur(name)}
        >
          {years.map((data:any) => (
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

export default FormTahun;
