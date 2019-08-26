import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Container, Content, Form, Item, Input, Label } from 'native-base'

const form = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    return (
        <Container style={{ flex: 1 }}>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Title</Label>
                        <Input onChangeText={(text)=> { getFirstname(text) }} value={title}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Category</Label>
                        <Input onChangeText={(text)=> { getLastname(text) }} value={category}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Price</Label>
                        <Input onChangeText={(text)=> { getEmail(text) }} value={price}/>
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}

export default form
