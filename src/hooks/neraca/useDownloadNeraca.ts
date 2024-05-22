import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';
import { queryClient } from '@src/utils/reactQuery';

const postNeraca = async (params: any) => {
  try {
    const res = await axios.get(BACKEND_URL + '/neraca/download-excel', {
      params: params,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const useDownloadNeraca = () => {
  return useMutation(postNeraca, {
    onSuccess(data: any, variables, context) {
      // // console.log(data);
      // const url = window.URL.createObjectURL(new Blob([data]));
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', 'neraca.xlsx');
      // document.body.appendChild(link);
      // link.click();
    },
  });
};
