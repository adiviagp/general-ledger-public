import RowTiga from '@src/components/laporan/RowTiga';
import { addSeparator } from '@src/utils/fieldFormatter';
import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="w-full p-4">
      <table className="w-full border-2 border-slate-200">
        <>
          <>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">I.</td>
              <td className="border border-slate-600 py-4">PENDAPATAN OPERASI</td>
              <td className="border border-slate-600 text-right px-2"></td>
            </tr>
            {/*  */}
            <RowTiga data={data.laba_rugi_kotor.pendapatan_operasi.pendapatan_usaha} no="1." label="PENDAPATAN USAHA" />
            <RowTiga data={data.laba_rugi_kotor.pendapatan_operasi.pendapatan_lain} no="2." label="PENDAPATAN LAIN LAIN" />

            <tr className="bg-gray-100">
              <td className="border border-slate-600 text-right " colSpan={2}>
                ** PENDAPATAN OPERASI **
              </td>
              <td className="border border-slate-600 text-right px-2">{addSeparator(data.laba_rugi_kotor.pendapatan_operasi.total)}</td>
            </tr>
          </>

          {/*  */}
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-slate-600">II.</td>
            <td className="border border-slate-600 py-4">BEBAN POKOK PENDAPATAN</td>
            <td className="border border-slate-600">&nbsp;</td>
          </tr>

          <RowTiga data={data.laba_rugi_kotor.beban_pokok_pendapatan.beban_pokok} no="1." label="BEBAN POKOK" />
          <RowTiga data={data.laba_rugi_kotor.beban_pokok_pendapatan.beban_lain} no="2." label="BEBAN LAIN LAIN" />

          <tr className="bg-gray-100">
            <td className="border border-slate-600 text-right" colSpan={2}>
              ** BEBAN POKOK PENDAPATAN **
            </td>
            <td className="border border-slate-600 text-right px-2">{addSeparator(data.laba_rugi_kotor.beban_pokok_pendapatan.total)}</td>
          </tr>

          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-blue-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              *** LABA (RUGI) KOTOR ***
            </td>
            <td className="border border-slate-600 text-right px-2 py-4">{addSeparator(data.laba_rugi_kotor.total)}</td>
          </tr>
        </>

        {/* -------------------------------------------------------------------------------------------- */}

        {/*  */}
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-slate-600">III.</td>
          <td className="border border-slate-600 py-4">BEBAN USAHA</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>

        <RowTiga data={data.laba_rugi_usaha.beban_usaha.beban_pegawai} no="1." label="BEBAN PEGAWAI" />
        <RowTiga data={data.laba_rugi_usaha.beban_usaha.beban_umum} no="2." label="BEBAN UMUM & ADMINISTRASI" />
        <RowTiga data={data.laba_rugi_usaha.beban_usaha.beban_penyusutan} no="3." label="BEBAN PENYUSUTAN" />
        <RowTiga data={data.laba_rugi_usaha.beban_usaha.beban_amortisasi} no="4." label="BEBAN AMORTISASI" />

        <tr className="bg-gray-100">
          <td className="border border-slate-600 text-right " colSpan={2}>
            ** BEBAN USAHA **
          </td>
          <td className="border border-slate-600 text-right px-2">{addSeparator(data.laba_rugi_usaha.beban_usaha.total)}</td>
        </tr>

        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-blue-100">
          <td className="border border-slate-600 text-right " colSpan={2}>
            *** LABA (RUGI) USAHA ***
          </td>
          <td className="border border-slate-600 text-right px-2 py-4">{addSeparator(data.laba_rugi_usaha.total)}</td>
        </tr>

        {/* -------------------------------------------------------------------------------------------- */}

        {/*  */}
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-slate-600">VI.</td>
          <td className="border border-slate-600 py-4">PENDAPATAN / BEBAN LAIN LAIN</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>

        <RowTiga data={data.laba_rugi_sebelum_pajak.pendapatan_beban_lain.pendapatan_lain_sebelum_pajak} no="1." label="PENDAPATAN LAIN-LAIN" />
        <RowTiga data={data.laba_rugi_sebelum_pajak.pendapatan_beban_lain.beban_lain_sebelum_pajak} no="2." label="BEBAN LAIN-LAIN" />

        <tr className="bg-gray-100">
          <td className="border border-slate-600 text-right " colSpan={2}>
            ** TOTAL PENDAPATAN/BEBAN LAIN **
          </td>
          <td className="border border-slate-600 text-right px-2">{addSeparator(data.laba_rugi_sebelum_pajak.pendapatan_beban_lain.total)}</td>
        </tr>

        {/*  */}
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-slate-600">V.</td>
          <td className="border border-slate-600 py-4">PENDAPATAN / BEBAN BUNGA</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <RowTiga data={data.laba_rugi_sebelum_pajak.pendapatan_beban_bunga.pendapatan_bunga_sebelum_pajak} no="1." label="PENDAPATAN BUNGA" />
        <RowTiga data={data.laba_rugi_sebelum_pajak.pendapatan_beban_bunga.beban_bunga_sebelum_pajak} no="2." label="BEBAN BUNGA" />

        {/*  */}
        <tr className="bg-gray-100">
          <td className="border border-slate-600 text-right " colSpan={2}>
            ** TOTAL PENDAPATAN/BEBAN BUNGA **
          </td>
          <td className="border border-slate-600 text-right px-2">{addSeparator(data.laba_rugi_sebelum_pajak.pendapatan_beban_bunga.total)}</td>
        </tr>

        {/* ------------------ */}
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-blue-100">
          <td className="border border-slate-600 text-right " colSpan={2}>
            *** LABA (RUGI) SEBELUM PAJAK ***
          </td>
          <td className="border border-slate-600 text-right px-2 py-4">{addSeparator(data.laba_rugi_sebelum_pajak.total)}</td>
        </tr>
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>

        {/* ---------- */}

        {/* BEBAN USAHA */}
        {/*  */}

        <tr className="bg-gray-100">
          <td className="border border-slate-600">VI.</td>
          <td className="border border-slate-600 py-4">BEBAN PAJAK PENGHASILAN</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        {/*  */}

        <RowTiga data={data.laba_rugi_setelah_pajak.beban_pajak_penghasilan} no="1." label="BEBAN PAJAK PENGHASILAN" />

        {/* ------------------ */}
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-blue-100">
          <td className="border border-slate-600 text-right " colSpan={2}>
            *** LABA (RUGI) SETELAH PAJAK ***
          </td>
          <td className="border border-slate-600 text-right px-2 py-4">{addSeparator(data.laba_rugi_setelah_pajak.total)}</td>
        </tr>
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
