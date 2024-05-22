import { useGetTenantLabel } from '@src/hooks/akun/useGetTenantLabel';
import { useGetTenantJenis } from '@src/hooks/tenant/useGetTenantJenis';
import { useField, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import FormRadio from '../formRadio';
import { useGetKontrakLabel } from '@src/hooks/akun/useGetKontrakLabel';

interface FormInputProps {
  name: string;
  required: boolean;
  isDisabled?: boolean;
  label: string;
}
const   FormTenant = ({ name, label, required, isDisabled = false }: FormInputProps) => {
  const [field, meta] = useField(name);
  const [selectedTenantJenis, setSelectedTenantJenis] = useState(null);
  const [selectedTenantId, setSelectedTenantId] = useState(null);

  const { data: listTenantJenis, isLoading: isLoadingTenantJenis } = useGetTenantJenis();
  const { data: listAkuns, isLoading } = useGetTenantLabel({ tenantJenisId: selectedTenantJenis });
  const { data: listKontrak } = useGetKontrakLabel({ tenantId: selectedTenantId });

  const { values, setFieldValue, handleBlur } : any = useFormikContext();

  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;

  const [selectedTenant, setSelectedTenant] = useState(null);

  useEffect(() => {
    setFieldValue(name, null);

  }, [listAkuns]);

  const customStyles = {
    control: (base: any) => ({
      ...base,
      borderColor: isFieldDirty ? '#ec0000' : '#E4E7EB',
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
            options={listTenantJenis}
            isLoading={isLoading}
            placeholder="-- SELECT TIPE TENANT --"
            isDisabled={isDisabled}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                neutral50: isFieldDirty ? '#ec0000' : '#a6a4a4',
              },
            })}
            onChange={(selectedOption: any) => {
              console.log(selectedOption.value);
              setSelectedTenantJenis(selectedOption.value)}}
            onBlur={handleBlur(name)}
          />
          {isFieldDirty && (
            <span className="pl-0 text-danger" style={{ fontSize: '0.85rem' }}>
              {fieldError}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-3">
        <div className="md:min-w-[300px] md:pt-3">
          {label} {required && <span className="text-danger">*</span>}
        </div>
        <div className="flex-1">
          <Select
            menuPosition="fixed"
            name={name}
            value={listAkuns?.find((data) => data.value === field.value) || null}
            options={listAkuns}
            isLoading={isLoading}
            placeholder="-- SELECT TENANT --"
            isDisabled={isDisabled || selectedTenantJenis === null}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                neutral50: isFieldDirty ? '#ec0000' : '#a6a4a4',
              },
            })}
            onChange={(selectedOption: any) => {
              setSelectedTenantId(selectedOption.value)
              setFieldValue(name, selectedOption.value)}
            }
            onBlur={handleBlur(name)}
          />
          {isFieldDirty && (
            <span className="pl-0 text-danger" style={{ fontSize: '0.85rem' }}>
              {fieldError}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-3">
        <div className="md:min-w-[300px] md:pt-3">
          Kontrak {required && <span className="text-danger">*</span>}
        </div>
        <div className="flex-1">
          <Select
            menuPosition="fixed"
            name="contractId"
            value={listKontrak?.find((data) => data.value === values.contractId) || null}
            options={listKontrak}
            isLoading={isLoading}
            placeholder="-- SELECT KONTRAK --"
            isDisabled={isDisabled || selectedTenantJenis === null || selectedTenantId === null}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                neutral50: isFieldDirty ? '#ec0000' : '#a6a4a4',
              },
            })}
            onChange={(selectedOption: any) => setFieldValue("contractId", selectedOption.value)}
            onBlur={handleBlur("contractId")}
          />
          {isFieldDirty && (
            <span className="pl-0 text-danger" style={{ fontSize: '0.85rem' }}>
              {fieldError}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default FormTenant;
