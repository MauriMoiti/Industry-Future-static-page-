import { home, hideHome } from "../src/components/home/home.js"
import { aboutUs } from "../src/components/about-us/about-us.js";
import { applications } from "../src/components/applications/applications.js";
import { technology } from "../src/components/technology/technology.js";
import { sustainability } from "../src/components/sustainability/sustainability.js";

// load for default
home()

$(function () {

    //Handleclick in navbar 
    const firstMenuItem = $("[data-index='1']"); // home
    const secondMenuItem = $("[data-index='2']"); // about-us 
    const thirdMenuItem = $("[data-index='3']"); // applications
    const fourthMenuItem = $("[data-index='4']"); // technology
    const fifthMenuItem  = $("[data-index='5']"); // sustainability
    
        $(firstMenuItem).on("click", function(event) {
            event.preventDefault();
            home();
        });
        $(secondMenuItem).on("click", function(event) {
            event.preventDefault();
            hideHome();
            aboutUs();
        });
        $(thirdMenuItem).on("click", function(event) {
            event.preventDefault();
            hideHome()
            applications();  
        });
        $(fourthMenuItem).on("click", function(event) {
            event.preventDefault();
            hideHome();
            technology();  

        });
        $(fifthMenuItem).on("click", function(event) {
            event.preventDefault();
            hideHome();
            sustainability();
        });
})

// .on("click", fn). Instead of .click() use .trigger("click").