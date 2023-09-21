// main.js

import { header} from '../src/components/header/header.js';
import { footer } from '../src/components/footer/footer.js';
import { hideContent } from "../src/components/hideContent/hideContent.js"
import { applications } from "../src/components/applications/applications.js";
import { aboutUs } from "../src/components/about-us/about-us.js";
import { technology } from "../src/components/technology/technology.js";
import { sustainability } from "../src/components/sustainability/sustainability.js";

// load for default
header();
hideContent();
applications();
footer();

$(function () {

    $(".css-a-link-menu-header").on("click", function(event) {
        // Remueve aria-current de todos los enlaces
        $(".css-a-link-menu-header").removeAttr("aria-current");
        
        // Establece el enlace clicado como la página actual
        $(this).attr("aria-current", "page");
    });
    

    //Handleclick in navbar 
    const firstMenuItem = $("[data-index='1']"); // applications
    const secondMenuItem = $("[data-index='2']"); // about-us 
    const thirdMenuItem = $("[data-index='3']"); // technology
    const fourthMenuItem = $("[data-index='4']"); // sustainability

    
        $(firstMenuItem).on("click", function(event) {
            event.preventDefault();
            hideContent()
            applications();
        });
        $(secondMenuItem).on("click", function(event) {
            console.log(true)
            event.preventDefault();
            hideContent();
            aboutUs();
        });
        $(thirdMenuItem).on("click", function(event) {
            event.preventDefault();
            hideContent();
            technology();
        });
        $(fourthMenuItem).on("click", function(event) {
            event.preventDefault();
            hideContent();
            sustainability();  
        });
})