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
const helpController = require('./controllers/help.controller')
const inforController = require('./controllers/infor.controller')
const smallbController = require('./controllers/smallb.controller')
const bigbController = require('./controllers/bigb.controller')
const batController = require('./controllers/bat.controller')
const naipController = require('./controllers/naip.controller')
const nucketController = require('./controllers/nucket.controller')
const picaController = require('./controllers/pica.controller')


app.get('/home', homeController.index)
app.get('/our-solar-system', solarSystemController.index)
app.get('/our-star', starsController.index)
app.get('/our-mysolar', mysolarController.index)
app.get('/our-zodiac',zodiacController.index)
app.get('/our-stargroup',stargroupController.index)
app.get('/our-starline',starlController.index)
app.get('/',loadController.index)
app.get('/help',helpController.index)
app.get('/information',inforController.index)
app.get('/smallbear',smallbController.index)
app.get('/bigbear',bigbController.index)
app.get('/bat',batController.index)
app.get('/nai-pran',naipController.index)
app.get('/Look-kai',nucketController.index)
app.get('/Pigasus',picaController.index)

app.use('/assets', express.static(__dirname + '/static/assets', { maxAge: 86400000 }))
app.use('/images', express.static(__dirname + '/static/images', { maxAge: 86400000 }))

app.use('/archive', express.static(__dirname + '/archive', { maxAge: 0 }))

module.exports = app
