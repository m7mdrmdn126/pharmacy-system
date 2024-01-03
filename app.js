const express = require('express')
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express()
const PORT = 3000


// setting up the enviroment to handle views and static files and setting the engine to ejs setting the session settings also 
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'pharmacy_system',
    resave: false,
    saveUninitialized: true,
}));


const user_login = require('./router/user_login')
app.use('/' , user_login)

const dba = require('./router/db-admin')
app.use('/' , dba)


app.listen(PORT , () => {
    console.log("up and running . ")
})
