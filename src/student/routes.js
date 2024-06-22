const { Router } = require("express");
const controller = require("./controller");

const router = Router();
//  Get Requests
router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentById);
//  Post Reqests
router.post("/", controller.addStudnet);

//  PUT Requests
router.put("/:id", controller.updateStudent);
//  DELETE Requests
router.delete("/:id", controller.deleteStudent);
module.exports = router;
