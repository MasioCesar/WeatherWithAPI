import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import axios, * as others from 'axios';

const apiKey = '91db4355261c57356fea409339c389aa';
const base_Url = 'https://api.openweathermap.org/data/2.5/weather?'

export default async function getCurrentWeather(locationCoords) {

    const lat = locationCoords.latitude
    const log = locationCoords.longitude
    console.log(locationCoords.latitude)
    var results = []

        
    await axios.get(`${base_Url}lat=${lat}&lon=${log}&units=metric&appid=${apiKey}`)
        .then((response) => {

            const data = response.data
            const locationName = (data.sys.country + ', ' + ' ' + data.name)
            const tempMin = data.main.temp_min
            const tempMax = data.main.temp_max
            const wind = data.wind.speed
            const humidity = data.main.humidity
            const currentTemperature = data.main.temp

            results = [currentTemperature, humidity, wind, tempMax, tempMin, locationName,]

            console.log(results)

        })
        .catch(function (error) {
            console.log(error);
          })


    return (
        results
    )
}

// const { latitude, longitude } = location.coords
// alert(`latitude : ${latitude}, Longitude: ${longitude}`)

// const url = `${base_Url}lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
// console.log(url)
// const response = await fetch(url)

// const result = await response.json()

// if (response.ok) {
//     setCurrentWeather(result)
// } else {
//     setErrorMessage(result.message)
// }