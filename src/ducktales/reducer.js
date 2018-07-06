//INITIAL STATE
const initial_state = {
    username:'',
    password:'',
    id:0,
    avatar:''
}

//CONSTANTS
const TYPEA='TYPEA'

//REDUCER FUNCTION
export default function reducer(state = initial_state, action){
    switch (action.type){
        case TYPEA:
            return Object.assign({},state,action.payload)
        default: return state;
    }
}

//ACTION CREATOR FUNCTIONS
export function functionName(id, username, pic){
    return {
        type:TYPEA,
        payload:{
            userid:id,
            username:username,
            avatar:pic
        }
    }
}