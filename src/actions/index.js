import API_KEY from '../currencyApiKey';
import axios from 'axios';

const BASE_URL = 'http://apilayer.net/api/';

export function convertCurrency() {
    const url = `${BASE_URL}convert?access_key=${API_KEY}`;
    const params = {
        from: 'USD',
        to: 'BRL',
        amount: 10,
        format: 1,
    };
    const request = axios.get(url, params);

    return {
        type: 'CONVERT_CURRENCY',
        payload: request,
    }
};
