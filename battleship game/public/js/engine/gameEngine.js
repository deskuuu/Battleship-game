//import {} from '';
class GameEngine {
        constructor() {
        if (!GameEngine.instance) {
            GameEngine.instance = this;
        }

        return GameEngine.instance;
    }



    getDashboardParameters() {
        $("div").textContent= "5";
         console.log("fdfd");
    }

    createDashboard() {

    }

    randomPasteShip() {

    }

    start() {
        var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end();
}).listen(8080);

getDashboardParameters();
    }
}

const instance = new GameEngine();
Object.freeze(instance);



export { instance };