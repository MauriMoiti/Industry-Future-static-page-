import { hideContent } from "../../src/components/hideContent/hideContent.js"
import { aboutUs } from "../../src/components/about-us/about-us.js";

export function footerButtonContactMe() {
    const buttonContactMe = "#buttonContactMe-ul-footer";

    $("footer").on("click", buttonContactMe, function() {
        hideContent();
        aboutUs();
        setTimeout(() => {
            const formContactMe = $(".container-form-contact");
            // offset() returns an object that contains the positions 'top' and 'left' of the element's scroll.  
            const formContactMePosition = formContactMe.offset();
            $("html, body").animate({
                scrollTop: formContactMePosition.top
            }, 1000);
        }, 1000)
    });
}