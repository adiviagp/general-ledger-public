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

const updateJurnal = async ({ id, formData }: { id: number; formData: any }) => {
  const isError = formData?.jurnals?.some((data) => data?.akunId === undefined);
  if (!isError) {
    try {
      const response = await axios.put(BACKEND_URL + '/jurnals/' + id, formData);
      return response.data;
    } catch (err) {
      throw err;
    }
  } else {
    throw new Error();
  }
};

export const useUpdateJurnal = () => {
  return useMutation(updateJurnal, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['LIST TENANT'] });
      toast.success('Update jurnal berhasil', {
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
      toast.error('Update jurnal gagal', {
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
