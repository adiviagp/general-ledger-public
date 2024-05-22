import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from '@nextui-org/react';
import SummaryCard from './components/summaryCard';
import { useGetTenant } from './hooks/tenant/useGetTenant';
import moment from 'moment';
import { usePengguna } from './main';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(1000000);
  const [totalBerjalan, setTotalBerjalan] = useState(0);
  const [totalAkanBerakhir, setTotalAkanBerakhir] = useState(0);
  const [totalBerakhir, setTotalBerakhir] = useState(0);

  const { data: listTenant, isSuccess } = useGetTenant({ page: currentPage, limit: rowsPerPage });
  useEffect(() => {
    if (listTenant) {
      let totalBerjalanCount = 0;
      let totalAkanBerakhirCount = 0;
      let totalBerakhirCount = 0;

      listTenant.data.map((data) => {
        if (data.contracts?.length > 0) {
          const subDate = data.contracts?.length > 0 ? moment(data.contracts[0].endDate).diff(moment(), 'days') : 0;
          if (subDate <= 0) {
            totalBerakhirCount += 1;
          } else if (subDate <= 30) {
            totalAkanBerakhirCount += 1;
          } else {
            totalBerjalanCount += 1;
          }
        }
      });
      setTotalBerjalan(totalBerjalanCount);
      setTotalAkanBerakhir(totalAkanBerakhirCount);
      setTotalBerakhir(totalBerakhirCount);
    }
  }, [isSuccess]);

  return (
    <>
      <h1>Ringkasan Bisnis</h1>
      <div className="grid grid-cols-3 gap-8">
        <SummaryCard title="Total Kontrak Berjalan" value={totalBerjalan} color="border-green-500" />
        <SummaryCard title="Kontrak Berakhir Dalam 30 Hari" value={totalAkanBerakhir} color="border-red-500" />
        <SummaryCard title="Kontrak Telah Berakhir" value={totalBerakhir} color="border-gray-500" />
      </div>
    </>
  );
}

export default App;
