const ADD_GUN = '加'
const REMOVE_GUN = '减'

export function counter(state=0,action) {
    switch (action.type) {
        case ADD_GUN:
            return state+1
        case REMOVE_GUN:
            return state -1
        default:
            return 10
    }
}

export function addGUN() {
    return {type:ADD_GUN}
}
export function removeGUN() {
    return {type: REMOVE_GUN}
}
export function setI() {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGUN())
        },2000)
    }
}