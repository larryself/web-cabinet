import axios from 'axios';
import { API_OPERATORS_LIST, BASE_URL } from '../constants/url';

export const createOperator = async (data: { operatorName: string; logo: string }) => {
  const response = await axios.post(`${BASE_URL}${API_OPERATORS_LIST}`, data);
  return response;
};
