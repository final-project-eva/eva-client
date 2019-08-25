import axios from 'axios'

export function getPlans() {
    return (dispatch) => {
        // axios.get('https://nba-players.herokuapp.com/players-stats')
        // .then(({data}) => {
            dispatch({ 
                type: "GET_PLANS",
                budgets : data
            })
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}

export function getPlan(id) {
    return (dispatch) => {
        // axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        // .then(({data}) => {
            dispatch({ 
                type: "GET_PLAN",
                plan : data
            })
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}

export function Login() {
    return (dispatch) => {
        // axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        // .then(({data}) => {
            dispatch({ 
                type: "GET_PLAN",
                isLogin: true,
                user : data
            })
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}

export function Logout() {
    return (dispatch) => {
        // axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        // .then(({data}) => {
            dispatch({ 
                type: "LOGOUT",
                isLogin: false
            })
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}

export function addPlan(data) {
    return (dispatch) => {
        // axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        // .then(({data}) => {
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}

export function editPlan(data) {
    return (dispatch) => {
        // axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        // .then(({data}) => {
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}

export function deletePlan(data) {
    return (dispatch) => {
        // axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        // .then(({data}) => {
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}

export function addOutcome(data) {
    return (dispatch) => {
        // axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        // .then(({data}) => {
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}

export function editOutcome(data) {
    return (dispatch) => {
        // axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        // .then(({data}) => {
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}

export function deleteOutcome(data) {
    return (dispatch) => {
        // axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        // .then(({data}) => {
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}

