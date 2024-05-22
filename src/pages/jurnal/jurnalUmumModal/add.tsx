import { Button } from '@nextui-org/react';
import moment from 'moment';
import { FieldArray, Form, Formik } from 'formik';
import AddForm from './addForm';
import { usePostJurnal } from '@src/hooks/jurnal/usePostJurnal';
import { Link, useNavigate } from 'react-router-dom';
import DateSingle from '@src/components/dateSingle';
import FormTenant from '@src/components/formik/formTenant';
import FormTextArea from '@src/components/formik/formTextArea';
import FormPemodal from '@src/components/formik/formPemodal';

type JurnalType = {
  akun_id: string;
  tenant_id: string;
  deskripsi: string;
  debit: number;
  credit: number;
};

const defaultData = {
  date: {
    startDate: new Date(),
    endDate: new Date(),
  },
  keterangan: '',
  tipe: 'jurnal-umum-modal',
  
  jurnals: [
    {
      akunId: '',
      keterangan: '',
      debit: '',
      credit: '',
    },
  ],
};

const AddJurnalUmumModalPage = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess } = usePostJurnal();


  if (isSuccess) {
    navigate('/jurnal/jurnal-umum/modal');
  }

  return (
    <>
      <div className="flex">
        <h1>Tambah Jurnal Umum - Khusus Modal</h1>
      </div>
      <div className="rounded shadow-lg p-6 bg-white">
        {/* FORMIKCONTENT */}
        <Formik
          initialValues={defaultData}
          enableReinitialize={true}
          validateOnMount={true}
          onSubmit={(values) => {
            const reformat: any = [];
            values.jurnals.forEach((value) => {
              reformat.push({
                ...value,
                debit: parseInt(value.debit),
                credit: parseInt(value.credit),
              });
            });
            mutate({ ...values, date: moment(values.date.startDate).format('YYYY-MM-DD'), jurnals: reformat });
          }}
        >
          <Form>
            <DateSingle name="date" required label="Tanggal Jurnal" />
            <FormTextArea name="keterangan" required label="Keterangan" placeholder='-- Keterangan --' />
            <FormPemodal name="pemodal" required label="Pemodal" />
            <FieldArray name="jurnals">{(arrayHelpers: any) => <AddForm name="jurnals" handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
            <div className="flex justify-end mt-10">
              <Link to="/jurnal/jurnal-umum/pendapatan">
                <Button color="danger" variant="flat">
                  Kembali
                </Button>
              </Link>
              <Button color="success" className="text-white ml-2" type="submit">
                Post Jurnal
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddJurnalUmumModalPage;
