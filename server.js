const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const a1 = Math.ceil(Math.random() * 5);

  var hitCellCoordinates = [];

  for (var i = 0; i < Math.ceil(Math.random() * 20); i++) {
    let newCoord;
    do {
      newCoord = {
        row: Math.ceil(Math.random() * 9),
        col: Math.ceil(Math.random() * 9),
      };
    } while (
      hitCellCoordinates.some(
        (coord) => coord.row === newCoord.row && coord.col === newCoord.col
      )
    );

    hitCellCoordinates.push(newCoord);
  }

  const a2 = hitCellCoordinates.length;

  const a6 = hitCellCoordinates;

  const a3 = Math.ceil(Math.random() * 3);

  const a4 = Math.ceil(Math.random() * 100);

  const a5 = "Batman";

  const ansArr = [a1, a2, a3, a4, a5, a6];

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(ansArr));
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
