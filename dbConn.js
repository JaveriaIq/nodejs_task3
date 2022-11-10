const Pool = require('pg').Pool
const pool = new Pool({
    user:'khuiuqktlxvzll',
    host:'ec2-3-230-122-20.compute-1.amazonaws.com',
    database: 'd4ff720r6s9v9u',
    password:'774f6a3ed43faaf6a70dc66bd108da230306d5611add530101a769af06a81161',
    port:5432,
    ssl : {
        rejectUnauthorized:false,
    }
});
module.exports = pool;

