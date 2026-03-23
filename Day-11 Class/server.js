const http = require("http");

const server = http.createServer((req, res) => {
  res.end(
    JSON.stringify({
      data: { name: "sai", role: "developer", salary: 50000 },
    }),
  );
});
server.listen(4000, () => {
  console.log("Server running on Port 4000");
});
