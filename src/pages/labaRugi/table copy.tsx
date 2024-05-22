import React from 'react';

const Table = ({data}) => {
  return (
    <div className="w-full p-4">
      <table className="w-full border-2 border-slate-200">
        {/* PENDAPATAN */}
        {/*  */}
        <>
          <tr className="bg-gray-100">
            <td className="border border-slate-600">I.</td>
            <td className="border border-slate-600 py-4">PENDAPATAN OPERASI</td>
            <td className="border border-slate-600 text-right px-2">(31 Juli 2023)</td>
          </tr>
          {/*  */}
          <tr>
            <td className="border border-slate-600">1. </td>
            <th className="border border-slate-600 text-left" colSpan={2}>
              PENDAPATAN USAHA
            </th>
          </tr>
          <tr>
            <td className="border border-slate-600">1.1.</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-slate-600">1.1.</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-slate-600">1.1.</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              * TOTAL PENDAPATAN USAHA *
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          {/*  */}
          <tr>
            <td className="border border-slate-600">1. </td>
            <th className="border border-slate-600 text-left" colSpan={2}>
              PENDAPATAN LAIN LAIN
            </th>
          </tr>
          <tr>
            <td className="border border-slate-600">1.1.</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-slate-600">1.1.</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-slate-600">1.1.</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>

          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              * TOTAL PENDAPATAN LAIN-LAIN *
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          {/*  */}
          <tr className="bg-gray-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              ** PENDAPATAN OPERASI **
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
        </>

        {/* ------- */}

        {/* PENDAPATAN */}
        {/*  */}
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-slate-600">II.</td>
          <td className="border border-slate-600 py-4">BEBAN POKOK PENDAPATAN</td>
          <td className="border border-slate-600">&nbsp;</td>
        </tr>
        {/*  */}
        <tr>
          <td className="border border-slate-600">1. </td>
          <th className="border border-slate-600 text-left" colSpan={2}>
            BEBAN POKOK
          </th>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2} className="border border-slate-600 text-right">
            * TOTAL BEBAN POKOK *
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        {/*  */}
        <tr>
          <td className="border border-slate-600">2. </td>
          <th className="border border-slate-600 text-left" colSpan={2}>
            BEBAN LAIN-LAIN
          </th>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2} className="border border-slate-600 text-right">
            * TOTAL BEBAN LAIN-LAIN *
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        {/*  */}
        <tr className="bg-gray-100">
          <td className="border border-slate-600 text-right" colSpan={2}>
            ** BEBAN POKOK PENDAPATAN **
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>

        {/* BEBAN USAHA */}
        {/*  */}
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-slate-600">III.</td>
          <td className="border border-slate-600 py-4">BEBAN USAHA</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        {/*  */}
        <tr>
          <td className="border border-slate-600">1. </td>
          <th className="border border-slate-600 text-left" colSpan={2}>
            BEBAN PEGAWAI
          </th>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2} className="border border-slate-600 text-right">
            * TOTAL BEBAN PEGAWAI *
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        {/*  */}
        <tr>
          <td className="border border-slate-600">2. </td>
          <th className="border border-slate-600 text-left" colSpan={2}>
            BEBAN UMUM & ADMINISTRASI
          </th>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2} className="border border-slate-600 text-right">
            * TOTAL BEBAN UMUM & ADMINISTRASI *
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        {/*  */}
        <tr>
          <td className="border border-slate-600">3. </td>
          <th className="border border-slate-600 text-left" colSpan={2}>
            BEBAN PENYUSUTAN
          </th>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2} className="border border-slate-600 text-right">
            * TOTAL BEBAN PENYUSUTAN *
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        {/*  */}
        <tr>
          <td className="border border-slate-600">4. </td>
          <th className="border border-slate-600 text-left" colSpan={2}>
            BEBAN AMORTISASI
          </th>
        </tr>

        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2} className="border border-slate-600 text-right">
            * TOTAL BEBAN AMORTISASI *
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>

        {/*  */}
        <tr className="bg-gray-100">
          <td className="border border-slate-600 text-right " colSpan={2}>
            ** BEBAN USAHA **
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>

        {/* BEBAN USAHA */}
        {/*  */}
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-slate-600">VI.</td>
          <td className="border border-slate-600 py-4">PENDAPATAN / BEBAN LAIN LAIN</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        {/*  */}
        <tr>
          <td className="border border-slate-600">1. </td>
          <th className="border border-slate-600 text-left" colSpan={2}>
            PENDAPATAN LAIN LAIN
          </th>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2} className="border border-slate-600 text-right">
            * TOTAL PENDAPATAN LAIN LAIN *
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        {/*  */}
        <tr>
          <td className="border border-slate-600">2. </td>
          <th className="border border-slate-600 text-left" colSpan={2}>
            BEBAN LAIN LAIN
          </th>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2} className="border border-slate-600 text-right">
            * TOTAL BEBAN LAIN LAIN *
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>

        {/*  */}
        <tr className="bg-gray-100">
          <td className="border border-slate-600 text-right " colSpan={2}>
            ** TOTAL PENDAPATAN/BEBAN LAIN **
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>

        {/* BEBAN USAHA */}
        {/*  */}
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border border-slate-600">V.</td>
          <td className="border border-slate-600 py-4">PENDAPATAN / BEBAN BUNGA</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        {/*  */}
        <tr>
          <td className="border border-slate-600">1. </td>
          <th className="border border-slate-600 text-left" colSpan={2}>
            PENDAPATAN BUNGA
          </th>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2} className="border border-slate-600 text-right">
            * TOTAL PENDAPATAN BUNGA *
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        {/*  */}
        <tr>
          <td className="border border-slate-600">2. </td>
          <th className="border border-slate-600 text-left" colSpan={2}>
            BEBAN BUNGA
          </th>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={2} className="border border-slate-600 text-right">
            * TOTAL BEBAN BUNGA *
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>

        {/*  */}
        <tr className="bg-gray-100">
          <td className="border border-slate-600 text-right " colSpan={2}>
            ** TOTAL PENDAPATAN/BEBAN BUNGA **
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>

        {/* ------------------ */}
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-blue-100">
          <td className="border border-slate-600 text-right " colSpan={2}>
            ** LABA (RUGI) SEBELUM PAJAK **
          </td>
          <td className="border border-slate-600 text-right px-2 py-4">&nbsp;</td>
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

        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>
        <tr>
          <td className="border border-slate-600">1.1.</td>
          <td className="border border-slate-600">Sewa Ruangan Kantor</td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>

        <tr className="bg-gray-100">
          <td colSpan={2} className="border border-slate-600 text-right">
            * TOTAL PAJAK PENGHASILAN *
          </td>
          <td className="border border-slate-600 text-right px-2">&nbsp;</td>
        </tr>

        {/* ------------------ */}
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr className="bg-blue-100">
          <td className="border border-slate-600 text-right " colSpan={2}>
            *** LABA (RUGI) SETELAH PAJAK ***
          </td>
          <td className="border border-slate-600 text-right px-2 py-4">&nbsp;</td>
        </tr>
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
