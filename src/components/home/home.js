// load for default: home

const home = () => {
    $(".home-main").load("../src/components/home/home-main.html").show();
    $(".home-main-contact").load("../src/components/home/home-main-contact.html").show();
    $(".home-main-article").load("../src/components/home/home-main-article.html").show();
    };
const hideHome = () => {
        $(".home-main").load("../src/components/home/home-main.html").hide();
        $(".home-main-contact").load("../src/components/home/home-main-contact.html").hide();
        $(".home-main-article").load("../src/components/home/home-main-article.html").hide();
        };

export {home, hideHome};
