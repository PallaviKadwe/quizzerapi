const express = require("express");
const router = express.Router();

const QuestionModel = require("../models").Question;
const SubjectModel = require("../models").Subject;

// GET Science 
router.get("/science", async (req, res) => {
    let science = await QuestionModel.findAll({
      include:[
          {
            model: SubjectModel,
            where:{id:1},
          },
      ]})
    res.json({ science });
});

// GET History 
router.get("/history", async (req, res) => {
    let history = await QuestionModel.findAll({
      include:[
          {
            model: SubjectModel,
            where:{id:2},
          },
      ]})
    res.json({ history });
});

// GET Geography 
router.get("/geography", async (req, res) => {
    let geography = await QuestionModel.findAll({
      include:[
          {
            model: SubjectModel,
            where:{id:3},
          },
      ]})
    res.json({ geography });
});

// Add Question 
router.post("/flashcard", async (req, res) => {
    console.log("backend - flashcard save called");
    console.log(req.body)
    let question = await QuestionModel.create(req.body);
    res.json({ question });
});

  

module.exports = router;