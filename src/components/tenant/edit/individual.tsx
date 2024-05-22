import FormInput from '@src/components/formik/formInput';
import FormTextArea from '@src/components/formik/formTextArea';
import React from 'react';

const InformasiIndividualEdit = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold">Informasi Tenant</h2>
      <div className="p-6">
        <FormInput type="text" name="informasi.name" required label="Nama" />
        <FormInput type="text" name="informasi.nik" label="NIK" />
        <FormInput type="text" name="informasi.npwp" label="NPWP" />
        <FormInput type="text" name="informasi.noTelp" label="No Telp" />
        {/* <FormTextArea name="nama" required label="Ruangan" /> */}
      </div>
    </div>
  );
};

export default InformasiIndividualEdit;
