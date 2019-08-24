import React from 'react'
import { View, Text } from 'react-native'
import TitleBar from '../components/titleBar'

const profile = () => {
    return (
        <View style={{ flex: 1 }}>
            <TitleBar />
            <View style={{ flex: 11 }}>
                <Text>PROFILE</Text>
            </View>
        </View>
    )
}

export default profile
