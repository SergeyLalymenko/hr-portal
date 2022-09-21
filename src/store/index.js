import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import notificationsSlice from './notificationsSlice';
import todosSlice from './todosSlice';
import eventsSlice from './eventsSlice';
import dashboardComponentsSlice from './dashboardComponentsSlice';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    user: userSlice,
    notifications: notificationsSlice,
    todos: todosSlice,
    events: eventsSlice,
    dashboardComponents: dashboardComponentsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});
