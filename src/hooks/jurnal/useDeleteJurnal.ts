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

const postJurnal = async ({ id }: { id: number }) => {
    try {
      const response = await axios.delete(BACKEND_URL + '/jurnals/' + id);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

export const useDeleteJurnal = () => {
  return useMutation(postJurnal, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['LIST JURNAL CONTAINER'] })
      toast.success('Hapus jurnal berhasil', {
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
