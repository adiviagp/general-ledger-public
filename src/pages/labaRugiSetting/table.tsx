import { FieldArray, useFormikContext } from 'formik';
import React from 'react';
import AddForm from './addForm';

const Table = () => {
  return (
    <div className="w-full p-4">
      <table className="w-full border-2 border-slate-200">
        <tbody>
          {/* PENDAPATAN */}
          {/*  */}
          <>
            <tr className="bg-gray-100">
              <td className="border border-slate-600">I.</td>
              <td className="border border-slate-600 py-4 px-2">PENDAPATAN OPERASI</td>
              <td className="border border-slate-600 text-right px-2">&nbsp;</td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-600">1. </td>
              <th className="border border-slate-600 text-left p-2" colSpan={2}>
                PENDAPATAN USAHA
              </th>
            </tr>
            <FieldArray name="pendapatan_usaha">{(arrayHelpers: any) => <AddForm name="pendapatan_usaha" no={1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
            {/*  */}
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
            <tr>
              <td className="border border-slate-600">2. </td>
              <th className="border border-slate-600 text-left p-2" colSpan={2}>
                PENDAPATAN LAIN LAIN
              </th>
            </tr>
            <FieldArray name="pendapatan_lain">{(arrayHelpers: any) => <AddForm name="pendapatan_lain" no={2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
          </>

          <tr className="bg-gray-100">
            <td className="border border-slate-600">II.</td>
            <td className="border border-slate-600 py-4 px-2">BEBAN POKOK PENDAPATAN</td>
            <td className="border border-slate-600">&nbsp;</td>
          </tr>
          {/*  */}
          <tr>
            <td className="border border-slate-600">1. </td>
            <th className="border border-slate-600 text-left p-2" colSpan={2}>
              BEBAN POKOK
            </th>
          </tr>
          <FieldArray name="beban_pokok">{(arrayHelpers: any) => <AddForm name="beban_pokok" no={1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          {/*  */}
          <tr>
            <td className="border border-slate-600">2. </td>
            <th className="border border-slate-600 text-left p-2" colSpan={2}>
              BEBAN LAIN-LAIN
            </th>
          </tr>
          <FieldArray name="beban_lain">{(arrayHelpers: any) => <AddForm name="beban_lain" no={2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          <tr>
            <td colSpan={3}>&nbsp;</td>
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
          <tr>
            <td className="border border-slate-600">1. </td>
            <th className="border border-slate-600 text-left p-2" colSpan={2}>
              BEBAN PEGAWAI
            </th>
          </tr>
          <FieldArray name="beban_pegawai">{(arrayHelpers: any) => <AddForm name="beban_pegawai" no={1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          {/*  */}
          <tr>
            <td className="border border-slate-600">2. </td>
            <th className="border border-slate-600 text-left p-2" colSpan={2}>
              BEBAN UMUM & ADMINISTRASI
            </th>
          </tr>
          <FieldArray name="beban_umum">{(arrayHelpers: any) => <AddForm name="beban_umum" no={2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          {/*  */}
          <tr>
            <td className="border border-slate-600">3. </td>
            <th className="border border-slate-600 text-left p-2" colSpan={2}>
              BEBAN PENYUSUTAN
            </th>
          </tr>
          <FieldArray name="beban_penyusutan">{(arrayHelpers: any) => <AddForm name="beban_penyusutan" no={3} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          {/*  */}
          <tr>
            <td className="border border-slate-600">4. </td>
            <th className="border border-slate-600 text-left p-2" colSpan={2}>
              BEBAN AMORTISASI
            </th>
          </tr>
          <FieldArray name="beban_amortisasi">{(arrayHelpers: any) => <AddForm name="beban_amortisasi" no={4} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>

          {/* BEBAN USAHA */}
          {/*  */}
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-slate-600">VI.</td>
            <td className="border border-slate-600 py-4 px-2">PENDAPATAN / BEBAN LAIN LAIN</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-slate-600">1. </td>
            <th className="border border-slate-600 text-left p-2" colSpan={2}>
              PENDAPATAN LAIN LAIN
            </th>
          </tr>
          <FieldArray name="pendapatan_lain_sebelum_pajak">{(arrayHelpers: any) => <AddForm name="pendapatan_lain_sebelum_pajak" no={1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>

          {/*  */}
          <tr>
            <td className="border border-slate-600">2. </td>
            <th className="border border-slate-600 text-left p-2" colSpan={2}>
              BEBAN LAIN LAIN
            </th>
          </tr>
          <FieldArray name="beban_lain_sebelum_pajak">{(arrayHelpers: any) => <AddForm name="beban_lain_sebelum_pajak" no={2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>

          {/* BEBAN USAHA */}
          {/*  */}
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-slate-600">V.</td>
            <td className="border border-slate-600 py-4 px-2">PENDAPATAN / BEBAN BUNGA</td>
            <td className="border border-slate-600 text-right px-2">&nbsp;</td>
          </tr>
          {/*  */}
          <tr>
            <td className="border border-slate-600">1. </td>
            <th className="border border-slate-600 text-left p-2" colSpan={2}>
              PENDAPATAN BUNGA
            </th>
          </tr>
          <FieldArray name="pendapatan_bunga_sebelum_pajak">{(arrayHelpers: any) => <AddForm name="pendapatan_bunga_sebelum_pajak" no={1} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
          <tr>
            <td colSpan={3}>&nbsp;</td>
          </tr>
          <tr>
            <td className="border border-slate-600">2. </td>
            <th className="border border-slate-600 text-left p-2" colSpan={2}>
              BEBAN BUNGA
            </th>
          </tr>
          <FieldArray name="beban_bunga_sebelum_pajak">{(arrayHelpers: any) => <AddForm name="beban_bunga_sebelum_pajak" no={2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
         
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

          <FieldArray name="beban_pajak_penghasilan">{(arrayHelpers: any) => <AddForm name="beban_pajak_penghasilan" no={2} handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>

         
        </tbody>
      </table>
    </div>
  );
};

export default Table;
