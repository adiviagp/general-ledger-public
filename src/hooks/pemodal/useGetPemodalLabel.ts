import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation, useQuery } from '@tanstack/react-query';
import { BACKEND_URL } from '@src/constant/constant';

type ParamsType = {
  page?: number;
  limit?: number;
  name?: string;
};

const getAkun = async (paramsAkun: ParamsType) => {
  try {
    const response = await axios.get(BACKEND_URL + '/pemodals', { params: paramsAkun });
    // return response.data;
    let reformat: any = [];
    const res = response?.data;
    if (res.data) {
      res.data.map((data: any) => {
        reformat.push({
          label: `${data?.name}`,
          value: `${data?.id}`,
        });
      });
    }
    return reformat;
  } catch (err) {
    throw err;
  }
};

export const QUERY_KEY_LIST_AKUNS = ['LIST AKUNS'];

export const useGetPemodalLabel = (paramsAkun: ParamsType) => {
  return useQuery(['LIST PEMODAL', paramsAkun], () => getAkun(paramsAkun), {
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
