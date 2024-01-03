const db = require('../db/conn')

async function get() {
    const sqlQuery = `SELECT * FROM devices`;
    try {
        const result = await db.executeQuery(sqlQuery);
        console.log(result)
        return result;
    } catch (error) {
        console.error('Error in web request: ', error);
    }
}


module.exports = get;


