import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';


const getJenisTenant = async () => {
  try {
    const response = await axios.get(BACKEND_URL + '/tenant-jenis');
    // return response.data;
    let reformat: any = []
    if(response?.data?.data){
      response.data.data.map((data: any) => {
        reformat.push({
          label: `${data?.name}`,
          value: data?.id
        })
      })
    }
    return reformat;
  } catch (err) {
    throw err;
  }
};

export const QUERY_KEY_LIST_AKUNS = ['LIST AKUNS'];

export const useGetTenantJenis = () => {
  return useQuery(['LIST JENIS TENANT'], () => getJenisTenant(), {
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
