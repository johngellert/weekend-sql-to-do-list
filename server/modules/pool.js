// setting up pool configuration
const pg = require('pg'); // import postgres module
const Pool = pg.Pool; // Pool is a constructor for a class. creating a pool of connections
const config = {
    database: "todo_list",
    host: "localhost",
    port: 5432,
};

// declare new pool configuration
const pool = new Pool(config);

// export pool
module.exports = pool;