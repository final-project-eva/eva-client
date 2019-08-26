import React from 'react'
import { View, Text, Image } from 'react-native'
import Form from '../components/form'

const add = () => {
    return (
        <View style={{ flex: 1, maxWidth: "95%" }}>
            <View style={{ flex:1 }}>
                <Form />
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
                <Image source={require('../containers/logo.png')} style={{ opacity: 0.5 }}></Image>
            </View>
        </View>
    )
}

add.navigationOptions = (props) => ({
    title: 'Add Outcome',
    headerTitleStyle: {
        color: "#6F1A1D"
    },
    headerTintColor: "#6F1A1D",
    headerRight: (
        <Text onPress={() => alert('This is a button!')} style={{ marginRight: 5, fontSize: 16, fontWeight: "500", color: "#6F1A1D" }} > Submit </Text>
    )
})

export default add
