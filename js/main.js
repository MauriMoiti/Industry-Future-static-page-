import '../src/assets/css/main.scss';
import '../src/assets/css/normalize.scss';
import '../src/assets/css/responsive.scss';
import '../src/assets/css/responsive_ipad.scss';
import '../src/components/applications/applications.scss';
import '../src/components/applications/applications-responsive.scss';
import '../src/components/sustainability/sustainability.scss';
import '../src/components/sustainability/sustainability-responsive.scss';
import '../src/components/technology/technology.scss';
import '../src/components/technology/technology-responsive.scss';
import '../src/components/about-us/about-us.scss';
import '../src/components/about-us/aboutUs-responsive.scss';

import $ from 'jquery';
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

($(() => {

    //Handleclick in navbar 
    const firstMenuItem = $("[data-index='1']"); // applications
    const secondMenuItem = $("[data-index='2']"); // about-us 
    const thirdMenuItem = $("[data-index='3']"); // technology
    const fourthMenuItem = $("[data-index='4']"); // sustainability
    console.log($("[data-index='1']").length);  
    console.log($("[data-index='2']").length);  

    if ($("[data-index='1']").length === 0) {
        location.reload(true);  
    }
    
        $("body").on("click", "[data-index='1']", function() {
            hideContent()
            applications();
        });
        $("body").on("click", "[data-index='2']", function() {
            hideContent();
            aboutUs();
        });
        $("body").on("click", "[data-index='3']", function() {
            hideContent();
            technology();
        });
        $("body").on("click","[data-index='4']", function() {
            hideContent();
            sustainability();  
        });
    }))