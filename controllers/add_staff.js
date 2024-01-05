const db = require('../db/conn')

/*INSERT INTO IT_PROBLEMS (PROBLEM_ID, STAFF_ID, DEVICE_ID, TIME, DONE, DESCRIPTION)
VALUES
(4, 1, 1, SYSDATE, 1, 'hello'););*/

async function add_staff(id, fname, l_name, username , password , department , salary , age , shift, phone ) {
    const sqlQuery = `INSERT INTO staff (staff_id, f_name, l_name, user_name, password, department , salary, age , shift , phone_number, hire_date)
    VALUES
    (${id}, '${fname}', '${l_name}' ,'${username}' , '${password}', '${department}', ${salary}, ${age} , ${shift} , ${phone}, SYSDATE)`;

try {
    const result = await db.executeQuery(sqlQuery,  {autoCommit : true} );
    console.log(result);
    return result;
} catch (error) {
    console.error('Error in web request: ', error);
    throw error;
}
}

module.exports = add_staff;

