var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var cors = require('cors');

var users = [
  {
    name: 'xxxx',
    password: 'xxxx'
  },
  {
    name: 'yyyy',
    password: 'yyyy'
  }
];
// allow parsing of posted data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// enable cors
app.use(cors());
// setup a directory to serve up static assets
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});
// this listens for a POST request to /login on the server ie localhost:3000/login. If it is accompanied by the right credentials it will generate and return a token
app.post('/login', (req, res) => {
  var message;
  for (var user of users) {
    if (user.name != req.body.name) {
      message = 'Wrong Name';
    } else {
      if (user.password != req.body.password) {
        message = 'Wrong Password';
        break;
      } else {
        //create the token.
        var token = jwt.sign(user, 'samplesecret');
        message = 'Login Successful';
        break;
      }
    }
  }
  //If token is present pass the token to client else send respective message
  if (token) {
    res.status(200).json({
      message,
      token
    });
  } else {
    res.status(403).json({
      message
    });
  }
});

app.post('/logout', (req, res) => {
  if (req.session.username) {
    req.session.destroy(() => {
      console.log('session destroyed');
    });
    res.send({ success: true });
  } else res.send({ success: false });
});

// middleware to check to make sure that all routes defined after this have a valid token with them.
app.use((req, res, next) => {
  // check header or url parameters or post parameters for token
  var token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    //Decode the token
    jwt.verify(token, 'samplesecret', (err, decod) => {
      if (err) {
        res.status(403).json({
          message: 'Wrong Token'
        });
      } else {
        //If decoded then call next() so that respective route is called.
        req.decoded = decod;
        next();
      }
    });
  } else {
    res.status(403).json({
      message: 'No Token'
    });
  }
});

app.post('/getusers', (req, res) => {
  var user_list = [];
  users.forEach(user => {
    user_list.push({ name: user.name });
  });
  res.send(JSON.stringify({ users: user_list }));
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
