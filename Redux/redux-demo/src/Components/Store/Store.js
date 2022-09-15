import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../reducer/CounterSlice';

export default configureStore({
    reducer : {
        counter: counterReducer,
    }
});