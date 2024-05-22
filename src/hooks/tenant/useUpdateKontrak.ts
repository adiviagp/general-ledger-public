import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';
import { queryClient } from '@src/utils/reactQuery';


const postTenant = async ({ id, formData }: { id: number; formData: any }) => {
  try {
    const response = await axios.put(BACKEND_URL + '/contracts/' + id, formData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const useUpdateKontrak = () => {
  return useMutation(postTenant, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['LIST CONTRACT'] })
      toast.success('Update kontrak berhasil', {
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
      // queryClient.invalidateQueries({ queryKey: QUERY_KEY_LIST_AKUNS })
      toast.error('Error! update kontrak gagal', {
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
