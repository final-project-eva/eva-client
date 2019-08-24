import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import TabBar from "./navigators"
import { Provider } from 'react-redux'
import store from './store'


export default function App() {
  const [isReady,setisReady] = useState(false)

  async function load(){
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }
  useEffect(() => {
    load()
    setisReady(true)
  },[])
  
  if (!isReady) {
    return <AppLoading />;
  }
  return (
    <Provider store={ store }>
      <SafeAreaView style={styles.container}>
        <TabBar/>
      </SafeAreaView>
    </Provider>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
})
