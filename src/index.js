import express from 'express'
import mongoose from 'mongoose'
import routerApi from './api'

const server = express()

if (__DEV__) {
  const webpack = require('../webpack.server').default
  webpack(server)
  server.use(express.static('src/static'));
} else {
  server.use(express.static('dist'));
  server.use(express.static('lib/static'));
}

//connect to mogodb
const url = global.CONFIG.connectionString;
mongoose.Promise = require('bluebird');
mongoose.connect(url, {
  useMongoClient: true
});

//routing api
server.use('/api', routerApi)

//routing pages
server.all('*', async (req, res) => {
  //rendering on serverside
  const { render } = require('./server')
  const { status, redirect, body } = await render(req.path)
  //load page
  res.send(body);
});

export default server
