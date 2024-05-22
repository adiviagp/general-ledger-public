import React, { useEffect, useState } from 'react';
import { Button, Spinner } from '@nextui-org/react';
import { FieldArray, Form, Formik, useFormikContext } from 'formik';
import KontrakTenant from '@src/components/tenant/add/kontrak';
import { usePostTenant } from '@src/hooks/tenant/usePostTenant';
import { usePostcontract } from '@src/hooks/tenant/usePostContract';
import { Link, useNavigate } from 'react-router-dom';
import InformasiPerusahaanTenant from '@src/components/tenant/add/informasiPerusahaan';
import { AddTenantPerusahaanRules } from '@src/dataRules/dataRules';
import moment from 'moment';
import PembayaranTenant from '@src/components/tenant/add/pembayaran/pembayaran';
import { usePostPembayaran } from '@src/hooks/tenant/usePostPembayaran';
import { usePostJurnalKontrak } from '@src/hooks/jurnal/usePostJurnalKontrak';

const AddTenantPage = () => {
  const navigate = useNavigate();

  const { mutateAsync, data, isLoading, isSuccess } = usePostTenant();

  const defaultData = {
    tenant_type: '2',
    informasi: {
      name: '',
      noAkte: '',
      npwp: '',
      noNIB: '',
      noTelp: '',
      contactName: '',
      contactPosition: '',
      contactEmail: '',
    },
    kontrak: {
      isNew: 'baru',
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
      isJurnal: 'Lanjut Proses Jurnal',
    },
    pembayaran: [
      {
        nominal: 0,
        tanggalBayar: {
          startDate: null,
          endDate: null,
        },
        keterangan: ''
      },
    ],
  };

  // * SIMPAN INFORMASI TENANT, JIKA BERHASIL SIMPAN JUGA CONTRACT
  useEffect(() => {
    if (data) {
      navigate('/tenant');
    }
  }, [isSuccess]);

 
  return (
    <>
      <h1>Tambah Tenant</h1>

      <div className="rounded shadow-lg p-6 mb-8 bg-white">
        <Formik
          initialValues={defaultData}
          validationSchema={AddTenantPerusahaanRules}
          enableReinitialize={true}
          validateOnMount={true}
          onSubmit={(values) => {
            const information: any = {
              ...values.informasi,
              noAkte: values.informasi.noAkte.toString(),
              npwp: values.informasi.npwp.toString(),
              noNIB: values.informasi.noNIB.toString(),
              tenantTypeId: parseInt(values.tenant_type),
              tenantJenisId: values.kontrak.tenantJenisId ? parseInt(values.kontrak.tenantJenisId) : null,
            };
            mutateAsync(information);
          }}
        >
          {({ values }) => (
            <Form>
              <InformasiPerusahaanTenant />
    
              <div className="flex justify-end mt-10">
                <Link to="/tenant">
                  <Button color="danger" variant="flat">
                    Kembali
                  </Button>
                </Link>

                <Button color='success' className="text-white ml-2" type="submit">
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

export default AddTenantPage;
