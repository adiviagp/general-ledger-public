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

const postPemodal = async (formData: any) => {
  try {
    const response = await axios.post(BACKEND_URL + '/pemodals', formData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const usePostPemodal = () => {
  return useMutation(postPemodal, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['LIST PEMODAL'] })
      toast.success('Tambah pemodal berhasil', {
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
