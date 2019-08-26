const initialState = {
    plans : [],
    plan: ''
}

export default function userReducer (state = initialState, action){
    switch (action.type) {
        case "GET_PLANS":
            return {
                ...state,
                plans : action.plans
            }
        case "GET_PLAN" :
            return {
                ...state,
                plan: action.plan
            }
        case "ADD_PLAN" :
            return {
                ...state
            }
        
        default:
            return state
    }
}