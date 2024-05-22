import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';

interface ParamsType {
  id: null | number;
}
const getTenant = async (params: any) => {
  try {
    const response = await axios.get(BACKEND_URL + '/tenants/' + params.id);
    // return response.data;
    let reformat: any = [];
    const res = response?.data;
    if (res) {
      reformat.push({
        label: `${res?.name}`,
        value: res?.id,
      },
      {
        label: `${res?.tenantType?.name}`,
        value: res?.tenantType?.id,
      });
    }
    return reformat;
  } catch (err) {
    throw err;
  }
};

export const useGetTenantDetailLabel = (params: ParamsType) => {
  return useQuery(['LIST TENANT', params.id], () => getTenant(params), {
    enabled: !!params.id,
    staleTime: Infinity,
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
