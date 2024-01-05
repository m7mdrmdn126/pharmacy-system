const db = require('../db/conn')

async function del_staff(id) {
    const sqlQuery = `DELETE FROM staff WHERE staff_id = ${id} `;
    try {
        const result = await db.executeQuery(sqlQuery);
        console.log(result)
        return result;
    } catch (error) {
        console.error('Error in web request: ', error);
    }
}


module.exports = del_staff;


