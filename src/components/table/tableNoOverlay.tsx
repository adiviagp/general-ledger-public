import React, { useEffect, useState } from 'react';
import './table.scss';

import { useReactTable, ColumnResizeMode, getCoreRowModel, ColumnDef, flexRender } from '@tanstack/react-table';
import moment from 'moment';

const TableNoOverlay = ({ data, columns, defaultWidth }: any) => {
  const [columnResizeMode, setColumnResizeMode] = React.useState<ColumnResizeMode>('onChange');

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  const [width, setWidth] = useState(window.innerWidth - 450);

  useEffect(() => {
    if (defaultWidth) {
      setWidth(defaultWidth);
    } else {
      const handleWindowResize = () => {
        setWidth(window.innerWidth - 450);
      };

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, []);

  return (
    <div className="p-2" id="table-custom">
      <div>
        <table
          {...{
            style: {
              width:  width,
            },
          }}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="tr-custom">
                {headerGroup.headers.map((header) => (
                  <th
                    {...{
                      className: 'th-custom',
                      key: header.id,
                      colSpan: header.colSpan,
                      style: {
                        width: header.getSize(),
                      },
                    }}
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    <div
                      {...{
                        onMouseDown: header.getResizeHandler(),
                        onTouchStart: header.getResizeHandler(),
                        className: `resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`,
                        style: {
                          transform: columnResizeMode === 'onEnd' && header.column.getIsResizing() ? `translateX(${table.getState().columnSizingInfo.deltaOffset}px)` : '',
                        },
                      }}
                    />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="tr-custom">
                {row.getVisibleCells().map((cell) => (
                  <td
                    {...{
                      className: 'td-custom',
                      key: cell.id,
                      style: {
                        width: cell.column.getSize(),
                      },
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id} className="tr-custom tr-footer">
                {footerGroup.headers.map((header) => (
                  <td
                    {...{
                      key: header.id,
                      className: 'td-custom',
                    }}
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TableNoOverlay;
