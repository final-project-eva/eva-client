import React from 'react'
import { createAppContainer, createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../containers/home'
import Profile from '../containers/profile'
import Login from '../containers/login'
import Register from '../containers/register'

const StackNav = createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: {
            header: null
        } 
    }, 
    // Profile: { 
    //     screen: Profile,
    //     navigationOptions: {
    //       header: null
    //   } 
    // },
    // Register: {
    //   screen: Register
    // }
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
    Home: { screen: StackNav, },
    Profile: { screen: StackProfile },
    
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#6F1A1D',
      inactiveTintColor: 'lightgray',
    },
  }, {
    initialRouteName: "Home"
})

// StackNav.navigationOptions = ({ navigation }) => {
// let { routeName } = navigation.state.routes[navigation.state.index];
// let navigationOptions = {};

// if (routeName === 'Detail') {
//     navigationOptions.tabBarVisible = false
// }

// return navigationOptions;
// }

  const LoginPage = createDrawerNavigator({
      Login : StackLogin,
      Register: StackRegister,
      TabBarNav: TabBarNav
  })

export default createAppContainer(LoginPage)