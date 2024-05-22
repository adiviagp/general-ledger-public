import * as Yup from 'yup';

export const AddTenantIndividualRules = Yup.object().shape({
  informasi: Yup.object().shape({
    name: Yup.string().required('Wajib di Isi !'),
    nik: Yup.string().required('Wajib di Isi !'),
    npwp: Yup.string().required('Wajib di Isi !'),
    noTelp: Yup.string().required('Wajib di Isi !'),
  }),
  kontrak: Yup.object().shape({
    hargaSewa: Yup.string().required('Wajib di Isi !'),
    isPaid: Yup.string().required('Wajib di Isi !'),
    isJurnal: Yup.string().required('Wajib di Isi !'),
    tenantJenisId: Yup.string().required('Wajib di Isi !'),
    // masaKontrak: Yup.object().shape({
    //   startDate: Yup.string().required('Wajib di Isi !'),
    //   endDate: Yup.string().required('Wajib di Isi !')
    // }),
  }),

});

export const AddTenantPerusahaanRules = Yup.object().shape({
  informasi: Yup.object().shape({
    name: Yup.string().required('Wajib di Isi !'),
  }),
  // kontrak: Yup.object().shape({
  //   hargaSewa: Yup.string().required('Wajib di Isi !'),
  //   isPaid: Yup.string().required('Wajib di Isi !'),
  //   isJurnal: Yup.string().required('Wajib di Isi !'),
  //   tenantJenisId: Yup.string().required('Wajib di Isi !'),
  //   // masaKontrak: Yup.object().shape({
  //   //   startDate: Yup.string().required('Wajib di Isi !'),
  //   //   endDate: Yup.string().required('Wajib di Isi !')
  //   // }),
  // }),

});


export const AddAkunRules = Yup.object().shape({
  akun: Yup.string().required('Wajib di Isi !'),
  label: Yup.string().required('Wajib di Isi !'),
});

export const RegisterRules = Yup.object().shape({
  username: Yup.string().required('Wajib di Isi !'),
  password: Yup.string().required('Wajib di Isi !'),
  hakAkses: Yup.string().required('Wajib di Isi !'),
});

export const UserUpdateRules = Yup.object().shape({
  password: Yup.string().required('Wajib di Isi !'),
});

export const LoginRules = Yup.object().shape({
  username: Yup.string().required('Wajib di Isi !'),
  password: Yup.string().required('Wajib di Isi !'),
});