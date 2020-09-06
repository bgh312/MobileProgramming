import React from 'react'
import {useState }from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native'

export default function app(){

const[text, setText] = useState('')
const[text1, setText1] = useState('')
const[text2, setText2] = useState('')
const[data, setData] = useState([])

const sum = () => {
  setData([...data, {key:text}])
  setText('Result: ' + (+text1 + +text2))
}

const substraction = () => {
  setData([...data, {key:text}])
  setText('Result: ' + (+text1 - +text2))
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
      
    <FlatList 
    data={data}
    renderItem={({item}) =>
    <Text>{item.key}</Text>}
    />

    <TextInput
      keyboardType = 'numeric'
      style={{width:200  , borderColor: 'gray', borderWidth: 1}}
      onChangeText={text1=>  setText1(text1)}
      value={text1}
      />

    <TextInput
      keyboardType = 'numeric'
      style={{width:200  , borderColor: 'gray', borderWidth: 1}}
      onChangeText={text2=>  setText2(text2)}
      value={text2}
      />

    <Button onPress={sum}title="+"/>
    <Button onPress={substraction}title="-"/>

  </View >
);
}
