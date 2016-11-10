

exports.view = function(req, res){
  console.log("---------- Inside of answer question -------- ");
  console.log("Query: " + req.query[0]);
  var newArray = {
    "question": "",
    "subquestions":[],
    "category": "",
    "researcher": "",
    "name": "",
    "index": ""
  };
  var index = 0;

  for (var key in req.query) {
    if (req.query.hasOwnProperty(key)) {
      console.log(key + " -> " + req.query[key]);
      if( key == "question"){
        newArray.question = req.query[key];

      }
      else if (key == "category") {
        newArray.category = req.query[key];
      }
      else if (key == "researcher") {
        newArray.researcher = req.query[key];
      }
      else if (key == "name") {
        newArray.name = req.query[key];
      }
      else if (key == "index") {
        newArray.index = req.query[key];
      }
      else {
        console.log("Does not enter subquestions");
        newArray.subquestions.push({"question":req.query[key]});
      }
    }
    ++index;
  }

  console.log("************************");
  console.dir(req.query);
  console.log(newArray);


  res.render('answerquestion', {questions: newArray});


};
