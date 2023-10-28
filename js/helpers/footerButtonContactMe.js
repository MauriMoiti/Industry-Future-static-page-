import { hideContent } from "../../src/components/hideContent/hideContent.js"
import { aboutUs } from "../../src/components/about-us/about-us.js";

export function footerButtonContactMe() {
    const buttonContactMe = "#buttonContactMe-ul-footer";

    $("footer").on("click", buttonContactMe, function() {
        hideContent();
        aboutUs();
        setTimeout(() => {
            const formContactMe = $(".container-form-contact");
            const formContactMePosition = formContactMe.offset();
            $("html, body").animate({
                scrollTop: formContactMePosition.top
            }, 1000);
        }, 1000)
    });
}