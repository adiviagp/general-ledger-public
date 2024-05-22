import React, { useEffect, useState } from 'react';
import { Button, Spinner } from '@nextui-org/react';
import { FieldArray, Form, Formik, useFormikContext } from 'formik';
import KontrakTenant from '@src/components/tenant/add/kontrak';
import { usePostTenant } from '@src/hooks/tenant/usePostTenant';
import { usePostcontract } from '@src/hooks/tenant/usePostContract';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { usePostJurnal } from '@src/hooks/jurnal/usePostJurnal';
import DateSingle from '@src/components/dateSingle';
import { AddTenantPerusahaanRules } from '@src/dataRules/dataRules';
import FormTenantAuto from '@src/components/formik/formTenantAuto';
import AddForm from './addForm';
import moment from 'moment';
import FormTextArea from '@src/components/formik/formTextArea';
import { usePostPembayaran } from '@src/hooks/tenant/usePostPembayaran';
import PembayaranTenant from '../../add/pembayaran/pembayaran';
import { usePostJurnalKontrak } from '@src/hooks/jurnal/usePostJurnalKontrak';

const NewContract = () => {
  const navigate = useNavigate();
  const params: any = useParams();

  const { mutateAsync: mutateContract, data: dataContract, isLoading: isLoadingContract, isSuccess: isSuccessContract } = usePostcontract();
  const { mutateAsync: mutatePembayaran, isLoading: isLoadingPembayaran, isSuccess: isSuccessPembayaran } = usePostPembayaran();
  const { mutateAsync: mutateJurnal, isLoading: isLoadingJurnal, isSuccess: isSuccessJurnal } = usePostJurnalKontrak();

  const [contractForm, setContractForm] = useState({});
  const [pembayaranForm, setPembayaranForm] = useState<any>([]);
  const [lanjutJurnal, setLanjutJurnal] = useState(false);
  const [lanjutJurnalForm, setLanjutJurnalForm] = useState<any>(null);

  const defaultData = {
    kontrak: {
      masaKontrak: {
        startDate: null,
        endDate: null,
      },
      tenggatPembayaran: {
        startDate: null,
        endDate: null,
      },
      tenantJenisId: '',
      hargaSewa: '',
      deposit: '',
      noGedung: '',
      keterangan: '',
      isPaid: 'Lunas',
      isNew: 'baru',
      isJurnal: 'Lanjut Proses Jurnal',
    },
    pembayaran: [
      {
        nominal: 0,
        keterangan: '',
        tanggalBayar: {
          startDate: null,
          endDate: null,
        },
      },
    ],
  };

  useEffect(() => {
    if (isSuccessContract) {
      let pembayaran: any = [];
      pembayaranForm?.forEach((value: any, index: any) => {
        pembayaran.push({
          termin: index + 1,
          nominal: parseInt(value.nominal),
          tanggalBayar: value.tanggalBayar.endDate ? new Date(value.tanggalBayar.endDate) : null,
          keterangan: value.keterangan,
          contractId: dataContract.data.id,
        });
      });
      mutatePembayaran(pembayaran);

      if (lanjutJurnal) {
        let container = {
          tipe: 'jurnal-modal=awal',
          tenantId: parseInt(params.id),
        }
        let jurnals: any = [
          {
            date: new Date(),
            akunId: '220-10',
            tenantId: data.data.id,
            contractId: dataContract.data.id,
            debit: parseInt("0"),
            credit: parseInt(lanjutJurnalForm.kontrak.hargaSewa),
          },
          {
            date: new Date(),
            akunId: '220-20',
            tenantId: parseInt(params.id),
            contractId: dataContract.data.id,
            debit: parseInt("0"),
            credit: parseInt(lanjutJurnalForm.kontrak.deposit),
          }
        ];
        mutateJurnal({ ...container, date: moment().format('YYYY-MM-DD'), jurnals: jurnals });
      }

    }
  }, [isSuccessContract]);

  // * REEDIRECT KE HALAMAN UTAMA, JIKA Pembayaran BERHASIL DIBUAT
  useEffect(() => {
    if (isSuccessPembayaran && lanjutJurnal === false) {
      navigate(`/tenant/${params.id}/edit`);
    }
  }, [isSuccessPembayaran]);

  useEffect(() => { 
    if (isSuccessJurnal) {
      navigate('/tenant');
    }
  }, [isSuccessJurnal]);

  const validatorIsError = (values: any) => {
    let isError = false;
    if (values.pembayaran.length === 0) {
      isError = true;
    }
    if (values.pembayaran.some((data) => data.tanggalBayar?.startDate === null || data.tanggalBayar?.startDate === undefined)) {
      isError = true;
    }
    return isError;
  };

  return (
    <>
      <h1>Edit tenant - kontrak baru</h1>

      <div className="rounded shadow-lg p-6 mb-8 bg-white">
        <Formik
          initialValues={defaultData}
          //   validationSchema={AddTenantPerusahaanRules}
          enableReinitialize={true}
          validateOnMount={true}
          onSubmit={(values) => {
            if (values.kontrak.isNew === 'berjalan') {
              setLanjutJurnal(true);
              setLanjutJurnalForm(values)
            }

            const contract: any = {
              hargaSewa: values.kontrak.hargaSewa ? parseInt(values.kontrak.hargaSewa) : null,
              deposit: values.kontrak.deposit ? parseInt(values.kontrak.deposit) : null,
              tenantJenisId: values.kontrak.tenantJenisId ? parseInt(values.kontrak.tenantJenisId) : null,
              noGedung: values.kontrak.noGedung,
              keterangan: values.kontrak.keterangan,
              isPaid: values.kontrak.isPaid,
              isNew: values.kontrak.isNew,
              startDate: values.kontrak.masaKontrak.startDate ? new Date(values.kontrak.masaKontrak.startDate) : null,
              endDate: values.kontrak.masaKontrak.endDate ? new Date(values.kontrak.masaKontrak.endDate) : null,
              tenggatPembayaran: values.kontrak.isPaid === 'Lunas' ? null : values.kontrak.tenggatPembayaran.endDate ? new Date(values.kontrak.tenggatPembayaran.endDate) : null,
            };
            mutateContract({ ...contract, tenantId: parseInt(params.id) });
            setPembayaranForm(values.pembayaran);
          }}
        >
          {({ values }) => (
            <Form>
              <KontrakTenant />
              <PembayaranTenant />
              <div className="flex justify-end mt-10">
                <Link to={`/tenant/${params.id}/edit`}>
                  <Button color="danger" variant="flat">
                    Kembali
                  </Button>
                </Link>

                <Button
                  disabled={validatorIsError(values)}
                  color={validatorIsError(values) === true ? 'default' : 'success'}
                  className="text-white ml-2"
                  type="submit"
                >
                  Simpan
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default NewContract;
