import axios from 'axios';

import { API_KEY } from '../currencyApiKey';
import { CONVERT_CURRENCY } from './types';

const BASE_URL = 'http://apilayer.net/api/';

export const convertCurrency = (convert) => {
    const url = `${BASE_URL}live?access_key=${API_KEY}&source=${convert.from}&currencies=${convert.to}`;
    const request = axios.get(url);

    return {
        type: CONVERT_CURRENCY,
        payload: request,
    }
};
