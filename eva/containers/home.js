import React from 'react'
import { View, Text } from 'react-native'
import TitleBar from '../components/titleBar';

const home = () => {
    return (
        <View style={{ flex: 1 }}>
            <TitleBar />
            <View style={{ flex: 11 }}>
                <View style={{ flex: 1, padding: "5%", alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 30, color: "#6F1A1D" }}> ELIA </Text>
                    <Text style={{ textAlign: "center", fontSize: 17, color: "#6F1A1D", borderColor: "#6F1A1D", borderRadius: 10, borderWidth: 2, width: "40%" }}> 081234567890 </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "#6F1A1D", padding: "5%", alignItems: "flex-start" }}>
                    <Text style={{ fontSize: 17, color: "white" }}> CURRENT BALANCE : </Text>
                    <Text style={{ fontSize: 30, color: "white", borderColor: "#6F1A1D", borderRadius: 10, borderWidth: 2 }}>Rp. 999.999.999,00 </Text>
                </View>
                <View style={{ flex: 7, backgroundColor: "white", padding: "5%" }}>
                    <Text style={{ fontSize: 20, color: "#6F1A1D" }}> OUTCOMES : </Text>
                    <View style={{ backgroundColor: "lightgray", marginTop: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 15, color: "#6F1A1D" }}> FOOD & BEVERAGES </Text>
                        <Text style={{ fontSize: 15, color: "#6F1A1D" }}> SARAPAN GORENGAN </Text>
                        <Text style={{ fontSize: 15, color: "#6F1A1D" }}> Rp. 4.000,00 </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default home
