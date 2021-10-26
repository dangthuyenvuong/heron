import { takeLatest } from 'redux-saga/effects'
import { authAction } from './auth.reducer'

function* login(action: any){
    console.log(action)
}
export function* authSaga() {
    yield takeLatest(authAction.login.type, login)
}