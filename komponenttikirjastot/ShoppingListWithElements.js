import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import * as SQLite from 'expo-sqlite'
import { Header, Input, Button } from 'react-native-elements'

const db = SQLite.openDatabase('coursedb.db')

export default function App() {
  const [amount, setAmount] = useState('')
  const [product, setProduct] = useState('')
  const [shoppingList, setShoppingList] = useState([])

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists list (id integer primary key not null, amount text, product text);');
    });
    updateList();    
  }, []);

  const saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into list (amount, product) values (?, ?);', [(amount), product]);    
      }, null, updateList
    )
  }

  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from list;', [], (_, { rows }) =>
        setShoppingList(rows._array)
      ); 
    });
  }
  
  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from list where id = ?;`, [id]);
      }, null, updateList
    )    
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header 
        centerComponent={{ text: 'Shopping list', style: { color: '#fff' } }}
      />
      <Input placeholder='Product' style={{marginTop: 30, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(product) => setProduct(product)}
        value={product}/>  
      <Input placeholder='Amount' style={{ marginTop: 5, fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(amount) => setAmount(amount)}
        value={amount}/>      
      <Button titleStyle={{marginRight: 30, marginLeft: 30}} type='outline' onPress={saveItem} title="Save" /> 

      <FlatList 
        style={{marginTop : "10%"}}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18, marginRight: 7}}>{item.product}, {item.amount}</Text>
        <Button type='outline' titleStyle={{ marginBottom: 2 }} onPress={() => deleteItem(item.id)} title='Bought'></Button></View>} 
        data={shoppingList} 
        ItemSeparatorComponent={listSeparator} 
      />      
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
 listcontainer: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  alignItems: 'center'
 },
});