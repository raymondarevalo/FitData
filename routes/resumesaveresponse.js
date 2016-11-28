var data = require("../data.json");
var file = "data.json";
var jsonfile = require('jsonfile');

exports.view = function(req, res){
  console.log("---------- Inside of save response -------- ");

  var newArray = {
    "currentstatus": null,
    "question": "",
    "subquestions":[],
    "breakdown":{},
    "selfinfo":{},
    "sendto":[],
    "comments":"",
    "identity":"",
    "category":"",
    "researcher":"",
    "name":"",
    "index": null,
    "arrayindex": null,
    "photo1": null,
    "photo2": null
  };
  var index = 0;

  for (var key in req.query) {
    if (req.query.hasOwnProperty(key)) {

      switch(key) {
        case "question":
        newArray.question = req.query[key];
        break;

        case "subquestions":
        var count = 0;
        while(count < req.query[key].length){
          //newArray.subquestions[count]['question'] = req.query[key][count];
          newArray.subquestions.push({"question":req.query[key][count], "reply": req.query["reply"][count]});
          ++count;
        }
        break;

        case "carbs":
        newArray.breakdown['carbs'] = req.query[key];
        newArray.breakdown['carbstype'] = req.query['carbstype'];
        break;
        case "protein":
        newArray.breakdown['protein'] = req.query[key];
        newArray.breakdown['proteintype'] = req.query['proteintype'];
        break;
        case "saturated":
        newArray.breakdown['saturated']=req.query[key];
        newArray.breakdown['saturatedtype'] = req.query['saturatedtype']
        break;
        case "trans":
        newArray.breakdown['trans'] = req.query[key];
        newArray.breakdown['transtype'] = req.query['transtype'];
        break;
        case "sugars":
        newArray.breakdown['sugars'] = req.query[key];
        newArray.breakdown['sugarstype'] = req.query['sugarstype'];
        break;

        case "height":
        newArray.selfinfo['height'] = req.query[key];
        newArray.selfinfo['heighttype'] = req.query['heighttype'];
        break;
        case "weight":
        newArray.selfinfo['weight'] = req.query[key];
        newArray.selfinfo['weighttype'] = req.query["weighttype"];
        break;
        case "age":
        newArray.selfinfo['age'] = req.query[key];
        break;
        case "ethnicity":
        newArray.selfinfo['ethnicity'] = req.query[key];
        break;

        case "sendto":
        var count = 0;
        if(Array.isArray(req.query[key])){
          while(count < req.query[key].length){
            newArray.sendto[count]= req.query[key][count];
            ++count;
          }
        }
        else {
          newArray.sendto = req.query[key];
        }

        break;

        case "comments":
        newArray.comments = req.query[key];
        break;

        case "identity":
        newArray.identity = req.query[key];
        break;

        case "category":
        newArray.category = req.query[key];
        break;

        case "researcher":
        newArray.researcher = req.query[key];
        break;

        case "name":
        newArray.name = req.query[key];
        break;

        case "index":
        newArray.index = req.query[key];
        break;

      }
}
++index;
}

console.log("-----------------------");
console.log(newArray);


if(req.query["submit"] == "save"){
  newArray.currentstatus = "done";
}
else if(req.query["submit"] =="savequit") {
  newArray.currentstatus = null;
}


/* current amount of questions */
var index = req.query["arrayindex"]
newArray.arrayindex = index;
newArray.photo1 = data.researchquestions[req.query["index"]]["photo1"];
newArray.photo2 = data.researchquestions[req.query["index"]]["photo2"];
data.user.contributions[index] = newArray;

jsonfile.writeFile(file, data, {spaces:2}, function (err) {
  if(err) {
    console.log(err);
  }
  console.log("Was saved");
});
  res.render('index');
};
