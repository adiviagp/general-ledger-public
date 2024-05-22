import { Button, Spinner } from '@nextui-org/react';
import moment from 'moment';
import { FieldArray, Form, Formik } from 'formik';
import AddForm from './addForm';
import { usePostJurnal } from '@src/hooks/jurnal/usePostJurnal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DateSingle from '@src/components/dateSingle';
import FormTenant from '@src/components/formik/formTenant';
import { useGetJurnalContainerDetail } from '@src/hooks/jurnal/useGetJurnalContainerDetail';
import { useUpdateJurnal } from '@src/hooks/jurnal/useUpdateJurnal';
import FormTextArea from '@src/components/formik/formTextArea';
import FormInput from '@src/components/formik/formInput';
import { useGetDetailPemodal } from '@src/hooks/pemodal/useGetDetailPemodal';
import { useUpdatePemodal } from '@src/hooks/pemodal/useUpdatePemodal';


const EditPemodalPage = () => {
  const navigate = useNavigate();
  const params: any = useParams();

  const { data, isLoading,  } = useGetDetailPemodal(parseInt(params.id));
  const { mutate, isLoading: isSuccess } = useUpdatePemodal();


  const defaultData = {
    name: data?.name,
  };

  if (isSuccess) {
    navigate('/pemodal');
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h1>Edit Pemodal</h1>
      </div>
      <div className="rounded shadow-lg p-6 bg-white">

      <Formik
          initialValues={defaultData}
          enableReinitialize={true}
          validateOnMount={true}
          onSubmit={(values) => {     
            mutate({id: parseInt(params.id), formData: values});
          }}
        >
          <Form>
          <FormInput type="text" name="name" required label="Nama Pemodal" />
            <div className="flex justify-end mt-10">
              <Link to="/pemodal">
                <Button color="danger" variant="flat">
                  Kembali
                </Button>
              </Link>
              <Button color="success" className="text-white ml-2" type="submit">
                Simpan
              </Button>
            </div>
          </Form>
        </Formik>
        </div>
    </>
  );
};

export default EditPemodalPage;
