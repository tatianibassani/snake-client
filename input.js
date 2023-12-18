let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  
  return stdin;
};

const MOVES = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  q: "Say: go long",
  e: "Say: snake bite",
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
  connection.write(MOVES.w);
}

if (key === "a") {
  connection.write(MOVES.a);
}

if (key === "s") {
  connection.write(MOVES.s);
}

if (key === "d") {
  connection.write(MOVES.d);
}

if (key === "q") {
  connection.write(MOVES.q);
}

if (key === "e") {
  connection.write(MOVES.e);
}
};

//setupInput();

module.exports = setupInput;
