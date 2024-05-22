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

const postNeraca = async (formData: any) => {

  const isError = formData?.data?.some((data) => data?.akunId === undefined)
  if(!isError){
    try {
      const response = await axios.post(BACKEND_URL + '/neraca', formData);
      return response.data;
    } catch (err) {
      throw err;
    }
  } else {
    throw new Error();
  }
};

export const usePostNeraca = () => {
  return useMutation(postNeraca, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['LIST NERACA'] })
      toast.success('Update Neraca berhasil', {
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
      queryClient.invalidateQueries({ queryKey: ['LIST NERACA'] })
      toast.error('Update Neraca Gagal', {
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
