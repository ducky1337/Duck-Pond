// Create a request variable and assign a new XMLHttpRequest object to it.
//var http = require("http");
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
//request.open('GET', 'https://api.ethermine.org/miner/:11699208e7524ad94a5cf2521ac9dc86d3e96632/worker:minerX/currentStats', true);

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)

if (request.status >=200 && request.status < 400){
    data.forEach(miner => {
    const card = document.createElement('div');
    card.setAttribute('class','card');

    const h1 = document.createElement('h1');
    h1.textContent = miner.start;

    const p = document.createElement('p');
    miner.description = miner.description.substring(0,100);
    p.textContent = '${miner.description}...';

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
        
    });
}


  }


// Send request
request.send();