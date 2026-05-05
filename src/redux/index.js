import { configureStore } from '@reduxjs/toolkit';
import createProfileReducer from './slices/createProfile';
const store = configureStore({
    reducer: {
        createProfile: createProfileReducer,
    },
});
export default store;
