import React, {useState, useEffect} from 'react'
import { View, TouchableOpacity, Text, TextInput, AsyncStorage, Alert, StyleSheet } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base'
import {connect} from 'react-redux'
import { login } from '../store/actions'

const mapStateToProps = (state) => {
    return {
        error : state.User.error
    }
}
const mapActionToProps = { login }

function Login(props){
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    useEffect(()=> {
        AsyncStorage.getItem("token")
        .then(data => {
            if(data){
                props.navigation.navigate('TabBarNav')
            }
        })
        .catch(err=>{

        })
    },[])
    function getEmail(e){
        setEmail(e)
    }
    function getPassword(e){
        setPassword(e)
    }
    function signIn(){
        props.login({password, email, navigation: props.navigation})
        
    }

    return (

        <View style={{flex: 1, alignItems:'center', justifyContent: "center"}}>
            <TextInput style={styles.inputBox}
              placeholder=" Enter email"
              onChangeText={(text)=> {getEmail(text)}}
              value={email}
           />
           <TextInput style={styles.inputBox}
              placeholder=" Enter password"
              onChangeText={(text)=> {getPassword(text)}}
              value={password}
              secureTextEntry
           />

            <TouchableOpacity onPress={()=> {signIn()}} style={{backgroundColor: "#6F1A1D", width:300,
                borderRadius: 25,
                marginVertical: 10,
                paddingVertical: 13}}>
                <Text style={{fontSize:16,fontWeight:'500',color:'#ffffff',textAlign:'center'}}>Sign In</Text>
            </TouchableOpacity>

            <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:15}}>Don't have an account? </Text>
                <TouchableOpacity onPress={()=> {props.navigation.navigate('Register',{types: "register", users: ''})}}>
                <Text style={{fontWeight:"bold", fontSize:15}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            
    
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {

        width:300,
        height: 50,
        borderColor:'#C0C0C0',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        marginVertical: 8
        
    },

    signupbutton: {
        flex:5,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:"row"
    }
})

export default connect(mapStateToProps,mapActionToProps)(Login)