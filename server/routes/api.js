const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const Dressing = require('../models/dressing')
const jwt = require('jsonwebtoken')
const db = "mongodb://marine:Aviateur1@ds141720.mlab.com:41720/dressstyle";
var userCurrent="";
// mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')
    }
});

router.post('/adddressing', (req, res) =>{
    let addDressingData=req.body
    let dressing= new Dressing(addDressingData)
    dressing.userName= userCurrent;

    dressing.save((err, dressingadd) =>{
      if (err) {
        console.log(error)
      }else{
        res.status(200).send(dressing)
      }
    })
})

router.get('/dressings', (req, res, next) => {
  console.log('ok')
  Dressing.find({userName: userCurrent}, function (err, dressings){
    if (err) return next(err);
    if (dressings) {
      res.json(dressings);
      console.log(req.body.value);
    }

  })
})

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        userCurrent=user.email;
        console.log(userCurrent)

        authentificate(user, res);
      }
    }
  })
})

function authentificate(user, res){
  let payload = {subject: user.email}
  let token=jwt.sign(payload, 'secretKey')
  res.status(200).send(user)
}
module.exports = router;
