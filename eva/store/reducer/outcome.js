const initialState = {
    outcome : {}
}

export default function userReducer (state = initialState, action){
    switch (action.type) {
        case "GET_OUTCOME":
            return {
                ...state,
                outcome : action.outcome
            }
        
        default:
            return state
    }
}