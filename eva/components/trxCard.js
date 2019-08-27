import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { deleteOutcome } from '../store/actions'

const mapActionToProps = { deleteOutcome }

const trxCard = (props) => {
    let { navigation, plans } = props
    // console.log(plans,'pppppppp')
    
    function deleteoutcome(id){
        props.deleteOutcome(id)
    }
    return (
        <View style={{ backgroundColor: "#E0115F", marginTop: 10, borderRadius: 10, padding: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 14, color: "white" }}> {plans.category} </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableHighlight onPress={ () => navigation.navigate('Detail', { plans: plans }) }>
                        <Icon name="edit" style={{ fontSize: 20, color: "white", marginRight: 10 }}> </Icon>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ () => {deleteoutcome(plans._id)}}>
                        <Icon name="trash" style={{ fontSize: 20, color: "white" }}> </Icon>   
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, color: "white" }}> {plans.note} </Text>
                <Text style={{ fontSize: 20, color: "white" }}>{plans.amount}</Text>
            </View>
        </View>
    )
}

export default connect(null,mapActionToProps)(trxCard)
