import { addSeparator } from '@src/utils/fieldFormatter';
import React from 'react';

const RowTiga = ({ label, data, no }) => {
  console.log('row:', data);
  return (
    <>
      <tr>
        <td className="border border-slate-600">{no} </td>
        <th className="border border-slate-600 text-left" colSpan={2}>
          {label}
        </th>
      </tr>
      {data?.details?.length > 0 ? (
        <>
          {data.details.map((detail, index) => (
            <tr>
              <td className="border border-slate-600">{no}{index + 1}</td>
              <td className="border border-slate-600">{detail.label}</td>
              <td className="border border-slate-600 text-right px-2">{addSeparator(detail.value)}</td>
            </tr>
          ))}
        </>
      ) : (
        <tr>
          <td className="border border-slate-600">&nbsp;</td>
          <td className="border border-slate-600"></td>
          <td className="border border-slate-600 text-right px-2"></td>
        </tr>
      )}

      <tr>
        <td colSpan={2} className="border border-slate-600 text-right">
          * TOTAL {label} *
        </td>
        <td className="border border-slate-600 text-right px-2">{addSeparator(data.total)}</td>
      </tr>
    </>
  );
};

export default RowTiga;
