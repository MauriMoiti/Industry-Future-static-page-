import { hideContent } from "../../src/components/hideContent/hideContent.js"
import { applications } from "../../src/components/applications/applications.js";
import { aboutUs } from "../../src/components/about-us/about-us.js";
import { technology } from "../../src/components/technology/technology.js";
import { sustainability } from "../../src/components/sustainability/sustainability.js";

export function handleClickNavBar() {
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
}