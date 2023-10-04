
const applications = () => {
        $("main").load('../src/components/applications/applications.html', () => {
            setTimeout(() => {
            $("main").append($("<div>").load('../src/components/applications/chart-applications.html', () => {
                initializeChart()
            }));
        }, 500)
        }).show()
    }


export { applications }; 