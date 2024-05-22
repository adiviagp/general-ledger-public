import { Form, Formik } from 'formik';
import Table from './table';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useGetLabaRugi } from '@src/hooks/labaRugi/useGetLabaRugi';
import { useGetLabaRugiSetting } from '@src/hooks/labaRugi/useGetLabaRugiSetting';
import { usePostLabaRugi } from '@src/hooks/labaRugi/usePostLabaRugi';

const LabaRugiSettingPage = () => {
  const { data } = useGetLabaRugiSetting({});
  const { mutate, isLoading, isSuccess } = usePostLabaRugi();

  const defaultData = {
    pendapatan_usaha: data?.data?.filter((labarugi: any) => labarugi.tipe === 'pendapatan_usaha'),
    pendapatan_lain: data?.data?.filter((labarugi: any) => labarugi.tipe === 'pendapatan_lain'),
    beban_pokok: data?.data?.filter((labarugi: any) => labarugi.tipe === 'beban_pokok'),
    beban_lain: data?.data?.filter((labarugi: any) => labarugi.tipe === 'beban_lain'),
    beban_pegawai: data?.data?.filter((labarugi: any) => labarugi.tipe === 'beban_pegawai'),
    beban_umum: data?.data?.filter((labarugi: any) => labarugi.tipe === 'beban_umum'),
    beban_penyusutan: data?.data?.filter((labarugi: any) => labarugi.tipe === 'beban_penyusutan'),
    beban_amortisasi: data?.data?.filter((labarugi: any) => labarugi.tipe === 'beban_amortisasi'),
    pendapatan_lain_sebelum_pajak: data?.data?.filter((labarugi: any) => labarugi.tipe === 'pendapatan_lain_sebelum_pajak'),
    beban_lain_sebelum_pajak: data?.data?.filter((labarugi: any) => labarugi.tipe === 'beban_lain_sebelum_pajak'),
    pendapatan_bunga_sebelum_pajak: data?.data?.filter((labarugi: any) => labarugi.tipe === 'pendapatan_bunga_sebelum_pajak'),
    beban_bunga_sebelum_pajak: data?.data?.filter((labarugi: any) => labarugi.tipe === 'beban_bunga_sebelum_pajak'),
    beban_pajak_penghasilan: data?.data?.filter((labarugi: any) => labarugi.tipe === 'beban_pajak_penghasilan'),
  };
  return (
    <Formik
      initialValues={defaultData}
      // validationSchema={AddAkunRules}
      enableReinitialize={true}
      validateOnMount={true}
      onSubmit={(values) => {
        const reformat = [
          ...values.pendapatan_usaha,
          ...values.pendapatan_lain,
          ...values.beban_pokok,
          ...values.beban_lain,
          ...values.beban_pegawai,
          ...values.beban_umum,
          ...values.beban_penyusutan,
          ...values.beban_amortisasi,
          ...values.pendapatan_lain_sebelum_pajak,
          ...values.beban_lain_sebelum_pajak,
          ...values.pendapatan_bunga_sebelum_pajak,
          ...values.beban_bunga_sebelum_pajak,
          ...values.beban_pajak_penghasilan,
        ];

        mutate({ data: reformat });
      }}
    >
      <Form>
        <h1>Laba Rugi Setting</h1>

        <div className="rounded shadow-lg p-2 bg-white">
          <Table />
          <div className="flex justify-end m-6 mt-12">
            <Link to="/laba-rugi">
              <Button color="danger" className="px-8">
                Kembali
              </Button>
            </Link>
            <Button color="primary" className="text-white mr-2 px-8 ml-2" type="submit">
              Simpan
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default LabaRugiSettingPage;
