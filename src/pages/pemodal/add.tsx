import { Button } from '@nextui-org/react';
import moment from 'moment';
import { FieldArray, Form, Formik } from 'formik';
import AddForm from './addForm';
import { usePostJurnal } from '@src/hooks/jurnal/usePostJurnal';
import { Link, useNavigate } from 'react-router-dom';
import DateSingle from '@src/components/dateSingle';
import FormTenant from '@src/components/formik/formTenant';
import FormInput from '@src/components/formik/formInput';
import FormTextArea from '@src/components/formik/formTextArea';
import { usePostPemodal } from '@src/hooks/pemodal/usePostPemodal';


const defaultData = {
 name: ''
};

const AddPemodalPage = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess } = usePostPemodal();


  if (isSuccess) {
    navigate('/pemodal');
  }

  return (
    <>
      <div className="flex">
        <h1>Tambah Pemodal</h1>
      </div>
      <div className="rounded shadow-lg p-6 bg-white">
        {/* FORMIKCONTENT */}
        <Formik
          initialValues={defaultData}
          enableReinitialize={true}
          validateOnMount={true}
          onSubmit={(values) => {     
            mutate(values);
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

export default AddPemodalPage;
