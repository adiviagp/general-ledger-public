import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';
import { queryClient } from '@src/utils/reactQuery';

const postAkun = async ({ id, formData }: { id: number; formData: any }) => {
  try {
    const response = await axios.put(BACKEND_URL + '/pemodals/' + id, formData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const useUpdatePemodal = () => {
  return useMutation(postAkun, {
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: QUERY_KEY_LIST_AKUNS });

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
  });
};
