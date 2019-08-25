const data = {
    user: '',
    isLogin: localStorage.getItem('email') ? true : false,
    plans : [],
    plan: '',
    outcome: ''
}

export default function reducer(state = data, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLogin : action.isLogin,
                user: action.user
            }
        case "LOGOUT":
            return {
                ...state,
                isLogin : action.isLogin,
                plans: [],
                plan: '',
                user: []
            }
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
        default:
            return state
    }
    
}