import api from '../api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async function(_, { rejectWithValue }) {
        try {
            const res = await api.get('user');

            if(res.statusText !== 'OK') {
                throw new Error('Can not fetch user!');
            }

            return res.data;
        } catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, { payload }) => {
            state.data = payload;
        },
    },
});

export default userSlice.reducer;
