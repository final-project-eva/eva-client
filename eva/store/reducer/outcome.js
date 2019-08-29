const initialState = {
    outcome : {},
    title: '',
    category: '',
    price: ''
}

export default function userReducer (state = initialState, action){
    switch (action.type) {
        case "GET_OUTCOME":
            return {
                ...state,
                outcome : action.outcome
            }
        case "GET_STATE_FORM":
            return {
                ...state,
                title : action.payload.title,
                category: action.payload.category,
                price: action.payload.price
            }
        case "ADD_OUTCOME":
        return {
            ...state,
        }
        default:
            return state
    }
}