import { createSelector } from 'reselect'
import { RootState } from '../rootReducer'

export const getSetting = createSelector(
    [(state : RootState) => state.setting],
    (setting) => {
        return setting
    }
)