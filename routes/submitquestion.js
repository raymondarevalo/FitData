var data = require("../data.json");
var jsonfile = require('jsonfile');
var file = "data.json";
var url = require('url');

exports.addFriend = function(req, res) {
  /* current amount of questions */
  //var index = data.user.personalquestions.length;
  var length = data.researchquestions.length;
  //data.user.personalquestions[index] = req.query;

  /* Need to submit question */
  var newArray = {
    "status" : null,
    "question": "",
    "subquestions":[],
    "category": "",
    "researcher": "no",
    "photo1": "img/c1.png",
    "photo2": "img/c2.png",
    "name": "",
    "index": ""
  };

  var index = 0;

  for (var key in req.query) {
    if (req.query.hasOwnProperty(key)) {
      console.log(key + " -> " + req.query[key]);
      if( key == "question0"){
        newArray.question = req.query[key];

      }
      else if (key == "categories") {
        newArray.category = req.query[key];
      }
      else if (key == "name") {
        newArray.name = req.query[key];
      }
      else {
        console.log("Does not enter subquestions");
        newArray.subquestions.push({"question":req.query[key], "index": newArray.subquestions.length});
      }
    }
    ++index;
  }

  newArray.index = length;

  data.researchquestions[length]= newArray;

  /*
    status
    question
    subquestions
      question
      index
    photo1
    photo2
    category
    researcher
    name
    index
  */


  jsonfile.writeFile(file, data, {spaces:2}, function (err) {
    if(err) {
      console.log(err);
    }
    console.log("Was saved");
  });

  res.render('index');
}
