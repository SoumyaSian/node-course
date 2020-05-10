const request = require('request');

const forecast = (long, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=adb7011c4a245411317a5e01f2e75779&query=' + long + ',' + lat + '&units=m'

    request({ url: url, json: true }, (error, response)=>{
        if(error){
            callback('Unable to conncet weather service!');
        }else if(response.body.error){
            callback('Unable to find location')
        }else{
            callback(undefined,{
                weather_descriptions : response.body.current.weather_descriptions[0],
                current_temperature : response.body.current.temperature,
                feelslike_temperature : response.body.current.feelslike
            })
        }

    })

}

module.exports = forecast