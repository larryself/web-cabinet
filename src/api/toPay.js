import {API_PAY} from "../constants/url";
import {callApi} from "./utils/callApi";

export const toPay = (data) => callApi({url: API_PAY, method: 'POST', body: data})