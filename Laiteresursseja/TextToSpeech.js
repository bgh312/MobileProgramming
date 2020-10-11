import * as React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Button, TextInput } from 'react-native'
import Constants from 'expo-constants'
import * as Speech from 'expo-speech'

export default function App() {
  const [text, setText] = useState('')

  var output = Speech.speak(text)

    return (
      <View style={styles.container}>
        <TextInput
        style={{height: 40}}
        placeholder="Write something"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
        <Button title="Press to listen" onPress = {output} />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});