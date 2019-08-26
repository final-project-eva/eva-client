import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Container, Content, Form, Item, Input, Label } from 'native-base'
import { getFromForm } from '../store/actions'

const mapStateToProps = (state) => {
    return {
        title : state.Outcome.title,
        
    }
}

const mapActionToProps = { getFromForm }

const form = (props) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
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
                        <Label>Category</Label>
                        <Input onChangeText={(text)=> { getCategory(text) }} value={category}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Price</Label>
                        <Input onChangeText={(text)=> { getPrice(text) }} value={price}/>
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}

export default connect(mapStateToProps,mapActionToProps)(form)
