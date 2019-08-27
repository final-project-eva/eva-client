import React, {useState} from 'react'
import { Text } from 'react-native'
import { Container, Content, Form, Item, Input, Label } from 'native-base'

const editPlan = (props) => {
    const [income, setIncome] = useState('')
    const [personal, setPersonal] = useState('')
    const [fb, setFb] = useState('')
    const [entertainment, setEntertainment] = useState('')
    const [education, setEducation] = useState('')
    const [health, setHealth] = useState('')
    const [bills, setBills] = useState('')  
    const [other, setOther] = useState('')  
    return (
        <Container style={{ flex: 1 }}>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Income</Label>
                        <Input onChangeText={(text)=> { getFirstname(text) }} value={income}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Personal Care</Label>
                        <Input onChangeText={(text)=> { getEmail(text) }} value={personal}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Food & Beverages</Label>
                        <Input onChangeText={(text)=> { getEmail(text) }} value={fb}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Entertainment</Label>
                        <Input onChangeText={(text)=> { getEmail(text) }} value={entertainment}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Education</Label>
                        <Input onChangeText={(text)=> { getEmail(text) }} value={education}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Health</Label>
                        <Input onChangeText={(text)=> { getEmail(text) }} value={health}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Bills</Label>
                        <Input onChangeText={(text)=> { getEmail(text) }} value={bills}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Other</Label>
                        <Input onChangeText={(text)=> { getEmail(text) }} value={other}/>
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}

editPlan.navigationOptions = (props) => ({
    title: 'Edit Plan',
    headerTitleStyle: {
        color: "#6F1A1D"
    },
    headerTintColor: "#6F1A1D",
    headerRight: (
        <Text onPress={() => alert('This is a button!')} style={{ marginRight: 5, fontSize: 16, fontWeight: "500", color: "#6F1A1D" }} > Submit </Text>
    )
})

export default editPlan
