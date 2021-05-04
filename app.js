// step 1 : require dependencies
const express = require("express");
const hbs = require("hbs");

// step 2 : base setup
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

// step 3 : routes handling
app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Sneakers",
    shoeBrand: ["Nike", "Adidas", "Jordan", "Converse", "Puma", "Reebok"],
  });
});

app.get("/about", (req, res) => {
  const shoeData = {
    pageTitle: "About Sneakers",
    shoeName: "",
    foundedYear: 1942,
    css: ["about.css"],
    shoeModel: [
      { style: "Air Force 1", style: "Manchester" },
      { style: "Jordan 4", style: "Union" },
      { style: "Jordan 3", style: "A Ma Maniere" },
    ]
  };
  res.render("about.hbs", shoeData);
});

app.get("/contact", (req, res) => {
  res.render("contact.hbs", {
    pageTitle: "Contact",
  });
});

// step 4 : app listen to kickstart
app.listen(3000);