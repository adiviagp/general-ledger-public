import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';
import { queryClient } from '@src/utils/reactQuery';

type DocumentType = {
  username: any;
  password: string;
  hakAkses: string;
};

const postAkun = async (formData: any) => {
  try {
    const response = await axios.post(BACKEND_URL + '/auth/register', formData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const usePostRegister = () => {
  return useMutation(postAkun, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['LIST PENGGUNA'] })
      toast.success('Tambah Pengguna berhasil', {
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
      toast.error('Tambah Pengguna gagal', {
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

