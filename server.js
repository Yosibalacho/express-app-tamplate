const express = require("express");
const cors = require("cors");
const app = express();
const travelRoute = require("./routes/travel-route");
const airlineRoute = require("./routes/airline-route");
const { users } = require("./models/users-model");
const port = 7070;
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// const middleware = (req, res, next) => {
//   if (req.params=={}) {
//     console.log(`there is no data`);
//   }
//   else{
//     console.log("have data in params");
//   }
//   next();
// };
// const middleware = (req, res, next) => {
//   switch (req.url) {
//     case "/":
//       console.log("this is base url");
//       break;
//     case "/travel":
//       console.log("this is travel url");
//       break ;
//     case "/travel/getById/:id":
//       console.log("this is get by id url");
//       break ;
//     case "/travel/create":
//       console.log("this create url");
//       break ;

//     default:
//       break  ;
//   }
//   next();
// };
const middleware = (req, res, next) => {
  const user = users.find((userItem) => userItem.email == req.body.email);
  if (!user) {
    res.send("user email not found");
  } else {
    if (req.body.password == user.password) {
      next();
    } else {
      res.send("password not found");
    }
  }
};

app.use("/travel", middleware, travelRoute);
app.use("/airline", airlineRoute);

app.get("/", (req, res) => {
  res.send({ massage: "success" });
});

app.listen(port, () => {
  console.log(`server listen on port: ${port}`);
});
