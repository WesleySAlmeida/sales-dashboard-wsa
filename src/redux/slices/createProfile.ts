import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CreateProfileData } from '@/types/profileData';

const initialState: Omit<CreateProfileData, 'name' | 'phone' | 'password'> = {
  email: '',
  message: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (
      state,
      action: PayloadAction<
        Omit<CreateProfileData, 'name' | 'phone' | 'password'>
      >
    ) => {
      state.email = action.payload.email;
      state.message = action.payload.message; // mantém o campo message atualizado
    },
    setMessage: (state, action: PayloadAction<string | null>) => {
      state.message = action.payload;
    },
  },
});

export const { setProfileData, setMessage } = profileSlice.actions;
export default profileSlice.reducer;
