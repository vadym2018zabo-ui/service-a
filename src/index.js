import http from "node:http";

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ ok: true, service: "service-a" }));
});

server.listen(port, () => {
  console.log(`service-a listening on ${port}`);
});