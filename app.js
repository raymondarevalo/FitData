
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');



var index = require('./routes/index');
var askquestion = require('./routes/askquestion');
var choosequestion = require('./routes/choosequestion');
var answerquestion = require('./routes/answerquestion');
var resume = require('./routes/resume');
var resumeanswer = require('./routes/resumeanswer');
var resumequestion = require('./routes/resumequestion');
var previouscontribution = require('./routes/previouscontribution');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);

app.get('/askquestion', askquestion.view);

/* choose question */
app.get('/choosequestion', choosequestion.view);
/* answer question */
app.get('/answerquestion', answerquestion.view);
/* Resume */
app.get('/resume', resume.view);
/* Resume answer */
app.get('/resumeanswer', resumeanswer.view);
/* Resume question */
app.get('/resumequestion', resumequestion.view);
/* Previous */
app.get('/previouscontribution', previouscontribution.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
