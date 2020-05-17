const path = require('path')
const express = require('express')
// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const app = express(); //Express is a function which doesn't take any parameters instead configure the server by using various methods provided on the application 

//Define Paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates')

//Setup handlebars engine view and location
app.set('view engine','hbs')// view engine setup
app.set('views',viewsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.send('<h1>Hello Express</h1>')
// })

// app.get('/help',(req,res) =>{
//     res.send([{
//         name : 'Soumya'
//     },{
//         name: 'sian'
//     }])
// });

// app.get('/about',(req,res)=>{
//     res.send('<title>About</title> <h1>About</h1>')
// })

app.get('',(req,res)=>{
    res.render('index',{
        title : 'Weather App',
        name : 'Soumya'
    })  //Render hbs view
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'About Me',
        name : 'Soumya'
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        message : 'This is some helpful text'
    })
});

app.get('/weather',(req,res)=>{
    res.send({forcast : 'It is Raining',location:'Pune'})
})
app.listen(3000, () => {
    console.log('Server is up and running')
})