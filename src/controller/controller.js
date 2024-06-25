//Treditional Controller which uses normal Postgrace Database
//imported Database Coeenction here

const studentService = require("../service/service");
// imported Queries here

//function to get all students
const getStudents = (req, res) => {
  studentService.getStudents(req, res);
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
