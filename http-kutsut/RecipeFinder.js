import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native'

export default function App() {
  const [ingredients, setIngredients] = useState('')
  const [title, setTitle] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [results, setResults] = useState([])

  const getResults = () => {
    const url = 'http://www.recipepuppy.com/api/?ingredients='+ ingredients;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => { 
       setResults(responseJson);
    })
    .catch((error) => { 
      Alert.alert('Error' , error); 
    }); 
  }
  
  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList 
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.id} 
        renderItem={({item}) => <Text>{item.title}, {item.thumbnail}</Text>} 
        ItemSeparatorComponent={listSeparator}
        data={results} 
      />  
      <TextInput 
        style={{fontSize: 18, width: 200}} 
        value={ingredients} 
        placeholder="Ingredients"
        onChangeText={(ingredients) => setIngredients(ingredients)} 
      />
     <Button title="Find" onPress={getResults} />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
});