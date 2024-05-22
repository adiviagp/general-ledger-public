import { Button } from '@nextui-org/react';
import moment from 'moment';
import { FieldArray, Form, Formik, useFormikContext } from 'formik';
import AddForm from './addForm';
import { usePostJurnal } from '@src/hooks/jurnal/usePostJurnal';
import { Link, useNavigate } from 'react-router-dom';
import DateSingle from '@src/components/dateSingle';
import FormTenant from '@src/components/formik/formTenant';
import FormTextArea from '@src/components/formik/formTextArea';
import FormRadio from '@src/components/formik/formRadio';
import FormBulan from '@src/components/formik/formBulan';
import FormTahun from '@src/components/formik/formTahun';
import FormTenantAuto from '@src/components/formik/formTenant/auto';
import FormTenantUpdate from '@src/components/formik/formTenantUpdate';

interface Proptype {
  tenantTypeId: number;
  tenantJenisId: number;
  tenantId: number;
  bulan: any;
  bulanMoment: any;
  onClose: any;
  contractId: any;
}

const AddPenyesuaianAuto = ({ tenantId, bulan, bulanMoment, contractId, onClose, tenantTypeId, tenantJenisId }: Proptype) => {
  const {values} : any = useFormikContext()
  const defaultData = {
    tenantId: tenantId,
    date: {
      startDate: new Date(),
      endDate: new Date(),
    },
    keterangan: 'Penyesuaian bulan ' + bulan,
    tipe: 'jurnal-umum-uang-muka-sewa',
    jurnals: [
      {
        akunId: '220-10',
        keterangan: '',
        debit: '',
        credit: '',
      },
      {
        akunId: '400-10',
        keterangan: '',
        debit: '',
        credit: '',
      },
    ],
    penyesuaian: 'iya',
    contractId: contractId,
    bulan: (moment(bulanMoment).month() + 1).toString(),
    tahun: values?.tahun,
  };

  const { mutate, isLoading, isSuccess } = usePostJurnal();

  if (isSuccess) {
    onClose();
  }

  return (
    <div className="rounded shadow-lg p-6 bg-white">
      {/* FORMIKCONTENT */}
      <Formik
        initialValues={defaultData}
        enableReinitialize={true}
        validateOnMount={true}
        onSubmit={(values: any) => {
          const reformat: any = [];
          values.jurnals.forEach((value: any) => {
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
            <FormTenantUpdate name="tenantId" required label="Tenant" />

            {values?.penyesuaian === 'iya' ? (
              <>
                <FormTahun name="tahun" required label="Periode Tahun" />
                <FormBulan name="bulan" required label="Periode Bulan" />
              </>
            ) : null}

            <FieldArray name="jurnals">{(arrayHelpers: any) => <AddForm name="jurnals" handleAdd={arrayHelpers.push} handleRemove={arrayHelpers.remove} />}</FieldArray>
            <div className="flex justify-end mt-10">
              <Button color="danger" variant="flat" onClick={onClose}>
                Kembali
              </Button>

              <Button color="success" className="text-white ml-2" type="submit">
                Post Jurnal
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPenyesuaianAuto;
