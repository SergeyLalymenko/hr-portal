import api from '../api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchNotifications = createAsyncThunk(
    'user/fetchNotifications',
    async function(_, { rejectWithValue }) {
        try {
            const res = await api.get('notifications');

            if(res.statusText !== 'OK') {
                throw new Error('Can not fetch user!');
            }

            return res.data;
        } catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

export const setNotification = createAsyncThunk(
    'user/setNotification',
    async function({ id, newNotification }, { rejectWithValue }) {
        try {
            const res = await api.put(`notifications/${id}`, newNotification);

            if(res.statusText !== 'OK') {
                throw new Error('Can not fetch user!');
            }

            return res.data;
        } catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        data: null,
    },
    extraReducers: {
        [fetchNotifications.fulfilled]: (state, { payload }) => {
            state.data = payload;
        },
        [setNotification.fulfilled]: (state, { payload }) => {
            state.data = state.data.map((item) => item.id === payload.id ? payload : item);
        },
    },
});

export default notificationsSlice.reducer;
