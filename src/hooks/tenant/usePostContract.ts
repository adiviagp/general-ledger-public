import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';
import { queryClient } from '@src/utils/reactQuery';
const postcontract = async (formData: any) => {
  try {
    const response = await axios.post(BACKEND_URL + '/contracts', formData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const usePostcontract = () => {
  return useMutation(postcontract, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['LIST CONTRACT'] })
      // toast.success('Tambah Kontrak berhasil!', {
      //   position: 'top-right',
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'colored',
      // });
    },
  });
};
