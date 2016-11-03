var data = require("../data.json");

exports.view = function(req, res){
  console.log("---------- Inside of previous contribution -------- ");
  res.render('previouscontribution', {
    answers: data.user.contributions,
    questions: data.user.personalquestions
  });
};
