const net = require("net");

// establishes a connection with the game server
const connect = function() {

  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    //console.log("Name: TBS");

    conn.write("Name: TBS");

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