const db = require('../db/conn')

async function get_staff(id) {
    const sqlQuery = `select staff_id , f_name , l_name , salary FROM staff WHERE staff_id = ${id} `;
    try {
        const result = await db.executeQuery(sqlQuery);
        console.log(result)
        return result;
    } catch (error) {
        console.error('Error in web request: ', error);
    }
}

/* UPDATE staff
    SET f_name = :newFirstName, l_name = :newLastName, salary = :newSalary
    WHERE staff_id = :id */


    async function update_staff(id , fname , lname , salary) {
        const sqlQuery = `UPDATE staff
        SET f_name = '${fname}', l_name = '${lname}', salary = ${salary}
        WHERE staff_id = ${id}`;
        try {
            const result = await db.executeQuery(sqlQuery);
            console.log(result)
            return result;
        } catch (error) {
            console.error('Error in web request: ', error);
        }
    }


module.exports = {get_staff, update_staff};


