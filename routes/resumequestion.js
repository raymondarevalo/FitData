var data = require("../data.json");

exports.view = function(req, res){
  console.log("---------- Inside of resume question -------- ");

  var arrayindex = parseInt(req.query["arrayindex"]);
  var newArray = data.user.contributions[arrayindex];
  res.render('resumequestion', {responses: newArray});
};
