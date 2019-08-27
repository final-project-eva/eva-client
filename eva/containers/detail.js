import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import Form from '../components/form'
import { editOutcome } from '../store/actions'

const mapStateToProps = (state) => {
    return {
        title : state.Outcome.title,
        category: state.Outcome.category,
        price: state.Outcome.price
    }
}

const mapActionToProps = { editOutcome }


const detail = (props) => {
    console.log(props,'props');
    
    // useEffect(()=> {
    //     props.navigation.setParams({
    //         editOutcome: props.editOutcome,
    //         title: props.title,
    //         category: props.category,
    //         price: props.price
    //     })
    // }, [])
    // useEffect(()=>{
    //     if(props.navigation.state.params.plans){
    //         props.title = props.navigation.state.params.plans.note
    //         props.category = props.navigation.state.params.plans.category
    //         props.price = props.navigation.state.params.plans.amount
    //     }
    // })
    // const {state} = props.navigation
        
    //     state.params.title = props.title
    //     state.params.category = props.category
    //     state.params.price = props.price

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

detail.navigationOptions = (props) => ({
    title: 'Edit Outcome',
    headerTitleStyle: {
        color: "#6F1A1D"
    },
    headerTintColor: "#6F1A1D",
    headerRight: (
        <Text onPress={() => {props.navigation.state.params.editOutcome({id: props.navigation.state.params.id,note: props.navigation.state.params.title, category: props.navigation.state.params.category, amount: props.navigation.state.params.price, date: new Date(), planningId: props.navigation.state.params.id }),
        navigation.navigate("Home"), console.log(props.navigation.state.params.price);
        }} style={{ marginRight: 5, fontSize: 16, fontWeight: "500", color: "#6F1A1D" }} > Submit </Text>
    )
})

export default connect(mapStateToProps,mapActionToProps)(detail)
