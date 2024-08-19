import { takeEvery, put } from 'redux-saga/effects';
import { DECREMENT, INCREMENT, RESET } from './Action';


function* incrementSaga () {
    yield put({type:INCREMENT});
}

function* decrementSaga () {
    yield put({type: DECREMENT});
}

function* resetSaga () {
    yield put({type: RESET})
}

export function* watchCounter () {
    yield takeEvery(INCREMENT,incrementSaga);
    yield takeEvery(DECREMENT,decrementSaga);
    yield takeEvery(RESET, resetSaga);
}