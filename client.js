const net = require("net");
const { IP, PORT } = require("./constants");
//const readLine = require("readLine");

// establishes a connection with the game server
const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    //console.log("Name: TBS");

    conn.write("Name: TBS");
    // conn.write("Say: Hi");

    // rl.on("line"), (line) => {
    //   clearInterval.write(line);
    // };

    // clearInterval.on("data", (data) => {
    //   console.log(`server says: ${data}`);
    // })

    // setTimeout(() => conn.write("Move: up"), 100);
    // setTimeout(() => conn.write("Move: up"), 200);
    // setTimeout(() => conn.write("Move: up"), 300);
    // setTimeout(() => conn.write("Move: up"), 400);
    // setTimeout(() => conn.write("Move: right"), 500);
    // setTimeout(() => conn.write("Move: right"), 600);
    // setTimeout(() => conn.write("Move: up"), 700);
    //console.log("you ded cuz you idled");
  });

  return conn;
};

//console.log("Connecting ...");
//connect();

module.exports = connect;




