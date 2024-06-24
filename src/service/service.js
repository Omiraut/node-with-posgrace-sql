//imported Database Coeenction here
const pool = require("../db/db");

// imported Queries here
const queries = require("../db/queries");

const getStudents = (req, res) => {
  pool.query(queries.getAllStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
  console.log("getting Students");
};

const getStudentById = (req, res) => {
  pool.query(queries.getAllStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
  console.log("getting Students");
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  // Check if email is exist
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (error) throw error;
    if (results.rows.length) {
      res.send("email Already Exist : " + email);
    } else {
      pool.query(
        queries.addStudnet,
        [name, email, age, dob],
        (error, results) => {
          if (error) throw error;
          res.status(201).send("Student Created Successfully");
        }
      );
    }
  });
};

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    else if (results.rows.length) {
      pool.query(queries.deleteStudent, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Deleted Successfully");
      });
    } else res.status(200).send("Studnet Does not Exist With Id : " + id);
  });
};

const updateStudent = (req, res) => {
  const id = req.params.id;
  const { name, email, age, dob } = req.body;
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    else {
      const noStudent = !results.rows.length;
      if (noStudent) {
        res.send("Student not found in database with id : " + id);
      } else {
        pool.query(
          queries.updateStudent,
          [name, email, age, dob, id],
          (error, results) => {
            if (error) throw error;
            else {
              res.status(200).send("Studnet updated Successfuly");
            }
          }
        );
      }
    }
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudent,
  updateStudent,
};
