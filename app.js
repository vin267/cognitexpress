//'use strict';
global.fetch = require('node-fetch')
require('dotenv').config();
const Cognito = require('./cognito/index');
const { verify } = require('./cognito/index');
const routes = require("./routes");




//Signup();
//Verify();
//SignIn();
