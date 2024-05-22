import React from 'react';
import AddForm from '../labaRugiSetting/addForm';
import { FieldArray } from 'formik';

const Table = () => {
  return (
    <div className="w-full p-4">
      <table className="w-full border-2 border-slate-200">
        <tbody>
          {/* ASET TETAP */}
          {/* ---------------------------------------- */}
          <>
            <tr className="bg-blue-300">
              <td className="border border-slate-600 text-left px-2" colSpan={2}>
                ASET
              </td>
              <td className="border border-slate-600 text-right px-2 py-4">&nbsp;</td>
            </tr>
            <tr className="bg-blue-100">
              <td className="border border-slate-600">I.</td>
              <td className="border border-slate-600 py-2" colSpan={2}>
                ASET LANCAR
              </td>
            </tr>
            {/*  */}
            <tr className="bg-gray-100">
              <td className="border border-slate-600">1. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                KAS
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">1.1 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                KAS BESAR
              </th>
            </tr>
            <FieldArray name="kas_besar">{(arrayHelpers: any) => <AddForm name="kas_besar" no={1.1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr>
              <td className="border border-slate-600">1.2 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                KAS HARIAN
              </th>
            </tr>
            <FieldArray name="kas_harian">{(arrayHelpers: any) => <AddForm name="kas_harian" no={1.2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>

            {/* ---------- */}
            {/*  */}
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">2. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                BANK
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">2.1 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                BANK GIRO
              </th>
            </tr>
            <FieldArray name="bank_giro">{(arrayHelpers: any) => <AddForm name="bank_giro" no={2.1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>

            <tr>
              <td className="border border-slate-600">2.2 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                DEPOSITO
              </th>
            </tr>
            <FieldArray name="deposito">{(arrayHelpers: any) => <AddForm name="deposito" no={2.2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>

            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">3. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                PEMBAYARAN DI MUKA
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">3.1 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                PEMBAYARAN UANG MUKA
              </th>
            </tr>
            <FieldArray name="pembayaran_uang_muka">
              {(arrayHelpers: any) => <AddForm name="pembayaran_uang_muka" no={3.1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
            </FieldArray>

            <tr>
              <td className="border border-slate-600">3.2 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                PEMBAYARAN BIAYA DI MUKA
              </th>
            </tr>
            <FieldArray name="pembayaran_biaya_dimuka">
              {(arrayHelpers: any) => <AddForm name="pembayaran_biaya_dimuka" no={3.2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
            </FieldArray>

            {/* ---------- */}
            {/*  */}
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">4. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                PIUTANG
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">4.1 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                PIUTANG USAHA LANCAR
              </th>
            </tr>
            <FieldArray name="piutang_usaha_lancar">
              {(arrayHelpers: any) => <AddForm name="piutang_usaha_lancar" no={4.1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
            </FieldArray>

            <tr>
              <td className="border border-slate-600">4.2 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                PIUTANG TIDAK LANCAR
              </th>
            </tr>
            <FieldArray name="piutang_tidak_lancar">
              {(arrayHelpers: any) => <AddForm name="piutang_tidak_lancar" no={4.2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
            </FieldArray>

            {/*  */}
            <tr>
              <td className="border border-slate-600">4.3 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                PIUTANG PEMEGANG SAHAM
              </th>
            </tr>
            <FieldArray name="piutang_pemegang_saham">
              {(arrayHelpers: any) => <AddForm name="piutang_pemegang_saham" no={4.3} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
            </FieldArray>

            {/*  */}
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">5. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                INVESTASI
              </th>
            </tr>
            <FieldArray name="investasi">{(arrayHelpers: any) => <AddForm name="investasi" no={5} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>

            {/* ------------------ */}
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
          </>

          {/*  -------------------------------------------------------------------------------------------------- */}
          {/* ASET TETAP */}
          <>
            <tr className="bg-blue-100">
              <td className="border border-slate-600">II.</td>
              <td className="border border-slate-600 py-2" colSpan={2}>
                ASET TETAP
              </td>
            </tr>

            {/* NILAI PEROLEHAN */}
            <>
              {/*  */}
              <tr className="bg-gray-100">
                <td className="border border-slate-600">1. </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  NILAI PEROLEHAN
                </th>
              </tr>
              {/*  */}
              <tr>
                <td className="border border-slate-600">1.1 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  TANAH
                </th>
              </tr>
              <FieldArray name="nilai_perolehan_tanah">
                {(arrayHelpers: any) => <AddForm name="nilai_perolehan_tanah" no={1.1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
              </FieldArray>

              <tr>
                <td className="border border-slate-600">1.2 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  BANGUNAN
                </th>
              </tr>
              <FieldArray name="nilai_perolehan_bangunan">
                {(arrayHelpers: any) => <AddForm name="nilai_perolehan_bangunan" no={1.2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
              </FieldArray>

              {/*  */}
              <tr>
                <td className="border border-slate-600">1.3 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  ALAT GEDUNG
                </th>
              </tr>
              <FieldArray name="akk_penyusutan_alat_gedung">
                {(arrayHelpers: any) => <AddForm name="akk_penyusutan_alat_gedung" no={1.3} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
              </FieldArray>

              {/*  */}
              <tr>
                <td className="border border-slate-600">1.4 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  KENDARAAN
                </th>
              </tr>
              <FieldArray name="akk_penyusutan_kendaraan">
                {(arrayHelpers: any) => <AddForm name="akk_penyusutan_kendaraan" no={1.4} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
              </FieldArray>

              {/*  */}
              <tr>
                <td className="border border-slate-600">1.5 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  PERLENGKAPAN KANTOR
                </th>
              </tr>
              <FieldArray name="nilai_perolehan_perlengkapan_kantor">
                {(arrayHelpers: any) => <AddForm name="nilai_perolehan_perlengkapan_kantor" no={1.5} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
              </FieldArray>

              {/*  */}
              <tr>
                <td className="border border-slate-600">1.6 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  LAIN LAIN
                </th>
              </tr>
              <FieldArray name="nilai_perolehan_lain_lain">
                {(arrayHelpers: any) => <AddForm name="nilai_perolehan_lain_lain" no={1.6} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
              </FieldArray>

              {/*  */}
              <tr>
                <td className="border border-slate-600">1.7 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  FASILITAS PENUNJANG
                </th>
              </tr>
              <FieldArray name="nilai_perolehan_fasilitas_penunjang">
                {(arrayHelpers: any) => <AddForm name="nilai_perolehan_fasilitas_penunjang" no={1.7} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
              </FieldArray>
            </>

            {/* AKUMULASI PENYUSUTAN */}
            <>
              <tr>
                <td colSpan={3}>&nbsp;</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-slate-600">2. </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  AKUMULASI PENYUSUTAN
                </th>
              </tr>
              <tr>
                <td className="border border-slate-600">2.1 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  AKK PENYUSUTAN BANGUNAN
                </th>
              </tr>
              <FieldArray name="akk_penyusutan_bangunan">
                {(arrayHelpers: any) => <AddForm name="akk_penyusutan_bangunan" no={2.1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
              </FieldArray>

              <tr>
                <td className="border border-slate-600">2.2 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  AKK PENYUSUTAN ALAT GEDUNG
                </th>
              </tr>
              <FieldArray name="akk_penyusutan_alat_gedung">
                {(arrayHelpers: any) => <AddForm name="akk_penyusutan_alat_gedung" no={2.2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
              </FieldArray>

              <>
                <tr>
                  <td className="border border-slate-600">2.3 </td>
                  <th className="border border-slate-600 text-left" colSpan={2}>
                    AKK PENYUSUTAN KENDARAAN
                  </th>
                </tr>
                <FieldArray name="akk_penyusutan_kendaraan">
                  {(arrayHelpers: any) => <AddForm name="akk_penyusutan_kendaraan" no={2.3} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
                </FieldArray>
              </>

              <>
                <tr>
                  <td className="border border-slate-600">2.4 </td>
                  <th className="border border-slate-600 text-left" colSpan={2}>
                    AKK PENYUSUTAN PERLENGKAPAN KANTOR
                  </th>
                </tr>
                <FieldArray name="akk_perlengkapan_kantor">
                  {(arrayHelpers: any) => <AddForm name="akk_perlengkapan_kantor" no={2.4} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
                </FieldArray>
              </>
              <>
                <tr>
                  <td className="border border-slate-600">2.5 </td>
                  <th className="border border-slate-600 text-left" colSpan={2}>
                    AKK PENYUSUTAN LAIN-LAIN
                  </th>
                </tr>
                <FieldArray name="akk_penyusutan_lain_lain">
                  {(arrayHelpers: any) => <AddForm name="akk_penyusutan_lain_lain" no={2.5} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
                </FieldArray>
              </>
              <>
                <tr>
                  <td className="border border-slate-600">2.6 </td>
                  <th className="border border-slate-600 text-left" colSpan={2}>
                    AKK PENYUSUTAN FASILITAS PENUNJANG
                  </th>
                </tr>
                <FieldArray name="akk_penyusutan_fasilitas_penunjang">
                  {(arrayHelpers: any) => <AddForm name="akk_penyusutan_fasilitas_penunjang" no={2.6} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}
                </FieldArray>
              </>
            </>

            {/* ------------------ */}
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
          </>
          {/* ASET TETAP */}
          <tr className="bg-blue-100">
              <td className="border border-slate-600">III.</td>
              <td className="border border-slate-600 py-2" colSpan={2}>
                ASET LAIN LAIN
              </td>
            </tr>
            {/* NILAI PEROLEHAN */}
       
              {/*  */}
              <tr className="bg-gray-100">
                <td className="border border-slate-600">1. </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  NILAI PEROLEHAN
                </th>
              </tr>
              <FieldArray name="biaya_pendirian">{(arrayHelpers: any) => <AddForm name="biaya_pendirian" no={1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>

              {/*  */}
              <tr className="bg-gray-100">
                <td className="border border-slate-600">2. </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  PENYERTAAN USAHA
                </th>
              </tr>
              <FieldArray name="penyertaan_usaha">{(arrayHelpers: any) => <AddForm name="penyertaan_usaha" no={2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>

              <tr>
                <td colSpan={3}>&nbsp;</td>
              </tr>
         

            <tr className="bg-blue-300">
              <td className="border border-slate-600 text-left px-2" colSpan={2}>
                KEWAJIBAN & EKUITY
              </td>
              <td className="border border-slate-600 text-right px-2 py-4"></td>
            </tr>
            <tr className="bg-blue-100">
              <td className="border border-slate-600">IV.</td>
              <td className="border border-slate-600 py-2" colSpan={2}>
                UTANG JANGKA PENDEK
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">1. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                UTANG BANK
              </th>
            </tr>
            <FieldArray name="utang_bank">{(arrayHelpers: any) => <AddForm name="utang_bank" no={1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">2. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                UTANG PAJAK
              </th>
            </tr>
            <FieldArray name="utang_pajak">{(arrayHelpers: any) => <AddForm name="utang_pajak" no={2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">3. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                UTANG USAHA
              </th>
            </tr>
            <FieldArray name="utang_usaha">{(arrayHelpers: any) => <AddForm name="utang_usaha" no={3} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          
            <tr className="bg-gray-100">
              <td className="border border-slate-600">4. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                UTANG LAIN LAIN
              </th>
            </tr>
            <FieldArray name="utang_lain_lain">{(arrayHelpers: any) => <AddForm name="utang_lain_lain" no={4} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          
            <tr className="bg-gray-100">
              <td className="border border-slate-600">6. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                BIAYA MASIH HARUS DIBAYAR
              </th>
            </tr>
            <FieldArray name="biaya_masih_harus_dibayar">{(arrayHelpers: any) => <AddForm name="biaya_masih_harus_dibayar" no={6} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          


          {/*  */}
          <tr>
                <td colSpan={3}>&nbsp;</td>
              </tr>

          <tr className="bg-blue-100">
              <td className="border border-slate-600">IV.</td>
              <td className="border border-slate-600 py-2" colSpan={2}>
                UTANG JANGKA PANJANG
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">1. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                UTANG BANK
              </th>
            </tr>
            <FieldArray name="utang_jangka_panjang_utang_bank">{(arrayHelpers: any) => <AddForm name="utang_jangka_panjang_utang_bank" no={1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>

        
            <tr className="bg-gray-100">
              <td className="border border-slate-600">2. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                UTANG LAIN LAIN
              </th>
            </tr>
            <FieldArray name="utang_jangka_panjang_utang_lain_lain">{(arrayHelpers: any) => <AddForm name="utang_jangka_panjang_utang_lain_lain" no={2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          
            <tr className="bg-gray-100">
              <td className="border border-slate-600">3. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                KEWAJIBAN IMBALAN PASCA KERJA
              </th>
            </tr>
            <FieldArray name="kewajiban_imbalan_pasca_kerja">{(arrayHelpers: any) => <AddForm name="kewajiban_imbalan_pasca_kerja" no={3} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          

          {/*  */}
          <tr>
                <td colSpan={3}>&nbsp;</td>
              </tr>

          <tr className="bg-blue-100">
              <td className="border border-slate-600">VI.</td>
              <td className="border border-slate-600 py-2" colSpan={2}>
                EKUITY
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">1. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
              MODAL DASAR
              </th>
            </tr>
            <FieldArray name="ekuity_modal_dasar">{(arrayHelpers: any) => <AddForm name="ekuity_modal_dasar" no={1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>

            <tr className="bg-gray-100">
              <td className="border border-slate-600">2. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
              MODAL PEMEGANG SAHAM
              </th>
            </tr>
            <FieldArray name="ekuity_modal_pemegang_saham">{(arrayHelpers: any) => <AddForm name="ekuity_modal_pemegang_saham" no={2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">3. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
              TAMBAHAN HARTA TAX AMNESTY
              </th>
            </tr>
            <FieldArray name="ekuity_tax_amnesty">{(arrayHelpers: any) => <AddForm name="ekuity_tax_amnesty" no={3} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>

        
            <tr className="bg-gray-100">
              <td className="border border-slate-600">4. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
              CADANGAN
              </th>
            </tr>
            <FieldArray name="ekuity_cadangan">{(arrayHelpers: any) => <AddForm name="ekuity_cadangan" no={4} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          
            <tr className="bg-gray-100">
              <td className="border border-slate-600">5. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
              SALDO LABA (RUGI)
              </th>
            </tr>
            <FieldArray name="ekuity_saldo_laba_rugi">{(arrayHelpers: any) => <AddForm name="ekuity_saldo_laba_rugi" no={5} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
