import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';
import { queryClient } from '@src/utils/reactQuery';

const postAkun = async ({ id }: { id: number }) => {
  try {
    const response = await axios.delete(BACKEND_URL + '/akuns/' + id);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const useDeleteAkun = () => {
  return useMutation(postAkun, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['LIST AKUN'] })
      toast.success('Hapus akun berhasil', {
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
