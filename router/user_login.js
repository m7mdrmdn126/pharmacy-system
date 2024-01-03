const express = require('express')
const get_user_by_id = require('../controllers/users')
const router = express.Router()





// function to check if there is a user logged in the system or not 

function requireLogin(req, res, next) {
    if (!req.session.userId) {
        res.redirect('/login');
    } else {
        next();
    }
}





router.route('/').get( requireLogin , (req , res) => { 
    res.render('Home')
})




// handling user login and logout 

router.route('/login').get( (req , res) => {
    res.render('login')
})
.post( async (req , res ) => {
    try {
        let  { user_id , password }  = req.body ;
        let user = await get_user_by_id(user_id)
        if (user[0][4] == password){
            req.session.userId = user_id;
            res.redirect('/');
        } else {
            res.send('Invalid username or password.');
        }
        
    }
    catch(error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
})


router.route('/logout').get(
    (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
            }
            res.redirect('/login');
        });
    });






module.exports = router;