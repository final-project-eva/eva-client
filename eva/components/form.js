import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Picker, Icon, Header, Left, Button, Body, Right, Title } from 'native-base'
import { getFromForm } from '../store/actions'

const mapStateToProps = (state) => {
    return {
        title : state.Outcome.title,
        
    }
}

const mapActionToProps = { getFromForm }

const form = (props) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('Bills')
    const [price, setPrice] = useState('')

    useEffect(()=> {
        props.getFromForm({title: title, category: category, price: price})
    },[title,category,price])

    function getTitle(text){
        setTitle(text)
    }
    function getCategory(text){
        setCategory(text)
    }
    function getPrice(text){
        setPrice(text)
    }
    
    return (
        <Container style={{ flex: 1 }}>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Title</Label>
                        <Input onChangeText={(text)=> { getTitle(text) }} value={title}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Price</Label>
                        <Input onChangeText={(text)=> { getPrice(text) }} value={price}/>
                    </Item>
                    <Picker style={{ marginTop: 25 }} renderHeader={backAction =>
                        <Header style={{ backgroundColor: "white" }}>
                        <Left>
                            <Button transparent onPress={backAction}>
                            <Icon name="arrow-back" style={{ color: "#6F1A1D" }} />
                            </Button>
                        </Left>
                        <Body style={{ flex: 3 }}>
                            <Title style={{ color: "#fff" }}>Your Header</Title>
                        </Body>
                        <Right />
                        </Header>}
                    mode="dropdown" iosIcon={<Icon name="arrow-down" />} placeholder="Select Category" placeholderStyle={{ color: "#bfc6ea" }} 
                    placeholderIconColor="#007aff" selectedValue={category} onValueChange={(value)=> setCategory(value)} >
                        <Picker.Item label="Bills" value="Bills" />
                        <Picker.Item label="Education" value="Education" />
                        <Picker.Item label="Transportation" value="Transportation" />
                        <Picker.Item label="Entertainment" value="Entertainment" />
                        <Picker.Item label="Food & Beverages" value="Food & Beverages" />
                        <Picker.Item label="Health" value="Health" />
                        <Picker.Item label="Personal Care" value="Personal Care" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                </Form>
            </Content>
        </Container>
    )
}

export default connect(mapStateToProps,mapActionToProps)(form)
