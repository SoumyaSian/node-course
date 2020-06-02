const path = require('path')
const express = require('express')
const hbs = require('hbs')
// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const app = express(); //Express is a function which doesn't take any parameters instead configure the server by using various methods provided on the application 

//Define Paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//Setup handlebars engine view and location
app.set('view engine', 'hbs')// view engine setup
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Soumya'
    })  //Render hbs view
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Soumya'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Soumya'
    })
});

app.get('/weather', (req, res) => {
    res.send({ forcast: 'It is Raining', location: 'Pune' })
})

app.get('/help/*', (req, res) => {
    // res.send('Help article not found')
    res.render('404', {
        title : '404',
        name:'Soumya',
        errorMsg: 'Help article not found'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title : '404',
        name:'Soumya',
        errorMsg: 'Page Not Found'
    })
})


app.listen(3000, () => {
    console.log('Server is up and running')
})