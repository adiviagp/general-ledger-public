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
      const response = await axios.delete(BACKEND_URL + '/contracts/' + id);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

export const useDeleteKontrak = () => {
  return useMutation(postJurnal, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['LIST CONTRACT'] })
      toast.success('Hapus kontrak berhasil', {
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
