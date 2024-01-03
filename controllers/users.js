const db = require('../db/conn')

async function get_user_by_id(id) {
    const sqlQuery = `SELECT * FROM staff WHERE staff_id = ${id}`;
    try {
        const result = await db.executeQuery(sqlQuery);
        console.log(result)
        return result;
    } catch (error) {
        console.error('Error in web request: ', error);
    }
}


module.exports = get_user_by_id;


