import '/src/components/applications/applications.css';
const applications = () => {
    $("main").load("../src/components/applications/applications.html", () => {
        $("main").append($("<div>").load("../src/components/applications/chart-applications.html", () => {
            initializeChart()
        }));
    }).show()
}

export { applications }; 