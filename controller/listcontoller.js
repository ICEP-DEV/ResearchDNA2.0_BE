const UserModel = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

// Create and Save a new student list
exports.create = (req, res) => { 
};
// Update a student by the id in the request
exports.update = (req, res) => {
};
// Delete a student with the specified id in the request
exports.delete = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body.id) {
      res.status(400).send({
        message: "studend numbers must be entered!"
      });
      return;
    }
  
    // Create a studentlist
    const tutorial = {
      id: req.body.id,
      name: req.body.name,
      surname: req.body.surname,
      qualification: req.body.qualification,
      faculty: req.body.faculty,
      
    };
  
    // Save studentlist in the database
   student.create(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the studentlist."
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
  
    student.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update student with id=${id}. `
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating student with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    student.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "student was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete student with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete student with id=" + id
        });
      });
  };


  exports.findAllPublished = (req, res) => {
    student.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving student."
        });
      });
  };