import api from '../api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchDashboardComponents = createAsyncThunk(
    'events/fetchDashboardComponents',
    async function(_, { rejectWithValue }) {
        try {
            const res = await api.get('dashboardComponents');

            if(res.statusText !== 'OK') {
                throw new Error('Can not fetch dashboard components!');
            }

            return res.data;
        } catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

const dashboardComponentsSlice = createSlice({
    name: 'dashboardComponents',
    initialState: {
        data: null,
    },
    reducers: {
        updateDashboardComponentsLocal(state, { payload }) {
            state.data = payload;
        },
    },
    extraReducers: {
        [fetchDashboardComponents.fulfilled]: (state, { payload }) => {
            state.data = payload;
        },
    },
});

export default dashboardComponentsSlice.reducer;
export const { updateDashboardComponentsLocal } = dashboardComponentsSlice.actions;
