const express = require('express')
const { jsPDF } = require('jspdf');
const blobStream = require('blob-stream');
const staff = require('../controllers/staff')
const devices = require('../controllers/devices')
const expires = require('../controllers/expires')
const manifa = require('../controllers/manifacture')
const needs = require('../controllers/needs')
const patients = require('../controllers/patients')
const products = require('../controllers/products')
const records = require('../controllers/records')
const it = require('../controllers/it')
const problem = require('../controllers/add_problem')
const {record , update_amount , get_price, get_name} = require('../controllers/add_record')
const router = express.Router()

router.route('/staff').get( async (req ,res) => {
    const data = await staff.get() ;
    res.render('staff' , {
        data : data
    })
})



router.route('/devices').get( async (req ,res) => {
    const data = await devices.get() ;
    res.render('staff' , {
        data : data 
    })
})




router.route('/expires').get( async (req ,res) => {
    const data = await expires() ;
    res.render('staff' , {
        data : data
    })
})






router.route('/it').get( async (req ,res) => {
    const data = await it() ;
    res.render('staff' , {
        data : data
    })
})






router.route('/manifacture').get( async (req ,res) => {
    const data = await manifa() ;
    res.render('staff' , {
        data : data
    })
})





router.route('/needs').get( async (req ,res) => {
    const data = await needs() ;
    res.render('staff' , {
        data : data
    })
})






router.route('/patients').get( async (req ,res) => {
    const data = await patients() ;
    res.render('staff' , {
        data : data
    })
})



router.route('/products').get( async (req ,res) => {
    const data = await products() ;
    res.render('staff' , {
        data : data
    })
})







router.route('/records').get( async (req ,res) => {
    const data = await records() ;
    res.render('staff' , {
        data : data
    })
})



router.route('/report').get((req , res) => {
    res.render('report')
})
.post( async (req ,res) => {
    const {id , staff , device , describe} = req.body;
    let response = await problem(id , staff , device , describe)
    console.log(response);
    res.redirect('/')
})









// buying function 

const usedNumbers = [];
let cart = {}


function generateUniqueRandomNumber(min, max) {
    let randomNumber;
    
    do {
      // Generate a random number between min and max (inclusive)
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.includes(randomNumber));
  
    // Store the generated number in the array
    usedNumbers.push(randomNumber);
  
    return randomNumber;
  }

router.route('/add_to_cart').post(
    async (req , res) => {
        const {product , patient} = req.body
        const staff = req.session.userId
        const price = await get_price(product)
        const product_name = await get_name(product)
        const am = await update_amount(product)
        cart[product_name] = price[0][0]
        const response = await record(generateUniqueRandomNumber(140, 150),price,staff, patient,product )
        console.log('from the record' ,response)
        console.log(cart)
        res.redirect('/')
        
    }
)

router.route('/buy').get(
    (req ,res) => {
        const pdf = new jsPDF();

        const jsonString = JSON.stringify(cart);
        pdf.text(jsonString, 20, 30);


        // End the PDF generation


        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=sample.pdf');

        res.send(pdf.output());
    }
)















module.exports = router