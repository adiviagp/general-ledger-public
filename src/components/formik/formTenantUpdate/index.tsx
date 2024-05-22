import { useGetTenantDetailLabel } from '@src/hooks/akun/useGetTenantDetailLabel';
import { useGetTenantLabel } from '@src/hooks/akun/useGetTenantLabel';
import { useGetTenantJenis } from '@src/hooks/tenant/useGetTenantJenis';
import { useField, useFormikContext } from 'formik';
import { useState } from 'react';
import Select from 'react-select';

interface FormInputProps {
  name: string;
  required: boolean;
  isDisabled?: boolean;
  label: string;
}
const FormTenantUpdate = ({ name, label, required, isDisabled = false }: FormInputProps) => {
  const [field, meta] = useField(name);

  const { data: tenantDetail, isLoading } = useGetTenantDetailLabel({ id: field.value });

  return (
    <>
      <div className="flex flex-col md:flex-row mb-3">
        <div className="md:min-w-[300px] md:pt-3">Tipe Tenant{required && <span className="text-danger">*</span>}</div>
        <div className="flex-1">
          <Select
            menuPosition="fixed"
            name={field.name}
            value={tenantDetail && tenantDetail[1]}
            options={tenantDetail}
            isLoading={isLoading}
            placeholder="-- SELECT TENANT --"
            isDisabled={true}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                neutral50: '#a6a4a4',
              },
            })}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-3">
        <div className="md:min-w-[300px] md:pt-3">
          {label} {required && <span className="text-danger">*</span>}
        </div>
        <div className="flex-1">
          <Select
            menuPosition="fixed"
            name={field.name}
            value={tenantDetail && tenantDetail[0]}
            options={tenantDetail}
            isLoading={isLoading}
            placeholder="-- SELECT TENANT --"
            isDisabled={true}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                neutral50: '#a6a4a4',
              },
            })}
          />
        </div>
      </div>
    </>
  );
};

export default FormTenantUpdate;
