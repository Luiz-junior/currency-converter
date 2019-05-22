import { CONVERT_CURRENCY } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case CONVERT_CURRENCY:
            const result = action.payload.data
            console.log(result);
            return result;
        default:
            return state;
    }
};