import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { deleteOutcome } from '../store/actions'

const mapActionToProps = { deleteOutcome }

const trxCard = (props) => {
    let { navigation, plans } = props
    
    function deleteoutcome(id){
        props.deleteOutcome(id)
    }

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
    }

    return (
        <View style={{ backgroundColor: "#E0115F", marginTop: 8, borderRadius: 10, padding: 5 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, color: "white" }}> {titleCase(plans.category)} </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableHighlight onPress={ () => navigation.navigate('Detail', { plans: plans }) }>
                        <Icon name="edit" style={{ fontSize: 20, color: "white", marginRight: 10 }}> </Icon>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ () => {deleteoutcome({id: plans._id, planId: plans.planningId})}}>
                        <Icon name="trash" style={{ fontSize: 20, color: "white" }}> </Icon>   
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 20, color: "white" }}> {plans.note} </Text>
                <Text style={{ fontSize: 20, color: "white" }}>{plans.amount}</Text>
            </View>
        </View>
    )
}

export default connect(null,mapActionToProps)(trxCard)
