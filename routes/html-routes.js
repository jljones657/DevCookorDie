// Dependencies
// =============================================================
var express = require('express');
let db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/recipes", function(req, res) {
    res.render('index')
  });


};



  // // index route loads view.html (This code actually works, so keeping it around for the moment)
  // app.get("/", function(req, res) {
  //   db.Recipe.findAll({}).then(function (dbRecipe) {
  //     let hbsObject = {
  //       recipes: dbRecipe
  //     };
  //     console.log('HTML Routes - hbsObject', JSON.stringify(hbsObject))
  //     res.render("index", hbsObject)
  //   })
  // });