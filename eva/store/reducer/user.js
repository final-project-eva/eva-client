const initialState = {
    users : [],
    error: ''
}

export default function userReducer (state = initialState, action){
    switch (action.type) {
        case "REGISTER_USERS":
            return {
                ...state,
                error : ''
            }
        case "ERROR_REGISTER_USERS":
            return {
                ...state,
                error : action.payload
            }
        case "LOGIN_USERS":
            return {
                ...state,
                error : ''
            } 
        case "ERROR_LOGIN_USERS":
            return {
                ...state,
                error : action.payload
            } 
        case "GET_USERS":
            return {
                ...state,
                users : action.payload,
                error : ''
            }
        case "ERROR_GET_USERS":
            return {
                ...state,
                error : action.payload
            }
        case "UPDATE_USERS":
            return {
                ...state,
                error : ''
            }  
        case "ERROR_UPDATE_USERS":
            return {
                ...state,
                error : action.payload
            }
        default:
            return state
    }
}