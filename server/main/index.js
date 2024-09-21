const express = require("express");
const app = express();
const port = 9000;
const cors = require('cors')

app.use(cors());
const dotenv = require("dotenv")
dotenv.config();


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

const authMiddleware = require('../middleware/auth');//use where jwt authetication is needed like profile user etc!

const authRoutes = require("../routes/auth");


app.use('/api/auth', authRoutes);

app.use(express.json());


// add jwt authentication

// login

// sign up

// authMiddleware-this will be used on routes where user should have token already or where user should be logged in!

// dashboard  // modal - chats and chatroom

// update
// create
// read
// delete

// chat use socket.io
//

// DATABASE
// mongodb save user information with socket.id
// text messages


// ------------------------------------------------------------------------------------

// User Routes:

// Register a User(POST / api / users / register)

app.get('/', (req, res) => {
    res.send("Welcome to chat api ");
})

app.post("/api/users/register", (req, res) => {
    res.send(res.json("HEy register"))

})

// Login a User(POST / api / users / login)

app.post("/api/users/login", () => {
    res.send(res.json("HEy login"))
})

// Get User Info(GET / api / users /: id)
app.get("/api/users/:id", (req, res) => {
    res.send(res.json("HEy user"))
})


// Chat Routes:

// Create a Chat(POST / api / chats)

app.post("/api/chats", (req, res) => {

})
// Get All Chats for a User(GET / api / chats)
app.get("/api/chats", (req, res) => {

})





// Message Routes:

// Send a Message(POST / api / messages)
app.post("/api/message", (req, res) => {

})



// Get All Messages in a Chat(GET / api / messages /: chatId)
app.get("/api/messages/:chatId", (req, res) => {

})




// ------------
app.listen(process.env.PORT || port, () => {
    console.log("Server is running on port : ", port)
})
