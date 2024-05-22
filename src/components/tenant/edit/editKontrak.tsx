import React, { useEffect, useState } from 'react';
import { Button, Spinner } from '@nextui-org/react';
import { FieldArray, Form, Formik, useFormikContext } from 'formik';
import KontrakTenant from '@src/components/tenant/add/kontrak';
import { usePostcontract } from '@src/hooks/tenant/usePostContract';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { usePostPembayaran } from '@src/hooks/tenant/usePostPembayaran';
import PembayaranTenant from '../add/pembayaran/pembayaran';
import { useGetDetailKontrak } from '@src/hooks/tenant/useGetDetailKontrak';
import { useUpdateKontrak } from '@src/hooks/tenant/useUpdateKontrak';

const EditContract = () => {
  const navigate = useNavigate();
  const params: any = useParams();
  const { data: kontrakDetail, isLoading } = useGetDetailKontrak(parseInt(params.id));

  const { mutateAsync: mutateContract, data: dataContract, isLoading: isLoadingContract, isSuccess: isSuccessContract } = useUpdateKontrak();
  const defaultData = {
    kontrak: {
      masaKontrak: {
        startDate: kontrakDetail?.startDate,
        endDate: kontrakDetail?.endDate,
      },
      tenggatPembayaran: {
        startDate: kontrakDetail?.tenggatPembayaran,
        endDate: kontrakDetail?.tenggatPembayaran,
      },
      hargaSewa: kontrakDetail?.hargaSewa,
      deposit: kontrakDetail?.deposit,
      tenantId: kontrakDetail?.tenantId,
      noGedung: kontrakDetail?.noGedung,
      keterangan: kontrakDetail?.keterangan,
      isPaid: kontrakDetail?.isPaid,
      isNew: kontrakDetail?.isNew,
      isActive: kontrakDetail?.isActive,
    },
    pembayaran: kontrakDetail?.pembayaran || [],
  };

  useEffect(() => {
    if (isSuccessContract) {
      navigate(`/tenant`);
    }
  }, [isSuccessContract]);

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
      <h1>Edit kontrak</h1>

      <div className="rounded shadow-lg p-6 mb-8 bg-white">
        {isLoading ? (
          <div className=" flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <Formik
            initialValues={defaultData}
            //   validationSchema={AddTenantPerusahaanRules}
            enableReinitialize={true}
            validateOnMount={true}
            onSubmit={(values) => {
              let reformat: any = [];
              values.pembayaran.forEach((data, index) => {
                reformat.push({
                  ...data,
                  tanggalBayar: data.tanggalBayar.endDate ? new Date(data.tanggalBayar.endDate) : null,
                  contractId: parseInt(params.id),
                  termin: index + 1,
                  nominal: parseInt(data.nominal),
                });
              });
              mutateContract({ id: parseInt(params.id), formData: { ...values, pembayaran: reformat } });
            }}
          >
            {({ values }) => (
              <Form>
                <KontrakTenant isEdit />
                <PembayaranTenant />
                <div className="flex justify-end mt-10">
                  {/* <Link to={`/tenant/${params.id}/edit`}> */}
                  <Link to={`/tenant`}>
                    <Button color="danger" variant="flat">
                      Kembali
                    </Button>
                  </Link>

                  <Button disabled={validatorIsError(values)} color={validatorIsError(values) === true ? 'default' : 'success'} className="text-white ml-2" type="submit">
                    Simpan
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </>
  );
};

export default EditContract;
