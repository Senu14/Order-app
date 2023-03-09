const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const utils = require("../utils");
const  bcrypt  =  require('bcryptjs');


// CREATE USER

exports.create = (req, res) => {
  if (!req.body.password || !req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  let user = {
    password: req.body.password,
    name: req.body.name,
    email: req.body.email
  };

  console.log(user)

  User.findOne({ where: { username: user.username } })
    .then(data => {
      if (data) {
        const result = bcrypt.compareSync(user.password, data.password);
        if (!result) return res.status(401).send('Password not valid!');
        const token = utils.generateToken(data);
        const userObj = utils.getCleanUser(data);
        return res.json({ user: userObj, access_token: token });
      }

      user.password = bcrypt.hashSync(req.body.password);

      User.create(user)
        .then(data => {
          const token = utils.generateToken(data);
          const userObj = utils.getCleanUser(data);
          return res.json({ user: userObj, access_token: token });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};

// GET ALL USERS
exports.findAll = (req, res) => {

  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// UPDATE USER

exports.update = (req, res) => {
  const id = req.params.id;

  console.log(req.body.CP)
  console.log(req.body.name)

  console.log(req.body.email)


  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// FIND USER BY EMAIL AND PASSWORD

exports.findUserByEmailAndPassword = (req, res) => {
  const email = req.body.email;
  const pwd = req.body.password;

  User.findOne({ where: { email: email, password: pwd } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};