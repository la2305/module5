import { put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_USERS, DELETE_USERS } from '../redux/Types';
import axios from 'axios';

function* getAllUser(action) {
    try {
        const data = yield axios.get('http://localhost:8080/users');
        yield put({ type: GET_ALL_USERS, payload: data.data });
    } catch (e) {
        console.log(e);
    }
}




function* usersSaga() {
    yield takeLatest(GET_ALL_USERS, getAllUser);
}

export default usersSaga;