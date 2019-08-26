import React, { useState } from 'react'
// import { View, Text, Picker, TouchableHighlight } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Picker, Icon, Header, Left, Button, Body, Right, Title } from 'native-base'

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
                        <Label>Price</Label>
                        <Input onChangeText={(text)=> { getEmail(text) }} value={price}/>
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

export default form
