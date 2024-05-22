import { useGetAkunLabel } from '@src/hooks/akun/useGetAkunLabel';
import { useGetTenantLabel } from '@src/hooks/akun/useGetTenantLabel';
import { useField, useFormikContext } from 'formik';
import Select from 'react-select';

interface FormInputProps {
  name: string;
  required: boolean;
  label: string;
}
const SudahJurnal = ({ name, label, required }: FormInputProps) => {
  const { data: listAkuns, isLoading, refetch } = useGetAkunLabel({tipe: 'ALL'});

  const [field, meta] = useField(name);

  const { setFieldValue, handleBlur } = useFormikContext();

  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;

  const customStyles = {
    control: (base: any) => ({
      ...base,
      borderColor: isFieldDirty ? '#ec0000' : '#E4E7EB',
      borderWidth: '3px',
      borderRadius: '10px'
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
      <div className="flex-1">
        <Select
          menuPosition="fixed"
          name={field.name}
          options={listAkuns}
          isLoading={isLoading}
          placeholder="-- SELECT AKUN --"
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

export default SudahJurnal;
