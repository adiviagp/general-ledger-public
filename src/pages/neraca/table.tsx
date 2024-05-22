import RowTiga from '@src/components/laporan/RowTiga';
import { addSeparator } from '@src/utils/fieldFormatter';
import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="w-full p-4">
      <table className="w-full border-2 border-slate-200">
        {/* ASET TETAP */}
        {/* ---------------------------------------- */}
        <>
          <tr className="bg-blue-300">
            <td className="border border-slate-600 text-left px-2" colSpan={2}>
              ASET
            </td>
            <td className="border border-slate-600 text-right px-2 py-4"></td>
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
          <RowTiga data={data.pasiva.asset.asset_lancar.kas.kas_besar} no="1.1." label="KAS BESAR" />
          <RowTiga data={data.pasiva.asset.asset_lancar.kas.kas_harian} no="1.2." label="KAS HARIAN" />

          <tr className="bg-gray-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              ** TOTAL KAS **
            </td>
            <td className="border border-slate-600 text-right px-2">{addSeparator(data.pasiva.asset.asset_lancar.kas.total)}</td>
          </tr>
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
          <RowTiga data={data.pasiva.asset.asset_lancar.bank.bank_giro} no="2.1." label="BANK GIRO" />
          <RowTiga data={data.pasiva.asset.asset_lancar.bank.deposito} no="2.2." label="DEPOSITO" />

          <tr className="bg-gray-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              ** TOTAL BANK **
            </td>
            <td className="border border-slate-600 text-right px-2">{addSeparator(data.pasiva.asset.asset_lancar.bank.total)}</td>
          </tr>

          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-slate-600">3. </td>
            <th className="border border-slate-600 text-left" colSpan={2}>
              PEMBAYARAN DI MUKA
            </th>
          </tr>
          <RowTiga data={data.pasiva.asset.asset_lancar.pembayaran_dimuka.pembayaran_uang_muka} no="3.1." label="PEMBAYARAN UANG MUKA" />
          <RowTiga data={data.pasiva.asset.asset_lancar.pembayaran_dimuka.pembayaran_biaya_dimuka} no="3.2." label="PEMBAYARAN BIAYA DI MUKA" />

          <tr className="bg-gray-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              ** TOTAL PEMBAYARAN DI MUKA **
            </td>
            <td className="border border-slate-600 text-right px-2">{addSeparator(data.pasiva.asset.asset_lancar.pembayaran_dimuka.total)}</td>
          </tr>

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
          <RowTiga data={data.pasiva.asset.asset_lancar.piutang.piutang_usaha_lancar} no="4.1." label="PIUTANG USAHA LANCAR" />
          <RowTiga data={data.pasiva.asset.asset_lancar.piutang.piutang_tidak_lancar} no="4.2." label="PIUTANG TIDAK LANCAR" />
          <RowTiga data={data.pasiva.asset.asset_lancar.piutang.piutang_pemegang_saham} no="4.3." label="PIUTANG PEMEGANG SAHAM" />

          <tr className="bg-gray-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              ** TOTAL PEMBAYARAN DI MUKA **
            </td>
            <td className="border border-slate-600 text-right px-2">{addSeparator(data.pasiva.asset.asset_lancar.piutang.total)}</td>
          </tr>

          <RowTiga data={data.pasiva.asset.asset_lancar.investasi} no="5." label="INVESTASI" />
          {/* ------------------ */}
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-blue-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              *** TOTAL ASET LANCAR ***
            </td>
            <td className="border border-slate-600 text-right px-2 py-2">{addSeparator(data.pasiva.asset.asset_lancar.total)}</td>
          </tr>
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
            <RowTiga data={data.pasiva.asset.asset_tetap.nilai_perolehan.nilai_perolehan_tanah} no="1.1." label="TANAH" />
            <RowTiga data={data.pasiva.asset.asset_tetap.nilai_perolehan.nilai_perolehan_bangunan} no="1.2." label="BANGUNAN" />
            <RowTiga data={data.pasiva.asset.asset_tetap.nilai_perolehan.nilai_perolehan_alat_gedung} no="1.3." label="ALAT GEDUNG" />
            <RowTiga data={data.pasiva.asset.asset_tetap.nilai_perolehan.nilai_perolehan_kendaraan} no="1.4." label="KENDARAAN" />
            <RowTiga data={data.pasiva.asset.asset_tetap.nilai_perolehan.nilai_perolehan_perlengkapan_kantor} no="1.5." label="PERLENGKAPAN KANTOR" />
            <RowTiga data={data.pasiva.asset.asset_tetap.nilai_perolehan.nilai_perolehan_lain_lain} no="1.6." label="LAIN LAIN" />
            <RowTiga data={data.pasiva.asset.asset_tetap.nilai_perolehan.nilai_perolehan_fasilitas_penunjang} no="1.7." label="FASILITAS PENUNJANG" />

            <tr className="bg-gray-100">
              <td className="border border-slate-600 text-right " colSpan={2}>
                ** TOTAL NILAI PEROLEHAN **
              </td>
              <td className="border border-slate-600 text-right px-2">{addSeparator(data.pasiva.asset.asset_tetap.nilai_perolehan.total)}</td>
            </tr>
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
            <RowTiga data={data.pasiva.asset.asset_tetap.akumulasi_penyusutan.akk_penyusutan_bangunan} no="2.1." label="AKK PENYUSUTAN BANGUNAN" />
            <RowTiga data={data.pasiva.asset.asset_tetap.akumulasi_penyusutan.akk_penyusutan_alat_gedung} no="2.2." label="AKK PENYUSUTAN ALAT GEDUNG" />
            <RowTiga data={data.pasiva.asset.asset_tetap.akumulasi_penyusutan.akk_penyusutan_kendaraan} no="2.3." label="AKK PENYUSUTAN KENDARAAN" />
            <RowTiga data={data.pasiva.asset.asset_tetap.akumulasi_penyusutan.akk_perlengkapan_kantor} no="2.4." label="AKK PENYUSUTAN PERLENGKAPAN KANTOR" />
            <RowTiga data={data.pasiva.asset.asset_tetap.akumulasi_penyusutan.akk_penyusutan_lain_lain} no="2.5." label="AKK PENYUSUTAN LAIN-LAIN" />
            <RowTiga data={data.pasiva.asset.asset_tetap.akumulasi_penyusutan.akk_penyusutan_fasilitas_penunjang} no="2.6." label="AKK PENYUSUTAN FASILITAS PENUNJANG" />

            <tr className="bg-gray-100">
              <td className="border border-slate-600 text-right " colSpan={2}>
                ** TOTAL AKUMULASI PENYUSUTAN **
              </td>
              <td className="border border-slate-600 text-right px-2">{addSeparator(data.pasiva.asset.asset_tetap.akumulasi_penyusutan.total)}</td>
            </tr>
          </>

          {/* ------------------ */}
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-blue-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              *** TOTAL ASET TETAP ***
            </td>
            <td className="border border-slate-600 text-right px-2 py-2">{addSeparator(data.pasiva.asset.asset_tetap.total)}</td>
          </tr>
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
        </>
        {/* ASET TETAP */}
        <>
          <tr className="bg-blue-100">
            <td className="border border-slate-600">III.</td>
            <td className="border border-slate-600 py-2" colSpan={2}>
              ASET LAIN LAIN
            </td>
          </tr>
          {/* NILAI PEROLEHAN */}
          <>
            {/*  */}
            <RowTiga data={data.pasiva.asset.asset_lain_lain.biaya_pendirian} no="1." label="NILAI PEROLEHAN" />
            <RowTiga data={data.pasiva.asset.asset_lain_lain.penyertaan_usaha} no="2." label="PENYERTAAN USAHA" />

            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr className="bg-blue-100">
              <td className="border border-slate-600 text-right " colSpan={2}>
                *** TOTAL ASET LAIN-LAIN ***
              </td>
              <td className="border border-slate-600 text-right px-2 py-2">{addSeparator(data.pasiva.asset.asset_lain_lain.total)}</td>
            </tr>
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr className="bg-blue-300">
              <td className="border border-slate-600 text-right " colSpan={2}>
                *** TOTAL ASET ***
              </td>
              <td className="border border-slate-600 text-right px-2 py-4">{addSeparator(data.pasiva.asset.total)}</td>
            </tr>
          </>
        </>

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
          {/*  */}
          <RowTiga data={data.pasiva.kewajiban.kewajiban_lancar.utang_bank} no="1." label="UTANG BANK" />
          <RowTiga data={data.pasiva.kewajiban.kewajiban_lancar.utang_pajak} no="2." label="UTANG PAJAK" />
          <RowTiga data={data.pasiva.kewajiban.kewajiban_lancar.utang_usaha} no="3." label="UTANG USAHA" />
          <RowTiga data={data.pasiva.kewajiban.kewajiban_lancar.utang_lain_lain} no="4." label="UTANG LAIN LAIN" />
          <RowTiga data={data.pasiva.kewajiban.kewajiban_lancar.penerimaan_dimuka_sewa} no="5." label="PENERIMAAN DIMUKA SEWA KANTOR" />
          <RowTiga data={data.pasiva.kewajiban.kewajiban_lancar.penerimaan_dimuka_deposit_sewa} no="6." label="PENERIMAAN DIMUKA DEPOSIT SEWA KANTOR" />
          <RowTiga data={data.pasiva.kewajiban.kewajiban_lancar.biaya_masih_harus_dibayar} no="7." label="BIAYA MASIH HARUS DIBAYAR" />
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-blue-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              *** TOTAL UTANG JANGKA PENDEK ***
            </td>
            <td className="border border-slate-600 text-right px-2 py-4">{addSeparator(data.pasiva.kewajiban.kewajiban_lancar.total)}</td>
          </tr>

          {/*  */}

          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-blue-100">
            <td className="border border-slate-600">V.</td>
            <td className="border border-slate-600 py-2" colSpan={2}>
              UTANG JANGKA PANJANG
            </td>
          </tr>
          {/*  */}
          <RowTiga data={data.pasiva.kewajiban.utang_jangka_panjang.utang_jangka_panjang_utang_bank} no="1." label="UTANG BANK" />
          <RowTiga data={data.pasiva.kewajiban.utang_jangka_panjang.utang_jangka_panjang_utang_lain_lain} no="2." label="UTANG LAIN LAIN" />
          <RowTiga data={data.pasiva.kewajiban.utang_jangka_panjang.kewajiban_imbalan_pasca_kerja} no="3." label="KEWAJIBAN IMBALAN PASCA KERJA" />

          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-blue-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              *** TOTAL UTANG JANGKA PANJANG ***
            </td>
            <td className="border border-slate-600 text-right px-2 py-4">{addSeparator(data.pasiva.kewajiban.utang_jangka_panjang.total)}</td>
          </tr>

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
     
          <RowTiga data={data.pasiva.ekuity.ekuity_modal_dasar} no="1." label="MODAL DASAR" />
          <RowTiga data={data.pasiva.ekuity.ekuity_modal_pemegang_saham} no="2." label="MODAL PEMEGANG SAHAM" />
          <RowTiga data={data.pasiva.ekuity.ekuity_tax_amnesty} no="3." label="TAMBAHAN HARTA TAX AMNESTY" />
          <RowTiga data={data.pasiva.ekuity.ekuity_cadangan} no="4." label="CADANGAN" />
          <RowTiga data={data.pasiva.ekuity.ekuity_saldo_laba_rugi} no="5." label="SALDO LABA (RUGI)" />

          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-blue-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              *** TOTAL EKUITY ***
            </td>
            <td className="border border-slate-600 text-right px-2 py-4">{addSeparator(data.pasiva.ekuity.total)}</td>
          </tr>


          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-blue-300">
            <td className="border border-slate-600 text-left px-2" colSpan={2}>
              TOTAL PASIVA
            </td>
            <td className="border border-slate-600 text-right px-2 py-4">{addSeparator(data.pasiva.total)}</td>
          </tr>
      </table>
    </div>
  );
};

export default Table;
