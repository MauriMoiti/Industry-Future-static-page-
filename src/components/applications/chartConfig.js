document.addEventListener('DOMContentLoaded', function() {
    const ctx =  $("#myChart")
    
    this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['Automotive', 'Food', 'Pharmaceutical', 'Plastics', 'Construction'],
        datasets: [{
            label: 'Adoption of Robotic Arms in 2021 (%)',
            data: [90, 60, 65, 55, 25],
            borderWidth: 1
        }]
        },
        options: {
            responsive: true,
            maintainAspectRatios: false,
            scales: {
                y: {
                    beginAtZero: true
                    }   
                }
            }
        });
    });
    this.chart.render()