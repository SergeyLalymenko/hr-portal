import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import notificationsSlice from './notificationsSlice';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    user: userSlice,
    notifications: notificationsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});
