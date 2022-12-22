import { TailwindProvider } from 'tailwindcss-react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './src/telas/Home';
import { Week } from './src/telas/Week';

import * as Location from 'expo-location'
import { useEffect, useState } from 'react';

import getCurrentWeather from './Api/ApiConsult'

const Stack = createStackNavigator();



export default function App() {

  const axios = require('axios')
  const [locationCoords, setLocationCoords] = useState();

  async function setCurrentWeather() {
    await getLocation()
    const data = await getCurrentWeather(locationCoords)


  }

  async function getLocation() {

    let { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      setErrorMessage('O acesso a localização é necessária para esse app')
    } else {
      let location = await Location.getCurrentPositionAsync({})
      getCurrentWeather(location.coords)
    }
  }

  useEffect(() => {
    setCurrentWeather()

  },[])

  async function setCurrentWeather() {
    await getLocation()
    const data = await getCurrentWeather(locationCoords)
  }



//if (currentWeather) {
//const { main: {temp}, } = currentWeather
//console.log(temp)}

return (

  <TailwindProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Week" component={Week} />
      </Stack.Navigator>
    </NavigationContainer>
  </TailwindProvider>

);

}