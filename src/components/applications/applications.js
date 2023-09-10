
const applications = () => {
    $("main").load("../src/components/applications/applications.html", 
    () => {
        $("main").append($("<div>").load("../src/components/applications/chart-applications.html", () => {
            initializeChart() }));
    }).show()

    $(".home-main-contact").load("../src/components/home/home-main-contact.html").hide();
    $(".home-main-article").load("../src/components/home/home-main-article.html").hide();
    }

export {applications}; 