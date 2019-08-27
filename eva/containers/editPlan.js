import React, {useState, useEffect} from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Form, Item, Input, Label } from 'native-base'
import { editPlan } from '../store/actions'

const mapStateToProps = (state) => {
    return {
        title : state.Outcome.title,
        category: state.Outcome.category,
        price: state.Outcome.price,
        error: state.Plan.error
    }
}

const mapActionToProps = { editPlan }

const Formeditplan = (props) => {
    const [income, setIncome] = useState('')
    const [personal, setPersonal] = useState('')
    const [fb, setFb] = useState('')
    const [transport, setTransport] = useState('')
    const [entertainment, setEntertainment] = useState('')
    const [education, setEducation] = useState('')
    const [health, setHealth] = useState('')
    const [bills, setBills] = useState('')  
    const [other, setOther] = useState('')  

    function getIncome(text){
        setIncome(text)
    }
    const {state} = props.navigation

    useEffect(()=> {
        props.navigation.setParams({
            income: "",
            editPlan: props.editPlan,
            budgets : []
        })
    }, [])

    useEffect(()=> {
        setIncome(String(state.params.plans.income))
        state.params.plans.budgets.forEach(el => {
            if(el.category == "Food & Beverages"){
                setFb(String(el.amount))
            }else if(el.category == "Bills"){
                setBills(String(el.amount))
            }else if(el.category == "Education"){
                setEducation(String(el.amount))
            }
            else if(el.category == "Entertainment"){
                setEntertainment(String(el.amount))
            }
            else if(el.category == "Transportation"){
                setTransport(String(el.amount))
            }
            else if(el.category == "Health"){
                setHealth(String(el.amount))
            }
            else if(el.category == "Personal Care"){
                setPersonal(String(el.amount))
            }
            else if(el.category == "Other"){
                setOther(String(el.amount))
            }
        });
        
    }, [])
     useEffect(()=> {
        state.params.plans.budgets.forEach(el => {
            if(el.category == "Food & Beverages"){
                el.amount = fb
            }else if(el.category == "Bills"){
                el.amount = bills
            }else if(el.category == "Education"){
                el.amount = education
            } else if(el.category == "Transportation"){
                el.amount = transport
            }
            else if(el.category == "Entertainment"){
                el.amount = entertainment
            }
            else if(el.category == "Health"){
                el.amount = health
            }
            else if(el.category == "Personal Care"){
                el.amount = personal
            }
            else if(el.category == "Other"){
                el.amount = other
            }
        });
        state.params.income = income
        state.params.budgets = state.params.plans.budgets
     },[income,personal,fb,entertainment,education,health,bills,other])

     if(props.error){

     }

    return (
        <Container style={{ flex: 1 }}>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Income</Label>
                        <Input onChangeText={(text)=> { getIncome(text) }} value={income}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Personal Care</Label>
                        <Input onChangeText={(text)=> { setPersonal(text) }} value={personal}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Food & Beverages</Label>
                        <Input onChangeText={(text)=> { setFb(text) }} value={fb}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Entertainment</Label>
                        <Input onChangeText={(text)=> { setEntertainment(text) }} value={entertainment}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Transportation</Label>
                        <Input onChangeText={(text)=> { setTransport(text) }} value={transport}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Education</Label>
                        <Input onChangeText={(text)=> { setEducation(text) }} value={education}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Health</Label>
                        <Input onChangeText={(text)=> { setHealth(text) }} value={health}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Bills</Label>
                        <Input onChangeText={(text)=> { setBills(text) }} value={bills}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Other</Label>
                        <Input onChangeText={(text)=> { setOther(text) }} value={other}/>
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}

Formeditplan.navigationOptions = (props) => ({
    title: 'Edit Plan',
    headerTitleStyle: {
        color: "#6F1A1D"
    },
    headerTintColor: "#6F1A1D",
    headerRight: (
        <Text onPress={() => {
            props.navigation.state.params.editPlan({id: props.navigation.state.params.plans._id, income: props.navigation.state.params.income, budgets: props.navigation.state.params.budgets}),
            props.navigation.navigate("Home");
        }} style={{ marginRight: 5, fontSize: 16, fontWeight: "500", color: "#6F1A1D" }} > Submit </Text>
    )
})

export default connect(mapStateToProps,mapActionToProps)(Formeditplan)
