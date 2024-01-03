const db = require('../db/conn')

/*INSERT INTO IT_PROBLEMS (PROBLEM_ID, STAFF_ID, DEVICE_ID, TIME, DONE, DESCRIPTION)
VALUES
(4, 1, 1, SYSDATE, 1, 'hello'););*/

async function problem(id, staff, device, describe) {
    const sqlQuery = `INSERT INTO IT_PROBLEMS (PROBLEM_ID, STAFF_ID, DEVICE_ID, TIME, DONE, DESCRIPTION)
    VALUES
    (${id}, ${staff}, ${device}, SYSDATE, 0, '${describe}' )`;

try {
    const result = await db.executeQuery(sqlQuery,  {autoCommit : true} );
    console.log(result);
    return result;
} catch (error) {
    console.error('Error in web request: ', error);
    throw error;
}
}

module.exports = problem;


