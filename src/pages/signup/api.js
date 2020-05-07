import axios from 'axios';
import { baseOptions } from '../../config';

export const signup = async (data, code) => {
  try {
    const response = await axios.post(`${baseOptions.url}/token-request/`, data,
      {headers: {Authorization: 'Bearer ' + code}});
    return response;
  } catch (e) {
    if (e.response) {
      throw new Error(e.error || e.response.data.message);
    }
    else {
      throw new Error(e.error || e.message);
    }
  }
};
