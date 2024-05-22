import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';

interface PrampsType {
  tipe: 'ALL' | 'JU' | 'JU-UANG-MUKA' | 'JU-PENDAPATAN' | 'JU-MODAL'
}

const uangmukaAkun = ['220-01', '220-02', '220-03', '220-04'];
const pendapatanAkun = ['400-01'];
const modalAkun = ['300-01'];


// ---------

const getAkun = async (params: PrampsType) => {
  try {
    const response = await axios.get(BACKEND_URL + '/akuns');
    // return response.data;
    let reformat: any = [];

    if (response?.data?.data) {
      response.data.data.map((data: any) => {
        if (params.tipe === 'JU') {
          if (![...uangmukaAkun, ...pendapatanAkun, ...modalAkun].includes(data?.akun)) {
            reformat.push({
              label: `${data?.akun} - ${data?.label}`,
              value: data?.akun,
            });
          }
        }
        if (params.tipe === 'JU-UANG-MUKA') {
          if (![...pendapatanAkun, ...modalAkun].includes(data?.akun)) {
            reformat.push({
              label: `${data?.akun} - ${data?.label}`,
              value: data?.akun,
            });
          }
        }
        if (params.tipe === 'JU-PENDAPATAN') {
          if (![...uangmukaAkun, ...modalAkun].includes(data?.akun)) {
            reformat.push({
              label: `${data?.akun} - ${data?.label}`,
              value: data?.akun,
            });
          }
        }

        if (params.tipe === 'JU-MODAL') {
          if (![...uangmukaAkun, ...pendapatanAkun].includes(data?.akun)) {
            reformat.push({
              label: `${data?.akun} - ${data?.label}`,
              value: data?.akun,
            });
          }
        }

        if (params.tipe === 'ALL') {
          reformat.push({
            label: `${data?.akun} - ${data?.label}`,
            value: data?.akun,
          });
        }
      });
    }
    return reformat;
  } catch (err) {
    throw err;
  }
};

export const QUERY_KEY_LIST_AKUNS = ['LIST AKUNS'];

export const useGetAkunLabel = (params: PrampsType) => {
  return useQuery(['LIST AKUN', params], () => getAkun(params), {
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
