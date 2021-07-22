const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')

const app = express()
const baseURL = 'https://www.metaweather.com/api'

app.use(cors())

app.get('/location/search', (req, res) => {
  fetch(baseURL + '/location/search/?query=' + req.query.query)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data })
    })
    .catch((err) => {
      res.send(err)
    })
})

app.get('/location/:woeid', (req, res) => {
  fetch(baseURL + '/location/' + req.params.woeid)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data })
    })
    .catch((err) => {
      res.send(err)
    })
})

const server = app.listen(4000, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
