import React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import { PieChart } from 'react-native-chart-kit'
import Icon from 'react-native-vector-icons/FontAwesome'

const history = () => {
    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2
    }
    
    const screenWidth = Dimensions.get('window').width

    const dataPie = [
        { name: 'Food & Beverage', population: 1000, color: 'pink', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Transportation', population: 1000, color: '#E03C31', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Medical', population: 1000, color: 'blue', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Entertainment', population: 1000, color: 'purple', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Bill', population: 1000, color: 'yellow', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Personal Care', population: 1000, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Education', population: 1000, color: 'lightblue', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Balance', population: 1000, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Overbudget', population: 100, color: 'gray', legendFontColor: '#7F7F7F', legendFontSize: 12 }
      ]
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: "5%", flexDirection: "row"}}>
                    <View style={{ flex: 1, backgroundColor: "gray" }}>
                        <Image source={{ uri: "https://00e9e64baca992043b974ffabc62beca159655b87f36a928e1-apidata.googleusercontent.com/download/storage/v1/b/elia-miniwp/o/logo.png?qk=AD5uMEv0G72nwQdV7_zGy64BN5ttSTs43EsBUmwnbCuk5xGNAA0az_a-yhvf32II3P87s9UdEW1FQoW4cAiL5OG5e50n9VQBammHU63FdOqfyiR9NJAysVCB637j127N5Vt0LSCeu7S5qSW9-58WzPKbkFs90qSO4oEeXHmxNt8Xp8vo5Zkh25fMGwuACuNNXNSUkaSutAEeX70emjBKpOH6I0gyJsX7umEFA1C6dxAnB2sqa7j5pRa4ABIy_SIjBm2rZxS5xJaouM4Ic6CbAzzfkJrOmSOZUcl1RassxCBL1gVQTuowahg6kmuAzZKY6-KJTDsj5q05mOoRKESd6Y61JGnLjWkDflv6aKEY2rJVbJnarQMR2GYU3A95svLTCUnrCUTUHKX5uns_lRrkPfaJseQmTSpPvRV-S_JLEnTanIDxzlZHBh9lhWWU39244o-5unRRy-7UC7ZdKudqO45Xs8h5MhOvh7E6VkMHwgTP70JTTROIXe-ceBoZSfWH0kvAi0Bf6j7xIIcz7_g0jzPOIYchXF_zsVQnzdw1nm51xVKvGSWITMsClmaKdzPmHVpfAfzgg0L3RBj8zOkxeOF8WRmxFMEvoukG-OUrgstzIsDeOD5s-d79hZh1uVdqpKUWanChXozfgWgFEVBSwyDxs_T0VJgyzSAnloP17TrOrAsCBH2d5WkuWdjh-K2ozIAhqjSgiO9zSbTBcCJydJ1c47G7BnLllaVE7ZnIzGonRF9gP6qih_-lfwStx5L3tdpCCmo4fycU" }} style={{ width: 100, height: 100, marginTop: -20}} />
                    </View>
                    <View style={{ flex: 11, alignItems: "flex-end"}}>
                        <Text style={{ fontSize: 30, color: "#6F1A1D" }}> ELIA </Text>
                        <Text style={{ textAlign: "center", marginTop: 0, fontSize: 17, color: "#E03C31", borderColor: "#6F1A1D", borderRadius: 10, borderWidth: 2, width: "40%" }}> 081234567890 </Text>
                        <View style={{ flexDirection: "row", marginTop: 3, justifyContent: "space-between" }}>
                            <Icon name="chevron-left" style={{ fontSize: 20, color: "#6F1A1D" }}> </Icon>
                            <Text style={{ fontSize: 16, color: "#E03C31" }}> August 2019 </Text>
                            <Icon name="chevron-right" style={{ fontSize: 20, color: "#6F1A1D" }}> </Icon>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: "#6F1A1D", flexDirection: "row", alignItems: "center", alignContent: "space-around",  paddingLeft: "8%", paddingRight: "8%"  }}>
                    <View style={{ flex: 1, borderRightColor: "white", borderRightWidth: 3, padding: 5, alignItems: "center" }}> 
                        <Text style={{ fontSize: 14, color: "white" }}>INCOME</Text>
                        <Text style={{ fontSize: 13, color: "white" }}>999999999</Text>
                    </View>
                    <View style={{ flex: 1, borderRightColor: "white", borderRightWidth: 3, padding: 5, alignItems: "center" }}> 
                        <Text style={{ fontSize: 14, color: "white" }}>OUTCOME</Text>
                        <Text style={{ fontSize: 13, color: "white" }}>999999999</Text>
                    </View>
                    <View style={{ flex: 1, borderRightColor: "white", borderRightWidth: 3, padding: 5, alignItems: "center" }}> 
                        <Text style={{ fontSize: 14, color: "white" }}>BALANCE</Text>
                        <Text style={{ fontSize: 13, color: "white" }}>999999999</Text>
                    </View>
                    <View style={{ flex: 1, padding: 5, alignItems: "center"}}> 
                        <Text style={{ fontSize: 10, color: "white" }}>OVERBUDGET</Text>
                        <Text style={{ fontSize: 13, color: "white" }}>999999999</Text>
                    </View>
                </View>
                <View style={{ flex: 7, backgroundColor: "white", marginTop: 5, alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "500", color: "#6F1A1D", marginTop: 20 }}> Monthly Graph </Text>
                    <PieChart data={dataPie} width={screenWidth} height={220} chartConfig={chartConfig} accessor="population" backgroundColor="transparent" paddingLeft="1" absolute />
                </View>
            </View>
        </View>
    )
}

export default history
