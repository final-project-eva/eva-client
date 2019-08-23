import axios from 'axios'

export function getPlayers() {
    return (dispatch) => {
        axios.get('https://nba-players.herokuapp.com/players-stats')
        .then(({data}) => {
            dispatch({ 
                type: "GET_PLAYERS",
                players : data
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export function getPlayer(lastName, firstName) {
    return (dispatch) => {
        axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        .then(({data}) => {
            dispatch({ 
                type: "GET_PLAYER",
                player : data
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export function clearPlayer() {
    return (dispatch) => {
        dispatch({ 
            type: "CLEAR_PLAYER"
        })
    }
}

export function getNews() {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'https://api.sportsdata.io/v3/nba/scores/json/News',
            responseType: 'json',
            headers: {"Ocp-Apim-Subscription-Key" : "697a2793c80649e4b44431f2711d7a3c"}
        })
        .then(({data}) => {
            dispatch({ 
                type: "GET_NEWS",
                news : data
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}