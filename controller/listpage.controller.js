const db = require("../models");
const listpage = db.listpage;
const Op = db.Sequelize.Op;

// Create and Save a new listpage
exports.create = (req, res) => {
  // Validate request
  if (!req.body.surname_name) {
    res.status(400).send({
      message: "schedule cannot be empty!"
    });
    return;
  }

  // Create a listpage
  const listpage = {
    surname_name: req.body.surname_name,
    course: req.body.course,
    gender: req.body.gender ? req.body.gender : false
  };

  // Save listpage in the database
  listpage.create(listpage)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the listpage."
      });
    });
};

// Retrieve all listpages from the database.
exports.findAll = (req, res) => {
  const surname_name= req.query.surname_name;
  var condition = surname_name? { surname_name: { [Op.iLike]: `%${surname_name}%` } } : null;

  listpage.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving listpages."
      });
    });
};

// Find a single listpage with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  listpage.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving listpage with id=" + id
      });
    });
};

// Update a listpage by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  listpage.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "listpage was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update listpage with id=${id}. Maybe listpage was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating listpage with id=" + id
      });
    });
};

// Delete a listpage with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  listpage.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "listpage was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete listpage with id=${id}. Maybe listpage was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete listpage with id=" + id
      });
    });
};

// Delete all listpages from the database.
exports.deleteAll = (req, res) => {
  listpage.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} listpages were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listpages."
      });
    });
};

// find all gender listpage
exports.findAllgender = (req, res) => {
  listpage.findAll({ where: { gender: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving listpages."
      });
    });
};
