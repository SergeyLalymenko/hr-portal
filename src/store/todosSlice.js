import api from '../api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(_, { rejectWithValue }) {
        try {
            const res = await api.get('todos');

            if(res.statusText !== 'OK') {
                throw new Error('Can not fetch todos!');
            }

            return res.data;
        } catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        data: null,
    },
    extraReducers: {
        [fetchTodos.fulfilled]: (state, { payload }) => {
            state.data = payload;
        },
    },
});

export default todosSlice.reducer;
