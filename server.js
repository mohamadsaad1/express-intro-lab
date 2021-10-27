import express from 'express'
import * as heroDb from "./data/hero-db.js"
console.log(heroDb.find)
// create express application

const app = express()


// configure the app (app.set)

app.set("view engine", "ejs")

// mount middleware (app.use)



// mount routes

// localhost: 3000/
app.get('/', function(req, res) {
  res.send('<h1>Dota 2 Heroes</h1>')
})


app.get('/heroes', function(req, res) {
  heroDb.find({}, function(error, heroes) {
    res.render('heroes/index', {
      heroes: heroes,
      error: error
    })
  })
})
// tell our app to llisten to port 3000

app.listen(3000, function(){
  console.log("It's ALIVE")
})