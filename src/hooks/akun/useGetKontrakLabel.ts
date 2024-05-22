import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';
import moment from 'moment';

interface ParamsType {
  tenantId: null | string
}
const getTenant = async (params: any) => {
  try {
    const response = await axios.get(BACKEND_URL + '/contracts', {params: params});
    // return response.data;
    let reformat: any = []
    if(response?.data?.data){
      response.data.data.map((data: any) => {
        reformat.push({
          label: `${moment(data?.startDate).format('YYYY/MM/DD')} - ${moment(data?.endDate).format('YYYY/MM/DD')}`,
          value: data?.id
        })
      })
    }
    return reformat;
  } catch (err) {
    throw err;
  }
};


export const useGetKontrakLabel = (params: ParamsType) => {
  return useQuery(['LIST KONTRAK', params], () => getTenant(params), {
    enabled: !!params.tenantId,
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
