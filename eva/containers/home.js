import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'native-base'
import { View, Text, ScrollView, Dimensions, Image, TouchableHighlight, AsyncStorage } from 'react-native'
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
    const {firstname, lastname, phone_number} = props.Users
    const arrData = []
    const [totalOutcome, settotalOutcome] = useState(0)
    let overbudget = 0

    useEffect( () => {
        if (plans) {
            let total = countTotal(plans.outcome)
            settotalOutcome(total)
            if (totalOutcome > plans.income) {
                overbudget = totalOutcome - plans.income
            }
        }
    })

    countTotal = (arr) => {
        let total = 0
        arr.forEach(element => {
            total += element.amount
        })
        return total
    }       

    if(plans === undefined){
        return (
            <View style={{flex:1, justifyContent: "center"}}>
                <Spinner color='red' />
            </View>
        )
    } else {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: "3%", paddingBottom: "0%", flexDirection: "row", maxHeight: "10%"}}>
                    <View style={{ flex: 1 }}>
                        <Image source={require('../containers/logo.png')} style={{ width: 50, height: 50}} />
                    </View>
                    <View style={{ flex: 6, alignItems: "flex-end", height: 50}}>
                        <Text style={{ fontSize: 18, color: "#6F1A1D" }}> {firstname +' '+ lastname} </Text>
                        <View style={{ flexDirection: "row", marginTop: 3, justifyContent: "space-between" }}>
                            <Icon name="chevron-left" style={{ fontSize: 20, color: "#6F1A1D" }}> </Icon>
                            <Text style={{ fontSize: 16, color: "#E03C31" }}> August 2019 </Text>
                            <Icon name="chevron-right" style={{ fontSize: 20, color: "#6F1A1D" }}> </Icon>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 2, backgroundColor: "#6F1A1D", flexDirection: "row", alignItems: "center", alignContent: "space-around",  paddingLeft: "5%", paddingRight: "5%", maxHeight: "10%" }}>
                    <View style={{ flex: 1, borderColor: "white", borderRightWidth: 3, padding: 5, alignItems: "center" }}> 
                        <Text style={{ fontSize: 16, color: "white" }}>INCOME</Text>
                        <Text style={{ fontSize: 16, color: "white" }}>{plans.income}</Text>
                    </View>
                    <View style={{ flex: 1, borderColor: "white", borderRightWidth: 3, padding: 5, alignItems: "center" }}> 
                        <Text style={{ fontSize: 16, color: "white" }}>OUTCOME</Text>
                        <Text style={{ fontSize: 16, color: "white" }}>{ totalOutcome }</Text>
                    </View>
                    <View style={{ flex: 1, borderColor: "white", alignItems: "center" }}> 
                        <Text style={{ fontSize: 16, color: "white" }}>BALANCE</Text>
                        <Text style={{ fontSize: 16, color: "white" }}>{ plans.income - totalOutcome }</Text>
                    </View>
                    <View style={{ padding: 5, alignItems: "flex-end" }}> 
                        <TouchableHighlight onPress={ () => props.navigation.navigate('Edit', {plans: plans}) }>
                            <Icon name="edit" style={{ fontSize: 20, color: "white", textAlign: "right" }}> </Icon>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{ flex: 4, backgroundColor: "#6F1A1D", paddingLeft: "5%", paddingRight: "5%", marginTop: "0.5%" }}>
                    <View style={{ flex: 1, maxHeight: "7%", padding: 0, flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", padding: "1.5%" }}>
                        <Text style={{ color: "white", fontSize: 18 }}>Budgeting: </Text>
                        <Text style={{ color: "white", fontSize: 18 }}>Overbudget: { overbudget } </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", width: "100%", alignItems: "center", alignContent: "space-around", padding: "0,5%", marginTop: "2%" }}>
                        {
                            plans.budgets.map( (el) => {
                                return (
                                    <View style={{ width: "25%", padding: "1%", maxHeight: "60%" }}>
                                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderColor: "white", borderRadius: 5, borderWidth: 3, marginLeft: "0.5%", marginRight: "0.5%", marginBottom: "1%", height: "3%" }}> 
                                            <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>{ el.category }</Text>
                                            <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>{ el.amount }</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View style={{ flex: 2, backgroundColor: "white", padding: "3%", paddingBottom: "0.5%", marginTop: 5, borderRadius: 10, marginTop: "5%" }}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", maxHeight: "10%" }}> 
                            <Text style={{ fontSize: 20, color: "#6F1A1D" }}>OUTCOMES : </Text>
                            <TouchableHighlight onPress={ () => props.navigation.navigate('Add',{id: plans._id}) }>
                                <Icon name="plus" style={{ fontSize: 20, color: "#6F1A1D" }}> </Icon>
                            </TouchableHighlight>
                        </View>
                        <ScrollView style={{ flex: 5, height: "100%" }}>
                            {
                                plans.outcome.map((item) => {
                                    arrData.unshift(item)
                                })
                            }
                            {
                                arrData.map((item)=> {
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
