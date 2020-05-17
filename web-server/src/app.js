const express = require('express')

const app = express(); //Express is a function which doesn't take any parameters instead configure the server by using various methods provided on the application 

app.get('', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

app.get('/help',(req,res) =>{
    res.send([{
        name : 'Soumya'
    },{
        name: 'sian'
    }])
});

app.get('/about',(req,res)=>{
    res.send('<title>About</title> <h1>About</h1>')
})

app.get('/weather',(req,res)=>{
    res.send({forcast : 'It is Raining',location:'Pune'})
})
app.listen(3000, () => {
    console.log('Server is up and running')
})