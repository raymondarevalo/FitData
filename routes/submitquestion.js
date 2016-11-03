var data = require("../data.json");
var jsonfile = require('jsonfile');
var file = "data.json";
var url = require('url');

exports.addFriend = function(req, res) {
  /* current amount of questions */
  var index = data.user.personalquestions.length;

  data.user.personalquestions[index] = req.query;

  jsonfile.writeFile(file, data, {spaces:2}, function (err) {
    if(err) {
      console.log(err);
    }
    console.log("Was saved");
  });

  res.render('index');
}
