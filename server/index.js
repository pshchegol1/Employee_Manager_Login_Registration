require ('dotenv').config();
let registerService = require('./services/registerService');
const loginService = require('./services/loginService');

//express-validator
const { check, validationResult } = require('express-validator');

//uuid
const { v4: uuidv4 } = require('uuid');

// express-session
const session = require('express-session');

//new id
const newId = uuidv4()

const express = require('express');
const path = require('path');
const cors = require('cors');

//json file
/* const users = require('./data/users.json'); */

const app = express();

const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.urlencoded({extended:true}))

app.use(express.json())

// ! SESSION==>
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

 // setup template Engine
 app.set('view engine', 'ejs')
 app.set('views', path.join(__dirname, './views'))


app.use(express.static(path.join(__dirname, "../client"), {extensions: ["html", 'htm']})
);

app.get('/dashboard', (req, res)=>{
  if(req.session.isValid)
  {
    res.render('dashboard')
  }
  else
  {
    res.sendFile(path.join(__dirname, './client/index.html'))
  }
  
})

app.get('/login', (req, res)=>{
  res.render('login', {passwordWarning:"", emailWarning:"", password:"", email:""})
})




//!===>
/* app.get("/", function (req, res) { 
  res.sendFile(path.join(__dirname, '../client/register.html'))
})  */


app.post('/login',
//*Validation
check('email').isEmail().normalizeEmail(),
check('password').isLength({
        min: 3
    }),
    (req, res) => {
        const errors = validationResult(req);
      
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const credentials = {
          email:req.body.email,
          password:req.body.password
        }
        const isValidUser =  loginService.authenticate(credentials)

        if(isValidUser.user !== null)
        {
          // cookie session isValid Session
          if(!req.session.isValid )
          {
              req.session.isValid = true
          }
          res.redirect('dashboard')
        }
    
        if(isValidUser.user === null)
        {
          // render the login
          // isValidUser
          res.render('login', {
            emailWarning:isValidUser.emailWarning, 
            passwordWarning:isValidUser.passwordWarning,
            email: req.body.email,
            password: req.body.password
          })
        }
        
        res.end();

        /* res.sendFile(path.join(__dirname, '../server/views/dashboard.ejs')) */
    });

    app.post('/login', (req, res)=>{
      // POST name value pairs in body request
      const credentials = {
        email:req.body.email,
        password:req.body.password
       }
       
       
       const isValidUser = loginService.authenticate(credentials)
      
       res.end()
    
    })


app.post(
  '/register',
  //*Validation
  [
    check('username').isLength({ min:3, max:20 }),
    check('email').isEmail(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 3 }),
  ],
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    const credentials = {
      id:newId,
      username:req.body.username,
      email:req.body.email,
      password:req.body.password
    }
       
    const addData = registerService.addUser(credentials)
   

    res.sendFile(path.join(__dirname, '../client/login.html'))
  }
)

// *USERS Task CONTINUE HERE
app.get('/api/v1/users', (req, res)=>{
  res.sendFile(path.join(__dirname, '../client/users.html'))
 
})


app.listen(PORT, () =>{
    console.log(`server started on http://localhost:${PORT}`)
})

//! USE THIS FOR UNIQUE ID: https://www.geeksforgeeks.org/node-js-npm-uuid/