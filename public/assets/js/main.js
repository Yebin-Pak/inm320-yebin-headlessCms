
// line chart

window.onload = function () {
    const ctx = document.getElementById("line-chart").getContext("2d");

    // background gradient
    const gradient = ctx.createLinearGradient(0, 0, 700, 0);
    gradient.addColorStop(0.0147, "rgba(55, 81, 255, 0.15)");
    gradient.addColorStop(0.9674, "rgba(55, 81, 255, 0)");

    const xValues = Array.from({ length: 23 }, (_, i) => i);
    
    new Chart("line-chart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [
                {
                    label: "Today",
                    data: [15, 22, 27, 29, 29, 28.5, 32.5, 44, 50.5, 39, 26, 19, 18, 24, 36, 44, 48, 46.5, 41.5, 38],
                    borderColor: "#3751FF",
                    borderWidth: 2,
                    backgroundColor: gradient, // use the gradient here
                    fill: true,
                    tension: 0.4,

                    pointBackgroundColor: "transparent",
                    pointBorderColor: "transparent",
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: "white",
                    pointHoverBorderColor: "#3751FF",
                    pointHoverBorderWidth: 6
                },
                {
                    label: "Yesterday",
                    data: [33, 34, 32, 26.5, 23, 23, 26, 31.5, 34, 34, 31, 25, 19, 16.5, 22, 36, 36, 29, 31, 35],
                    borderColor: "#DFE0EB",
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,

                    pointRadius: 0,
                    pointHoverRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        },
        
    });
};


