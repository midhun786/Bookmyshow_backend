// MAIN BACKEND FILE
require('dotenv').config();
const MoviesModel = require("./database/movies");
const UsersModel = require("./database/users");

const express = require("express");

var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("CONNECTION ESTABLISHED"));



//http://localhost:5000/
app.get("/", (req, res) =>{
    return res.json({"WELCOME": `to my Backend software for the BookMyShow`});
});

//http://localhost:5000/movies
app.get("/movies", async (req, res) => {
    const getAllMovies = await MoviesModel.find();
    return res.json(getAllMovies);                         //res.send(getAllBooks) -- same 
});


//http://localhost:5000/movie/:id
app.get("/movie/:id", async (req, res) => {
    const {id} = req.params;
    const getMovie = await MoviesModel.findOne({_id: id});
    return res.json(getMovie);                         
});




//http://localhost:5000/user-register
app.post("/user-register", async (req, res) => {
    const addNewUser = await UsersModel.create(req.body);
    return res.json({userAdded: addNewUser, message:"User was added!!!"});                         
});




app.listen(process.env.PORT || 5000, () => {
    console.log("MY EXPRESS APP IS RUNNING.....");
})