
const router = require("express").Router();
// require("dotenv").config();

router.post("/", async (req, res) => {
    try {

      //User send message to the company 's email

        const nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            // user: process.env.COMPANY_EMAIL,
            // pass: process.env.COMPANY_PW
            user :'flashshoppingapp@gmail.com',
            pass : 'bootcamp2021'
          }
        });
        
        const mailOptions = {
          // to: process.env.COMPANY_EMAIL,
          to :'flashshoppingapp@gmail.com',
          subject: req.body.userSubject,
          html: `
          <h1 style ="color :red;" >Thank you for Your Message to <i> flash Shopping </i></h1> 
          <h3 style ="color :purple; font-family:"cursive">Username : ${req.body.userName} </h3>
          <h3 style ="color :purple; font-family:"cursive">Email : ${req.body.userEmail} </h3>
          <h3 style ="color :purple; font-family:"cursive">Subject  : ${req.body.userSubject} </h3>
          <h3 style ="color :purple; font-family:"cursive">Message : </h3> <p>${req.body.userMessage} </p>`,          
        };
        
   transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);


          } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/');
          }
 
        });


    } catch (err) {
      res.status(400).json(err);
    }
  });

  



  module.exports = router;