import { Button } from '@nextui-org/react';
import moment from 'moment';
import { FieldArray, Form, Formik } from 'formik';
import AddForm from './addForm';
import { usePostJurnal } from '@src/hooks/jurnal/usePostJurnal';
import { Link, useNavigate } from 'react-router-dom';
import DateSingle from '@src/components/dateSingle';
import FormTenant from '@src/components/formik/formTenant';
import FormTextArea from '@src/components/formik/formTextArea';
import FormRadio from '@src/components/formik/formRadio';
import FormBulan from '@src/components/formik/formBulan';
import FormTahun from '@src/components/formik/formTahun';

const defaultData = {
  tenantId: '',
  date: {
    startDate: new Date(),
    endDate: new Date(),
  },
  keterangan: '',
  tipe: 'jurnal-umum-uang-muka-sewa',
  
  jurnals: [
    {
      akunId: '220-01',
      keterangan: '',
      debit: '',
      credit: '',
    },
  ],
  penyesuaian: 'tidak',
  bulan: (moment().month() + 1).toString(),
  tahun: moment().year().toString(),
};

const AddJurnalUmumUangMukaPage = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess } = usePostJurnal();

  if (isSuccess) {
    navigate('/jurnal/jurnal-umum/uang-muka-sewa');
  }

  return (
    <>
      <div className="flex">
        <h1>Tambah Jurnal Umum - Khusus Uang Muka Sewa</h1>
      </div>
      <div className="rounded shadow-lg p-6 bg-white">
        {/* FORMIKCONTENT */}
        <Formik
          initialValues={defaultData}
          enableReinitialize={true}
          validateOnMount={true}
          onSubmit={(values: any) => {
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
          {({
            values,
          }) => (
            <Form>
              <DateSingle name="date" required label="Tanggal Jurnal" />
              <FormTextArea name="keterangan" required label="Keterangan" placeholder="-- Keterangan --" />
              <FormTenant name="tenantId" required label="Tenant" />

              <div className="flex flex-col md:flex-row my-4">
                <FormRadio
                  name="penyesuaian"
                  required
                  label="Jurnal Penyesuaian UMS ?"
                  disabled={values.tenant_id === '' ? true : false}
                  options={[
                    { label: 'tidak', value: 'tidak' },
                    { label: 'iya', value: 'iya' },
                  ]}
                />
              </div>

              {values?.penyesuaian === 'iya' ? (
                <>
                  <FormTahun name="tahun" required label="Periode Tahun" />
                  <FormBulan name="bulan" required label="Periode Bulan" />
                </>
              ) : null}

              <FieldArray name="jurnals">{(arrayHelpers: any) => <AddForm name="jurnals" handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
              <div className="flex justify-end mt-10">
                <Link to="/jurnal/jurnal-umum/uang-muka-sewa">
                  <Button color="danger" variant="flat">
                    Kembali
                  </Button>
                </Link>
                <Button color="success" className="text-white ml-2" type="submit">
                  Post Jurnal
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddJurnalUmumUangMukaPage;
