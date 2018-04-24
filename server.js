var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;
var app = express();

// Serve static server for content in public directory
app.use(express.static("public"));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("App now listening at http://localhost:" + PORT);
});