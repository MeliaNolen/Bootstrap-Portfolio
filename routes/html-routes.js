var path = require("path");

module.exports = function(app) {
    app.get("/", function(req,res) {
       res.render("index");
    })

    app.get("/portfolio", function(req,res) { 
        res.render("portfolio");
    })   
    
    app.get("/contact", function(req,res) { 
        res.render("contact");
    }) 
};
