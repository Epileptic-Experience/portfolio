var express = require('express');
var app = express();
var reload = require('reload')
var path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root
app.listen(9000, () => {

  console.log(`Listening on port 9000`);
})

reload(app);
