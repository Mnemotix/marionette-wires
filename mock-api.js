var express = require('express');
var api = module.exports = express();

require('./api/auth')(api);
require('./api/books')(api);
require('./api/colors')(api);
