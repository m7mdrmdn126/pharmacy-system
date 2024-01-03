const db = require('../db/conn')

async function get() {
    const sqlQuery = `SELECT STAFF_ID , F_NAME , L_NAME , USER_NAME , DEPARTMENT ,SALARY , AGE , SHIFT , PHONE_NUMBER FROM staff`;
    try {
        const result = await db.executeQuery(sqlQuery);
        console.log(result)
        return result;
    } catch (error) {
        console.error('Error in web request: ', error);
    }
}


async function del(id) {
    const sqlQuery = `delete from staff where id = ${id}`;
    try {
        const result = await db.executeQuery(sqlQuery);
        console.log(result)
        return result;
    } catch (error) {
        console.error('Error in web request: ', error);
    }
}



module.exports = {get , del};


