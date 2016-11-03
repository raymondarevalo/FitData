var data = require("../data.json");

exports.view = function(req, res){
  console.log("---------- Inside of choose question -------- ");
  res.render('choosequestion', {questions: data.researchquestions});
};
