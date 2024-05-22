import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Select, SelectItem } from '@nextui-org/react';
import moment from 'moment';
import FormBulan from '@src/components/formik/formBulan';
import FormTahun from '@src/components/formik/formTahun';
import { useDateStore } from '@src/main';
import Table from './table';
import { Link, useNavigate } from 'react-router-dom';
import { useGetNeraca } from '@src/hooks/neraca/useGetNeraca';
import { useDownloadNeraca } from '@src/hooks/neraca/useDownloadNeraca';
import { BACKEND_URL } from '@src/constant/constant';

const NeracaPage = () => {
  const navigate = useNavigate();

  const defaultData = {
    bulan: (moment().month() + 1).toString(),
    tahun: moment().year().toString(),
  };
  const [isSearched, setIsSearched] = useState(false);
  const [params, setParams] = useState<any>(null);
  const { mutate: downloadExcel } = useDownloadNeraca();
  const { data, isLoading } = useGetNeraca(params);

  const [dateFinal, setDateFinal] = useState<any>();

  // TODAY
  const { date, setDate } = useDateStore();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1>Neraca</h1>
        <Link to="/neraca/setting">
          <Button className="px-8">Setting</Button>
        </Link>
      </div>
      <div className="rounded shadow-lg p-6 bg-white mb-4">
        {/* FORMIKCONTENT */}
        <Formik
          initialValues={defaultData}
          // validationSchema={AddAkunRules}
          enableReinitialize={true}
          validateOnMount={true}
          onSubmit={(values: any) => {
            let startDate = moment(`${values.tahun}-${values.bulan}-01`).format('YYYY-MM-DD');
            let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD');

            // * set endDate tanggal hari ini kalau selected bulan sama dengan bulan berjalan
            if (moment(date?.startDate).month() === moment(startDate).month()) {
              endDate = moment(date?.endDate).format('YYYY-MM-DD');
            }
            setIsSearched(true);
            setDateFinal(endDate);
            setParams({
              startDate,
              endDate,
            });
          }}
        >
          {({ values }: { values: any }) => (
            <Form>
              {/* BULAN */}
              <FormBulan name="bulan" required label="Bulan" />
              {/* TAHUN */}
              <FormTahun name="tahun" required label="Tahun" />

              {/* ACTION */}
              <div className="flex justify-end">
                <Button
                  color="success"
                  className="text-white mr-2 mt-6"
                  type="button"
                  onClick={() => {
                    let startDate = moment(`${values.tahun}-${values.bulan}-01`).format('YYYY-MM-DD');
                    let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD');

                    // * set endDate tanggal hari ini kalau selected bulan sama dengan bulan berjalan
                    if (moment(date?.startDate).month() === moment(startDate).month()) {
                      endDate = moment(date?.endDate).format('YYYY-MM-DD');
                    }
                    window.open(`${BACKEND_URL}/neraca/download-excel?startDate=${startDate}&endDate=${endDate}`, '_blank');
                    // window.location.href = `${BACKEND_URL}/neraca/download-excel?startDate=${startDate}&endDate=${endDate}`;
                  }}
                >
                  Download Excel
                </Button>

                <Button color="primary" className="text-white mr-6 mt-6" type="submit">
                  Cari
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* ############ LIST TABLE ####3 */}
      {isSearched && data ? (
        <div className="rounded shadow-lg p-2 bg-white">
          <div className="flex justify-between p-2">
            <h2>Neraca: {dateFinal && moment(dateFinal).format('YYYY-MM-DD')}</h2>
            <div></div>
          </div>

          <Table data={data?.data} />
        </div>
      ) : null}
    </>
  );
};

export default NeracaPage;
