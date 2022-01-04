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

router.get("/login", async (req, res) => {


  try {
    const AllDepartments = await Department.findAll();

    const Departments = AllDepartments.map((dep) =>
      dep.get({ plain: true })
    );

    res.render('login', {
      Departments,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }


  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }
});

router.get("/Products", async (req, res) => {
  try {
  const  AllProducts = await Product.findAll({
      include: [
        {
          model: Aisle,
          attributes: ["aisle_name"],
        },
        {
          model: Department,
          attributes: ["department_name"],
        },
      ],
    });

    const products = AllProducts.map((prod) =>
    prod.get({ plain: true })
  );

    const AllDepartments = await Department.findAll();

    const Departments = AllDepartments.map((dep) =>
      dep.get({ plain: true })
    );


    res.render('products',{products,Departments})
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
