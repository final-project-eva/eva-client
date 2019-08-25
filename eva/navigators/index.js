import React from 'react'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../containers/home'
import Profile from '../containers/profile'
import Graph from '../containers/graph'
import Detail from '../containers/detail'
import Add from '../containers/add'

const DetailNav = createStackNavigator({
    Home: { 
      screen: Home,
      navigationOptions: {
        header: null
      } 
    }, 
    Detail: { 
      screen: Detail
    }
})

const StackNav = createStackNavigator({
  Home: { 
    screen: DetailNav,
    navigationOptions: {
      header: null
    } 
  }, 
  Add: {
    screen: Add,
  }
})

const TabBarNav = createBottomTabNavigator({
  Graph: { screen: Graph },
  Home: { screen: StackNav, },
  Profile: { screen: Profile }
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

if(navigation.state.routes[navigation.state.index].routeName === 'Home' && navigation.state.routes[navigation.state.index].routes[navigation.state.routes[navigation.state.index].index].routeName === 'Detail') {
  navigationOptions.tabBarVisible = false
} 

if (routeName === 'Add') {
  navigationOptions.tabBarVisible = false
} 

return navigationOptions;
}
  

export default createAppContainer(TabBarNav)