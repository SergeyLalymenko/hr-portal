import api from '../api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async function(_, { rejectWithValue }) {
        try {
            const res = await api.get('events');

            if(res.statusText !== 'OK') {
                throw new Error('Can not fetch events!');
            }

            return res.data;
        } catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

export const createEvent = createAsyncThunk(
    'events/createEvent',
    async function(newEvent, { rejectWithValue }) {
        try {
            const res = await api.post('events', newEvent);

            if(res.statusText !== 'Created') {
                throw new Error('Can not create event!');
            }

            return res.data;
        } catch(err) {
            return rejectWithValue(err.message);
        }
    }
);

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        data: null,
    },
    extraReducers: {
        [fetchEvents.fulfilled]: (state, { payload }) => {
            state.data = payload;
        },
        [createEvent.fulfilled]: (state, { payload }) => {
            state.data.push(payload);
        },
    },
});

export default eventsSlice.reducer;
