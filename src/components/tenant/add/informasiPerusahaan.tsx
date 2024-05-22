import FormInput from '@src/components/formik/formInput';
import FormTextArea from '@src/components/formik/formTextArea';
import React from 'react';

const InformasiPerusahaanTenant = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold">Informasi Tenant</h2>
      <div className="p-6">
        <FormInput placeholder='-- Nama --' type="text" name="informasi.name" required label="Nama" />
        <FormInput placeholder='-- Nomor Akte --' type="number" name="informasi.noAkte" label="Nomor Akte" />
        <FormInput placeholder='-- NPWP PT --' type="number" name="informasi.npwp" label="NPWP PT" />
        <FormInput placeholder='-- Nomor NIB --' type="number" name="informasi.noNIB" label="No NIB" />
        <FormInput placeholder='-- Nomor Telp --' type="text" name="informasi.noTelp" label="No Telp" />
        <FormInput placeholder='-- Nama PIC --' type="text" name="informasi.contactName" label="Nama PIC" />
        <FormInput placeholder='-- Email PIC --' type="email" name="informasi.contactEmail" label="Email PIC" />
        <FormInput placeholder='-- Jabatan PIC --' type="text" name="informasi.contactPosition" label="Jabatan PIC" />
      </div>
    </div>
  );
};

export default InformasiPerusahaanTenant;
