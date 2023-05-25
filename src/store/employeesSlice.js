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

export const addEmployee = createAsyncThunk(
    'employees/addEmployee',
    async function(newEmployee, { rejectWithValue }) {
        try {
            const res = await api.post('employees', newEmployee);

            if(res.statusText !== 'Created') {
                throw new Error('Can not add employee!');
            }

            return res.data;
        } catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

export const deleteEmployee = createAsyncThunk(
    'employees/deleteEmployee',
    async function(id, { rejectWithValue }) {
        try {
            const res = await api.delete(`employees/${id}`);

            if(res.statusText !== 'OK') {
                throw new Error('Can not delete employee!');
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
        [addEmployee.fulfilled]: (state, { payload }) => {
            state.data.push(payload);
        },
        [deleteEmployee.fulfilled]: (state, { payload }) => {
            state.data = state.data.filter((item) => item.id !== payload.id);
        },
    },
});

export default employeesSlice.reducer;
