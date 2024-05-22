import axios from 'axios';
// import { BACKEND_URL } from '@src/constant/PublicConstant';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '@src/constant/constant';


const postLogin = async (formData: any) => {
  try {
    const response = await axios.post(BACKEND_URL + '/auth/login', formData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const usePostLogin = () => {
  return useMutation(postLogin, {
    onError: () => {
      toast.error('Login gagal', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    },
  });
};
