import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native'
import TabBar from "./navigators"
import { Provider } from 'react-redux'
import store from './store'


export default function App() {
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
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight
  }
})
