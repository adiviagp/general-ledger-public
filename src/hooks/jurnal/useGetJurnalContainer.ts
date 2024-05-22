import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation, useQuery } from '@tanstack/react-query';
import { BACKEND_URL } from '@src/constant/constant';

type ParamsType = {
  page?: number;
  limit?: number;
  bulan?: string;
  tahun?: string;
  tipe?: string;
};

const getAkun = async (paramsAkun: ParamsType) => {
  try {
    const response = await axios.get(BACKEND_URL + '/jurnalContainers', {params: paramsAkun});
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const QUERY_KEY_LIST_AKUNS = ['LIST AKUNS'];

export const useGetJurnalContainer = (paramsAkun: ParamsType) => {
  return useQuery(['LIST JURNAL CONTAINER', paramsAkun], () => getAkun(paramsAkun), {
    enabled: !!paramsAkun,
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
