export const RECEIVE_POLLS = 'RECEIVE_POLLS'

export function recivePolls (polls){
    return {
        type: RECEIVE_POLLS,
        polls,
    }
}