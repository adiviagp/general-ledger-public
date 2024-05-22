import { Button, Spinner } from '@nextui-org/react';
import moment from 'moment';
import { FieldArray, Form, Formik } from 'formik';
import AddForm from './addForm';
import { usePostJurnal } from '@src/hooks/jurnal/usePostJurnal';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DateSingle from '@src/components/dateSingle';
import FormTenant from '@src/components/formik/formTenant';
import { useGetJurnalContainerDetail } from '@src/hooks/jurnal/useGetJurnalContainerDetail';
import FormTenantUpdate from '@src/components/formik/formTenantUpdate';
import { useUpdateJurnal } from '@src/hooks/jurnal/useUpdateJurnal';
import FormTextArea from '@src/components/formik/formTextArea';

type JurnalType = {
  akun_id: string;
  tenant_id: string;
  deskripsi: string;
  debit: number;
  credit: number;
};



const EditJurnalUmumUangMukaPage = () => {
  const navigate = useNavigate();
  const params: any = useParams();

  const { data, isLoading, isSuccess } = useGetJurnalContainerDetail(parseInt(params.id));
  const { mutate } = useUpdateJurnal();

  const defaultData = {
    tenantId: data?.jurnals?.length > 0 ? data?.jurnals[0]?.tenantId : '',
    pemodalId: data?.jurnals?.length > 0 ? data?.jurnals[0]?.pemodalId : '',
    contractId: data?.jurnals?.length > 0 ? data?.jurnals[0]?.contractId : '',
    bulan: data?.jurnals?.length > 0 ? data?.jurnals[0]?.bulan : '',
    tahun: data?.jurnals?.length > 0 ? data?.jurnals[0]?.tahun : '',
    date: {
      startDate: moment(data?.date).format('YYYY-MM-DD'),
      endDate: moment(data?.date).format('YYYY-MM-DD'),
    },
    tipe: data?.tipe,
    keterangan: data?.keterangan,

    jurnals: data?.jurnals?.length > 0 ? data?.jurnals : [],
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1>Edit Jurnal Umum - Khusus Uang Muka Sewa</h1>
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
                  values.jurnals.map((value : any) => {
                    reformat.push({
                      keterangan: value?.keterangan,
                      akunId: value?.akunId,
                      debit: parseInt(value.debit),
                      credit: parseInt(value.credit),
                      jurnalContainerId: parseInt(params.id),
                      pemodalId: parseInt(value.pemodalId),
                      contractId: parseInt(value.contractId),
                      bulan: value.bulan,
                      tahun: value.tahun,
                      date: data?.date,
                      tenantId: values.tenantId,
                    });
                  });
                  mutate({id: parseInt(params.id), formData: {...values, jurnals: reformat}});
                }}
              >
                <Form>     
                  <DateSingle name="date" required label="Tanggal Jurnal" disabled />
                  <FormTextArea name="keterangan" required label="Keterangan" placeholder='-- Keterangan --'/>
                  <FormTenantUpdate name="tenantId" required label="Tenant" />
                  <FieldArray name="jurnals">{(arrayHelpers: any) => <AddForm name="jurnals" handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
                  <div className="flex justify-end mt-10">
                    <Link to="/jurnal/jurnal-umum/uang-muka-sewa">
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

export default EditJurnalUmumUangMukaPage;
