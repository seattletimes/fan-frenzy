//Use CommonJS style via browserify to load other modules

var Share = require("share");

//Share button
var share = window.share = new Share(".share", {
  ui: {
    flyout: "bottom center"
  }
});