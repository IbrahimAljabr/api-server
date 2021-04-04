'use strict';


const express = require('express');
const morgan = require('morgan');

require('dotenv').config();
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const clothesRoute = require('./routes/clothes');
const foodRoute = require('./routes/food');


const app = express();


app.use(express.json());
app.use(morgan('dev'))

app.use('/api/v1/food/', foodRoute);
app.use('/api/v2/clothes/', clothesRoute);





app.use('*',notFoundHandler);
app.use(errorHandler);


module.exports = {
    server : app ,
    start : (port) =>{
        const PORT = process.env.PORT || 3000;
        app.listen(PORT , () =>{
            console.log('Server is here ==>',PORT);
        })
    }
}
