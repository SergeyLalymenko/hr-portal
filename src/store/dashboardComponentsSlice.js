import api from '../api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchDashboardComponents = createAsyncThunk(
    'dashboardComponents/fetchDashboardComponents',
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

export const deleteDashboardComponent = createAsyncThunk(
    'dashboardComponents/deleteDashboardComponent',
    async function(id, { rejectWithValue }) {
        try {
            const res = await api.delete(`dashboardComponents/${id}`);

            if(res.statusText !== 'OK') {
                throw new Error('Can not delete dashboard component!');
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
        [deleteDashboardComponent.fulfilled]: (state, { payload }) => {
            state.data = state.data.filter((item) => item.id !== payload.id);
        },
    },
});

export default dashboardComponentsSlice.reducer;
export const { updateDashboardComponentsLocal } = dashboardComponentsSlice.actions;
