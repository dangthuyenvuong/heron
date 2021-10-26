import { takeLatest } from '@redux-saga/core/effects'
import { provider } from 'cbi-react-core'
import { authAction } from './auth.reducer'

function login(action: any){
    provider('cache').set('login', {
        name: 'Đặng Thuyền Vương',
        avatar: 'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png'
    })
}

function logout(){
    provider('cache').remove('login')
}
export function* authSaga() {
    yield takeLatest(authAction.login.type, login)
    yield takeLatest(authAction.logout.type, logout)
}