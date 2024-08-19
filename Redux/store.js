import { legacy_createStore as createStore, applyMiddleware } from 'redux'; // Updated import
import createSagaMiddleware from 'redux-saga';
import counterReducer from './CounterReducer';
import { watchCounter } from './CounterSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    counterReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchCounter);

export default store;
