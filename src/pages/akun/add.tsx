import React from 'react';
import { Card, CardBody, CardFooter, Input, Button } from '@nextui-org/react';
import { Form, Formik } from 'formik';
import { AddAkunRules } from '@src/dataRules/dataRules';
import FormInput from '@src/components/formik/formInput';
import { usePostAkun } from '@src/hooks/akun/usePostAkun';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormAkunPosisi from '@src/components/formik/formAkunPosisi';
import FormCurrency from '@src/components/formik/formCurrency';
const AddAkunPage = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess } = usePostAkun();

  const initialValues = {
    akun: '',
    label: '',
    posisi: '',
    saldoAwal: 0,
  };

  if (isSuccess) {

    navigate('/akun');
  }
  return (
    <>
      <h1>Tambah Akun</h1>
      {isLoading && 'Loading..'}
      <Formik
        initialValues={initialValues}
        validationSchema={AddAkunRules}
        enableReinitialize={true}
        validateOnMount={true}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        <Form>
          <Card className="p-2 overflow-auto">
            <CardBody className="overflow-auto">
              <FormInput type="text" name="akun" required label="Akun" />
              <FormInput type="text" name="label" required label="Label" />
              <FormAkunPosisi name="posisi" required label="Posisi" />
              <FormCurrency type='text' name='saldoAwal' required label="Saldo awal"/>

            </CardBody>
            <CardFooter className="flex justify-end">
              <Link to="/akun">
                <Button color="danger" variant="flat">
                  Kembali
                </Button>
              </Link>
              <Button color="success" className="ml-2 font-white" type="submit">
                Simpan
              </Button>
            </CardFooter>
          </Card>
        </Form>
      </Formik>
    </>
  );
};

export default AddAkunPage;
