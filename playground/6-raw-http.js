const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=adb7011c4a245411317a5e01f2e75779&query=13.6235,74.6917&units=m'

const request = http.request(url, (response) => {

    let data = ''

   response.on('data', (chunck) => {
       data = data + chunck.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error' , (error) =>{
    console.log('An error',error)
})


request.end();

