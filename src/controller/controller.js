//Treditional Controller which uses normal Postgrace Database
//imported Database Coeenction here
const pool = require("../db/db");
const studentService = require("../service/service");
// imported Queries here
const queries = require("../db/queries");

//function to get all students
const getStudents = (req, res) => {
  studentService.getStudents(req, res);
  // used queries to import querry
  // pool.query(queries.getAllStudents, (error, results) => {
  //   if (error) throw error;
  //   res.status(200).json(results.rows);
  // });
  // console.log("getting Students");
};

const getStudentById = (req, res) => {
  studentService.getStudentById(req, res);
  // Extracting ID from parameter
};

const addStudent = (req, res) => {
  studentService.addStudent(req, res);
};

const deleteStudent = (req, res) => {
  studentService.deleteStudent(req, res);
};

const updateStudent = (req, res) => {
  studentService.deleteStudent(req, res);
};
module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudent,
  updateStudent,
};
