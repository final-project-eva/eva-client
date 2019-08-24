import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const trxCard = () => {
    return (
        <View style={{ backgroundColor: "#E03C31", marginTop: 10, borderRadius: 10, padding: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 14, color: "white" }}> FOOD & BEVERAGES </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Icon name="edit" style={{ fontSize: 20, color: "white", marginRight: 10 }}> </Icon>
                    <Icon name="trash" style={{ fontSize: 20, color: "white" }}> </Icon>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, color: "white" }}>SARAPAN GORENGAN </Text>
                <Text style={{ fontSize: 20, color: "white" }}>4000 </Text>
            </View>
        </View>
    )
}

export default trxCard
