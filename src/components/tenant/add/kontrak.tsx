import DateRange from '@src/components/dateRange';
import DateSingle from '@src/components/dateSingle';
import FormCurrency from '@src/components/formik/formCurrency';
import FormInput from '@src/components/formik/formInput';
import FormJenisTenant from '@src/components/formik/formJenisTenant';
import FormRadio from '@src/components/formik/formRadio';
import FormTextArea from '@src/components/formik/formTextArea';
import { useFormikContext } from 'formik';
import React from 'react';

const KontrakTenant = ({ isEdit = false }) => {
  const { values }: { values: any } = useFormikContext();

  return (
    <div className="p-4">
      <h2 className="font-bold">Kontrak Tenant</h2>
      <div className="p-6">
        {!isEdit ? (
          <>
            <FormRadio
              name="kontrak.isNew"
              required
              label="Pilih Tipe Kontrak"
              options={[
                { label: 'Kontrak Baru', value: 'baru' },
                { label: 'Kontrak Sudah Berjalan', value: 'berjalan' },
              ]}
            />
            <div className="mb-6"></div>
          </>
        ) : null}

        {isEdit ? null : <FormJenisTenant name="kontrak.tenantJenisId" required label="Jenis Tenant" />}

        <DateRange disabled={isEdit} name="kontrak.masaKontrak" required label="Masa Kontrak" />

        {values.kontrak.isNew === 'baru' ? (
          <>
            <FormCurrency disabled={isEdit} type="number" name="kontrak.hargaSewa" required label="Total Harga Sewa" />
            <FormCurrency disabled={isEdit} type="number" name="kontrak.deposit" label="Total Deposit" />
          </>
        ) : (
          <>
            <FormCurrency disabled={isEdit} type="number" name="kontrak.hargaSewa" required label="Sisa Uang Muka Sewa" />
            <FormCurrency disabled={isEdit} type="number" name="kontrak.deposit" label="Sisa Deposit" />
          </>
        )}

        <FormTextArea placeholder="-- Ruangan --" name="kontrak.noGedung" label="Ruangan" />
        <FormTextArea placeholder="-- Keterangan --" name="kontrak.keterangan" label="Keterangan" />
        <FormRadio
          name="kontrak.isPaid"
          required
          label="Apakah pembayaran lunas ?"
          options={[
            { label: 'Lunas', value: 'Lunas' },
            { label: 'Belum Lunas', value: 'Belum Lunas' },
          ]}
        />
        {values.kontrak.isPaid === 'Belum Lunas' ? <DateSingle name="kontrak.tenggatPembayaran" required label="Tenggat Waktu Pembayaran" placeholder="Tenggat Waktu Pembayaran" /> : null}

        {/* <div className="my-4">
          <FormRadio
            name="kontrak.isJurnal"
            required
            label="Lanjut proses jurnal ?"
            options={[
              { label: 'Lanjut Proses Jurnal', value: 'Lanjut Proses Jurnal' },
              { label: 'Tidak', value: 'Tidak' },
            ]}
          />
        </div>  */}
      </div>
    </div>
  );
};

export default KontrakTenant;
