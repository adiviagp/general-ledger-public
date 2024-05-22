import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';

type ParamsType = {
  startDate?: string;
  endDate?: string;
};

const postJurnal = async (formData: ParamsType) => {
  try {
    const response = await axios.post(BACKEND_URL + '/neraca-saldo/download-excel', formData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const usePostJurnal = () => {
  return useMutation(postJurnal, {
    onSuccess: () => {
     
    },
  });
};
