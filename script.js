import express from "express";

const app = express()

app.set("view engine", "ejs")
app.use(express.static('./public'))

app.use(function (req,res,next) {
    // req.url = "hello"
    next();
})

app.get('/local',(req,res) => {
    res.render("index",{index:'myIndex'}) // loads the file inside the views folder and modifies the value in ejs file wherever <% = index %> is written in ejs file.
})

app.get('/local/:username',(req,res) => {
    res.send(`local username is ${req.params.username}`)
})

// Static files 
/*
1. create a folder called public

2. create 3 folders inside it => images, stylesheets, javascripts

3. configure the express static in index.js/script.js file
    app.use(express.static('./public'))
4. understand the path
*/

// error handling

app.get('/error',function (req,res) {
    throw error('Something went wrong')
})


app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

// dynamic routing - 

app.listen(8080)

