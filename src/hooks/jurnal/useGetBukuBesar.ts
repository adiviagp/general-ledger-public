import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';

type ParamsType = {
  page?: number;
  limit?: number;
  bulan?: string;
  tahun?: string;
};

const getBukuBesar = async (params: ParamsType | null) => {
  try {
    const response = await axios.get(BACKEND_URL + '/bukubesar', { params: params });

    return response.data.data;
  } catch (err) {
    throw err;
  }
};

export const QUERY_KEY_LIST_AKUNS = ['LIST AKUNS'];

export const useGetBukuBesar = (params: ParamsType | null) => {
  return useQuery(['LIST BUKU BESAR', params], () => getBukuBesar(params), {
    enabled: !!params,
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
