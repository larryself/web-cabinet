import axios from 'axios';
import { BASE_URL, API_OPERATORS_LIST } from '../constants/url';

export const getOperators = async () => {
  const { data } = await axios.get(`${BASE_URL}${API_OPERATORS_LIST}`);
  return data;
};
