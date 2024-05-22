import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';
import { queryClient } from '@src/utils/reactQuery';
import { QUERY_KEY_LIST_AKUNS } from './useGetAkun';

type PropsType = {
  file: any;
  RefId: string;
  agreementNo: string;
};

const postAkun = async ({ id, formData }: { id: number; formData: any }) => {
  try {
    const response = await axios.put(BACKEND_URL + '/akuns/' + id, formData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const useUpdateAkun = () => {
  return useMutation(postAkun, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_LIST_AKUNS });
      // toast.success('🦄 Wow so easy!', {
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
    onError: () => {
      toast.error('Update Akun gagal', {
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
