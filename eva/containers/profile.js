import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { View, Text, AsyncStorage, Alert, TouchableOpacity, Image, StyleSheet} from 'react-native'
import {Button,ListItem, List, Container,Content} from 'native-base'
import TitleBar from '../components/titleBar'
import { getUsers } from '../store/actions'

const profile = (props) => {

    useEffect(()=> {
        AsyncStorage.getItem("token", function(err, data){
            props.getUsers(data)
        })
        
    },[])

    useEffect(()=> {
        if(props.error){
            Alert.alert(
                'Error',
                props.error,
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
              )
        }
    },[props.error])

    const logout = async ()=>{
        await AsyncStorage.removeItem('token')
        props.navigation.navigate("Login")
    }

    const { firstname, lastname, email, phone_number, username } = props.Users

    return (
        <Container>
            <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('./logo.png')}/>
            <Content style={{flex: 1, marginTop: 60}}>
                <List>
                    <ListItem itemDivider>
                        <Text style={styles.textInfo}>First Name</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{firstname}</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={styles.textInfo}>Last Name</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{lastname}</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={styles.textInfo}>Email</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{email}</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={styles.textInfo}>Username</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{username}</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={styles.textInfo}>Phone Number</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{phone_number}</Text>
                    </ListItem>
                </List>
                <View style={{alignItems: "center", marginTop:10}}> 
                    <TouchableOpacity onPress={()=> { props.navigation.push("Register", {types: "edit", users: props.Users}) }} style={styles.btn}>
                        <Text style={{fontSize:16,fontWeight:'500',color:'#ffffff',textAlign:'center'}}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> { logout() }} style={styles.btn}>
                        <Text style={{fontSize:16,fontWeight:'500',color:'#ffffff',textAlign:'center'}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
            
    )
}

const mapStateToProps = (state) => {
    return {
        Users : state.User.users,
        error: state.User.error
    }
}

const mapActionToProps = { getUsers }

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#6F1A1D",
        height:110,
      },
      avatar: {
        width: 110,
        height: 110,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:30,
        alignSelf:'center',
        position: 'absolute',
        marginTop:45
      },
      textInfo: {
          fontWeight:"bold",
          fontSize: 15
      },
      btn: {
        backgroundColor: "#6F1A1D", 
        width:330,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
      }
})
export default connect(mapStateToProps,mapActionToProps)(profile)
