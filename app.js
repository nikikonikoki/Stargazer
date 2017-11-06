const express = require('express')
const { twig } = require('twig')

const app = express()

app.set('view engine', 'twig')


const homeController = require('./controllers/home.controller')
const solarSystemController = require('./controllers/solarSystem.controller')
const starsController = require('./controllers/stars.controller')
const mysolarController = require('./controllers/mysolar.controller')
const zodiacController = require('./controllers/zodiac.controller')
const stargroupController = require('./controllers/stargroup.controller')
const starlController = require('./controllers/starl.controller')
const loadController = require('./controllers/load.controller')

 

// app.get('/', homeController.index)
// app.get('/our-solar-system', solarSystemController.index)
// app.get('/our-star', starsController.index)
// app.get('/our-mysolar', mysolarController.index)
// app.get('/our-zodiac',zodiacController.index)
// app.get('/our-stargroup',stargroupController.index)
// app.get('/our-starline',starlController.index)
// app.get('/our-load',loadController.index)


app.get('/home', homeController.index)
app.get('/our-solar-system', solarSystemController.index)
app.get('/our-star', starsController.index)
app.get('/our-mysolar', mysolarController.index)
app.get('/our-zodiac',zodiacController.index)
app.get('/our-stargroup',stargroupController.index)
app.get('/our-starline',starlController.index)
app.get('/',loadController.index)


app.use('/assets', express.static(__dirname + '/static/assets', { maxAge: 86400000 }))
app.use('/images', express.static(__dirname + '/static/images', { maxAge: 86400000 }))

app.use('/archive', express.static(__dirname + '/archive', { maxAge: 0 }))

module.exports = app
