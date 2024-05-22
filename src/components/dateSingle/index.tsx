import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { useField } from 'formik';

interface ParamsType {
  name: string;
  required: boolean;
  label?: string;
  placeholder?: string;
  disabled?: boolean
}

const DateSingle = ({ name, label, required, placeholder, disabled }: ParamsType) => {
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
    <div className="flex flex-col md:flex-row mb-3 flex-wrap">
      <div className="md:min-w-[300px] md:pt-3">
        {label} {required && <span className="text-danger">*</span>}
      </div>
      <div className="flex-1">
        <Datepicker
          disabled={disabled}
          useRange={false}
          asSingle={true}
          placeholder={placeholder}
          inputClassName="w-full rounded-xl border-3 px-2 py-4"
          primaryColor={'blue'}
          startFrom={new Date()}
          value={value}
          onChange={handleValueChange}
        />{' '}
      </div>
    </div>
  );
};

export default DateSingle;
