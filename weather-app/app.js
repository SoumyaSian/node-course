// const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=adb7011c4a245411317a5e01f2e75779&query=13.6235,74.6917&units=m'

// request({ url: url, json: true }, (error, response) => {
//     // const data = JSON.parse(response.body);
//     // console.log(data.current)
//     // console.log(response.body.current)
//     if(error){
//         console.log('Unable to connect weather service')
//     }
//     else if (response.body.error) {
//         console.log('Unable to find location');
//     }else{
//         console.log(response.body.current.weather_descriptions[0]+'. It is currently ' + response.body.current.temperature + ' degrees out. And It feels like ' + response.body.current.feelslike + ' degrees out!')
//     }
// });

// const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Kundapur.json?access_token=pk.eyJ1Ijoic291bXlhc2lhbiIsImEiOiJjazl3Z3MydGIwOHd0M2txczhoYTAxeG9sIn0.gdtMife8R4ERcQbMnHlYMQ&limit=1';

// request({ url: geoCodeUrl, json: true }, (error, response) => {
//     // console.log(response.body)
//     if (error) {
//         console.log('Unable to conncet location service')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search')
//     } else {
//         console.log('Longitude and Latitude of Kundapur ' + response.body.features[0].center[0], response.body.features[0].center[1])
//     }
// });


//After changing with object shorthand and object destructuring
console.log(process.argv)

const address = process.argv[2];


if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }
        // console.log('Error',error);
        // console.log('Data',data)
        forecast(latitude, longitude, (error, {weather_descriptions,current_temperature,feelslike_temperature} = {}) => {
            if (error) {
                return console.log(error);
            }
            // console.log('Error', error)
            // console.log('Data', data)
            console.log(location)
            console.log(weather_descriptions + '. It is currently ' + current_temperature + ' degrees out. And It feels like ' + feelslike_temperature + ' degrees out!')
        })

    });
}

// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address, (error, data) => {
//         if (error) {
//             return console.log(error)
//         }
//         // console.log('Error',error);
//         // console.log('Data',data)
//         forecast(data.latitude, data.longitude, (error, forecastData) => {
//             if (error) {
//                 return console.log(error);
//             }
//             // console.log('Error', error)
//             // console.log('Data', data)
//             console.log(data.location)
//             console.log(forecastData.weather_descriptions + '. It is currently ' + forecastData.current_temperature + ' degrees out. And It feels like ' + forecastData.feelslike_temperature + ' degrees out!')
//         })

//     });
// }



// forecast(13.6235, 74.6917, (error, data) => {
//     console.log('Error', error)
//     // console.log('Data', data)
//     console.log(data.weather_descriptions+'. It is currently ' + data.current_temperature + ' degrees out. And It feels like ' + data.feelslike_temperature+ ' degrees out!')
// })



// console.log('Starting');
// setTimeout(() => {
//     console.log('2 seconds timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 second timer')
// }, 0)

// console.log('Stoping');