import React from 'react'
import {useState }from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native'

export default function app(){

const[input, setInput] = useState('')
const[list, setList] = useState([])

const add = () => {
  setList([...list, {key: String(list.length), text:input}])
  setInput('')
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  }
});

return (
  <View 
    style={styles.container}>

    <FlatList
      ListHeaderComponent={() => <Text style={{ color: 'blue', fontWeight: 'bold'}}>Shopping list</Text>}
      data={list}
      renderItem={({ item }) => <Text style={{ alignSelf: 'center' }}>{item.text}</Text>}
    ></FlatList>

    <TextInput
      keyboardType = 'default'
      style={{width:200  , borderColor: 'gray', borderWidth: 1}}
      onChangeText={text=>  setInput(text)}
      value={input}
    />

    <Button onPress={add} title="Add"/>
    <Button onPress={() => setList([])} title="Clear"/>

  </View >
);
}
