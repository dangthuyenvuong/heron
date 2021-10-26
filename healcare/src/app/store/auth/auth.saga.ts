import { takeLatest } from '@redux-saga/core/effects'
import { provider } from 'cbi-react-core'
import { authAction } from './auth.reducer'

function login(action: any){
    provider('cache').set('login', action.payload)
}
export function* authSaga() {
    yield takeLatest(authAction.login.type, login)
}