const router = require("express").Router();
const { User } = require("../../models/");

//get All users

router.get("/", async (req, res) => {
  try {
    const dbUserData = await User.findAll();
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create(req.body);

    req.session.save(() => {
      req.session.userId = dbUserData.id;
      req.session.username = dbUserData.first_name+" "+dbUserData.last_name;
      req.session.userEmail = dbUserData.email,
      req.session.logged_in = true;
      res.status(200).json(dbUserData);

    });



    //Send email to the new user containing user data (username, email , password)

    const nodemailer = require("nodemailer");
    require("dotenv").config();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // user: process.env.COMPANY_EMAIL,
        // pass: process.env.COMPANY_PW
        user :"flashshoppingapp@gmail.com",
        pass : "bootcamp2021"
      }
    });

    const mailOptions = {
      to: req.body.email,
      subject: "New User data",
      html: `
      <h1 style ="color :red;"> <i> Flash Shopping </i> team, thank you for placing your trust in our application</h1> 
      <h3 style ="color :purple; font-family:"cursive";>Welcome : ${req.body.first_name} ${req.body.last_name}  </h3>
      <h3 style ="color :purple; font-family:"cursive">Your Email : ${req.body.email} </h3>
      <h3 style ="color :purple; font-family:"cursive"> Your Password : </h3> <p>${req.body.password} </p>`,
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);


      } else {
        console.log("Email sent: " + info.response);
        res.redirect("/");
      }

    });


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.userId = dbUserData.id;
      req.session.username = dbUserData.first_name+" "+dbUserData.last_name;
      req.session.userEmail = dbUserData.email,
      req.session.logged_in = true;
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
      // redirect to home page

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();

    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
