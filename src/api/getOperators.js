import {API_OPERATORS} from "../constants/url";
import {callApi} from "./utils/callApi";

export const getOperators = () => callApi({url: API_OPERATORS})