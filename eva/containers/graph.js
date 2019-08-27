import React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import { PieChart } from 'react-native-chart-kit'
import Icon from 'react-native-vector-icons/FontAwesome'
import { getPlans, getUsers } from '../store/actions'

const mapStateToProps = (state) => {
    return {
        Plans : state.Plan.plans,
        Users : state.User.users,
        title : state.Outcome.title,
        category: state.Outcome.category,
        price: state.Outcome.price
    }
}

const mapActionToProps = { getPlans, getUsers, addOutcome }

const history = () => {
    useEffect(()=> {
        AsyncStorage.getItem("token", function(err, data){
            props.getUsers(data)
        })
    },[])
    useEffect(()=>{
        props.getPlans()
    },[])
    const {firstname, lastname, phone_number} = props.Users
    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2
    }
    
    const screenWidth = Dimensions.get('window').width

    const dataPie = [
        { name: 'Food & Beverage', population: 1000, color: '#5668E2', legendFontColor: '#6F1A1D', legendFontSize: 12 },
        { name: 'Transportation', population: 1000, color: '#56AEE2', legendFontColor: '#6F1A1D', legendFontSize: 12 },
        { name: 'Medical', population: 1000, color: '#AEE256', legendFontColor: '#6F1A1D', legendFontSize: 12 },
        { name: 'Entertainment', population: 1000, color: '#56E289', legendFontColor: '#6F1A1D', legendFontSize: 12 },
        { name: 'Bill', population: 1000, color: '#68E256', legendFontColor: '#6F1A1D', legendFontSize: 12 },
        { name: 'Personal Care', population: 1000, color: '#E2CF56', legendFontColor: '#6F1A1D', legendFontSize: 12 },
        { name: 'Education', population: 1000, color: '#E28956', legendFontColor: '#6F1A1D', legendFontSize: 12 },
        { name: 'Balance', population: 1000, color: '#E256AE', legendFontColor: '#6F1A1D', legendFontSize: 12 },
        { name: 'Overbudget', population: 500, color: '#E25668', legendFontColor: '#6F1A1D', legendFontSize: 12 }
      ]
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: "5%", flexDirection: "row"}}>
                    <View style={{ flex: 1, backgroundColor: "gray" }}>
                        <Image  source={require('../containers/logo.png')} style={{ width: 100, height: 100, marginTop: -20}} />
                    </View>
                    <View style={{ flex: 11, alignItems: "flex-end"}}>
                        <Text style={{ fontSize: 30, color: "#6F1A1D" }}> {firstname +' '+ lastname} </Text>
                        <Text style={{ textAlign: "center", marginTop: 0, fontSize: 17, color: "#E03C31", borderColor: "#6F1A1D", borderRadius: 10, borderWidth: 2, width: "40%" }}> {phone_number} </Text>
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
