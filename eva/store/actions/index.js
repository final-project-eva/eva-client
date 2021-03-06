import axios from 'axios'
import { AsyncStorage, Alert } from 'react-native'

const androidUrl = 'http://52.206.155.241'
// const androidUrl = 'http://10.0.2.2'

export function register(payload){
    
    return dispatch => {
        axios.post(`${androidUrl}/users/register`,{
            firstname: payload.firstname, 
            lastname: payload.lastname, 
            password: payload.password, 
            username: payload.username,
            email: payload.email, 
            phone_number: payload.phone
        })
        .then(({data})=> {
            dispatch({
                type: "REGISTER_USERS"
            })
            dispatch(addPlan({userId: data._id, username: data.username, income: 0, budgets:[
                {category: "bills", amount: 0},
                {category: "transportation", amount: 0},
                {category: "education", amount: 0},
                {category: "entertainment", amount: 0},
                {category: "food & beverages", amount: 0},
                {category: "health", amount: 0},
                {category: "personal care", amount: 0},
                {category: "others", amount: 0}
            ], balance:0}))
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
        axios.post(`${androidUrl}/users/login`,{
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
    return axios.get(`${androidUrl}/users`, 
    { 
        headers: {
            token : token
        }
    })
}
export function getUsers(token){
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
        axios.put(`${androidUrl}/users`, {
            firstname: payload.firstname, 
            lastname: payload.lastname,
            email: payload.email, 
            username: payload.username,
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

export function getFromForm(data){
    return dispatch => {
        dispatch({
            type: "GET_STATE_FORM",
            payload: data
        })
    }
}
export function axPlan(userid){
    return axios.get(`${androidUrl}/plan/${userid}`)
}

export function getPlans() {
    let userid = ''
    return (dispatch) => {
        AsyncStorage.getItem('userid', function(err, data){
            userid=data
            axPlan(userid)
            .then(({data}) => {
                dispatch({ 
                    type: "GET_PLANS",
                    plans : data
                })
            })
            .catch(function (err) {
                console.log(err);
            })
        })    
    }
}

export function getPlan(id) {
    return (dispatch) => {
        axios.get(`${androidUrl}/plan/detail/${id}`)
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
        axios.post(`${androidUrl}/plan`, {
            balance: data.balance,
            budgets: data.budgets,
            username: data.username,
            income: data.income,
            userId: data.userId
        })
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
        AsyncStorage.getItem('userid', function(err,id){
            axios.patch(`${androidUrl}/plan/${data.id}`,data)
            .then(({data}) => {
                dispatch({ 
                    type: "EDIT_PLAN"
    
                })
                return axPlan(id)   
                
            })
            .then(({data}) => {
                dispatch({ 
                    type: "GET_PLANS",
                    plans : data
                })
            })
            .catch(function (err) {
                Alert.alert(
                    'Error',
                    err,
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ]
                  );
                dispatch({ 
                    type: "ERROR_EDIT_PLAN",
                    error :  err.response.data.message
                })
            })  
            
        }) 
        
    }
}

export function deletePlan(data) {
    return (dispatch) => {
        axios.delete(`${androidUrl}/plan/${data.id}`)
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

export function addOutcome(payload) {
    return (dispatch) => {
        AsyncStorage.getItem('userid', function(err,id){
            axios.post(`${androidUrl}/outcome`,payload)
            .then(({data}) => {
                dispatch({ 
                    type: "ADD_OUTCOME",
                    outcome : data
                })
                return axPlan(id)   
            })
            .then(({data}) => {
                dispatch({ 
                    type: "GET_PLANS",
                    plans : data
                })
            })
            .catch(function (err) {
                console.log(err);
            })  
            
        }) 
       
    }
}

export function editOutcome(payload) {
    
    return (dispatch) => {
        AsyncStorage.getItem('userid', function(err,id){
            axios.delete(`${androidUrl}/outcome/${payload.id}/${payload.planningId}`)
            .then(({data}) => {
                return axios.post(`${androidUrl}/outcome`,payload)  
            })
            .then(({data}) => {
                return axPlan(id) 
            })
            .then(({data}) => {
                dispatch({ 
                    type: "GET_PLANS",
                    plans : data
                })
            })
            .catch(function (err) {
                console.log(err);
            })  
            
        }) 
        
    }
}

export function deleteOutcome(payload) {
    return (dispatch) => {
        AsyncStorage.getItem('userid', function(err,id){
            axios.delete(`${androidUrl}/outcome/${payload.id}/${payload.planId}`)
            .then(({data}) => {
                Alert.alert("Data "+data.note+" has been deleted!");
                dispatch({ 
                    type: "DELETE_OUTCOME",
                    outcome : data
                })
                return axPlan(id)   
            })
            .then(({data}) => {
                dispatch({ 
                    type: "GET_PLANS",
                    plans : data
                })
            })
            .catch(function (err) {
                console.log(err);
            })  
        })   
    }
}

export function getOutcome(data) {
    return (dispatch) => {
        axios.get(`${androidUrl}/outcome/${data.id}`)
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
                    //     plan : da`ta
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




