import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, Image, TouchableHighlight, AsyncStorage } from 'react-native'
import TrxCard from '../components/trxCard'
import Icon from 'react-native-vector-icons/FontAwesome'
import { getPlans, getUsers, addOutcome } from '../store/actions'

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

const home = (props) => {
    useEffect(()=> {
        AsyncStorage.getItem("token", function(err, data){
            props.getUsers(data)
        })
    },[])
    useEffect(()=>{
        props.getPlans()
        
    },[])
    let plans = props.Plans[0]
    console.log(plans,'ini plans');
    const {firstname, lastname, phone_number} = props.Users
    let sumAmount = 0

    if(plans === undefined){
        return (
            <Text>loading..</Text>
        )
    } else {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: "5%", flexDirection: "row"}}>
                    <View style={{ flex: 1, backgroundColor: "gray" }}>
                        <Image source={require('../containers/logo.png')} style={{ width: 100, height: 100, marginTop: -20}} />
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
                <View style={{ flex: 1, backgroundColor: "#6F1A1D", flexDirection: "row", alignItems: "center", alignContent: "space-around",  paddingLeft: "5%", paddingRight: "5%", marginTop: "1%"  }}>
                    <View style={{ flex: 1, borderColor: "white", borderRightWidth: 3, padding: 5, alignItems: "center" }}> 
                        <Text style={{ fontSize: 15, color: "white" }}>INCOME</Text>
                        <Text style={{ fontSize: 14, color: "white" }}>{plans.income}</Text>
                    </View>
                    <View style={{ flex: 1, borderColor: "white", borderRightWidth: 3, padding: 5, alignItems: "center" }}> 
                        <Text style={{ fontSize: 15, color: "white" }}>OUTCOME</Text>
                        <Text style={{ fontSize: 14, color: "white" }}>{ sumAmount }</Text>
                    </View>
                    <View style={{ flex: 1, borderColor: "white", alignItems: "center" }}> 
                        <Text style={{ fontSize: 15, color: "white" }}>BALANCE</Text>
                        <Text style={{ fontSize: 14, color: "white" }}>{ plans.balance }</Text>
                    </View>
                    <View style={{ padding: 5, alignItems: "flex-end" }}> 
                        <TouchableHighlight onPress={ () => props.navigation.navigate('Edit', {plans: plans}) }>
                            <Icon name="edit" style={{ fontSize: 20, color: "white", textAlign: "right" }}> </Icon>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{ flex: 3, backgroundColor: "#6F1A1D", paddingLeft: "5%", paddingRight: "5%", paddingTop: "3%", marginTop: "1%" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "1%" }}>
                        <Text style={{ color: "white", fontSize: 16, marginBottom: "1%" }}>Budgeting: </Text>
                        <Text style={{ color: "white", fontSize: 16, marginBottom: "1%" }}>Overbudget: { plans.overBudget } </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", alignContent: "space-around" }}>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderColor: "white", borderRadius: 5, borderWidth: 3, marginLeft: "1%", marginRight: "1%", height: "100%" }}> 
                            <Text style={{ fontSize: 14, color: "white", textAlign: "center" }}>Personal Care</Text>
                            <Text style={{ fontSize: 13, color: "white" }}>{ plans.budgets[1].amount }</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderColor: "white", borderRadius: 5, borderWidth: 3, marginLeft: "1%", marginRight: "1%", height: "100%" }}> 
                            <Text style={{ fontSize: 14, color: "white", textAlign: "center" }}>Food & Beverages</Text>
                            <Text style={{ fontSize: 13, color: "white" }}>{ plans.budgets[3].amount }</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderColor: "white", borderRadius: 5, borderWidth: 3, marginLeft: "1%", marginRight: "1%", height: "100%" }}> 
                            <Text style={{ fontSize: 14, color: "white" }}>Entertainment</Text>
                            <Text style={{ fontSize: 13, color: "white" }}>{ plans.budgets[0].amount }</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", alignContent: "space-around", marginTop: "2%" }}>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderColor: "white", borderRadius: 5, borderWidth: 3, marginLeft: "1%", marginRight: "1%", height: "100%" }}> 
                            <Text style={{ fontSize: 14, color: "white" }}>Education</Text>
                            <Text style={{ fontSize: 13, color: "white" }}>{ plans.budgets[4].amount }</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderColor: "white", borderRadius: 5, borderWidth: 3, marginLeft: "1%", marginRight: "1%", height: "100%" }}> 
                            <Text style={{ fontSize: 14, color: "white" }}>Health</Text>
                            <Text style={{ fontSize: 13, color: "white" }}>{ plans.budgets[1].amount }</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderColor: "white", borderRadius: 5, borderWidth: 3, marginLeft: "1%", marginRight: "1%", height: "100%" }}> 
                            <Text style={{ fontSize: 14, color: "white" }}>Bills</Text>
                            <Text style={{ fontSize: 13, color: "white" }}>{ plans.budgets[5].amount }</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderColor: "white", borderRadius: 5, borderWidth: 3, marginLeft: "1%", marginRight: "1%", height: "100%" }}> 
                            <Text style={{ fontSize: 14, color: "white" }}>Other</Text>
                            <Text style={{ fontSize: 13, color: "white" }}>{ plans.budgets[6].amount }</Text>
                        </View>
                    </View>
                <View style={{ flex: 4, backgroundColor: "white", padding: "5%", marginTop: 5 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}> 
                        <Text style={{ fontSize: 20, color: "#6F1A1D" }}>OUTCOMES : </Text>
                        <TouchableHighlight onPress={ () => props.navigation.navigate('Add',{id: plans._id}) }>
                            <Icon name="plus" style={{ fontSize: 20, color: "#6F1A1D" }}> </Icon>
                        </TouchableHighlight>
                    </View>
                    <ScrollView>
                        <Text>
                        </Text>
                        {
                            plans.outcome.map((item) => {
                                return <TrxCard key={item._id} navigation={ props.navigation } plans={item} />
                            })
                        }
                    </ScrollView>

                </View>
            </View>
            </View>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(home)
