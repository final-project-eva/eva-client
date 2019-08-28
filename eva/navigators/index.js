import React from 'react'
import { AsyncStorage } from 'react-native'
import { createAppContainer, createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../containers/home'
import Profile from '../containers/profile'

import Login from '../containers/login'
import Register from '../containers/register'

import Graph from '../containers/graph'
import Detail from '../containers/detail'
import Add from '../containers/add'
import Edit from '../containers/editPlan'
import { axPlan } from '../store/actions'

const StackNav = createStackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      header: null
    } 
  }, 
  Edit: { 
    screen: Edit
  },
  Detail: { 
    screen: Detail
  },
  Add: {
    screen: Add
  }
})

const StackProfile = createStackNavigator({
  Profile: { 
        screen: Profile,
        navigationOptions: {
          header: null
      }
    },
    Register: { 
      screen: Register
  } 
})

const StackRegister = createStackNavigator({
  Register: { 
        screen: Register
  } 
})

const StackLogin = createStackNavigator({
  Login: { 
        screen: Login,
        navigationOptions: {
          header: null
      }
  },
  Register: { 
    screen: Register
  }  
})


const TabBarNav = createBottomTabNavigator({

    Graph: { screen: Graph },
    Home: { screen: StackNav, },
    Profile: { screen: StackProfile },
    

}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home`;
      } else if (routeName === 'Profile') {
        iconName = `ios-person`;
      } else if (routeName === 'Graph') {
        iconName = `ios-podium`;
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#6F1A1D',
    inactiveTintColor: 'lightgray',
  }
})

StackNav.navigationOptions = ({ navigation }) => {
let { routeName } = navigation.state.routes[navigation.state.index]
let navigationOptions = {};

if (routeName === 'Detail') {
  navigationOptions.tabBarVisible = false
} 

if (routeName === 'Edit') {
  navigationOptions.tabBarVisible = false
} 

if (routeName === 'Add') {
  navigationOptions.tabBarVisible = false
} 

return navigationOptions;
}
  

  const LoginPage = createDrawerNavigator({
      Login : StackLogin,
      Register: StackRegister,
      TabBarNav: TabBarNav
  })

export default createAppContainer(LoginPage)