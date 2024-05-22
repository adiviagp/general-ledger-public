import { Button, Input, SelectItem } from '@nextui-org/react';
import ExportDropdown from '@src/components/dropdown/export';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const tipeData = [
  {
    label: 'Cat',
    value: 'Cat',
  },
  {
    label: 'Dog',
    value: 'Dog',
  },
  {
    label: 'asdf',
    value: 'asdf',
  },
];

const defaultData = {
  name: '',
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
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form>
          <div className="flex flex-wrap gap-4 items-end mb-8">
            <div className="flex items-end gap-2 flex-auto">
              {/* <Input variant="bordered" type="text" label="Cari Tenant" placeholder="Cari tenant.." labelPlacement="outside" />
              <Select
                menuPosition="fixed"
                name='name'
                // aria-label={testId}
                options={tipeData}
                placeholder="-- SELECT AKUN --"
                // isDisabled={isDisabled}
                // styles={customStyles}
                // theme={(theme) => ({
                //   ...theme,
                //   colors: {
                //     ...theme.colors,
                //     neutral50: isFieldDirty ? '#ec0000' : '#a6a4a4',
                //   },
                // })}
                // onChange={(selectedOption: any) => setFieldValue(name, selectedOption.value)}
                // onBlur={handleBlur(name)}
              />
              <Select variant="bordered" labelPlacement="outside" label="Status" placeholder="Select Status" className="max-w-xs">
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
              <Button color="primary">Filter</Button> */}
            </div>
            <div className="md:flex-auto flex gap-2 justify-end">
              {/* <ExportDropdown
          title="Export"
          color="primary"
          variant="bordered"
          options={[
            {
              key: 'indivsidual',
              title: 'Individual',
            },
            {
              key: 'perusdahaan',
              title: 'Perusahaan',
            },
          ]}
        /> */}
              <Link to={'/pengguna/add'}>
                <Button color="success" variant="solid" className="text-white">
                  Tambah Pengguna
                </Button>
              </Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Header;
