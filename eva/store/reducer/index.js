const data = {
    news: [],
    players : [],
    player: ''
}

export default function reducer(state = data, action) {
    switch (action.type) {
        case "GET_PLAYERS":
            return {
                ...state,
                players : action.players
            }
        case "GET_PLAYER" :
            return {
                ...state,
                player: action.player
            }
        case "CLEAR_PLAYER" :
            return {
                ...state,
                player: []
            }
        case "GET_NEWS" :
            return {
                ...state,
                news: action.news
            }
        default:
            return state
    }
    
}