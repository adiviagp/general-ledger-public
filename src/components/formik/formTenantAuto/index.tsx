import { useGetTenantLabel } from '@src/hooks/akun/useGetTenantLabel';
import { useGetTenantJenis } from '@src/hooks/tenant/useGetTenantJenis';
import { useField, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import FormRadio from '../formRadio';
import { useGetTenantDetailLabel } from '@src/hooks/akun/useGetTenantDetailLabel';

interface FormInputProps {
  tenantId: any;
  // tenantJenisId: string;
  required: boolean;
  isDisabled?: boolean;
  label: string;
}
const FormTenantAuto = ({ tenantId, tenantJenisId, label, required, isDisabled = false }: FormInputProps) => {
  // const { data: listTenantJenis, isLoading: isLoadingTenantJenis } = useGetTenantJenis();
  const { data: listTenant, isLoading } = useGetTenantDetailLabel({ id: tenantId });

  const customStyles = {
    control: (base: any) => ({
      ...base,
      borderWidth: '3px',
      borderRadius: '10px',
    }),
    menuList: (base: any) => ({
      ...base,
      zIndex: 5,
      '::-webkit-scrollbar': {
        width: '4px',
        height: '4px',
      },
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'rgb(107, 161, 211)',
        borderRadius: '2px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: 'rgb(76, 119, 195)',
      },
    }),
  };
  

  return (
    <>
      <div className="flex flex-col md:flex-row mb-3">
        <div className="md:min-w-[300px] md:pt-3">Jenis Tenant{required && <span className="text-danger">*</span>}</div>
        <div className="flex-1">
          <Select
            menuPosition="fixed"
            options={listTenant}
            isLoading={isLoading}
            placeholder="-- SELECT TIPE TENANT --"
            value={listTenant && listTenant[1]}
            isDisabled
            styles={customStyles}
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
            value={listTenant && listTenant[0]}
            options={listTenant}
            isLoading={isLoading}
            placeholder="-- SELECT TENANT --"
            isDisabled
            styles={customStyles}
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

export default FormTenantAuto;
