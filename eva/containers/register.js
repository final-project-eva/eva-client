import React,{useState, useEffect} from 'react'
import { View, Alert,AsyncStorage, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base'
import {connect} from 'react-redux'
import { register, updateProfile } from '../store/actions'

const mapStateToProps = (state) => {
    return {
        error : state.User.error
    }
}
const mapActionToProps = { register, updateProfile }

function Register(props){
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [error,setError] = useState(props.error)

    const { types, users } = props.navigation.state.params
    useEffect(()=> {
        
        if(types == 'edit'){
            setEmail(users.email)
            setFirstname(users.firstname)
            setLastname(users.lastname)
            setPhone(users.phone_number)
            setUsername(users.username)
        }
    },[])

    function getFirstname(e){
        setFirstname(e)
    }

    function getLastname(e){
        setLastname(e)
    }

    function getUsername(e){
        setUsername(e)
    }

    function getEmail(e){
        setEmail(e)
    }

    function getPhone(e){
        setPhone(e)
    }

    function getUsername(e){
        setUsername(e)
    }

    function getPassword(e){
        setPassword(e)
    }

    function signUp(){
        props.register({firstname, lastname, email, password, phone, username, navigation: props.navigation})
    
    }

    
        
    function editUser(){
        AsyncStorage.getItem("token", function(err, data){
            props.updateProfile({firstname, lastname, email, phone, username, token: data, navigation: props.navigation })
        })
                if(error){
                    Alert.alert(
                        'Error',
                        props.error,
                        [
                          {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ]
                      );
                }
        
    }

    return (

        <Container>
            <Content style={{marginTop:20, padding: "5%", paddingLeft: "3%", width: "95%"}}>
                <Form>
                    <Item floatingLabel>
                        <Label>First Name</Label>
                        <Input onChangeText={(text)=> { getFirstname(text) }} value={firstname}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Last Name</Label>
                        <Input onChangeText={(text)=> { getLastname(text) }} value={lastname}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input onChangeText={(text)=> { getUsername(text) }} value={username}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input onChangeText={(text)=> { getEmail(text) }} value={email}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Phone Number</Label>
                        <Input onChangeText={(text)=> { getPhone(text) }} value={phone}/>
                    </Item>
                    {
                        types == 'edit' ? <Text>{''}</Text> : 
                        <Item style={{marginBottom:20}} floatingLabel>
                            <Label>Password</Label>
                            <Input onChangeText={(text)=> { getPassword(text) }} value={password} secureTextEntry/>
                        </Item>
                    }
                    <View style={{flex:1, alignItems: "center"}}>
                    {
                        types == 'edit' ? 
                        <TouchableOpacity onPress={()=> { editUser() }} style={styles.btn}>
                            <Text style={{fontSize:16,fontWeight:'500',color:'#ffffff',textAlign:'center'}}>Save</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=> { signUp() }} style={styles.btn}>
                            <Text style={{fontSize:16,fontWeight:'500',color:'#ffffff',textAlign:'center'}}>Sign Up</Text>
                        </TouchableOpacity>
                    }
                    </View>
                </Form>
            </Content>
            </Container>
        )
}
const styles= StyleSheet.create({
    btn: {
        backgroundColor: "#6F1A1D", 
        width:380,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13, 
        marginLeft: "5%"
      }
})

Register.navigationOptions = (props) => ({
    title: 'Register',
    headerTitleStyle: {
        color: "#6F1A1D"
    },
    headerTintColor: "#6F1A1D",
})

export default connect(mapStateToProps,mapActionToProps)(Register)