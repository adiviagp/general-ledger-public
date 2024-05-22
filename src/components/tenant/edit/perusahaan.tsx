import FormInput from '@src/components/formik/formInput';
import FormTextArea from '@src/components/formik/formTextArea';
import React from 'react';

const InformasiPerusahaanEdit = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold">Informasi Tenant</h2>
      <div className="p-6">
        <FormInput type="text" name="informasi.name" required label="Nama" />
        <FormInput type="text" name="informasi.noAkte" label="Nomor Akte" />
        <FormInput type="text" name="informasi.npwp" label="NPWP PT" />
        <FormInput type="text" name="informasi.noNIB" label="No NIB" />
        <FormInput type="text" name="informasi.noTelp" label="No Telp" />
        <FormInput type="text" name="informasi.contactName" label="Nama PIC" />
        <FormInput type="text" name="informasi.contactEmail" label="Email PIC" />
        <FormInput type="text" name="informasi.contactPosition" label="Jabatan PIC" />
      </div>
    </div>
  );
};

export default InformasiPerusahaanEdit;
