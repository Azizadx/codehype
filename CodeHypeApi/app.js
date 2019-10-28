const express = require('express');
const app = express();
const appconf = require('./config/appConfig')
const winston = require('winston');
const multer = require('multer');
app.use((req, res, next) => {
  // Control access to clients
  res.header('Access-Control-Allow-Origin', '*');

  // Control allowed headers
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if(req.method == 'OPTIONS') {
    // Set allowed HTTP methods
    req.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({})
  }
  next();
});


  //Routes
  require('./startUp/index')(app);
  //DataBase 
  require('./startUp/db')(app);
const port = appconf.HTTP_PORT;
app.listen(port, () => winston.info(`Server up and running on port ${port} `));