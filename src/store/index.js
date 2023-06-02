import { combineReducers, configureStore } from '@reduxjs/toolkit';
import notificationsSlice from './notificationsSlice';
import todosSlice from './todosSlice';
import eventsSlice from './eventsSlice';
import dashboardComponentsSlice from './dashboardComponentsSlice';
import employeesSlice from './employeesSlice';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    notifications: notificationsSlice,
    todos: todosSlice,
    events: eventsSlice,
    dashboardComponents: dashboardComponentsSlice,
    employees: employeesSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});
