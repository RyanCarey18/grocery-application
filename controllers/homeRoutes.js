const router = require("express").Router();
const { render } = require("express/lib/response");
const { Aisle, Department, Product } = require("../models");
//const withAuth = require("../utils/auth");

//Retrieve all the departments and render them to the home page

router.get("/", async (req, res) => {
  try {
    const AllDepartments = await Department.findAll();
    const allAisles = await Aisle.findAll();
    const departmentsDrop = AllDepartments.map((dep) =>
      dep.get({ plain: true })
    );
    const aislesDrop = allAisles.map((dep) => dep.get({ plain: true }));
    const cart = req.session.cart;
    res.render("homepage", {
      cart,
      departmentsDrop,
      aislesDrop,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    const AllDepartments = await Department.findAll();
    const allAisles = await Aisle.findAll();
    const departmentsDrop = AllDepartments.map((dep) =>
      dep.get({ plain: true })
    );
    const aislesDrop = allAisles.map((dep) => dep.get({ plain: true }));
    const cart = req.session.cart;

    res.render("login", {
      cart,
      departmentsDrop,
      aislesDrop,
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
    const AllProducts = await Product.findAll({
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

    const cart = req.session.cart;
    const products = AllProducts.map((prod) => prod.get({ plain: true }));
    const AllDepartments = await Department.findAll();
    const Departments = AllDepartments.map((dep) => dep.get({ plain: true }));

    res.render("products", { products, Departments, cart });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/departments/:id", async (req, res) => {
  try {
    const departmentData = await Department.findByPk(req.params.id, {
      include: [
        {
          model: Product,
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
        },
      ],
    });
    const AllDepartments = await Department.findAll();

    const allAisles = await Aisle.findAll();
    const departmentsDrop = AllDepartments.map((dep) =>
      dep.get({ plain: true })
    );
    const aislesDrop = allAisles.map((dep) => dep.get({ plain: true }));
    const department = departmentData.get({ plain: true });
    const products = department.products.map((product) => product);
    const cart = req.session.cart;
    res.render("products", {
      cart,
      department,
      products,
      departmentsDrop,
      aislesDrop,
      //logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/aisles/:id", async (req, res) => {
  try {
    const aisleData = await Aisle.findByPk(req.params.id, {
      include: [
        {
          model: Product,
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
        },
      ],
    });
    const AllDepartments = await Department.findAll();
    const allAisles = await Aisle.findAll();
    const departmentsDrop = AllDepartments.map((dep) =>
      dep.get({ plain: true })
    );
    const aislesDrop = allAisles.map((dep) => dep.get({ plain: true }));

    const aisles = aisleData.get({ plain: true });
    const products = aisles.products.map((product) => product);
    const cart = req.session.cart;

    res.render("products", {
      cart,
      aisles,
      products,
      departmentsDrop,
      aislesDrop,
      //logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Render the carts page
router.get("/cart", async (req, res) => {
  try {
    const AllDepartments = await Department.findAll();
    const allAisles = await Aisle.findAll();
    const productsData = await Product.findAll({
      where: { id: req.session.cart },
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
    const departmentsDrop = AllDepartments.map((dep) =>
      dep.get({ plain: true }));
    const aislesDrop = allAisles.map((dep) => dep.get({ plain: true }));
    const products = productsData.map((dep) => dep.get({ plain: true }));
    const cart = req.session.cart;

    res.render("cart", {
      cart,
      products,
      departmentsDrop,
      aislesDrop
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
