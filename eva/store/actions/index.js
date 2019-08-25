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