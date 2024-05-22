import React from 'react';
import { Card, CardBody, CardFooter, Input, Button } from '@nextui-org/react';
import { Form, Formik } from 'formik';
import { AddAkunRules } from '@src/dataRules/dataRules';
import FormInput from '@src/components/formik/formInput';
import { usePostAkun } from '@src/hooks/akun/usePostAkun';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetDetailAkun } from '@src/hooks/akun/useGetDetailAkun';
import FormAkunPosisi from '@src/components/formik/formAkunPosisi';
import { useUpdateAkun } from '@src/hooks/akun/useUpdateAkun';
import FormCurrency from '@src/components/formik/formCurrency';


const EditAkunPage = () => {
  const navigate = useNavigate();
  const params: any = useParams();

  const { data: akunDetail } = useGetDetailAkun(parseInt(params.id));

  const { mutate, isLoading, isSuccess } = useUpdateAkun();

  const initialValues = {
    akun: akunDetail?.akun || '',
    label: akunDetail?.label || '' ,
    posisi: akunDetail?.posisi || '' ,
    saldoAwal: akunDetail?.saldoAwal || '' ,
  };

  if (isSuccess) {
    navigate('/akun');
  }
  return (
    <>
      <h1>Edit Akun</h1>
      {isLoading && 'Loading..'}
      <Formik
        initialValues={initialValues}
        validationSchema={AddAkunRules}
        enableReinitialize={true}
        validateOnMount={true}
        onSubmit={(values) => {
          mutate({id: parseInt(params.id), formData: values});
        }}
      >
        <Form>
          <Card className="p-2 overflow-auto">
            <CardBody className="overflow-auto">
              <FormInput type="text" name="akun" required label="Akun" disabled variant='flat' />
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
                Update
              </Button>
            </CardFooter>
          </Card>
        </Form>
      </Formik>
    </>
  );
};

export default EditAkunPage;
