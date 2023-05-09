var express = require('express');
var router = express.Router();

let userList = [
    {
        id: 1,
        firstName: "Ronnie",
        lastName: "Estillero",
        username: "Xander",
        email: "ronniewarrior09@gmail.com",
        password: "00002",
    },
    {
        id: 2,
        firstName: "Johan",
        lastName: "Lopez",
        username: "Arjohn",
        email: "arjhon@gmail.com",
        password: "00001",
    },
];

// REGISTRATION
router.post("/registration", (req,res) => {
  let user = {
      id: userList.length + 1, 
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
  };

  const isUserExist = user.find((list) => 
      list.firstName === user.firstName &&
      list.lastName === user.lastName &&
      list.username === user.username &&
      list.email === user.email &&
      list.password === user.password);

      if (isUserExist) {
          console.log("Already have account!");
      } else {
          userList.push(user);
      }
      res.status(200).send(user);
});

//  LOGIN
router.post("/login", (req,res) => {
  let user = userList.find((item) => item.username === req.body.username && item.password === req.body.password);
  res.status(200).send(user ?? {errMsg: "Invalid Login: User not found!"});
})

// GET ALL USER
router.get("/", (req, res) => {
    res.send(userList);
});

// COUNT ALL USER
router.get("/count/all", (req,res) => {
    res.status(200).send({count: userList.length});
});

//SERCH USER
router.get("/name/:keyword", (req, res) => {
    const { keyword } = req.params;
    let user = userList.filter((item) => 
    (item.firstName.toLowerCase().includes(keyword) || item.lastName.toLowerCase().includes(keyword)));
    res.status(200).send(user.length > 0 ? user : keyword  + " is not found!");
});

// GET USER BY ID
router.get("/:id", (req, res) => {
    const { id } = req.params;
    let user = userList.find((item) => item.id === Number(id));
    res.status(200).send(user ?? "Record not found!");
});

// PROFILE UPDATE 
router.put("/:id", (req,res) => {
    let user = userList.find((item) => item.id === Number(req.body.id));
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    res.send(user);
})

  module.exports = router;
