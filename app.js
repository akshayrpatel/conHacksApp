var express = require("express"),
    app = express(),
    request = require('request'),
    bodyparser = require('body-parser'),
    path = require('path');


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started...');
});
