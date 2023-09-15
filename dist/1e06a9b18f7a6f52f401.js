import { hideContent } from "../src/components/hideContent/hideContent.js";
import { aboutUs } from "../src/components/about-us/about-us.js";
import { applications } from "../src/components/applications/applications.js";
import { technology } from "../src/components/technology/technology.js";
import { sustainability } from "../src/components/sustainability/sustainability.js";

// load for default
hideContent();
applications();
$(function () {
  //Handleclick in navbar 
  var firstMenuItem = $("[data-index='1']"); // applications
  var secondMenuItem = $("[data-index='2']"); // about-us 
  var thirdMenuItem = $("[data-index='3']"); // technology
  var fourthMenuItem = $("[data-index='4']"); // sustainability

  $(firstMenuItem).on("click", function (event) {
    event.preventDefault();
    hideContent();
    applications();
  });
  $(secondMenuItem).on("click", function (event) {
    event.preventDefault();
    hideContent();
    aboutUs();
  });
  $(thirdMenuItem).on("click", function (event) {
    event.preventDefault();
    hideContent();
    technology();
  });
  $(fourthMenuItem).on("click", function (event) {
    event.preventDefault();
    hideContent();
    sustainability();
  });
});