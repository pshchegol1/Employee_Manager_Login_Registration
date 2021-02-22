require ('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000

app.use(cors())

app.use(express.urlencoded({extended:true}))

app.use(express.json())


app.use(express.static(path.join(__dirname, "../client"), {extensions: ["html", 'htm']})
);


//!===>
app.get('/', (req, res)=>{
  

  res.sendFile(path.join(__dirname, '../client/login.html'))
})



app.listen(PORT, () =>{
    console.log(`server started on http://localhost:${PORT}`)
})