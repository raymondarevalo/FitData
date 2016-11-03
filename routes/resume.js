var data = require("../data.json");
exports.view = function(req, res){
  console.log("---------- Inside of resume -------- ");
  res.render('resume', {responses: data.user.contributions});
};
