import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import jobsSlice from './jobs-slice';
import userSlice from './user-slice';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        jobs: jobsSlice.reducer,
        users: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(function* () {
    yield takeEvery('*', function* (action) {
        yield console.log('Redux Saga Called!', action);
    });
});
export default store;
