import axios from 'axios';
import { BASE_URL, API_PAY } from '../constants/url';

export const pay = async (data: { phoneNumber: string; amountPay: string }) => {
  const resopnse = await axios.post(`${BASE_URL}${API_PAY}`, data);
  return resopnse;
};
