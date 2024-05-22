import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation, useQuery } from '@tanstack/react-query';
import { BACKEND_URL } from '@src/constant/constant';

const getJurnalContainer = async (id: number) => {
  try {
    const response = await axios.get(BACKEND_URL + '/jurnalContainers/' + id);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const QUERY_KEY_LIST_AKUNS = ['LIST AKUNS'];

export const useGetJurnalContainerDetail = (id: number) => {
  return useQuery(['DETAIL JURNAL CONTAINER', id], () => getJurnalContainer(id), {
    enabled: !!id,
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
