import { useSelector } from "react-redux"
import { createSelector } from "reselect"
import { RootState } from "../rootReducer"

export const useAuth = () => {
    return useSelector((store: RootState) => store.auth)
}

export const getAuth = createSelector(
    [(state: RootState) => state.auth],
    (auth) => auth
)
