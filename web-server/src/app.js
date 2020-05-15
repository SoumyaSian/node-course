const express = require('express')

const app = express(); //Express is a function which doesn't take any parameters instead configure the server by using various methods provided on the application 

app.get('', (req, res) => {
    res.send('Hello Express')
})

app.get('/help',(req,res) =>{
    res.send('Help page')
});

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.get('/weather',(req,res)=>{
    res.send('Weather Page')
})
app.listen(3000, () => {
    console.log('Server is up and running')
})