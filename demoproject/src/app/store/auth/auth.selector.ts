import { useSelector } from "react-redux"
import { createSelector } from "reselect"
import { RootState } from "../index"

export const useAuth = () =>{
    return useSelector<RootState>(store => store.auth)
}

export const getAuth = createSelector(
    [(state: RootState) => state.auth],
    (auth) => auth
)
