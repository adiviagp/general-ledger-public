import React from 'react';

const Table = () => {
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
            <td className="border border-slate-600 text-right px-2 py-4">(31 Juli 2023)</td>
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
          <tr>
            <td className="border border-slate-600">&nbsp;</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              * TOTAL KAS BESAR *
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-slate-600">1.2 </td>
            <th className="border border-slate-600 text-left" colSpan={2}>
              KAS HARIAN
            </th>
          </tr>
          <tr>
            <td className="border border-slate-600">&nbsp;</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              * TOTAL KAS HARIAN *
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>

          <tr className="bg-gray-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              ** TOTAL KAS **
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
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
          <tr>
            <td className="border border-slate-600">2.1 </td>
            <th className="border border-slate-600 text-left" colSpan={2}>
              BANK GIRO
            </th>
          </tr>
          <tr>
            <td className="border border-slate-600">&nbsp;</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              * TOTAL KAS BESAR *
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-slate-600">2.2 </td>
            <th className="border border-slate-600 text-left" colSpan={2}>
              DEPOSITO
            </th>
          </tr>
          <tr>
            <td className="border border-slate-600">&nbsp;</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              * TOTAL KAS HARIAN *
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>

          <tr className="bg-gray-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              ** TOTAL KAS **
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          {/* ---------- */}

          {/* ---------- */}
          {/*  */}
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
          <tr>
            <td className="border border-slate-600">&nbsp;</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              * TOTAL PEMBAYARAN UANG MUKA *
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-slate-600">3.2 </td>
            <th className="border border-slate-600 text-left" colSpan={2}>
              PEMBAYARAN BIAYA DI MUKA
            </th>
          </tr>
          <tr>
            <td className="border border-slate-600">&nbsp;</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              * TOTAL PEMBAYARAN BIAYA DI MUKA *
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>

          <tr className="bg-gray-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              ** TOTAL PEMBAYARAN DI MUKA **
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
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
          <tr>
            <td className="border border-slate-600">4.1 </td>
            <th className="border border-slate-600 text-left" colSpan={2}>
              PIUTANG USAHA LANCAR
            </th>
          </tr>
          <tr>
            <td className="border border-slate-600">&nbsp;</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              * TOTAL PIUTANG USAHA *
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-slate-600">4.2 </td>
            <th className="border border-slate-600 text-left" colSpan={2}>
              PIUTANG TIDAK LANCAR
            </th>
          </tr>
          <tr>
            <td className="border border-slate-600">&nbsp;</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              * TOTAL PEMBAYARAN BIAYA DI MUKA *
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          {/*  */}
          <tr>
            <td className="border border-slate-600">4.3 </td>
            <th className="border border-slate-600 text-left" colSpan={2}>
              PIUTANG PEMEGANG SAHAM
            </th>
          </tr>
          <tr>
            <td className="border border-slate-600">&nbsp;</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              * TOTAL PEMBAYARAN BIAYA DI MUKA *
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>

          <tr className="bg-gray-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              ** TOTAL PEMBAYARAN DI MUKA **
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>

          {/* ---------- */}
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
          <tr>
            <td className="border border-slate-600">5.1</td>
            <td className="border border-slate-600">Sewa Ruangan Kantor</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-slate-600 text-right">
              ** TOTAL INVESTASI **
            </td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>

          {/* ------------------ */}
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-blue-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              *** TOTAL ASET LANCAR ***
            </td>
            <td className="border border-slate-600 text-right px-2 py-2">&nbsp;</td>
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
            <tr>
              <td className="border border-slate-600">1.1 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                TANAH
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">&nbsp;</td>
              <td className="border border-slate-600">Sewa Ruangan Kantor</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-slate-600 text-right">
                * TOTAL TANAH *
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td className="border border-slate-600">1.2 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                BANGUNAN
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">&nbsp;</td>
              <td className="border border-slate-600">Sewa Ruangan Kantor</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-slate-600 text-right">
                * TOTAL BANGUNAN *
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-600">1.1 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                ALAT GEDUNG
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">&nbsp;</td>
              <td className="border border-slate-600">Sewa Ruangan Kantor</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-slate-600 text-right">
                * TOTAL ALAT GEDUNG *
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-600">1.1 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                KENDARAAN
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">&nbsp;</td>
              <td className="border border-slate-600">Sewa Ruangan Kantor</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-slate-600 text-right">
                * TOTAL KENDARAAN *
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-600">1.1 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                PERLENGKAPAN KANTOR
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">&nbsp;</td>
              <td className="border border-slate-600">Sewa Ruangan Kantor</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-slate-600 text-right">
                * TOTAL PERLENGKAPAN KANTOR *
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-600">1.1 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                LAIN LAIN
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">&nbsp;</td>
              <td className="border border-slate-600">Sewa Ruangan Kantor</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-slate-600 text-right">
                * TOTAL LAIN LAIN *
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-600">1.1 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                FASILITAS PENUNJANG
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">&nbsp;</td>
              <td className="border border-slate-600">Sewa Ruangan Kantor</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-slate-600 text-right">
                * TOTAL FASILITAS PENUNJANG *
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="border border-slate-600 text-right " colSpan={2}>
                ** TOTAL NILAI PEROLEHAN **
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
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
            <tr>
              <td className="border border-slate-600">2.1 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                AKK PENYUSUTAN BANGUNAN
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">&nbsp;</td>
              <td className="border border-slate-600">Sewa Ruangan Kantor</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-slate-600 text-right">
                * TOTAL AKK PENYUSUTAN BANGUNAN *
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td className="border border-slate-600">2.2 </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                AKK PENYUSUTAN ALAT GEDUNG
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">&nbsp;</td>
              <td className="border border-slate-600">Sewa Ruangan Kantor</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-slate-600 text-right">
                * TOTAL AKK PENYUSUTAN ALAT GEDUNG *
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>

            <>
              <tr>
                <td className="border border-slate-600">2.2 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  AKK PENYUSUTAN KENDARAAN
                </th>
              </tr>
              <tr>
                <td className="border border-slate-600">&nbsp;</td>
                <td className="border border-slate-600">Sewa Ruangan Kantor</td>
                <td className="border border-slate-600 text-right px-2">&nbsp;</td>
              </tr>
              <tr>
                <td colSpan={2} className="border border-slate-600 text-right">
                  * TOTAL AKK PENYUSUTAN KENDARAAN *
                </td>
                <td className="border border-slate-600 text-right px-2">&nbsp;</td>
              </tr>
            </>

            <>
              <tr>
                <td className="border border-slate-600">2.2 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  AKK PENYUSUTAN PERLENGKAPAN KANTOR
                </th>
              </tr>
              <tr>
                <td className="border border-slate-600">&nbsp;</td>
                <td className="border border-slate-600">Sewa Ruangan Kantor</td>
                <td className="border border-slate-600 text-right px-2">&nbsp;</td>
              </tr>
              <tr>
                <td colSpan={2} className="border border-slate-600 text-right">
                  * TOTAL AKK PENYUSUTAN PERLENGKAPAN KANTOR *
                </td>
                <td className="border border-slate-600 text-right px-2">&nbsp;</td>
              </tr>
            </>
            <>
              <tr>
                <td className="border border-slate-600">2.2 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  AKK PENYUSUTAN LAIN-LAIN
                </th>
              </tr>
              <tr>
                <td className="border border-slate-600">&nbsp;</td>
                <td className="border border-slate-600">Sewa Ruangan Kantor</td>
                <td className="border border-slate-600 text-right px-2">&nbsp;</td>
              </tr>
              <tr>
                <td colSpan={2} className="border border-slate-600 text-right">
                  * TOTAL AKK PENYUSUTAN LAIN-LAIN *
                </td>
                <td className="border border-slate-600 text-right px-2">&nbsp;</td>
              </tr>
            </>
            <>
              <tr>
                <td className="border border-slate-600">2.2 </td>
                <th className="border border-slate-600 text-left" colSpan={2}>
                  AKK PENYUSUTAN FASILITAS PENUNJANG
                </th>
              </tr>
              <tr>
                <td className="border border-slate-600">&nbsp;</td>
                <td className="border border-slate-600">Sewa Ruangan Kantor</td>
                <td className="border border-slate-600 text-right px-2">&nbsp;</td>
              </tr>
              <tr>
                <td colSpan={2} className="border border-slate-600 text-right">
                  * TOTAL AKK PENYUSUTAN FASILITAS PENUNJANG *
                </td>
                <td className="border border-slate-600 text-right px-2">&nbsp;</td>
              </tr>
            </>

            <tr className="bg-gray-100">
              <td className="border border-slate-600 text-right " colSpan={2}>
                ** TOTAL AKUMULASI PENYUSUTAN **
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
          </>

          {/* ------------------ */}
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-blue-100">
            <td className="border border-slate-600 text-right " colSpan={2}>
              *** TOTAL ASET LANCAR ***
            </td>
            <td className="border border-slate-600 text-right px-2 py-2">&nbsp;</td>
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
            <tr className="bg-gray-100">
              <td className="border border-slate-600">1. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                NILAI PEROLEHAN
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">&nbsp;</td>
              <td className="border border-slate-600">Sewa Ruangan Kantor</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-slate-600 text-right">
                * TOTAL BIAYA PENDIRIAN *
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>

            {/*  */}
            <tr className="bg-gray-100">
              <td className="border border-slate-600">2. </td>
              <th className="border border-slate-600 text-left" colSpan={2}>
                PENYERTAAN USAHA
              </th>
            </tr>
            <tr>
              <td className="border border-slate-600">&nbsp;</td>
              <td className="border border-slate-600">Sewa Ruangan Kantor</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={2} className="border border-slate-600 text-right">
                * TOTAL PENYERTAAN USAHA *
              </td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr className="bg-blue-100">
              <td className="border border-slate-600 text-right " colSpan={2}>
                *** TOTAL ASET LAIN-LAIN ***
              </td>
              <td className="border border-slate-600 text-right px-2 py-2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr className="bg-blue-300">
              <td className="border border-slate-600 text-right " colSpan={2}>
                *** TOTAL ASET ***
              </td>
              <td className="border border-slate-600 text-right px-2 py-4">&nbsp;</td>
            </tr>
          </>
        </>
      </table>
    </div>
  );
};

export default Table;
