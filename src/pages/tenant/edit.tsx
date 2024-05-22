import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, Input, Spinner } from '@nextui-org/react';
import { FieldArray, Form, Formik } from 'formik';
import DateRange from '@src/components/dateRange';
import InformasiTenant from '@src/components/tenant/add/informasi';
import KontrakTenant from '@src/components/tenant/add/kontrak';
import { usePostTenant } from '@src/hooks/tenant/usePostTenant';
import { usePostcontract } from '@src/hooks/tenant/usePostContract';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetTenant } from '@src/hooks/tenant/useGetTenant';
import { useGetDetailTenant } from '@src/hooks/tenant/useGetDetailTenant';
import InformasiIndividualEdit from '@src/components/tenant/edit/individual';
import InformasiPerusahaanEdit from '@src/components/tenant/edit/perusahaan';
import TenantContracts from '@src/components/tenant/edit/kontrak';
import { useUpdateTenant } from '@src/hooks/tenant/useUpdateTenant';

const EditTenantPage = () => {
  const navigate = useNavigate();
  const params: any = useParams();

  const { data: tenantDetail, isLoading: tenantDetailLoading } = useGetDetailTenant(parseInt(params.id));

  const { mutate, data, isLoading, isSuccess } = useUpdateTenant();

  const defaultData = {
    informasi: {
      name: tenantDetail?.name || '',
      nik: tenantDetail?.nik || '',
      npwp: tenantDetail?.npwp || '',
      noTelp: tenantDetail?.noTelp || '',
      noAkte: tenantDetail?.noAkte || '',
      noNIB: tenantDetail?.noNIB || '',
      contactName: tenantDetail?.contactName || '',
      contactEmail: tenantDetail?.contactEmail || '',
      contactPosition: tenantDetail?.contactPosition || '',
    },
  };

  return (
    <>
      <h1>Edit Tenant</h1>
      <Formik
        initialValues={defaultData}
        // validationSchema={AddAkunRules}
        enableReinitialize={true}
        validateOnMount={true}
        onSubmit={(values) => {
          mutate({ id: parseInt(params.id), formData: { ...values.informasi } });
        }}
      >
        <Form>
          <div className="rounded shadow-md p-6 mb-8 bg-white">
            {tenantDetailLoading || !tenantDetail ? (
              <div className=" flex items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <>
                {tenantDetail?.tenantType?.name === 'Individual' ? <InformasiIndividualEdit /> : <InformasiPerusahaanEdit />}
                <div className="flex justify-end mt-10">
                  <Link to="/tenant">
                    <Button color="danger" variant="bordered">
                      Kembali
                    </Button>
                  </Link>
                  {isLoading ? (
                    <Button color="success" className="text-white ml-2" type="button">
                      <Spinner />
                    </Button>
                  ) : (
                    <Button color="success" className="text-white ml-2" type="submit">
                      Update Informasi Tenant
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </Form>
      </Formik>
      <div className="rounded shadow-md p-6 mb-8 bg-white">
        <TenantContracts id={params.id} />
      </div>
    </>
  );
};

export default EditTenantPage;
