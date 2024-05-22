import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';


const postTenant = async (formData: any) => {
  try {
    const response = await axios.post(BACKEND_URL + '/tenants', formData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const usePostTenant = () => {
  return useMutation(postTenant, {
    onError: () => {
      // queryClient.invalidateQueries({ queryKey: QUERY_KEY_LIST_AKUNS })
      toast.error('Error! tambah tenant gagal', {
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
