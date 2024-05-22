import FormAkun from '@src/components/formik/formAkun';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Button, Select, SelectItem } from '@nextui-org/react';
import moment from 'moment';
import FormBulan from '@src/components/formik/formBulan';
import FormTahun from '@src/components/formik/formTahun';
import { useGetBukuBesar } from '@src/hooks/jurnal/useGetBukuBesar';
import FormSaldoPerRow from '@src/components/formik/inTable/formSaldoPerRow';
import { useGetNeracaSaldo } from '@src/hooks/neracaSaldo/useGetNeracaSaldo';
import { useDateStore } from '@src/main';
import { addSeparator } from '@src/utils/fieldFormatter';
import Table from './table';
import { useGetNeracaSetting } from '@src/hooks/neraca/useGetNeracaSetting';
import { usePostNeraca } from '@src/hooks/neraca/usePostNeraca';
import { Link } from 'react-router-dom';

const NeracaSettingPage = () => {
  const { data } = useGetNeracaSetting({});
  const { mutate, isLoading, isSuccess } = usePostNeraca();

  const defaultData = {
    kas_besar: data?.data?.filter((neraca: any) => neraca.tipe === 'kas_besar'),
    kas_harian: data?.data?.filter((neraca: any) => neraca.tipe === 'kas_harian'),
    bank_giro: data?.data?.filter((neraca: any) => neraca.tipe === 'bank_giro'),
    deposito: data?.data?.filter((neraca: any) => neraca.tipe === 'deposito'),

    pembayaran_uang_muka: data?.data?.filter((neraca: any) => neraca.tipe === 'pembayaran_uang_muka'),
    pembayaran_biaya_dimuka: data?.data?.filter((neraca: any) => neraca.tipe === 'pembayaran_biaya_dimuka'),
    piutang_usaha_lancar: data?.data?.filter((neraca: any) => neraca.tipe === 'piutang_usaha_lancar'),
    piutang_tidak_lancar: data?.data?.filter((neraca: any) => neraca.tipe === 'piutang_tidak_lancar'),
    piutang_pemegang_saham: data?.data?.filter((neraca: any) => neraca.tipe === 'piutang_pemegang_saham'),
    investasi: data?.data?.filter((neraca: any) => neraca.tipe === 'investasi'),

    nilai_perolehan_tanah: data?.data?.filter((neraca: any) => neraca.tipe === 'nilai_perolehan_tanah'),
    nilai_perolehan_bangunan: data?.data?.filter((neraca: any) => neraca.tipe === 'nilai_perolehan_bangunan'),
    nilai_perolehan_alat_gedung: data?.data?.filter((neraca: any) => neraca.tipe === 'nilai_perolehan_alat_gedung'),
    nilai_perolehan_kendaraan: data?.data?.filter((neraca: any) => neraca.tipe === 'nilai_perolehan_kendaraan'),

    nilai_perolehan_perlengkapan_kantor: data?.data?.filter((neraca: any) => neraca.tipe === 'nilai_perolehan_perlengkapan_kantor'),
    nilai_perolehan_lain_lain: data?.data?.filter((neraca: any) => neraca.tipe === 'nilai_perolehan_lain_lain'),
    nilai_perolehan_fasilitas_penunjang: data?.data?.filter((neraca: any) => neraca.tipe === 'nilai_perolehan_fasilitas_penunjang'),
    
    akk_penyusutan_bangunan: data?.data?.filter((neraca: any) => neraca.tipe === 'akk_penyusutan_bangunan'),
    akk_penyusutan_alat_gedung: data?.data?.filter((neraca: any) => neraca.tipe === 'akk_penyusutan_alat_gedung'),
    akk_penyusutan_kendaraan: data?.data?.filter((neraca: any) => neraca.tipe === 'akk_penyusutan_kendaraan'),
    akk_perlengkapan_kantor: data?.data?.filter((neraca: any) => neraca.tipe === 'akk_perlengkapan_kantor'),
    akk_penyusutan_lain_lain: data?.data?.filter((neraca: any) => neraca.tipe === 'akk_penyusutan_lain_lain'),
    akk_penyusutan_fasilitas_penunjang: data?.data?.filter((neraca: any) => neraca.tipe === 'akk_penyusutan_fasilitas_penunjang'),
    biaya_pendirian: data?.data?.filter((neraca: any) => neraca.tipe === 'biaya_pendirian'),
    penyertaan_usaha: data?.data?.filter((neraca: any) => neraca.tipe === 'penyertaan_usaha'),

    utang_bank: data?.data?.filter((neraca: any) => neraca.tipe === 'utang_bank'),
    utang_pajak: data?.data?.filter((neraca: any) => neraca.tipe === 'utang_pajak'),
    utang_usaha: data?.data?.filter((neraca: any) => neraca.tipe === 'utang_usaha'),
    utang_lain_lain: data?.data?.filter((neraca: any) => neraca.tipe === 'utang_lain_lain'),
    biaya_masih_harus_dibayar: data?.data?.filter((neraca: any) => neraca.tipe === 'biaya_masih_harus_dibayar'),

    utang_jangka_panjang_utang_bank: data?.data?.filter((neraca: any) => neraca.tipe === 'utang_jangka_panjang_utang_bank'),
    utang_jangka_panjang_utang_lain_lain: data?.data?.filter((neraca: any) => neraca.tipe === 'utang_jangka_panjang_utang_lain_lain'),
    kewajiban_imbalan_pasca_kerja: data?.data?.filter((neraca: any) => neraca.tipe === 'kewajiban_imbalan_pasca_kerja'),

    ekuity_modal_dasar: data?.data?.filter((neraca: any) => neraca.tipe === 'ekuity_modal_dasar'),
    ekuity_modal_pemegang_saham: data?.data?.filter((neraca: any) => neraca.tipe === 'ekuity_modal_pemegang_saham'),
    ekuity_tax_amnesty: data?.data?.filter((neraca: any) => neraca.tipe === 'ekuity_tax_amnesty'),
    ekuity_cadangan: data?.data?.filter((neraca: any) => neraca.tipe === 'ekuity_cadangan'),
    ekuity_saldo_laba_rugi: data?.data?.filter((neraca: any) => neraca.tipe === 'ekuity_saldo_laba_rugi'),
  };

  return (
   
      <Formik
        initialValues={defaultData}
        // validationSchema={AddAkunRules}
        enableReinitialize={true}
        validateOnMount={true}
        onSubmit={(values) => {
          const reformat = [
            ...values.kas_besar,
            ...values.kas_harian,
            ...values.bank_giro,
            ...values.deposito,

            ...values.pembayaran_uang_muka,
            ...values.pembayaran_biaya_dimuka,
            ...values.piutang_usaha_lancar,
            ...values.piutang_tidak_lancar,
            ...values.piutang_pemegang_saham,
            ...values.investasi,

            ...values.nilai_perolehan_tanah,
            ...values.nilai_perolehan_bangunan,
            ...values.nilai_perolehan_alat_gedung,
            ...values.nilai_perolehan_kendaraan,

            ...values.nilai_perolehan_perlengkapan_kantor,
            ...values.nilai_perolehan_lain_lain,
            ...values.nilai_perolehan_fasilitas_penunjang,

            ...values.akk_penyusutan_bangunan,
            ...values.akk_penyusutan_alat_gedung,
            ...values.akk_penyusutan_kendaraan,
            ...values.akk_perlengkapan_kantor,
            ...values.akk_penyusutan_lain_lain,
            ...values.akk_penyusutan_fasilitas_penunjang,
            ...values.biaya_pendirian,
            ...values.penyertaan_usaha,
            
            ...values.utang_bank,
            ...values.utang_pajak,
            ...values.utang_usaha,
            ...values.utang_lain_lain,
            ...values.biaya_masih_harus_dibayar,

            ...values.utang_jangka_panjang_utang_bank,
            ...values.utang_jangka_panjang_utang_lain_lain,
            ...values.kewajiban_imbalan_pasca_kerja,

            ...values.ekuity_modal_dasar,
            ...values.ekuity_modal_pemegang_saham,
            ...values.ekuity_tax_amnesty,
            ...values.ekuity_cadangan,
            ...values.ekuity_saldo_laba_rugi,
          ];
          mutate({ data: reformat });
        }}
      >
        <Form>
          <h1>Neraca Setting</h1>

          <div className="rounded shadow-lg p-2 bg-white">
            <Table />
            <div className="flex justify-end m-6 mt-12">
              <Link to="/neraca">
                <Button color="danger" className="px-8">
                  Kembali
                </Button>
              </Link>
              <Button color="primary" className="text-white mr-2 px-8 ml-2" type="submit">
                Simpan
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
  
  );
};

export default NeracaSettingPage;
