const db = require("../models");
const Order = db.order;
const Op = db.Sequelize.Op;

// CREATE RESTAURANT

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
    }

    const order = {
        dishId: req.body.dishId,
        days: req.body.days
    }

    console.log(order);

    Order.create(order).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the order"
        });
    });
}



// GET ALL INGREDIENTS

exports.findAll = (req, res) => {
    Order.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving all ingredients"
        });
    });
}

// GET ONE DISH

exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id)

    Order.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find order with id=${id}`

                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving order with id=" + id
            });
        });
}


// UPDATE INGREDIENT

exports.update = (req, res) => {
    const id = req.params.id;
    var image = '';
    if (!req.body.name) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
    }

    const order = {
        dishId: req.body.dishId,
        days: req.body.days
    }
}
if (order.filename == "") {
  Order.findByPk(id)
    .then(data => {
      if (data) {
        image = data;
        order.filename = image.filename;
        Order.update(order, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Order was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Order with id=${id}. Maybe Order was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Order with id=" + id
            });
          });
      } else {
        res.status(404).send({
          message: `Cannot find Order with id=${id}.`
        });
      }
    })
} else {
  Order.update(order, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update order with id=${id}. Maybe Order was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating order with id=" + id
      });
    });
}

// FIND BY DISH ID

exports.findAllByDishId = (req, res) => {
    const id = req.params.id;
    console.log(req.params.id)
  
    Order.findAll({ where: { dishId: id } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving dishes."
        });
      });
  };



// DELETE

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Order.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Order was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete order with id=${id}. Maybe Order was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete order with id=" + id
        });
      });
  };
