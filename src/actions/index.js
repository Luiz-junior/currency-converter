import axios from 'axios';

import { API_KEY } from '../currencyApiKey';
import { CONVERT_CURRENCY } from './types';

const BASE_URL = 'http://apilayer.net/api/';


export function convertCurrency(convert) {
    const url = `${BASE_URL}convert?access_key=${API_KEY}`;
    const params = {
        from: convert.from,
        to: convert.to,
        amount: convert.amount,
        format: 1,
    };
    const request = axios.get(url, params);

    return {
        type: CONVERT_CURRENCY,
        payload: request,
    }
};
