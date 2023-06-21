const Option = require('../models/option');
const Question = require('../models/question');

module.exports.create = async function(req, res) {
  // Create options for the given question ID
  console.log(req.body, req.params.id);

  try {
    const opt = await Option.create({
      option: req.body.content,
      question: req.params.id,
      // ...
    });

    // Add the vote URL to the updated option
    const updateOpt = await Option.findByIdAndUpdate(opt._id, {
      add_vote: `http://localhost:3000/api/v1/options/${opt._id}/add_vote`
    });
    updateOpt.save();

    // Find the question and append the option to its options array
    const ques = await Question.findById(req.params.id);
    if (ques) {
      ques.options.push(updateOpt);
      ques.save();
      console.log(ques);
      res.send(ques);
    } else {
      res.send('question does not exist');
    }
  } catch (err) {
    console.log(err);
    res.send('error occurred while creating the option');
  }
};

module.exports.add_vote = async function(req, res) {
  // Add votes to a particular option of a question
  console.log(req.params.id);

  try {
    // Increment the vote count for the option by one
    const opt = await Option.findByIdAndUpdate(req.params.id, { $inc: { vote: 1 } });

    if (opt) {
      await opt.save();
      console.log(opt);
      res.send(opt);
    } else {
      res.send('option does not exist');
    }
  } catch (err) {
    console.log(err);
    res.send('error occurred while adding vote to the option');
  }
};

module.exports.delete = async function(req, res) {
  // Delete the option with the given ID
  console.log('id', req.params.id);

  try {
    const opt = await Option.findById(req.params.id);
    if (opt) {
      const quesId = opt.question;

      // Find the question and remove the option from its options array
      const ques = await Question.findByIdAndUpdate(quesId, { $pull: { options: req.params.id } });

      // Delete the option
      await Option.findByIdAndDelete(req.params.id);

      console.log(ques);
      res.send('option deleted');
    } else {
      res.send('ID does not exist');
    }
  } catch (err) {
    console.log(err);
    res.send('error occurred while deleting the option');
  }
};
