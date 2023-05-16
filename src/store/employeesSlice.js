import api from '../api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchEmployees = createAsyncThunk(
    'employees/fetchEmployees',
    async function(_, { rejectWithValue }) {
        try {
            const res = await api.get('employees');

            if(res.statusText !== 'OK') {
                throw new Error('Can not fetch employees!');
            }

            return res.data;
        } catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        data: null,
    },
    extraReducers: {
        [fetchEmployees.fulfilled]: (state, { payload }) => {
            state.data = payload;
        },
    },
});

export default employeesSlice.reducer;
