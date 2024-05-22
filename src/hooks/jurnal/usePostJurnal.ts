import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';
import { queryClient } from '@src/utils/reactQuery';

type DocumentType = {
  file: any;
  RefId: string;
  agreementNo: string;
};

const postJurnal = async (formData: any) => {
  const isError = formData?.jurnals?.some((data) => data?.akunId === undefined);
  if (!isError) {
    try {
      if(formData?.penyesuaian === 'tidak'){
        formData['bulan'] = null;
        formData['tahun'] = null;
      }
      const response = await axios.post(BACKEND_URL + '/jurnals/', formData);
      return response.data;
    } catch (err) {
      throw err;
    }
  } else {
    throw new Error();
  }
};

export const usePostJurnal = () => {
  return useMutation(postJurnal, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['LIST UANG MUKA'] })
      toast.success('Tambah jurnal berhasil', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ['LIST UANG MUKA'] })
      toast.error('Tambah jurnal Gagal', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    },
  });
};
