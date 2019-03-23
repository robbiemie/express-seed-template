var express = require('express')
var app = express()

app.use((request, response, next) => {
  if (request.url === '/') {
    response.send('Welcome to the homepage!')
  } else {
    next()
  }
})

app.use((request, response, next) => {
  console.log('获取请求参数', request.query)
  if (request.url === '/about') {
    response.send('Welcome to the about page!')
  } else {
    next()
  }
})
app.use((request, response) => {
  response.send('404 error!')
})
app.listen(80)
