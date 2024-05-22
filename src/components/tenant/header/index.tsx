import { Button, Input, SelectItem } from '@nextui-org/react';
import ExportDropdown from '@src/components/dropdown/export';
import { Form, Formik } from 'formik';

const tipeData = [
  {
    label: 'ALL',
    value: 'ALL',
  },
  {
    label: 'Individual',
    value: 1,
  },
  {
    label: 'Perusahaan',
    value: 2,
  },
];
const statusData = [
  {
    label: 'ALL',
    value: 'ALL',
  },
  {
    label: 'Sedang Berjalan',
    value: 'sedang Berjalan',
  },
  {
    label: 'Perusahaan',
    value: 2,
  },
];

const defaultData = {
  name: '',
  tipe: 'ALL',
  jenis: 'ALL',
  status: 'ALL',
  pembayaran: 'ALL',
};

const Header = () => {
  return (
    <Formik
      initialValues={defaultData}
      // validationSchema={AddAkunRules}
      enableReinitialize={true}
      validateOnMount={true}
      onSubmit={(values: any) => {
        // console.log(values);
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div className="flex flex-wrap gap-4 items-end mb-8">
            <div className="md:flex-auto flex gap-2 justify-end">
              <ExportDropdown
                title="Tambah Tenant"
                color="success"
                variant="solid"
                options={[
                  {
                    key: 'individual',
                    title: 'Individual',
                    link: '/tenant/add/individual',
                  },
                  {
                    key: 'perusahaan',
                    title: 'Perusahaan',
                    link: '/tenant/add/perusahaan',
                  },
                ]}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Header;
