
'use strict';

require('dotenv').config();

const server = require('./src/server.js');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch((e) => {
    console.log('__CONNECTION ERROR__', e.message);
  });
