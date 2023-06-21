const Question=require('../models/question')
const Option=require('../models/option')

module.exports.create = async function(req, res) {
    // in this, the question is created
    console.log(req.url);
    console.log(req.body);
  
    try {
      const ques = await Question.create(req.body);
      console.log(ques);
      res.send(ques);
    } catch (err) {
      console.log("error in creating the question schema", err);
    }
  };
  
  module.exports.showDetails = async function(req, res) {
    console.log(req.params.id);
  
    try {
      const ques = await Question.findById(req.params.id).populate('options');
  
      if (ques) {
        res.send(ques);
      } else {
        res.send("id does not exist");
      }
    } catch (err) {
      console.log(err);
      res.send("error occurred while fetching question details");
    }
  };
  
  module.exports.deleteQues = async function(req, res) {
    try {
      const ques = await Question.findById(req.params.id);
  
      if (ques) {
        await Question.deleteOne({ _id: req.params.id });
        await Option.deleteMany({ question: req.params.id });
  
        res.send("question deleted");
      } else {
        res.send("question does not exist");
      }
    } catch (err) {
      console.log(err);
      res.send("error occurred while deleting the question");
    }
  };
  