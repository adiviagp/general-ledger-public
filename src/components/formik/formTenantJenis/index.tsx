import { Select, SelectItem } from '@nextui-org/react';
import { useGetTenantJenis } from '@src/hooks/tenant/useGetTenantJenis';
import { useField, useFormikContext } from 'formik';
import moment from 'moment';

interface FormInputProps {
  name: string;
  required: boolean;
  label: string;
}
const FormTenantJenis = ({ name, label, required }: FormInputProps) => {
  const [field, meta] = useField(name);

  const { setFieldValue, handleBlur } = useFormikContext();
  const { data: listAkuns, isLoading } = useGetTenantJenis();


  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;


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
          placeholder="-- SELECT JENIS TENANT --"
          defaultSelectedKeys={[field.value]}
          onChange={(e: any) => setFieldValue(name, e.target.value)}
          onBlur={handleBlur(name)}
        >
          {listAkuns?.map((data) => (
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

export default FormTenantJenis;
