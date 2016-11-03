

exports.view = function(req, res){
  console.log("---------- Inside of answer question -------- ");
  console.log("Query: " + req.query.first);
  res.render('answerquestion', {numbers: req.query});


};
