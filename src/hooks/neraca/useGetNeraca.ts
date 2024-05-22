import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';

type ParamsType = {
  startDate?: string;
  endDate?: string;
};

const getLabaRugi = async (paramsAkun: any) => {
  try {
    const response = await axios.get(BACKEND_URL + '/neraca', {params: paramsAkun});
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const QUERY_KEY_LIST_AKUNS = ['LIST AKUNS'];

export const useGetNeraca = (paramsAkun: any) => {
  return useQuery(['LIST NERACA', paramsAkun], () => getLabaRugi(paramsAkun), {
    enabled: !!paramsAkun?.startDate,
    onSuccess: () => {
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
