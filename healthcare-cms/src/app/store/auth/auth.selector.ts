import { useCallback } from "react"
import { useSelector } from "react-redux"
import { createSelector } from "reselect"
import store from ".."
import { RootState } from "../rootReducer"

const authSelect = (store: RootState) => store.auth
const permissionSelect = (store: RootState) => store.auth.permission


const getPermission = createSelector(permissionSelect, (permission) => {
    return (name: string) => permission.includes(name)
})

export const useAuth = () => useSelector(authSelect)
export const usePermission = () => {
    const hasPermission = useSelector(getPermission)
    return {
        hasPermission
    }
}
export const hasPermission = () => getPermission(store.getState())