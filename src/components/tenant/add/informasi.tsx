import FormInput from '@src/components/formik/formInput';

const InformasiTenant = () => {
  return (
    <div className="p-4">
      <h2 className="font-bold">Informasi Tenant</h2>
      <div className="p-6">
        <FormInput placeholder='-- Nama --' type="text" name="informasi.name" required label="Nama" />
        <FormInput placeholder='-- NIK --' type="number" name="informasi.nik" required label="NIK" />
        <FormInput placeholder='-- NPWP --' type="number" name="informasi.npwp" required label="NPWP" />
        <FormInput placeholder='-- Email --' type="email" name="informasi.contactEmail" required label="Email" />
        <FormInput placeholder='-- No Telp --' type="text" name="informasi.noTelp" required label="No Telp" />
        {/* <FormTextArea name="nama" required label="Ruangan" /> */}
      </div>
    </div>
  );
};

export default InformasiTenant;
