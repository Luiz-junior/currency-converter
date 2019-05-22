import { combineReducers } from 'redux';

import convertReducer from './convertReducer';

const reducers = combineReducers({
    convert: convertReducer,
});

export default reducers;