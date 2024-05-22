import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';

const getDetailTenant = async (id: number) => {
  try {
    const response: any = await axios.get(BACKEND_URL + `/contracts/${id}`);
    let reformatPembayaran: any = [];
    response?.data?.pembayaran?.forEach((data) => {
      reformatPembayaran.push({
        ...data,
        tanggalBayar: {
          startDate: data?.tanggalBayar,
          endDate: data?.tanggalBayar,
        },
      });
    });
    return { ...response.data, pembayaran: reformatPembayaran };
  } catch (err) {
    throw err;
  }
};

export const QUERY_KEY_LIST_AKUNS = ['LIST AKUNS'];

export const useGetDetailKontrak = (id: number) => {
  return useQuery(['DETAIL KONTRAK', id], () => getDetailTenant(id), {
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
