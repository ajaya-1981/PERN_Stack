const Pool =  require("pg").Pool;

const pool = new Pool({
    user: "akshay",
    password: "akshay@99",
    host: "10.0.50.65",
    port: 5432,
    database : "glassbox"
});

module.exports = pool;