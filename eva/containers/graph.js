import React, {useEffect, useState} from 'react'
import { View, Text, Dimensions, Image, AsyncStorage } from 'react-native'
import { PieChart } from 'react-native-chart-kit'
import Icon from 'react-native-vector-icons/FontAwesome'
import { getPlans, getUsers } from '../store/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        Plans : state.Plan.plans,
        Users : state.User.users,
        title : state.Outcome.title,
        category: state.Outcome.category,
        price: state.Outcome.price
    }
}

const mapActionToProps = { getPlans, getUsers }

const history = (props) => {
    useEffect(()=> {
        AsyncStorage.getItem("token", function(err, data){
            props.getUsers(data)
        })
    },[])
    useEffect(()=>{
        refreshPlan()
    }, [])

    let plans = props.Plans[0]
    const {firstname, lastname, phone_number} = props.Users
    const [totalOutcome, settotalOutcome] = useState(0)
    const [FB, setFB] = useState(0)
    const [transport, settransport] = useState(0)
    const [education, seteducation] = useState(0)
    const [health, sethealth] = useState(0)
    const [entertainment, setentertainment] = useState(0)
    const [bills, setbills] = useState(0)
    const [PC, setPC] = useState(0)
    const [other, setother] = useState(0)

    useEffect(() => {
        if (plans) {
            let total = countOutcome(plans.outcome)
            settotalOutcome(total)
            if (totalOutcome > plans.income) {
                overbudget = totalOutcome - plans.income
            }
            let outcomeCategory = countTotal(plans.outcome)
            const { FB, Bills, Education, Entertainment, Health, PC, Transport, Other } = outcomeCategory
            setFB(FB)
            settransport(Transport)
            seteducation(Education)
            sethealth(Health)
            setentertainment(Entertainment)
            setbills(Bills)
            setPC(PC)
            setother(Other)
        }
    },[ plans.outcome ])

    refreshPlan = async () => {
        await props.getPlans()
    }

    countOutcome = (arr) => {
        let total = 0
        arr.forEach(element => {
            total += element.amount
        })
        return total
    }  

    const countTotal = (arr) => {
        let FB = 0
        let Transport = 0
        let Education = 0
        let Health = 0
        let Entertainment = 0
        let Bills = 0
        let PC = 0
        let Other = 0
        arr.forEach(element => {
            if (element.category === 'food & beverages') {
                FB += element.amount
            } else if (element.category === 'bills') {
                Bills += element.amount
            } else if (element.category === 'education') {
                Education += element.amount
            } else if (element.category === 'entertainment') {
                Entertainment += element.amount
            } else if (element.category === 'health'){
                Health += element.amount
            } else if (element.category === 'personal care'){
                PC += element.amount
            } else if (element.category === 'transportation'){
                Transport += element.amount
            } else if (element.category === 'others'){
                Other += element.amount
           } 
        })
        let data = {FB, Bills, Education, Entertainment, Health, PC, Transport, Other}
        console.log(data, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        return data
    }
    console.log(FB, transport, education, health, entertainment, bills, PC, other)
    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2
    }
    const screenWidth = Dimensions.get('window').width - 10
    const dataComparison= [
        { name: 'Balance', population: plans.income - totalOutcome, color: '#009F00', legendFontColor: '#6F1A1D', legendFontSize: 14 },
        { name: 'Outcome', population: totalOutcome, color: '#6F1A1D', legendFontColor: '#6F1A1D', legendFontSize: 14 },
    ]
    const allData = [
        { name: 'Food & Beverages', population: FB, color: '#5668E2', legendFontColor: '#6F1A1D', legendFontSize: 10 },
        { name: 'Transportation', population:  transport, color: '#56AEE2', legendFontColor: '#6F1A1D', legendFontSize: 10 },
        { name: 'Health', population:  health, color: '#AEE256', legendFontColor: '#6F1A1D', legendFontSize: 10 },
        { name: 'Entertainment', population:  entertainment, color: '#56E289', legendFontColor: '#6F1A1D', legendFontSize: 10 },
        { name: 'Bills', population:  bills, color: '#E256AE', legendFontColor: '#6F1A1D', legendFontSize: 10 },
        { name: 'Personal Care', population:  PC, color: '#E2CF56', legendFontColor: '#6F1A1D', legendFontSize: 10 },
        { name: 'Education', population:  education, color: '#E28956', legendFontColor: '#6F1A1D', legendFontSize: 10 },
        { name: 'Others', population:  other, color: '#CF56E2', legendFontColor: '#6F1A1D', legendFontSize: 10 },
    ]

    if(plans === undefined){
        return (
            <Text>loading..</Text>
        )
    } else {
        return (
            <View style={{ flex: 1 }}>
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
                    <View style={{ flex: 1, backgroundColor: "#6F1A1D", flexDirection: "row", alignItems: "center", alignContent: "space-around",  paddingLeft: "3%", paddingRight: "3%"  }}>
                        <View style={{ flex: 3, borderRightColor: "white", borderRightWidth: 3, padding: 5, alignItems: "center" }}> 
                            <Text style={{ fontSize: 14, color: "white" }}>INCOME</Text>
                            <Text style={{ fontSize: 14, color: "white" }}>{plans.income}</Text>
                        </View>
                        <View style={{ flex: 3, borderRightColor: "white", borderRightWidth: 3, padding: 5, alignItems: "center" }}> 
                            <Text style={{ fontSize: 14, color: "white" }}>OUTCOME</Text>
                            <Text style={{ fontSize: 14, color: "white" }}>{ totalOutcome }</Text>
                        </View>
                        <View style={{ flex: 3, borderRightColor: "white", borderRightWidth: 3, padding: 5, alignItems: "center" }}> 
                            <Text style={{ fontSize: 14, color: "white" }}>BALANCE</Text>
                            <Text style={{ fontSize: 14, color: "white" }}>{plans.income - totalOutcome}</Text>
                        </View>
                        <View style={{ flex: 4, padding: 5, alignItems: "center"}}> 
                            <Text style={{ fontSize: 14, color: "white", textAlign: "center" }}>OVER BUDGET</Text>
                            <Text style={{ fontSize: 14, color: "white" }}>{ plans.overBudget }</Text>
                        </View>
                    </View>
                    <View style={{ flex: 3, backgroundColor: "white", alignItems: "center", borderTopColor: "#6F1A1D", borderTopWidth: 1 }}>
                        <Text style={{ fontSize: 20, fontWeight: "500", color: "#6F1A1D", marginTop: 20 }}> Monthly Outcome's Graph </Text>
                        <PieChart data={allData} width={screenWidth} height={200} chartConfig={chartConfig} accessor="population" backgroundColor="transparent" paddingLeft="1" absolute />
                    </View>
                    <View style={{ flex: 3, backgroundColor: "white", alignItems: "center"}}>
                        <Text style={{ fontSize: 20, fontWeight: "500", color: "#6F1A1D", marginTop: 20 }}> Comparison Graph </Text>
                        <PieChart data={dataComparison} width={screenWidth} height={175} chartConfig={chartConfig} accessor="population" backgroundColor="transparent" paddingLeft="1" absolute />
                    </View>
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(history)
