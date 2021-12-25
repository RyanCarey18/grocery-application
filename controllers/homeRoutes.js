const router = require("express").Router();
const { Aisle, Department, Product, User,
} = require('../models');
//const withAuth = require("../utils/auth");

//Retrieve all the departments and render them to the home page

router.get("/", async (req, res) => {
  try {
    const AllDepartments = await Department.findAll();

    const Departments = AllDepartments.map((dep) =>
      dep.get({ plain: true })
    );

    res.render('homepage', {
      Departments,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }

  res.render("login");
});

module.exports = router;
