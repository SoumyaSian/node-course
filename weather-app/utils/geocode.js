const request = require('request');

const geocode = (address, callback) => {
    // encodeURIComponent() => convert the special character into encoded version of the character
    // For ex - ? becomes %3F
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic291bXlhc2lhbiIsImEiOiJjazl3Z3MydGIwOHd0M2txczhoYTAxeG9sIn0.gdtMife8R4ERcQbMnHlYMQ&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to conncet location service!');
        }else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search')
        }else {
            callback(undefined,{
                longitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name
            })
        }

    });
}

module.exports = geocode