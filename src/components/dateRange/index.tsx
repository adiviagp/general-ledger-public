import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { useField } from 'formik';

interface ParamsType {
  name: string;
  required: boolean;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

const DateRange = ({ name, label, required, placeholder, disabled }: ParamsType) => {
  const [field, meta, helpers] = useField(name);
  const fieldError = meta.error;
  const fieldTouched = meta.touched;
  const isFieldDirty = fieldError && fieldTouched;
  const { value } = meta;
  const { setValue } = helpers;

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className="flex flex-col md:flex-row mb-3">
      <div className="md:min-w-[300px] md:pt-3">
        {label} {required && <span className="text-danger">*</span>}
      </div>
      <div className="flex-1">
        <Datepicker disabled={disabled} placeholder='Tanggal Mulai - Tanggal Berakhir' inputClassName="w-full rounded-xl border-3 px-2 py-4" primaryColor={"blue"} showShortcuts={true}  startFrom={new Date()} value={value} onChange={handleValueChange} />{' '}
      </div>
      {isFieldDirty && (
        <span className="pl-0 text-danger" style={{ fontSize: '0.85rem' }}>
          {fieldError}
        </span>
      )}
    </div>
  );
};

export default DateRange;
