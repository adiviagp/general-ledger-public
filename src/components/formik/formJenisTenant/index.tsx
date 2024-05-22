import { Input } from '@nextui-org/react';
import { useGetAkunLabel } from '@src/hooks/akun/useGetAkunLabel';
import { useGetTenantJenis } from '@src/hooks/tenant/useGetTenantJenis';
import { useField, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import Select from 'react-select';

interface FormInputProps {
  name: string;
  required?: boolean;
  label: string;
  placeholder?: string;
  testId?: string;
  showAll?: boolean;
}
const FormJenisTenant = ({ type, name, placeholder, label, showAll, required, testId = 'formInput' }: FormInputProps) => {
  const { data: listAkuns, isLoading, refetch } = useGetTenantJenis();

  const [jenisData, setJenisData] = useState<any>([{ label: 'ALL', value: 'ALL'}])

  const [field, meta] = useField(name);

  const { setFieldValue, handleBlur } = useFormikContext();

  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;

  useEffect(() => {
    if(listAkuns && showAll){
      setJenisData([...jenisData, ...listAkuns])
    }
  }, [listAkuns])
  

  const customStyles = {
    control: (base: any) => ({
      ...base,
      borderColor: isFieldDirty ? '#ec0000' : '#ddd',
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
    <div className="flex flex-col md:flex-row mb-3">
      <div className="md:min-w-[300px] md:pt-3">{label} {required && (<span className='text-danger'>*</span>)}</div>
      <div className="flex-1">
      <Select
        menuPosition="fixed"
        name={field.name}
        defaultValue={showAll && jenisData? jenisData[0] : null}
        options={showAll && jenisData? jenisData : listAkuns}
        isLoading={isLoading}
        placeholder="-- SELECT JENIS TENANT --"
        // isDisabled={isDisabled}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            neutral50: isFieldDirty ? '#ec0000' : '#a6a4a4',
          },
        })}
        onChange={(selectedOption: any) => setFieldValue(name, selectedOption.value)}
        onBlur={handleBlur(name)}
      />
      {isFieldDirty && (
        <span className="pl-0 text-danger" style={{ fontSize: '0.85rem' }}>
          {fieldError}
        </span>
      )}
      </div>
    </div>
  );
};

export default FormJenisTenant;
