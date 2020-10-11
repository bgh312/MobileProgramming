import * as React from 'react'
import * as Contacts from'expo-contacts'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { View, StyleSheet, Button, Text, FlatList } from 'react-native'

export default function App () {
  const [contact, setContact] = useState({})

const getContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync()
  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers]
    })
    
    if (data.length > 0) {
      setContact(data)
    }
  }
}

return (
<View style={styles.container}>
  <FlatList 
    style={{marginLeft : "5%"}}
    keyExtractor={item => item.id.toString()} 
    renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.contact}</Text>
    </View>} 
    data={contact}
  />
  <Button title ='Get Contact' onPress={getContacts} />
  <StatusBar style='auto' />
</View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listcontainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
   },
});

//[Contacts.Fields.Name]