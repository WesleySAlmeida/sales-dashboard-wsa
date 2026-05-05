import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    email: '',
    message: null,
};
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action) => {
            state.email = action.payload.email;
            state.message = action.payload.message; // mantém o campo message atualizado
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
    },
});
export const { setProfileData, setMessage } = profileSlice.actions;
export default profileSlice.reducer;
