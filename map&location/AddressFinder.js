import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Button, TextInput } from 'react-native'


export default function App() {
  const [address, setAdress] = useState()
  const [region, setRegion] = useState(region, {
    latitude: 60.200692,
    longitude:24.934302,
    latitudeDelta: 0.0322,
    longitudeDelta:0.0221,
  },)

  const getAddress = () => {
    const url = 'http://www.mapquestapi.com/geocoding/v1/address'
    fetch(url)
    .then ((response) => response.json())
    .then ((data) => {
      setAdress(data.results)
    })
  }

  return (
    <MapView
    style={{ flex:1 }}
    region={region}
    >

    <Marker coordinate={{
      latitude:60.201373, 
      longitude: 24.934041}}
      title='Haaga-Helia'
    />

    <TextInput 
      style={{fontSize: 18, width: 200}} 
      value={address} 
      placeholder="Address"
      onChangeText={(address) => setAddress(address)} 
    />

    <Button title="Find" onPress={getAddress} />

    </MapView>
  );
}