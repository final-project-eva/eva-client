import axios from 'axios'
import { AsyncStorage, Alert } from 'react-native'

const androidUrl = 'http://10.0.2.2'

export function register(payload){
    
    return dispatch => {
        axios.post(`${androidUrl}:3000/users/register`,{
            firstname: payload.firstname, 
            lastname: payload.lastname, 
            password: payload.password, 
            email: payload.email, 
            phone_number: payload.phone
        })
        .then(({data})=> {
            dispatch({
                type: "REGISTER_USERS"
            })
            payload.navigation.navigate('Login')
        })
        .catch(err =>{
            Alert.alert(
                'Error',
                err.response.data.message,
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
            );
            dispatch({
                type: "ERROR_REGISTER_USERS",
                payload: err.response.data.message
            })
            
        })
    }
}

export function login(payload){
    return dispatch => {
        axios.post(`${androidUrl}:3000/users/login`,{
            password: payload.password, 
            email: payload.email
        })
        .then(({data})=> {
            AsyncStorage.setItem("token",data.token)
            AsyncStorage.setItem("userid",data.userId)
            payload.navigation.navigate("TabBarNav")
            dispatch({
                type: "LOGIN_USERS"
            })
        })
        .catch(err =>{
            Alert.alert(
                'Error',
                err.response.data.message,
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
            );
            dispatch({
                type: "ERROR_LOGIN_USERS",
                payload: err.response.data.message
            })
            
        })
    }
}
function axUser(token){
    return axios.get(`${androidUrl}:3000/users`, 
    { 
        headers: {
            token : token
        }
    })
}
export function getUsers(token){
    console.log(token);
            
    return dispatch => {
        axUser(token)
        .then(({data})=> {
            dispatch({
                type: "GET_USERS",
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: "ERROR_GET_USERS",
                payload: err.response.data.message
            })
        })
    }
}

export function updateProfile(payload){
    return dispatch => {
        axios.put(`${androidUrl}:3000/users`, {
            firstname: payload.firstname, 
            lastname: payload.lastname,
            email: payload.email, 
            phone_number: payload.phone
        },
        { 
            headers: {
                token : payload.token
            }
        })
        .then(({data})=> {
            return axUser(payload.token)
            
        })
        .then(({data})=> {
            payload.navigation.navigate('Profile')

            dispatch({
                type: "UPDATE_USERS",
            })
            dispatch({
                type: "GET_USERS",
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: "ERROR_UPDATE_USERS",
                payload: err.response.data.message
            })
        })
    }
}

export function getPlans() {
    let userid = ''
    AsyncStorage.getItem('userid', function(err,data){
        userid=data
    })
    console.log(userid,'id');
    
    return (dispatch) => {
        axios.get(`${androidUrl}:3000/plan/${userid}`)
        .then(({data}) => {
            dispatch({ 
                type: "GET_PLANS",
                plans : data
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export function getPlan(id) {
    return (dispatch) => {
        axios.get(`${androidUrl}:3000/plan/detail/${id}`)
        .then(({data}) => {
            dispatch({ 
                type: "GET_PLAN",
                plan : data
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export function addPlan(data) {
    return (dispatch) => {
        axios.post(`${androidUrl}:3000/plan`, data)
        .then(({data}) => {
            dispatch({ 
                type: "ADD_PLAN",
                plan : data
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export function editPlan(data) {
    return (dispatch) => {
        axios.patch(`${androidUrl}:3000/plan/${data.id}`,{

        })
        .then(({data}) => {
            dispatch({ 
                type: "EDIT_PLAN",
                plan : data
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export function deletePlan(data) {
    return (dispatch) => {
        axios.delete(`${androidUrl}:3000/plan/${data.id}`)
        .then(({data}) => {
            dispatch({ 
                type: "DELETE_PLAN",
                plan : data
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export function addOutcome(data) {
    return (dispatch) => {
        axios.post(`${androidUrl}:3000/outcome`)
        .then(({data}) => {
            dispatch({ 
                type: "ADD_OUTCOME",
                outcome : data
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export function editOutcome(data) {
    return (dispatch) => {
        axios.patch(`${androidUrl}:3000/outcome/${data.id}`,{

        })
        .then(({data}) => {
            dispatch({ 
                type: "EDIT_OUTCOME",
                outcome : data
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export function deleteOutcome(data) {
    return (dispatch) => {
        axios.delete(`${androidUrl}:3000/outcome/${data.id}`)
        .then(({data}) => {
            dispatch({ 
                type: "DELETE_OUTCOME",
                outcome : data
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export function getOutcome(data) {
    return (dispatch) => {
        axios.get(`${androidUrl}:3000/outcome/${data.id}`)
        .then(({data}) => {
            dispatch({ 
                type: "GET_OUTCOME",
                outcome : data

            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}

export function nextPlan(id) {
    return (dispatch) => {
        // axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        // .then(({data}) => {
            // })
                    // dispatch({ 
                    //     type: "GET_PLAN",
                    //     indexPlan: data,
                    //     plan : data
                    // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}

export function beforePlan(id) {
    return (dispatch) => {
        // axios.get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
        // .then(({data}) => {
            dispatch({ 
                type: "GET_PLAN",
                indexPlan: data,
                plan : data
            })
        // })
        // .catch(function (err) {
        //     console.log(err);
        // })
    }
}




