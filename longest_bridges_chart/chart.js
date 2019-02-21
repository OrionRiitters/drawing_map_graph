let canvas = document.getElementById('bridge-chart');
var ctx = canvas.getContext('2d');

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Verrazano-Narrows Bridge",
                 "Golden Gate Bridge",
                 "Mackinac Bridge",
                 "George Washington Bridge",
                 "Tacoma narrows Bridge"],
        datasets: [{
            label: 'Length in Meters',
            data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],
            backgroundColor: ["grey", "teal", "pink", "beige", "maroon"]
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
