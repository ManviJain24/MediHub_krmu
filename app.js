require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const api = require("./models/api");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
const bodyParser = require("body-parser");
const app = express();
const data = require("./models/contactform");
const doctor = require("./models/doctor");
const Beds = require("./models/bed");
const logger = require("./sendEmail");

// const fetchBedData =require('./public/js/bed2')
// const router=require('./routes/api')
app.use(bodyParser.urlencoded({ extended: true }));

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = process.env.MONGO_URI;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(3030, () => {
      console.log("running on port 3030");
    })
  )
  .catch((err) => console.log("yash", err));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
app.get("/vacc", requireAuth, (req, res) => res.render("vacc"));
app.get("/book", requireAuth, (req, res) => res.render("book"));
app.get("/bed", requireAuth, (req, res) => res.render("bed"));
app.get("/apidonor", requireAuth, (req, res) => res.render("smoothies"));
app.get("/doctor", requireAuth, (req, res) => res.render("doctor"));
app.get("/confirmation", requireAuth, (req, res) => res.render("confirmation"));
app.get("/bloodDonor", requireAuth, (req, res) => res.render("bloodDonor"));
app.get("/addDonor", requireAuth, (req, res) => res.render("addDonor"));
app.post("/", requireAuth, async (req, res) => {
  try {
    let newdata = new data({
      name: req.body.name,
      Mobile: req.body.number,
      email: req.body.email,
      date: req.body.date,
    });
    newdata.save();
    // console.log(prompt("done"));
    // window.prompt("done")
    res.redirect("/");
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
});

app.post("/doctor", requireAuth, async (req, res) => {
  try {
    let Doctor = new doctor({
      title: req.body.title,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dob: req.body.dob,
      gender: req.body.gender,
      email: req.body.email,
    });
    Doctor.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.post("/addDonor", async (req, res) => {
  try {
    console.log(req.body);
    let newapi = new api({
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      Blood_Group: req.body.Blood_Group,

    });
    newapi.save();
    res.redirect("/apiDonor");
  } catch (error) {
    console.log(error);
  }
});
// app.use('/bed',fetchBedData)
app.post("/bed", logger, async (req, res) => {
  try {
    // console.log(req.body);
    let newBed = new Beds({
      name: req.body.name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      city: req.body.city,
      gender: req.body.gender,
      // dob: req.body.dob,
    });
    newBed.save();
    res.redirect("/bed");
  } catch (error) {
    console.log(error);
  }
});

app.get("/api", async (req, res) => {
  try {
    const member = await api.find({});
    // console.log(member);
    res.status(200).json({ member });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

app.use(authRoutes);
// app.use('/api/v1',router)
