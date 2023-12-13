const connect = require("./client");
const setupInput = require("./input");

// console.log("Connecting ...");
const connection = connect();
setupInput(connection);

//const { connect } = require('./client')
//const { connect } = require('./input')

/*const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("you ded cuz you idled");

  });

  return conn;
};*/

// console.log("Connecting ...");
// connect;

// setup interface to handle user input from stdin

/*const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

};

setupInput();*/
