const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://vinnath:acerlaptop111@cluster0.acbjy23.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  EmployeeModel.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("nopass");
      } 
      
    }else{
      res.json("null");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running !!");
});

//   if (user) {
//     if (user.password === password) {
//       res.json("success");
//     } else {
//       res.json("error");
//     }
//   } else {
//     res.json("No record existed");
//   }
// }
