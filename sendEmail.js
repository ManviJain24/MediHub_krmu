require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const auto = require("./models/bed");

// console.log(__dirname)
const logger = async (req, res, next) => {
  console.log(req.body.email);

  const email = req.body.email;
  // const queryObject={}
  // if(email){
  //   queryObject.email=email
  // }

  try {
    //     const products =await auto.find(queryObject)
    //      res.status(200).json({ products,nbHits:products.length})
    //    console.log(products[0].email);
    const mail = async () => {
      //  console.log(gen);
      const config = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.USER_NAME,
          pass: process.env.USER_PASSWORD,
        },
      });
      await config.sendMail({
        form: "test@gmail.com",
        to: req.body.email,
        subject: "confirmation",
        text: ` Booked`,
        html: `
        <div>
        Dear ${req.body.name}
        Your bed is booked.
        </div>
        `,
      });
    };

    mail().catch((e) => console.log(e));
  } catch (error) {
    console.log(error);
  }

  console.log("yash varshney");
  next();
};

module.exports = logger;
