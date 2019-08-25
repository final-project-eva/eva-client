import React from 'react'
import { View, Text } from 'react-native'
import Form from '../components/form'

const detail = (props) => {
    return (
        <View style={{ flex: 1, maxWidth: "95%" }}>
            <Form />
        </View>
    )
}

detail.navigationOptions = (props) => ({
    title: 'Edit Outcome',
    headerTitleStyle: {
        color: "#6F1A1D"
    },
    headerTintColor: "#6F1A1D"
})

export default detail
