import { createSelector } from 'reselect'
import { RootState } from '../rootReducer'

export const getNotification = createSelector(
    [(state : RootState) => state.notification],
    (notification) => {
        return notification
    }
)
