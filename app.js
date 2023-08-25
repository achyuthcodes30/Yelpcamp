/* if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
} */

require('dotenv').config();

const express = require('express')
const path= require('path')
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const ejsMate=require('ejs-mate');
const flash = require('connect-flash');
const campgrounds = require('./routes/campgrounds');
const reviews = require('./routes/reviews');
const users = require('./routes/users')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const expressError = require('./utils/expressError');
const mongoSanitize = require('express-mongo-sanitize');
const User = require('./models/user');
const app=express()
async function main(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/yelprevamp');
        await console.log("Connected!")
    }catch(error){
        console.log(error)
    }
}
main()
const sessionConfig = {
    name: 'session',
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        //secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.engine('ejs',ejsMate)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(mongoSanitize({
    replaceWith: '_'
}))
app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})
app.use('/', users);
app.use('/campgrounds', campgrounds);
app.use('/campgrounds/:id/reviews',reviews);

app.get('/',(req,res) => {
    res.render("home")
})


app.all('*',(req,res,next) =>{
    next(new expressError('Page not found!',404))
})
app.use((err,req,res,next) => {
    const {statusCode=500,message} =err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!';
    res.status(statusCode).render('error',{err})
})
app.listen(3000,() => {
    console.log("Running!")
})