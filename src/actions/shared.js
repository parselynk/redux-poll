import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { recivePolls } from './polls'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleIntialData(){
    return (dispatch) => {
        return getInitialData()
            .then(({users, polls}) => {
                dispatch(receiveUsers(users))
                dispatch(recivePolls(polls))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}