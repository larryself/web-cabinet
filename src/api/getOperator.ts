import axios from 'axios';
import { BASE_URL, API_OPERATORS_LIST } from '../constants/url';

export const getOperator = async (name: string) => {
  const { data } = await axios.get(`${BASE_URL}${API_OPERATORS_LIST}${name}`);
  return data;
};
