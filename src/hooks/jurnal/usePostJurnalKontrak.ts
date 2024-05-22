import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';
import { queryClient } from '@src/utils/reactQuery';

type DocumentType = {
  file: any;
  RefId: string;
  agreementNo: string;
};

const postJurnal = async (formData: any) => {
  try {
    if(formData?.penyesuaian === 'tidak'){
      formData['bulan'] = null;
      formData['tahun'] = null;
    }
    const response = await axios.post(BACKEND_URL + '/jurnals', formData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const usePostJurnalKontrak = () => {
  return useMutation(postJurnal);
};
