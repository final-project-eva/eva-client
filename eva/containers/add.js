import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import Form from '../components/form'
import { addOutcome } from '../store/actions'

const mapStateToProps = (state) => {
    return {
        title : state.Outcome.title,
        category: state.Outcome.category,
        price: state.Outcome.price
    }
}

const mapActionToProps = { addOutcome }

class add extends React.Component {
    constructor(){
        super()
    }
    componentDidMount() {
        this.props.navigation.setParams({
            addOutcome: this.props.addOutcome,
            title: this.props.title,
            category: this.props.category,
            price: this.props.price
        })
    }
    render() {
        const {state} = this.props.navigation
        
        state.params.title = this.props.title
        state.params.category = this.props.category
        state.params.price = this.props.price
        
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

    static navigationOptions = ({ navigation }) => {

        const {state} = navigation

        return {
            title: 'Add Outcome',
            headerTitleStyle: {
                color: "#6F1A1D"
            },
            headerTintColor: "#6F1A1D",
            headerRight: (
                <Text onPress={() => {state.params.addOutcome({note: state.params.title, category: state.params.category, amount: state.params.price, date: new Date(), planningId: navigation.state.params.id }),
                navigation.navigate("Home"), console.log(state.params.price);
                
                }} style={{ marginRight: 5, fontSize: 16, fontWeight: "500", color: "#6F1A1D" }} > Submit </Text>
            )

        }
    }
}

export default connect(mapStateToProps,mapActionToProps)(add)
