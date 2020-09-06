import React from 'react'
import {useState }from 'react'
import { StyleSheet, View, Button, Alert, TextInput } from 'react-native'

export default function app(){

  let[text1 , setText1] = useState('')

  GenerateRandomNumber = () => {
  var RandomNumber = Math.floor(Math.random() * 100) + 1 
    if (text1 === RandomNumber) {
      return Alert.alert('You guessed it!')
    }
    else if (text1 > RandomNumber) {
      return Alert.alert('Your guess ' + text1 + ' is too high!')
    } 
    else (text1 < RandomNumber); {
      return Alert.alert('Your guess ' + text1 + ' is too low')
    }
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

    <TextInput
      keyboardType = 'numeric'
      style={{width:200  , borderColor: 'gray', borderWidth: 1}}
      onChangeText={text1 => setText1(text1)}
      value={text1}
      />

    <Button onPress={GenerateRandomNumber}title="Guess"/>

    </View >
);
}
