import React from 'react'
import {useState }from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native'

export default function app(){

const[text, setText] = useState('')
const[text1, setText1] = useState('')
const[data, setData] = useState([])

const add = () => {
  setData([...data, {key:text}])
  setText(text1)
}

const clear = () => {
  setData([...data, {key:text}])
  setText('')
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
});

return (
  <View 
    style={styles.container}>

    <Text>
      Shopping list
    </Text>
      
    <FlatList 
    data={data}
    renderItem={({item}) =>
    <Text>{item.key}</Text>}
    />

    <TextInput
      keyboardType = 'default'
      style={{width:200  , borderColor: 'gray', borderWidth: 1}}
      onChangeText={text1=>  setText1(text1)}
      value={text1}
      />

    <Button onPress={add}title="Add"/>
    <Button onPress={clear}title="Clear"/>

  </View >
);
}
