import { Button, Spinner } from '@nextui-org/react';
import moment from 'moment';
import { FieldArray, Form, Formik } from 'formik';
import AddForm from './addForm';
import { usePostJurnal } from '@src/hooks/jurnal/usePostJurnal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DateSingle from '@src/components/dateSingle';
import FormTenant from '@src/components/formik/formTenant';
import { useGetJurnalContainerDetail } from '@src/hooks/jurnal/useGetJurnalContainerDetail';
import FormTextArea from '@src/components/formik/formTextArea';
import FormTenantUpdate from '@src/components/formik/formTenantUpdate';
import { useUpdateJurnal } from '@src/hooks/jurnal/useUpdateJurnal';
import FormPemodal from '@src/components/formik/formPemodal';

type JurnalType = {
  akun_id: string;
  tenant_id: string;
  deskripsi: string;
  debit: number;
  credit: number;
};



const EditJurnalUmumModalPage = () => {
  const navigate = useNavigate();
  const params: any = useParams();

  const { data, isLoading, isSuccess } = useGetJurnalContainerDetail(parseInt(params.id));
  const { mutate, isLoading: isLoadingUpdateJurnal, isSuccessUpdateJurnal } = useUpdateJurnal();


  const defaultData = {
    pemodalId: data?.jurnals?.length > 0 ? data?.jurnals[0]?.tenantId : '',
    date: {
      startDate: moment(data?.date).format('YYYY-MM-DD'),
      endDate: moment(data?.date).format('YYYY-MM-DD'),
    },
    tipe: data?.tipe,
    keterangan: data?.keterangan,
    
    jurnals: data?.jurnals,
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <h1>Edit Jurnal Umum - Khusus Pendapatan</h1>
      </div>
      {isLoading ? (
        <div className="rounded shadow-lg p-6 bg-white flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {data ? (
            <div className="rounded shadow-lg p-6 bg-white">
              {/* FORMIKCONTENT */}
              <Formik
                initialValues={defaultData}
                // validationSchema={AddAkunRules}
                enableReinitialize={true}
                validateOnMount={true}
                onSubmit={(values) => {
                  const reformat: any = [];
                  values.jurnals.map((value) => {
                    reformat.push({
                      ...value,
                      debit: parseInt(value.debit),
                      credit: parseInt(value.credit),
                    });
                  });
                  mutate({id: parseInt(params.id), formData: values});
                }}
              >
                <Form>
                  <DateSingle name="date" required label="Tanggal Jurnal" />
                  <FormTextArea name="keterangan" required label="Keterangan" placeholder='-- Keterangan --'/>
                  <FormPemodal name="pemodal" required label="Pemodal" />

                  <FormTenantUpdate name="tenant_id" required label="Tenant" />
                  <FieldArray name="jurnals">{(arrayHelpers: any) => <AddForm name="jurnals" handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
                  <div className="flex justify-end mt-10">
                    <Link to="/jurnal/jurnal-umum/pendapatan">
                      <Button color="danger" variant="flat">
                        Kembali
                      </Button>
                    </Link>
                    <Button color="success" className="text-white ml-2" type="submit">
                      Update Jurnal
                    </Button>
                  </div>
                </Form>
              </Formik>
            </div>
          ) : (
            <div className="rounded shadow-lg p-6 bg-white">Data Not Found</div>
          )}
        </>
      )}
    </>
  );
};

export default EditJurnalUmumModalPage;
