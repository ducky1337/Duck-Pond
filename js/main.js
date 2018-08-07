const CHART = document.getElementById("lineChart");
console.log(CHART);


let lineChart=new Chart(CHART, {
    type: 'line',
    data:  {
        labels: ["January","Feb","fuck","ducks","douche"],
        datasets:[
            {
                label: "MY DATA SET",

                data: [54,24,43,67,23],
            }
        ]
    }
});