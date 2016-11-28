//var jsonfile = require('/data.json');
//var file = '/sample.json';




/* Submit and save the data once you click submit */

/*
$("#askquestionForm").on('submit', function(e) {
  // prevent default submit action
  e.preventDefault();

  var serialized = $(this).serializeArray();
  var obj = {};

  $.each(serialized, function() {
    obj[this.name] = this.value;
    console.log("never enters here");
  });


  var json = JSON.stringify(obj);
  console.log(json);

  console.log("Inside of the submit function");

  //jsonfile.writeFileSync(file, obj);
  //console.log(jsonfile);
  console.log("After writeFileSync <--");
});

*/

/* Adds sub research question textbox to form */
function addSRQ () {
  var count = $('#askquestionForm').children().length - 8;

  /* create a new div */
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "form-group");

  /* create a new label */
  var newLabel = document.createElement("label");
  newLabel.innerHTML = "Survey question #" + count.toString();
  newDiv.appendChild(newLabel);


  /* create a new textarea */
  var newTextBox = document.createElement("textarea");
  var newTextBoxId = "question" + count.toString();
  newTextBox.setAttribute("name", newTextBoxId);
  newTextBox.setAttribute("class", "form-control");
  newTextBox.setAttribute("row", "5");
  newDiv.appendChild(newTextBox);

  //$("#askquestionForm").append(newDiv);
  $(newDiv).insertBefore( "#SRQButton" );

  /* Make submit viewable */
  document.getElementById('asksubmit').style.display = 'inline';

  document.getElementById('submust').style.display = 'none';



  console.log("stop");


}
